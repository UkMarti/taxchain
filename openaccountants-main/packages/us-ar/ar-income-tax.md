---
name: ar-income-tax
description: Use this skill whenever asked about Arkansas individual income tax for self-employed individuals or sole proprietors — filing Form AR1000F, AR estimated tax, Arkansas tax brackets, Arkansas deductions, or any query involving Arkansas state income tax compliance. Trigger on phrases like "Arkansas income tax", "AR income tax", "Form AR1000F", "Arkansas estimated tax", "Arkansas self-employed tax", "DFA income tax", or "Ark. Code Ann. §26-51".
jurisdiction: US-AR
version: "0.1"
validation_status: ai-drafted-q3
---

# Arkansas Individual Income Tax Skill — Self-Employed / Sole Proprietor

> **Scope.** This skill covers Arkansas individual income tax for self-employed individuals and sole proprietors filing Form AR1000F. It addresses tax computation, deductions, estimated payments, and form mapping.
> **Quality tier.** Q3 — AI-drafted with citations; not independently verified by a licensed professional.

## Section 1: Metadata

| Field | Value |
|---|---|
| Jurisdiction | Arkansas, United States |
| Jurisdiction code | US-AR |
| Tax authority | Arkansas Department of Finance and Administration (DFA) |
| Filing portal | https://www.atap.arkansas.gov |
| Legislation citation | Ark. Code Ann. §26-51-201 et seq. |
| Primary form | Form AR1000F — Full Year Resident Individual Income Tax Return |
| Filing deadline | April 15 (follows federal deadline) |
| Version | 0.1 |
| Generated | 2026-05-22 |
| Validation status | AI-drafted — Q3 |

### Sources consulted

1. Arkansas DFA — Personal Income Tax Rates (2025): https://www.arkansasedc.com/why-arkansas/business-climate/tax-structure/personal-income-tax
2. Arkansas Form AR1000F Instructions (TY 2025): https://www.dfa.arkansas.gov/wp-content/uploads/2025_AR1000F_and_AR1000NR_Instructions.pdf
3. Arkansas 2025 Tax Tables: https://www.dfa.arkansas.gov/wp-content/uploads/2025_TaxTables.pdf
4. Ark. Code Ann. §26-51-201: https://www.arkleg.state.ar.us/

---

## Section 2: Quick reference — rates and thresholds

### Tax rates (TY 2025)

**Regular Tax Table — All filing statuses (net taxable income ≤ $92,300):**

| Net taxable income | Rate |
|---|---|
| $0 – $5,499 | 0% |
| $5,500 – $10,899 | 2.0% |
| $10,900 – $15,599 | 3.0% |
| $15,600 – $25,699 | 3.4% |
| $25,700 – $92,300 | 3.9% |

**High-income table (net taxable income > $92,300):**

| Net taxable income | Rate |
|---|---|
| $0 – $4,600 | 2.0% |
| $4,601 and above | 3.9% |

The top marginal rate of **3.9%** applies for TY 2025 (reduced from 4.4% by Act 1 of the Second Extraordinary Session of 2024).

### Standard deduction (TY 2025)

| Filing status | Standard deduction |
|---|---|
| Single (Status 1) | $2,410 |
| Married Filing Jointly (Status 2) | $4,820 |
| Married Filing Separately (Status 4/5) | $2,410 |
| Head of Household (Status 3) | $2,410 |
| Qualifying Surviving Spouse (Status 6) | $2,410 |

### Personal tax credit

| Credit | Amount |
|---|---|
| Per exemption (taxpayer, spouse, dependents) | $29 |

**Special note:** Residents of Texarkana, Arkansas are fully exempt from Arkansas individual income taxes.

---

## Section 3: How this skill works with the federal return

1. **Starting point:** Arkansas begins with **federal adjusted gross income** (from federal Form 1040, Line 11).
2. **Arkansas adjustments (Form AR1000ADJ):** Add back or subtract items per Arkansas law.
3. **Arkansas additions:** Income not included federally but taxable in AR (e.g., certain exempt interest from other states).
4. **Arkansas subtractions:** Income included federally but exempt in AR (e.g., first $6,000 of retirement income for taxpayers 59½+, active-duty military income, U.S. obligation interest).
5. **Deductions:** Subtract standard deduction or Arkansas itemized deductions.
6. **Result:** Net taxable income → apply graduated rates from tax table.

---

## Section 4: Self-employed specific rules

### Federal conformity
- Arkansas generally conforms to the IRC for computing income, including Schedule C business deductions.
- Arkansas adopts most above-the-line deductions that reduce federal AGI.

### QBI deduction (§199A)
- The federal QBI deduction is taken below the line on the federal return and does **not** affect federal AGI. Therefore, it does not flow into Arkansas's starting point. Arkansas does not have its own QBI equivalent deduction.

### SE health insurance deduction
- Flows through federal AGI (above-the-line deduction on federal Form 1040) and is automatically reflected in Arkansas's starting point.

### Retirement contributions
- SEP-IRA and Solo 401(k) contributions reduce federal AGI and therefore reduce Arkansas starting income.
- Arkansas provides an additional subtraction for up to $6,000 of retirement income received (age 59½+).

### Home office deduction
- Federal home office deduction flows through Schedule C and is reflected in federal AGI.

### Estimated tax payments
- **Threshold:** Must pay estimated tax if you expect to owe tax after withholding and credits (Arkansas follows federal estimated tax principles).
- **Due dates:** April 15, June 15, September 15, January 15.
- **Payment methods:** Via ATAP (Arkansas Taxpayer Access Point) online portal or by mail with Form AR1000ES.
- **Safe harbor:** Pay 90% of current year liability or 100% of prior year liability.

---

## Section 5: Tier 1 rules — deterministic

| # | Rule | Logic |
|---|---|---|
| T1-01 | Apply graduated rates to AR net taxable income | Use regular or high-income table based on income level |
| T1-02 | Standard deduction by filing status | $2,410 (single/HOH/MFS) or $4,820 (MFJ) |
| T1-03 | Personal tax credit | $29 per exemption |
| T1-04 | Retirement income subtraction | Up to $6,000 for taxpayers age 59½+ |
| T1-05 | Filing requirement | Based on filing status and gross income thresholds (e.g., Single ≥ $14,644) |
| T1-06 | Texarkana exemption | Full exemption for Texarkana, AR residents |
| T1-07 | High-income table threshold | Use alternate table if net taxable income > $92,300 |

---

## Section 6: Tier 2 rules — requires judgment

| # | Rule | Why judgment needed |
|---|---|---|
| T2-01 | Standard deduction vs. itemized | Taxpayer must compare; both spouses must use same method |
| T2-02 | Regular vs. low-income tax table | Low-income table incorporates standard deduction — cannot also claim separately |
| T2-03 | Part-year resident allocation | Requires Form AR1000NR and income sourcing analysis |
| T2-04 | Credit for taxes paid to other states | Requires documentation of income taxed elsewhere |
| T2-05 | Business vs. hobby determination | Same federal analysis, but affects AR Schedule C flow-through |
| T2-06 | Timing of income recognition | Arkansas may differ from federal for certain items |

---

## Section 7: Supplier pattern library

| Pattern on bank/CC statement | Likely meaning |
|---|---|
| `AR DFA` / `ARKANSAS DFA` | Arkansas income tax payment |
| `ATAP PAYMENT` | Payment via ATAP portal |
| `STATE OF AR TAX` | State tax payment |
| `ARKANSAS DEPT FIN` | Department of Finance and Administration payment |

---

## Section 8: Form mapping

| Computed value | Form AR1000F line |
|---|---|
| Federal AGI | Line 15 |
| Arkansas adjustments (additions) | Line 16 (via AR1000ADJ) |
| Arkansas adjustments (subtractions) | Line 17 (via AR1000ADJ) |
| AR adjusted gross income | Line 25 |
| Standard deduction or itemized | Line 27 |
| Net taxable income | Line 28 |
| Tax from table | Line 29 |
| Personal tax credits | Line 30 |
| Net tax | Line 34 |
| Estimated payments | Line 38 |
| Balance due / refund | Lines 44–47 |

---

## Section 9: Refusal catalogue

This skill must refuse and recommend professional review when:

| # | Condition |
|---|---|
| R-01 | Taxpayer has multistate business activity requiring apportionment |
| R-02 | Taxpayer is a part-year resident with complex sourcing (Form AR1000NR) |
| R-03 | Taxpayer has Arkansas NOL carryforward |
| R-04 | Questions about Arkansas pass-through entity elections |
| R-05 | Issues involving Arkansas credits (InvestArk, Advantage Arkansas, etc.) |
| R-06 | Capital gains exclusion questions (Arkansas provides partial exclusion) |
| R-07 | Audit representation or controversy matters |
| R-08 | Any question about tax fraud, evasion, or aggressive positions |

---

## Disclaimer
This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.

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
