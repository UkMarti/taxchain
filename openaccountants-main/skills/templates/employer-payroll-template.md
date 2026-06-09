---
name: employer-payroll-template
description: Reusable cross-country template for employer payroll obligations. Covers PAYE/withholding computation, employer social security contributions, pension auto-enrollment, payslip requirements, filing frequencies, year-end reconciliation, new employee onboarding, termination payments, benefits in kind, statutory payments, and reporting deadlines. Adapt by inserting country-specific tax bands, SSC rates, and pension thresholds at [COUNTRY-SPECIFIC] placeholders.
version: 1.0
category: template
---

# Employer Payroll Obligations Template v1.0

---

## Section 1 — Quick reference

| Field | Value |
|---|---|
| Jurisdiction | [COUNTRY-SPECIFIC] |
| Tax authority | [COUNTRY-SPECIFIC] |
| Primary legislation | [COUNTRY-SPECIFIC] |
| Tax year | [COUNTRY-SPECIFIC] |
| PAYE/withholding system | [COUNTRY-SPECIFIC — cumulative vs non-cumulative] |
| Employer SSC rate | [COUNTRY-SPECIFIC — e.g., 13.8% UK, 7.65% US, 1% ZA UIF] |
| Employee SSC rate | [COUNTRY-SPECIFIC — e.g., 8%/2% UK NIC, 7.65% US FICA] |
| SSC earnings cap | [COUNTRY-SPECIFIC — e.g., $168,600 US SS, £50,270 UK UEL] |
| Pension auto-enrollment threshold | [COUNTRY-SPECIFIC — e.g., £10,000 UK, N/A US] |
| Minimum pension contribution | [COUNTRY-SPECIFIC — e.g., 8% total UK (3% employer + 5% employee)] |
| Pay frequency | [COUNTRY-SPECIFIC — weekly/fortnightly/monthly] |
| Filing frequency | [COUNTRY-SPECIFIC — real-time (RTI UK), quarterly (941 US), monthly] |
| Year-end reconciliation | [COUNTRY-SPECIFIC — e.g., P60/P11D UK, W-2 US, IRP5 ZA] |
| Currency | [COUNTRY-SPECIFIC] |

### Tax bands table

| Band | Taxable income range | Rate |
|---|---|---|
| Personal allowance / zero bracket | [COUNTRY-SPECIFIC — e.g., £0–£12,570 UK, $0–$11,600 US standard deduction equivalent] | 0% |
| Basic / lowest bracket | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 20% UK, 10% US] |
| Intermediate (if applicable) | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |
| Higher / middle bracket | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 40% UK, 22% US] |
| Additional / top bracket | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 45% UK, 37% US] |

### Conservative defaults

| Ambiguity | Default |
|---|---|
| Unknown tax code / withholding elections | Apply standard code (no allowances beyond default) |
| Unknown pension opt-out status | Enrolled (employer must contribute) |
| Unknown benefit in kind value | Use list price / official rate [COUNTRY-SPECIFIC] |
| Unknown employment status | Employee (not contractor) — withhold |
| Unknown payroll frequency | Monthly |

---

## Step 0 — Onboarding questions

Before computing payroll, you MUST obtain:

1. **How many employees?** — headcount and employment types (full-time, part-time, casual)
2. **Pay frequency** — weekly, fortnightly, four-weekly, monthly
3. **Gross salary per employee** — annual or per-period
4. **Tax code / withholding elections** — as issued by tax authority or claimed by employee
5. **Pension scheme details** — enrolled, opted out, contribution rates (employer and employee)
6. **Benefits in kind provided** — company car, health insurance, accommodation, etc.
7. **Student loan deductions?** — [COUNTRY-SPECIFIC — e.g., UK Plan 1/2/4/5/PG]
8. **Prior period year-to-date figures** — for cumulative PAYE systems
9. **New starters in period?** — starter declarations, P45/W-4 equivalents
10. **Leavers in period?** — termination date, outstanding pay, notice period

---

## Step 1 — PAYE / income tax withholding computation

### Cumulative system (e.g., UK, ZA)

```
Year-to-date (YTD) gross pay (including this period)
  LESS: YTD personal allowance (annual allowance × months elapsed / 12)
  = YTD taxable pay

Apply tax bands to YTD taxable pay → YTD tax due
  LESS: YTD tax already deducted in prior periods
  = Tax to deduct THIS period
```

### Non-cumulative / per-period system (e.g., US, AU)

```
Gross pay THIS period
  LESS: Per-period allowances (from W-4 or tax file declaration)
  = Taxable pay this period

Apply annualised tax table:
  Taxable pay × pay periods per year = Annualised taxable income
  Look up tax on annualised amount
  Divide annual tax by pay periods = Tax per period
```

### Period tax bands (monthly example)

| Band | Monthly range | Rate |
|---|---|---|
| Tax-free | [COUNTRY-SPECIFIC] ÷ 12 | 0% |
| Basic rate | [COUNTRY-SPECIFIC] ÷ 12 | [COUNTRY-SPECIFIC]% |
| Higher rate | [COUNTRY-SPECIFIC] ÷ 12 | [COUNTRY-SPECIFIC]% |
| Additional rate | Above [COUNTRY-SPECIFIC] ÷ 12 | [COUNTRY-SPECIFIC]% |

---

## Step 2 — Social security / national insurance contributions

### Employer contributions

```
Gross earnings in period
  LESS: Earnings threshold [COUNTRY-SPECIFIC — e.g., £175/week UK, $0 US]
  = Earnings subject to employer SSC
  × Employer rate [COUNTRY-SPECIFIC]
  = Employer SSC liability

[COUNTRY-SPECIFIC: Is there an upper earnings limit for employer? — e.g., NO cap UK, YES cap US SS at $168,600]
```

### Employee contributions

```
Gross earnings in period
  LESS: Employee threshold [COUNTRY-SPECIFIC — e.g., £242/week UK primary threshold]
  = Earnings subject to employee SSC

If earnings ≤ [COUNTRY-SPECIFIC upper limit]:
  Employee SSC = Earnings subject × [COUNTRY-SPECIFIC main rate]
If earnings > [COUNTRY-SPECIFIC upper limit]:
  Employee SSC = (Upper - Threshold) × main rate + (Earnings - Upper) × reduced rate
```

### SSC rate table

| Component | Threshold | Rate | Cap |
|---|---|---|---|
| Employee main rate | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 8% UK, 6.2% US SS] | [COUNTRY-SPECIFIC] |
| Employee reduced rate (above UEL) | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 2% UK] | None |
| Employer rate | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 13.8% UK, 6.2% US SS] | [COUNTRY-SPECIFIC] |
| Medicare/health (employee) | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 1.45% US] | None |
| Medicare/health (employer) | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 1.45% US] | None |
| Additional Medicare (high earner) | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 0.9% US > $200k] | None |

---

## Step 3 — Pension / retirement contributions

### Auto-enrollment obligations

| Aspect | Requirement |
|---|---|
| Who must be enrolled | [COUNTRY-SPECIFIC — e.g., UK: age 22–SPA, earning > £10,000/yr] |
| Minimum employer contribution | [COUNTRY-SPECIFIC — e.g., 3% UK, 9.5% AU super guarantee] |
| Minimum employee contribution | [COUNTRY-SPECIFIC — e.g., 5% UK (of qualifying earnings)] |
| Qualifying earnings band | [COUNTRY-SPECIFIC — e.g., £6,240–£50,270 UK] |
| Opt-out window | [COUNTRY-SPECIFIC — e.g., 1 month UK] |
| Re-enrollment frequency | [COUNTRY-SPECIFIC — e.g., every 3 years UK] |

### Computation

```
Qualifying earnings = MIN(Gross pay, Upper limit) - Lower limit
Employer contribution = Qualifying earnings × [COUNTRY-SPECIFIC employer %]
Employee contribution = Qualifying earnings × [COUNTRY-SPECIFIC employee %]

[COUNTRY-SPECIFIC: Tax relief method — net pay (deduct before tax) or relief at source (deduct after tax, provider claims basic rate)]
```

---

## Step 4 — Payslip requirements

### Mandatory payslip items

| Item | Required? |
|---|---|
| Employer name and address | [COUNTRY-SPECIFIC] |
| Employee name and identifier | YES |
| Pay period and pay date | YES |
| Gross pay | YES |
| Itemised deductions (tax, SSC, pension, student loan) | YES |
| Net pay | YES |
| Method of payment | [COUNTRY-SPECIFIC] |
| Cumulative YTD figures (gross, tax, SSC) | [COUNTRY-SPECIFIC — required in cumulative systems] |
| Tax code / withholding rate | [COUNTRY-SPECIFIC] |
| Hours worked (hourly employees) | [COUNTRY-SPECIFIC] |
| Holiday entitlement / accrual | [COUNTRY-SPECIFIC] |

---

## Step 5 — Filing frequencies and payment deadlines

| Filing type | Frequency | Deadline | Form |
|---|---|---|---|
| PAYE/withholding remittance | [COUNTRY-SPECIFIC — e.g., monthly UK, semi-weekly US > $50k] | [COUNTRY-SPECIFIC — e.g., 22nd of following month UK electronic] | [COUNTRY-SPECIFIC] |
| RTI/FPS submission | [COUNTRY-SPECIFIC — e.g., on or before payday UK] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., FPS UK] |
| Quarterly return | [COUNTRY-SPECIFIC — e.g., Form 941 US] | [COUNTRY-SPECIFIC — e.g., end of month following quarter US] | [COUNTRY-SPECIFIC] |
| Annual reconciliation | [COUNTRY-SPECIFIC — e.g., 19 April UK, 31 Jan US W-2] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |
| Benefits in kind return | [COUNTRY-SPECIFIC — e.g., 6 July UK P11D] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

### Late filing penalties

| Offence | Penalty |
|---|---|
| Late PAYE submission | [COUNTRY-SPECIFIC — e.g., £100–£400/month UK depending on headcount] |
| Late payment | [COUNTRY-SPECIFIC — e.g., interest + surcharges] |
| Failure to issue year-end certificate | [COUNTRY-SPECIFIC — e.g., £300/employee UK P60] |
| Inaccurate return | [COUNTRY-SPECIFIC — e.g., 15–100% of tax understated] |

---

## Step 6 — New employee onboarding

### Required information from new starter

| Document/Form | Purpose | Deadline |
|---|---|---|
| [COUNTRY-SPECIFIC — e.g., P45 UK, W-4 US, Tax file declaration AU] | Determines tax code / withholding rate | Before first pay run |
| Proof of right to work | Immigration compliance | Before employment starts |
| Bank details | Payment method | Before first pay run |
| Pension nomination / opt-out | Auto-enrollment | Within [COUNTRY-SPECIFIC] days |
| Emergency contact / personal details | HR records | First week |

### First pay run for new starter

```
IF starter declaration received (P45 / W-4 equivalent):
  Apply declared code/allowances
ELSE:
  Apply emergency/default code [COUNTRY-SPECIFIC — e.g., 1257L M1 UK, single/0 US]
  (Non-cumulative basis until correct code issued)
```

---

## Step 7 — Termination payments

### Components of termination pay

| Component | Tax treatment |
|---|---|
| Salary to termination date | Normal PAYE/withholding |
| Accrued holiday pay | Normal PAYE/withholding |
| Notice period pay (worked) | Normal PAYE/withholding |
| Payment in lieu of notice (PILON) | [COUNTRY-SPECIFIC — taxable UK post-2018, taxable US] |
| Statutory redundancy | [COUNTRY-SPECIFIC — tax-free up to limit UK £30k, taxable US] |
| Ex-gratia / severance above statutory | [COUNTRY-SPECIFIC — first £30k tax-free UK, fully taxable US] |
| Restrictive covenant payment | [COUNTRY-SPECIFIC — taxable as employment income] |
| Pension contributions on termination | [COUNTRY-SPECIFIC] |

### Employer obligations on termination

- Issue final payslip with all deductions
- Issue year-to-date certificate [COUNTRY-SPECIFIC — P45 UK, final W-2 US]
- Pay any outstanding statutory payments
- Report to tax authority [COUNTRY-SPECIFIC — leaver FPS UK, final 941 US]
- Inform pension provider of cessation

---

## Step 8 — Benefits in kind (BIK)

### Common taxable benefits

| Benefit | Taxable value | Reporting |
|---|---|---|
| Company car | [COUNTRY-SPECIFIC — e.g., list price × CO2 % UK, cents/km AU] | [COUNTRY-SPECIFIC form] |
| Private medical insurance | Premium paid by employer | [COUNTRY-SPECIFIC form] |
| Accommodation (employer-provided) | [COUNTRY-SPECIFIC — annual value or market rent] | [COUNTRY-SPECIFIC form] |
| Interest-free / low-interest loan | [COUNTRY-SPECIFIC — official rate minus rate charged] | [COUNTRY-SPECIFIC form] |
| Telephone / mobile | [COUNTRY-SPECIFIC — one device exempt UK; taxable US] | [COUNTRY-SPECIFIC form] |
| Gym membership | Taxable (employer-paid external gym) | [COUNTRY-SPECIFIC form] |
| Childcare vouchers / workplace nursery | [COUNTRY-SPECIFIC — exempt up to limit] | [COUNTRY-SPECIFIC form] |
| Travel and subsistence | [COUNTRY-SPECIFIC — exempt if qualifying business travel] | [COUNTRY-SPECIFIC form] |

### Payrolling benefits vs annual reporting

| Method | Description | SSC treatment |
|---|---|---|
| Payrolled | BIK value added to gross pay each period; tax deducted via PAYE | SSC applies in real time |
| Annual (P11D equivalent) | Reported after year-end; employee pays via self-assessment or code adjustment | Class 1A employer SSC on benefit value |

---

## Step 9 — Statutory payments

| Payment | Eligibility | Rate | Duration | Funded by |
|---|---|---|---|---|
| Statutory sick pay (SSP) | [COUNTRY-SPECIFIC — e.g., 4+ consecutive days UK] | [COUNTRY-SPECIFIC — e.g., £116.75/week UK] | [COUNTRY-SPECIFIC — e.g., 28 weeks UK] | Employer (no recovery) |
| Statutory maternity pay (SMP) | [COUNTRY-SPECIFIC — 26 weeks service + earnings above LEL] | [COUNTRY-SPECIFIC — e.g., 90% for 6 weeks then £184.03 for 33 weeks UK] | [COUNTRY-SPECIFIC — e.g., 39 weeks UK] | Employer (92% recovery from HMRC; 103% if small employer) |
| Statutory paternity pay | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 2 weeks UK] | Employer (recoverable) |
| Statutory shared parental pay | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | Employer (recoverable) |
| [COUNTRY-SPECIFIC other statutory] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

---

## Prohibitions

- NEVER run payroll without a valid tax code or withholding election — use emergency code and flag
- NEVER ignore auto-enrollment obligations — failure to comply is a criminal offence in some jurisdictions
- NEVER classify an employee as a contractor to avoid payroll obligations without applying the employment status test
- NEVER deduct more pension than the employee has agreed to (unless mandatory minimum applies)
- NEVER pay termination amounts without first splitting taxable vs exempt components
- NEVER file late — even one day late attracts penalties in most jurisdictions
- NEVER ignore benefits in kind — unreported BIK is tax evasion
- NEVER apply cumulative YTD figures from a prior employer without their leaving certificate
- NEVER process a salary sacrifice arrangement that takes pay below minimum wage
- NEVER present outputs as tax advice — direct to a qualified tax professional

---

## Edge Case Registry

| # | Scenario | Correct treatment |
|---|---|---|
| EC-1 | Employee works in two jurisdictions (split payroll) | Apportion based on days worked in each; apply treaty provisions |
| EC-2 | Director with irregular payments | [COUNTRY-SPECIFIC — e.g., UK: annual earnings period for directors] |
| EC-3 | Employee reaches SSC cap mid-year | Stop deducting employee SSC above cap; employer may continue |
| EC-4 | Salary sacrifice reducing pay below LEL/SSC threshold | SSC savings are legitimate but pension implications must be disclosed |
| EC-5 | Retrospective pay rise (back-dated) | Recalculate YTD on cumulative basis; deduct/refund difference in current period |
| EC-6 | Employee death in service | Final pay to estate; death benefit taxation [COUNTRY-SPECIFIC] |
| EC-7 | Expatriate employee (secondment) | [COUNTRY-SPECIFIC — certificate of coverage, treaty relief, shadow payroll] |
| EC-8 | Multiple jobs (employee has other employment) | [COUNTRY-SPECIFIC — secondary tax code, no personal allowance on second job] |
| EC-9 | Attachment of earnings order (garnishment) | Deduct per court order; priority over other non-statutory deductions |
| EC-10 | Furlough / short-time working with government subsidy | [COUNTRY-SPECIFIC — grant taxable to employer; PAYE on employee's receipt] |

---

## Test Suite

| # | Input | Expected output |
|---|---|---|
| T-1 | Monthly gross £4,000; tax code 1257L (cumulative, month 1); no other deductions | Taxable = £4,000 - £1,047.50 = £2,952.50; tax = £2,952.50 × 20% = £590.50 |
| T-2 | Monthly gross £4,000; employee NIC (UK): earnings £4,000 - PT £1,048 = £2,952; main rate 8% | Employee NIC = £2,952 × 8% = £236.16 |
| T-3 | Employer NIC: earnings £4,000 - ST £758 = £3,242 × 13.8% | Employer NIC = £447.40 |
| T-4 | Auto-enrollment pension (UK): qualifying earnings = £4,000 - £520 = £3,480; employer 3%, employee 5% | Employer = £104.40; Employee = £174.00 |
| T-5 | Termination: £50,000 ex-gratia (UK); first £30,000 exempt | Tax on £20,000 at marginal rate; no NIC on full £50,000 |
| T-6 | Company car BIK (UK): list price £35,000; CO2 emissions → 30% band | Taxable benefit = £35,000 × 30% = £10,500; employer Class 1A = £10,500 × 13.8% = £1,449 |
| T-7 | US biweekly gross $5,000; single, 0 additional allowances; annualized = $130,000 | Federal tax per period = (annualized tax from bracket) ÷ 26 |

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
