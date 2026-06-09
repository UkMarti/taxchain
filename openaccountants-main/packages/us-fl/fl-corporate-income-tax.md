---
jurisdiction: US-FL
tier: 2
name: fl-corporate-income-tax
verified_by: pending
version: 0.1
last_updated: 2025-11-15
---

# Florida Corporate Income Tax (Ch. 220 Fla. Stat.)

Florida Corporate Income/Franchise Tax under Chapter 220, Florida Statutes, applies to C-corporations doing business in Florida at a 5.5% rate on apportioned Florida net income, after a $50,000 exemption. Apportionment uses a three-factor formula with double-weighted sales (property + payroll + 2x sales / 4) and cost-of-performance sourcing for services. Filed on Form F-1120. Florida has no personal income tax, so sole proprietors, partnerships, LLCs taxed as partnerships, and S-corporations generally owe no Florida income tax on operating income. Tax year 2025.

---

## 1. Scope

This skill covers the Florida Corporate Income/Franchise Tax imposed under Chapter 220 of the Florida Statutes for tax year 2025. It addresses:

- Determination of which entities are subject to the tax and which are exempt.
- The 5.5% headline rate, the $50,000 exemption, and the legislative history of rate-adjustment rebates under the "TRIM Act" (s. 220.1105, F.S.).
- The federal-conformity starting point and the principal Florida additions and subtractions in s. 220.13, F.S.
- Apportionment under s. 220.15, F.S., using the three-factor formula with double-weighted sales and cost-of-performance service sourcing.
- Net operating losses under s. 220.13(1)(b)1., F.S.
- Form F-1120 filing, the F-7004 extension, and quarterly estimated payments.
- The principal Florida corporate income tax credits relevant to small and mid-sized C-corporations.
- Common reviewer-level errors, especially the recurring mistake of treating disregarded single-member LLCs as separately taxable in Florida.

This skill does NOT cover:

- Sales and use tax (Ch. 212, F.S.) — see the Florida sales tax skill.
- Documentary stamp tax on real estate transfers (Ch. 201, F.S.) — refer out.
- Reemployment tax (Ch. 443, F.S.) — refer out.
- Insurance premium tax (Ch. 624, F.S.) — refer out.
- Consolidated/combined return elections under s. 220.131, F.S. — refer to a credentialed Florida specialist.
- Bank and savings association franchise tax under s. 220.63, F.S. (which uses the same Ch. 220 mechanics but applies to financial institutions).
- Federal income tax — federal return must already be complete; this skill picks up at federal taxable income.

This skill assumes the user is a sole proprietor, single-member LLC, multi-member LLC, partnership, S-corp, or small C-corp filing a Florida return. It is not designed for large multistate consolidated groups, REITs, regulated investment companies, or insurance companies.

---

## 2. Who is Subject to Florida Corporate Income Tax

### 2.1 Entities subject to the tax

Under s. 220.11, F.S., the tax is imposed on the Florida net income of "every taxpayer" doing business in Florida, deriving income from sources in Florida, or existing with a nexus to Florida sufficient to create a constitutional taxing jurisdiction. "Taxpayer" is defined in s. 220.03(1)(z), F.S. to mean a corporation subject to the tax. The following entities ARE subject to Florida corporate income tax:

- **C-corporations** organized under the laws of Florida or any other jurisdiction, doing business in Florida.
- **LLCs that have elected to be taxed as a C-corporation for federal purposes** (Form 8832 election to be treated as an association taxable as a corporation, or a deemed corporation election triggered by an S-election that is invalid). The LLC files F-1120 in the same manner as any other C-corp.
- **Foreign (out-of-state) C-corporations** with sufficient nexus under s. 220.11, F.S. and Florida's economic nexus jurisprudence. Note that Florida has not enacted a bright-line economic nexus statute for corporate income tax, but physical presence, employees, or property in Florida triggers nexus.
- **Banks and savings associations** under s. 220.63, F.S. (outside the scope of this skill).

### 2.2 Entities NOT subject to the tax

The following entities are NOT subject to Florida corporate income tax under Ch. 220:

- **Sole proprietorships.** Florida has no personal income tax. A self-employed individual operating as a sole proprietor pays no Florida income tax on Schedule C profits, no Florida tax on self-employment earnings, and no Florida tax on wages. The individual files only the federal Form 1040 and Schedule C/SE.
- **Single-member LLCs disregarded for federal tax purposes.** Because the SMLLC is disregarded under Treas. Reg. §301.7701-3 and reports on Schedule C of the owner's Form 1040, the SMLLC has no separate federal return and accordingly no Florida F-1120 filing obligation. Florida follows the federal classification (s. 220.03(1)(e), F.S. defines "corporation" by reference to the federal Internal Revenue Code).
- **Multi-member LLCs taxed as partnerships** for federal purposes. The LLC files federal Form 1065 and issues K-1s. Florida does not impose an entity-level tax on partnerships or pass-throughs. Florida Form F-1065 (partnership information return) is required only if a partner is a corporation subject to Ch. 220 — most small multi-member LLCs with only individual members do not file F-1065.
- **General and limited partnerships** taxed as partnerships federally — same treatment as multi-member LLCs.
- **S-corporations.** Florida does not impose corporate income tax on income that is taxed at the shareholder level federally. Under s. 220.13(2)(k), F.S. and the definition of "taxable income" in s. 220.13(2), F.S., the Florida starting point for an S-corp would be the federal taxable income of the S-corp itself, which for pure S-corp income (passing through on Schedule K-1) is generally zero at the entity level. **However**, an S-corp IS required to file F-1120 if the federal return shows taxable income at the entity level — most commonly:
  - **Built-in gains tax** under IRC §1374 — if the S-corp pays §1374 tax federally, that built-in gain income flows through as Florida taxable income and the S-corp must file F-1120 reporting the federal taxable income that is subject to Florida tax.
  - **LIFO recapture** under IRC §1363(d) on conversion from C to S.
  - **Excess net passive income tax** under IRC §1375.
  - In each case the S-corp files F-1120 reporting only the federally-taxed amount, then claims the $50,000 exemption (which usually wipes out the Florida liability for small S-corps).
- **Sole proprietors using a single-member LLC.** No federal return for the LLC, no Florida return.
- **Disregarded entities** of any kind (e.g., QSubs of an S-corp, grantor trust-owned LLCs).
- **Individuals.** Florida has no personal income tax (Art. VII, s. 5, Florida Constitution prohibits state income tax on natural persons without a constitutional amendment, which has not been enacted).
- **501(c) exempt organizations**, except to the extent they have unrelated business taxable income (UBTI) under IRC §511 — UBTI is subject to Florida corporate income tax under s. 220.13(1)(a), F.S., starting from federal taxable income on Form 990-T.
- **Insurance companies** subject to insurance premium tax (out of scope).

### 2.3 Why Florida is a "no income tax" state for individuals

Florida is one of nine states with no state-level personal income tax. The prohibition is constitutional: Art. VII, s. 5 of the Florida Constitution provides that no tax upon income shall be levied by the state upon natural persons. The Florida corporate income tax, enacted by Ch. 220 in 1971 following a constitutional amendment authorizing it, applies only to corporations and not to individuals, partnerships, or other pass-through entities.

The practical effect for the typical Accora user base is:

- A freelance software developer in Miami pays federal income tax and federal self-employment tax. No Florida tax.
- A two-partner consulting LLC taxed as a partnership in Tampa pays no Florida tax at the entity level. Each partner pays only federal tax.
- An owner-operated S-corp in Orlando pays no Florida tax on the pass-through income; the shareholder reports the K-1 on their federal 1040 and pays no Florida tax.
- A small C-corp in Jacksonville pays 5.5% Florida tax on apportioned Florida net income, after the $50,000 exemption.

---

## 3. Rate and the $50,000 Exemption

### 3.1 Statutory rate

Under s. 220.11(2), F.S., the rate of tax imposed on the Florida net income of corporations is 5.5%. This is the headline rate for tax year 2025 and is the rate in effect after the temporary "TRIM Act" rebate period.

### 3.2 Historical rebate periods (TRIM Act mechanics)

Section 220.1105, F.S. (the "Tax Refund and Rate Reduction Mechanism," sometimes called the TRIM Act) created an automatic rebate-and-rate-reduction mechanism that operated for tax years 2018 through 2021. When net corporate income tax collections exceeded statutory adjusted-revenue baselines, the Department of Revenue was required to:

1. Issue refunds to taxpayers for the prior year's overpayment.
2. Reduce the rate for the following tax year by a downward adjustment.

This mechanism produced the following effective rates:

| Tax year | Effective rate | Source |
|---|---|---|
| 2018 | 4.458% | TIP 19C01-04, FL DOR |
| 2019 | 4.458% | TIP 20C01-01, FL DOR |
| 2020 | 3.535% | TIP 21C01-01, FL DOR |
| 2021 | 3.535% | TIP 22C01-01, FL DOR (retroactive adjustment) |
| 2022 | 5.5% (rate restored) | TIP 22C01-02, FL DOR |
| 2023 | 5.5% | s. 220.11, F.S. |
| 2024 | 5.5% | s. 220.11, F.S. |
| 2025 | 5.5% | s. 220.11, F.S. |

The TRIM Act mechanism in s. 220.1105 expired on its own terms after the 2021 fiscal year refund. Beginning with tax year 2022, the rate has been the statutory 5.5% with no further automatic rebates.

For 2025, use 5.5%. Do not attempt to apply any TRIM Act reduction. If preparing an amended return for a 2020 or 2021 tax year, verify the correct effective rate from the FL DOR Tax Information Publication for that year.

### 3.3 The $50,000 exemption

Section 220.14, F.S. provides an exemption of $50,000 from Florida net income before applying the 5.5% rate. This is a true exemption (a deduction from the tax base), not a credit. The mechanics are:

1. Start with federal taxable income from Form 1120 Line 30 (or Form 1120-S Line 21 for S-corps with federally-taxed income).
2. Apply Florida additions and subtractions per s. 220.13, F.S. to arrive at Florida adjusted federal income.
3. Apportion using the three-factor formula (s. 220.15, F.S.).
4. Add back any nonbusiness income allocated to Florida under s. 220.16, F.S.
5. Subtract the $50,000 exemption (s. 220.14, F.S.).
6. Multiply the result by 5.5% to compute the gross Florida tax.
7. Subtract credits.

If apportioned Florida net income is less than $50,000, no Florida tax is due (but F-1120 may still need to be filed — see Section 7).

The exemption is pro-rated for short-period returns under s. 220.14(2), F.S. — multiply $50,000 by (number of days in the short period / 365).

For consolidated returns under s. 220.131, F.S., only one $50,000 exemption is available for the entire consolidated group (s. 220.14(3), F.S.).

### 3.4 Alternative minimum tax — Florida AMT

Florida historically imposed an alternative minimum tax under s. 220.11(3), F.S. tied to the federal corporate AMT. With the federal repeal of the corporate AMT for tax years beginning after December 31, 2017 (TCJA), Florida's AMT effectively went dormant. The federal Corporate Alternative Minimum Tax (CAMT) enacted by the Inflation Reduction Act of 2022 applies to "applicable corporations" with three-year average AFSI of $1 billion or more — this is far outside the scope of small-business Florida filings. For 2025, treat Florida AMT as non-applicable for Accora's typical small-business taxpayers.

---

## 4. Federal Conformity and Florida Modifications (s. 220.13)

### 4.1 Starting point

Florida is a "rolling conformity" state for the federal Internal Revenue Code — s. 220.03(2), F.S. ties Florida to the IRC as in effect on January 1 of each year, with the conformity date updated annually by the Legislature. For tax year 2025, the most recent conformity update applies (verify the current piggyback date in the annual Form F-1120 instructions).

The Florida tax base starts at federal taxable income — Line 30 of Form 1120, before the federal NOL deduction and before special deductions.

### 4.2 Florida additions (s. 220.13(1)(a), F.S.)

The principal addbacks for a small C-corp are:

- **Federal NOL deduction.** Florida disallows the federal NOL deduction (because Florida has its own NOL system — see Section 6). Add back the federal NOL claimed on Line 29a of Form 1120.
- **Federal income tax refund** if previously deducted (rare for corporations).
- **Florida intangible tax** (now repealed but included for historical adjustments).
- **State income taxes** of states other than Florida deducted on the federal return (s. 220.13(1)(a)1., F.S.).
- **Depreciation differences** under s. 220.13(1)(e), F.S. — Florida decouples from federal bonus depreciation under IRC §168(k) and from the IRC §179 expensing limits for certain periods. For 2025, verify the current addback rules in the Form F-1120 instructions. Florida historically required addback of 100% of federal bonus depreciation, then allowed it back over seven years.
- **Federal §965 deemed repatriation income** addbacks (transition tax) — largely historical now.
- **Interest excluded from federal taxable income** under IRC §103 (state and municipal bond interest, except Florida bonds).

### 4.3 Florida subtractions (s. 220.13(1)(b), F.S.)

- **Florida NOL carryforward** (s. 220.13(1)(b)1., F.S.) — see Section 6.
- **Net operating loss for the year** allowed federally but limited federally — Florida applies its own NOL rules.
- **Florida bonus depreciation addback reversal** — the seven-year amortization of the addback amount.
- **Interest on US Treasury obligations** to the extent included in federal taxable income.
- **Salary and wage adjustment for the federal Work Opportunity Tax Credit** — Florida allows a deduction equal to the salary/wages disallowed federally under IRC §280C.
- **Subpart F income exclusions** for foreign source income to the extent permitted under s. 220.13(1)(b)2., F.S.
- **GILTI subtraction** — Florida treats GILTI (IRC §951A) as subpart F income and follows federal treatment with a partial subtraction; verify current rules in the F-1120 instructions.
- **Foreign-source dividends** under s. 220.13(1)(b)2., F.S. that are not eligible for the federal dividends-received deduction.

### 4.4 Adjusted federal income

After additions and subtractions, you have "adjusted federal income" — the Florida pre-apportionment base.

---

## 5. Apportionment (s. 220.15, F.S.)

### 5.1 The three-factor formula with double-weighted sales

Florida apportions business income using a modified three-factor formula under s. 220.15, F.S. The formula is:

```
Apportionment % = (Property factor + Payroll factor + 2 x Sales factor) / 4
```

Each factor is the Florida-numerator divided by the everywhere-denominator. Sales is weighted 2x (i.e., counts twice), so the total denominator is 4.

Florida is one of a shrinking number of states still using a property-and-payroll-inclusive apportionment formula. Most states have moved to single-sales-factor apportionment over the past two decades. Florida's continued use of three-factor double-weighted-sales is a quirk that catches out-of-state preparers.

### 5.2 The property factor (s. 220.15(3), F.S.)

The property factor is the average value of the corporation's real and tangible personal property owned or rented in Florida, divided by the average value of all such property everywhere.

- **Owned property** is valued at original cost (not net book value).
- **Rented property** is capitalized at 8 times the annual rent.
- **Inventory** is included at its tax-basis value.
- **Idle property** that has been actively used in business but is temporarily not in use is included.
- **Construction in progress** is generally excluded until placed in service.

### 5.3 The payroll factor (s. 220.15(4), F.S.)

The payroll factor is total compensation paid in Florida divided by total compensation paid everywhere. Compensation is sourced to Florida if:

1. The services are performed entirely in Florida; OR
2. The services are performed both in and outside Florida, but the services performed outside are incidental to the services in Florida; OR
3. Some services are performed in Florida and the employee's base of operations is in Florida; OR
4. The employee has no base of operations in any state where services are performed, but the place from which services are directed/controlled is in Florida; OR
5. The base of operations is in no state where any services are performed, and the employee is a Florida resident.

This is the standard UDITPA-derived "base of operations" cascade. Independent contractor payments are NOT included in the payroll factor.

### 5.4 The sales factor (s. 220.15(5), F.S.) — cost-of-performance sourcing for services

The sales factor is total Florida sales divided by total sales everywhere. This is where Florida diverges most sharply from modern state practice.

**For tangible personal property**, sales are sourced to Florida if the property is delivered or shipped to a purchaser in Florida, regardless of the FOB point (destination sourcing).

**For services and intangibles**, Florida uses **cost-of-performance sourcing** under s. 220.15(5)(b), F.S. and Rule 12C-1.0155, F.A.C.:

- A service is sourced to Florida if the **income-producing activity** is performed entirely in Florida; OR
- If the income-producing activity is performed in more than one state, the service is sourced to the state where the **greater proportion of the income-producing activity is performed, based on costs of performance**.

This is the "all-or-nothing" cost-of-performance rule (as opposed to "pro-rata cost-of-performance"). The entire receipt goes to one state — whichever state has the highest cost of performance. There is no market-based sourcing in Florida for services.

**This matters enormously for software developers, consultants, and other service businesses.** A Florida-based C-corp that performs services entirely in Florida sources 100% of its service receipts to Florida, even if all customers are out of state. Conversely, a non-Florida C-corp that has Florida customers but performs the work elsewhere sources 0% to Florida.

Compare this to California (market-based sourcing — service receipts sourced to the customer's location), New York (market-based for most services since 2015), or Massachusetts (market-based since 2014). The contrast can produce dramatic differences in apportionment percentages.

Florida has resisted the trend toward market-based sourcing for over a decade despite repeated legislative proposals (e.g., HB 7129 in 2019, HB 7079 in 2021 — both failed). For tax year 2025, the rule remains cost-of-performance.

### 5.5 Special apportionment rules

- **Transportation services** (railroads, motor carriers, airlines) — special apportionment formulas under s. 220.151, F.S.
- **Financial organizations** (banks, lenders) — special formula under s. 220.15(6), F.S.
- **Insurance companies** — separate framework (out of scope).
- **Telecommunications** — special rules.
- **Petitions for alternative apportionment** under s. 220.152, F.S. — taxpayer or DOR can petition for an alternative method if the standard formula does not fairly represent the extent of the taxpayer's Florida business activity. High burden of proof. Refer out for any alternative apportionment petition.

### 5.6 Nonbusiness income (s. 220.16, F.S.)

Income that is not "business income" (i.e., income that is not from transactions and activity in the regular course of the taxpayer's trade or business) is **allocated** rather than apportioned. Common items:

- Capital gains/losses on nonbusiness assets — allocated to the commercial domicile.
- Royalties from intangibles — allocated based on the location of use.
- Dividends — allocated to the commercial domicile.
- Interest on nonbusiness assets — allocated to the commercial domicile.
- Rents from nonbusiness real property — allocated to the situs.

For most operating C-corps, all income is business income and is fully apportioned. The business/nonbusiness distinction matters mostly for holding companies and investment-heavy entities.

### 5.7 Apportionable income vs. Florida net income — order of operations

The correct order under s. 220.13 through s. 220.16 is:

1. Federal taxable income (Form 1120 Line 30).
2. Apply Florida additions and subtractions per s. 220.13 → "adjusted federal income."
3. Subtract nonbusiness income (which will be allocated separately) → "apportionable income."
4. Apply the three-factor double-weighted sales apportionment formula → Florida apportioned income.
5. Add Florida-allocated nonbusiness income → Florida net income.
6. Subtract the $50,000 exemption (s. 220.14).
7. Multiply by 5.5% → gross Florida tax.
8. Subtract credits.

---

## 6. Net Operating Losses (s. 220.13(1)(b)1., F.S.)

### 6.1 Post-2017 NOLs (Florida-mirrors-federal framework)

For NOLs arising in tax years beginning after December 31, 2017, Florida follows the post-TCJA federal framework:

- **80% of taxable income limitation.** The Florida NOL deduction is limited to 80% of Florida taxable income (before the NOL deduction) for the carryforward year. This mirrors IRC §172(a)(2) as amended by TCJA.
- **No carryback.** Florida does not permit NOL carrybacks (consistent with federal post-TCJA treatment).
- **Indefinite carryforward.** The unused NOL carries forward indefinitely until exhausted (no 20-year limit).

### 6.2 Pre-2018 NOLs (grandfathered)

NOLs generated in tax years beginning before January 1, 2018 retain their pre-TCJA characteristics:

- 20-year carryforward limit (so 2017 NOLs expire after 2037).
- No 80% limitation — they can offset 100% of Florida taxable income.
- No carryback (Florida never allowed NOL carrybacks).

The 80% limitation applies separately to pre- and post-2018 NOLs — pre-2018 NOLs are deducted first, without limitation; then post-2018 NOLs are deducted, subject to 80%.

### 6.3 Computation mechanics

The Florida NOL is computed on a Florida-only basis. It is NOT the federal NOL. To compute the Florida NOL:

1. Start with adjusted federal income for the loss year.
2. Apply apportionment.
3. The Florida-apportioned loss (after the $50,000 exemption is NOT subtracted in a loss year — the exemption is for income years only) is the Florida NOL.

Track each year's NOL separately on the F-1120 Schedule IV. The DOR requires year-by-year carryforward tracking.

### 6.4 Ownership change limitations

Florida conforms to IRC §382 limitations on NOL utilization following an ownership change. If a federal §382 limit applies, the same limit applies for Florida purposes.

### 6.5 NOL and S-corp conversions

If a C-corp with NOL carryforwards elects S-corp status, the C-corp NOLs are suspended at the entity level. They can be used to offset any built-in gains tax or other federally-taxed C-corp items that flow into Florida F-1120 (very rare). They cannot pass through to the shareholders.

---

## 7. Filing — Form F-1120

### 7.1 Who must file

Every corporation subject to Florida corporate income tax must file Form F-1120, even if no tax is due. Filing is required if:

- The corporation is doing business, earning income, or existing in Florida.
- The corporation files a federal Form 1120, 1120-S (with federally-taxed items), 1120-F, or similar.

**A corporation with no Florida nexus does not file.** A pure pass-through (partnership, S-corp without federally-taxed items, disregarded entity) does not file.

### 7.2 Due date

Form F-1120 is due on or before **the first day of the fifth month following the close of the tax year**, OR **the 15th day after the federal return due date**, whichever is later.

For calendar-year C-corps:
- Federal Form 1120 is due **April 15, 2026** for tax year 2025.
- Florida F-1120 is due **May 1, 2026** (1st day of the 5th month after Dec 31, 2025).

Note: this is **one day after the comparable federal extension consideration deadline**. The Florida due date is genuinely later than the federal due date, not the same.

For fiscal-year filers:
- Florida F-1120 is due on the 1st day of the 5th month after the close of the fiscal year (e.g., June 1 for a fiscal year ending January 31).

### 7.3 Extension — Form F-7004

Form F-7004 grants a six-month extension of time to file (not to pay). To obtain a valid extension:

1. File F-7004 by the original Florida due date.
2. Pay **at least the tentative tax due** with the F-7004 (estimated total Florida tax liability minus credits and prior payments).

Failure to pay 100% of the tentative tax with the extension renders the extension **invalid**, exposing the taxpayer to failure-to-file penalties from the original due date. This is a common trap — Florida is stricter on extension validity than the IRS.

The extension period is six months from the original due date. For a calendar-year filer with an original due date of May 1, 2026, the extended due date is **November 1, 2026**.

### 7.4 Electronic filing

Corporations with $20,000 or more in Florida corporate income tax liability in the prior state fiscal year (July 1 – June 30) MUST file F-1120 and pay electronically. Below that threshold, e-filing is voluntary but encouraged.

E-filing is via:
- Modernized e-File (MeF) through approved software providers.
- Direct via FL DOR's online portal (limited).

### 7.5 Penalties

- **Failure to file**: 10% of the tax due per month or fraction thereof, up to 50%.
- **Failure to pay**: 10% of the unpaid tax. Statutory floor of $10 even if the percentage is less.
- **Interest**: variable rate, adjusted semiannually by the FL DOR. Currently around 9% per annum (verify the current rate from TIP issued each January and July).
- **Fraud**: 100% penalty under s. 220.803, F.S.
- **Negligence**: 25% under s. 220.803.

---

## 8. Estimated Tax (s. 220.222 and 220.34, F.S.)

### 8.1 When estimated payments are required

A corporation must make quarterly estimated payments if its estimated Florida tax liability for the year exceeds **$2,500**. Below that threshold, no estimated payments are required and the full liability can be paid with the F-1120.

### 8.2 Installment due dates

For a calendar-year filer, the four installment due dates are:

| Installment | Due date | % of total |
|---|---|---|
| 1st | May 31 (last day of 5th month of tax year) | 25% |
| 2nd | June 30 (last day of 6th month) | 25% |
| 3rd | September 30 (last day of 9th month) | 25% |
| 4th | January 31 of following year (last day of tax year + 1 month) | 25% |

For fiscal-year filers, substitute the corresponding months of the fiscal year.

### 8.3 Form

Estimated payments are made with **Form F-1120ES** (or electronically). Each installment is generally 25% of the estimated full-year tax, though the annualized-income method is permitted for taxpayers with seasonal income.

### 8.4 Underpayment penalty

Underpayment of estimated tax is penalized under s. 220.34(2), F.S. The penalty is computed on Form F-2220. Safe harbors include:

- Pay 100% of prior year's actual Florida tax (only if prior year was a full 12 months and Florida tax was greater than zero).
- Pay 90% of current year's actual Florida tax through estimated payments.
- Annualized income installment method for irregular-income taxpayers.

The penalty rate equals the statutory interest rate (currently ~9%).

---

## 9. Credits

Florida offers a modest set of corporate income tax credits, most of which are narrow and not applicable to typical small C-corps. The principal credits are:

### 9.1 Capital Investment Tax Credit (s. 220.191, F.S.)

For corporations making a "qualifying project" investment in Florida of at least $25 million in certain target industries (clean energy, biomedical, financial services, information technology, silicon technology, transportation equipment manufacturing). Up to a 100% offset of the Florida corporate income tax attributable to the project, over up to 20 years.

Application to **Enterprise Florida** is required before the project begins. This is a high-bar credit aimed at large corporate relocations.

### 9.2 Research and Development Tax Credit (s. 220.196, F.S.)

A credit equal to **10% of qualified research expenses** in Florida that exceed the taxpayer's average Florida QRE for the prior four years. The credit:

- Mirrors the federal IRC §41 R&D credit definition of qualified research.
- Requires the taxpayer to be in one of the **target industries** (manufacturing, life sciences, information technology, aviation/aerospace, homeland security/defense, cloud information technology, marine sciences, materials science, nanotechnology).
- Requires an **allocation** from the FL DOR — total annual credit is capped at $9 million statewide, allocated by application on a first-come basis each year.
- The application window opens March 20 of the year following the tax year.
- Unused credit carries forward 5 years.

### 9.3 Voluntary Cleanup Tax Credit (s. 220.184, F.S.)

A credit for voluntary cleanup of brownfield sites and dry-cleaning solvent contamination. 50% of cleanup costs, capped at $500,000 per site per year. Statewide annual cap of $5 million. Application to FL DEP required. Useful for real estate developers and industrial users.

### 9.4 Florida Tax Credit Scholarship Program (s. 220.1875, F.S.)

A dollar-for-dollar credit (up to 100% of Florida corporate income tax) for contributions to **scholarship-funding organizations** (SFOs) that fund private school scholarships for low-income students.

- The corporation makes a contribution to a state-approved SFO (Step Up For Students is by far the largest).
- The credit equals the contribution amount, up to the corporation's Florida tax liability.
- Application to FL DOR via the e-services portal is required **before** the contribution.
- Unused credit carries forward 5 years (10 years for excess contributions).
- The same contribution **cannot** be deducted as a charitable deduction federally if claimed as a Florida credit (Reg. §1.170A-1(h)(3)).

This is the most-used Florida credit for small and mid-sized C-corps because it converts what would be Florida tax into a directed contribution at no net cost.

### 9.5 Other credits (brief list)

- Community Contribution Tax Credit (s. 220.183) — 50% of contributions to approved community development projects, capped statewide.
- Hazardous Waste Facility Tax Credit (s. 220.1845).
- Renewable Energy Production Credit (s. 220.193) — closed to new applicants.
- Strong Families Tax Credit (s. 220.1876) — contributions to eligible charitable organizations serving families.
- Florida New Markets Tax Credit (s. 220.185).
- Experiential Learning Tax Credit (s. 220.198) — for businesses hosting student internships.
- Internship Tax Credit Program (s. 220.198).
- Child Care Tax Credit (s. 220.1873).

All Florida credits require contemporaneous documentation. Most require **pre-approval** by the DOR or a partner agency. Refer to F-1120 Schedule V for the credit summary.

### 9.6 Credit ordering

Credits are applied in the order specified in s. 220.02(8), F.S. Generally, credits without carryforward are taken first, followed by carryforward credits. The Florida Tax Credit Scholarship credit has a 5-year carryforward and is taken after non-carryforward credits.

---

## 10. No Franchise Tax / No Separate Privilege Tax

Florida does NOT impose:

- A general corporate franchise tax (separate from the income tax).
- A net worth tax.
- A privilege tax for the privilege of doing business as a corporation.
- A "minimum" corporate income tax (Florida's tax is purely income-based — if Florida apportioned income is below $50,000, no tax is due).
- A gross receipts tax on corporations.
- A capital stock tax.

The Florida corporate income tax IS labeled as the "corporate income/franchise tax" in s. 220.11, F.S., but functionally it is an income tax. There is no separate franchise component. This contrasts with, for example, Texas (franchise tax / margin tax separate from federal income tax), Delaware (annual franchise tax based on authorized shares plus a separate corporate income tax), and California ($800 minimum franchise tax plus 8.84% corporate income tax).

The only annual maintenance fee paid to the state for a Florida corporation is the **annual report fee** to the **Florida Department of State, Division of Corporations** ($150 for for-profit corporations, $138.75 for LLCs). This is filed via Sunbiz.org by May 1 each year. It is NOT a tax — it is a corporate maintenance fee and is not addressed by this skill.

---

## 11. Documentary Stamp Tax — Refer Out

Florida documentary stamp tax (Ch. 201, F.S.) is a separate tax on:

- Deeds and other instruments transferring interests in Florida real estate (70 cents per $100 of consideration, except 60 cents per $100 in Miami-Dade County for single-family residences; surtax of 45 cents per $100 in Miami-Dade for other deeds).
- Promissory notes and other written obligations to pay money (35 cents per $100 of face value).
- Mortgages, deeds of trust, security agreements (35 cents per $100 of indebtedness).

Doc stamp is collected at the county recorder's office (for real estate) or paid via Form DR-225 (for notes not recorded). It is NOT a corporate income tax matter and is outside the scope of this skill. Refer the client to a Florida real estate attorney or title agent.

---

## 12. Common Errors

### 12.1 Treating a disregarded SMLLC as subject to Florida CIT

This is by far the most frequent error among out-of-state preparers and software-driven services. A Florida single-member LLC that has NOT elected to be taxed as a corporation:

- Files no federal return of its own (income/expense flows to Schedule C of the owner's Form 1040).
- Files NO Florida F-1120.
- Owes NO Florida income tax.

The LLC's only Florida obligations are:
- Annual report with the FL Division of Corporations (Sunbiz) by May 1.
- Sales tax registration if making taxable sales (separate analysis).
- Reemployment tax if employer (separate analysis).

If you see a Florida SMLLC owner asking "do I file F-1120?", the answer is **no**, unless they affirmatively elected C-corp treatment via Form 8832.

### 12.2 Filing F-1120 for an S-corp with pure pass-through income

An S-corp with only ordinary pass-through income (federal Form 1120-S, no built-in gains, no LIFO recapture, no §1375 tax) is NOT required to file Florida F-1120 because it has zero federal taxable income at the entity level. Some preparers reflexively file a zero-tax F-1120; this is unnecessary and clogs the DOR's records. Do not file unless required.

### 12.3 Using market-based sourcing for services

Florida uses COST-OF-PERFORMANCE sourcing. A preparer trained on California, New York, or Massachusetts (all market-based) will instinctively source receipts to the customer location. This produces a wrong Florida apportionment. Always read s. 220.15(5)(b), F.S. and Rule 12C-1.0155, F.A.C., and source based on where the income-producing activity is performed.

### 12.4 Using single-sales-factor apportionment

Some preparers, unfamiliar with Florida, default to single-sales-factor (which is now the majority state approach). Florida is three-factor with double-weighted sales (P + Pa + 2S / 4). Always verify the formula.

### 12.5 Treating the $50,000 exemption as a credit

The $50,000 is a deduction from Florida net income, not a credit against tax. It saves 5.5% × $50,000 = $2,750 of Florida tax for a profitable corporation, not $50,000.

### 12.6 Forgetting to add back the federal NOL

Florida disallows the federal NOL and substitutes its own Florida NOL. Always add back the federal NOL on Schedule II and compute Florida NOL separately on Schedule IV.

### 12.7 Forgetting the Florida bonus depreciation addback

Florida decouples from IRC §168(k) bonus depreciation. The federal bonus depreciation must be added back and depreciated over seven years for Florida purposes. With federal bonus phasing back up to 100% under OBBBA for property placed in service after January 19, 2025, this addback is again material for 2025 returns.

### 12.8 Missing the F-7004 tentative-tax payment

A Florida extension requires payment of tentative tax. An extension filed without payment is invalid, and the corporation is treated as a late filer from the original due date. This is harsher than the federal rule (where an extension without payment is still a valid extension to file, just not to pay).

### 12.9 Using the wrong rate for 2020 or 2021 amended returns

If amending a 2020 or 2021 return, the effective rate was 3.535% (TRIM Act). Do not use 5.5%. For 2022 and forward, use 5.5%.

### 12.10 Filing F-1120 instead of F-1120A

Florida allows small corporations meeting all of the following to file **Form F-1120A** (short form):
- Florida net income < $45,000.
- Sales, property, and payroll factors are 100% Florida (no apportionment).
- No federal NOL carryforward.
- No federal alternative minimum tax.
- Not part of a controlled group.
- Not a homeowners' or condominium association.
- Not claiming any credits other than estimated payments.

F-1120A is a one-page return. Eligibility is narrow but useful for small Florida-only C-corps.

### 12.11 Confusing "doing business in Florida" with "incorporated in Florida"

Nexus is based on where the corporation does business, not where it is incorporated. A Delaware C-corp with all operations in Florida files F-1120. A Florida-incorporated C-corp with all operations in Texas owes no Florida tax (unless it has Florida nexus through some residual activity).

---

## 13. Worked Examples

### 13.1 Example 1 — Florida-only C-corp software development company

**Facts.** SunCode Inc., a Florida C-corporation, develops custom software for clients nationwide from its sole office in Tampa. All employees (10 W-2 developers, 1 owner-CEO) work from the Tampa office. All R&D, project management, and customer support is performed in Florida. Customers are located in 35 states; about 12% of revenue comes from Florida customers, 88% from out-of-state customers.

For tax year 2025:
- Federal taxable income (Form 1120 Line 30): $480,000
- Federal NOL deduction included: $0
- Federal bonus depreciation claimed: $30,000 (new server equipment placed in service in 2025)
- Florida bonus depreciation addback for prior years: $5,000 (1/7 of prior addbacks reversing)

**Step 1 — Federal taxable income.** $480,000.

**Step 2 — Florida additions.** Add back federal bonus depreciation: +$30,000.

**Step 3 — Florida subtractions.** Reverse prior bonus depreciation addback: ($5,000).

**Step 4 — Adjusted federal income.** $480,000 + $30,000 - $5,000 = $505,000.

**Step 5 — Apportionment.**

*Property factor.* All property is in Tampa. Numerator = $50,000 average cost. Denominator = $50,000. Property factor = 100%.

*Payroll factor.* All employees in Tampa. Numerator = $1,200,000. Denominator = $1,200,000. Payroll factor = 100%.

*Sales factor.* All services performed in Florida. Under cost-of-performance, 100% of service receipts are sourced to Florida — even though 88% of customers are out of state. Numerator = $3,500,000. Denominator = $3,500,000. Sales factor = 100%.

*Apportionment %.* (100% + 100% + 2 × 100%) / 4 = 400% / 4 = 100%.

**Step 6 — Florida apportioned income.** $505,000 × 100% = $505,000.

**Step 7 — $50,000 exemption.** $505,000 - $50,000 = $455,000.

**Step 8 — Florida tax at 5.5%.** $455,000 × 5.5% = **$25,025**.

**Step 9 — Estimated payments.** Since $25,025 > $2,500, quarterly estimated payments required for 2026.

**Filing.** Form F-1120 due May 1, 2026 (calendar year 2025).

**Commentary.** Despite serving customers in 35 states, SunCode is 100% Florida-apportioned because Florida uses cost-of-performance and all the work is done in Tampa. If the same company were headquartered in California (market-based sourcing), only 12% of receipts would be California-sourced. This is the **cost-of-performance trap** for Florida service businesses serving national customers — it concentrates tax in Florida.

### 13.2 Example 2 — Out-of-state C-corp with Florida customers but no Florida operations

**Facts.** TechFlow Inc., a Delaware C-corporation headquartered in Boston, Massachusetts, provides cloud-based SaaS to customers nationwide. All servers, employees, and operations are in Massachusetts. Florida customers generate $800,000 of annual revenue out of $10,000,000 total revenue. TechFlow has no Florida employees, no Florida property, and no Florida office.

For tax year 2025:
- Federal taxable income: $2,000,000.

**Nexus analysis.** TechFlow has no physical presence in Florida. Florida has not enacted a bright-line economic nexus statute for corporate income tax (unlike for sales tax). Whether TechFlow has Florida CIT nexus depends on the specific facts and constitutional limits. Conservative position: if TechFlow has substantial Florida customers, P.L. 86-272 might not protect it because P.L. 86-272 only protects solicitation of orders for **tangible personal property**, not services or SaaS. However, without physical presence, the case for Florida nexus is weak.

**Decision.** TechFlow likely has no Florida CIT filing obligation. **No F-1120 filed.**

**Counterfactual.** If TechFlow had a single Florida employee (a remote sales rep), nexus would clearly exist, and TechFlow would file F-1120.

*If TechFlow were subject to Florida CIT:*

*Sales factor (cost-of-performance).* All service activity is performed in Massachusetts. Florida sales numerator = $0 (none of the income-producing activity is in Florida). Florida sales factor = 0%.

*Property factor.* 0% (no Florida property).
*Payroll factor.* 0% (no Florida payroll).
*Apportionment %.* (0 + 0 + 2 × 0) / 4 = 0%.

*Florida apportioned income.* $2,000,000 × 0% = $0.
*Florida tax.* $0.

Even if a return is filed defensively, the tax would be $0. This is the inverse of Example 1 — under cost-of-performance, out-of-state service providers with Florida customers owe nothing.

**Commentary.** Florida's cost-of-performance sourcing rewards out-of-state service providers and disadvantages in-state ones, relative to a market-based regime. Tax planners with mobility have, over the years, used this asymmetry to locate service operations outside Florida while serving Florida customers — but the corollary is that in-state C-corps face high Florida concentration.

### 13.3 Example 3 — Florida SMLLC with no C-corp election

**Facts.** Maria Santos operates "Coral Reef Consulting LLC," a Florida single-member LLC formed in 2023. The LLC has not filed Form 8832 to elect corporate treatment. Maria is the sole owner and reports all LLC income on her Schedule C. For 2025:

- Schedule C net profit: $145,000.
- Self-employment tax (Schedule SE): $20,486.
- Federal income tax (single, no dependents, standard deduction): approximately $24,300 federal income tax + $20,486 SE tax = $44,786 total federal tax.

**Florida obligations.**

- **Florida corporate income tax.** None. The LLC is disregarded and Maria is a natural person. No F-1120 filed.
- **Florida personal income tax.** None. Florida has no personal income tax (Art. VII, s. 5, Fla. Const.).
- **Florida self-employment tax.** None. Florida does not piggyback on federal SE tax.
- **Florida sales tax.** Required only if Maria provides taxable services or sells tangible personal property in Florida. Most consulting services are not taxable in Florida. Verify per Ch. 212, F.S.
- **Florida annual report.** $138.75 to Sunbiz by May 1, 2026, to keep the LLC active. Not a tax.

**Total Florida state-level tax burden: $0.**

**Commentary.** This is why Florida is so attractive to freelancers and single-member LLC owners. A New York or California freelancer with the same $145,000 federal income pays an additional ~$8,500–$12,000 in state income tax. The Florida equivalent pays only the $138.75 annual report fee.

This is also why Florida is the **wrong place** to consider an S-corp election purely for state tax savings — there are no state-level SE tax savings to capture (because there's no state SE tax to begin with). Federal SE tax savings still motivate the S-corp election for high-earning Florida sole proprietors, but the analysis is purely federal. See the `us-s-corp-election-decision` skill.

### 13.4 Example 4 — Florida C-corp claiming Florida Tax Credit Scholarship credit

**Facts.** Atlantic Manufacturing Inc., a Florida C-corp, projects a 2025 Florida tax liability of $40,000. The CEO wants to redirect tax dollars to Step Up For Students (an approved SFO) to fund private school scholarships for low-income students.

**Steps.**

1. **Pre-approval.** Atlantic submits the **Application for Credit Allocation** through the FL DOR e-services portal in early 2025. The DOR allocates a credit reservation up to the total annual statewide cap.
2. **Contribution.** Atlantic contributes $40,000 to Step Up For Students within the allocation period.
3. **Documentation.** Step Up For Students issues a receipt to Atlantic. Atlantic also retains the DOR allocation letter.
4. **F-1120 filing.** On Form F-1120 for 2025:
   - Gross Florida tax: $40,000.
   - Florida Tax Credit Scholarship credit: ($40,000).
   - Net Florida tax: $0.
5. **Federal treatment.** Under Treas. Reg. §1.170A-1(h)(3), the contribution to the SFO cannot be deducted as a federal charitable contribution because it is treated as a payment of state tax. However, the safe harbor under Notice 2019-12 allows Atlantic to deduct the contribution as a **state tax payment** under IRC §164 — subject to the $10,000 SALT cap if applicable (no SALT cap on corporations under current law; the $10,000 cap applies only to individuals). For a C-corp, the contribution is fully deductible federally as state tax.

**Net effect.** Atlantic pays $40,000 to Step Up For Students instead of $40,000 to the FL DOR. Federal tax position is neutral or improved (depending on prior year tax position). Florida tax is $0. The contribution funds private school scholarships for low-income students at no net cost to Atlantic.

**Commentary.** This credit is the most popular Florida corporate income tax credit because it is a true dollar-for-dollar tax-to-contribution redirection. It works particularly well for C-corps that would otherwise have a Florida tax liability between $10,000 and $500,000.

### 13.5 Example 5 — Multistate apportionment with mixed property and sales

**Facts.** GulfCoast Logistics Inc., a Florida C-corp, operates trucking and warehousing services in Florida, Georgia, and Alabama. For 2025:

- Federal taxable income: $1,200,000.
- Property: $2,000,000 Florida, $500,000 Georgia, $300,000 Alabama. Total: $2,800,000.
- Payroll: $4,000,000 Florida, $800,000 Georgia, $600,000 Alabama. Total: $5,400,000.
- Sales (services performed in each state — sourced under cost-of-performance):
  - Services originating from Florida warehouse: $6,000,000 → 100% Florida-sourced.
  - Services originating from Georgia: $1,500,000 → 0% Florida-sourced.
  - Services originating from Alabama: $700,000 → 0% Florida-sourced.
  - Total: $8,200,000.

**Apportionment.**

*Property factor.* $2,000,000 / $2,800,000 = 71.43%.
*Payroll factor.* $4,000,000 / $5,400,000 = 74.07%.
*Sales factor (cost-of-performance).* $6,000,000 / $8,200,000 = 73.17%.

Note: GulfCoast may be eligible for transportation-specific apportionment under s. 220.151, F.S. (mileage-based), but for illustration we use standard apportionment.

*Apportionment %.* (71.43% + 74.07% + 2 × 73.17%) / 4 = (71.43 + 74.07 + 146.34) / 4 = 291.84% / 4 = **72.96%**.

**Florida apportioned income.** $1,200,000 × 72.96% = $875,520.

**$50,000 exemption.** $875,520 - $50,000 = $825,520.

**Florida tax at 5.5%.** $825,520 × 5.5% = **$45,404**.

**Commentary.** The double-weighting of sales means the sales factor effectively determines ~50% of the apportionment. Because Florida uses cost-of-performance, the $6M of services originating from Florida warehouse all source to Florida. If Florida used market-based sourcing, the answer might be quite different depending on customer locations.

The corporation would also file Georgia and Alabama corporate income tax returns. Total state tax across the three states is unlikely to sum to 100% because each state uses its own apportionment formula — possible double tax or apportionment gaps.

---

## 14. Self-Checks

Before signing off on an F-1120:

1. [ ] Confirm entity is a C-corp (or an LLC electing C-corp treatment, or an S-corp with federally-taxed items).
2. [ ] Confirm Florida nexus.
3. [ ] Start with Form 1120 Line 30 (federal taxable income).
4. [ ] Add back federal NOL deduction.
5. [ ] Add back federal bonus depreciation; reverse prior years' addback amortization (1/7 per year).
6. [ ] Compute apportionment using three-factor double-weighted sales formula.
7. [ ] Confirm services are sourced using cost-of-performance, NOT market-based.
8. [ ] Apply $50,000 exemption (pro-rated for short period; one per consolidated group).
9. [ ] Apply 5.5% rate (not 3.535% — that was 2020-2021 only).
10. [ ] Verify all credits have pre-approval and contemporaneous documentation.
11. [ ] Confirm F-1120 due date — 1st day of 5th month after year-end (May 1 for calendar year).
12. [ ] Confirm F-7004 extension paid with tentative tax (if extending).
13. [ ] Confirm estimated payments made if Florida tax > $2,500.
14. [ ] Confirm e-file required if prior-year liability ≥ $20,000.

---

## 15. Provenance and Citations

**Florida Statutes (Ch. 220, Corporate Income Tax):**
- s. 220.03, F.S. — Definitions (including federal IRC conformity date).
- s. 220.11, F.S. — Tax imposed; 5.5% rate.
- s. 220.1105, F.S. — Tax Refund and Rate Reduction Mechanism (TRIM Act; historical 2018–2021).
- s. 220.13, F.S. — Adjusted federal income (additions and subtractions); Florida NOL.
- s. 220.131, F.S. — Consolidated returns.
- s. 220.14, F.S. — $50,000 exemption.
- s. 220.15, F.S. — Three-factor apportionment with double-weighted sales; cost-of-performance sourcing for services.
- s. 220.151, F.S. — Special apportionment for transportation services.
- s. 220.152, F.S. — Petition for alternative apportionment.
- s. 220.16, F.S. — Allocation of nonbusiness income.
- s. 220.183, F.S. — Community Contribution Tax Credit.
- s. 220.184, F.S. — Voluntary Cleanup Tax Credit.
- s. 220.1845, F.S. — Hazardous Waste Facility Credit.
- s. 220.185, F.S. — New Markets Tax Credit.
- s. 220.1875, F.S. — Florida Tax Credit Scholarship Program.
- s. 220.1876, F.S. — Strong Families Tax Credit.
- s. 220.191, F.S. — Capital Investment Tax Credit.
- s. 220.196, F.S. — Research and Development Tax Credit.
- s. 220.198, F.S. — Experiential Learning Tax Credit (Internship Tax Credit).
- s. 220.222, F.S. — Returns; due dates.
- s. 220.34, F.S. — Declaration of estimated tax; quarterly payments.
- s. 220.63, F.S. — Bank and savings association franchise tax.
- s. 220.803, F.S. — Penalties.

**Florida Administrative Code:**
- Rule 12C-1.013, F.A.C. — Adjusted federal income.
- Rule 12C-1.0155, F.A.C. — Apportionment; sales factor; cost-of-performance.
- Rule 12C-1.0151, F.A.C. — Property factor.
- Rule 12C-1.0152, F.A.C. — Payroll factor.

**Florida Constitution:**
- Art. VII, s. 5 — Prohibition on personal income tax on natural persons.
- Art. VII, s. 6 — Corporate income tax authorization.

**FL DOR Forms (2025):**
- Form F-1120 (Florida Corporate Income/Franchise Tax Return).
- Form F-1120A (short form).
- Form F-1120ES (estimated tax voucher).
- Form F-7004 (extension).
- Form F-2220 (underpayment of estimated tax).
- Form F-1065 (partnership information return — corporate partners only).

**FL DOR Tax Information Publications:**
- TIP 22C01-02 (rate restored to 5.5% for 2022).
- TIP 22C01-01 (2021 rate retroactively reduced to 3.535%).
- TIP 21C01-01 (2020 rate 3.535%).
- TIP 20C01-01 and TIP 19C01-04 (2019 and 2018 rates 4.458%).

**Federal references:**
- IRC §172 — Net operating losses (Florida-mirrored post-2017).
- IRC §168(k) — Bonus depreciation (Florida decoupled).
- IRC §179 — Section 179 expensing (Florida partial decoupling).
- IRC §382 — Ownership change NOL limit (Florida conforms).
- IRC §951A — GILTI (Florida partial subtraction).
- IRC §965 — Transition tax (Florida addback, historical).
- IRC §1374 — Built-in gains tax (S-corp).
- IRC §1375 — Excess net passive income tax (S-corp).
- IRC §41 — Federal R&D credit (referenced by FL §220.196).
- IRC §170 / Treas. Reg. §1.170A-1(h)(3) — Charitable contribution / state tax credit interaction.
- Notice 2019-12 — Safe harbor for state tax credit contributions.
- P.L. 86-272 — Federal interstate commerce protection (tangible personal property only; does not protect SaaS or services).

**Companion skills:**
- `us-tax-workflow-base` — workflow architecture, required base.
- `us-sole-prop-bookkeeping` — Schedule C classification (federal); confirms whether SMLLC files Schedule C (and therefore no Florida F-1120).
- `us-federal-return-assembly` — federal 1040 / 1120 assembly.
- `us-s-corp-election-decision` — relevant for Florida sole proprietors considering S-corp election (federal-only analysis since FL has no SE tax).
- `florida-sales-and-use-tax` (separate skill) — Ch. 212, F.S. obligations for taxable sales.

**Verification status.** Version 0.1, pending review by a Florida-credentialed reviewer (CPA or licensed Florida attorney). Last updated 2025-11-15. Confirm the IRC conformity date and any 2025 legislative changes against the FL DOR website (floridarevenue.com/taxes/taxesfees/Pages/corporate.aspx) and the most recent F-1120 instructions before signing off on a 2025 return.

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
