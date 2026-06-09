---
name: ng-statutory-deductions
description: Use this skill whenever asked to calculate, review, or advise on Nigerian statutory payroll deductions — contributory pension under PRA 2014, National Housing Fund (NHF), NSITF Employee Compensation Scheme, or Industrial Training Fund (ITF). Trigger on phrases like "Nigeria pension", "PFA Nigeria", "PRA 2014", "RSA contribution", "NHF Nigeria", "National Housing Fund", "NSITF", "Employee Compensation Scheme Nigeria", "ITF Nigeria", "Industrial Training Fund", "statutory deductions Nigeria", "PenCom", "FMBN", or any Nigerian employer/employee statutory contribution request. Scope: contribution rates and bases, who pays (employer vs employee), thresholds for applicability, exemptions, remittance timelines, penalties, and the NTA 2025 consolidation outlook. ALWAYS read this skill before touching Nigerian statutory deductions.
version: 1.0
jurisdiction: NG
tax_year: 2025
category: international
verified_by: pending
depends_on:
  - foundation
---

# Nigeria — Statutory Payroll Deductions (Pension, NHF, NSITF, ITF) — Skill v1.0

> **2025 outlook:** Four core statutory employer/employee schemes currently operate in Nigeria: contributory pension under the **Pension Reform Act 2014 (PRA 2014)**, the **National Housing Fund (NHF Act 1992)**, the **NSITF Employee Compensation Scheme (Employee's Compensation Act 2010)**, and the **Industrial Training Fund (ITF Act 1971, as amended in 2011)**. The **Nigeria Tax Act 2025 (NTA 2025)** consolidates several non-pension employer levies (notably ITF and NSITF, alongside the Tertiary Education Tax) into a single **Development Levy**. The pension scheme under PRA 2014 and the NHF under the NHF Act remain separate from this consolidation. Until the NTA 2025 implementing regulations and commencement instruments are gazetted and operationalised, this skill treats ITF and NSITF as standalone schemes; see Section 9.

---

## Section 1 — Quick reference (rate table)

| Scheme | Legal basis | Rate | Base | Paid by | Cap / threshold |
|---|---|---|---|---|---|
| **Pension (RSA)** | PRA 2014 s.4 | **18% total** (Employer 10% + Employee 8%) | Monthly emolument = basic + housing + transport | Both | Applies where employer has **3+ employees**; minimum split 18% / can be employer-only at 20% if employer bears full cost |
| **NHF** | NHF Act 1992 s.4 | **2.5%** of monthly basic salary | Basic salary only | Employee (deducted by employer) | Applies where employee earns ≥ **₦3,000/month** (effectively all employees) |
| **NSITF (ECS)** | Employee's Compensation Act 2010 s.33 | **1%** of monthly total payroll | Total monthly payroll (gross) | Employer only | All employers in public and private sector |
| **ITF** | ITF Act 1971 (as amended 2011) s.6 | **1%** of annual payroll | Annual payroll (gross) | Employer only | Employers with **5+ employees** OR annual turnover ≥ **₦50,000,000** |

**Currency:** NGN (Nigerian Naira / ₦). **Tax year:** Calendar year (1 Jan – 31 Dec).

**Regulators:**
- **PenCom** (National Pension Commission) — pension
- **FMBN** (Federal Mortgage Bank of Nigeria) — NHF
- **NSITF** (Nigeria Social Insurance Trust Fund) — Employee Compensation Scheme
- **ITF** (Industrial Training Fund) — training levy

---

## Section 2 — Required inputs & refusal catalogue

### 2a — Required inputs

To compute or review Nigerian statutory deductions for a payroll period, the following are required:

- Employer headcount (to determine PRA 2014 and ITF applicability)
- Employer annual turnover (to determine ITF applicability via turnover gateway)
- For each employee:
  - Basic salary (monthly)
  - Housing allowance (monthly)
  - Transport allowance (monthly)
  - Other allowances / total gross emolument (monthly)
  - PFA (Pension Fund Administrator) name and RSA PIN (Retirement Savings Account number)
  - NHF registration / membership number
- Employer registration evidence:
  - PenCom employer code
  - NSITF Employer Compliance Certificate (ECC) number
  - ITF registration number
- Last remittance dates for each scheme (for late-payment penalty assessment)

If any of these is missing, flag to the reviewer and apply the conservative defaults in Section 7.

### 2b — Refusal catalogue (out of scope)

This skill does **not** cover:

| Topic | Reason |
|---|---|
| Voluntary additional pension contributions (AVCs) | PFA-specific products outside the statutory framework |
| Cross-border / expatriate pension exemption negotiations | Requires PenCom approval letter; case-by-case |
| Defined Benefit (DB) legacy schemes (pre-2004) | PRA 2004/2014 transition rules; specialist actuarial work |
| Group Life Insurance procurement (PRA 2014 s.4(5)) | Insurance broker scope, not payroll computation |
| NSITF claims processing for workplace injuries | Benefits side, not contributions side |
| ITF reimbursement claims (training grant recoveries) | Post-remittance grant procedure, separate workflow |
| State-level employer levies (e.g. Lagos LIRS BD levy) | State-specific; see ng-payroll-paye instead |
| Personal income tax (PAYE) on emoluments | Covered by `ng-payroll-paye` |
| NTA 2025 Development Levy computation once implementing regulations are gazetted | Awaiting commencement order; will be a separate skill update |

---

## Section 3 — Pension Reform Act 2014 — contributory pension

### 3a — Applicability

- Applies to all employers in the public and private sector with **3 or more employees** (PRA 2014 s.2(1)).
- Employers with fewer than 3 employees may opt in voluntarily.
- Each employee opens a **Retirement Savings Account (RSA)** with a PFA (Pension Fund Administrator) of their choice. Contributions are remitted by the employer to the **Pension Fund Custodian (PFC)** appointed by that PFA.

### 3b — Contribution rates

| Component | Rate | Paid by |
|---|---|---|
| Employer contribution | **10%** of monthly emolument | Employer |
| Employee contribution | **8%** of monthly emolument | Employee (payroll deduction) |
| **Total** | **18%** | |

**Alternative — employer-borne option (PRA 2014 s.4(4)):** An employer may elect to bear the **entire contribution** at a minimum rate of **20%** of monthly emolument, with no deduction from the employee. This must be documented and applied consistently.

### 3c — Contribution base — definition of "monthly emolument"

Under PRA 2014 s.4(6), "monthly emolument" means the sum of:

- **Basic salary**
- **Housing allowance**
- **Transport allowance**

Other allowances (e.g. utility, entertainment, meal, leave) are **excluded** from the pension contribution base. This is the narrowest of the four statutory bases and is frequently a source of compliance error.

### 3d — Remittance timeline

- The employer must remit **both** the employer and employee contributions to the employee's PFC **within 7 working days of the salary payment date** (PRA 2014 s.11(3)).
- Failure attracts a **penalty of 2% per month** of the unremitted amount, in addition to the principal (PRA 2014 s.11(7)).

### 3e — Group Life Insurance (PRA 2014 s.4(5))

In addition to pension contributions, every employer covered by PRA 2014 must maintain a **Group Life Insurance policy** for each employee at a minimum sum equal to **three (3) times the annual total emolument** of the employee. This is **not a payroll deduction** — it is a separately procured insurance product — but it is a statutory obligation under the same Act and is commonly flagged alongside pension compliance. Out of scope for premium computation in this skill.

---

## Section 4 — National Housing Fund (NHF)

### 4a — Applicability

- Applies to every **Nigerian** worker earning **₦3,000/month or more** (NHF Act 1992 s.4(1)). Given current wage levels, this captures essentially the entire workforce.
- Self-employed individuals may register voluntarily.
- Foreign nationals are not statutorily required to contribute but may participate by election.

### 4b — Contribution rate

| Component | Rate | Paid by |
|---|---|---|
| Employee contribution | **2.5%** of monthly **basic salary** | Employee (payroll deduction) |
| Employer contribution | — | — |

**Contribution base** = monthly **basic salary only** (housing, transport, and other allowances are **excluded**). This base is narrower than the pension base.

### 4c — Employer's role

The employer:

1. Deducts 2.5% of basic salary from each eligible employee's monthly pay.
2. Remits the deducted amount to the **Federal Mortgage Bank of Nigeria (FMBN)** by the **end of the month following deduction**.
3. Maintains the employee's NHF passbook / records.

### 4d — Employee benefit

After contributing for at least **6 months**, an employee becomes eligible to apply for an **NHF mortgage loan** through a primary mortgage institution (PMI), up to a statutory ceiling and at concessional interest rates set by FMBN.

### 4e — Penalties

Non-deduction or non-remittance attracts a fine and the obligation to remit arrears with interest at a rate prescribed by FMBN (NHF Act 1992 s.16).

---

## Section 5 — NSITF — Employee Compensation Scheme

### 5a — Applicability

The **Employee's Compensation Act 2010 (ECA 2010)** replaced the Workmen's Compensation Act and made the **NSITF Employee Compensation Scheme (ECS)** compulsory for:

- **All employers** in the public and private sector, **regardless of headcount**.
- All employees, full-time, part-time, casual, temporary, and apprenticed.

### 5b — Contribution rate

| Component | Rate | Paid by |
|---|---|---|
| Employer contribution | **1%** of total monthly payroll | Employer only |
| Employee contribution | — | — |

**Contribution base** = total monthly **gross payroll** (basic + all allowances + bonuses + overtime, for all employees combined). This is the broadest of the four bases.

### 5c — What the scheme covers

The ECS funds **no-fault compensation** to employees (or their dependants) for:

- Death, injury, disease, or disability arising **out of and in the course of employment**
- Occupational diseases scheduled under ECA 2010
- Mental stress arising from the workplace (subject to ECA 2010 conditions)

Employees do not need to prove employer negligence; the scheme is a substitute for common-law negligence claims against the employer.

### 5d — Remittance timeline

- Contributions are remitted **monthly** to NSITF on or before the **end of the month** following the payroll month.
- On full and timely remittance, NSITF issues an **Employer Compliance Certificate (ECC)**, which is commonly required for government tenders and procurement.

### 5e — Penalties

Late or non-payment attracts a penalty of **10%** of the contribution due plus interest at the prevailing CBN rate (ECA 2010 s.33(4)).

---

## Section 6 — ITF — Industrial Training Fund

### 6a — Applicability

Under the **ITF Act 1971** (as amended by the ITF Amendment Act 2011), an employer is required to register and contribute if **either** of the following gateways is met:

- The employer has **5 or more employees**, **OR**
- The employer has **annual turnover of ₦50,000,000 or more** (irrespective of headcount).

Employers below both thresholds are exempt but may register voluntarily.

### 6b — Contribution rate

| Component | Rate | Paid by |
|---|---|---|
| Employer contribution | **1%** of total annual payroll | Employer only |
| Employee contribution | — | — |

**Contribution base** = total **annual gross payroll** (basic + all allowances + bonuses + overtime, for all employees combined for the calendar year).

### 6c — Remittance timeline

- The annual contribution and return is due by **1 April** of the year following the contribution year (i.e. for calendar year 2025, due **1 April 2026**).
- The return is filed on the ITF Annual Return form along with the schedule of contributions.

### 6d — Reimbursement (training grant)

Up to **50%** of the ITF contribution may be reclaimed as a training reimbursement where the employer has conducted approved training programmes for its employees during the contribution year. Reimbursement is subject to ITF's verification and approval — out of scope for this skill (see refusal catalogue).

### 6e — Penalties

Failure to register or remit attracts a **fine of 5%** of the unpaid contribution per month of default (ITF Act, as amended).

---

## Section 7 — Worked example

**Scenario:** Private-sector employer in Lagos with **8 employees**, annual turnover ₦120,000,000 (above both ITF gateways, well above PRA 2014's 3-employee floor). Pension contributions on the standard 10/8 split.

**Employee A — May 2025 monthly emolument:**

| Component | Amount (₦) |
|---|---|
| Basic salary | 300,000 |
| Housing allowance | 90,000 |
| Transport allowance | 60,000 |
| Utility allowance | 30,000 |
| **Monthly gross emolument** | **480,000** |

### A — Pension base (PRA 2014)

Pension base = Basic + Housing + Transport = 300,000 + 90,000 + 60,000 = **₦450,000**

| Component | Rate | Amount (₦) |
|---|---|---|
| Employer pension contribution | 10% × 450,000 | 45,000 |
| Employee pension contribution | 8% × 450,000 | 36,000 |
| **Total to RSA via PFC** | | **81,000** |

Remit to employee's PFC within **7 working days** of salary payment.

### B — NHF base

NHF base = Basic salary only = **₦300,000**

| Component | Rate | Amount (₦) |
|---|---|---|
| Employee NHF deduction | 2.5% × 300,000 | 7,500 |

Remit to FMBN by end of June 2025.

### C — Employee A take-home for May 2025 (statutory deductions only — excludes PAYE)

| Component | Amount (₦) |
|---|---|
| Monthly gross emolument | 480,000 |
| − Employee pension (8% of 450,000) | (36,000) |
| − Employee NHF (2.5% of 300,000) | (7,500) |
| **Take-home before PAYE** | **436,500** |

> PAYE (income tax) deduction is computed separately under `ng-payroll-paye`. NSITF and ITF do not reduce take-home pay because they are employer-only.

### D — Employer monthly cost (NSITF) — whole company

Assume total monthly gross payroll across all 8 employees = **₦3,600,000**.

| Component | Rate | Amount (₦) |
|---|---|---|
| NSITF | 1% × 3,600,000 | 36,000 |

Remit to NSITF by end of June 2025.

### E — Employer annual cost (ITF) — whole company

Assume total annual gross payroll for calendar year 2025 = **₦43,200,000** (12 × 3,600,000).

| Component | Rate | Amount (₦) |
|---|---|---|
| ITF | 1% × 43,200,000 | 432,000 |

File ITF Annual Return and remit by **1 April 2026**.

### F — Employer monthly statutory cost summary (Employee A's share)

| Scheme | Amount (₦) |
|---|---|
| Employer pension (Employee A) | 45,000 |
| NSITF (Employee A's pro-rata share — 1% of 480,000) | 4,800 |
| ITF (Employee A's pro-rata monthly accrual — 1% of 480,000) | 4,800 |
| **Total employer cost above gross pay (Employee A)** | **54,600** |

(Plus Group Life Insurance premium under PRA 2014 s.4(5) — procured separately, not in payroll.)

---

## Section 8 — Filing & payment

| Scheme | Frequency | Due date | Channel | Reference / receipt |
|---|---|---|---|---|
| **Pension (RSA)** | Monthly | Within **7 working days** of salary payment | Remit via employer's PFC (RSA-specific) — typically through pension portal or bank | PFC payment advice; PenCom annual return |
| **NHF** | Monthly | End of the month following deduction | FMBN portal / designated banks | FMBN receipt; updated passbook |
| **NSITF (ECS)** | Monthly | End of the month following payroll month | NSITF e-payment portal / designated banks | NSITF receipt; **Employer Compliance Certificate (ECC)** issued annually |
| **ITF** | Annually | **1 April** of the year following | ITF e-portal / designated banks; file ITF Annual Return | ITF receipt and **Compliance Certificate** |

### 8a — Compliance certificates and procurement

Government and many large private procurement processes require evidence of compliance with **all four** schemes. The standard documentation set is:

- PenCom Pension Compliance Certificate
- FMBN NHF Compliance Certificate
- NSITF Employer Compliance Certificate (ECC)
- ITF Compliance Certificate
- (and a Tax Clearance Certificate — see `ng-income-tax`)

### 8b — Conservative defaults

| Situation | Conservative position |
|---|---|
| Headcount unknown | Assume ≥ 3 employees → apply PRA 2014; flag for confirmation |
| Annual turnover unknown | Assume ≥ ₦50M → apply ITF; flag for confirmation |
| Pension base (housing/transport split) unclear | Use full basic + housing + transport; do not exclude any of the three; flag |
| Employee NHF nationality status unknown | Apply 2.5% (assume Nigerian); flag for confirmation |
| Foreign employee | NHF voluntary — exclude by default; flag |
| Employer-borne pension election unclear | Assume standard 10/8 split (most common); flag |
| Late remittance suspected | Compute 2% per month penalty (pension); 10% + CBN interest (NSITF); 5% per month (ITF); flag arrears for reviewer |
| ITF reimbursement requested | Out of scope — refer to ITF directly |

---

## Section 9 — Sources

### 9a — Primary legislation

| Source | Reference |
|---|---|
| Pension Reform Act 2014 (PRA 2014) | https://www.pencom.gov.ng/regulations/pension-reform-act-2014 |
| National Housing Fund Act 1992, Cap N45 LFN 2004 | NHF Act 1992 (FMBN) |
| Employee's Compensation Act 2010 (ECA 2010) | NSITF / Federal Ministry of Labour and Employment |
| Industrial Training Fund Act 1971 (as amended by Act No. 19 of 2011) | https://itf.gov.ng |
| Nigeria Tax Act 2025 (NTA 2025) | Consolidation of ITF/NSITF/TET into Development Levy — implementing regulations pending |

### 9b — Regulators and portals

| Regulator | URL |
|---|---|
| PenCom (National Pension Commission) | https://www.pencom.gov.ng |
| FMBN (Federal Mortgage Bank of Nigeria) | https://www.fmbn.gov.ng |
| NSITF (Nigeria Social Insurance Trust Fund) | https://www.nsitf.gov.ng |
| ITF (Industrial Training Fund) | https://itf.gov.ng |
| FIRS (Federal Inland Revenue Service) | https://www.firs.gov.ng |

### 9c — Outlook — NTA 2025 Development Levy

The **Nigeria Tax Act 2025** introduces a consolidated **Development Levy** intended to replace, inter alia, the **ITF contribution** and the **NSITF contribution** (alongside the Tertiary Education Tax). At the time of writing this skill (2026), commencement instruments and implementing regulations from FIRS and the Federal Ministry of Finance are pending. Until those are gazetted and operationalised:

- Continue to file ITF and NSITF as standalone schemes under their existing Acts.
- Monitor FIRS public notices for the Development Levy commencement date.
- The **PRA 2014 pension scheme** and the **NHF Act 1992** scheme are **not affected** by the NTA 2025 consolidation and continue under their existing regulators (PenCom, FMBN).

This skill will be revised once the NTA 2025 implementing regulations are in force.

---

*OpenAccountants — open-source accounting skills for AI*
*This is not tax advice. All outputs must be reviewed by a qualified professional before filing.*

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
