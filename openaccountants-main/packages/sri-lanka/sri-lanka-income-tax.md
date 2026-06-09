---
name: sri-lanka-income-tax
description: >
  Use this skill whenever asked about Sri Lanka personal income tax for resident individuals, non-resident citizens, employees, self-employed professionals, sole proprietors, and freelancers filing with the Inland Revenue Department (IRD). Trigger on phrases like "Sri Lanka income tax", "IRD return", "APIT", "PAYE Sri Lanka", "personal relief Sri Lanka", "income tax slabs Sri Lanka", "Inland Revenue Act 24 of 2017", "SET Sri Lanka", or "year of assessment 2025/26". Covers the Inland Revenue Act No. 24 of 2017 as amended by the Inland Revenue (Amendment) Act No. 02 of 2025 (effective 1 April 2025): the LKR 1,800,000 personal relief, the 6%/18%/24%/30%/36% progressive bands, the YA 2025/26 APIT (PAYE) tables, foreign-currency remote-worker concession, and IRD filing mechanics. Out of scope — corporate income tax (separate skill), withholding tax / AIT (separate skill), SSCL (separate skill), VAT (separate skill), and capital gains beyond the headline 10% rate.
version: 1.0
jurisdiction: LK
tax_year: 2025-26
category: international
verified_by: pending
depends_on:
  - foundation
---

# Sri Lanka — Personal Income Tax (Individuals) — Skill v1.0

> **Produced by OpenAccountants (openaccountants.com).** Research-grade (tier 2) — drafted from official IRD sources for YA 2025/26, pending sign-off by a Sri Lankan tax practitioner (CA Sri Lanka / IRD-registered). Not tax advice. All output must be reviewed before filing.

---

## Section 1 — Quick reference

| Field | Value |
|---|---|
| Country | Democratic Socialist Republic of Sri Lanka |
| Tax | Personal income tax (resident individuals & non-resident citizens) |
| Currency | LKR (Sri Lankan Rupee) only |
| Year of assessment (YA) | 1 April – 31 March (YA 2025/26 = 1 Apr 2025 – 31 Mar 2026) |
| Primary legislation | Inland Revenue Act No. 24 of 2017, as amended by the Inland Revenue (Amendment) Act No. 02 of 2025 (certified 20.03.2025), effective 1 April 2025 |
| Tax authority | Inland Revenue Department (IRD), Sri Lanka |
| Filing portal | IRD e-Services (https://www.ird.gov.lk) |
| Employer withholding | APIT (Advance Personal Income Tax) — IRD APIT tables for YA 2025/26 |
| Personal relief (tax-free) | **LKR 1,800,000 per year (LKR 150,000 per month)** — raised from 1,200,000 eff. 1 Apr 2025 |
| Statement of Estimated Tax (SET) | Filed under s.91; YA 2025/26 due **15 August 2025** |
| Validated by | Pending — requires sign-off by a Sri Lankan CA / IRD-registered tax practitioner |
| Skill version | 1.0 |

### Resident individual progressive rates — YA 2025/26 (effective 1 April 2025)

Applies to taxable income **after** deducting the LKR 1,800,000 personal relief.

| Taxable income band (LKR) | Rate on band | Cumulative tax at top of band (LKR) |
|---|---|---|
| First 1,000,000 | 6% | 60,000 |
| Next 500,000 (1,000,001 – 1,500,000) | 18% | 150,000 |
| Next 500,000 (1,500,001 – 2,000,000) | 24% | 270,000 |
| Next 500,000 (2,000,001 – 2,500,000) | 30% | 420,000 |
| Balance above 2,500,000 | 36% | — |

**Source:** Inland Revenue Act No. 24 of 2017 First Schedule (as amended by Act No. 02 of 2025); IRD YA 2025/26 tax chart; IRD Notice PN/IT/2025-01 (26.03.2025).

### Personal relief

- **LKR 1,800,000 per year** for an individual **resident in Sri Lanka, or a non-resident but a citizen of Sri Lanka** (IRD Notice PN/IT/2025-01).
- Relief does **NOT** apply to gains from the realisation of investment assets, nor to a person acting as trustee, receiver, executor, or liquidator.
- **Non-resident, non-citizen** individuals do **not** receive the relief; their employment tax is treated as a final withholding payment (IRA s.52(2)/(3)).

### Conservative defaults

| Ambiguity | Default |
|---|---|
| Residency uncertain | Hard stop — residency drives worldwide vs source-only taxation (verify under IRA) |
| Relief eligibility unclear (citizenship/residency) | Apply relief only on confirmed resident or non-resident-citizen status |
| Marginal band borderline | Apply the higher band on the disputed slice |
| Foreign-currency remote-employment concession (APIT Table 08) claimed | Require evidence of foreign employer + forex remittance; else apply standard rates |
| Investment-asset gain mixed into employment income | Exclude from relief; capital gains taxed separately at 10% (see CGT) |

---

## Section 2 — Required inputs and refusal catalogue

### Required inputs

**Minimum viable** — (a) confirmation of residency status for the YA; (b) citizenship (drives relief for non-residents); (c) employment vs business/professional income classification; (d) salary certificate / APIT statement (T-10) for employees, or books/bank statements for business income; (e) any WHT/AIT certificates.

**Recommended** — TIN, prior-year return acknowledgement, APIT deduction statements from each employer, bank interest certificates (AIT deducted), rent records, foreign income + foreign tax certificates.

### Refusal catalogue

**R-LK-IT-1 — Corporate / company return.** Companies file under the corporate regime (30% standard). Out of scope — use `sri-lanka-corporate-tax`.

**R-LK-IT-2 — Withholding / AIT computation for a payer.** Payer-side WHT/AIT deduction and remittance is a separate regime — use `sri-lanka-withholding-tax`.

**R-LK-IT-3 — Capital gains.** Gains on realisation of investment assets are taxed at a separate flat 10% and excluded from the progressive bands and from personal relief. This skill states the headline rate only; escalate detailed CGT computations.

**R-LK-IT-4 — SSCL / VAT.** Turnover-based levies are separate — use `sri-lanka-sscl` and `sri-lanka-vat`.

**R-LK-IT-5 — Non-resident with treaty position.** Dual residence, mid-year migration, or non-resident with mixed-source income requires treaty analysis. Out of scope — escalate to a Sri Lankan tax practitioner.

**R-LK-IT-6 — Residency day-count determination.** Resident-status determination under the IRA residency tests must be confirmed by the practitioner (the precise day-count test is NOT asserted in this skill — VERIFY against IRA s.69 and current IRD guidance).

---

## Section 3 — Tier 1 rules: rates, relief, APIT

### 3.1 Charge and year of assessment

Income tax is charged under the Inland Revenue Act No. 24 of 2017 (as amended). The year of assessment runs **1 April to 31 March**. Residents are taxed on worldwide income; non-residents on Sri Lanka-source income (confirm residency and source rules with the practitioner).

### 3.2 Progressive rates and relief

Apply the LKR 1,800,000 personal relief first (where eligible — see Section 1), then the 6%/18%/24%/30%/36% bands in the Section 1 table. These rates and the relief took effect **1 April 2025** under the Inland Revenue (Amendment) Act No. 02 of 2025.

### 3.3 APIT (Advance Personal Income Tax / PAYE) — employer withholding

The IRD publishes **APIT tables for YA 2025/26 (eight tables, effective 1 April 2025)** that employers use to deduct tax at source. The three core tables:

**APIT Table 01 — Monthly tax on regular profits from primary employment.** Personal relief of LKR 150,000/month is built in. Monthly deduction:

| Monthly regular profit (LKR) | Tax |
|---|---|
| Up to 150,000 | Relief from tax (nil) |
| 150,001 – 233,333 | 6% of profit − 9,000 |
| 233,334 – 275,000 | 18% of profit − 37,000 |
| 275,001 – 316,667 | 24% of profit − 53,500 |
| 316,668 – 358,333 | 30% of profit − 72,500 |
| Over 358,333 | 36% of profit − 94,000 |

When cumulative profits exceed LKR 1,800,000 for low-monthly-income employees, **Table No. 05** is applied. **Source:** IRD APIT 2025/26 Table 01.

**APIT Table 02 — Lump-sum payments.** Let D = estimated gross aggregate remuneration (EGAR) for the year. If D ≤ 1,800,000, deduction is **nil**. Above that:

| EGAR band D (LKR) | Tax on lump sum |
|---|---|
| 1,800,001 – 2,800,000 | D × 6% − 108,000 |
| 2,800,001 – 3,300,000 | D × 18% − 444,000 |
| 3,300,001 – 3,800,000 | D × 24% − 642,000 |
| 3,800,001 – 4,300,000 | D × 30% − 870,000 |
| Above 4,300,000 | D × 36% − 1,128,000 |

**Source:** IRD APIT 2025/26 Table 02.

**APIT Table 08 — Resident employees working in Sri Lanka for a foreign employer (foreign-currency remittances).** Concessionary two-bracket schedule on cumulative employment income:

| Cumulative employment income (LKR) | Tax |
|---|---|
| Up to 1,800,000 | Relief from tax (nil) |
| 1,800,001 – 2,800,000 | 6% − 108,000 |
| Over 2,800,000 | **15% − 360,000** |

Applies under IRA s.86(4)/83A to resident employees of foreign employers paid in foreign currency. **Source:** IRD APIT 2025/26 Table 08.

---

## Section 4 — Tier 2: classification, foreign income, reliefs

- **Salary vs business/professional income.** Employment income is taxed via APIT at source; business/professional income is self-assessed in the annual return and via the SET (estimated tax). Independent professional service fees over LKR 100,000/month also attract 5% AIT at source (see `sri-lanka-withholding-tax`).
- **Foreign-currency remote workers.** A resident physically in Sri Lanka working for a foreign employer and remitting foreign currency through a Sri Lankan bank uses the concessionary APIT Table 08 (top marginal 15%, not 36%). Require evidence of the foreign employer and the forex remittance.
- **Investment-asset gains.** Taxed at a flat **10%** capital gains rate, separate from the progressive bands; personal relief does not apply.
- **Foreign income & double-tax relief.** Residents are taxed on worldwide income; foreign tax credit / treaty relief may apply — VERIFY the treaty position with the practitioner (not asserted here).

---

## Section 5 — Worked example (illustrative — confirm against current APIT tables)

**Facts.** Nimal, resident Sri Lankan employee, single primary employment, gross employment income LKR 4,200,000 for YA 2025/26. No other income.

| Step | LKR |
|---|---|
| Gross employment income | 4,200,000 |
| Less: personal relief | (1,800,000) |
| Taxable income | 2,400,000 |
| Tax: first 1,000,000 @ 6% | 60,000 |
| Next 500,000 @ 18% | 90,000 |
| Next 500,000 @ 24% | 120,000 |
| Next 400,000 (to 2,400,000) @ 30% | 120,000 |
| **Total tax** | **390,000** |

In practice the employer deducts this monthly via APIT Table 01. Reconcile APIT deducted against the annual liability in the return.

---

## Section 6 — Filing and payment

- **Year of assessment:** 1 April – 31 March.
- **Statement of Estimated Tax Payable (SET):** filed under IRA **s.91**; YA 2025/26 due **15 August 2025**.
- **Annual return of income:** filed via IRD e-Services. (Exact individual return due date and quarterly self-assessment instalment dates — VERIFY against current IRD calendar; not asserted here.)
- **APIT:** employer deducts monthly and remits to IRD; employee reconciles in the annual return.

---

## Section 7 — Conservative defaults

| Situation | Default | Rationale |
|---|---|---|
| Relief eligibility unconfirmed | Do not apply relief until residency/citizenship confirmed | Avoid under-assessment |
| Marginal band borderline | Apply higher band | Cannot under-assess |
| Table 08 concession claimed without forex evidence | Apply standard APIT Table 01 | Affirmative evidence required |
| Capital gain mixed into income | Exclude from relief; tax at 10% separately | Statutory separation |
| Any figure flagged VERIFY | Flag for reviewer; do not finalise | Research-grade content |

---

## Section 8 — Sources

All figures anchored to official IRD primary sources for YA 2025/26 (verified by deep research, 2026-06):

1. IRD YA 2025/26 tax chart — https://www.ird.gov.lk/en/publications/SitePages/tax_chart_2526.aspx
2. IRD Notice PN/IT/2025-01 (26.03.2025) — https://www.ird.gov.lk/en/Lists/Latest%20News%20%20Notices/Attachments/666/PN_IT_2025-01_26032025_E.pdf
3. IRD APIT tables YA 2025/26 (Tables 01, 02, 08 + Guideline) — https://www.ird.gov.lk/en/publications/sitepages/apit_tax_tables.aspx
4. Consolidated Inland Revenue Act No. 24 of 2017 (to 2025 changes) — https://www.ird.gov.lk/en/publications/Acts_Income%20Tax_2017/IRA_Cons_Act_-_2025_Changes.pdf
5. SET YA 2025/26 form (s.91) — https://www.ird.gov.lk/en/Downloads/IT_SET_Doc/SET_2025_2026_E.pdf

**Known gaps / VERIFY items:** residency day-count test (IRA s.69); individual annual-return due date and quarterly instalment dates; treaty / foreign-tax-credit mechanics. These are flagged in-line and were not asserted from the research.

---

## Prohibitions

- NEVER apply the personal relief to a non-resident non-citizen, or to investment-asset gains.
- NEVER use pre-2025 figures (relief LKR 1,200,000, or old bands) for YA 2025/26 — the Amendment Act No. 02 of 2025 changed them effective 1 April 2025.
- NEVER apply the APIT Table 08 concession (top 15%) without evidence of a foreign employer and foreign-currency remittance.
- NEVER assert a residency day-count, an individual return due date, or treaty relief that this skill flags as VERIFY — flag for the reviewer.
- NEVER file or instruct filing — produce a working paper for review by a Sri Lankan CA / IRD-registered practitioner.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes. All outputs must be reviewed and signed off by a qualified Sri Lankan professional (Chartered Accountant / IRD-registered tax practitioner) before filing or acting upon. The most up-to-date, verified version is maintained at [openaccountants.com](https://www.openaccountants.com).

---

<!-- openaccountants-cta-block -->

## Talk to a verified accountant

This skill is a tool, not an engagement. Every taxpayer's situation is different, and the rules in the skill may not match your specific facts.

To speak with one of the licensed accountants who verifies skills for your jurisdiction — **no liability on either side until you and the accountant sign a formal engagement letter** — book a free 30-minute call:

**→ [Book a call](https://calendly.com/openaccountants-info/30min)**

We'll route you to the named verifier covering your country. You can also see the full list of verified accountants at [openaccountants.com/network](https://www.openaccountants.com/network).

<!-- openaccountants-mcp-cta -->

## The accountant-verified version lives in the connector

This file is the open, **research-grade draft**. The **accountant-verified**
version of this skill is **not published to GitHub** — it is delivered free
through the OpenAccountants MCP connector, where your AI agent loads the
verified rules together with the name of the accountant who signed them off.

**→ Install the free connector:** <https://www.openaccountants.com/connect>
**MCP endpoint:** `https://www.openaccountants.com/api/mcp`
