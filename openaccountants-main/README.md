[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/openaccountants-openaccountants-badge.png)](https://mseep.ai/app/openaccountants-openaccountants)
[![smithery badge](https://smithery.ai/badge/info-ood9/openaccountants)](https://smithery.ai/servers/info-ood9/openaccountants)

# OpenAccountants

Open-source accounting & tax skills for AI agents. **1,000+ skills across 192 jurisdictions** — 130+ countries plus every US state. Research-verified in this repo; [accountant-verified via the MCP connector](https://www.openaccountants.com/connect). Full breakdown: [docs/COVERAGE.md](docs/COVERAGE.md).

**11 accounting domains:** tax, bookkeeping, e-invoicing, payroll, company formation, financial statements, transfer pricing, tax optimization, **crypto tax**, cross-border, plus industry verticals and platform integrations.

---

## ⚠️ Important — what's in this repo and what isn't

OpenAccountants runs on a **two-layer model**:

| Layer | Where it lives | Quality tier | How to get it |
|---|---|---|---|
| **Research drafts** (rules, rates, thresholds, workflow bases) | This GitHub repo | Tier 2 — research-verified, AI-drafted, not signed by a credentialed accountant | Clone, fork, audit, contribute. Use freely under [the AGPL-3.0 / commercial dual license](#license). |
| **Accountant-verified skills** (signed off by a named licensed CPA / CA / EA / Steuerberater / equivalent) | **The website + MCP server at [openaccountants.com](https://www.openaccountants.com)** | Tier 1 — corrections applied, audit flash points reviewed, verifier name on every output | **Install the MCP connector** at [openaccountants.com/connect](https://www.openaccountants.com/connect). Your AI loads them automatically with the verifier's name on every answer. |

**Why split?** The skill *rules* (rates, thresholds, statutes) are public domain restructured — those live here, open. The **verified version of record** — corrected by a named accountant, with their reputation on it — is served via the MCP so the AI-to-human handoff (`request_accountant_review`) can route users to a real CPA. That handoff is the product. The repo is the research base.

**To USE OpenAccountants:** install the MCP connector at [openaccountants.com/connect](https://www.openaccountants.com/connect) — works with Claude.ai, ChatGPT, Cursor, Windsurf, and any other MCP-aware AI client.

**To CONTRIBUTE or AUDIT:** you're in the right place. Open issues, submit PRs, verify your jurisdiction.

---

**Website:** [openaccountants.com](https://www.openaccountants.com) · **Install:** [openaccountants.com/connect](https://www.openaccountants.com/connect) · **Verifiers:** [openaccountants.com/network](https://www.openaccountants.com/network)

---

## 👉 Start here

**New to this repo?** Read **[START-HERE.md](START-HERE.md)** — it has a table of scenarios ("I'm a freelance developer in California", "I sell on Etsy", "I'm worried about Pillar Two", etc.) and tells you exactly which files to upload and what to say to the AI.

If you just want to dive in, pick your jurisdiction:

| You are… | Go to |
|---|---|
| Freelancer / sole prop in a country | [`packages/<country>/`](packages/) (e.g. `malta`, `germany`, `uk`) |
| US-based — freelancer or single-member LLC | [`packages/us-<state>/`](packages/) (e.g. `us-ca`, `us-ny`, `us-tx`) |
| Canada-based — sole prop | [`packages/ca-<province>/`](packages/) (e.g. `ca-on`, `ca-qc`, `ca-bc`) — federal + provincial bundled. If absent, run `python3 scripts/build-packages.py` to (re)generate them. |
| Cross-border or sector-specific (SaaS, banking, REIT, etc.) | [`skills/cross-border/`](skills/cross-border/) and [`skills/verticals/`](skills/verticals/) |

---

### Two ways to use OpenAccountants

| Method | What you get | Best for |
|--------|-------------|----------|
| **MCP connector** *(recommended)* | All **accountant-verified** skills, with named-verifier attribution and the AI-to-human handoff (`request_accountant_review` routes to a real CPA with your worksheet attached). Install at [openaccountants.com/connect](https://www.openaccountants.com/connect). | Anyone who actually wants to use OpenAccountants. Claude.ai, ChatGPT (paid Business+), Cursor, Windsurf, Claude Desktop, Claude Code, or any MCP-aware client. |
| **Manual upload** from this repo | Only the **research-verified** drafts in this repo (no verifier name, no handoff). Download a folder, drag `.md` files into your LLM. | Developers / accountants who want to audit, fork, or contribute to the open library before installing. |

**The MCP path is the canonical product.** This repo is the open research base that backs it.

## Known limitations

Read this before you trust any output.

- **LLMs hallucinate and misread.** These files steer the model; they do not guarantee correct numbers, classifications, or filings. Always have a qualified professional review before you act.
- **Tax law changes.** Rates, thresholds, and forms go out of date. The repo is a snapshot; [openaccountants.com](https://www.openaccountants.com) may be ahead of what you cloned.
- **Verification is in two tiers** — see [QUALITY-TIERS.md](docs/QUALITY-TIERS.md). **Accountant-verified (Tier 1)** means a licensed practitioner has signed off and put their name on the skill. **These are served only via the MCP server at [openaccountants.com](https://www.openaccountants.com) — not from this repo.** **Research-verified (Tier 2)** means every rate, threshold, and form reference has been drafted from authoritative sources but not yet signed off by a credentialed practitioner. **This repo holds the Tier 2 drafts**; the Tier 1 signed versions live in the database behind the MCP server.
- **Coverage is uneven.** Thirteen countries ship the full accounting suite (tax + bookkeeping + payroll + formation + financial statements + transfer pricing + tax optimization) in this repo; dozens more have multiple skills without that full stack; **many** jurisdictions are **VAT/GST-only** or partial. See **Coverage** below and each country folder's README.
- **Newer domains need more eyes.** Bookkeeping, payroll, formation, financial statements, transfer pricing, and tax optimization skills are research-verified but have fewer accountant sign-offs than the core tax skills. Help us close that gap.

Honesty is the point: if you know where the gaps are, you can use the project safely. Skeptics welcome.

---

## Quick start (60 seconds)

### 1. Find your country

Everything you need is in one folder under `packages/`. Upload every file in that folder.

```
packages/
├── malta/           ← 23 files (tax + bookkeeping + payroll + formation + financial statements + TP + optimization)
├── uk/              ← ~20 files
├── germany/         ← ~25 files (the fullest)
├── ... 130+ more countries
├── us-ca/           ← Federal + California state skills
├── us-ny/           ← Federal + New York state skills
├── us-tx/           ← Federal + Texas state skills
├── ... 51 US state packages (all 50 states + DC)
├── ca-on/           ← Federal Canadian + Ontario provincial skills
├── ca-qc/           ← Federal Canadian + Quebec provincial skills (incl. QST)
├── ca-bc/           ← Federal Canadian + British Columbia provincial skills
├── ... 13 Canadian province/territory packages (all 10 provinces + 3 territories)
├── canada/          ← Index README only; per-province packages live in ca-<code>/
```

> **Canadian packages are generated.** If `packages/ca-on/`, `ca-qc/`, etc. are missing in your checkout, run `python3 scripts/build-packages.py` once to materialise them. The script also regenerates the rest of `packages/` from source files under `skills/`.

Also available: `_cross-border/` (37 skills), `_verticals/` (14 industry skills), `_integrations/` (10 platform skills)

**International users:** pick your country folder (e.g. `packages/malta/`).

**US users:** pick `packages/us-[your state code]/` (e.g. `packages/us-ca/` for California). Each state package bundles federal skills (Schedule C, SE, QBI, estimated tax, etc.) **plus** your state's income tax, sales tax, and specialty taxes. See the [US state index](packages/us/README.md) for the full list, or the [source coverage matrix](skills/us-states/README.md) for what each state includes.

**Canadian users:** pick `packages/ca-[your province code]/` (e.g. `packages/ca-on/` for Ontario, `packages/ca-qc/` for Quebec). Each province/territory package bundles the federal Canadian skills (T1, T2125, CPP/EI, GST/HST, T1135, instalments, crypto, bookkeeping, payroll, formation, financial statements, transfer pricing, tax optimization) **plus** your province/territory's income tax (and QST for Quebec). If the `ca-*` folders aren't present in your checkout, run `python3 scripts/build-packages.py` once. See the [Canada index](packages/canada/README.md) for the full list.

For MCP users, US state and Canadian province packages appear as `us-ca`, `us-tx`, `ca-on`, `ca-qc`, etc. alongside country packages.

Contributors: all packages are **generated** from source files under `skills/` by `scripts/build-packages.py`. Edit the source, not the package. See [CONTRIBUTING.md](CONTRIBUTING.md).

### 2. Upload to your LLM

Open the folder for your jurisdiction under `packages/`. Upload **all** `.md` files.

Upload to:
- **Claude.ai** → Create a Project, add files as Project Knowledge
- **ChatGPT** → Attach files to a conversation or create a Custom GPT
- **Any other LLM** → Attach or paste the files

### 3. Attach your bank statement and go

Say any of:

```
Help me with my 2025 taxes. Here's my bank statement.
Help me set up a company in Malta.
Run my payroll for this month.
Prepare my annual accounts.
Optimize my tax — what deductions am I missing?
Check my invoice compliance for EU e-invoicing.
```

The AI will ask a few questions, load the right skills, and produce a working paper for your accountant.

**Cross-border and scenario questions work too** — describe the situation and the AI loads the right skills across jurisdictions:

```
US citizen moving to Malta — tax workflow and exit considerations
Freelancer in Germany — VAT and income tax for the year
Cross-border SaaS — VAT place-of-supply for EU B2B and B2C
Crypto tax: Portugal vs Malta for a long-term holder
Selling a UK company as a non-resident — CGT and treaty relief
```

---

## Are you an accountant?

These skills need your eye. Most are **research-verified** — drafted from authoritative sources (tax-authority publications and primary legislation) but awaiting credentialed sign-off. Your review moves them to **accountant-verified**.

**You don't need to use GitHub.** Just:

1. Find your country's folder under `packages/`
2. Check the rates against your tax authority's website
3. Email your corrections to **info@openaccountants.com** — Word doc, Excel, PDF, tracked changes, whatever format works for you

We'll update the skill and credit you publicly as the verified reviewer at [openaccountants.com](https://www.openaccountants.com).

Or if you prefer GitHub: fork, fix, PR. **Your name goes on the skill either way.**

> 134 countries need accountant reviewers. Pick yours at [`packages/`](packages/) and be the first verified professional for your jurisdiction.

---

## What's in each package

Every country folder contains:

| File | What it does | Same everywhere? |
|------|-------------|-----------------|
| `foundation.md` | Tells the AI HOW to work — conservative defaults, output format, classification contract | Yes |
| `intake.md` | Onboarding questions, refusal checks, document inference | Yes (country name filled in) |
| `[country]-vat.md` | VAT/GST/sales tax rules, supplier pattern library, form mappings | No — country-specific |
| `[country]-income-tax.md` | Income tax brackets, deductions, transaction patterns | No — country-specific |
| `[country]-ssc.md` | Social security / pension contributions | No — country-specific |
| `[country]-bookkeeping.md` | Chart of accounts, P&L/balance sheet format, expense classification | No — 13 countries |
| `[country]-einvoice.md` | E-invoicing format, mandatory fields, transmission, penalties | No — 15 countries |
| `[country]-payroll.md` | PAYE withholding, social security, payslips, filing | No — 15 countries |
| `[country]-formation.md` | Entity types, registration steps, costs, compliance | No — 13 countries |
| `[country]-financial-statements.md` | Annual accounts, reporting framework, filing, audit | No — 13 countries |
| `[country]-transfer-pricing.md` | TP documentation, arm's length, CbCR, penalties | No — 15 countries |
| `[country]-tax-optimization.md` | Legal tax reduction strategies, deductions you're missing, timing | No — 13 countries |
| `[country]-crypto-tax.md` | Cryptocurrency/digital asset taxation, cost basis, DeFi, staking, NFTs | No — 22 countries |
| `[country]-guided-intake.md` | Full guided experience with detailed inference (if available) | No — 13 countries have this |
| `[country]-return-assembly.md` | Cross-checks between VAT, IT, and SSC (if available) | No — 13 countries have this |

**Special packages:**

| Package | What it covers |
|---------|---------------|
| `_cross-border/` | 22 skills — multi-jurisdiction coordination, EU SS coordination, OECD treaty defaults, 70+ treaty corridor rates |
| `_verticals/` | 6 industry-specific skills — freelance developer, e-commerce, content creator, consultant, property investor, medical professional |
| `_integrations/` | 10 platform skills — Xero, QuickBooks, Stripe, Wise, PayPal, Revolut, Amazon Seller, Shopify, FreeAgent, Sage |

**Not every country has every file.** Some have only VAT. Some have VAT + income tax + SSC + bookkeeping + e-invoicing. Thirteen countries have the full accounting suite. Check the README inside each country folder.

---

## Coverage

### Full accounting suite (13 countries)

Tax + bookkeeping + payroll + formation + financial statements + transfer pricing + tax optimization:

| Country | What you get |
|---------|-------------|
| **Malta** | VAT + TA24 income tax + Class 2 SSC + provisional tax + rental + crypto |
| **United Kingdom** | VAT100 + SA103/SA100 + NIC + student loan + SA105 rental + SA108 CGT + dividends |
| **Germany** | UStVA + Einkommensteuer + Sozialversicherung + Gewerbesteuer + rental + crypto |
| **Australia** | BAS + ITR + super + Medicare levy + rental + crypto |
| **Canada** | GST/HST + T1/T2125 + CPP/EI + 10 provincial returns + crypto |
| **India** | GST + ITR-3/4 + advance tax + professional tax + PF/ESI |
| **Spain** | IVA + IRPF + RETA + rental + Modelo 111 |
| **France** | TVA + impot sur le revenu + cotisations sociales + CFE + crypto + rental + capital gains |
| **Japan** | Consumption tax + income tax + social insurance + estimated tax + e-Tax |
| **Netherlands** | BTW + inkomstenbelasting + ZZP deductions + payroll tax |
| **Portugal** | IVA + IRS + contribuições sociais + rental + crypto |
| **Belgium** | BTW + personenbelasting + sociale bijdragen + rental |
| **United States (CA)** | 1040 + Schedule C/SE + CA 540 + crypto |

Coverage varies slightly — some countries have all seven domains, others have most. Check each country's README.

### Multi-skill countries (~56 countries)

VAT + income tax + social contributions (and sometimes more — formation, payroll, crypto, etc.). No guided intake, but the AI uses the universal intake flow:

Andorra, Argentina, Austria, Belgium, Bermuda, Brazil, Brunei, Bulgaria, BVI, Cayman Islands, Chile, China, Colombia, Croatia, Cyprus, Czech Republic, Denmark, Dominican Republic, Estonia, Finland, Greece, Honduras, Hong Kong, Hungary, Indonesia, Iraq, Ireland, Israel, Kenya, Kuwait, Latvia, Lithuania, Luxembourg, Malaysia, Mexico, Myanmar, New Zealand, Nigeria, Norway, Pakistan, Panama, Peru, Philippines, Poland, Qatar, Romania, Saudi Arabia, Singapore, Slovakia, Slovenia, South Africa, South Korea, Sweden, Switzerland, Taiwan, UAE

### Bookkeeping skills (13 countries + all 51 US states + Indonesia)

Chart of accounts, double-entry posting, P&L and balance sheet generation with country-specific formats:

Malta, UK, Germany, France, Italy, Spain, Netherlands, Belgium, Portugal, Sweden, Australia, Canada, Japan, plus Indonesia and every `us-<state>` package.

### E-invoicing compliance (16 countries)

Format validation, mandatory field checks, transmission methods, and penalty regimes:

Italy, France, Germany, Spain, Poland, Portugal, Romania, Belgium, Greece, Hungary, India, Saudi Arabia, Mexico, Brazil, Malaysia, China

### Payroll (15 countries + Ireland + Nigeria + ~24 US states)

PAYE/withholding tables, social security computation, payslip generation, employer filing obligations:

Malta, UK, Germany, France, Italy, Spain, Netherlands, Belgium, Portugal, Sweden, Australia, Canada, Japan, India, Brazil, plus Ireland, Nigeria, and the larger US state packages (CA, NY, TX, IL, PA, OH, MI, GA, NC, NJ, VA, WI, MN, MA, MD, MO, IN, KY, CT, AZ, CO, OR, ND, IL — see each `us-<state>/` for confirmation).

### Company formation (13 countries + China, Indonesia, Ireland, Nigeria, Pakistan, Saudi Arabia + 7 US states)

Entity type comparison, registration steps, capital requirements, costs, post-formation compliance:

Malta, UK, Germany, France, Italy, Spain, Netherlands, Portugal, Australia, Canada, Japan, India, Singapore, plus China, Indonesia, Ireland, Nigeria, Pakistan, Saudi Arabia, and the US incorporation-heavy states (CA, DE, GA, NV, NY, TX, WY).

### Financial statements (13 countries)

Annual accounts preparation, reporting framework by entity size, year-end adjustments, filing and audit:

Malta, UK, Germany, France, Italy, Spain, Netherlands, Belgium, Portugal, Australia, Canada, Japan, India

### Transfer pricing (15 countries)

TP documentation, arm's length methods, CbCR thresholds, APA, penalties:

Malta, UK, Germany, France, Italy, Spain, Netherlands, Australia, Canada, Japan, India, Brazil, Singapore, South Africa, Mexico

### Tax optimization (14 countries)

Legal tax reduction strategies, commonly missed deductions, timing optimizations, entity structure advice:

Malta, UK, Germany, France, Italy, Spain, Netherlands, Australia, Canada, Japan, India, Portugal, Singapore, Indonesia

### Crypto tax (21 countries + all 51 US states)

Cryptocurrency and digital asset taxation — capital gains, cost basis, DeFi, staking, mining, airdrops, NFTs, reporting:

Malta, UK, Germany, France, Australia, Canada, Israel, India, Japan, Spain, Netherlands, Portugal, Italy, Singapore, Brazil, Mexico, Sweden, Belgium, Switzerland, South Korea, New Zealand — plus every `us-<state>` package ships its own `<state>-crypto-tax.md`.

### Cross-border orchestrator (37 skills)

Multi-jurisdiction coordination, EU social security coordination, OECD treaty defaults, and 70+ treaty corridor rates. See [`packages/_cross-border/`](packages/_cross-border/) for the full file list.

### Industry verticals (14 skills)

Banking, charity / nonprofit, construction, consultant / professional, content creator, e-commerce seller, freelance developer, insurance, investment funds / REITs, medical professional, oil & gas / extractives, property investor, SaaS / digital products, shipping / aviation (tonnage tax).

### Platform integrations (10 skills)

Xero, QuickBooks, Stripe, Wise, PayPal, Revolut, Amazon Seller, Shopify, FreeAgent, Sage.

### VAT/GST only (65 countries)

Consumption tax classification with country-specific supplier pattern libraries. From Albania to Zimbabwe.

---

## How the skills work

### The supplier pattern library

Every country skill contains a lookup table of local vendors. When the AI sees "BANK OF VALLETTA" or "DEUTSCHE TELEKOM" or "STRIPE PAYMENTS UK LTD" on your bank statement, it already knows the classification — no guessing.

### Three outcomes per transaction

| Outcome | What it means | What happens |
|---------|--------------|-------------|
| **Classified** | Documents carry enough info | Applied automatically, no flag |
| **Assumed** | Data missing, conservative default applied | Flagged for your reviewer with the assumption disclosed |
| **Needs Input** | Can't proceed without asking you | One targeted question |

### Conservative defaults

When uncertain, the system always assumes MORE tax, never less. Your accountant can override a conservative position. They can't easily undo an aggressive one.

---

## Quality tiers

Every skill is in one of two tiers. Check the badge on the file. Full definitions: [docs/QUALITY-TIERS.md](docs/QUALITY-TIERS.md).

| Tier | What it means |
|------|--------------|
| **Accountant-verified** | A licensed practitioner (CPA, EA, CA, Steuerberater, or equivalent) has reviewed the skill, tested it against representative data, and signed off. Name and license number on the skill page. |
| **Research-verified** | Every rate, threshold, form, and deadline has been drafted from authoritative sources (tax-authority publications and primary legislation). Follows the accountant-verified format. Awaiting credentialed sign-off. |

Most skills are research-verified. Output from any skill must still be reviewed by your accountant before filing.

---

## MCP server

Instead of uploading files by hand, connect your AI client to OpenAccountants via the [Model Context Protocol](https://modelcontextprotocol.io/). Install once, configure once — every future conversation can pull the right skills automatically.

### How it works

```
You:    "Help me set up a company in Germany and understand the payroll obligations"
          ↓
Claude: calls list_jurisdictions → sees "germany"
Claude: calls list_files("germany") → germany-formation.md, germany-payroll.md, …
Claude: calls get_file("germany", "germany-formation.md") → full skill loaded
Claude: calls get_file("germany", "germany-payroll.md") → full skill loaded
Claude: loads company-formation-workflow-base.md
          ↓
Claude: walks you through entity types, registration, and employer obligations
```

### Install

```bash
git clone https://github.com/openaccountants/openaccountants.git
cd openaccountants
pip install ./mcp          # requires Python 3.10+
```

### Connect

**Claude Desktop** — add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "openaccountants": {
      "command": "openaccountants-mcp"
    }
  }
}
```

**Cursor** — add to `.cursor/mcp.json` or via Settings > MCP:

```json
{
  "mcpServers": {
    "openaccountants": {
      "command": "openaccountants-mcp"
    }
  }
}
```

Full setup details, `uv` instructions, and environment variables: [`mcp/README.md`](mcp/README.md).

### Claude Code plugin

Using Claude Code? Install the plugin in two commands — it wires up the hosted MCP server (the **accountant-verified** skills, with named-verifier attribution) and adds a `/openaccountants` command:

```bash
/plugin marketplace add openaccountants/openaccountants
/plugin install openaccountants@openaccountants
```

Then run `/openaccountants <your tax question>`, or just ask normally — the connected server pulls the right skills automatically.

---

## For developers

### Clone the repo

```bash
git clone https://github.com/openaccountants/openaccountants.git
```

### Repo structure

```
openaccountants/
├── packages/              ← Ready-to-use jurisdiction packages (START HERE)
│   ├── malta/
│   ├── uk/
│   ├── us-ca/
│   ├── us-ny/
│   └── ... 130 countries + 51 US states
├── skills/                ← Source files (for contributors)
│   ├── foundation/        ← 10 workflow bases (universal, VAT, US tax, bookkeeping, payroll, e-invoicing, formation, financial statements, transfer pricing, cross-border)
│   ├── federal/           ← US federal skills
│   ├── international/     ← Country-specific: tax, bookkeeping, payroll, formation, financial statements, TP, optimization
│   ├── orchestrator/      ← Global router, intake flows, return assembly
│   ├── us-states/         ← US state skills
│   ├── cross-border/      ← WHT, PE risk, VAT place of supply, EU rules, treaty corridors
│   ├── verticals/         ← Industry-specific (developer, e-commerce, content creator, etc.)
│   ├── integrations/      ← Platform export formats (Xero, Stripe, PayPal, etc.)
│   ├── intelligence/      ← Deadlines, thresholds
│   └── patterns/          ← Global vendor patterns
├── scripts/               ← Build tools
│   └── build-packages.py  ← Generates packages/ from skills/
└── docs/                  ← Planning docs, architecture, roadmaps
```

### Rebuild packages after editing skills

```bash
python3 scripts/build-packages.py
```

---

## Contribute

We maintain 1,900+ skills across 134 countries, 51 US state packages, and 13 Canadian province/territory packages. Accounting rules change constantly — rates update, thresholds move, forms get revised. Contributions keep this accurate.

### Ways to contribute

| What | How | Impact |
|------|-----|--------|
| **Verify a rate** | Check a number against your tax authority's website, open a PR | Strengthens a research-verified skill; with credentialed sign-off, moves it to accountant-verified |
| **Add bank patterns** | Add how transactions appear on your local bank statement | Every user in your country gets fewer misclassifications |
| **Fix an error** | Find a wrong rate or outdated threshold, submit the correction | Prevents bad working papers |
| **Add a tax skill** | Write a new income tax, VAT, or social security skill for your country | Fills a gap for every user in that jurisdiction |
| **Add a bookkeeping skill** | Chart of accounts, P&L format, expense classification for your country | Enables full double-entry accounting |
| **Add a payroll skill** | PAYE tables, social security, payslip format for your country | Employers in your jurisdiction can run payroll |
| **Add a formation skill** | Entity types, registration steps, costs for your country | Entrepreneurs can set up companies |
| **Add a financial statements skill** | Annual accounts, reporting framework, audit thresholds | Year-end compliance for your jurisdiction |
| **Add a transfer pricing skill** | TP documentation, arm's length methods, CbCR for your country | Multinationals get compliant |
| **Add a tax optimization skill** | Legal deductions, timing strategies, entity structure advice | Users stop leaving money on the table |
| **Add an e-invoicing skill** | Format, mandatory fields, transmission for your country | Invoices pass validation |
| **Add an industry vertical** | Vertical-specific guidance for a profession or business type | Targeted help for that industry |
| **Add a platform integration** | Export format mapping for an accounting/payment platform | Users can push data to their tools |

### How to verify or fix a skill

1. Find your country under `packages/`
2. Compare rates against your tax authority's website
3. Fork, fix, PR — or email corrections to **info@openaccountants.com** in any format

### How to add a new skill

1. Use any existing skill as a template (e.g., `packages/malta/malta-income-tax.md`)
2. Follow the same structure: quick reference table, rate tables, worked example, conservative defaults
3. Cite your sources (tax authority URL, legislation reference, or open-source repo)
4. Submit a PR

### Credits

Every contributor is credited publicly on the skill file and at [openaccountants.com](https://www.openaccountants.com).

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. Skills published to [openaccountants.com](https://www.openaccountants.com) require a resolvable jurisdiction — see [docs/WEBSITE-SYNC.md](docs/WEBSITE-SYNC.md).

**Pull requests:** contributions are accepted under the [Contributor License Agreement (CLA.md)](CLA.md). You explicitly agree by ticking the CLA box in the [pull request template](.github/PULL_REQUEST_TEMPLATE.md) when you open a PR.

---

## Disclaimer

All skills and outputs are for informational and computational purposes only. Not tax advice. Not a replacement for professional judgment. All outputs must be reviewed by a qualified professional before filing.

The most up-to-date, verified version is maintained at [openaccountants.com](https://www.openaccountants.com).

## Contact

**info@openaccountants.com**

## License

Dual-licensed: [AGPL-3.0](LICENSE) for open-source use, [commercial license](COMMERCIAL_LICENSE.md) for proprietary products.

Contributions are licensed to the project under the [Contributor License Agreement](CLA.md); see [CONTRIBUTING.md](CONTRIBUTING.md) and the PR template for how you opt in.
