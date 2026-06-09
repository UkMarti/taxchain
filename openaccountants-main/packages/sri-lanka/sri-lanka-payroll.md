---
name: sri-lanka-payroll
description: >
  ALWAYS read this skill before touching any Sri Lanka payroll work. Use whenever asked to compute or review Sri Lanka monthly payroll — APIT (Advance Personal Income Tax / PAYE) withholding under the Inland Revenue Act No. 24 of 2017, plus EPF (Employees' Provident Fund) and ETF (Employees' Trust Fund) contributions. Trigger on phrases like "Sri Lanka payroll", "APIT Sri Lanka", "PAYE Sri Lanka", "EPF ETF Sri Lanka", "EPF 8% 12%", "ETF 3%", or "Sri Lanka salary deductions". This skill is the ORCHESTRATOR — it pulls APIT tables from sri-lanka-income-tax and sequences EPF/ETF. Out of scope — corporate tax, VAT, SSCL, and non-employment withholding (use the respective skills).
version: 1.0
jurisdiction: LK
tax_year: 2025-26
category: international
verified_by: pending
depends_on:
  - foundation
  - sri-lanka-income-tax
---

# Sri Lanka — Payroll (APIT + EPF + ETF) — Skill v1.0

> **Produced by OpenAccountants (openaccountants.com).** Research-grade (tier 2), drafted from official IRD / EPF / ETFB sources for YA 2025/26 — pending sign-off by a Sri Lankan CA / IRD-registered practitioner. Not tax advice.

---

## Section 1 — Quick reference: monthly payroll components

| Component | Rate | Base | Paid by | Notes |
|---|---|---|---|---|
| **APIT (PAYE)** | Progressive (see APIT Table 01 in `sri-lanka-income-tax`) | Monthly regular employment profit, after LKR 150,000/month personal relief | Employee (withheld at source) | Top marginal 36% over LKR 358,333/month |
| **EPF — employee** | **8%** | Employee's total monthly earnings | Employee (deducted from salary) | |
| **EPF — employer** | **12%** | Employee's total monthly earnings | Employer | EPF combined = **20%** |
| **ETF — employer** | **3%** | Employee's total monthly earnings | Employer | **Not** deducted from employee; employer-only |

| Field | Value |
|---|---|
| Country / authority | Sri Lanka — IRD (APIT); EPF (Dept. of Labour / CBSL); ETF (ETF Board) |
| Currency | LKR |
| Year of assessment | 1 April – 31 March |
| Personal relief (built into APIT Table 01) | LKR 150,000/month (LKR 1,800,000/year) |
| Validated by | Pending — Sri Lankan CA / IRD-registered practitioner |
| Skill version | 1.0 |

### Conservative defaults

| Ambiguity | Default |
|---|---|
| EPF/ETF earnings base unclear (which allowances are "total earnings") | Include the allowance in the contribution base and flag — VERIFY which components are EPF-liable |
| APIT table selection unclear | Use Table 01 for regular primary-employment profits; flag for Tables 02/05/08 cases |
| Non-resident non-citizen employee | No personal relief; APIT as final withholding (see income-tax skill) |

---

## Section 2 — Required inputs and refusal catalogue

### Required inputs
Employer EPF/ETF registration numbers; employee total monthly earnings broken into basic + allowances; APIT table applicable (primary employment, lump sum, foreign-currency remote); residency/citizenship (drives relief); prior-month cumulative figures for APIT.

### Refusal catalogue

**R-LK-PAY-1 — EPF-liable earnings composition.** Exactly which allowances form "total earnings" for EPF/ETF is governed by the EPF/ETF Acts and case law — this skill applies the contribution rates but does NOT assert the full EPF-liable earnings definition. VERIFY; escalate borderline allowance questions.

**R-LK-PAY-2 — Surcharges / penalties for EPF/ETF default.** Out of scope — escalate.

**R-LK-PAY-3 — Gratuity, termination, ESOP.** Separate treatment — escalate.

**R-LK-PAY-4 — Cross-skill.** Detailed APIT band logic → `sri-lanka-income-tax`; corporate/VAT/SSCL/WHT → respective skills.

---

## Section 3 — APIT (PAYE) withholding

APIT is the employer's monthly income-tax deduction. **Do not redefine the bands here — pull APIT Table 01 from `sri-lanka-income-tax`.** Summary of Table 01 (regular monthly primary-employment profit, YA 2025/26, relief LKR 150,000/month built in):

| Monthly regular profit (LKR) | Tax |
|---|---|
| Up to 150,000 | Nil (relief) |
| 150,001 – 233,333 | 6% − 9,000 |
| 233,334 – 275,000 | 18% − 37,000 |
| 275,001 – 316,667 | 24% − 53,500 |
| 316,668 – 358,333 | 30% − 72,500 |
| Over 358,333 | 36% − 94,000 |

Lump-sum payments use Table 02; resident remote workers for a foreign employer paid in forex use Table 08 (top 15%) — both in `sri-lanka-income-tax`. **Source:** IRD APIT 2025/26 tables.

---

## Section 4 — EPF and ETF

### 4.1 EPF (Employees' Provident Fund)
- **Employee contribution: 8%** of total monthly earnings (deducted from salary).
- **Employer contribution: 12%** of total monthly earnings.
- **Combined EPF: 20%** remitted to the fund.
- **Source:** EPF (epf.lk), CBSL Employees' Provident Fund.

### 4.2 ETF (Employees' Trust Fund)
- **Employer contribution: 3%** of total monthly earnings.
- **Not deducted from the employee** — the full 3% is borne by the employer.
- **Source:** Employees' Trust Fund Board (etfb.lk).

### 4.3 Earnings base
EPF/ETF are computed on the employee's **total monthly earnings**. Exactly which allowances are EPF/ETF-liable is governed by the EPF/ETF Acts — **VERIFY** the liable-earnings composition for any non-basic components.

---

## Section 5 — Worked example (illustrative)

Employee with total monthly earnings LKR 300,000 (assume all EPF-liable), resident, primary employment, YA 2025/26.

**APIT (Table 01):** 300,000 falls in 275,001–316,667 → 24% × 300,000 − 53,500 = 72,000 − 53,500 = **LKR 18,500**.

**EPF:** employee 8% × 300,000 = **24,000** (deducted); employer 12% × 300,000 = **36,000**.

**ETF:** employer 3% × 300,000 = **9,000** (employer-only).

| Item | LKR |
|---|---|
| Gross earnings | 300,000 |
| − APIT (PAYE) | (18,500) |
| − EPF employee (8%) | (24,000) |
| **Net pay** | **257,500** |

| Employer cost (parallel) | LKR |
|---|---|
| Gross earnings | 300,000 |
| EPF employer (12%) | 36,000 |
| ETF employer (3%) | 9,000 |
| **Total employer cost** | **345,000** |

*(EPF-liable base assumed = gross; confirm the liable composition.)*

---

## Section 6 — Filing and remittance

- **APIT:** deducted monthly, remitted to IRD; reconciled in the employee's annual return.
- **EPF / ETF:** remitted monthly to the respective funds.
- **Remittance due dates** for APIT/EPF/ETF — **VERIFY** against the current IRD / EPF / ETFB schedules (not asserted here).

---

## Section 7 — Conservative defaults

| Situation | Default |
|---|---|
| Allowance EPF-liability unclear | Include in base; flag |
| APIT table ambiguous | Table 01; flag for 02/05/08 cases |
| Remittance dates | Flag VERIFY |
| Any figure flagged VERIFY | Flag for reviewer |

---

## Section 8 — Sources

1. IRD APIT tables YA 2025/26 — https://www.ird.gov.lk/en/publications/sitepages/apit_tax_tables.aspx
2. EPF (Employees' Provident Fund) — https://epf.lk/?page_id=811
3. CBSL Employees' Provident Fund — https://www.cbsl.gov.lk/en/employees-provident-fund
4. Employees' Trust Fund Board — https://etfb.lk/employers-faq/
5. Companion skill: `sri-lanka-income-tax` (APIT bands).

**Known gaps / VERIFY:** EPF/ETF-liable earnings composition; APIT/EPF/ETF remittance due dates.

---

## Prohibitions

- NEVER use an EPF rate other than employee 8% / employer 12% (combined 20%), or an ETF rate other than employer 3%, without confirming a rate change.
- NEVER deduct ETF from the employee — it is employer-only.
- NEVER redefine the APIT bands here — use `sri-lanka-income-tax`.
- NEVER assert EPF-liable earnings composition or remittance dates this skill flags as VERIFY.
- NEVER file or instruct filing — produce a working paper for practitioner review.

---

## Disclaimer

This skill and its outputs are for informational and computational purposes only and do not constitute tax, legal, or financial advice. All outputs must be reviewed and signed off by a qualified Sri Lankan professional (CA / IRD-registered tax practitioner, or payroll specialist) before any payslip is issued or remittance made. The latest verified version is maintained at [openaccountants.com](https://www.openaccountants.com).

---

<!-- openaccountants-cta-block -->

## Talk to a verified accountant

This skill is a tool, not an engagement. To speak with a licensed accountant who verifies skills for your jurisdiction — **no liability until both parties sign an engagement letter** — book a free 30-minute call:

**→ [Book a call](https://calendly.com/openaccountants-info/30min)**

<!-- openaccountants-mcp-cta -->

## The accountant-verified version lives in the connector

This file is the open, **research-grade draft**. The **accountant-verified**
version of this skill is **not published to GitHub** — it is delivered free
through the OpenAccountants MCP connector, where your AI agent loads the
verified rules together with the name of the accountant who signed them off.

**→ Install the free connector:** <https://www.openaccountants.com/connect>
**MCP endpoint:** `https://www.openaccountants.com/api/mcp`
