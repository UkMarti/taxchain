---
name: brazil-payroll
description: >
  Use this skill whenever asked about Brazilian payroll processing, employee salary calculations,
  IRRF (Imposto de Renda Retido na Fonte), INSS contributions, FGTS deposits, 13º salário
  (décimo terceiro), employer cost calculations, net-to-gross or gross-to-net conversions,
  Brazilian payslip structure (holerite/contracheque), eSocial filings, or any question about
  computing wages, deductions, or employer obligations in Brazil. Trigger on phrases like
  "Brazilian payroll", "folha de pagamento", "INSS", "IRRF", "FGTS", "13º salário",
  "décimo terceiro", "férias", "salário líquido", "holerite", "eSocial", "DCTF Web",
  "employer cost Brazil", "CLT", "rescisão", "aviso prévio", or "salário mínimo Brasil".
version: 1.0
jurisdiction: BR
category: payroll
depends_on:
  - payroll-workflow-base
---

# Brazil Payroll Skill v1.0

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Brazil (Federative Republic of Brazil) |
| Currency | BRL (Real Brasileiro) |
| Payroll frequency | Monthly (payment by 5th business day of following month) |
| Tax year | Calendar year (1 January -- 31 December) |
| Primary legislation | CLT (Consolidação das Leis do Trabalho, Decreto-Lei 5.452/1943); Lei 8.212/1991 (INSS); Lei 8.036/1990 (FGTS); Regulamento do IR (Decreto 9.580/2018) |
| Tax authority | Receita Federal do Brasil (RFB) |
| Labour authority | Ministério do Trabalho e Emprego (MTE) |
| FGTS authority | Caixa Econômica Federal (CEF) |
| Employee INSS | Progressive: 7.5% -- 14% (ceiling BRL 8,475.55/month) |
| Employer INSS | 20% + RAT (1-3%) + Terceiros (~5.8%) |
| FGTS | 8% of gross (employer-only deposit) |
| IRRF | Progressive: 0% -- 27.5% |
| Minimum wage | BRL 1,621/month (2026) |
| eSocial events | Monthly, by 15th of following month |
| FGTS Digital | Monthly deposit by 20th of following month |
| Skill version | 1.0 |

---

## Section 2 -- Income Tax Withholding (IRRF)

### IRRF Monthly Table (2026)

| Monthly Taxable Income (BRL) | Rate | Deduction (BRL) |
|---|---|---|
| Up to 2,259.20 | 0% (exempt) | -- |
| 2,259.21 -- 2,826.65 | 7.5% | 169.44 |
| 2,826.66 -- 3,751.05 | 15% | 381.44 |
| 3,751.06 -- 4,664.68 | 22.5% | 662.77 |
| Above 4,664.68 | 27.5% | 896.00 |

### IRRF Calculation Method

| Step | Detail |
|---|---|
| 1. Start with gross salary | All taxable remuneration for the month |
| 2. Deduct INSS (employee) | Progressive INSS contribution |
| 3. Deduct dependents | BRL 189.59 per dependent (2026) |
| 4. Deduct alimony | Court-ordered payments (pensão alimentícia) |
| 5. Deduct private pension (PGBL) | Up to 12% of gross annual income |
| 6. Apply IRRF table | Rate × taxable base - deduction = IRRF |

### Special IRRF Rules

| Situation | Treatment |
|---|---|
| 13º salário | IRRF calculated separately (not aggregated with monthly salary) |
| Vacation pay (férias) | IRRF calculated on férias + 1/3 constitucional separately |
| Profit sharing (PLR) | Separate progressive table (annual) |
| Termination indemnities | Generally exempt from IRRF |
| Overtime, bonuses, commissions | Added to monthly gross for IRRF calculation |

---

## Section 3 -- Social Security: Employee Deductions (INSS)

### Progressive INSS Table (2026)

| Monthly Salary (BRL) | Rate |
|---|---|
| Up to 1,621.00 | 7.5% |
| 1,621.01 -- 2,902.84 | 9% |
| 2,902.85 -- 4,354.27 | 12% |
| 4,354.28 -- 8,475.55 (ceiling) | 14% |

### Key INSS Rules

- Progressive (fatiada): each bracket applies only to the portion within that range
- Maximum monthly contribution: ~BRL 951.64 (at ceiling)
- Ceiling (teto): BRL 8,475.55/month (2026)
- 13th salary INSS calculated separately (not added to monthly salary)
- Multiple employment: salaries are summed for bracket determination; contributions allocated proportionally
- INSS is deductible for IRRF calculation

### INSS Calculation Example (Salary BRL 5,000)

```
Bracket 1: 1,621.00 × 7.5%  =  121.58
Bracket 2: (2,902.84 - 1,621.00) × 9%  =  115.37
Bracket 3: (4,354.27 - 2,902.84) × 12% =  174.17
Bracket 4: (5,000.00 - 4,354.27) × 14% =   90.40
Total INSS:                              =  501.52
```

---

## Section 4 -- Social Security: Employer Contributions

### Employer INSS (Contribuição Patronal)

| Component | Rate | Base |
|---|---|---|
| Basic employer INSS | 20% | Total payroll (no ceiling) |
| RAT/SAT (workplace accident) | 1%, 2%, or 3% | Based on CNAE risk classification |
| FAP adjustment | 0.5× to 2.0× | Multiplied by RAT (company-specific) |
| Terceiros (third-party entities) | ~5.8% | SENAI, SESI, SEBRAE, INCRA, Salário-Educação, FNDE |
| **Typical total employer INSS** | **~26.8% -- 28.8%** | Of total payroll |

### FGTS (Fundo de Garantia do Tempo de Serviço)

| Parameter | Detail |
|---|---|
| Rate | 8% of gross monthly remuneration |
| Paid by | Employer only (NOT deducted from employee) |
| Base | All remuneration: salary, overtime, bonuses, 13th, vacation pay |
| Ceiling | None (applies to full salary) |
| Deposit deadline | By 20th of following month (FGTS Digital) |
| Platform | FGTS Digital (via eSocial integration) |
| Termination without cause | Employer pays 40% penalty on total FGTS balance |

### Total Employer Burden (Approximate)

| Component | Rate |
|---|---|
| Employer INSS + RAT + Terceiros | ~28.8% |
| FGTS | 8% |
| 13º salário provision (1/12) | 8.33% |
| Férias + 1/3 provision (1/12) | 11.11% |
| Subtotal provisions | 19.44% |
| FGTS/INSS on provisions | ~7% |
| **Approximate total employer cost above gross** | **~60-70%** |

---

## Section 5 -- Minimum Wage and Overtime

### Minimum Wage (Salário Mínimo Nacional)

| Year | Monthly (BRL) | Daily (BRL) | Hourly (BRL) |
|---|---|---|---|
| 2026 | 1,621.00 | 54.04 | 7.37 |
| 2025 | 1,518.00 | 50.60 | 6.91 |

- Set by Decreto nº 12.797/2025 (effective 1 January 2026)
- Based on 220 hours/month (44 hours/week × 5 weeks)
- Regional/state minimums may be higher (e.g., São Paulo, Rio de Janeiro, Paraná)
- Piso salarial (professional floors) set by category conventions may exceed national minimum

### Working Hours and Overtime

| Parameter | Standard |
|---|---|
| Standard working week | 44 hours (8h/day Mon-Fri + 4h Saturday) |
| Common alternative | 40 hours (collective agreement) |
| Maximum daily hours | 10 hours (8 + 2 overtime) |
| Overtime rate (regular days) | 50% supplement minimum |
| Overtime rate (Sundays/holidays) | 100% supplement |
| Night work supplement (22h-5h) | 20% minimum (noturno) |
| Night hour duration | 52 minutes 30 seconds (reduced hour) |
| Overtime bank (banco de horas) | Permitted via collective agreement (offset within 6-12 months) |

### Insalubridade / Periculosidade

| Type | Additional |
|---|---|
| Insalubridade (unhealthy conditions) | 10%, 20%, or 40% of minimum wage |
| Periculosidade (dangerous conditions) | 30% of base salary |
| Cannot cumulate | Employee chooses the more favourable |

---

## Section 6 -- Mandatory Benefits

| Benefit | Detail |
|---|---|
| 13º salário (Christmas bonus) | One full monthly salary, paid in two tranches |
| Férias (vacation) | 30 calendar days + 1/3 constitutional supplement |
| Vale-transporte (transport voucher) | Mandatory; employer bears cost exceeding 6% of base salary |
| FGTS | 8% monthly deposit (employer-funded) |
| Seguro-desemprego (unemployment) | 3-5 months (paid by government upon termination without cause) |
| Salário-família (family allowance) | For low-income employees with children under 14 |
| Licença-maternidade | 120 days (180 for Empresa Cidadã participants) |
| Licença-paternidade | 5 days (20 for Empresa Cidadã) |
| Work accident insurance (SAT/RAT) | Covered via employer INSS contribution |

### 13º Salário (Décimo Terceiro)

| Tranche | Amount | Deadline | Deductions |
|---|---|---|---|
| 1st tranche | 50% of prior month's salary | By 30 November | No INSS/IRRF deducted |
| 2nd tranche | Remaining 50% | By 20 December | INSS + IRRF on full 13º |
| FGTS | 8% on each tranche | With monthly FGTS deposit | N/A |
| Proportional | 1/12 per month worked (if < 12 months) | Pro-rated | Same rules |

### Férias (Vacation)

| Parameter | Detail |
|---|---|
| Entitlement | 30 calendar days after 12 months (período aquisitivo) |
| Payment | Salary + 1/3 constitucional (terço de férias) |
| Payment deadline | 2 business days before vacation start |
| Abono pecuniário | Employee may sell up to 10 days (1/3 of vacation) |
| INSS | Applies to vacation pay |
| IRRF | Calculated separately on vacation pay |
| FGTS | 8% on vacation pay (including 1/3) |
| Collective vacation | Employer may grant (minimum 10 consecutive days) |

### Vale-Transporte

| Parameter | Detail |
|---|---|
| Mandatory | Yes, for all CLT employees who request it |
| Employee contribution | Up to 6% of base salary |
| Employer bears | Full cost minus the 6% employee deduction |
| Exempt from | INSS, FGTS, IRRF (not considered salary) |
| Form | Prepaid transport card or equivalent |

---

## Section 7 -- Payslip Requirements

Brazilian employers MUST issue a holerite/contracheque (payslip) for each salary payment. Required elements under CLT Article 464:

| Element | Mandatory |
|---|---|
| Employer name, CNPJ, address | Yes |
| Employee name, CPF, CTPS registration | Yes |
| Position (cargo) and department | Yes |
| Pay period (competência) | Yes |
| Base salary (salário base) | Yes |
| Overtime hours and value | Yes (if applicable) |
| Night supplement (adicional noturno) | Yes (if applicable) |
| Insalubridade/periculosidade | Yes (if applicable) |
| Commissions, bonuses, gratifications | Yes |
| Gross remuneration (remuneração bruta) | Yes |
| INSS employee deduction | Yes |
| IRRF deduction | Yes |
| Vale-transporte deduction (6%) | Yes (if applicable) |
| Other deductions (advances, benefits, union) | Yes |
| Net salary (salário líquido) | Yes |
| FGTS deposit (employer, informational) | Yes |
| Base for FGTS and INSS | Recommended |

### Record Retention

- Payroll records: minimum 5 years (CLT)
- FGTS records: 30 years
- Tax records (IRRF): 5 years from filing

---

## Section 8 -- Filing Obligations

| Filing | Frequency | Deadline | Authority |
|---|---|---|---|
| eSocial periodic events (S-1200 remuneration) | Monthly | 15th of following month | RFB/MTE |
| eSocial closure (S-1299) | Monthly | 15th of following month | RFB/MTE |
| DCTFWeb (tax declaration) | Monthly | 15th of following month (after eSocial closure) | Receita Federal |
| FGTS Digital deposit | Monthly | 20th of following month | Caixa Econômica Federal |
| IRRF payment (DARF) | Monthly | 20th of following month | Receita Federal |
| 13º salário -- 1st tranche | Annual | 30 November | To employee |
| 13º salário -- 2nd tranche | Annual | 20 December | To employee |
| DIRF (Annual withholding declaration) | Annual | Last business day of February | Receita Federal |
| RAIS (Annual Social Information Report) | Annual | March (being replaced by eSocial data) | MTE |

### eSocial Events (Key Payroll Events)

| Event | Description | Deadline |
|---|---|---|
| S-1200 | Worker remuneration (monthly) | 15th of following month |
| S-1210 | Payments made (dates and values) | 15th of following month |
| S-1299 | Closure of periodic events | 15th of following month |
| S-2200 | Employee registration (admission) | Day before start date |
| S-2206 | Contract alteration (salary changes) | By payroll processing |
| S-2299 | Termination | 10 days from termination |
| S-2500 | Labour lawsuit | Per event |
| S-1200 (13º) | 13th salary annual event | 20 December |

### FGTS Digital

| Parameter | Detail |
|---|---|
| Replaced | SEFIP/GFIP (legacy system) |
| Integration | Automatic from eSocial events |
| Payment | Via FGTS Digital portal (generates guia) |
| Deadline | 20th of following month |
| Labour lawsuits | Via FGTS Digital from 1 May 2026 (for new sentences) |

### Penalties

| Violation | Penalty |
|---|---|
| Late FGTS | Interest (TR + 3%/year) + multa (5% first month, 10% thereafter) |
| Late INSS | 20% fine + SELIC interest |
| Late IRRF | 0.33%/day fine (max 20%) + SELIC interest |
| Missing eSocial events | INR varies; can trigger audit/fines |
| Non-payment of 13º | Fine per employee + possible labour lawsuit |
| Late vacation payment | Payment in double (TST jurisprudence) |

---

## Section 9 -- Common Payroll Patterns

### Pattern 1: Standard Monthly Salary (BRL 5,000, Single, No Dependents)

```
Gross salary:                        BRL 5,000.00
- INSS (progressive):              -BRL    501.52
= IRRF taxable base:                BRL 4,498.48
- IRRF (22.5% - 662.77):          -BRL    349.39
- Vale-transporte (6% of base):    -BRL    300.00
= Net salary:                        BRL 3,849.09

Employer cost:
  Gross salary:                      BRL 5,000.00
+ Employer INSS (20%):             +BRL 1,000.00
+ RAT (2%):                        +BRL   100.00
+ Terceiros (5.8%):                +BRL   290.00
+ FGTS (8%):                       +BRL   400.00
= Monthly employer cost (excl provisions): BRL 6,790.00

Annual provisions:
+ 13º salário + encargos:           ~BRL 6,500/year
+ Férias + 1/3 + encargos:          ~BRL 8,700/year
```

### Pattern 2: Minimum Wage Worker (BRL 1,621)

```
Gross salary:                        BRL 1,621.00
- INSS (7.5%):                     -BRL    121.58
= IRRF taxable base:                BRL 1,499.42
- IRRF:                             -BRL      0.00 (below exempt threshold)
= Net salary (before VT):           BRL 1,499.42
- Vale-transporte (6%):            -BRL     97.26
= Net received:                      BRL 1,402.16

Employer monthly cost:
  Salary + INSS patronal + RAT + Terceiros + FGTS ≈ BRL 2,200
  Annual total (with 13º, férias, encargos) ≈ BRL 31,000
```

### Pattern 3: 13º Salário Calculation (Full Year, Salary BRL 5,000)

```
1st tranche (by 30 November):
  50% × 5,000 = BRL 2,500.00
  No INSS or IRRF deducted
  FGTS: 8% × 2,500 = BRL 200.00 (employer deposits)

2nd tranche (by 20 December):
  Remaining: BRL 2,500.00
  INSS on full 13º (5,000): -BRL 501.52
  IRRF on (5,000 - 501.52) = 4,498.48: -BRL 349.39
  Net 2nd tranche: BRL 2,500 - 501.52 - 349.39 = BRL 1,649.09
  FGTS: 8% × 2,500 = BRL 200.00
```

### Pattern 4: Termination Without Cause (Rescisão Sem Justa Causa)

| Component | Calculation |
|---|---|
| Outstanding salary | Days worked / 30 × monthly salary |
| Proportional 13º | Months worked / 12 × salary |
| Proportional vacation + 1/3 | Months since last período aquisitivo / 12 × salary × 4/3 |
| Vested vacation + 1/3 (if any) | Full salary × 4/3 |
| Aviso prévio (notice period) | 30 days + 3 per year of service (max 90 days) |
| FGTS 40% penalty | 40% of total FGTS balance (employer pays to employee's FGTS account) |
| FGTS on termination pay | 8% on all termination amounts |

---

## Section 10 -- Interaction with Other Skills

| Skill | Interaction |
|---|---|
| brazil-einvoice | No direct interaction (NF-e is for goods/services; payroll uses eSocial) |
| payroll-workflow-base | General payroll processing workflow; Brazil-specific overrides in this skill |

### Brazil-Specific Payroll Considerations

- **CLT regime**: All formal employees (celetistas) are governed by CLT. Informal workers (MEI, autônomos, PJ) have entirely different contribution rules.
- **eSocial is mandatory**: ALL payroll events must flow through eSocial. There is no alternative filing method for CLT employers.
- **FGTS Digital transition**: As of 2024-2025, FGTS deposits transitioned to FGTS Digital (integrated with eSocial). Legacy SEFIP/GFIP only for historical corrections.
- **Salary cannot decrease**: Under CLT, nominal salary cannot be reduced (princípio da irredutibilidade salarial), even by mutual agreement, except via collective bargaining.
- **Union contributions**: Since 2017 Reform, union tax (contribuição sindical) is optional. Employee must explicitly authorize.
- **Conventions and agreements**: Collective conventions (convenção coletiva) and agreements (acordo coletivo) can set floors, additional benefits, and overtime banks. ALWAYS check applicable convention by CNAE/sindicato.
- **Proportional vacation**: After Labour Reform 2017, vacation can be split into up to 3 periods (minimum 14 days for one period, 5 days for others).
- **Simples Nacional**: Micro and small enterprises on Simples Nacional have different INSS patronal rules (included in the unified DAS tax).
- **RAT/FAP**: The effective workplace accident rate depends on the company's own accident history (FAP multiplier published annually by government). Always verify current FAP before computing employer INSS.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com).
