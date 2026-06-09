---
name: pt-nhr-ifici
description: >
  Use this skill for any question about Portugal's special tax regimes for new residents. Trigger on: "NHR Portugal", "non-habitual resident Portugal", "IFICI Portugal", "Portugal digital nomad tax", "move to Portugal taxes", "20% flat rate Portugal", "foreign income Portugal tax exempt", "Portugal tax regime new residents", "NHR abolished", "recibos verdes NHR", "Portugal tech worker tax", "Portugal researcher tax regime". Covers NHR (for existing holders), IFICI (from 2024), eligibility criteria, rates, foreign income treatment. ALWAYS load before advising anyone considering or already on a Portuguese special tax regime.
version: 1.0
jurisdiction: PT
tax_year: 2025
category: international
depends_on:
  - pt-income-tax
---

# Portugal — NHR & IFICI Special Tax Regimes — Skill v1.0

---

## Section 1 — Quick Reference

| Field | Value |
|---|---|
| Country | Portugal |
| NHR (Non-Habitual Resident) | Closed to new applicants from 1 January 2024 |
| IFICI | New regime from 1 January 2024 (replaces NHR) |
| IFICI rate | 20% flat on Portuguese-sourced qualifying income |
| Duration | 10 years (both NHR and IFICI) |
| Eligibility gap | Must not have been PT tax resident in preceding 5 years (IFICI) / 3 years (NHR) |
| Primary legislation | Personal Income Tax Code (CIRS), Article 16 (NHR); Article 58-A (IFICI) |
| Tax authority | Autoridade Tributária e Aduaneira (portaldasfinancas.gov.pt) |
| Verified by | Pending — Portuguese tax adviser sign-off required |

---

## Section 2 — NHR (Non-Habitual Resident) — Existing Holders Only

**NHR is closed** to new applicants from 1 January 2024. Individuals who registered as NHR before that date can remain on the regime for the remainder of their 10-year period.

**NHR benefits (for existing holders):**

| Income type | NHR treatment |
|---|---|
| Portuguese employment/self-employment in "high value" activities | 20% flat rate (instead of up to 48% progressive) |
| Foreign employment income | Exempt in Portugal (if taxed in source country) |
| Foreign pension income (pre-2020 applicants) | 10% flat rate |
| Foreign pension income (post-2020) | Progressive rates apply (exemption was removed) |
| Foreign dividends, interest, royalties | Exempt in Portugal (if subject to tax in source country) |
| Foreign capital gains | Exempt in Portugal (if subject to tax in source country) |

"High value activities" include IT, architecture, engineering, medicine, scientific research, senior management.

**Important**: the foreign income exemption requires that the income CAN be taxed in the source country under the relevant DTA (it does not need to have actually been taxed — just not exempt under the treaty).

---

## Section 3 — IFICI (Incentivo Fiscal à Investigação Científica e Inovação) — From 2024

IFICI is the replacement for NHR for new arrivals from 1 January 2024.

**Eligibility:**
- Become a Portuguese tax resident in 2024 or later
- Not been a tax resident of Portugal in the **preceding 5 years** (stricter than NHR's 3 years)
- Must be employed or self-employed in a **qualifying activity** in Portugal OR provide services to a non-Portuguese entity

**Qualifying activities for IFICI:**
- Highly qualified professionals (similar to NHR high-value activities)
- Researchers and academics
- IT and technology professionals
- Senior management of companies investing in Portugal
- Founders/employees of startups recognised under the Startup Portugal framework

**IFICI tax rates:**

| Income | IFICI rate |
|---|---|
| Portuguese employment/self-employment in qualifying activity | **20% flat rate** |
| Foreign-sourced income (employment, professional, dividends, interest, royalties, pensions) | **Exempt in Portugal** (if taxable in source country under DTA) |
| Portuguese capital gains | Progressive rates (no special IFICI rate) |
| Foreign capital gains | **Exempt in Portugal** (if taxable in source country) |

**Duration**: 10 years from the year of becoming resident.

**Application**: must apply for IFICI status to the Autoridade Tributária by 31 January of the year after becoming resident (or the year itself in some cases). Registration via IRS Mod. 3.

---

## Section 4 — Comparison: NHR vs IFICI

| Feature | NHR (existing holders) | IFICI (new from 2024) |
|---|---|---|
| Closed to new applicants? | Yes (from Jan 2024) | No — this is the current regime |
| Eligibility gap | 3 years non-resident | 5 years non-resident |
| PT income flat rate | 20% | 20% |
| Foreign income exempt | Yes (broad) | Yes (qualifying activities only for employment) |
| Foreign pensions | 10% (pre-2020 NHR) | Exempt if taxable at source |
| Qualifying activities required? | Yes for 20% rate | Yes |
| Duration | 10 years | 10 years |

---

## Section 5 — What "Exempt in Portugal" Actually Means

For foreign income to be exempt under IFICI/NHR:
1. The income must arise outside Portugal
2. The relevant DTA must allow the source country to tax it (even if they choose not to)
3. If there is no DTA and the country is not on Portugal's "tax haven" blacklist, the income is still exempt under domestic rules

**Practical example**: A tech worker moves to Lisbon. They have a UK employer. UK salary is exempt in Portugal under IFICI (UK has taxing rights under UK-PT DTA). The worker pays UK PAYE and nothing in Portugal on that salary.

**Trap**: countries on Portugal's tax haven blacklist — income from these is NOT exempt even under IFICI/NHR.

---

## Section 6 — Capital Gains in Portugal

Portuguese-source capital gains on shares are taxed at **28%** (autonomous rate) for most individuals. IFICI does not provide a reduced rate on Portuguese capital gains — only on qualifying employment/professional income.

Foreign capital gains are **exempt** under IFICI if taxable in the source country. See `pt-income-tax` for full capital gains analysis.

---

## Section 7 — Sources

- CIRS Article 16 (ordinary residence and NHR)
- CIRS Article 58-A (IFICI, inserted by Orçamento do Estado 2024)
- AT: portaldasfinancas.gov.pt
- Decree-Law regulating IFICI qualifying activities

> **Working paper only.** IFICI eligibility requires verification that the specific role qualifies and that the 5-year gap is satisfied. Engage a Portuguese tax adviser for formal confirmation. NHR abolition and IFICI rules were amended by the 2024 Budget — confirm current rules with the AT portal.
