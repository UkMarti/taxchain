const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Path to your openaccountants-main folder
const OA_ROOT = path.join(__dirname, 'openaccountants-main');
const OUTPUT_FILE = path.join(__dirname, 'taxchain_rules.json');

// Simple frontmatter extractor (YAML between ---\n ... \n---)
function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return {};
  const yaml = match[1];
  const result = {};
  // Very basic YAML parser for key: value pairs (supports strings, numbers, arrays)
  const lines = yaml.split('\n');
  let currentKey = null;
  for (let line of lines) {
    line = line.trim();
    if (line === '') continue;
    if (line.includes(':') && !line.startsWith('-')) {
      const [key, ...rest] = line.split(':');
      currentKey = key.trim();
      let value = rest.join(':').trim();
      if (value === '') continue;
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      // Parse arrays like [a, b]
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''));
      }
      result[currentKey] = value;
    } else if (line.startsWith('-') && currentKey) {
      // array item
      let item = line.slice(1).trim();
      if (item.startsWith('"') && item.endsWith('"')) item = item.slice(1, -1);
      if (!result[currentKey]) result[currentKey] = [];
      result[currentKey].push(item);
    }
  }
  return result;
}

async function main() {
  const rules = {
    jurisdictions: {},
    patterns: {},
    cross_border: {},
    lastUpdated: new Date().toISOString()
  };

  // 1. Parse international crypto-tax skills
  const intlDir = path.join(OA_ROOT, 'skills', 'international');
  const countries = await readdir(intlDir);
  for (const country of countries) {
    const countryPath = path.join(intlDir, country);
    const stat = fs.statSync(countryPath);
    if (!stat.isDirectory()) continue;
    const cryptoFile = path.join(countryPath, `${country}-crypto-tax.md`);
    if (!fs.existsSync(cryptoFile)) continue;
    
    const content = await readFile(cryptoFile, 'utf8');
    const frontmatter = extractFrontmatter(content);
    rules.jurisdictions[country] = {
      name: country,
      cryptoTaxRules: frontmatter,
      // Additional fields you might want
      hasCryptoSkill: true
    };
    console.log(`✅ Loaded crypto tax rules for ${country}`);
  }

  // 2. Parse supplier patterns (exchanges, banks, payment processors, DeFi protocols)
  const patternsDir = path.join(OA_ROOT, 'skills', 'patterns');
  const patternFiles = await readdir(patternsDir);
  for (const file of patternFiles) {
    if (!file.endsWith('.md')) continue;
    const filePath = path.join(patternsDir, file);
    const content = await readFile(filePath, 'utf8');
    // Each pattern file is a markdown table or list. We'll extract a simple mapping.
    // For now, just store the raw content and later we'll parse structured entries.
    const category = path.basename(file, '.md');
    rules.patterns[category] = content;
    console.log(`📦 Loaded pattern file: ${category}`);
  }

  // 3. Parse cross-border treaties (withholding rates, etc.)
  const crossBorderDir = path.join(OA_ROOT, 'skills', 'cross-border');
  if (fs.existsSync(crossBorderDir)) {
    const cbFiles = await readdir(crossBorderDir);
    for (const file of cbFiles) {
      if (!file.endsWith('.md')) continue;
      const filePath = path.join(crossBorderDir, file);
      const content = await readFile(filePath, 'utf8');
      const frontmatter = extractFrontmatter(content);
      rules.cross_border[path.basename(file, '.md')] = frontmatter;
      console.log(`🌍 Loaded cross-border: ${file}`);
    }
  }

  // 4. Write output JSON
  await writeFile(OUTPUT_FILE, JSON.stringify(rules, null, 2));
  console.log(`\n🎉 Done! Rules written to ${OUTPUT_FILE}`);
  console.log(`   Jurisdictions: ${Object.keys(rules.jurisdictions).length}`);
  console.log(`   Pattern categories: ${Object.keys(rules.patterns).length}`);
  console.log(`   Cross-border files: ${Object.keys(rules.cross_border).length}`);
}

main().catch(console.error);