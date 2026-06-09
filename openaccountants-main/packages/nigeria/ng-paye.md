---
name: ng-paye
description: Use this skill whenever asked to compute, review, or remit Nigerian Pay-As-You-Earn (PAYE) for an employer. Trigger on phrases like "Nigeria PAYE", "PAYE Nigeria payroll", "employee tax Nigeria", "remit PAYE Nigeria", "PAYE schedule SIRS", "Form H1 reconciliation", "withhold employee tax Nigeria", or any Nigerian employer payroll-withholding request. Covers monthly PAYE computation, remittance to the relevant State Internal Revenue Service (SIRS) for residents and to FIRS for FCT employees / non-resident employers / federal MDAs, year-end Form H1 reconciliation, and the NTA 2025 transitional changes effective 1 January 2026. Out of scope: Companies Income Tax (CIT), Value Added Tax (VAT), withholding tax on contracts/dividends/rents — see ng-income-tax, ng-vat-return, and other Nigerian skills. ALWAYS read this skill before touching Nigerian PAYE work.
version: 1.0
jurisdiction: NG
tax_year: 2025
category: international
verified_by: pending
depends_on:
  - foundation
  - ng-income-tax
---

# Nigeria — Pay-As-You-Earn (PAYE) — Skill v1.0

> **2025/2026 changes summary (v1.0):** PAYE continues to be administered under the **Personal Income Tax Act (PITA) Cap. P8 LFN 2004 (as amended by the Finance Acts 2011–2023)** for the 2025 tax year. The **Nigeria Tax Act 2025 (NTA 2025)**, signed 26 June 2025, takes effect **1 January 2026** and replaces PITA — but **the 2025 PAYE year is still computed under PITA**. From 1 January 2026, PAYE will run on the new NTA 2025 bracket structure and consolidated relief regime, and remittance is expected to migrate to a single payroll module integrated with the **FIRS TaxPro-Max** portal (implementation date TBC per FIRS circulars). PAYE is collected by the **State Internal Revenue Service (SIRS)** of the employee's state of residence; for employees resident in the **Federal Capital Territory (FCT)**, for **non-resident employers without a Nigerian fixed base**, and for **federal Ministries, Departments and Agencies (MDAs)**, PAYE is remitted to **FIRS** instead.

---

## Section 1 — Quick reference

| Field | Value |
|---|---|
| Country | Federal Republic of Nigeria |
| Tax | PAYE — Pay-As-You-Earn (employee income tax withheld at source) |
| Currency | NGN (Nigerian Naira / ₦) |
| Tax year | Calendar year (1 Jan – 31 Dec) |
| Current tax year | 2025 (PITA); 2026 onward under NTA 2025 |
| Tax authority — residents | State Internal Revenue Service (SIRS) of state of residence |
| Tax authority — FCT / non-resident employer / federal MDAs | Federal Inland Revenue Service (FIRS) |
| Monthly remittance form | PAYE Schedule (varies by SIRS — e.g. LIRS eTax, KWIRS, RIRS, etc.) |
| Monthly remittance deadline | **10th of the following month** |
| Annual reconciliation | **Form H1** (Employer's Annual Return of All Emoluments Paid to Employees) |
| Annual reconciliation deadline | **31 January** of the following year |
| Employee return | Form A (Annual Return of Income & Claim for Allowances and Reliefs) — filed by employee with SIRS |
| Governing law (2025) | Personal Income Tax Act Cap. P8 LFN 2004, as amended; Finance Acts 2011–2023 |
| Governing law (2026 onward) | Nigeria Tax Act 2025 (NTA 2025) |
| Penalty — failure to deduct/remit | **10% per annum** of unpaid tax + interest at **CBN MPR + 5%** |
| Late filing of Form H1 | ₦500,000 (body corporate) / ₦50,000 (individual) under PITA s.94 |
| TIN | Required for both employer and every employee (JTB / FIRS-issued) |
| Skill version | 1.0 |
| Validated by | Pending — requires sign-off by a qualified Nigerian chartered tax practitioner (CITN / ICAN) |

---

## Section 2 — Required inputs & refusal catalogue

### Required inputs (per pay period)

For each employee on the payroll:

1. **Identity**: Full name, JTB-issued TIN, NIN, date of joining (if mid-year), state of residence.
2. **Gross emoluments** for the month: basic salary, housing, transport, utility, leave, meal, entertainment, productivity, and all cash allowances.
3. **Benefits in kind (BIK)**: official car, accommodation provided, asset use — valued per PITA s.4 and Sixth Schedule.
4. **Statutory deductions evidence**:
   - Pension contribution (employee 8% under PRA 2014 s.4)
   - National Housing Fund (NHF) 2.5% — only if employee earns ≥ ₦3,000/month under the NHF Act 1992
   - National Health Insurance Authority (NHIA) employee share (if scheme participates)
   - Life assurance premium (must be on the employee's own life; receipts required)
   - Gratuity contribution (where applicable)
5. **Variable items**: bonuses, commissions, overtime, leave allowance, 13th-month, gratuity payments, severance.
6. **Marital and dependent status** — *for 2026 onward under NTA 2025 only*; PITA 2025 uses Consolidated Relief Allowance (CRA), not dependent-based reliefs.
7. **Employer details**: TIN, RC number, state of operation, payroll registration with the relevant SIRS / FIRS.

### Refusal catalogue — out of scope for this skill

| Scenario | Why refused | Route to |
|---|---|---|
| Companies Income Tax (CIT) | Different regime, FIRS-administered | ng-cit (separate skill) |
| Withholding tax on contracts/dividends/rents | Not PAYE; different tax type | ng-wht (separate skill) |
| Value Added Tax | Different tax | ng-vat-return |
| Personal income tax for self-employed individuals | Direct assessment, not PAYE | ng-income-tax |
| Tertiary Education Tax (TET) | Company-level tax | Out of scope |
| Police Trust Fund Levy / NITDA Levy | Company-level levies | Out of scope |
| Expatriate immigration / CERPAC / monthly expat returns | Immigration, not tax | Refer to legal counsel |
| Transfer pricing on inter-company secondment fees | TP regime, FIRS | Specialist TP advisor |
| Tax dispute resolution / TAT appeals | Litigation | Chartered tax practitioner |
| Pre-2014 pension regime (PRA 2004) | Superseded | Pension administrator |
| Stock options taxation (vesting / exercise) | Complex, needs case review | Flag for reviewer |
| Multi-state residency dispute | Requires SIRS coordination | Flag for reviewer |

---

## Section 3 — Tier 1: Monthly PAYE computation mechanics

> **Bracket table & CRA formula:** This skill assumes the PITA 2025 bracket table, the Consolidated Relief Allowance formula `CRA = higher of ₦200,000 or 1% of gross income, plus 20% of gross income`, and the pension/NHF/NHIA/life-assurance deduction list — all of which live in the **`ng-income-tax`** skill. Always load `ng-income-tax` alongside this skill. This section focuses on the **payroll mechanics**: how those numbers flow through a monthly schedule.

### Step-by-step monthly computation (PITA 2025)

```
Step 1:  Annualise the period gross
         Annualised gross = Monthly gross × 12   (or actual YTD ÷ months × 12)

Step 2:  Compute statutory deductions (annualised)
         − Pension employee share (8% of basic + housing + transport)  [PRA 2014 s.4(1)]
         − NHF (2.5% of monthly basic, if salary ≥ ₦3,000)              [NHF Act 1992]
         − NHIA employee share (where scheme applies)
         − Life assurance premium (on own life; receipts required)
         − Gratuity contribution (where applicable)

Step 3:  Compute Consolidated Relief Allowance (CRA)
         CRA = (1% × annualised gross, floor ₦200,000) + (20% × annualised gross)

Step 4:  Chargeable Income (annualised)
         = Annualised gross
           − Pension − NHF − NHIA − Life assurance − Gratuity
           − CRA

Step 5:  Apply the PITA progressive brackets (see ng-income-tax) to chargeable income
         → Annual PAYE liability

Step 6:  Monthly PAYE deduction
         = Annual PAYE ÷ 12

Step 7:  Net pay
         = Monthly gross − Monthly PAYE − Monthly pension − Monthly NHF − Monthly NHIA
           − any other voluntary deductions
```

### Important mechanics notes

- **Annualisation is mandatory**: PAYE is computed on an annual basis and prorated monthly, even for monthly payroll. Do **not** apply brackets directly to a monthly figure.
- **Minimum tax**: where chargeable income is zero or negative, the **1% minimum tax on gross income** under PITA s.37 still applies for 2025. NTA 2025 from 2026 onward **abolishes** the minimum tax for individuals earning below the new exemption threshold.
- **Basis of pension**: The 8% pension base is **basic + housing + transport** (BHT) under PRA 2014 s.4(3) — **not** total emoluments. Many payrolls get this wrong.
- **BIK**: Use the prescribed valuation in PITA Sixth Schedule (e.g. official residential accommodation = 5% of annual basic salary; official car for private use = 5% of cost). Add to gross before CRA.
- **Mid-year joiners**: Annualise from joining date. Use **months remaining in the year** as the divisor, not 12. Re-cut at year-end via Form H1.
- **Mid-year leavers**: Issue a **Termination Certificate (TCC pre-cursor)** showing YTD emoluments and PAYE; new employer continues from that point.
- **State of residence rule**: PAYE is paid to the SIRS of the state where the employee **resides** (not where the office is). For employees who change residence mid-year, prorate between SIRSs based on months of residence.

---

## Section 4 — Tier 2: Bonuses, gratuity, severance, expatriate secondment

### 4.1 Bonuses and 13th-month pay

- **PITA 2025 treatment**: Bonuses are **part of gross emoluments** in the month paid. Annualise the YTD total (including the bonus) and recompute PAYE; the variance flows to the bonus-month payroll.
- **Practical approach**: Use the **cumulative method** — at each pay run, recompute YTD PAYE on YTD emoluments, subtract YTD PAYE already deducted, deduct the balance this month. This avoids end-of-year shocks for irregular bonuses.

### 4.2 Gratuity

- **Contributory gratuity** (employer pays into a gratuity scheme): contributions are **not taxable** in the employee's hands at the point of contribution.
- **Lump-sum gratuity on retirement**:
  - Gratuity received on **retirement** by an employee who has served ≥ **5 years** is **exempt** under PITA Third Schedule paragraph 18.
  - Gratuity on **resignation / termination** (not retirement) is **fully taxable** as part of emoluments in the year of receipt.
- **NTA 2025 (from 2026)**: retains the retirement-gratuity exemption but caps it; check NTA 2025 Sixth Schedule when filing 2026 returns.

### 4.3 Severance / terminal benefits

- **Statutory severance** under the Labour Act or a collective agreement: taxable as part of emoluments.
- **Compensation for loss of office**: First ₦10,000,000 is **exempt** under PITA Third Schedule paragraph 26; excess is taxable.
- Severance paid in instalments: tax each instalment in the year received using the cumulative annualisation method.

### 4.4 Expatriate / inbound secondment

| Scenario | PAYE treatment |
|---|---|
| Expat resident in Nigeria (≥ 183 days in 12 months OR Nigerian-domiciled employer pays salary) | **Full PAYE** on worldwide employment income from Nigerian duties |
| Expat resident < 183 days, paid by foreign employer, salary not borne by Nigerian entity | **Exempt** under PITA s.10(1)(b) (subject to DTA) |
| Expat on shadow payroll (paid offshore but Nigerian entity reimburses) | **PAYE applies** — Nigerian entity is the **economic employer**; gross-up the offshore net |
| Split contract (Nigerian + offshore) | PAYE on Nigerian-duty portion only, prorated by workdays |
| Tax-equalised expats | Compute **hypothetical home-country tax**, gross up Nigerian compensation, withhold actual Nigerian PAYE; reconcile via tax-equalisation calc at year-end |

- **Non-resident employer with no Nigerian fixed base**: PAYE remits to **FIRS** (not a SIRS). FIRS uses the Non-Resident Persons' tax office.
- **CERPAC + Expatriate Quota**: required for immigration but separate from PAYE — flag if missing during onboarding review.

### 4.5 Directors' fees

- Executive directors: PAYE in the normal way.
- Non-executive directors' fees: not "employment income" — subject to **WHT at 10%** under PITA s.69, **not PAYE**. Route to ng-wht.

---

## Section 5 — Worked example: monthly PAYE computation

**Scenario:** Permanent employee resident in Lagos State. Monthly basic ₦400,000, housing ₦150,000, transport ₦50,000, utility ₦20,000, meal ₦30,000. No BIK. Has TIN. Employee pension contribution at 8%, NHF participating, no NHIA, no life assurance. October 2025 payroll, no bonus.

### A — Monthly gross emoluments

| Component | Amount (₦) |
|---|---|
| Basic salary | 400,000 |
| Housing allowance | 150,000 |
| Transport allowance | 50,000 |
| Utility allowance | 20,000 |
| Meal allowance | 30,000 |
| **Monthly gross** | **650,000** |
| **Annualised gross (× 12)** | **7,800,000** |

### B — Statutory deductions (annualised)

| Component | Basis | Annual (₦) |
|---|---|---|
| Pension employee (8% of BHT) | 8% × (400,000 + 150,000 + 50,000) × 12 | 576,000 |
| NHF (2.5% of basic) | 2.5% × 400,000 × 12 | 120,000 |
| NHIA | n/a | 0 |
| Life assurance | n/a | 0 |
| Gratuity | n/a | 0 |
| **Total annual deductions** | | **696,000** |

### C — Consolidated Relief Allowance (CRA)

```
CRA = max(1% × 7,800,000 ; 200,000) + (20% × 7,800,000)
    = max(78,000 ; 200,000) + 1,560,000
    = 200,000 + 1,560,000
    = ₦1,760,000
```

### D — Chargeable income

| Item | ₦ |
|---|---|
| Annualised gross | 7,800,000 |
| − Pension | (576,000) |
| − NHF | (120,000) |
| − CRA | (1,760,000) |
| **Annual chargeable income** | **5,344,000** |

### E — Annual PAYE liability

Apply the PITA progressive brackets (see `ng-income-tax` for the table). Indicative computation on ₦5,344,000 chargeable income:

| Bracket | Width | Rate | Tax (₦) |
|---|---|---|---|
| First 300,000 | 300,000 | 7% | 21,000 |
| Next 300,000 | 300,000 | 11% | 33,000 |
| Next 500,000 | 500,000 | 15% | 75,000 |
| Next 500,000 | 500,000 | 19% | 95,000 |
| Next 1,600,000 | 1,600,000 | 21% | 336,000 |
| Above 3,200,000 — first 2,144,000 of remainder | 2,144,000 | 24% | 514,560 |
| **Annual PAYE** | | | **1,074,560** |

> **Note:** Verify exact bracket numbers against `ng-income-tax`. The PITA brackets above are the long-standing 2011-Amendment brackets; NTA 2025 restructures these from 2026.

### F — Monthly PAYE

```
Monthly PAYE = 1,074,560 ÷ 12 = ₦89,547 (rounded)
```

### G — Net pay (this month)

| Component | ₦ |
|---|---|
| Monthly gross | 650,000 |
| − PAYE | (89,547) |
| − Pension employee (8% × 600,000 BHT) | (48,000) |
| − NHF (2.5% × 400,000) | (10,000) |
| **Net pay** | **502,453** |

### H — Employer cost (this month)

| Component | ₦ |
|---|---|
| Gross emoluments | 650,000 |
| Employer pension (10% × 600,000 BHT, PRA 2014 s.4(1)) | 60,000 |
| Employer NHIA (where applicable) | 0 |
| ITF (Industrial Training Fund) levy — 1% of annual payroll if ≥ 5 employees or turnover ≥ ₦50m, accrued | (separate line) |
| NSITF (Employee Compensation) — 1% of monthly payroll | 6,500 |
| **Direct employer cost** | **716,500** |

---

## Section 6 — Filing & payment

### Monthly cycle

| Step | Action | Deadline |
|---|---|---|
| 1 | Run payroll; compute PAYE per Section 3 | By month-end |
| 2 | Pay net salaries | Per company policy |
| 3 | Pay employee statutory deductions (pension to PFA, NHF to FMBN, NHIA where applicable) | Per scheme rules (typically 7 days from payroll) |
| 4 | Generate **PAYE Schedule** listing each employee, TIN, gross, deductions, PAYE | Before 10th of following month |
| 5 | Pay **PAYE** to the relevant tax authority (SIRS or FIRS) via bank/online portal | **10th of following month** |
| 6 | Upload PAYE Schedule to the SIRS / FIRS portal | **10th of following month** |
| 7 | Obtain electronic receipt / acknowledgement | Same day |

### Choosing the right authority

| Employee status | Remit PAYE to |
|---|---|
| Resident of any of the 36 states | SIRS of that state (e.g. LIRS for Lagos, OYSIRS for Oyo, RIRS for Rivers, KWIRS for Kwara, etc.) |
| Resident of the Federal Capital Territory (Abuja) | **FIRS** |
| Federal MDA employees | **FIRS** |
| Employees of foreign mission / non-resident employer with no Nigerian fixed base | **FIRS** (Non-Resident Persons office) |
| Itinerant worker (works in 2+ states for ≤ 183 days each, no principal residence) | SIRS of principal place of work, per JTB rules |

### Annual cycle — Form H1

| Step | Action | Deadline |
|---|---|---|
| 1 | Compile annual schedule of all employees with YTD gross, deductions, PAYE remitted | December year-end |
| 2 | Reconcile 12 monthly PAYE schedules to Form H1 totals | January |
| 3 | File **Form H1 — Employer's Annual Return of All Emoluments Paid to Employees** with each relevant SIRS / FIRS | **31 January** |
| 4 | Issue each employee a **Tax Deduction Card / certificate of PAYE** for their Form A filing | By 31 January |
| 5 | Pay any year-end PAYE shortfall (or carry forward refund) | With H1 |

### Penalties

| Default | Penalty |
|---|---|
| Failure to deduct or remit PAYE (PITA s.81 / s.82) | **10% per annum** of tax not deducted/remitted + interest at **CBN MPR + 5% p.a.** |
| Late filing of Form H1 (PITA s.94) | **₦500,000** (body corporate) / **₦50,000** (individual employer) per year of default |
| Failure to register employees for tax | **₦25,000** per employee per annum |
| Failure to deduct WHT on directors' fees / contracts | 10% of tax + interest (separate from PAYE) |

### NTA 2025 transition (from 2026)

- A unified payroll module is expected on **FIRS TaxPro-Max**, integrating PAYE with pension, NHF, NHIA, NSITF and ITF in a single monthly submission. Implementation date is TBC by FIRS circular.
- SIRSs will continue to collect PAYE under the new Joint Revenue Board framework, but data flows via the central platform.
- Until the central platform is live, **continue filing on each state's existing portal** (LIRS eTax, KWIRS, etc.).

---

## Section 7 — Conservative defaults

When inputs are incomplete or ambiguous, default to the most cautious position and flag for reviewer:

| Situation | Conservative position |
|---|---|
| Employee TIN unknown | Assume **no TIN**; do not block payroll but flag — penalty exposure on employer if TIN not obtained within onboarding cycle |
| Employee state of residence unclear | Default to **state where the office is located** and flag for confirmation; many SIRS dispute multi-state |
| FCT vs Lagos office, employee lives in Nasarawa | Pay PAYE to **Nasarawa SIRS** (state of residence), not FCT/FIRS — verify with employee |
| BIK valuation uncertain | Use **highest reasonable valuation** in Sixth Schedule; flag for reviewer |
| Pension base unclear | Default to **basic + housing + transport** (PRA 2014 s.4(3)); do not exclude transport even where contract calls it "allowance" |
| NHF participation unknown | If employee earns ≥ ₦3,000/month, default to **deducting** NHF and flag — opting out is by employee request |
| Life assurance receipts not provided | **Do not deduct**; flag and request receipt for next month |
| Bonus month — annualisation method unclear | Use **cumulative method** (YTD recompute); avoid annualise-and-divide which under-withholds |
| Mid-year joiner with prior employer PAYE | Require **previous employer's tax deduction card**; if absent, annualise on the **assumption of no prior employment** (full CRA available) and flag for H1 true-up |
| Expat residency unclear | Default to **resident** (full PAYE) if any of: ≥ 183 days, paid by Nigerian entity, or salary recharged to Nigerian entity |
| Gratuity classification (retirement vs resignation) | Default to **resignation** (fully taxable) unless retirement at statutory retirement age is documented |
| Severance > ₦10m | Tax the **excess over ₦10m** as ordinary emoluments in the month of receipt |
| 2025 vs 2026 transition | For **2025 pay periods**: PITA. For **2026 pay periods**: NTA 2025. Do **not** apply NTA 2025 brackets to 2025 December payroll even if processed in January 2026 |
| Authority unclear (FCT vs SIRS) | Default to **FIRS** for any case with non-resident or federal nexus; flag for reviewer |

---

## Section 8 — Sources

| Source | Reference / URL |
|---|---|
| Personal Income Tax Act Cap. P8 LFN 2004 (consolidated) | https://lawsofnigeria.placng.org/laws/P8.pdf |
| Personal Income Tax (Amendment) Act 2011 | Federal Republic of Nigeria Official Gazette No. 115, Vol. 98 |
| Finance Act 2019 / 2020 / 2021 / 2023 (PITA amendments) | https://www.firs.gov.ng/finance-acts |
| Nigeria Tax Act 2025 (NTA 2025) — effective 1 Jan 2026 | https://www.firs.gov.ng/nta-2025 |
| Pension Reform Act 2014 (s.4 contribution rates) | https://www.pencom.gov.ng/pra-2014 |
| National Housing Fund Act 1992 (NHF 2.5%) | https://fmbn.gov.ng/nhf-act |
| National Health Insurance Authority Act 2022 | https://nhia.gov.ng |
| Employee Compensation Act 2010 (NSITF 1%) | https://nsitf.gov.ng |
| Industrial Training Fund Act (ITF levy) | https://itf.gov.ng |
| Federal Inland Revenue Service (FIRS) | https://www.firs.gov.ng |
| FIRS TaxPro-Max portal | https://taxpromax.firs.gov.ng |
| Joint Tax Board (JTB) | https://www.jtb.gov.ng |
| Lagos State Internal Revenue Service (LIRS) — eTax | https://etax.lirs.net |
| Federal Capital Territory IRS / FIRS-FCT desk | https://www.firs.gov.ng/fct |
| Chartered Institute of Taxation of Nigeria (CITN) | https://www.citn.org |

---

*OpenAccountants — open-source accounting skills for AI*
*This is not tax advice. All outputs must be reviewed by a qualified Nigerian chartered tax practitioner (CITN / ICAN) before filing or remittance.*

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
