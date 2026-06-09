const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const OA_ROOT = path.join(__dirname, 'openaccountants-main');
const OUTPUT = path.join(__dirname, 'taxchain_rules_full.json');

// Simple YAML frontmatter parser (supports nested maps, arrays, strings)
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return {};
  const yaml = match[1];
  const result = {};
  let currentKey = null;
  let currentObj = result;
  const stack = [];
  for (const line of yaml.split('\n')) {
    const trimmed = line.trim();
    if (trimmed === '') continue;
    const indent = line.search(/\S/);
    if (trimmed.includes(':') && !trimmed.startsWith('-')) {
      const [key, ...rest] = trimmed.split(':');
      const cleanKey = key.trim();
      let value = rest.join(':').trim();
      if (value === '' || value === 'null') {
        currentKey = cleanKey;
        const newObj = {};
        currentObj[cleanKey] = newObj;
        stack.push({ obj: currentObj, key: cleanKey, indent });
        currentObj = newObj;
        continue;
      }
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''));
      }
      currentObj[cleanKey] = value;
    } else if (trimmed.startsWith('-')) {
      let item = trimmed.slice(1).trim();
      if (item.startsWith('"') && item.endsWith('"')) item = item.slice(1, -1);
      if (!Array.isArray(currentObj[currentKey])) currentObj[currentKey] = [];
      currentObj[currentKey].push(item);
    } else {
      // multiline string or continuation – skip for simplicity
    }
  }
  return result;
}

// Parse markdown tables into array of objects
function parseTable(md) {
  const lines = md.split('\n');
  const headerLine = lines.find(l => l.includes('|') && !l.includes('---'));
  if (!headerLine) return [];
  const headers = headerLine.split('|').map(h => h.trim()).filter(h => h);
  const dataLines = lines.filter(l => l.includes('|') && !l.includes('---') && l !== headerLine);
  return dataLines.map(line => {
    const cells = line.split('|').map(c => c.trim()).filter(c => c);
    const obj = {};
    headers.forEach((h, i) => { obj[h] = cells[i] || ''; });
    return obj;
  });
}

async function main() {
  const rules = {
    version: '1.0',
    generated: new Date().toISOString(),
    jurisdictions: {},
    patterns: {},
    cross_border: {}
  };

  // 1. All international skills (including income, vat, crypto, optimisation, etc.)
  const intlDir = path.join(OA_ROOT, 'skills', 'international');
  const countries = await readdir(intlDir);
  for (const country of countries) {
    const countryPath = path.join(intlDir, country);
    if (!fs.statSync(countryPath).isDirectory()) continue;
    const files = await readdir(countryPath);
    const skills = {};
    for (const file of files.filter(f => f.endsWith('.md'))) {
      const content = await readFile(path.join(countryPath, file), 'utf8');
      skills[path.basename(file, '.md')] = {
        frontmatter: parseFrontmatter(content),
        raw: content.slice(0, 1000) // keep first 1000 chars for context
      };
    }
    if (Object.keys(skills).length) rules.jurisdictions[country] = skills;
    console.log(`📁 ${country}: ${Object.keys(skills).length} skills`);
  }

  // 2. US states (under skills/us-states/)
  const usStatesDir = path.join(OA_ROOT, 'skills', 'us-states');
  if (fs.existsSync(usStatesDir)) {
    const states = await readdir(usStatesDir);
    for (const state of states) {
      const statePath = path.join(usStatesDir, state);
      if (!fs.statSync(statePath).isDirectory()) continue;
      const files = await readdir(statePath);
      const skills = {};
      for (const file of files.filter(f => f.endsWith('.md'))) {
        const content = await readFile(path.join(statePath, file), 'utf8');
        skills[path.basename(file, '.md')] = {
          frontmatter: parseFrontmatter(content),
          raw: content.slice(0, 1000)
        };
      }
      rules.jurisdictions[`us-${state}`] = skills;
      console.log(`🇺🇸 us-${state}: ${Object.keys(skills).length} skills`);
    }
  }

  // 3. Canadian provinces (skills/canada/)
  const canadaDir = path.join(OA_ROOT, 'skills', 'canada');
  if (fs.existsSync(canadaDir)) {
    const provinces = await readdir(canadaDir);
    for (const province of provinces) {
      const provPath = path.join(canadaDir, province);
      if (!fs.statSync(provPath).isDirectory()) continue;
      const files = await readdir(provPath);
      const skills = {};
      for (const file of files.filter(f => f.endsWith('.md'))) {
        const content = await readFile(path.join(provPath, file), 'utf8');
        skills[path.basename(file, '.md')] = {
          frontmatter: parseFrontmatter(content),
          raw: content.slice(0, 1000)
        };
      }
      rules.jurisdictions[`ca-${province}`] = skills;
      console.log(`🍁 ca-${province}: ${Object.keys(skills).length} skills`);
    }
  }

  // 4. Pattern tables (convert markdown tables to JSON)
  const patternsDir = path.join(OA_ROOT, 'skills', 'patterns');
  const patternFiles = await readdir(patternsDir);
  for (const file of patternFiles.filter(f => f.endsWith('.md') && f !== 'README.md')) {
    const content = await readFile(path.join(patternsDir, file), 'utf8');
    const table = parseTable(content);
    if (table.length) {
      rules.patterns[path.basename(file, '.md')] = table;
    } else {
      rules.patterns[path.basename(file, '.md')] = content; // fallback
    }
    console.log(`📦 Pattern ${file}: ${table.length} rows`);
  }

  // 5. Cross‑border (parse frontmatter + tables)
  const cbDir = path.join(OA_ROOT, 'skills', 'cross-border');
  const cbFiles = await readdir(cbDir);
  for (const file of cbFiles.filter(f => f.endsWith('.md'))) {
    const content = await readFile(path.join(cbDir, file), 'utf8');
    const frontmatter = parseFrontmatter(content);
    const table = parseTable(content);
    rules.cross_border[path.basename(file, '.md')] = {
      frontmatter,
      table: table.length ? table : null
    };
    console.log(`🌍 Cross-border ${file}`);
  }

  await writeFile(OUTPUT, JSON.stringify(rules, null, 2));
  console.log(`\n✅ Complete rules written to ${OUTPUT}`);
  console.log(`   Jurisdictions: ${Object.keys(rules.jurisdictions).length}`);
  console.log(`   Patterns: ${Object.keys(rules.patterns).length}`);
  console.log(`   Cross-border: ${Object.keys(rules.cross_border).length}`);
}

main().catch(console.error);