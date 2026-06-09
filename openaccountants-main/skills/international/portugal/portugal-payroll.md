---
name: portugal-payroll
description: >
  Use this skill whenever asked about Portuguese payroll processing, employee salary calculations,
  IRS retenção na fonte (income tax withholding), Segurança Social contributions, employer cost
  calculations, net-to-gross or gross-to-net conversions, Portuguese payslip structure, Declaração
  Mensal de Remunerações, or any question about computing wages, deductions, or employer obligations
  in Portugal. Trigger on phrases like "Portuguese payroll", "IRS withholding", "retenção na fonte",
  "Segurança Social", "TSU", "salário líquido", "employer cost Portugal", "subsídio de férias",
  "subsídio de Natal", "13th month Portugal", "14th month Portugal", "minimum wage Portugal",
  "salário mínimo", "DMR filing", or "recibo de vencimento".
version: 1.0
jurisdiction: PT
category: payroll
depends_on:
  - payroll-workflow-base
tax_year: 2025
verified_by: pending
---

# Portugal Payroll Skill v1.0

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Portugal (Portuguese Republic) |
| Currency | EUR |
| Payroll frequency | Monthly (14 payments/year: 12 + holiday + Christmas subsidy) |
| Tax year | Calendar year (1 January -- 31 December) |
| Primary legislation | Código do IRS; Código Contributivo (Lei 110/2009); Código do Trabalho |
| Tax authority | Autoridade Tributária e Aduaneira (AT) |
| Social security authority | Instituto da Segurança Social (ISS) |
| Employee SS rate | 11% of gross salary |
| Employer SS rate | 23.75% of gross salary |
| Withholding tax | IRS retenção na fonte (progressive marginal tables) |
| Minimum wage (RMMG) | EUR 920/month (2026, Continent) |
| Payroll payments | 14 per year (12 months + holiday subsidy + Christmas subsidy) |
| DMR filing | Monthly, by 10th of following month |
| SS/IRS payment | Monthly, by 20th of following month |
| Skill version | 1.0 |

---

## Section 2 -- Income Tax Withholding (IRS Retenção na Fonte)

### IRS Tax Brackets (2026 -- Rendimento Coletável Anual)

| Bracket | Annual Taxable Income (EUR) | Marginal Rate |
|---|---|---|
| 1.º | Up to 7,703 | 13.25% |
| 2.º | 7,703 -- 11,623 | 16.50% |
| 3.º | 11,623 -- 17,838 | 22.00% |
| 4.º | 17,838 -- 22,052 | 24.10% |
| 5.º | 22,052 -- 28,227 | 31.40% |
| 6.º | 28,227 -- 41,674 | 37.00% |
| 7.º | 41,674 -- 55,696 | 43.50% |
| 8.º | 55,696 -- 78,834 | 45.00% |
| 9.º | Above 78,834 | 48.00% |

### Withholding Tax Mechanism

Monthly IRS withholding uses specific tables published annually by Despacho (Annex III tables). Since 2023, Portugal uses a progressive marginal formula for withholding (not flat-rate per bracket).

| Table | Applies to |
|---|---|
| Table I | Married, single holder (casado, único titular) |
| Table II | Married, two holders (casado, dois titulares) |
| Table III | Not married (não casado) |
| Tables IV-VII | Pensioners |
| Tables VIII-XI | Disabled workers |

### Key Withholding Rules (2026)

| Rule | Detail |
|---|---|
| Zero withholding threshold | Up to EUR 920/month (minimum wage) = 0% IRS |
| Mínimo de existência | EUR 12,880 annual (14 × 920) -- fully exempt |
| Dependent child deduction | EUR 42.86/month (married single holder); EUR 21.43 (two holders); EUR 34.29 (not married) |
| Specific deduction (dedução específica) | EUR 4,104/year (or actual SS contributions if higher) |
| 3+ dependents | 1 percentage point reduction in highest applicable marginal rate |

### Subsídio de Férias / Natal Withholding

Holiday and Christmas subsidies are subject to IRS withholding at the SAME rate as the normal monthly salary, calculated independently. INSS also applies at the standard 11%.

---

## Section 3 -- Social Security: Employee Deductions

| Contribution | Rate | Base | Cap |
|---|---|---|---|
| Segurança Social (employee) | 11% | Gross remuneration | No cap (applies to full salary) |

### What Is Subject to SS Contributions

- Base salary
- Seniority supplements (diuturnidades)
- Regular allowances (subsídio de alimentação above exempt threshold, shift allowances)
- Holiday and Christmas subsidies
- Overtime pay
- Commissions

### What Is Exempt from SS Contributions

- Meal allowance up to EUR 6.00/day (cash) or EUR 10.20/day (meal card) -- 2026
- Travel and subsistence allowances (within legal limits)
- Profit-sharing distributions (participação nos lucros)
- Compensation for termination (within legal limits)

### Key Rules

- Employee contribution of 11% is deducted at source every month
- Applies to each of the 14 payments (including holiday/Christmas subsidies)
- No upper ceiling -- full salary is subject
- SS contributions are deductible for IRS purposes (counted in the dedução específica)

---

## Section 4 -- Social Security: Employer Contributions

| Contribution | Rate | Base |
|---|---|---|
| Segurança Social (employer) | 23.75% | Gross remuneration |
| **Total combined rate** | **34.75%** | Employee 11% + Employer 23.75% |

### Special Employer Rates

| Situation | Rate |
|---|---|
| Members of statutory bodies (gerentes/administradores) with unemployment protection | 23.75% (employee 11%) |
| Members of statutory bodies without unemployment protection | 20.30% (employee 9.30%) |
| Domestic workers | 18.90% (employee 9.40%) |
| First employment incentive (3 years) | 50% reduction on employer rate |
| Long-term unemployed (3 years) | 50% reduction on employer rate |

### Fundo de Compensação do Trabalho (FCT)

| Fund | Rate | Purpose |
|---|---|---|
| FCT (Compensation Fund) | 0.925% | Employee termination compensation guarantee |
| FGCT (Guarantee Fund) | 0.075% | Mutual guarantee fund |
| **Total** | **1.00%** | Paid by employer on gross salary |

- Applies to contracts started after 1 October 2013
- Paid monthly by the 20th of following month
- Exempt: domestic workers, public sector

---

## Section 5 -- Minimum Wage and Overtime

### Minimum Wage (Retribuição Mínima Mensal Garantida -- RMMG)

| Region | 2026 Monthly (EUR) |
|---|---|
| Continent (mainland) | 920.00 |
| Açores (Azores) | 966.00 |
| Madeira | 968.00 |

- Set by Decreto-Lei nº 139/2025 (effective 1 January 2026)
- Previous year (2025): EUR 870.00
- Annual cost to employer per minimum-wage worker: ~EUR 14,094 (including subsidies + TSU)
- Workers at minimum wage pay 0% IRS (mínimo de existência protection)
- Net minimum wage (after 11% SS): EUR 818.80/month

### Working Hours and Overtime

| Parameter | Standard |
|---|---|
| Standard working week | 40 hours |
| Maximum daily hours | 8 hours (extendable to 10 by collective agreement) |
| Overtime limit | 150 hours/year (200 by collective agreement) |
| Overtime rate (1st hour, working day) | 25% supplement |
| Overtime rate (subsequent hours, working day) | 37.5% supplement |
| Overtime rate (rest days/holidays) | 50% supplement |
| Night work supplement (22h-7h) | 25% minimum |

---

## Section 6 -- Mandatory Benefits

| Benefit | Detail |
|---|---|
| Annual leave | 22 working days minimum |
| Holiday subsidy (subsídio de férias) | Equal to one month's salary (paid before holiday start or in June) |
| Christmas subsidy (subsídio de Natal) | Equal to one month's salary (paid by 15 December) |
| Meal allowance (subsídio de alimentação) | Not mandatory but extremely common; exempt up to EUR 6.00/day (cash) or EUR 10.20/day (card) |
| Sick leave | Paid by Segurança Social from day 4 (55%-75% of salary depending on duration) |
| Maternity leave | 120 days at 100% or 150 days at 80% (paid by SS) |
| Paternity leave | 28 consecutive days mandatory (paid by SS) |
| Bereavement leave | 2-5 days depending on relation |
| Marriage leave | 15 consecutive days |
| Work accident insurance | Mandatory (employer must contract with insurer) |

### 13th and 14th Month (Subsídios)

| Subsidy | Amount | Timing | SS/IRS |
|---|---|---|---|
| Subsídio de Natal (Christmas) | 1 month salary | By 15 December (or proportional in 12 payments) |Subject to 11% SS + IRS |
| Subsídio de Férias (Holiday) | 1 month salary | Before holiday start or by 30 June | Subject to 11% SS + IRS |

Employees may opt (or employers may determine) payment in duodécimos (1/12 per month). Both subsidies are proportional to time worked if employee joins/leaves mid-year.

---

## Section 7 -- Payslip Requirements

Portuguese employers MUST issue a recibo de vencimento (payslip) for each salary payment. Required elements:

| Element | Mandatory |
|---|---|
| Employer identification (name, NIPC, SS number) | Yes |
| Employee identification (name, NIF, NISS) | Yes |
| Pay period (month/year) | Yes |
| Job category and seniority | Yes |
| Base salary (retribuição base) | Yes |
| Regular supplements and allowances | Yes |
| Overtime breakdown | Yes |
| Gross total remuneration | Yes |
| Employee SS contribution (11%) | Yes |
| IRS withholding amount | Yes |
| Other deductions (union dues, advances, etc.) | Yes |
| Meal allowance (days × rate) | Yes (if applicable) |
| Net salary payable | Yes |
| Payment date and method | Yes |
| Holiday/Christmas subsidy (when paid) | Yes |

### Record Retention

Employers must retain payroll records for a minimum of 5 years (general labour law) and 10 years for tax purposes.

---

## Section 8 -- Filing Obligations

| Filing | Frequency | Deadline | Authority |
|---|---|---|---|
| Declaração Mensal de Remunerações (DMR) | Monthly | 10th of following month | AT + SS |
| SS contributions payment | Monthly | Between 10th and 20th of following month | Segurança Social |
| IRS withholding payment | Monthly | By 20th of following month | AT |
| FCT/FGCT payment | Monthly | By 20th of following month | Fundos de Compensação |
| Relatório Único (Annual Social Report) | Annual | By 15 April (via portal) | GEP/MTSSS |
| IRS annual declaration (Modelo 3) | Annual | 1 April -- 30 June (employee files personally) | AT |
| Modelo 10 (income paid to non-residents) | Annual | By 28 February | AT |

### DMR Details

| Parameter | Detail |
|---|---|
| Content | Per-employee: gross salary, SS contributions, IRS withheld |
| Submission | Electronic via Portal das Finanças |
| Validation | Must be validated by SS system to be considered delivered |
| Penalties | Late filing: fines from EUR 150 to EUR 3,750; late payment: 10% surcharge + interest |

### Key Annual Calendar

| Month | Obligation |
|---|---|
| January | DMR December; SS/IRS payment for December |
| February | Modelo 10 deadline (non-residents) |
| March | Annual SS reconciliation |
| April | Relatório Único; DMR March |
| June | Holiday subsidy payment; IRS filing opens |
| November | First Christmas subsidy tranche (if in duodécimos) |
| December | Christmas subsidy by 15th; annual payroll closing |

---

## Section 9 -- Common Payroll Patterns

### Pattern 1: Standard Monthly Salary (Single, No Dependents, Continent)

```
Base salary:                         EUR 1,800.00
Meal allowance (22 days × 7.63):    +EUR   167.86 (card, exempt from SS/IRS)
Gross for SS/IRS purposes:           EUR 1,800.00
- Employee SS (11%):                 -EUR   198.00
= Taxable base for IRS:              EUR 1,602.00
- IRS withholding (~14.5%):          -EUR   ~232.00
= Net salary:                        EUR 1,370.00
+ Meal allowance:                   +EUR   167.86
= Total received:                    EUR ~1,538.00

Employer cost:
  Base salary:                       EUR 1,800.00
+ Employer SS (23.75%):             +EUR   427.50
+ FCT (1%):                         +EUR    18.00
+ Meal allowance:                   +EUR   167.86
= Monthly employer cost:             EUR ~2,413.36
```

### Pattern 2: Minimum Wage Worker (2026)

```
Base salary (RMMG):                  EUR   920.00
- Employee SS (11%):                 -EUR   101.20
- IRS withholding:                   -EUR     0.00 (exempt -- mínimo de existência)
= Net salary:                        EUR   818.80

Annual cost:
  14 months × 920 × 1.2375 (with employer SS) = EUR 15,939.00
  + FCT 1% on 14 months = EUR 128.80
  Total annual employer cost ≈ EUR 16,068
```

### Pattern 3: Holiday Subsidy Month (June)

In June, employee receives double payment:
- Normal June salary (subject to SS + IRS at standard rate)
- Holiday subsidy = 1 month base salary (subject to SS + IRS separately)

Each payment has IRS calculated independently using the same withholding rate.

### Pattern 4: Termination Settlement

| Component | Calculation |
|---|---|
| Outstanding salary | Days worked in final month / 30 × salary |
| Proportional holiday subsidy | Months worked / 12 × monthly salary |
| Proportional Christmas subsidy | Months worked / 12 × monthly salary |
| Untaken holiday (current year) | Proportional to 22 days |
| Untaken holiday (carried over) | Full days × daily rate |
| Compensation (if applicable) | Per Código do Trabalho rules |

---

## Section 10 -- Interaction with Other Skills

| Skill | Interaction |
|---|---|
| portugal-bookkeeping | Payroll journal entries (account 63x), provisions for holiday/Christmas subsidies |
| portugal-einvoice | No direct interaction (e-invoicing is B2B; payslips are separate) |
| payroll-workflow-base | General payroll processing workflow; Portugal-specific overrides in this skill |

### Portugal-Specific Payroll Considerations

- **14 payments**: Portugal mandates 14 salary payments per year. Budget for this when converting annual salary to monthly cost.
- **Duodécimos**: Employees may request holiday and Christmas subsidies paid in 12 equal monthly instalments (1/12 each month). Employer may also choose this method.
- **Autonomous regions**: Açores and Madeira have slightly higher minimum wages and potentially different IRS withholding tables.
- **IRS withholding tables**: Updated annually by Despacho. Always use current-year tables. The 2026 tables apply retroactively from 1 January 2026.
- **Meal allowance**: Extremely common benefit. The exempt portion (EUR 6.00 cash / EUR 10.20 card) is NOT subject to SS or IRS. Any excess IS subject.
- **Trabalho suplementar (overtime)**: Subject to both SS contributions and IRS withholding at the normal rate.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com).
