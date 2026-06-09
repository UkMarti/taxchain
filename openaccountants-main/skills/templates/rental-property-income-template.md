---
name: rental-property-income-template
description: Reusable cross-country template for rental property income taxation. Covers gross rental computation, allowable deductions, capital allowances and depreciation, mortgage interest treatment, furnished vs unfurnished, CGT on disposal, non-resident landlord rules, and rent-a-room relief. Adapt by inserting country-specific rates, depreciation schedules, and interest restriction rules at [COUNTRY-SPECIFIC] placeholders.
version: 1.0
category: template
---

# Rental Property Income Tax Template v1.0

---

## Section 1 — Quick reference

| Field | Value |
|---|---|
| Jurisdiction | [COUNTRY-SPECIFIC] |
| Tax authority | [COUNTRY-SPECIFIC] |
| Primary legislation | [COUNTRY-SPECIFIC] |
| Tax year | [COUNTRY-SPECIFIC] |
| Marginal income tax rates | [COUNTRY-SPECIFIC — rate table] |
| Capital gains rate on property disposal | [COUNTRY-SPECIFIC] |
| Depreciation method | [COUNTRY-SPECIFIC — straight-line, declining balance, pooled] |
| Building depreciation rate | [COUNTRY-SPECIFIC — e.g., 2.5% AU, N/A UK residential] |
| Mortgage interest deduction | [COUNTRY-SPECIFIC — full/restricted/disallowed] |
| Rent-a-room relief threshold | [COUNTRY-SPECIFIC — e.g., £7,500 UK, N/A US] |
| Non-resident withholding rate | [COUNTRY-SPECIFIC — e.g., 20% UK NRL scheme] |
| Filing form | [COUNTRY-SPECIFIC — e.g., Schedule E UK, Schedule E US, Rental Schedule AU] |
| Filing deadline | [COUNTRY-SPECIFIC] |
| Currency | [COUNTRY-SPECIFIC] |

### Conservative defaults

| Ambiguity | Default |
|---|---|
| Unknown whether repair or improvement | Capital (non-deductible against income) |
| Unknown business vs personal use split | 0% business use |
| Unknown residency status of landlord | Resident (no withholding) |
| Unknown furnished status | Unfurnished (no wear-and-tear allowance) |
| Unknown whether interest restricted | Apply restriction (lower deduction) |
| Unknown occupancy period | Apportion based on available evidence |

---

## Step 0 — Onboarding questions

Before computing, you MUST obtain:

1. **Property details** — address, type (residential/commercial), furnished/unfurnished
2. **Ownership structure** — sole owner, joint tenants, tenants in common (percentage), company-owned, trust
3. **Rental income for the period** — gross rents received or receivable (accruals vs cash basis)
4. **Occupancy dates** — periods let, void periods, personal use days
5. **Mortgage details** — outstanding balance, interest paid in period, lender, buy-to-let or residential mortgage
6. **Expenses incurred** — itemised list with receipts/invoices
7. **Capital expenditure** — any improvements, extensions, renovations in the period
8. **Depreciation schedule** — existing asset register if applicable
9. **Residency status** — resident or non-resident landlord
10. **Other rental properties?** — for loss offset rules and portfolio treatment
11. **Prior year losses carried forward?**

---

## Step 1 — Gross rental income computation

```
Gross rental income
  = Rent received (or receivable under accruals basis)
  + Premiums for lease grant (if applicable) [COUNTRY-SPECIFIC formula]
  + Service charges recoverable from tenant
  + Insurance claim proceeds (loss of rent policies)
  + Non-refundable deposits retained
  - Irrecoverable rent (bad debts written off) [COUNTRY-SPECIFIC conditions]
```

### Accounting basis

| Basis | Description | Jurisdictions |
|---|---|---|
| Cash basis | Income when received, expenses when paid | [COUNTRY-SPECIFIC — e.g., UK < £150,000 turnover, US Schedule E] |
| Accruals basis | Income when due, expenses when incurred | [COUNTRY-SPECIFIC — default for larger landlords] |

---

## Step 2 — Allowable deductions (revenue expenses)

| Category | Examples | Deductible? |
|---|---|---|
| Repairs and maintenance | Fixing boiler, repainting, replacing broken window (like-for-like) | YES |
| Improvements | Extension, loft conversion, new bathroom (upgrading) | NO (capital) |
| Insurance | Buildings insurance, landlord liability, rent guarantee | YES |
| Management fees | Letting agent commissions (typically 8-15% of rent) | YES |
| Legal and professional | Lease renewal fees, accountancy, eviction costs | YES (revenue only) |
| Utilities (landlord-paid) | Council tax (void periods), water rates, electricity | YES (if landlord bears cost) |
| Ground rent and service charges | Leasehold property obligations | YES |
| Advertising | Tenant-finding costs, listing fees | YES |
| Travel | Mileage to property for inspections/maintenance | YES (at [COUNTRY-SPECIFIC] rate) |
| Stationery and admin | Phone calls, postage, software (property management) | YES |
| Bad debts | Rent written off as irrecoverable | YES [COUNTRY-SPECIFIC conditions] |
| Finance costs | See Step 3 (may be restricted) | [COUNTRY-SPECIFIC] |

### Repair vs improvement test

| Scenario | Classification |
|---|---|
| Replace broken single-glazed window with single-glazed | Repair (deductible) |
| Replace single-glazed with double-glazed | Improvement (capital) — [COUNTRY-SPECIFIC exceptions] |
| Repaint walls same colour | Repair |
| Replaster then repaint | Repair (restoring to original condition) |
| Add extension | Improvement (capital) |
| Replace entire roof (like-for-like) | Repair |
| Replace kitchen with substantially similar | [COUNTRY-SPECIFIC — UK: repair; US: improvement] |

---

## Step 3 — Mortgage interest deductibility

[COUNTRY-SPECIFIC: Insert applicable interest restriction regime]

| Regime | Treatment | Jurisdictions |
|---|---|---|
| Full deduction against rental income | 100% of interest deducted from rental profit | [COUNTRY-SPECIFIC — e.g., US Schedule E, AU, NZ pre-2024] |
| Tax credit (basic rate relief only) | Interest not deducted from income; 20% tax credit given | [COUNTRY-SPECIFIC — e.g., UK s24 restriction since 2020] |
| Disallowed for residential | No deduction for residential rental interest | [COUNTRY-SPECIFIC — e.g., NZ from 2025 for existing properties] |
| Thin capitalisation rules | Interest limited where debt exceeds [COUNTRY-SPECIFIC] ratio | [COUNTRY-SPECIFIC] |

### UK Section 24 computation (example structure)

```
Property profits (before finance costs)          [A]
LESS: 0% of finance costs deductible            [B] = 0
Adjusted profits                                 [A]
Tax at marginal rate on [A]
LESS: 20% tax credit on total finance costs      [C] = finance costs × 20%
Net tax liability = Tax on [A] - [C]
```

---

## Step 4 — Capital allowances / depreciation

[COUNTRY-SPECIFIC: Insert depreciation schedule applicable to rental property]

### Depreciable assets (furnished lettings)

| Asset class | Rate | Method | Jurisdictions |
|---|---|---|---|
| Building structure (residential) | [COUNTRY-SPECIFIC — 2.5% AU, 0% UK, 3.636% US (27.5yr)] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |
| Building structure (commercial) | [COUNTRY-SPECIFIC — 2.5% AU, N/A UK, 2.564% US (39yr)] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |
| Plant and equipment (fixtures, fittings) | [COUNTRY-SPECIFIC — varies by asset] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |
| Furniture and appliances | [COUNTRY-SPECIFIC — e.g., 5-7 yr US, div 40 AU] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |
| Carpets and curtains | [COUNTRY-SPECIFIC — e.g., 8 yr AU, replacement basis UK] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

### UK replacement of domestic items relief

No wear-and-tear allowance for furnished properties since April 2016. Instead: deduction for cost of replacing furnishings (like-for-like value only; upgrade element is capital).

### Depreciation computation

```
Annual depreciation = (Cost - Residual value) / Useful life    [Straight-line]
Annual depreciation = Written-down value × Rate                 [Declining balance]
```

---

## Step 5 — Furnished vs unfurnished treatment

| Type | Definition | Tax treatment |
|---|---|---|
| Unfurnished | No furniture provided; tenant supplies own | Revenue deductions only; no depreciation on contents |
| Furnished | Substantially furnished (beds, sofas, appliances) | [COUNTRY-SPECIFIC — replacement relief UK, depreciation AU/US] |
| Part-furnished | White goods only (fridge, oven, washing machine) | [COUNTRY-SPECIFIC — generally treated as unfurnished] |
| Holiday let / short-term | Furnished property let as holiday accommodation | [COUNTRY-SPECIFIC — may qualify for business reliefs, e.g., UK FHL] |

---

## Step 6 — Capital gains tax on disposal

### Computation on sale

```
Disposal proceeds (sale price)
  LESS: Incidental costs of disposal (agent fees, legal, marketing)
  LESS: Acquisition cost (original purchase price)
  LESS: Incidental costs of acquisition (stamp duty, legal, survey)
  LESS: Enhancement expenditure (capital improvements during ownership)
  LESS: [COUNTRY-SPECIFIC indexation or inflation relief]
  = Capital gain before reliefs

  LESS: Annual exempt amount [COUNTRY-SPECIFIC — e.g., £3,000 UK 2024/25]
  LESS: Brought-forward capital losses
  = Taxable capital gain

  × [COUNTRY-SPECIFIC CGT rate for residential property]
  = CGT liability
```

### Reporting deadlines for property disposals

| Jurisdiction | Deadline | Form |
|---|---|---|
| UK | 60 days from completion | CGT property disposal return |
| US | Annual (with return) | Schedule D / Form 8949 |
| [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

---

## Step 7 — Non-resident landlord rules

| Aspect | Treatment |
|---|---|
| Withholding obligation | [COUNTRY-SPECIFIC — e.g., 20% UK NRL, 30% US FIRPTA on sale] |
| Who withholds | Letting agent or tenant (if no agent) |
| How to avoid withholding | [COUNTRY-SPECIFIC — e.g., UK HMRC NRL1 application for gross payment] |
| Filing obligation | Non-resident still files self-assessment return |
| Double tax relief | Apply treaty provisions; credit for tax paid in source country |
| Deemed disposal on emigration | [COUNTRY-SPECIFIC — e.g., exit tax provisions] |

---

## Step 8 — Rent-a-room relief and special schemes

| Scheme | Threshold | Effect | Jurisdiction |
|---|---|---|---|
| Rent-a-room | [COUNTRY-SPECIFIC — e.g., £7,500 UK] | Income below threshold tax-free; no deductions claimed | [COUNTRY-SPECIFIC] |
| Micro-entrepreneur | [COUNTRY-SPECIFIC — e.g., €760 FR] | Flat exemption for small rental income | [COUNTRY-SPECIFIC] |
| Principal private residence partial relief | [COUNTRY-SPECIFIC] | CGT relief for period of own occupation | [COUNTRY-SPECIFIC] |
| Negative gearing | [COUNTRY-SPECIFIC — e.g., AU allows losses against other income] | Rental loss offsets salary/other income | [COUNTRY-SPECIFIC] |

---

## Step 9 — Record-keeping requirements

### Mandatory records (retain for [COUNTRY-SPECIFIC — e.g., 5 years UK, 7 years AU, 3 years US])

- Rental agreements / lease contracts
- Bank statements showing rental receipts
- Mortgage statements showing interest paid
- Invoices and receipts for all deductible expenses
- Asset register with depreciation schedules
- Property purchase completion statement
- Capital improvement invoices
- Letting agent statements
- Insurance policies and premium notices
- Utility bills (if landlord-paid)

---

## Prohibitions

- NEVER deduct capital improvements as revenue repairs — the "repair vs improvement" test must be applied
- NEVER claim mortgage interest deductions where the jurisdiction has restricted or disallowed them
- NEVER ignore non-resident withholding obligations — agents and tenants have statutory duties
- NEVER claim depreciation on land value — only the building and fixtures component
- NEVER apply rent-a-room relief AND claim individual expenses — it is one or the other
- NEVER assume void period expenses are automatically deductible — the property must be available for letting
- NEVER ignore the personal use adjustment where the landlord uses the property privately
- NEVER offset rental losses against other income unless the jurisdiction explicitly permits it
- NEVER present outputs as tax advice — direct to a qualified tax professional

---

## Edge Case Registry

| # | Scenario | Correct treatment |
|---|---|---|
| EC-1 | Property damaged by tenant; insurance payout exceeds repair cost | Insurance proceeds are rental income; repair cost is deductible expense |
| EC-2 | Void period between tenancies (property actively marketed) | Expenses during void still deductible if property available for let |
| EC-3 | Landlord lives in property part-year, lets remainder | Apportion expenses by time; CGT principal residence relief for occupation period |
| EC-4 | Joint ownership (unequal shares) | Income/expenses split per beneficial ownership percentage, not 50:50 |
| EC-5 | Tenant pays for improvements (tenant's fixtures) | Not landlord's income or expenditure unless retained at end of lease |
| EC-6 | Short-term lets via Airbnb/VRBO | [COUNTRY-SPECIFIC — may be trading income, different loss rules] |
| EC-7 | Below-market rent to family member | [COUNTRY-SPECIFIC — may restrict loss claims; arm's length rules] |
| EC-8 | Property converted from own home to rental | Cost basis = market value at conversion date [COUNTRY-SPECIFIC] |
| EC-9 | Overseas property (foreign rental income) | Taxable in residence country; credit for foreign tax paid |
| EC-10 | Mixed-use property (commercial + residential) | Apportion by floor area or rental value |

---

## Test Suite

| # | Input | Expected output |
|---|---|---|
| T-1 | Gross rent £12,000; letting agent 10%; repairs £800; insurance £300; mortgage interest £4,000 (UK s24) | Profit = £12,000 - £1,200 - £800 - £300 = £9,700; tax credit = £4,000 × 20% = £800 |
| T-2 | Property purchased £200,000; sold £350,000; legal fees (buy £1,500, sell £2,000); improvements £20,000; AEA £3,000 | Gain = £350,000 - £200,000 - £1,500 - £2,000 - £20,000 - £3,000 = £123,500 |
| T-3 | Rent-a-room income £6,000 (UK threshold £7,500) | Tax-free — below threshold; no return required |
| T-4 | Non-resident landlord; rent £2,000/month; no NRL1 approval | Agent withholds 20% (£400/month); landlord files SA return for credit |
| T-5 | Furnished property; sofa replaced (old cost £600, new cost £1,200, like-for-like value £700) | Deduction = £700 (like-for-like); £500 excess is capital (UK replacement relief) |
| T-6 | Void period 2 months; council tax £300; marketing £150 | Both deductible — property available for let during void |
| T-7 | Joint owners 60/40; gross rent $24,000; total expenses $8,000 | Owner A: income $14,400 less expenses $4,800 = $9,600; Owner B: $9,600 less $3,200 = $6,400 |

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
