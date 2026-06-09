---
name: pk-income-tax
description: >
  Use this skill whenever asked about Pakistan income tax for individuals, sole proprietors, and
  business persons. Trigger on phrases like "Pakistan income tax", "tax slabs Pakistan", "FBR income
  tax return", "non-salaried tax Pakistan", "business individual tax", "IRIS return". Covers the
  progressive slabs for salaried and non-salaried/business individuals, the tax year, NTN/IRIS filing,
  advance and minimum tax, and the interaction with the IT-export concession. ALWAYS read before any
  Pakistan income-tax work.
version: 1.0
jurisdiction: PK
tax_year: 2026
category: international
depends_on:
  - income-tax-workflow-base
---

# Pakistan Income Tax (Individuals & Business) — Skill v1.0

## Section 1 — Quick Reference

| Field | Value |
|---|---|
| Country | Pakistan |
| Tax year | 1 July – 30 June (e.g. TY2026 = FY 1 Jul 2025 – 30 Jun 2026) |
| Currency | PKR |
| Taxpayer types | Salaried individual · Non-salaried/business individual · AOP · Company |
| Non-salaried/business top rate | 45% (verify the current Finance Act slabs) |
| Salaried top rate | 35% (verify) |
| Basic exemption | First PKR 600,000 of annual income (verify) |
| Tax authority | Federal Board of Revenue (FBR) — IRIS (iris.fbr.gov.pk) |
| Registration | NTN (National Tax Number) via IRIS |
| Quality tier | Research-verified — pending sign-off by a Pakistani tax practitioner |
| Skill version | 1.0 |

### Conservative defaults
| Ambiguity | Default |
|---|---|
| Salaried vs business | If income is mainly from a job → salaried slabs; if from clients/trade → non-salaried slabs |
| IT-export income | Route to pk-it-export-tax (concessional final tax), not the normal slabs |
| Filer status | Recommend being on the Active Taxpayer List (ATL) — non-filers face higher withholding |

## Section 2 — Slabs (Tier 1 — VERIFY against current Finance Act)
- Income up to **PKR 600,000**: 0%.
- Above that, progressive bands rising to **45%** for non-salaried/business individuals (**35%** for salaried). The exact band widths and rates **change every Finance Act** — confirm the TY2026 table before computing.
- A **surcharge** may apply to high earners (verify).

## Section 3 — Key mechanics
- **Annual return** filed via **IRIS**; wealth statement required for individuals.
- **Advance tax** in quarterly instalments for business income; **minimum tax** on turnover may apply.
- **Active Taxpayer List (ATL):** filing keeps you on the ATL; non-filers suffer much higher withholding on banking, property, vehicles, etc.
- **Provincial sales tax on services** is separate (Sindh/Punjab/KPK/Balochistan/ICT) — see pk-sales-tax / pakistan-sales-tax.

## Section 4 — Worked Example
Domestic consultant, net business income PKR 4,000,000 (TY2026): apply the non-salaried slabs (verify) — roughly the 0% band on the first 600k then progressive rates on the remainder; file via IRIS with a wealth statement; pay advance tax quarterly.

## Section 10 — Prohibitions
- NEVER use the normal slabs for IT-export income that qualifies for the concession (use pk-it-export-tax).
- NEVER state slab figures without verifying the current Finance Act.
- NEVER ignore filer/non-filer (ATL) status — it changes withholding materially.

## Disclaimer
Informational only; not advice. Pakistan slabs and rules change every Finance Act — verify with the FBR. All outputs must be reviewed and signed off by a qualified Pakistani tax practitioner before filing. Maintained at [openaccountants.com](https://www.openaccountants.com).
