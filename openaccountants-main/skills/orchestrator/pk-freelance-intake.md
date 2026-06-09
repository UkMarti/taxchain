---
name: pk-freelance-intake
description: ALWAYS USE THIS SKILL when a user asks for help with their Pakistan taxes AND mentions freelancing, self-employment, sole proprietorship, IT exports, or being a business individual in Pakistan. Trigger on phrases like "help me with my Pakistan taxes", "I'm a freelancer in Pakistan", "I export IT services", "file my FBR return", "I'm self-employed in Pakistan". This is the REQUIRED entry point for the Pakistan self-employed workflow — downstream skills (pk-it-export-tax, pk-income-tax, pk-social-contributions, pakistan-sales-tax, pk-return-assembly) depend on it. Upload-first; Pakistan-resident individuals only.
version: 0.1
jurisdiction: PK
tax_year: 2026
category: orchestrator
---

# Pakistan Self-Employed Intake — Orchestrator v0.1

## What this file is
The intake orchestrator for Pakistan-resident self-employed individuals (freelancers, IT exporters, sole proprietors). It collects facts, parses documents, confirms, and hands off a structured package. It computes nothing.

## Step 1 — Refusal sweep (route correctly)
1. **Do you earn mainly from foreign clients (IT/services export) or domestic clients?** → routes to pk-it-export-tax vs pk-income-tax.
2. **Registered with PSEB?** → determines the IT-export rate (~0.25% vs ~1%).
3. **Do you have an NTN / are you on the Active Taxpayer List (ATL)?** → filer status.
4. **Do you provide taxable services within a province?** → provincial sales tax on services (Sindh/Punjab/KPK/Balochistan/ICT).
5. **Pakistan tax resident this year (183-day test)?** → non-residents escalate.

Defaults if unanswered: resident business individual, not PSEB-registered, encourage NTN + ATL.

## Step 2 — Collect
- Bank statements (incl. foreign remittances / PRCs) for the full tax year (1 Jul–30 Jun).
- Platform statements (Upwork, Fiverr, direct invoices).
- NTN / IRIS credentials; prior return + wealth statement.
- PSEB registration certificate if any.

## Step 3 — Infer & confirm
- Separate **export income** (banking-channel remittances → pk-it-export-tax) from **domestic income** (→ pk-income-tax).
- Identify provincial services-sales-tax exposure.
- Confirm filer/ATL status (affects withholding).

## Step 4 — Hand off
- **Export IT freelancer:** pk-it-export-tax (final tax) + (sales tax on services if domestic) → pk-return-assembly.
- **Domestic business:** pk-income-tax + provincial sales tax + pk-social-contributions → pk-return-assembly.

## Disclaimer
Intake only; computes no tax. All downstream outputs must be reviewed and signed off by a qualified Pakistani tax practitioner before filing. Maintained at [openaccountants.com](https://www.openaccountants.com).
