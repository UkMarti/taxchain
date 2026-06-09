---
name: co-income-tax
description: Use this skill whenever asked about Colorado individual income tax for self-employed individuals or sole proprietors — filing Form DR 0104, CO estimated tax (Form DR 0104EP), Colorado flat tax rate, Colorado additions and subtractions, or any query involving Colorado state income tax compliance. Trigger on phrases like "Colorado income tax", "CO income tax", "Form 104", "DR 0104", "Colorado estimated tax", "Colorado self-employed tax", "TABOR refund", or "C.R.S. §39-22".
jurisdiction: US-CO
version: "0.1"
validation_status: ai-drafted-q3
---

# Colorado Individual Income Tax Skill — Self-Employed / Sole Proprietor

> **Scope.** This skill covers Colorado individual income tax for self-employed individuals and sole proprietors filing Form DR 0104. It addresses tax computation, deductions, estimated payments, and form mapping.
> **Quality tier.** Q3 — AI-drafted with citations; not independently verified by a licensed professional.

## Section 1: Metadata

| Field | Value |
|---|---|
| Jurisdiction | Colorado, United States |
| Jurisdiction code | US-CO |
| Tax authority | Colorado Department of Revenue |
| Filing portal | https://revenueonline.colorado.gov |
| Legislation citation | C.R.S. §39-22 (Income Tax) |
| Primary form | DR 0104 — Colorado Individual Income Tax Return |
| Filing deadline | April 15 (follows federal deadline) |
| Version | 0.1 |
| Generated | 2026-05-22 |
| Validation status | AI-drafted — Q3 |

### Sources consulted

1. Colorado Department of Revenue — Book 104 (2025 Filing Guide): https://tax.colorado.gov/sites/tax/files/documents/Book104_2025.pdf
2. Colorado Department of Revenue — Estimated Payments: https://tax.colorado.gov/individual-income-tax-estimated-payments
3. Colorado Form DR 0104EP: https://tax.colorado.gov/DR0104EP
4. Colorado Income Tax Calculator (SmartAsset): https://smartasset.com/taxes/colorado-tax-calculator

---

## Section 2: Quick reference — rates and thresholds

### Tax rate (TY 2025)

Colorado imposes a **flat income tax rate of 4.4%** on all Colorado taxable income, regardless of filing status or income level.

| Filing status | Rate | Applies to |
|---|---|---|
| All statuses | 4.4% | All Colorado taxable income |

The rate was reduced from 4.55% (TY 2024) to 4.4% (TY 2025) through TABOR-related adjustments.

### Standard deduction

Colorado uses the **federal standard deduction** amounts. For TY 2025:

| Filing status | Standard deduction |
|---|---|
| Single | $15,000 |
| Married Filing Jointly | $30,000 |
| Married Filing Separately | $15,000 |
| Head of Household | $22,500 |

(These are the federal amounts; Colorado taxable income starts from federal taxable income, which already incorporates the federal standard deduction or itemized deductions.)

### TABOR refunds

Colorado's Taxpayer's Bill of Rights (TABOR) limits state revenue growth. When revenue exceeds limits, taxpayers receive refunds. These refunds are typically claimed on the DR 0104 or issued automatically.

---

## Section 3: How this skill works with the federal return

1. **Starting point:** Colorado begins with **federal taxable income** (federal Form 1040, Line 15). This is unusual — most states start from federal AGI.
2. **Colorado additions (DR 0104AD):** Add back amounts deducted federally but not recognized by Colorado (e.g., state income tax refund if previously deducted, certain bond interest from other states).
3. **Colorado subtractions (DR 0104AD):** Subtract Colorado-exempt income (e.g., Social Security benefits for age 55+, PERA/DPS pension income, U.S. government interest, Colorado-source capital gains subtraction).
4. **Result:** Colorado taxable income × 4.4% = Colorado tax.

**Key implication:** Because Colorado starts from federal taxable income, the federal standard deduction (or itemized deductions) is already incorporated. Taxpayers cannot separately choose between standard/itemized for Colorado — they must use whatever they chose federally.

---

## Section 4: Self-employed specific rules

### Federal conformity
- Colorado is a strong conformity state — it starts from federal taxable income, so nearly all federal provisions automatically flow through.
- Schedule C business deductions, above-the-line deductions, and the QBI deduction (§199A) all flow through to Colorado because they reduce federal taxable income.

### QBI deduction (§199A)
- **Fully flows through** to Colorado because Colorado starts from federal taxable income (Line 15), which is calculated after the QBI deduction.

### SE health insurance deduction
- Reduces federal AGI (above-the-line), ultimately reducing federal taxable income, which flows to Colorado.

### Retirement contributions
- SEP-IRA and Solo 401(k) contributions reduce federal AGI → federal taxable income → Colorado starting point.

### Home office deduction
- Federal home office deduction flows through Schedule C → federal AGI → federal taxable income → Colorado.

### Estimated tax payments (Form DR 0104EP)

- **Threshold:** Must pay estimated tax if you expect to owe > $1,000 in net tax after withholding and credits.
- **Safe harbor:** Pay the lesser of 70% of current year tax or 100% of prior year tax (110% for high-income).
- **Due dates:** April 15, June 15, September 15, January 15.
- **Payment methods:** Revenue Online (revenueonline.colorado.gov), credit/debit card, e-check, EFT, or mail Form DR 0104EP with check to Colorado Department of Revenue, Denver, CO 80261-0008.

---

## Section 5: Tier 1 rules — deterministic

| # | Rule | Logic |
|---|---|---|
| T1-01 | Apply 4.4% flat rate to Colorado taxable income | Single rate × taxable income |
| T1-02 | Start from federal taxable income | Federal Form 1040, Line 15 |
| T1-03 | Social Security subtraction (age 55–64) | Partial subtraction available |
| T1-04 | Social Security subtraction (age 65+) | Full subtraction of benefits included in federal taxable income |
| T1-05 | Estimated tax threshold | Net tax after withholding/credits > $1,000 |
| T1-06 | U.S. government interest subtraction | Subtract interest on U.S. obligations included in federal taxable income |
| T1-07 | State refund addition | Add back state tax refund if itemized in prior year |

---

## Section 6: Tier 2 rules — requires judgment

| # | Rule | Why judgment needed |
|---|---|---|
| T2-01 | Colorado-source capital gains subtraction | Must meet holding period and Colorado-source requirements |
| T2-02 | Part-year resident apportionment | Requires Form DR 0104PN and income allocation |
| T2-03 | TABOR refund election | Taxpayer may choose between cash refund or credit against future tax |
| T2-04 | Charitable contribution subtraction | Colorado allows additional subtraction for certain charitable giving (above federal benefit) |
| T2-05 | Multistate income apportionment | Business income from multiple states requires analysis |
| T2-06 | Net operating loss | Colorado follows federal NOL rules with some modifications |

---

## Section 7: Supplier pattern library

| Pattern on bank/CC statement | Likely meaning |
|---|---|
| `CO DEPT OF REVENUE` / `COLORADO DOR` | Colorado income tax payment |
| `REVENUE ONLINE CO` | Payment via Revenue Online portal |
| `STATE OF CO TAX` | State tax payment |
| `COLORADO DEPT REV` | Department of Revenue payment |
| `CO DR 0104EP` | Estimated tax payment |

---

## Section 8: Form mapping

| Computed value | Form DR 0104 line |
|---|---|
| Federal taxable income | Line 1 |
| Colorado additions | Line 3 (from DR 0104AD) |
| Colorado subtractions | Line 5 (from DR 0104AD) |
| Colorado taxable income | Line 12 |
| Colorado tax (4.4% × Line 12) | Line 13 |
| Alternative minimum tax | Line 14 |
| Credits (DR 0104CR) | Line 18 |
| Net tax | Line 20 |
| Estimated payments | Line 30 |
| Balance due / refund | Lines 36–37 |

---

## Section 9: Refusal catalogue

This skill must refuse and recommend professional review when:

| # | Condition |
|---|---|
| R-01 | Taxpayer has multistate business activity requiring apportionment |
| R-02 | Taxpayer is a part-year resident with complex sourcing (DR 0104PN) |
| R-03 | Taxpayer has Colorado NOL carryforward with state-specific modifications |
| R-04 | Questions about Colorado enterprise zone credits |
| R-05 | Issues involving Colorado alternative minimum tax |
| R-06 | TABOR refund mechanism questions requiring legal interpretation |
| R-07 | Colorado child care / earned income tax credit calculations |
| R-08 | Audit representation or controversy matters |
| R-09 | Any question about tax fraud, evasion, or aggressive positions |

---

## Disclaimer
This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
