#!/usr/bin/env python3
"""
Auto-build skills/manifest.json by scanning every skill file under skills/.

For each .md file (excluding README.md and template files):
- Parse YAML frontmatter
- Extract: name, jurisdiction, category, tax_year, verified_by, depends_on
- Determine quality:
    accountant-verified if frontmatter says so, OR if the skill id is in the
    legacy accountant-verified set
    research-verified otherwise
- Classify obligation (CT / IT / SSC / EST / FW / BT / OTHER) from filename pattern
- Record path, size, line count

Writes skills/manifest.json with two-tier quality labels.

Usage:
    python3 scripts/build-skills-manifest.py
"""

import json
import os
import sys
from datetime import date

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILLS_DIR = os.path.join(REPO_ROOT, "skills")
MANIFEST_PATH = os.path.join(SKILLS_DIR, "manifest.json")

# Skills that are accountant-verified per docs/QUALITY-TIERS.md and CHANGELOG.md.
# Anyone else falls back to research-verified unless their frontmatter
# explicitly names a credentialed reviewer.
LEGACY_ACCOUNTANT_VERIFIED = {
    "malta-vat-return",
    "malta-income-tax",
    "malta-ssc",
    "germany-vat-return",
    "us-sole-prop-bookkeeping",
    "us-schedule-c-and-se-computation",
    "us-ca-freelance-intake",
}

# Files to skip when walking skills/.
SKIP_FILENAMES = {"README.md", "manifest.json"}
SKIP_DIRS_RELATIVE_TO_SKILLS = {"templates"}


def parse_frontmatter(text):
    """Tiny YAML-frontmatter parser. Returns a dict (possibly empty).

    Only handles the subset we actually use: scalar values, simple lists,
    and one-line scalars. Avoids importing PyYAML to keep this stdlib-only.
    """
    if not text.startswith("---"):
        return {}
    lines = text.splitlines()
    if len(lines) < 2:
        return {}
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end = i
            break
    if end is None:
        return {}

    fm = {}
    current_key = None
    current_list = None
    for raw in lines[1:end]:
        if not raw.strip():
            continue
        if raw.startswith("  - ") and current_list is not None:
            current_list.append(raw[4:].strip())
            continue
        if ":" not in raw:
            continue
        key, _, value = raw.partition(":")
        key = key.strip()
        value = value.strip()
        if value == "":
            # Could be a list or a multi-line scalar that follows
            current_key = key
            current_list = []
            fm[key] = current_list
            continue
        if value == ">":
            # Multi-line scalar follow-on lines; we don't need its body
            current_key = key
            current_list = None
            fm[key] = ""
            continue
        # Strip surrounding quotes for simple scalars
        if (value.startswith('"') and value.endswith('"')) or (
            value.startswith("'") and value.endswith("'")
        ):
            value = value[1:-1]
        fm[key] = value
        current_key = key
        current_list = None
    return fm


def classify_obligation(skill_id, frontmatter):
    """Best-effort obligation classifier from filename + category."""
    name = skill_id.lower()
    category = frontmatter.get("category", "").lower()
    if category == "foundation":
        return "FW"  # framework / workflow base
    if category == "pattern":
        return "PAT"
    if category == "vertical":
        return "VERT"
    if category == "integration":
        return "INT"
    if category == "intelligence":
        return "INTEL"
    if category == "orchestrator":
        return "ORCH"
    if category == "cross-border":
        # Cross-border skills get more specific tags below
        pass

    if any(kw in name for kw in ("vat", "-gst", "gst-", "iva", "tva", "btw", "-ust", "sales-tax", "sales-use-tax", "consumption-tax")):
        return "CT"
    if any(kw in name for kw in ("income-tax", "it-", "-pit", "-irpf", "individual-return", "personal-tax")):
        return "IT"
    if any(kw in name for kw in ("ssc", "nic", "cpp-ei", "social-security", "social-contribution", "-ssc")):
        return "SSC"
    if any(kw in name for kw in ("estimated", "instalment", "instalments", "provisional", "advance-tax", "quarterly")):
        return "EST"
    if "bookkeeping" in name:
        return "BT"
    if "payroll" in name:
        return "PAY"
    if "formation" in name:
        return "FORM"
    if "transfer-pricing" in name:
        return "TP"
    if "financial-statements" in name:
        return "FS"
    if "einvoice" in name or "e-invoice" in name:
        return "EINV"
    if "crypto" in name:
        return "CRYPTO"
    if "audit" in name:
        return "AUDIT"
    if "customs" in name or "duties" in name:
        return "CUST"
    if "excise" in name:
        return "EXC"
    if "withholding" in name or "wht" in name:
        return "WHT"
    if "treaty" in name:
        return "TREATY"
    if "pillar-two" in name or "globe" in name:
        return "P2"
    if "wealth" in name:
        return "WT"
    if "inheritance" in name or "estate-gift" in name or "iht" in name:
        return "IHT"
    if "stamp-duty" in name or "stamp_duty" in name:
        return "STAMP"
    if "property-transfer" in name or "rett" in name:
        return "RETT"
    if "controversy" in name or "map-apa" in name:
        return "CTRL"
    if "dst" in name or "digital-services" in name:
        return "DST"
    if "cbam" in name:
        return "CBAM"
    if "fatca" in name or "crs" in name:
        return "AEOI"
    if "saf-t" in name or "ereporting" in name:
        return "SAFT"
    if "patent-box" in name or "ip-box" in name:
        return "IPBOX"
    if "sez" in name or "free-zone" in name:
        return "SEZ"
    if "rd-tax" in name or "research-credit" in name:
        return "RD"
    if "intake" in name:
        return "ORCH"
    if "return-assembly" in name or "assembly" in name:
        return "ORCH"
    if "tax-optimization" in name or "tax-optimisation" in name:
        return "OPT"
    return "OTHER"


def derive_quality(skill_id, frontmatter):
    """Two-tier quality determination."""
    if skill_id in LEGACY_ACCOUNTANT_VERIFIED:
        return "accountant-verified"
    verified_by = str(frontmatter.get("verified_by", "")).strip().lower()
    if verified_by in ("", "pending", "none", "tbd", "null"):
        return "research-verified"
    # If the frontmatter names a real reviewer (not "pending"), treat as accountant-verified.
    return "accountant-verified"


def collect_skills():
    """Walk skills/ and return a list of skill entries sorted by id."""
    entries = []
    for root, dirs, files in os.walk(SKILLS_DIR):
        rel_dir = os.path.relpath(root, SKILLS_DIR)
        if rel_dir == ".":
            top_segment = ""
        else:
            top_segment = rel_dir.split(os.sep)[0]

        # Skip directories we don't want in the manifest
        if top_segment in SKIP_DIRS_RELATIVE_TO_SKILLS:
            dirs[:] = []
            continue

        for filename in files:
            if filename in SKIP_FILENAMES:
                continue
            if not filename.endswith(".md"):
                continue

            full_path = os.path.join(root, filename)
            with open(full_path, "r", encoding="utf-8") as f:
                text = f.read()

            frontmatter = parse_frontmatter(text)

            # Skill id: use the frontmatter `name` field if present, else
            # fall back to the filename stem.
            skill_id = (
                str(frontmatter.get("name", "")).strip()
                or os.path.splitext(filename)[0]
            )

            jurisdiction = str(frontmatter.get("jurisdiction", "")).strip()
            if jurisdiction.upper() in ("GLOBAL", "INTL", "EU-27"):
                jurisdiction_norm = jurisdiction.upper()
            else:
                jurisdiction_norm = jurisdiction.upper() if jurisdiction else ""

            quality = derive_quality(skill_id, frontmatter)
            obligation = classify_obligation(skill_id, frontmatter)

            size_kb = round(os.path.getsize(full_path) / 1024, 1)
            lines = text.count("\n") + (0 if text.endswith("\n") else 1)
            rel_path = os.path.relpath(full_path, SKILLS_DIR).replace(os.sep, "/")

            entries.append({
                "id": skill_id,
                "jurisdiction": jurisdiction_norm,
                "obligation": obligation,
                "quality": quality,
                "category": frontmatter.get("category", "") or "",
                "tax_year": frontmatter.get("tax_year", "") or "",
                "path": rel_path,
                "size_kb": size_kb,
                "lines": lines,
            })

    # De-duplicate on id, preferring the entry with the longest path
    # (so e.g. a sector-specific file beats a less-specific duplicate).
    by_id = {}
    for e in entries:
        existing = by_id.get(e["id"])
        if existing is None or len(e["path"]) > len(existing["path"]):
            by_id[e["id"]] = e

    out = sorted(by_id.values(), key=lambda x: x["id"])
    return out


def main():
    entries = collect_skills()

    from collections import Counter
    by_quality = Counter(e["quality"] for e in entries)
    by_category = Counter(e["category"] or "(unset)" for e in entries)
    by_obligation = Counter(e["obligation"] for e in entries)

    manifest = {
        "version": "2.2",
        "generated": date.today().isoformat(),
        "total_skills": len(entries),
        "quality_breakdown": dict(by_quality),
        "obligation_breakdown": dict(by_obligation),
        "skills": entries,
    }

    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print(f"Manifest written to {os.path.relpath(MANIFEST_PATH, REPO_ROOT)}")
    print(f"  Total skills:          {len(entries)}")
    print(f"  Accountant-verified:   {by_quality.get('accountant-verified', 0)}")
    print(f"  Research-verified:     {by_quality.get('research-verified', 0)}")
    print(f"  Categories: {dict(by_category)}")
    print(f"  Obligations: {dict(by_obligation)}")


if __name__ == "__main__":
    main()
