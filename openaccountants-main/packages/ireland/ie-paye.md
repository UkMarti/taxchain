---
name: ie-paye
description: Use this skill whenever asked to compute, review, or remit Irish Pay-As-You-Earn (PAYE) for an employer operating in Ireland. Trigger on phrases like "Ireland PAYE", "PAYE Modernisation", "Irish payroll tax", "Revenue Online Service PAYE", "RPN Ireland", "Tax credit certificate Ireland", "real-time payroll Ireland", "ROS payroll submission", "emergency tax Ireland", "BIK Ireland", "Small Benefit Exemption", or any Irish employer payroll-withholding request. Covers PAYE Modernisation real-time reporting since 1 January 2019, the RPN (Revenue Payroll Notification) lifecycle, standard rate cuts-off and tax credits for 2025, emergency tax basis, week 1 / month 1 basis, Benefit-in-Kind valuation rules including the EV regime, the Small Benefit Exemption raised to EUR 1,000, and the monthly payment cycle to ROS by the 23rd. Out of scope: USC computation (see ie-usc), PRSI Class S for self-employed (see ie-prsi-class-s), self-employed income tax (Form 11 — see ie-income-tax-form11), preliminary tax (see ie-preliminary-tax), and VAT (see ireland-vat-return). ALWAYS read this skill before touching Irish PAYE work.
version: 1.0
jurisdiction: IE
tax_year: 2025
category: international
verified_by: pending
depends_on:
  - foundation
  - ie-usc
  - ie-prsi-class-s
---

# Ireland — PAYE (Pay-As-You-Earn) — Skill v1.0

> **2025 changes summary (v1.0):** PAYE Modernisation has been live since **1 January 2019** and remains the operating framework for 2025 — employers submit payroll data to Revenue **on or before each payment** via the **Revenue Online Service (ROS)**. The standard rate cut-off point for a single individual is **EUR 44,000** for 2025 (up from EUR 42,000 in 2024) under Finance Act 2024. The Personal Tax Credit and PAYE Tax Credit each rise to **EUR 2,000** for 2025. The **Small Benefit Exemption** is **EUR 1,000 per year** across up to **two non-cash benefits** (Finance Act 2024). PRSI Class A employee rate rises to **4.1%** from 1 October 2024 per the Roadmap for Increased PRSI Rates 2024–2028, and employer rates also step up. USC bands and rates are out of scope here — see `ie-usc`. The **P30** monthly return and **P35** annual return are abolished — payroll data is in real time, and payment is due by the **23rd of the following month** via ROS Debit Instruction or ROS Bank Transfer.

---

## Section 1 — Quick reference

| Field | Value |
|---|---|
| Country | Ireland |
| Tax | PAYE — Pay-As-You-Earn (employee income tax withheld at source) |
| Currency | EUR (€) |
| Tax year | Calendar year (1 Jan – 31 Dec) |
| Current tax year | 2025 |
| Tax authority | Office of the Revenue Commissioners (Revenue) |
| Filing platform | Revenue Online Service (ROS) — `https://www.ros.ie` |
| Reporting framework | **PAYE Modernisation** (since 1 January 2019) — real-time payroll submission |
| Payroll submission deadline | **On or before** each payment date |
| Monthly payment deadline | **23rd of the following month** (ROS Debit Instruction); 14th for paper (rarely used) |
| Standard rate band (2025) — single | **EUR 44,000 at 20%**, balance at 40% |
| Standard rate band (2025) — married, one earner | EUR 53,000 at 20% |
| Standard rate band (2025) — married, both earners | EUR 88,000 max (transferable up to EUR 35,000 between spouses) |
| Standard rate band (2025) — single parent (one-parent family payment) | EUR 48,000 at 20% |
| Personal Tax Credit (2025) | **EUR 2,000** (single); EUR 4,000 (married jointly assessed) |
| PAYE Tax Credit / Employee Tax Credit (2025) | **EUR 2,000** |
| Earned Income Tax Credit (self-employed, 2025) | EUR 2,000 (not PAYE; informational) |
| Home Carer Tax Credit (2025) | EUR 1,950 (where applicable) |
| Rent Tax Credit (2025) | EUR 1,000 (single) / EUR 2,000 (jointly assessed) |
| Age Tax Credit (65+) | EUR 245 (single) / EUR 490 (married) |
| RPN | Revenue Payroll Notification — replaces the legacy Tax Credit Certificate (P2C); pulled per employee per pay period |
| Emergency tax basis | Applied where no RPN is available; week 1/4/4 weeks then full deduction at 40% |
| BIK | Benefit-in-Kind — taxable per Part 5 Chapter 3 TCA 1997 |
| Small Benefit Exemption | **EUR 1,000/year**, up to **2** non-cash benefits per year (Finance Act 2024) |
| PRSI Class A — employee (2025) | **4.1%** (rose from 4.0% on 1 October 2024) |
| PRSI Class A — employer (2025) | **8.9%** below EUR 496/wk; **11.15%** above EUR 496/wk |
| USC | See `ie-usc` — 0.5% / 2% / 4% / 8% bands; 3% self-employed surcharge > EUR 100k |
| Employee return | Form 12 (PAYE-only) or Form 11 (with non-PAYE income) |
| Governing law | Taxes Consolidation Act 1997 (TCA 1997) Parts 4–5; Finance Acts; Income Tax (Employments) (Consolidated) Regulations 2018 (S.I. 345/2018) |
| Penalty — failure to operate PAYE | Tax + interest at **0.0219% per day** (~8% p.a.) + penalties under TCA 1997 s.987 |
| Skill version | 1.0 |
| Validated by | Pending — requires sign-off by a qualified Irish tax practitioner (CTA / ACA / ACCA with tax) |

---

## Section 2 — Required inputs & refusal catalogue

### Required inputs (per pay period)

For each employee on the payroll:

1. **Identity**: Full name, **PPS number** (Personal Public Service number), date of birth, date of joining, address.
2. **Employer identity**: Employer Registration Number, ROS digital cert, Employment ID (per contract / employment).
3. **RPN** for the pay period: Revenue Payroll Notification pulled from ROS — contains tax credits, standard rate cut-off point (SRCOP), USC status, PRSI class, basis (cumulative / week 1 / emergency), exclusion orders.
4. **Gross pay** for the period: salary, wages, overtime, commission, bonuses, holiday pay, sick pay (illness benefit handling — see §4), notional pay (BIK).
5. **Benefits-in-Kind (BIK)** for the period: company car, company van, employer-provided accommodation, preferential loans, medical insurance paid by employer, share-based remuneration not under approved scheme.
6. **Statutory deductions evidence**:
   - PRSI Class confirmation (typically Class A for employees; Class S for proprietary directors > 50% shareholding)
   - Pension contributions (occupational pension / PRSA / AVC)
   - Permanent Health Insurance (PHI)
   - Approved Profit Sharing Scheme contributions
7. **Variable items**: lump sums (redundancy, ex gratia), share options, share awards (RSUs), termination payments.
8. **Pay frequency**: weekly, fortnightly, four-weekly, monthly, quarterly.
9. **Cessation events**: leaver date; final cumulative or week-1 settlement.

### Refusal catalogue — out of scope for this skill

| Scenario | Why refused | Route to |
|---|---|---|
| USC computation detail (bands, exemptions, surcharge) | Separate skill | `ie-usc` |
| PRSI Class S (self-employed) | Different class & regime | `ie-prsi-class-s` |
| Self-employed income tax (Form 11) | Not PAYE | `ie-income-tax-form11` |
| Preliminary tax / Form 11 payment on account | Self-assessment regime | `ie-preliminary-tax` |
| VAT | Different tax | `ireland-vat-return` |
| Corporation tax | Different tax | Out of scope (not yet covered) |
| Capital Gains Tax | Different tax | Out of scope |
| Capital Acquisitions Tax (gift/inheritance) | Different tax | Out of scope |
| Stamp Duty | Different tax | Out of scope |
| RCT (Relevant Contracts Tax — construction, forestry, meat processing) | Sub-contractor regime, not PAYE | Separate (not yet covered) |
| Professional Services Withholding Tax (PSWT) | Government supplier WHT | Separate |
| Cross-border worker reliefs / Trans-border Workers Relief | Specialist | Flag for reviewer |
| Share Option / RSU detailed taxation (KEEP, ESOT, APSS, SAYE) | Complex; needs case review | Flag for reviewer (RTSO1 for unapproved options is filed separately) |
| Termination payments > EUR 200,000 / SCSB calculation edge cases | Needs reviewer | Flag for reviewer |
| Domiciliary care / household employee schemes (PAYE for nannies under Special Assignee Relief etc.) | Specialist | Flag for reviewer |
| Special Assignee Relief Programme (SARP) | Specialist relief | Flag for reviewer |
| Foreign Earnings Deduction (FED) | Specialist relief | Flag for reviewer |
| Tax appeals / TAC litigation | Litigation | Chartered tax practitioner |

---

## Section 3 — Tier 1: Calculating PAYE under PAYE Modernisation real-time reporting

> **Bands, credits, USC and PRSI:** This skill assumes the 2025 standard rate cut-off points, the 2025 tax credit schedule, USC bands (from `ie-usc`) and the PRSI Class A schedule. Always load `ie-usc` alongside this skill. This section focuses on the **payroll mechanics**: how the RPN drives the cumulative computation and how data flows through a real-time payroll submission.

### 3.1 The PAYE Modernisation cycle (since 1 January 2019)

```
Step 0  Register employee on ROS → triggers Revenue to issue an RPN
Step 1  Pull RPN from ROS before each pay run (employer or payroll software)
Step 2  Compute gross pay, BIK notional pay, and pre-tax deductions
Step 3  Apply tax credits and SRCOP from RPN on the basis indicated
         (cumulative / week 1 / emergency)
Step 4  Compute PAYE, USC, PRSI and LPT (Local Property Tax, if deduction at source)
Step 5  Pay employee net
Step 6  Submit payroll data (PSR — Payroll Submission Request) to ROS
         ON OR BEFORE the payment date
Step 7  Revenue issues a statement of liability on the 5th of the following month
Step 8  Pay the consolidated PAYE/USC/PRSI/LPT to Revenue by the 23rd
         of the following month (ROS Debit Instruction)
```

### 3.2 Cumulative basis — the default

The cumulative basis is the **default** for an employee with a current RPN. Tax is computed on **year-to-date (YTD)** pay, against **YTD tax credits** and **YTD standard rate band**, then the YTD PAYE already deducted is subtracted to give this period's PAYE.

```
For each pay period (cumulative basis):

  YTD_gross_taxable = Σ(gross + notional BIK − pension − PHI − approved deductions)
  YTD_credits       = (Annual tax credits ÷ pay periods in year) × period number
  YTD_SRCOP         = (Annual SRCOP ÷ pay periods in year) × period number

  YTD_tax_at_standard = min(YTD_gross_taxable, YTD_SRCOP) × 20%
  YTD_tax_at_higher   = max(YTD_gross_taxable − YTD_SRCOP, 0) × 40%
  YTD_gross_tax       = YTD_tax_at_standard + YTD_tax_at_higher

  YTD_PAYE_liability  = max(YTD_gross_tax − YTD_credits, 0)

  This_period_PAYE    = YTD_PAYE_liability − Σ(prior periods' PAYE)
```

> **Negative result:** If `This_period_PAYE` is negative (e.g. credits restored, employee returned from unpaid leave), a **refund** is due via payroll. Employer may offset against the same period's PAYE remittance to Revenue.

### 3.3 Week 1 / Month 1 basis — non-cumulative

Used when:
- Employee starts mid-year with no prior P45-equivalent / no leaver RPN data,
- Employee requests it (e.g. variable second employment),
- Revenue specifies it on the RPN.

```
For each pay period (week 1 / month 1):

  Period_gross_taxable = gross + notional BIK − pension − PHI
  Period_SRCOP         = Annual SRCOP ÷ pay periods in year
  Period_credits       = Annual credits ÷ pay periods in year

  Period_tax_at_standard = min(Period_gross_taxable, Period_SRCOP) × 20%
  Period_tax_at_higher   = max(Period_gross_taxable − Period_SRCOP, 0) × 40%
  Period_gross_tax       = Period_tax_at_standard + Period_tax_at_higher

  This_period_PAYE       = max(Period_gross_tax − Period_credits, 0)
```

No YTD reconciliation within the year; year-end true-up via Form 12 / Statement of Liability.

### 3.4 RPN lifecycle

| Event | Action |
|---|---|
| New hire | Register employment on ROS → Revenue issues RPN within 2 working days |
| Pre-payroll | Pull latest RPN from ROS for **every** employee before running payroll |
| Mid-year RPN change | Revenue may issue a fresh RPN (e.g. tax credit reallocation between spouses, new credit claim) — apply from next pay date |
| No RPN available | Operate **emergency tax basis** (see §4.1) |
| Employee ceases | Mark cessation date on next PSR; final RPN reflects leaver status |
| Employee on multiple employments | Each employment has its own RPN with its own credits / SRCOP split |

### 3.5 Payroll Submission Request (PSR) data items (per pay line)

- Employee PPS number
- Employment ID
- Pay frequency
- Pay date
- Gross pay (taxable + non-taxable separately)
- Notional pay (BIK)
- Pension contributions (employee + employer separately)
- PAYE deducted
- USC deducted
- PRSI deducted (employee + employer)
- LPT deducted at source (where Revenue has instructed)
- Share-based remuneration (RTSO1 separately for unapproved options)
- Cessation date (if applicable)

Submit via ROS web upload, ROS API, or integrated payroll software.

---

## Section 4 — Tier 2: Emergency tax, week 1 basis, BIK, Small Benefit Exemption

### 4.1 Emergency tax basis

Triggered when:
- Employer cannot retrieve an RPN (employee has not provided PPSN, or Revenue has no record),
- Employee has no PPSN at all.

**Where employee has provided PPSN but no RPN yet:**

| Pay period | Treatment |
|---|---|
| Weeks 1–4 (or month 1) | Standard rate band of **1/52 (or 1/12) of EUR 44,000** applied at 20%; **no tax credits** |
| Weeks 5–8 | Standard rate band **halved**; no credits |
| Week 9 onwards | **All pay taxed at 40%**; no SRCOP; no credits |

**Where employee has not provided PPSN:**

All pay taxed at **40%** from week/month 1; no SRCOP; no credits.

USC under emergency basis: applied at **8% flat** (no exemptions).

When RPN arrives: switch basis on next pay run; if cumulative, the YTD computation will refund any over-deduction.

### 4.2 Week 1 / Month 1 basis — when and why

Use this basis when Revenue specifies it on the RPN, or:
- New hire mid-year with no prior PAYE data,
- Employee with a previously volatile pay pattern (Revenue's call),
- Employer requested by employee with multiple jobs to avoid over-claiming credits on one.

Mechanics in §3.3. No YTD true-up within the year — over/under-deductions are squared at year-end through the Statement of Liability or Form 12.

### 4.3 Benefit-in-Kind (BIK)

BIK is **notional pay** — added to gross taxable pay for PAYE, USC and PRSI purposes.

| BIK category | 2025 valuation rule |
|---|---|
| Company car (combustion engine) | Annual taxable benefit = OMV × percentage based on annual business km and CO2 emissions category (Category A: lowest CO2 → 22.5% to 37.5%; Category E: highest CO2 → 30% to 37.5%). Tapered by business kilometres. |
| Company car — Electric (EV) | Reduced regime: OMV reduced by **EUR 35,000** for 2025 before applying the percentage; further reductions phase out through 2027 |
| Company car — Plug-in hybrid | Standard CO2 category basis; no EV reduction |
| Company van | **8% of OMV** (electric vans: reduced rate same as EV cars regime applies through 2025) |
| Employer-provided accommodation | **8% of market value** of the property OR rent paid by employer, whichever is higher |
| Preferential loans (qualifying home loan) | **Specified rate 4%** less interest paid; difference is BIK |
| Preferential loans (other) | **Specified rate 13.5%** less interest paid; difference is BIK |
| Medical insurance paid by employer | Gross premium (employer is the gross-up source); employee claims **20% tax relief** at source (TRS) — employer applies this at payroll |
| Employer-provided childcare | Not BIK if exempt criteria met (workplace nursery in TCA 1997 s.120A); otherwise full cost |
| Shares awarded (unapproved) | Market value at vesting/award; share schemes have separate RTSO1 mechanism for unapproved options |

BIK is included in **gross pay** in the PSR each pay period — apportion the annual BIK figure across pay periods.

### 4.4 Small Benefit Exemption

- **EUR 1,000 per year** (Finance Act 2024, up from EUR 500 in 2022 and EUR 1,000 effective 2024).
- Up to **two non-cash benefits** per year per employee.
- Must be **non-cash** — typical vehicle is a **One4all** voucher or similar gift card.
- Cannot be exchanged for cash.
- Cannot be part of a salary sacrifice arrangement.
- If the limit is exceeded by even EUR 1, the **entire** benefit becomes taxable (no partial relief).
- Excludes meal vouchers, share-based remuneration, and employer pension contributions.

When the exemption applies, the benefit is **not** included in PAYE / USC / PRSI — but it is **still reported** on the PSR.

### 4.5 Illness Benefit (Department of Social Protection)

- Illness Benefit paid by DSP is **taxable** but **not subject to USC or PRSI**.
- Revenue notifies the employer via RPN; employer adds the gross Illness Benefit to taxable pay (not gross pay).
- DSP pays the employee directly; employer does not pay it.

### 4.6 Pension contributions

- Employee occupational pension / PRSA contributions are **deductible from gross pay before PAYE** subject to the **age-related limits** (15% under 30 → 40% over 60) and the **earnings cap of EUR 115,000**.
- USC and PRSI are computed on the **pre-pension** gross — pensions do **not** reduce USC or PRSI base.
- Employer contributions are **not BIK** in the employee's hands.

---

## Section 5 — Worked example

**Scenario:** Single PAYE employee, monthly payroll, no prior employment in 2025. Monthly gross EUR 5,000. No BIK. Pension contribution 5% of gross (within age-related limit). RPN issued on cumulative basis with full Personal Tax Credit + PAYE Tax Credit + EUR 44,000 SRCOP. October 2025 pay period (period 10 of 12).

### A — Annual reference values from RPN

| Item | EUR |
|---|---|
| Annual SRCOP | 44,000 |
| Annual tax credits (Personal 2,000 + PAYE 2,000) | 4,000 |
| Pay periods in year | 12 |
| Monthly SRCOP | 3,666.67 |
| Monthly tax credits | 333.33 |

### B — October period gross & deductions

| Item | EUR |
|---|---|
| Monthly gross | 5,000.00 |
| − Pension (5%) | (250.00) |
| **Taxable pay (this period)** | **4,750.00** |

### C — YTD figures (cumulative basis, period 10)

| Item | EUR |
|---|---|
| YTD taxable pay (10 × 4,750) | 47,500.00 |
| YTD SRCOP (10 × 3,666.67) | 36,666.67 |
| YTD tax credits (10 × 333.33) | 3,333.33 |

### D — YTD PAYE computation

```
YTD tax at standard rate = min(47,500.00 , 36,666.67) × 20%
                         = 36,666.67 × 20%
                         = 7,333.33

YTD tax at higher rate   = max(47,500.00 − 36,666.67 , 0) × 40%
                         = 10,833.33 × 40%
                         = 4,333.33

YTD gross tax            = 7,333.33 + 4,333.33 = 11,666.66

YTD PAYE liability       = 11,666.66 − 3,333.33 = 8,333.33
```

### E — This-period PAYE (assuming prior 9 months deducted EUR 7,500 cumulatively)

```
This period PAYE = 8,333.33 − 7,500.00 = 833.33
```

(In a steady-state monthly run with consistent pay, monthly PAYE settles at ~EUR 833.33 = annual EUR 10,000 ÷ 12.)

### F — USC and PRSI (delegated)

- **USC** on EUR 5,000 monthly gross (pre-pension) → see `ie-usc` for band application. Indicative: EUR 5,000 × 12 = EUR 60,000 annual → top band at 8% engages; monthly USC roughly EUR 250–300.
- **PRSI Class A employee** at 4.1% of EUR 5,000 = **EUR 205.00**.

### G — Net pay (this period)

| Component | EUR |
|---|---|
| Gross pay | 5,000.00 |
| − Pension (5%) | (250.00) |
| − PAYE | (833.33) |
| − USC (indicative, see `ie-usc`) | (~265.00) |
| − PRSI employee (4.1%) | (205.00) |
| **Net pay** | **~3,446.67** |

### H — Employer cost (this period)

| Component | EUR |
|---|---|
| Gross pay | 5,000.00 |
| Employer PRSI Class A (11.15% above EUR 496/wk threshold) | 557.50 |
| Employer pension (if applicable) | (per policy) |
| **Direct employer cost (excl. employer pension)** | **5,557.50** |

### I — PSR submission

On or before pay date (e.g. 31 October 2025), submit PSR to ROS with employee details, gross 5,000, notional pay 0, pension 250, PAYE 833.33, USC ~265.00, PRSI employee 205, PRSI employer 557.50.

### J — Payment to Revenue

By **23 November 2025**, pay the consolidated October liability:
- PAYE: 833.33
- USC: ~265.00
- PRSI (employee + employer): 762.50
- **Total: ~EUR 1,860.83**

Via ROS Debit Instruction.

---

## Section 6 — Filing & payment

### Real-time monthly cycle

| Step | Action | Deadline |
|---|---|---|
| 1 | Retrieve RPN for each employee from ROS | Before each pay run |
| 2 | Compute gross, BIK, deductions, PAYE/USC/PRSI/LPT per Section 3 | Before pay date |
| 3 | Pay employee net | Per company schedule |
| 4 | Submit **Payroll Submission Request (PSR)** to ROS | **On or before the pay date** |
| 5 | Revenue issues monthly **statement** on the 5th of the following month | n/a (auto) |
| 6 | Review statement; raise correction if needed (correction PSR) | By 14th of following month |
| 7 | Pay consolidated PAYE/USC/PRSI/LPT to Revenue | **23rd of the following month** (ROS Debit Instruction) |

### What happened to P30 and P35?

- **P30** (monthly/quarterly return) — **abolished** with PAYE Modernisation effective 1 January 2019. Replaced by real-time PSRs and the monthly Revenue-generated statement.
- **P35** (annual reconciliation) — **abolished**. No annual employer return; the year's data is the sum of in-year PSRs.
- **P45** (cessation certificate) — **abolished**. Cessation is reported on the PSR.
- **P60** (year-end employee certificate) — **abolished**. Employees access their year-end statement via **myAccount** on Revenue's website.
- **P2C** (paper tax credit certificate to employer) — **abolished**. Replaced by the digital RPN pulled in real time.

### Choosing reduced filing — small employers

Employers with annual PAYE/USC/PRSI < **EUR 28,800** (combined) may apply to Revenue for **quarterly** payment (still monthly PSRs, just quarterly payment). Standard threshold; verify on ROS.

### Penalties

| Default | Penalty |
|---|---|
| Late PSR submission | EUR 4,000 per offence under TCA 1997 s.987 (typically waived for occasional lateness on first offence; flag if pattern) |
| Failure to operate PAYE / under-deduction | Tax + interest at **0.0219% per day** (~8% p.a.) + s.987 penalty |
| Late payment | Interest at 0.0219% per day; Revenue may also apply a surcharge |
| Failure to register as employer | EUR 4,000 + back-tax |
| Incorrect RPN application (e.g. ignoring week-1 instruction) | Penalty + interest on under-deduction |
| Failure to issue cessation on PSR | EUR 4,000 |

### Employee year-end (informational)

- Revenue auto-generates a **Statement of Liability** (formerly P21) via myAccount around January.
- Employees with **non-PAYE income** (rental, foreign, share options exercised, > EUR 5,000 non-PAYE income) must file **Form 11** by 31 October following the tax year (paper) or extended via ROS — see `ie-income-tax-form11`.
- Employees with PAYE-only income but a one-off adjustment (medical expenses, rent credit, working-from-home relief) file **Form 12** via myAccount.

---

## Section 7 — Conservative defaults

When inputs are incomplete or ambiguous, default to the most cautious position and flag for reviewer:

| Situation | Conservative position |
|---|---|
| No RPN available; PPSN provided | Operate **emergency tax basis** per §4.1 — do not assume cumulative credits. Pull RPN on next pay run and refund any over-deduction via cumulative computation |
| No PPSN at all | Operate emergency basis at **40% flat**, no SRCOP, no credits; require employee to obtain PPSN via DEASP — block onboarding completion until PPSN provided |
| Pay frequency mid-year change | Adjust period number and divisor; re-cut SRCOP and credits on the new frequency from the change date |
| Mid-year joiner with no prior employment data | Default to **week 1 basis** until prior YTD figures confirmed via RPN; switch to cumulative once RPN refreshes |
| BIK valuation uncertain (company car CO2 category, business km estimate) | Use **highest reasonable percentage** in the matrix and pro-rate business km **conservatively low**; flag for reviewer with year-end true-up |
| Small Benefit Exemption near limit | Track running total per employee; if a second benefit would exceed EUR 1,000, **tax the full second benefit** rather than risk wiping the exemption |
| Pension contribution above age-related limit | Cap the **deductible** portion; excess is contributed but not pre-PAYE — flag for reviewer |
| Employee with two employments | Default to **week 1 basis** on the secondary employment unless Revenue's RPN explicitly splits credits / SRCOP between them |
| Proprietary director (>50% shareholder) misclassified as Class A | Default to **PRSI Class S** (self-employed) — Class A is not available; flag for reviewer |
| Termination payment | Treat as fully taxable PAYE unless statutory redundancy + SCSB documented; flag for reviewer if amount > EUR 50,000 |
| Illness Benefit not on RPN | Do not include in payroll until Revenue notifies via RPN; do not estimate |
| Share-based remuneration (RSUs vesting) | Apply PAYE on market value at vesting; flag share-options (unapproved) for separate **RTSO1** within 30 days of exercise |
| Cessation mid-period | Issue final cumulative payroll with cessation date on PSR; do not back-date or pre-date |
| BIK on EV (uncertain OMV) | Use **published list price** from manufacturer; apply EUR 35,000 reduction for 2025 — flag if vehicle is plug-in hybrid (no EV reduction) |
| LPT deduction-at-source on RPN | Apply exactly as specified by Revenue — do not net or split |
| Director PAYE | Same as any employee under PAYE Modernisation, but verify PRSI class (A vs S) |
| Multi-state / non-Irish-resident employee on Irish payroll | Default to **PAYE applies** if work performed in Ireland; flag for reviewer for DTA / split-year claim |

---

## Section 8 — Sources

| Source | Reference / URL |
|---|---|
| Taxes Consolidation Act 1997 (consolidated) | https://www.irishstatutebook.ie/eli/1997/act/39 |
| Income Tax (Employments) (Consolidated) Regulations 2018 (S.I. 345/2018) | https://www.irishstatutebook.ie/eli/2018/si/345 |
| Finance Act 2024 (latest at time of writing) | https://www.irishstatutebook.ie/eli/2024/act/43 |
| Revenue PAYE Modernisation hub | https://www.revenue.ie/en/employing-people/paye-modernisation |
| Revenue — Employers' Guide to PAYE | https://www.revenue.ie/en/employing-people/documents/paye-employers-guide.pdf |
| Revenue — Benefit-in-Kind guidance | https://www.revenue.ie/en/employing-people/benefit-in-kind-for-employers |
| Revenue — Small Benefit Exemption | https://www.revenue.ie/en/employing-people/benefit-in-kind-for-employers/small-benefits.aspx |
| Revenue — Emergency basis of tax deduction | https://www.revenue.ie/en/employing-people/paying-an-employee/emergency-tax/index.aspx |
| Revenue Online Service (ROS) | https://www.ros.ie |
| Revenue myAccount (employees) | https://www.ros.ie/myaccount-web/home.html |
| Department of Social Protection — PRSI Classes | https://www.gov.ie/en/publication/c0bc02-prsi-class-a-rates |
| Roadmap for Increased PRSI Rates 2024–2028 (DSP) | https://www.gov.ie/en/publication/8c4ea-roadmap-for-increased-prsi-rates |
| Irish Tax Institute (CTA body) | https://www.taxinstitute.ie |
| Chartered Accountants Ireland | https://www.charteredaccountants.ie |

---

*OpenAccountants — open-source accounting skills for AI*
*This is not tax advice. All outputs must be reviewed by a qualified Irish tax practitioner (CTA / ACA / ACCA with tax) before filing or remittance.*

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
