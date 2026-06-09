---
name: cyprus-income-tax
description: >
  Use this skill whenever asked about Cyprus personal income tax for self-employed individuals or employees. Trigger on phrases like "how much tax do I pay in Cyprus", "TD1", "IR1", "income tax return Cyprus", "allowable deductions", "Social Insurance", "GHS", "GESY", "provisional tax", "temporary tax", "chargeable income", "non-dom", "Special Defence Contribution", "SDC", "50% expat exemption", "183-day rule", "60-day rule", "self-employed tax Cyprus", or any question about filing or computing income tax for a self-employed individual or employee in Cyprus. Also trigger when preparing or reviewing a TD1/IR1 return, computing deductible expenses, advising on provisional (temporary) tax instalments, or assessing tax residency under the 183-day or 60-day rule. This skill covers PIT rate bands (2025 and the 2026 reform), Social Insurance and GHS/GESY contributions, employer-only funds, the 1/5 deductions cap, expat exemptions, SDC for domiciled residents, penalties, and interaction with VAT and social insurance. ALWAYS read this skill before touching any Cyprus income tax work.
version: 0.1
jurisdiction: CY
tax_year: 2025 (assessment year 2025; with confirmed 2026 reform figures noted)
category: international
depends_on:
  - income-tax-workflow-base
verified_by: pending
---

# Cyprus Income Tax -- Self-Employed and Individuals Skill v0.1

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Cyprus (Republic of Cyprus) |
| Tax | Personal Income Tax (Φόρος Εισοδήματος) |
| Currency | EUR only |
| Tax year | Calendar year (1 January -- 31 December) |
| Primary legislation | Income Tax Law (Law 118(I)/2002, as amended) |
| Supporting legislation | Special Contribution for the Defence Law (Law 117(I)/2002); General Healthcare System Law (Law 89(I)/2001); Social Insurance Law (Law 59(I)/2010) |
| Tax authority | Cyprus Tax Department (Τμήμα Φορολογίας), Ministry of Finance |
| Social insurance authority | Social Insurance Services, Ministry of Labour and Social Insurance (mlsi.gov.cy) |
| Filing portal | TAXISnet (taxisnet.mof.gov.cy); migrating to Tax For All (TFA, tfa.mof.gov.cy) from tax year 2026 |
| Filing deadline (TD1/IR1, employees/individuals) | 31 July of the following year (tax year 2025 -> 31 July 2026, extensions common) (Source: SPL Audit Cyprus; Gov.cy) |
| Validated by | Pending -- requires sign-off by a Cyprus-licensed accountant |
| Validation date | Pending |
| Skill version | 0.1 |

### Tax Rate Brackets -- 2025 (Tax Year 2025)

Source: PwC Worldwide Tax Summaries -- Cyprus Individual Taxes on personal income.

| Taxable Income (EUR) | Rate | Cumulative Tax at Top |
|---|---|---|
| 0 -- 19,500 | 0% | EUR 0 |
| 19,501 -- 28,000 | 20% | EUR 1,700 |
| 28,001 -- 36,300 | 25% | EUR 3,775 |
| 36,301 -- 60,000 | 30% | EUR 10,885 |
| 60,001+ | 35% | -- |

**Cyprus has no separate personal allowance -- the 0% band IS the tax-free threshold.** There is a single rate table; marital status does NOT change the PIT bands (unlike Malta).

### Tax Rate Brackets -- 2026 Reform (income arising on or after 1 January 2026)

Source: PwC; cyprustaxaccounting.com. **Apply ONLY to income arising from 1 Jan 2026 onward.** For tax year 2025, use the 2025 table above.

| Taxable Income (EUR) | Rate | Cumulative Tax at Top |
|---|---|---|
| 0 -- 22,000 | 0% | EUR 0 |
| 22,001 -- 32,000 | 20% | EUR 2,000 |
| 32,001 -- 42,000 | 25% | EUR 4,500 |
| 42,001 -- 72,000 | 30% | EUR 13,500 |
| 72,001+ | 35% | -- |

### Social Insurance and GHS Contribution Rates -- 2025

Source: KPMG Cyprus; PwC Worldwide Tax Summaries; Social Insurance Services.

| Contribution | Employee | Employer | Self-employed | Base / Ceiling (2025) |
|---|---|---|---|---|
| Social Insurance Fund | 8.8% | 8.8% | 16.6% | Insurable earnings capped at EUR 66,612/year (EUR 5,551/month, EUR 1,281/week) |
| General Healthcare System (GHS/GESY) | 2.65% | 2.90% | 4.00% | Capped at EUR 180,000/year total income |
| Social Cohesion Fund (employer only) | -- | 2.0% | -- | Total emoluments -- NO ceiling (uncapped) |
| Redundancy Fund (employer only) | -- | 1.2% | -- | Capped at EUR 66,612/year |
| HRD / Industrial Training Fund (employer only) | -- | 0.5% | -- | Capped at EUR 66,612/year |
| Central Holiday Fund (employer, unless exempt) | -- | 8.0% | -- | Capped at EUR 66,612/year |

**Component check -- Employee column:** Social Insurance 8.8% + GHS 2.65% = **11.45%** total employee deduction (SI capped at EUR 66,612; GHS capped at EUR 180,000).

**Component check -- Employer column (capped funds, excl. Holiday Fund):** SI 8.8% + GHS 2.90% + Redundancy 1.2% + HRD 0.5% = **13.4%**, PLUS Social Cohesion 2.0% uncapped. Including the Central Holiday Fund 8.0% (unless exempt): 13.4% + 8.0% = **21.4%** on capped earnings, plus 2.0% uncapped cohesion.

**Component check -- Self-employed column:** Social Insurance 16.6% + GHS 4.00% = **20.6%** total (SI on deemed/notional minimum insurable income per occupational category, max EUR 66,612; GHS on income capped at EUR 180,000).

> The 8.8%/8.8% Social Insurance rate was fixed from 1 Jan 2024 for five years (previously 8.3%). Source: KPMG Cyprus; Social Insurance Services.

### Special Defence Contribution (SDC) -- 2025

SDC applies ONLY to individuals who are Cyprus tax resident **AND** domiciled. Non-domiciled residents are exempt. Source: PwC; Constantinos Markou & Co.

| Income type | SDC rate (2025) | Note |
|---|---|---|
| Dividends | 17% | From 1 Jan 2026 reduced to 5% (Source: PwC; cyprustaxaccounting.com) |
| Interest | 17% | Reduced effective 3% where total annual income <= EUR 12,000 [RESEARCH GAP -- reviewer to confirm exact SDC interest reduced-rate mechanics against the SDC Law] |
| Rent | 3% on 75% of gross (effective 2.25%) | SDC on rent abolished from 1 Jan 2026 (Source: PwC; ATCA) |

### Conservative Defaults

| Ambiguity | Default |
|---|---|
| Unknown tax year | 2025 bands and rates; only apply 2026 bands to income arising on/after 1 Jan 2026 |
| Unknown residency | Treat as Cyprus tax resident only if >183 days OR 60-day rule met; otherwise STOP and confirm |
| Unknown domicile status | Treat as Cyprus-domiciled (SDC applies) -- non-dom is a fact requiring the 17-of-20-year test |
| Unknown business-use % (vehicle, phone, home) | 0% deduction |
| Unknown expense category | Not deductible |
| Unknown self-employed insurable income | Use deemed/notional minimum insurable income for the occupational category |
| Unknown VAT registration | Treat as registered if turnover > EUR 15,600 (compulsory threshold) |
| Unknown whether expense is entertainment/private | Not deductible |

---

## Section 2 -- Required Inputs and Refusal Catalogue

### Required Inputs

**Minimum viable** -- bank statement for the full tax year in CSV, PDF, or pasted text, plus confirmation of (1) Cyprus tax residency (183-day or 60-day rule), (2) domicile status (domiciled vs non-dom, affects SDC), and (3) employment status (employee under PAYE, self-employed, or both).

**Recommended** -- all sales invoices, purchase invoices/receipts, Social Insurance and GHS payment records, prior year TD1/IR1 or tax assessment, VAT registration status, occupational category (for self-employed insurable income).

**Ideal** -- complete income and expenditure account, asset register with capital allowances schedule, provisional (temporary) tax payment confirmations, employment income / TD63 emoluments certificates, audited accounts (if turnover > EUR 70,000), evidence supporting any expat exemption claim.

**Refusal if minimum is missing -- SOFT WARN.** No bank statement at all = hard stop. Bank statement without invoices = proceed with reviewer warning: "This TD1/IR1 was produced from bank statement alone. The reviewer must verify that all deductions claimed are supported by valid documentation and that the wholly-and-exclusively test is met, and must confirm residency and domicile status."

### Refusal Catalogue

**R-CY-1 -- Residency unknown.** "Cyprus tax residents are taxed on worldwide income; non-residents only on Cyprus-source income. This skill cannot proceed without confirming residency under the 183-day rule or the 60-day rule. Please confirm before proceeding."

**R-CY-2 -- Companies and partnerships.** "This skill covers individuals and sole-trader self-employed only. Companies (corporate income tax 12.5%) and partnerships file separate returns. Escalate to a Cyprus-licensed accountant."

**R-CY-3 -- Non-resident / dual-resident income.** "Non-resident and dual-resident taxation, and double-tax-treaty relief, have different rules. Out of scope. Escalate to a Cyprus-licensed accountant."

**R-CY-4 -- Capital gains / property disposals.** "Cyprus Capital Gains Tax on disposals of immovable property situated in Cyprus (and related shares) is a separate tax. Out of scope. Escalate to a Cyprus-licensed accountant."

**R-CY-5 -- Arrears / enforcement.** "Client has outstanding tax or Social Insurance arrears or is subject to Tax Department / Social Insurance Services enforcement. Late-payment charges and Social Insurance surcharges (up to 27%) are severe. Do not advise. Escalate to a Cyprus-licensed accountant immediately."

**R-CY-6 -- VAT return requested.** "This skill covers personal income tax (TD1/IR1) only. For Cyprus VAT, use the cyprus-vat-return skill."

**R-CY-7 -- Non-dom / SDC structuring.** "Non-domicile status and Special Defence Contribution planning require confirmation of the 17-of-20-year deemed-domicile test and the individual's domicile of origin. Flag for a Cyprus-licensed accountant; do not assert non-dom status without evidence."

---

## Section 3 -- Transaction Pattern Library

This is the deterministic pre-classifier. When a bank statement transaction matches a pattern below, apply the treatment directly. Do not second-guess. If none match, fall through to Tier 1 rules in Section 5.

**How to read this table.** Match by case-insensitive substring on the counterparty name or description as it appears in the bank statement. Greek/transliterated terms are included because Cyprus statements often appear in Greek or mixed Greek/English. If multiple patterns match, use the most specific. If none match, fall through to Tier 1 rules.

### 3.1 Income Patterns (Credits on Bank Statement)

| Pattern | Line | Treatment | Notes |
|---|---|---|---|
| Client name + TRANSFER, DEPOSIT, EMBASMA, PAYMENT | Self-employment income | Business income | If VAT-registered, extract net (excl. 19% VAT) |
| FEES, PROFESSIONAL FEES, CONSULTANCY, AMOIVI | Self-employment income | Business income | Professional fees -- typical for self-employed |
| STRIPE PAYOUT, STRIPE TRANSFER | Self-employment income | Business income | Platform payout -- match to underlying invoices |
| PAYPAL PAYOUT, PAYPAL TRANSFER | Self-employment income | Business income | Platform payout -- verify against invoices |
| WISE PAYOUT, REVOLUT PAYOUT | Self-employment income | Business income | Check if business or personal |
| UPWORK, FIVERR, TOPTAL | Self-employment income | Business income | Freelance platform -- net of commission |
| MISTHOS, SALARY, PAYROLL, EMPLOYER [name] | Employment income (PAYE) | Employment income | NOT self-employment -- emoluments under PAYE |
| ENOIKIO, RENT RECEIVED | Rental income | Rental income | Subject to PIT (+ SDC if domiciled) -- see 5.3 |
| TOKOS, INTEREST RECEIVED | Investment income | EXEMPT from PIT | Taxed under SDC if domiciled, otherwise nil |
| MERISMA, DIVIDEND | Investment income | EXEMPT from PIT | Taxed under SDC if domiciled, otherwise nil |
| TAX REFUND, EPISTROFI FOROU | EXCLUDE | Not income | Tax refund from prior year |
| GOVERNMENT GRANT, EPIDOMA | Check nature | Capital grants EXCLUDE; revenue grants = income | Confirm grant nature |

### 3.2 Expense Patterns (Debits) -- Fully Deductible (Self-Employment)

| Pattern | Category | Treatment | Notes |
|---|---|---|---|
| OFFICE RENT, ENOIKIO GRAFEIOU | Office rent | Deductible | Dedicated business premises |
| PROFESSIONAL INDEMNITY, PI INSURANCE | Professional insurance | Deductible | |
| ACCOUNTANT, AUDITOR, BOOKKEEP, LOGISTIS | Accountancy/audit fees | Deductible | |
| LAWYER, LEGAL, DIKIGOROS (business) | Legal fees | Deductible | Must be business-related |
| STATIONERY, OFFICE SUPPLIES | Office supplies | Deductible | |
| MARKETING, GOOGLE ADS, META ADS, FACEBOOK ADS | Marketing/advertising | Deductible | |
| TRAINING, CPD, COURSE, SEMINAR, CONFERENCE | Training/CPD | Deductible | Must relate to current business |
| PROFESSIONAL BODY, ICPAC SUBSCRIPTION | Professional subscriptions | Deductible | |
| BANK CHARGE, MAINTENANCE FEE, SPEXODA | Bank charges | Deductible | Business account only |
| STRIPE FEE, PAYPAL FEE, TRANSACTION FEE | Payment processing fees | Deductible | |
| DOMAIN, HOSTING, CLOUDFLARE, AWS | IT infrastructure | Deductible | If capital, use capital allowances |

### 3.3 Expense Patterns (Debits) -- SaaS and Software

| Pattern | Category | Treatment | Notes |
|---|---|---|---|
| GOOGLE WORKSPACE, MICROSOFT 365, OFFICE 365 | Software subscription | Deductible | Recurring subscription = operating expense |
| ADOBE, CANVA, FIGMA, NOTION, SLACK, ZOOM | Software subscription | Deductible | |
| ANTHROPIC, OPENAI, GITHUB, ATLASSIAN, DROPBOX | Software subscription | Deductible | |
| SOFTWARE LICENCE (perpetual, high value) | Capital item | Capital allowance | Capitalise per wear-and-tear schedule |

### 3.4 Expense Patterns (Debits) -- Utilities (may need apportionment)

| Pattern | Category | Tier | Notes |
|---|---|---|---|
| EAC, AHK, ELECTRICITY, ILEKTRISMOS | Electricity | T2 if home office | 100% if dedicated office; proportional if home |
| WATER BOARD, YDREFSI | Water | T2 if home office | Proportional if home |
| CYTA, PRIMETEL, EPIC, CABLENET | Telecoms/broadband | T2 | Business use portion only; default 0% if mixed |

### 3.5 Expense Patterns (Debits) -- Travel

| Pattern | Category | Treatment | Notes |
|---|---|---|---|
| RYANAIR, WIZZ AIR, AEGEAN, CYPRUS AIRWAYS, EASYJET | Flights | Deductible if business travel | Must be wholly business purpose |
| HOTEL, BOOKING.COM, AIRBNB | Accommodation | Deductible if business travel | |
| BOLT, TAXI, UBER | Local transport | Deductible if business purpose | |
| FUEL, PETROLINA, EKO, PETROL | Vehicle fuel | T2 -- business % only | Requires mileage log |
| PARKING | Parking | T2 -- business % only | |

### 3.6 Expense Patterns (Debits) -- NOT Deductible

| Pattern | Category | Treatment | Notes |
|---|---|---|---|
| RESTAURANT, DINNER, LUNCH, ENTERTAINMENT, CLIENT MEAL | Entertainment | NOT deductible | Private/non-business |
| PERSONAL, GROCERIES, SUPERMARKET, ALPHAMEGA, LIDL | Personal expenses | NOT deductible | Private living costs |
| FINE, PENALTY, PROSTIMO, PARKING FINE | Fines/penalties | NOT deductible | Public policy |
| INCOME TAX, FOROS, TAX PAYMENT | Tax payments | NOT deductible | Income tax cannot reduce income |
| DRAWINGS, PERSONAL WITHDRAWAL, ATM (personal) | Drawings | NOT deductible | Not an expense |

### 3.7 Expense Patterns (Debits) -- Capital Items (Capital Allowances)

| Pattern | Category | Annual Rate | Notes |
|---|---|---|---|
| LAPTOP, COMPUTER, MACBOOK, DESKTOP | Computer hardware | See 5.4 [RESEARCH GAP -- reviewer to confirm exact wear-and-tear rate] | Capital allowance, not expense |
| PRINTER, SCANNER, COPIER | Office equipment | See 5.4 [RESEARCH GAP -- reviewer to confirm] | Capital allowance |
| FURNITURE, DESK, CHAIR | Furniture/fittings | See 5.4 [RESEARCH GAP -- reviewer to confirm] | Capital allowance |
| VEHICLE, CAR (business) | Motor vehicle | See 5.4 [RESEARCH GAP -- reviewer to confirm] | Business % only |

### 3.8 Exclusions, Social Insurance, and Tax Credits (Neither Income nor Expense)

| Pattern | Treatment | Notes |
|---|---|---|
| INTERNAL TRANSFER, OWN ACCOUNT, BETWEEN ACCOUNTS | EXCLUDE | Own-account transfer |
| LOAN REPAYMENT, PERSONAL LOAN | EXCLUDE | Loan principal movement |
| SOCIAL INSURANCE, KOINONIKES ASFALISEIS | Deduction (within 1/5 cap) | Deductible against chargeable income, NOT a business expense |
| GHS, GESY, GENIKO SYSTIMA YGEIAS | Deduction (within 1/5 cap) | Deductible against chargeable income |
| VAT PAYMENT, FPA | EXCLUDE | VAT liability payment, not expense |
| PROVISIONAL TAX, TEMPORARY TAX, PROSORINI FORO | Credit against final liability | Not an expense |

### 3.9 Cyprus Banks -- Statement Format Reference

| Bank | Common Patterns | Notes |
|---|---|---|
| Bank of Cyprus | EMBASMA, METAFORA, CHREOSI, KARTA | PDF/CSV; often Greek + English; date DD/MM/YYYY |
| Hellenic Bank | PAYMENT, TRANSFER, DD, FEE | PDF/CSV; counterparty in description |
| Eurobank Cyprus | TRANSFER, DIRECT DEBIT, CHARGE | PDF; private/business |
| Astrobank / Alpha Bank Cyprus | METAFORA, PLIROMI, SPEXODA | PDF; mixed-language descriptions |
| Revolut Business | PAYMENT, TRANSFER, CARD PAYMENT | CSV; clean counterparty names |
| Wise Business | TRANSFER, CONVERSION, FEE | CSV; multi-currency -- use EUR amounts |

---

## Section 4 -- Worked Examples

### Example 1 -- Client Payment (VAT-registered self-employed)

**Input line:**
`15/03/2025 ; BANK OF CYPRUS EMBASMA ; ANDREOU TRADING LTD ; PLIROMI INV-2025-003 ; +1,190.00 ; EUR`

**Reasoning:**
Client payment for services. Self-employed is VAT-registered (turnover > EUR 15,600), so EUR 1,190 includes 19% VAT. Net = EUR 1,000 (business income). EUR 190 is VAT collected (excluded from income -- it is a liability to the Tax Department).

**Classification:** Self-employment income = EUR 1,000. VAT EUR 190 excluded.

### Example 2 -- SaaS Subscription (Fully Deductible)

**Input line:**
`01/04/2025 ; HELLENIC BANK DD ; ADOBE SYSTEMS IRELAND ; CREATIVE CLOUD APR ; -29.99 ; EUR`

**Reasoning:**
Monthly SaaS subscription, recurring, wholly business. Fully deductible as operating expense. For VAT-registered self-employed, the net amount (excl. recoverable input VAT) is the expense.

**Classification:** Deductible expense = EUR 29.99 (or net of recoverable VAT).

### Example 3 -- Entertainment (Private)

**Input line:**
`22/04/2025 ; BANK OF CYPRUS KARTA ; OPSO RESTAURANT ; CLIENT DINNER ; -85.00 ; EUR`

**Reasoning:**
Client entertainment / meals are private in nature and fail the wholly-and-exclusively test for self-employment. Treat as not deductible. Flag for reviewer if a documented business-entertainment policy exists.

**Classification:** NOT deductible.

### Example 4 -- Social Insurance / GHS Payment (Self-Employed)

**Input line:**
`10/01/2025 ; BANK OF CYPRUS DD ; SOCIAL INSURANCE SERVICES ; Q4 2024 CONTRIBUTION ; -2,490.00 ; EUR`

**Reasoning:**
Self-employed Social Insurance (16.6%) and GHS (4.0%) contributions are deductible against chargeable income (within the combined 1/5 cap -- see 5.6), NOT as a business operating expense. Record separately.

**Classification:** Contribution deduction (subject to 1/5 cap), not a business expense.

### Example 5 -- PIT Computation on Chargeable Income EUR 45,000 (2025)

**Input:** Cyprus resident and domiciled self-employed; chargeable income (after deductions and contributions) = EUR 45,000.

**Reasoning (2025 bands):**
- 0 -- 19,500 at 0% = EUR 0
- 19,501 -- 28,000 at 20%: 8,500 x 20% = EUR 1,700
- 28,001 -- 36,300 at 25%: 8,300 x 25% = EUR 2,075
- 36,301 -- 45,000 at 30%: 8,700 x 30% = EUR 2,610
- **Total PIT = 1,700 + 2,075 + 2,610 = EUR 6,385**

**Classification:** PIT due = EUR 6,385 (before any provisional tax credit).

### Example 6 -- Foreign Pension Income (Special Mode)

**Input line:**
`05/02/2025 ; EUROBANK CYPRUS EMBASMA ; UK PENSION PROVIDER ; MONTHLY PENSION x12 = 18,000/yr ; +1,500.00 ; EUR`

**Reasoning:**
Foreign (overseas) pension income may be taxed at a flat 5% on the amount exceeding EUR 3,420 per year, OR at normal PIT bands (annual election). Source: PwC Worldwide Tax Summaries -- Income determination.
- Flat method: (18,000 - 3,420) x 5% = 14,580 x 5% = **EUR 729**
- Compare against normal bands and elect the lower; election is made each year.

**Classification:** Flag for reviewer -- confirm the annual election. Present both methods.

---

## Section 5 -- Tier 1 Rules (When Data Is Clear)

### 5.1 The Wholly and Exclusively Test

**Legislation:** Income Tax Law (Law 118(I)/2002), as amended.

An expense is deductible only if incurred wholly and exclusively in the production of income. Mixed-use expenses must be apportioned on a reasonable, documented basis.

### 5.2 Residency and Scope of Charge

Source: PwC Worldwide Tax Summaries -- Cyprus.

- **Worldwide vs source:** Cyprus tax residents are taxed on worldwide income; non-residents are taxed only on Cyprus-source income.
- **183-day rule:** Resident if physically present in Cyprus more than 183 days in the tax (calendar) year.
- **60-day rule:** Resident if present >= 60 days AND not tax resident elsewhere / not present > 183 days in any other state, AND carries on business / is employed / holds an office in a Cyprus company at any time in the year, AND maintains a permanent home in Cyprus (owned or rented).

### 5.3 Income Determination

Source: PwC Worldwide Tax Summaries -- Income determination.

| Income type | PIT treatment |
|---|---|
| Employment emoluments | Taxable; PAYE withheld monthly |
| Self-employment profit | Taxable at progressive bands |
| Dividends | EXEMPT from PIT (taxed under SDC if domiciled) |
| Interest | EXEMPT from PIT (taxed under SDC if domiciled) |
| Profit on disposal of securities ("titles") | Fully EXEMPT from PIT |
| Rental income | Taxable: 20% deemed deduction for repairs/maintenance, plus capital allowances and interest; also SDC at 3% on 75% of gross for domiciled residents up to TY2025 (SDC on rent abolished from 2026) |
| Foreign pension | Flat 5% on amount exceeding EUR 3,420/year, OR normal bands (annual election) |

### 5.4 Capital Allowances (Wear and Tear)

Capital items are relieved through wear-and-tear (capital) allowances on a straight-line basis, not as outright deductions.

> [RESEARCH GAP -- reviewer to confirm] The specific wear-and-tear percentages by asset class (e.g. computers, plant and machinery, motor vehicles, furniture, commercial buildings) were not captured in the research dataset and must be taken from the Income Tax Law schedule / Tax Department guidance before any capital-allowance figure is asserted.

### 5.5 Social Insurance and GHS (GESY)

Source: KPMG Cyprus; PwC; Social Insurance Services.

| Contribution | Employee | Employer | Self-employed | Ceiling (2025) |
|---|---|---|---|---|
| Social Insurance | 8.8% | 8.8% | 16.6% | EUR 66,612/year (EUR 5,551/month, EUR 1,281/week) |
| GHS / GESY | 2.65% | 2.90% | 4.00% | EUR 180,000/year total income |

- GHS pensioners 2.65%; GHS other income (rents, dividends, interest) 2.65% -- all within the EUR 180,000 combined cap.
- Self-employed Social Insurance is assessed on **deemed/notional minimum insurable income** set per occupational category (max EUR 66,612); the self-employed may elect to contribute on actual earnings if below the prescribed minimum.

> [RESEARCH GAP -- reviewer to confirm] The specific 2025 weekly minimum insurable amounts per occupational category come from the official Social Insurance Services table (mlsi.gov.cy) and were not captured here. Do not assert a self-employed Social Insurance figure without that table.

### 5.6 Deductions Cap (1/5 Rule)

Source: PwC Worldwide Tax Summaries -- Deductions.

- Combined **life insurance premiums + Social Insurance + GHS + pension/provident fund contributions** are deductible up to a maximum of **1/5 (20%) of chargeable income**.
- Life insurance premium deduction limited to **7% of the insured sum**.
- Pension/provident fund contributions limited to **10% of remuneration**.
- Medical-fund contributions limited to **2% of total income**.

### 5.7 Expatriate Exemptions

Source: PwC; Cyprus Tax Department Circular 4/2024.

| Exemption | Rule | Duration |
|---|---|---|
| 50% exemption (Art. 8(23A)) | 50% of employment income exempt where annual remuneration > EUR 55,000 and the individual was NOT Cyprus tax resident for >= 15 consecutive years before first employment; first employment from 1 Jan 2022 | Up to 17 years |
| 20% exemption (Art. 8(23)) | Lower of 20% of employment income or EUR 8,550/year, for individuals not Cyprus resident in the 3 years before employment | 7 years |

The 50% and 20% exemptions **cannot be combined**. Flag any expat-exemption claim for reviewer to confirm eligibility evidence.

### 5.8 Special Defence Contribution (SDC)

Source: PwC; ATCA; Constantinos Markou & Co.

- Applies ONLY to individuals who are Cyprus tax resident **AND** domiciled. **Non-domiciled residents are exempt.**
- 2025 rates: dividends 17%; interest 17% (reduced effective 3% where total annual income <= EUR 12,000 [RESEARCH GAP -- reviewer to confirm exact mechanics]); rent 3% on 75% of gross (effective 2.25%).
- **Deemed domicile:** treated as domiciled if Cyprus tax resident for at least 17 of the last 20 tax years.
- From 1 Jan 2026: dividend SDC reduced to 5%; SDC on rent abolished.

### 5.9 Non-Deductible Expenses

| Expense | Reason |
|---|---|
| Entertainment / private meals | Not wholly-and-exclusively business |
| Personal living expenses | Not business-related |
| Fines and penalties | Public policy |
| Income tax itself | Tax on income |
| Capital expenditure | Relieved via capital allowances, not as an expense |
| Drawings / personal withdrawals | Not an expense |

### 5.10 VAT Interaction

| Scenario | Income Tax Treatment |
|---|---|
| VAT collected on sales (registered) | NOT income -- exclude from gross |
| Input VAT recovered (registered) | NOT an expense -- exclude from costs |
| Input VAT blocked/non-deductible | IS a cost -- include in the expense |
| Not VAT-registered (below EUR 15,600 threshold) | All VAT paid on purchases is a cost (gross) |
| Foreign VAT (non-reclaimable) | IS a cost -- full gross |

### 5.11 Provisional (Temporary) Tax

Source: PwC; Tax Department.

| Item | Detail |
|---|---|
| Who | Individuals with non-PAYE income (self-employment/other) |
| Instalments | Two equal instalments: 31 July and 31 December of the tax year |
| Final balancing payment | Self-assessment by 31 July of the following year (employees) / 1 August |
| Underestimation surcharge | 10% surcharge if provisional tax declared is less than 75% of the final liability |

### 5.12 Filing Deadlines and Penalties

Source: SPL Audit Cyprus; Gov.cy; PwC.

| Item | Detail |
|---|---|
| TD1/IR1 filing deadline (employees/individuals, TY2025) | 31 July 2026, electronically via TAXISnet (extensions common) |
| Self-employed, turnover > EUR 70,000 (audited accounts) | 31 March of the second year following the tax year |
| TD63 (employer PAYE) | Monthly PAYE remitted by end of the following month |
| Late submission of return | EUR 100 fixed penalty (up to EUR 200 for certain returns) |
| Late payment of tax | 5% additional charge on tax due (one-off); a further 5% may apply if not paid within 2 months of demand in certain cases |
| Interest on overdue tax | Public rate set annually by the Minister of Finance (~5% p.a. in recent years) [RESEARCH GAP -- reviewer to confirm exact 2025/2026 rate] |
| Underestimation of provisional tax | 10% surcharge if declared < 75% of final liability |
| Late Social Insurance / GHS | Additional charge up to 27% depending on delay (1%-3%/month bands), imposed by Social Insurance Services |

---

## Section 6 -- Tier 2 Catalogue (Reviewer Judgement Required)

### 6.1 Home Office Deduction

**Legislation:** Income Tax Law (Law 118(I)/2002).

- Calculate the proportion of the home used for business (dedicated room(s) as a percentage of total rooms or floor area).
- Apply that percentage to rent or mortgage interest, electricity, water, internet, maintenance.
- Must be a genuinely dedicated workspace -- a dual-use room does NOT qualify.

**Conservative default:** 0% deduction until reviewer confirms room arrangement.
**Flag for reviewer:** Confirm room count, floor-area basis, and dedicated use.

### 6.2 Motor Vehicle Business Use

- Only the business-use percentage of fuel, insurance, maintenance, and capital allowance is deductible.
- Client must maintain a mileage log (business vs total).

**Conservative default:** 0% business use until mileage log provided.
**Flag for reviewer:** Confirm business percentage is documented and reasonable, and confirm the applicable wear-and-tear rate (see 5.4 research gap).

### 6.3 Phone / Internet Mixed Use

- Business-use portion only; client must provide a reasonable estimate.

**Conservative default:** 0% deduction until business percentage confirmed.

### 6.4 Non-Dom Status / SDC

- Non-dom status removes SDC on dividends, interest, and rent -- but requires confirmation of domicile of origin and the 17-of-20-year deemed-domicile test.
- **Flag for reviewer:** Do NOT assert non-dom status without evidence; conservative default treats the individual as domiciled (SDC applies).

### 6.5 Expatriate Exemption Eligibility

- The 50% (Art. 8(23A)) and 20% (Art. 8(23)) exemptions have strict prior-non-residence conditions and cannot be combined.
- **Flag for reviewer:** Confirm prior-residence history, remuneration threshold (EUR 55,000 for the 50% exemption), and first-employment date.

### 6.6 Foreign Pension Election

- Flat 5% (over EUR 3,420) vs normal bands -- annual election.
- **Flag for reviewer:** Confirm which election is beneficial and that it is made consistently.

### 6.7 Bad Debt Write-Off

- Deductible only if (1) income was previously declared, (2) all reasonable recovery steps taken, (3) debt is genuinely irrecoverable.
- **Flag for reviewer** to confirm all three conditions.

### 6.8 Self-Employed Insurable Income Category

- Social Insurance is computed on the deemed minimum insurable income for the occupational category unless lower actual earnings are elected.
- **Flag for reviewer:** Confirm the occupational category and the official 2025 minimum from the Social Insurance Services table.

---

## Section 7 -- Excel Working Paper Template

```
CYPRUS INCOME TAX -- TD1/IR1 WORKING PAPER
Tax Year: 2025
Client: ___________________________
Residency: Resident (183-day / 60-day) / Non-resident
Domicile: Domiciled / Non-dom

A. SELF-EMPLOYMENT GROSS INCOME
  A1. Client payments (net of VAT if registered)   ___________
  A2. Platform payouts (Stripe, PayPal, etc.)      ___________
  A3. Other business income                         ___________
  A4. TOTAL gross self-employment income            ___________

B. ALLOWABLE BUSINESS DEDUCTIONS
  B1. Office rent                                   ___________
  B2. Professional insurance                        ___________
  B3. Accountancy / legal fees                      ___________
  B4. Office supplies / stationery                  ___________
  B5. Software subscriptions                        ___________
  B6. Marketing / advertising                       ___________
  B7. Bank charges / payment processing fees        ___________
  B8. Training / CPD / professional subs            ___________
  B9. Travel (flights, hotels, transport)           ___________
  B10. Telecoms (business % of phone/internet)      ___________
  B11. Home office (% of utilities/rent)            ___________
  B12. Vehicle expenses (business %)                ___________
  B13. Other allowable expenses                     ___________
  B14. TOTAL business deductions                    ___________

C. NET PROFIT (A4 - B14)                            ___________

D. OTHER INCOME
  D1. Employment income (PAYE emoluments)           ___________
  D2. Rental income (after 20% deemed deduction)    ___________
  D3. Foreign pension (5% election or bands)        ___________
  D4. TOTAL other taxable income                    ___________
  (Note: dividends, interest, securities gains are PIT-EXEMPT)

E. AGGREGATE INCOME (C + D4)                         ___________

F. CONTRIBUTION / INSURANCE DEDUCTIONS (1/5 CAP)
  F1. Social Insurance (self-employed/employee)     ___________
  F2. GHS / GESY                                    ___________
  F3. Life insurance premiums (<= 7% insured sum)   ___________
  F4. Pension/provident (<= 10% remuneration)       ___________
  F5. Capital allowances (wear & tear)              ___________
  F6. SUBTOTAL contributions+insurance (F1..F4)     ___________
  F7. 1/5 cap = 20% x E                             ___________
  F8. Allowed = MIN(F6, F7)                         ___________
  F9. TOTAL deductions (F8 + F5)                    ___________

G. CHARGEABLE INCOME (E - F9)                        ___________

H. PIT COMPUTATION (pass to deterministic engine; 2025 bands)
  H1. PIT liability                                 ___________
  H2. Less: provisional (temporary) tax paid        ___________
  H3. Less: foreign tax credit (if any)             ___________
  H4. PIT due / refund                              ___________

I. SDC (only if resident AND domiciled)
  I1. Dividends 17%                                 ___________
  I2. Interest 17% (3% if total income <= 12,000)   ___________
  I3. Rent 3% on 75% of gross                       ___________

REVIEWER FLAGS:
  [ ] Residency confirmed (183-day / 60-day)?
  [ ] Domicile / non-dom status confirmed?
  [ ] VAT registration status confirmed?
  [ ] Home office arrangement confirmed?
  [ ] Vehicle business % confirmed with mileage log?
  [ ] Phone/internet business % confirmed?
  [ ] 1/5 deductions cap applied correctly?
  [ ] Capital allowance rates confirmed (RESEARCH GAP)?
  [ ] Self-employed insurable income category confirmed?
  [ ] Expat exemption eligibility confirmed?
  [ ] Correct tax year bands (2025 vs 2026)?
```

---

## Section 8 -- Bank Statement Reading Guide

### Cyprus Bank Statement Formats

| Bank | Format | Key Fields | Notes |
|---|---|---|---|
| Bank of Cyprus | PDF, CSV | Date, Description, Debit, Credit, Balance | Most common; Greek + English; description has counterparty + reference |
| Hellenic Bank | PDF, CSV | Value Date, Description, Amount, Balance | Card transactions show merchant |
| Eurobank Cyprus | PDF | Date, Particulars, Withdrawals, Deposits | Private and business |
| Astrobank | PDF | Date, Description, Amount, Balance | Mixed-language descriptions |
| Revolut Business | CSV | Date, Counterparty, Amount, Currency, Reference | Clean data; multi-currency possible |
| Wise Business | CSV | Date, Description, Amount, Currency, Running Balance | Multi-currency; conversion fees separate line |

### Key Cypriot / Greek Banking Terms

| Term (Greek/transliterated) | English | Classification Hint |
|---|---|---|
| METAFORA / EMBASMA | Transfer / remittance | Check direction for income/expense |
| AMESI CHREOSI / DD | Direct debit | Regular expense (utility, subscription) |
| PAGIA ENTOLI / SO | Standing order | Regular expense (rent, loan) |
| KARTA / CARD | Card payment | Expense -- check merchant |
| KATATHESI / DEPOSIT | Deposit | Potential income |
| SPEXODA / CHARGES | Bank charges | Deductible business expense |
| TOKOS / INTERESSI | Interest | Interest income (PIT-exempt; SDC if domiciled) or bank charge |
| MISTHOS | Salary | Employment income (PAYE) |
| ENOIKIO | Rent | Rental income or office-rent expense |
| FPA | VAT | VAT liability/credit -- exclude from income/expense |

---

## Section 9 -- Onboarding Fallback

If the client provides a bank statement but cannot answer onboarding questions immediately:

1. Classify all transactions using the pattern library (Section 3).
2. Mark all Tier 2 items as "PENDING -- reviewer must confirm".
3. Apply conservative defaults (Section 1).
4. Generate the working paper (Section 7) with clear flags.
5. Present the following questions to the client:

```
ONBOARDING QUESTIONS -- CYPRUS INCOME TAX
1. Residency: were you physically present in Cyprus > 183 days in 2025?
   If not, do you meet the 60-day rule (>=60 days + permanent home + Cyprus business/employment/office + not resident elsewhere)?
2. Domicile: are you Cyprus-domiciled, or do you claim non-dom status?
3. Employment status: employee under PAYE, self-employed, or both?
4. VAT registration: is annual turnover over EUR 15,600 (compulsory registration)?
5. Occupational category (for self-employed Social Insurance minimum insurable income)?
6. Home office: dedicated room or shared space? If dedicated, what % of floor area?
7. Vehicle: do you use a car for business? What % is business use? Do you keep a mileage log?
8. Phone/internet: what % is business use?
9. Social Insurance and GHS: total amounts paid in the tax year?
10. Provisional (temporary) tax: total amount paid in the tax year?
11. Other income: employment, rental, dividends, interest, foreign pension?
12. Any expat exemption (50% Art. 8(23A) or 20% Art. 8(23)) you may qualify for?
```

---

## Section 10 -- Reference Material

### Key Legislation and Authority References

| Topic | Reference |
|---|---|
| Income tax rates and charge | Income Tax Law (Law 118(I)/2002, as amended) |
| Special Defence Contribution | Special Contribution for the Defence Law (Law 117(I)/2002) |
| General Healthcare System (GHS/GESY) | General Healthcare System Law (Law 89(I)/2001) |
| Social Insurance | Social Insurance Law (Law 59(I)/2010) |
| Tax authority | Cyprus Tax Department (Τμήμα Φορολογίας), Ministry of Finance |
| Social insurance authority | Social Insurance Services, Ministry of Labour and Social Insurance |
| Filing portal | TAXISnet (taxisnet.mof.gov.cy); Tax For All (TFA) from TY2026 |

### Key Thresholds (each carries a source)

| Threshold | Value | Source |
|---|---|---|
| PIT tax-free threshold (2025) | EUR 19,500 | PwC Worldwide Tax Summaries |
| PIT tax-free threshold (2026 reform) | EUR 22,000 | PwC; cyprustaxaccounting.com |
| Social Insurance ceiling (2025) | EUR 66,612/year (5,551/month, 1,281/week) | KPMG Cyprus; Social Insurance Services |
| GHS ceiling (2025) | EUR 180,000/year total income | PwC Worldwide Tax Summaries |
| 183-day residency rule | > 183 days in tax year | PwC |
| 60-day residency rule | >= 60 days + permanent home + Cyprus business/employment/office + not resident elsewhere | PwC |
| Deemed domicile (SDC) | Resident 17 of last 20 tax years | PwC |
| VAT compulsory registration | EUR 15,600 turnover (prior 12 months) | PwC / Cyprus VAT context |
| Self-employed audited-accounts / accelerated filing | Turnover > EUR 70,000 | SPL Audit Cyprus |
| National minimum wage (2025) | EUR 1,000/month after 6 months (EUR 900 first 6 months) | Ministry of Labour & Social Insurance; Cyprus Mail |
| National minimum wage (from 1 Jan 2026) | EUR 1,088/month (EUR 979 first 6 months) | Ministry of Labour & Social Insurance; Cyprus Mail |

### 2026 New Deductions (apply only from tax year 2026)

Source: PwC -- Deductions.

| Deduction | Limit |
|---|---|
| Natural-disaster insurance | up to EUR 500 |
| Cultural donations | up to EUR 50,000 |
| Child allowance | EUR 1,000-1,500 per child (doubled for single parents) |
| Home loan interest / rent | up to EUR 2,000 |
| Energy-efficiency / EV | up to EUR 1,000 |

### Cited Sources

- PwC Worldwide Tax Summaries -- Cyprus Individual: Taxes on personal income / Other taxes / Income determination / Deductions (taxsummaries.pwc.com/cyprus/individual)
- KPMG Cyprus -- Amendment to maximum insurable earnings for 2025
- Social Insurance Services / Ministry of Labour and Social Insurance (mlsi.gov.cy) -- insurable earnings, self-employed categories, minimum wage
- Cyprus Mail -- minimum wage increase to EUR 1,088 (Dec 2025)
- SPL Audit Cyprus -- TD1 form, tax year 2025 update
- Republic of Cyprus Gov.cy -- submission of tax declarations
- Constantinos Markou & Co -- Special Defence Contribution for individuals
- Cyprus Tax & Accounting -- 2026 individual tax rates

### Test Suite

**Test 1 -- PIT on EUR 30,000 chargeable income (2025).**
Input: Resident, domiciled, chargeable income EUR 30,000.
Expected: 0 (to 19,500) + 8,500 x 20% (1,700) + 2,000 x 25% (500) = **EUR 2,200**.

**Test 2 -- PIT on EUR 45,000 chargeable income (2025).**
Input: Chargeable income EUR 45,000.
Expected: 1,700 + 2,075 + (8,700 x 30% = 2,610) = **EUR 6,385**.

**Test 3 -- PIT on EUR 70,000 chargeable income (2025).**
Input: Chargeable income EUR 70,000.
Expected: cumulative at 60,000 = 10,885; + 10,000 x 35% (3,500) = **EUR 14,385**.

**Test 4 -- PIT on EUR 50,000 chargeable income (2026 reform).**
Input: Income arising 2026; chargeable income EUR 50,000.
Expected: 0 (to 22,000) + 10,000 x 20% (2,000) + 10,000 x 25% (2,500) + 8,000 x 30% (2,400) = **EUR 6,900**.

**Test 5 -- Employee total deduction at the ceiling.**
Input: Employee earning >= EUR 66,612.
Expected: Social Insurance 8.8% (on EUR 66,612 = EUR 5,861.86) + GHS 2.65% (on emoluments up to EUR 180,000). Combined statutory rate = **11.45%** of the relevant base.

**Test 6 -- Dividends for a non-dom resident.**
Input: Resident but non-domiciled; dividend income EUR 20,000.
Expected: PIT-exempt AND SDC-exempt (non-dom). Tax = **EUR 0**.

**Test 7 -- Foreign pension flat election.**
Input: Foreign pension EUR 18,000/year; elects flat 5%.
Expected: (18,000 - 3,420) x 5% = **EUR 729**.

**Test 8 -- Provisional tax underestimation surcharge.**
Input: Final tax EUR 10,000; provisional declared EUR 6,000 (60% < 75%).
Expected: 10% surcharge applies because the declared provisional tax was below the 75% threshold. Flag for reviewer to confirm exact surcharge base.

---

## PROHIBITIONS

- NEVER apply Cyprus PIT bands without first confirming tax residency
- NEVER assert non-dom status (and SDC exemption) without evidence -- default to domiciled
- NEVER apply 2026 bands/deductions to tax year 2025 income, or vice versa
- NEVER treat dividends or interest as PIT-taxable -- they are PIT-exempt (SDC only, if domiciled)
- NEVER assert a self-employed Social Insurance figure without the official occupational-category minimum table
- NEVER assert a capital-allowance rate -- it is a RESEARCH GAP until confirmed from the Income Tax Law schedule
- NEVER allow entertainment / private expenses as deductions
- NEVER allow income tax itself, fines, or penalties as a deduction
- NEVER include VAT collected on sales in business income for VAT-registered self-employed
- NEVER exceed the 1/5 (20%) cap on combined contributions/insurance deductions
- NEVER use current-year income for provisional tax estimation without the 75% safe-harbour check
- NEVER present tax calculations as definitive -- always label as estimated and pending reviewer sign-off

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
