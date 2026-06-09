#!/usr/bin/env node
/**
 * OpenAccountants skills repo patch — sync skipped GLOBAL / meta skills
 *
 * Run from the root of openaccountants/openaccountants:
 *
 *   node scripts/patch-global-sync.mjs
 *
 * What it does:
 * 1. Adds `jurisdiction: GLOBAL` to 26 foundation / integration / vertical skills
 * 2. Updates manifest.json jurisdiction for those paths
 * 3. Fixes `references.md` slug collisions (unique name + jurisdiction per country)
 *
 * Two-tier quality note: references.md manifest entries added by this script
 * are tagged `quality: "research-verified"`. The authoritative manifest is
 * regenerated afterwards by scripts/build-skills-manifest.py which derives
 * quality from each skill's `verified_by` frontmatter — so this label is
 * effectively a placeholder.
 */

import fs from "fs";
import path from "path";

const REPO_ROOT = process.cwd();
const SKILLS_DIR = path.join(REPO_ROOT, "skills");
const MANIFEST_PATH = path.join(SKILLS_DIR, "manifest.json");

const GLOBAL_SYNC_FILES = [
  "foundation/bookkeeping-workflow-base.md",
  "foundation/company-formation-workflow-base.md",
  "foundation/cross-border-workflow-base.md",
  "foundation/crypto-tax-workflow-base.md",
  "foundation/einvoice-workflow-base.md",
  "foundation/financial-statements-workflow-base.md",
  "foundation/payroll-workflow-base.md",
  "foundation/transfer-pricing-workflow-base.md",
  "foundation/vat-workflow-base.md",
  "foundation/workflow-base.md",
  "integrations/amazon-seller-integration.md",
  "integrations/freeagent-integration.md",
  "integrations/paypal-integration.md",
  "integrations/quickbooks-integration.md",
  "integrations/revolut-business-integration.md",
  "integrations/sage-integration.md",
  "integrations/shopify-integration.md",
  "integrations/stripe-integration.md",
  "integrations/wise-integration.md",
  "integrations/xero-integration.md",
  "verticals/consultant-professional.md",
  "verticals/content-creator.md",
  "verticals/ecommerce-seller.md",
  "verticals/freelance-developer.md",
  "verticals/medical-professional.md",
  "verticals/property-investor.md",
];

/** Folder name → ISO jurisdiction for references.md files */
const PATH_COUNTRY_TO_ISO = {
  argentina: "AR",
  australia: "AU",
  bangladesh: "BD",
  brazil: "BR",
  canada: "CA",
  chile: "CL",
  china: "CN",
  "czech-republic": "CZ",
  denmark: "DK",
  france: "FR",
  germany: "DE",
  ghana: "GH",
  india: "IN",
  indonesia: "ID",
  israel: "IL",
  italy: "IT",
  japan: "JP",
  lithuania: "LT",
  mexico: "MX",
  netherlands: "NL",
  "new-zealand": "NZ",
  nigeria: "NG",
  poland: "PL",
  romania: "RO",
  "saudi-arabia": "SA",
  slovakia: "SK",
  "south-korea": "KR",
  spain: "ES",
  sweden: "SE",
  thailand: "TH",
  turkey: "TR",
  uk: "GB",
  vietnam: "VN",
};

function ensureJurisdictionInFrontmatter(filePath, jurisdiction = "GLOBAL") {
  const rel = path.relative(SKILLS_DIR, filePath).replace(/\\/g, "/");
  let raw = fs.readFileSync(filePath, "utf8");

  if (!raw.startsWith("---")) {
    console.log(`  SKIP frontmatter (no YAML): ${rel}`);
    return false;
  }

  const end = raw.indexOf("---", 3);
  if (end === -1) {
    console.log(`  SKIP frontmatter (malformed): ${rel}`);
    return false;
  }

  const fmBlock = raw.slice(3, end);
  if (/^jurisdiction:\s*\S+/m.test(fmBlock)) {
    console.log(`  OK frontmatter already has jurisdiction: ${rel}`);
    return false;
  }

  const updatedFm = fmBlock.trimEnd() + `\njurisdiction: ${jurisdiction}\n`;
  raw = `---${updatedFm}---${raw.slice(end + 3)}`;
  fs.writeFileSync(filePath, raw, "utf8");
  console.log(`  PATCH frontmatter jurisdiction=${jurisdiction}: ${rel}`);
  return true;
}

function patchManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error("manifest.json not found at", MANIFEST_PATH);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  let manifestPatched = 0;

  for (const relPath of GLOBAL_SYNC_FILES) {
    const entry = manifest.skills?.find((s) => s.path === relPath);
    if (!entry) {
      console.log(`  WARN no manifest entry: ${relPath}`);
      continue;
    }
    if (entry.jurisdiction === "GLOBAL") continue;
    entry.jurisdiction = "GLOBAL";
    manifestPatched++;
    console.log(`  PATCH manifest jurisdiction=GLOBAL: ${relPath}`);
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  return manifestPatched;
}

function referencesSlugFromPath(relPath) {
  if (relPath === "us-states/references.md") {
    return { slug: "us-states-references", jurisdiction: "US" };
  }
  const match = relPath.match(/^international\/([^/]+)\/references\.md$/);
  if (!match) return null;
  const folder = match[1];
  const jurisdiction = PATH_COUNTRY_TO_ISO[folder];
  if (!jurisdiction) return null;
  const slug = `${folder.replace(/-/g, "_")}-references`;
  return { slug, jurisdiction };
}

function patchReferencesFiles() {
  const results = [];

  function walk(dir, relBase = "") {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const rel = relBase ? `${relBase}/${entry.name}` : entry.name;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full, rel);
      else if (entry.name === "references.md") results.push(rel);
    }
  }

  walk(SKILLS_DIR);
  let patched = 0;

  for (const relPath of results) {
    const meta = referencesSlugFromPath(relPath);
    if (!meta) {
      console.log(`  SKIP references (unknown path): ${relPath}`);
      continue;
    }

    const fullPath = path.join(SKILLS_DIR, relPath);
    let raw = fs.readFileSync(fullPath, "utf8");

    if (raw.startsWith("---")) {
      const end = raw.indexOf("---", 3);
      const fmBlock = raw.slice(3, end);
      if (/^name:\s/m.test(fmBlock) && !/^name:\s*references\s*$/m.test(fmBlock)) {
        console.log(`  OK references already named: ${relPath}`);
        continue;
      }
      // Replace generic name or add fields
      let updated = fmBlock;
      if (/^name:\s*references\s*$/m.test(updated)) {
        updated = updated.replace(/^name:\s*references\s*$/m, `name: ${meta.slug}`);
      } else if (!/^name:\s/m.test(updated)) {
        updated = `name: ${meta.slug}\n` + updated;
      }
      if (!/^jurisdiction:\s/m.test(updated)) {
        updated = updated.trimEnd() + `\njurisdiction: ${meta.jurisdiction}\n`;
      }
      raw = `---${updated}---${raw.slice(end + 3)}`;
    } else {
      raw = `---\nname: ${meta.slug}\njurisdiction: ${meta.jurisdiction}\nversion: 1.0\ndescription: Primary source references and related open-source projects for this jurisdiction.\n---\n\n${raw}`;
    }

    fs.writeFileSync(fullPath, raw, "utf8");
    console.log(`  PATCH references slug=${meta.slug} jurisdiction=${meta.jurisdiction}: ${relPath}`);
    patched++;
  }

  return patched;
}

function patchReferencesManifest() {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  let count = 0;

  for (const entry of manifest.skills ?? []) {
    if (!entry.path?.endsWith("references.md")) continue;
    const meta = referencesSlugFromPath(entry.path);
    if (!meta) continue;
    if (entry.id === meta.slug && entry.jurisdiction === meta.jurisdiction) continue;
    entry.id = meta.slug;
    entry.jurisdiction = meta.jurisdiction;
    count++;
    console.log(`  PATCH manifest references: ${entry.path} → id=${meta.slug}`);
  }

  // Add manifest entries for references files that aren't registered yet.
  // NB: this manifest is regenerated immediately after this script runs by
  // scripts/build-skills-manifest.py, which uses the two-tier model
  // (accountant-verified / research-verified). The quality label here is a
  // placeholder consistent with that model.
  const existingPaths = new Set((manifest.skills ?? []).map((s) => s.path));
  function walk(dir, relBase = "") {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const rel = relBase ? `${relBase}/${entry.name}` : entry.name;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full, rel);
      else if (entry.name === "references.md" && !existingPaths.has(rel)) {
        const meta = referencesSlugFromPath(rel);
        if (!meta) continue;
        manifest.skills.push({
          id: meta.slug,
          path: rel,
          jurisdiction: meta.jurisdiction,
          quality: "research-verified",
        });
        count++;
        console.log(`  ADD manifest references: ${rel}`);
      }
    }
  }
  walk(SKILLS_DIR);

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  return count;
}

function main() {
  console.log("\n=== OpenAccountants GLOBAL sync patch ===\n");
  console.log("Repo root:", REPO_ROOT);

  if (!fs.existsSync(SKILLS_DIR)) {
    console.error("Expected skills/ directory at", SKILLS_DIR);
    process.exit(1);
  }

  console.log("\n--- 1. Frontmatter: jurisdiction GLOBAL (26 files) ---");
  let fmPatched = 0;
  for (const rel of GLOBAL_SYNC_FILES) {
    const full = path.join(SKILLS_DIR, rel);
    if (!fs.existsSync(full)) {
      console.log(`  MISSING: ${rel}`);
      continue;
    }
    if (ensureJurisdictionInFrontmatter(full, "GLOBAL")) fmPatched++;
  }

  console.log("\n--- 2. manifest.json: GLOBAL jurisdiction ---");
  const manifestPatched = patchManifest();

  console.log("\n--- 3. references.md slug collision fix ---");
  const refsPatched = patchReferencesFiles();
  const refsManifestPatched = patchReferencesManifest();

  console.log("\n=== Summary ===");
  console.log(`  Frontmatter patched: ${fmPatched}`);
  console.log(`  Manifest GLOBAL entries: ${manifestPatched}`);
  console.log(`  references.md files patched: ${refsPatched}`);
  console.log(`  references manifest entries: ${refsManifestPatched}`);
  console.log("\nNext steps:");
  console.log("  1. python3 scripts/build-skills-manifest.py  # authoritative two-tier manifest");
  console.log("  2. git diff skills/  # review changes");
  console.log("  3. git commit -m 'Add GLOBAL jurisdiction for foundation, integrations, verticals; fix references slugs'");
  console.log("");
}

main();
