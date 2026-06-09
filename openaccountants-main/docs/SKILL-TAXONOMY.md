# OpenAccountants — Skill Taxonomy

This document maps every skill domain and its current coverage. It is the master blueprint for contributors, coordinators, and the build pipeline.

---

## How to read this document

Every freelancer and small business in every jurisdiction faces the same accounting obligations. The specifics differ, but the structure doesn't. This taxonomy exploits that structure to make skill creation systematic and repeatable.

**Accounting domains (the columns):**

| Code | Domain | What it answers |
|------|--------|-----------------|
| **TAX** | Tax (VAT/GST + Income Tax + SSC) | "How much tax do I owe?" |
| **BK** | Bookkeeping | "How do I classify transactions and prepare my books?" |
| **EI** | E-invoicing | "Is my invoice compliant with local electronic invoicing rules?" |
| **PR** | Payroll | "How do I compute wages, withholding, and payslips?" |
| **CF** | Company Formation | "What entity type should I choose and how do I register?" |
| **FS** | Financial Statements | "How do I prepare annual accounts and file them?" |
| **TP** | Transfer Pricing | "How do I document related-party transactions?" |
| **TO** | Tax Optimization | "What legal strategies reduce my tax bill?" |
| **CB** | Cross-border | "How do I handle multi-country obligations?" |
| **VT** | Industry Verticals | "What's specific to my industry?" |
| **IN** | Platform Integrations | "How do I read my Stripe/Xero/PayPal export?" |

**Functional roles (the rows within each skill):**

| Role | What it does | Example |
|------|-------------|---------|
| **Intake** | Collects data, runs refusal sweep, hands off downstream | `us-ca-freelance-intake` |
| **Computation** | Applies rates, thresholds, deductions to classified data | `malta-income-tax.md` |
| **Return Assembly** | Builds the actual form/return from computed figures | `mt-return-assembly` |
| **Workflow Base** | Execution pipeline, output spec, self-checks, refusals | `bookkeeping-workflow-base` |

---

## Part 1 — Current inventory by domain

### Tax skills (TAX) — 140 skills across 134 countries

The original and largest domain. Includes VAT/GST/sales tax, income tax, and social security contributions.

| Tier | Countries | What's included |
|------|-----------|-----------------|
| Full guided experience (intake + assembly) | 13: Malta, UK, Germany, Australia, Canada, India, Spain, France, Japan, Netherlands, Brazil, Mexico, US-CA | VAT + IT + SSC + guided intake + return assembly |
| Multi-skill (no intake) | 23: Argentina, Austria, Belgium, Chile, Colombia, Czech Republic, Greece, Hungary, Ireland, Israel, Italy, Kenya, New Zealand, Nigeria, Norway, Poland, Portugal, Romania, Singapore, South Africa, South Korea, Sweden, Switzerland | VAT + IT + SSC |
| VAT/GST only | ~98 countries | Consumption tax classification |

### Bookkeeping (BK) — 13 country skills

Chart of accounts, double-entry posting rules, P&L and balance sheet formats.

Countries: Malta, UK, Germany, France, Italy, Spain, Netherlands, Belgium, Portugal, Sweden, Australia, Canada, Japan

Workflow base: `bookkeeping-workflow-base.md` (9-step workflow, 3-tier classification, 5 output artifacts)

### E-invoicing (EI) — 15 country skills

Format validation, mandatory fields, transmission methods, penalty regimes.

Countries: Italy, France, Germany, Spain, Poland, Portugal, Romania, Belgium, Greece, Hungary, India, Saudi Arabia, Mexico, Brazil, Malaysia

Workflow base: `einvoice-workflow-base.md` (7-step compliance workflow, 3-tier validation severity)

### Payroll (PR) — 16 country skills

PAYE/withholding tables, social security computation, payslip generation, employer filing.

Countries: Malta, UK, Germany, France, Italy, Spain, Netherlands, Belgium, Portugal, Sweden, Australia, Canada, Japan, India, Brazil, Singapore

Workflow base: `payroll-workflow-base.md` (9-step computation, withholding rules)

### Company Formation (CF) — 13 country skills

Entity type comparison, registration steps, capital requirements, costs, post-formation compliance.

Countries: Malta, UK, Germany, France, Italy, Spain, Netherlands, Portugal, Australia, Canada, Japan, India, Singapore

Workflow base: `company-formation-workflow-base.md` (7-step workflow, comparison framework)

### Financial Statements (FS) — 13 country skills

Annual accounts, reporting framework by entity size, year-end adjustments, filing and audit.

Countries: Malta, UK, Germany, France, Italy, Spain, Netherlands, Belgium, Portugal, Australia, Canada, Japan, India

Workflow base: `financial-statements-workflow-base.md` (8-step workflow, 14 self-checks)

### Transfer Pricing (TP) — 15 country skills

TP documentation requirements, arm's length methods, CbCR thresholds, APAs, penalties.

Countries: Malta, UK, Germany, France, Italy, Spain, Netherlands, Australia, Canada, Japan, India, Brazil, Singapore, South Africa, Mexico

Workflow base: `transfer-pricing-workflow-base.md` (7-step workflow, 5 OECD methods)

### Tax Optimization (TO) — 13 country skills

Legal strategies for reducing tax liability: deductions, timing, income splitting, entity structuring, red lines.

Countries: Malta, UK, Germany, France, Italy, Spain, Netherlands, Australia, Canada, Japan, India, Portugal, Singapore

### Cross-border (CB) — 21 skills

Multi-jurisdiction coordination, EU rules, OECD treaties, treaty corridor WHT rates.

| Skill | What it covers |
|-------|----------------|
| `cross-border-workflow-base.md` | Master orchestrator for multi-jurisdiction cases (10-step intake, 18 self-checks) |
| `eu-social-security-coordination.md` | EU Reg 883/2004, A1 certificates, posted/multi-state workers |
| `eu-directives-cross-border.md` | Parent-Subsidiary, Interest & Royalties, ATAD, DAC |
| `oecd-model-treaty-defaults.md` | OECD Model Tax Convention articles, default WHT rates |
| `vat-place-of-supply-master.md` | EU place-of-supply rules, OSS/IOSS |
| `cross-border-payroll-coordination.md` | Foreign employees, remote workers, shadow payroll |
| `cross-border-invoicing-compliance.md` | Reverse charge, multi-currency, cross-border e-invoicing |
| Treaty corridors (14 files) | Specific WHT rates for 70+ high-traffic country pairs |

### Industry Verticals (VT) — 6 skills

Industry-specific accounting patterns, deductions, and platform transaction mapping.

| Vertical | Key topics |
|----------|-----------|
| Freelance developer | Home office, equipment, SaaS subscriptions, open source |
| E-commerce seller | Marketplace fees, inventory, nexus, platform settlements |
| Content creator | Ad revenue, sponsorships, equipment, multi-platform income |
| Consultant / professional services | Retainers, project-based billing, travel, CPD |
| Property investor | Rental income, depreciation, mortgage interest, capital gains |
| Medical professional | Practice expenses, equipment, insurance, CPD |

### Platform Integrations (IN) — 10 skills

Column mappings, export formats, fee structures for data from popular platforms.

Platforms: Xero, QuickBooks, Stripe, Wise, PayPal, Revolut, Amazon Seller Central, Shopify, FreeAgent, Sage

---

## Part 2 — Infrastructure skills

### Foundation workflow bases (10 files)

| File | Domain | Purpose |
|------|--------|---------|
| `workflow-base.md` | Universal | Core principles: conservative defaults, reviewer assumption, output spec, prohibitions |
| `vat-workflow-base.md` | Tax (VAT) | VAT/GST-specific classification and return workflow |
| `us-tax-workflow-base.md` | Tax (US) | US federal/state tax workflow (IRS-specific) |
| `bookkeeping-workflow-base.md` | Bookkeeping | Double-entry posting, chart of accounts, P&L/BS |
| `einvoice-workflow-base.md` | E-invoicing | Format validation, mandatory fields, transmission |
| `payroll-workflow-base.md` | Payroll | Wage computation, withholding, payslip generation |
| `company-formation-workflow-base.md` | Formation | Entity selection, registration, compliance calendar |
| `financial-statements-workflow-base.md` | Fin. statements | Year-end adjustments, reporting framework, filing |
| `transfer-pricing-workflow-base.md` | Transfer pricing | Arm's length analysis, documentation, CbCR |
| `cross-border-workflow-base.md` | Cross-border | Multi-jurisdiction orchestration, treaty application |

### Orchestrator skills (32 files)

Global router + 13 country-specific intake/assembly pairs + US federal assembly.

| Type | Count |
|------|-------|
| Global router | 1 |
| Country intakes | 15 |
| Country return assemblies | 15 |
| US federal return assembly | 1 |

### US state skills (103 files across 51 packages)

Every US state + DC has income tax, sales tax, and/or specialty tax skills. See `skills/us-states/README.md` for the full coverage matrix.

### Other infrastructure

| Directory | Files | Purpose |
|-----------|-------|---------|
| `skills/intelligence/` | 3 | Deadlines, thresholds, optimization triggers |
| `skills/patterns/` | 5 | Global vendor pattern libraries |

---

## Part 3 — The universal skill skeleton

Every country can have skills in each domain. Not every country needs every slot (e.g., US states have no VAT; UAE has no income tax). But the skeleton is the same:

```
[Country] Tax Skills
  ├── [Country] VAT/GST Return
  ├── [Country] Income Tax Computation
  ├── [Country] Social Contributions
  ├── [Country] Estimated Tax / Advance Payments
  └── [Country] Guided Intake + Return Assembly (if available)

[Country] Bookkeeping
  └── Chart of accounts, P&L, balance sheet (extends bookkeeping-workflow-base)

[Country] E-invoicing
  └── Format, mandatory fields, transmission (extends einvoice-workflow-base)

[Country] Payroll
  └── PAYE, social security, payslips (extends payroll-workflow-base)

[Country] Company Formation
  └── Entity types, registration, costs (extends company-formation-workflow-base)

[Country] Financial Statements
  └── Annual accounts, reporting, audit (extends financial-statements-workflow-base)

[Country] Transfer Pricing
  └── TP documentation, arm's length, CbCR (extends transfer-pricing-workflow-base)

[Country] Tax Optimization
  └── Legal strategies, deductions, timing (follows universal workflow-base)
```

---

## Part 4 — Scoreboard

| Category | Skills | Countries/Packages |
|----------|--------|--------------------|
| Tax (VAT + IT + SSC) | 140 | 134 countries |
| Bookkeeping | 13 | 13 countries |
| E-invoicing | 15 | 15 countries |
| Payroll | 16 | 16 countries |
| Company formation | 13 | 13 countries |
| Financial statements | 13 | 13 countries |
| Transfer pricing | 15 | 15 countries |
| Tax optimization | 13 | 13 countries |
| Cross-border | 21 | Global |
| Industry verticals | 6 | Universal |
| Platform integrations | 10 | Universal |
| Foundation (workflow bases) | 10 | Universal |
| US federal | 11 | Federal |
| US states | 103 | 51 packages (50 states + DC) |
| Orchestrator | 32 | 13 countries + global + US |
| Intelligence + patterns | 8 | Global |
| **TOTAL** | **~439** | **134 countries + 51 US states** |

*Note: Total skill count in the repo (~697) includes country-specific tax files (VAT, IT, SSC, guided intakes, consumption tax stubs) counted individually, plus READMEs and other supporting files under `skills/`.*

---

## Part 5 — What's still needed

### High-priority gaps

| Gap | Impact | Effort |
|-----|--------|--------|
| Crypto tax (all countries) | High demand, specialist domain | Large — needs per-country CGT rules + DeFi/staking |
| Bookkeeping for 120+ countries with only VAT | Every country needs books, not just tax returns | Medium per country |
| Payroll for remaining 118+ countries | Employers exist everywhere | Medium per country |
| E-invoicing for countries rolling out mandates (Turkey, Germany 2025, etc.) | Compliance deadline-driven | Medium |
| Guided intakes for 23 multi-skill countries | They have the skills but no guided experience | Small per country |

### Contributor-friendly tasks

| Task | Difficulty | Time |
|------|-----------|------|
| Verify tax rates against authority website | Easy | 30 min |
| Add bank transaction patterns for your country | Easy | 1 hour |
| Write a bookkeeping skill for a new country | Medium | 2-4 hours |
| Write a payroll skill for a new country | Medium | 3-5 hours |
| Add a new industry vertical | Medium | 2-3 hours |
| Add a new platform integration | Easy | 1-2 hours |
| Write a treaty corridor (WHT rates for a country pair) | Medium | 1-2 hours |

**439 domain skills built. 134 countries covered. 10 accounting domains. The skeleton is proven — now it deepens.**
