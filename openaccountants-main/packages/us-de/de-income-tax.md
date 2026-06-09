---
name: de-income-tax
description: >
  Delaware Individual Income Tax Return (Form PIT-RES) for sole proprietors and single-member LLCs.
  Covers the seven-bracket graduated system (0%–6.6%), Delaware standard deduction, modifications to
  federal AGI, and personal credits. Trigger: taxpayer is a Delaware resident with gross income
  exceeding filing thresholds.
jurisdiction: US-DE
version: "0.1"
validation_status: ai-drafted-q3
---

# Delaware Individual Income Tax Skill — Self-Employed / Sole Proprietor

> **Scope.** This skill covers Delaware individual income tax for self-employed individuals and sole proprietors filing Form PIT-RES (formerly Form 200-01). It handles the graduated rate structure, Delaware-specific standard deduction, and modifications to federal AGI.
> **Quality tier.** Q3 — AI-drafted with citations. Must be reviewed by a qualified professional before use.

---

## Section 1: Metadata

| Field | Value |
|---|---|
| Jurisdiction | US-DE (Delaware) |
| Tax authority | Delaware Division of Revenue |
| Filing portal | [Delaware Taxpayer Portal](https://dorweb.revenue.delaware.gov/tapWeb/) |
| Legislation citation | 30 Del. C. Chapter 11 (Personal Income Tax) |
| Primary form | Form PIT-RES (Resident Individual Income Tax Return) |
| Filing deadline | April 30, 2026 (for tax year 2025) |
| Extension | Automatic 5.5-month extension to October 15; tax must be paid by April 30 |
| Version | 0.1 |
| Generated date | May 22, 2026 |
| Validation status | AI-drafted — Q3 |

### Sources consulted

- Delaware Division of Revenue — PIT-RES Instructions (2025): https://revenuefiles.delaware.gov/2025/PITForms_Instructions/Instructions/PIT-RES_Instructions_2025-01.pdf
- 30 Del. C. § 1102 (tax rates): https://law.justia.com/codes/delaware/title-30/chapter-11/
- 30 Del. C. § 1108 (standard deduction): https://law.justia.com/codes/delaware/title-30/chapter-11/subchapter-ii/section-1108/
- Delaware Division of Revenue — Doing Business in Delaware: https://revenue.delaware.gov/business-tax-forms/doing-business-in-delaware/
- Tax Foundation — Delaware state profile: https://taxfoundation.org/location/delaware/

---

## Section 2: Quick reference — rates and thresholds

### Tax year 2025 brackets (all filing statuses)

| Taxable income | Rate |
|---|---|
| $0 – $2,000 | 0% |
| $2,001 – $5,000 | 2.2% |
| $5,001 – $10,000 | 3.9% |
| $10,001 – $20,000 | 4.8% |
| $20,001 – $25,000 | 5.2% |
| $25,001 – $60,000 | 5.55% |
| Over $60,000 | 6.6% |

Source: 30 Del. C. § 1102(a)(14); effective for taxable years beginning after 12/31/2013 and before 1/1/2026.

**Note on 2026 tax year:** Legislation (HS 2 for HB 13) proposes new brackets for tax years beginning after 12/31/2025 with reduced rates on lower brackets and new brackets at $150K, $250K, and $500K (6.6%, 6.75%, 6.85%, 6.95%). As of May 2026, this legislation has NOT been enacted. Monitor Delaware General Assembly for updates.

### Standard deduction (tax year 2025)

| Filing status | Standard deduction |
|---|---|
| Single | $3,250 |
| Married filing jointly | $6,500 |
| Married filing separately | $3,250 |
| Head of household | $3,250 |

Additional standard deduction: $2,500 per qualifying condition (age 65+ or blind; max $5,000 per individual).

### Personal credits

| Credit | Amount |
|---|---|
| Personal credit (taxpayer) | $110 |
| Personal credit (spouse, if joint) | $110 |
| Dependent credit (each) | $110 |

### Filing thresholds (tax year 2025)

| Filing status | Under 60 | 60–64 | 65+ or blind | 65+ and blind |
|---|---|---|---|---|
| Single / MFS / HoH | $9,400 | $12,200 | $14,700 | $17,200 |
| Married filing jointly | $15,450 | $17,950 | $20,450 | $22,950 |

---

## Section 3: How this skill works with the federal return

**Starting point:** Delaware begins with federal adjusted gross income (AGI) from federal Form 1040, Line 11.

### Key additions to Delaware income
- Interest on state/local obligations of other states (not Delaware or federal)
- Fiduciary adjustments

### Key subtractions from Delaware income
- Social Security benefits (fully excluded — Delaware does not tax Social Security)
- Pension/retirement income exclusion: up to $12,500 for taxpayers age 60+ (per person)
- Taxable Social Security already excluded above
- Delaware state tax refund included in federal AGI
- Certain disability income exclusions
- Qualified dividends/capital gains exclusion for taxpayers age 60+ (within the $12,500 limit)

### Net result
Federal AGI ± Delaware modifications = Delaware adjusted gross income → minus standard or itemized deduction = Delaware taxable income → apply rate table → subtract personal credits.

---

## Section 4: Self-employed specific rules

### QBI conformity
Delaware starts from federal AGI. The federal QBI deduction (§199A) is below the AGI line and does NOT affect Delaware's starting point. Delaware does not separately allow or disallow QBI.

### SE health insurance deduction
Already reflected in federal AGI (Form 1040, Schedule 1, Line 17). Flows through to Delaware automatically.

### Retirement contributions (SEP, SIMPLE, solo 401(k))
Already reflected in federal AGI. No Delaware add-back required.

### Home office deduction
Already reflected in Schedule C → federal AGI. Flows through automatically.

### Estimated tax (Form PIT-EST)
Self-employed individuals must make quarterly estimated payments if they expect to owe $400 or more. Voucher due dates: April 30, June 15, September 15, January 15.

### Gross Receipts Tax interaction
Delaware sole proprietors are also subject to the Delaware Gross Receipts Tax on business revenue. See `de-gross-receipts-tax.md`. The GRT paid is a deductible business expense on federal Schedule C, reducing federal AGI and therefore Delaware taxable income.

---

## Section 5: Tier 1 rules — deterministic

| Rule ID | Rule |
|---|---|
| DE-IT-1.01 | Delaware taxable income = Delaware AGI minus standard (or itemized) deduction |
| DE-IT-1.02 | If taxable income < $60,000, use tax table; if ≥ $60,000, use tax rate schedule |
| DE-IT-1.03 | Personal credits ($110 each) reduce tax dollar-for-dollar (non-refundable) |
| DE-IT-1.04 | First $2,000 of taxable income is taxed at 0% |
| DE-IT-1.05 | Social Security benefits are fully excluded from Delaware income |
| DE-IT-1.06 | Pension/retirement exclusion: up to $12,500 per person for taxpayers age 60+ |
| DE-IT-1.07 | Delaware does NOT impose a sales tax — no use tax obligation for individuals |
| DE-IT-1.08 | Earned Income Tax Credit: 4.5% of federal EITC (non-refundable) |

---

## Section 6: Tier 2 rules — requires judgment

| Rule ID | Rule | Judgment needed |
|---|---|---|
| DE-IT-2.01 | Standard vs. itemized deduction election | Delaware allows itemization independently of federal choice; compare amounts |
| DE-IT-2.02 | Wilmington earned income tax interaction | City of Wilmington imposes separate earned income tax (1.25%); not part of state return but affects total tax burden |
| DE-IT-2.03 | Multi-state income allocation | If taxpayer earned income in other states, credit for taxes paid to other states may apply |
| DE-IT-2.04 | Business vs. investment income characterization | Affects whether gross receipts tax applies |
| DE-IT-2.05 | 2026+ bracket changes | Monitor whether HS 2 for HB 13 is enacted; if so, 2026 returns need new rate schedule |

---

## Section 7: Supplier pattern library

| Pattern on bank statement | Likely meaning |
|---|---|
| STATE OF DE REVENUE | Delaware tax payment (income or gross receipts) |
| DELAWARE DIV REV | Delaware Division of Revenue payment |
| DE TAX REFUND | Delaware income tax refund |
| STATE DE TAX PMT | Delaware estimated tax payment |

---

## Section 8: Form mapping

| Delaware Form | Federal equivalent / Input |
|---|---|
| PIT-RES, Line 1 | Federal Form 1040, Line 11 (AGI) |
| PIT-RES, Lines 2–9 | Delaware modifications (additions/subtractions) |
| PIT-RES, Line 18 | Delaware adjusted gross income |
| PIT-RES, Line 20 | Standard deduction or itemized (PIT-RSA) |
| PIT-RES, Line 23 | Delaware taxable income |
| PIT-RES, Line 24 | Tax from table or schedule |
| PIT-RES, Line 25 | Personal credits |
| Form PIT-EST | Quarterly estimated payments |

---

## Section 9: Refusal catalogue

| Refusal ID | Topic | Reason |
|---|---|---|
| R-DE-01 | Corporate income tax (Form 1100) | Not individual income tax |
| R-DE-02 | Corporate franchise tax (annual report) | Separate regime |
| R-DE-03 | Part-year / nonresident returns (PIT-NON) | Different form and allocation rules |
| R-DE-04 | Wilmington city earned income tax | Municipal tax, separate filing |
| R-DE-05 | Estate tax | Separate regime |
| R-DE-06 | Withholding tax | Employer obligation |
| R-DE-07 | 2026+ new brackets (if enacted) | Pending legislation; not yet law |

---

## Disclaimer
This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

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
