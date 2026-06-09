---
name: in-income-tax
description: >
  Use this skill whenever asked about Indiana individual income tax. Trigger on phrases like
  "Indiana income tax", "IN income tax", "IT-40", "Indiana county tax", "IC 6-3".
  Indiana has a flat 2.95% state rate plus mandatory county income taxes (0.5%–3.38%).
  ALWAYS load us-tax-workflow-base first.
jurisdiction: US-IN
version: "0.1"
validation_status: ai-drafted-q3
---

# Indiana Individual Income Tax Skill — Self-Employed / Sole Proprietor

> **Scope.** This skill covers Indiana Form IT-40 (Full-Year Resident Individual Income Tax Return) for sole proprietors and single-member LLCs. It addresses the flat state income tax, county income taxes, and Indiana-specific modifications to federal adjusted gross income. It does NOT cover part-year or nonresident returns (Form IT-40PNR), corporate returns, or partnership/S-corp pass-throughs.

> **Quality tier.** Q3 — AI-drafted, not independently verified. All outputs must be reviewed by a qualified tax professional before filing.

---

## Section 1: Metadata

| Field | Value |
|---|---|
| Jurisdiction | Indiana (US-IN) |
| Tax authority | [Indiana Department of Revenue (DOR)](https://www.in.gov/dor/) |
| Filing portal | [INtax / INTIME](https://intime.dor.in.gov/) |
| Legislation | Indiana Code Title 6, Article 3 (IC 6-3) — Adjusted Gross Income Tax |
| Primary form | Form IT-40 (Full-Year Resident Individual Income Tax Return) |
| Filing deadline | April 15, 2027 (for tax year 2026) |
| Version | 0.1 |
| Date | May 22, 2026 |
| Validation status | AI-drafted — Q3 |

### Sources consulted

1. Indiana Department of Revenue — Rates, Fees & Penalties: <https://www.in.gov/dor/resources/tax-rates-and-reports/rates-fees-and-penalties/>
2. DOR Departmental Notice #1 (Jan. 1, 2026) — County income tax rates: <https://www.in.gov/dor/files/dn01.pdf>
3. Tax Foundation — 2026 Indiana Tax Rates: <https://taxfoundation.org/location/indiana/>
4. IC 6-3-2-1 — Adjusted gross income tax rate
5. IC 6-3.6 — Local Income Tax (LIT) framework

---

## Section 2: Quick reference — rates and thresholds

### State income tax rate

| Tax year | Rate | Source |
|---|---|---|
| 2025 | 3.05% | IC 6-3-2-1 (phased reduction schedule) |
| 2026 | 2.95% | IC 6-3-2-1; DOR Departmental Notice #1 (Jan. 1, 2026) |
| 2027 (planned) | 2.90% | IC 6-3-2-1 |

Indiana imposes a **flat** state adjusted gross income tax. There are no graduated brackets.

### County income taxes

All 92 Indiana counties levy a local income tax (LIT) on top of the state rate. County rates are determined by the county of residence as of January 1 of the tax year.

| Example county | County rate (2026) | Combined rate |
|---|---|---|
| Marion (Indianapolis) | 2.02% | 4.97% |
| Hamilton (Carmel/Fishers) | 1.10% | 4.05% |
| Allen (Fort Wayne) | 1.48% | 4.43% |
| Lake (Gary/Hammond) | 1.50% | 4.45% |
| Switzerland (highest) | 3.38% | 6.33% |

Full county rate table: See DOR Departmental Notice #1 at <https://www.in.gov/dor/files/dn01.pdf>.

### Deductions and exemptions

| Item | Amount (2026) | Source |
|---|---|---|
| Standard deduction | None — Indiana does not have a state standard deduction | IC 6-3 |
| Personal exemption | $1,000 per taxpayer, spouse | IC 6-3-1-3.5(a)(3) |
| Dependent exemption | $1,500 per qualifying dependent | IC 6-3-1-3.5(a)(4) |
| Additional exemption (age 65+) | $1,000 per qualifying individual | IC 6-3-1-3.5(a)(5) |
| Additional exemption (blind) | $1,000 per qualifying individual | IC 6-3-1-3.5(a)(6) |

**Note:** Indiana also offers various add-back and deduction modifications (see Section 3) and tax credits that reduce the final liability.

---

## Section 3: How this skill works with the federal return

### Starting point

Indiana starts from **federal adjusted gross income (AGI)** — Form 1040, Line 11.

### Add-backs (additions to income)

| Item | Description | Source |
|---|---|---|
| Bonus depreciation | Indiana does not conform to IRC §168(k) bonus depreciation; add back the federal amount and claim standard MACRS instead | IC 6-3-1-3.5(b) |
| State/local tax refunds | If deducted federally in a prior year and included in federal AGI as income, adjustments may be needed | IC 6-3 |
| Other state/municipal bond interest | Interest from bonds of states other than Indiana must be added back | IC 6-3-1-3.5(b) |
| Section 179 excess | Indiana caps §179 at a lower threshold than federal — excess must be added back | IC 6-3-2-1.5 |

### Subtractions (deductions from income)

| Item | Description | Source |
|---|---|---|
| U.S. government interest | Interest on U.S. obligations (Treasuries, savings bonds) | IC 6-3-1-3.5(a)(2) |
| Social Security benefits | Indiana fully exempts Social Security benefits | IC 6-3-1-3.5(a) |
| Indiana NOL deduction | Net operating loss carryforward per Indiana rules | IC 6-3 |
| Military pay | Active-duty military pay for Indiana residents | IC 6-3-1-3.5(a) |
| Renter's deduction | Up to $3,000 for qualifying renters | IC 6-3-1-3.5(a)(7) |
| Indiana 529 contributions | Up to $7,500 per taxpayer for contributions to Indiana CollegeChoice 529 plans | IC 6-3-1-3.5(a) |

### Resulting computation

Federal AGI + add-backs − subtractions = Indiana adjusted gross income → minus exemptions → times 2.95% = state tax.

---

## Section 4: Self-employed specific rules

### Estimated tax payments

Self-employed individuals must make quarterly estimated tax payments if they expect to owe $1,000 or more for the year in combined state and county income tax.

| Voucher | Due date |
|---|---|
| 1st quarter | April 15 |
| 2nd quarter | June 15 |
| 3rd quarter | September 15 |
| 4th quarter | January 15 (following year) |

Use Form ES-40 for estimated payments.

### Self-employment health insurance
Indiana follows federal treatment — the self-employed health insurance deduction reduces federal AGI and flows through automatically.

### Retirement contributions (SEP, SIMPLE, Solo 401(k))
Indiana follows federal treatment — these deductions reduce federal AGI and flow through to Indiana.

### Home office deduction
Indiana follows the federal home office deduction as part of Schedule C, which is included in federal AGI.

### QBI deduction (Section 199A)
Indiana does **not** allow the federal qualified business income deduction because Indiana starts from federal AGI (before QBI deduction). The QBI deduction does not affect Indiana taxable income.

---

## Section 5: Tier 1 rules — deterministic

| Rule | Description |
|---|---|
| R-1 | Apply the flat 2.95% rate to Indiana adjusted gross income after exemptions. No graduated brackets. |
| R-2 | Look up the county of residence as of January 1 and apply the correct county tax rate from Departmental Notice #1. |
| R-3 | Add back all out-of-state municipal bond interest to federal AGI. |
| R-4 | Subtract all U.S. government bond interest from federal AGI. |
| R-5 | Subtract Social Security income included in federal AGI. |
| R-6 | Add back federal bonus depreciation and substitute Indiana MACRS depreciation. |
| R-7 | County tax is computed on Indiana adjusted gross income (same base as state tax). |

---

## Section 6: Tier 2 rules — requires judgment

| Rule | Description |
|---|---|
| J-1 | Determine whether a home office qualifies under both federal and Indiana rules when the taxpayer has multiple work locations. |
| J-2 | Evaluate whether part-year county residency applies when the taxpayer moved between Indiana counties during the year. |
| J-3 | Assess Indiana NOL carryforward interaction with federal NOL when there are different add-back histories. |
| J-4 | Determine eligibility for the renter's deduction when lease arrangements are non-standard. |

---

## Section 7: Supplier pattern library

| Pattern | Indiana treatment |
|---|---|
| Freelance income (Schedule C) | Flows through federal AGI → Indiana AGI. Subject to both state and county tax. |
| Rental income (Schedule E) | Flows through federal AGI → Indiana AGI. Subject to both state and county tax. |
| Capital gains | Fully taxable at the flat 2.95% state rate + county rate. |
| Interest / dividends | Taxable except U.S. government obligations (exempt). |
| Social Security | Fully exempt from Indiana income tax. |
| Retirement distributions | Generally taxable; Indiana provides a military retirement exclusion. |

---

## Section 8: Form mapping

| Form IT-40 line | Description | Source |
|---|---|---|
| Line 1 | Federal adjusted gross income (Form 1040, Line 11) | Federal return |
| Line 2 | Add-backs (Schedule 1 of IT-40) | IC 6-3-1-3.5(b) |
| Line 3 | Income subject to add-back | Sum of Line 1 + Line 2 |
| Line 7 | Deductions (Schedule 2 of IT-40) | IC 6-3-1-3.5(a) |
| Line 8 | Indiana adjusted gross income | Line 3 − Line 7 |
| Line 9 | Exemptions | IC 6-3-1-3.5(a)(3)-(6) |
| Line 11 | State taxable income | Line 8 − Line 9 |
| Line 12 | State tax (Line 11 × 2.95%) | IC 6-3-2-1 |
| Line 13 | County tax (Line 11 × county rate) | IC 6-3.6 |
| Line 14 | Total tax | Line 12 + Line 13 |
| Lines 15–22 | Credits | Various |
| Lines 23–27 | Payments and withholding | Various |
| Line 30 | Balance due or refund | Computed |

---

## Section 9: Refusal catalogue

| Code | Situation | Action |
|---|---|---|
| REF-IN-01 | Taxpayer is a part-year or nonresident | Refuse; requires Form IT-40PNR. |
| REF-IN-02 | Taxpayer has multi-state business apportionment | Refuse; requires specialist review. |
| REF-IN-03 | Taxpayer has partnership or S-corp pass-through income (Schedule K-1) with Indiana add-backs | Flag for reviewer — complex modifications. |
| REF-IN-04 | Taxpayer claims Indiana Historic Rehabilitation Credit or other complex credits | Flag for reviewer — requires separate form. |
| REF-IN-05 | Taxpayer changed county of residence during the year | Flag for reviewer — county tax proration rules apply. |

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com).

---

<!-- openaccountants-cta-block -->

## Talk to a verified accountant

This skill is a tool, not an engagement. Every taxpayer's situation is
different, and the rules in the skill may not match your specific facts.

To speak with one of the licensed accountants who verifies skills for your
jurisdiction — **no liability on either side until you and the accountant sign
a formal engagement letter** — book a free 30-minute call:

**→ [Book a call](https://calendly.com/openaccountants-info/30min)**

We'll route you to the named verifier covering your country or state. You can
also see the full list of verified accountants at
[openaccountants.com/network](https://www.openaccountants.com/network).

<!-- openaccountants-mcp-cta -->

## The accountant-verified version lives in the connector

This file is the open, **research-grade draft**. The **accountant-verified**
version of this skill is **not published to GitHub** — it is delivered free
through the OpenAccountants MCP connector, where your AI agent loads the
verified rules together with the name of the accountant who signed them off.

**→ Install the free connector:** <https://www.openaccountants.com/connect>
**MCP endpoint:** `https://www.openaccountants.com/api/mcp`
