---
name: dividend-investment-income-template
description: Reusable cross-country template for dividend and investment income taxation. Covers dividend classification (qualified vs ordinary), withholding tax rates (domestic and treaty), franking/imputation credits, interest income, capital gains on securities, dividend allowances, reporting requirements, foreign dividend treatment, and double tax relief. Adapt by inserting country-specific WHT rates, treaty rates, and allowances at [COUNTRY-SPECIFIC] placeholders.
version: 1.0
category: template
---

# Dividend & Investment Income Tax Template v1.0

---

## Section 1 — Quick reference

| Field | Value |
|---|---|
| Jurisdiction | [COUNTRY-SPECIFIC] |
| Tax authority | [COUNTRY-SPECIFIC] |
| Primary legislation | [COUNTRY-SPECIFIC] |
| Tax year | [COUNTRY-SPECIFIC] |
| Dividend tax rate (basic/standard) | [COUNTRY-SPECIFIC — e.g., 8.75% UK, 0%/15% US qualified, 20% ZA] |
| Dividend tax rate (higher) | [COUNTRY-SPECIFIC — e.g., 33.75% UK, 15% US, 20% ZA flat] |
| Dividend tax rate (additional/top) | [COUNTRY-SPECIFIC — e.g., 39.35% UK, 20% US, 20% ZA flat] |
| Dividend allowance / tax-free amount | [COUNTRY-SPECIFIC — e.g., £500 UK 2024/25, $0 US, $0 AU] |
| Domestic withholding tax rate | [COUNTRY-SPECIFIC — e.g., 0% UK, 0% US (domestic), 20% ZA] |
| Interest income tax rate | [COUNTRY-SPECIFIC — e.g., marginal rate UK/US, 15% ZA withholding] |
| Interest allowance (personal savings) | [COUNTRY-SPECIFIC — e.g., £1,000 basic / £500 higher UK] |
| Capital gains rate (securities) | [COUNTRY-SPECIFIC] |
| Annual exempt amount (CGT) | [COUNTRY-SPECIFIC — e.g., £3,000 UK, $0 US, 40% inclusion ZA] |
| Imputation / franking credit system | [COUNTRY-SPECIFIC — e.g., AU franking, NZ imputation, N/A UK/US] |
| Reporting form | [COUNTRY-SPECIFIC — e.g., SA100/SA108 UK, 1040 Schedule B/D US] |
| Filing deadline | [COUNTRY-SPECIFIC] |
| Currency | [COUNTRY-SPECIFIC] |

### Conservative defaults

| Ambiguity | Default |
|---|---|
| Unknown whether dividend is qualified | Ordinary (higher rate) |
| Unknown holding period for shares | Short-term (higher rate applies to gains) |
| Unknown source country of dividend | Domestic (no treaty relief assumed) |
| Unknown franking percentage | Unfranked (no credit) |
| Unknown whether interest is tax-free (e.g., ISA/Roth) | Taxable |
| Unknown cost basis of securities sold | Zero (maximum gain) |

---

## Step 0 — Onboarding questions

Before computing, you MUST obtain:

1. **Dividend income received** — amounts, payer companies, dates of payment
2. **Dividend classification** — qualified/ordinary (US), franked/unfranked (AU), UK company vs foreign
3. **Interest income** — bank interest, bond interest, P2P lending, amounts and payers
4. **Capital gains on securities** — disposal proceeds, acquisition cost, dates (for holding period)
5. **Tax-advantaged accounts** — ISA/TFSA/Roth/super holdings (exempt income)
6. **Foreign investment income** — country of source, withholding tax deducted at source
7. **Dividend reinvestment plans (DRIPs)** — reinvested dividends are still taxable income
8. **Franking/imputation credits received** — for AU/NZ: franking credit statements
9. **Any tax treaties to consider?** — residency and source country combination
10. **Prior year capital losses carried forward?**

---

## Step 1 — Dividend classification and taxation

### Classification decision tree

```
Is the dividend from a domestic or foreign source?
  ├─ DOMESTIC
  │   ├─ Is there a dividend allowance? [COUNTRY-SPECIFIC]
  │   │   ├─ YES → First [amount] is tax-free
  │   │   └─ NO → Fully taxable
  │   ├─ Franking/imputation system? [COUNTRY-SPECIFIC]
  │   │   ├─ YES → Gross up dividend; apply franking credit (see Step 4)
  │   │   └─ NO → Tax at dividend rates
  │   └─ Rate: [COUNTRY-SPECIFIC dividend rate table]
  └─ FOREIGN
      ├─ Withholding tax deducted at source? → Claim DTR (see Step 7)
      ├─ Is it "qualified" (US)? → Lower rate if holding period met
      └─ Rate: [COUNTRY-SPECIFIC rate for foreign dividends]
```

### Dividend tax rate table

| Taxpayer's marginal band | Dividend rate | Jurisdiction |
|---|---|---|
| Basic / standard | [COUNTRY-SPECIFIC — e.g., 8.75% UK, 0%/10%/15% US] | [COUNTRY-SPECIFIC] |
| Higher / middle | [COUNTRY-SPECIFIC — e.g., 33.75% UK, 15% US] | [COUNTRY-SPECIFIC] |
| Additional / top | [COUNTRY-SPECIFIC — e.g., 39.35% UK, 20% US] | [COUNTRY-SPECIFIC] |

### Qualified vs ordinary dividends (US-style classification)

| Type | Criteria | Rate |
|---|---|---|
| Qualified | Holding period > 60 days within 121-day window; from US corp or qualified foreign corp | 0% / 15% / 20% per income bracket |
| Ordinary (non-qualified) | Holding period not met; or from non-qualified source | Marginal income tax rate (up to 37%) |
| Return of capital | Distribution exceeds earnings & profits | Reduces cost basis; not currently taxable |

---

## Step 2 — Withholding tax on dividends

### Domestic withholding

| Jurisdiction | Domestic WHT rate | Mechanism |
|---|---|---|
| [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., 0% UK, 0% US domestic, 20% ZA DWT] | [COUNTRY-SPECIFIC — e.g., final tax ZA, credit US/UK] |

### Treaty withholding rates (common examples)

| Source country | Standard rate | Treaty rate (to [COUNTRY]) | Conditions |
|---|---|---|---|
| [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | Beneficial ownership; [COUNTRY-SPECIFIC minimum holding %] |
| US | 30% | [COUNTRY-SPECIFIC — e.g., 15% to UK/AU/CA] | W-8BEN filed; beneficial owner |
| UK | 0% (no WHT on dividends) | 0% | N/A |
| [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

### Forms for treaty relief

| Form | Purpose | Jurisdiction |
|---|---|---|
| W-8BEN | Claim reduced US WHT under treaty | US (non-resident alien) |
| W-8BEN-E | Same for entities | US |
| [COUNTRY-SPECIFIC form] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

---

## Step 3 — Interest income

### Classification and taxation

| Type | Tax treatment | Rate |
|---|---|---|
| Bank/building society interest | [COUNTRY-SPECIFIC — paid gross or net of withholding] | Marginal / [COUNTRY-SPECIFIC] |
| Government bond interest (gilts/treasuries) | [COUNTRY-SPECIFIC — exempt or taxable] | [COUNTRY-SPECIFIC] |
| Corporate bond interest | Taxable as income | Marginal rate |
| P2P lending interest | Taxable as income | Marginal rate |
| Interest from tax-free accounts (ISA/TFSA/Roth) | Exempt | 0% |
| Foreign interest | Taxable; credit for foreign WHT | Marginal rate |

### Personal savings allowance (where applicable)

| Marginal rate band | Allowance | Jurisdiction |
|---|---|---|
| Basic rate taxpayer | [COUNTRY-SPECIFIC — e.g., £1,000 UK] | [COUNTRY-SPECIFIC] |
| Higher rate taxpayer | [COUNTRY-SPECIFIC — e.g., £500 UK] | [COUNTRY-SPECIFIC] |
| Additional rate taxpayer | [COUNTRY-SPECIFIC — e.g., £0 UK] | [COUNTRY-SPECIFIC] |

### Interest income computation

```
Gross interest received (or accrued, per accounting basis)
  LESS: Personal savings allowance [COUNTRY-SPECIFIC]
  = Taxable interest income
  × Marginal income tax rate
  = Tax on interest
  LESS: Tax deducted at source (if any)
  = Net tax due / (refund)
```

---

## Step 4 — Franking / imputation credits

[COUNTRY-SPECIFIC: This section applies to AU, NZ, and other imputation systems. Delete for UK/US.]

### How imputation works

```
Cash dividend received                        $700
Franking credit (at company tax rate 30%)     $300
Grossed-up dividend (assessable income)       $1,000

Tax on grossed-up dividend at marginal rate:
  e.g., 32.5% × $1,000 = $325
LESS: Franking credit offset                  ($300)
= Net tax payable on dividend                 $25

If franking credit > tax liability → refund of excess (AU)
[COUNTRY-SPECIFIC: NZ does not refund excess imputation credits to individuals]
```

### Franking credit formula

```
Franking credit = Cash dividend × (Company tax rate / (1 - Company tax rate))
e.g., $700 × (0.30 / 0.70) = $300
```

### Partially franked dividends

```
Total dividend = Franked portion + Unfranked portion
Franking credit applies only to franked portion
Unfranked portion taxed at marginal rate with no credit
```

---

## Step 5 — Capital gains on securities

### Computation per disposal

```
Disposal proceeds (sale price × quantity)
  LESS: Brokerage / commission on sale
  LESS: Cost basis (acquisition price × quantity)
  LESS: Brokerage / commission on purchase
  LESS: [COUNTRY-SPECIFIC indexation allowance, if applicable]
  = Capital gain / (loss)
```

### Holding period and rates

| Holding period | Classification | Rate |
|---|---|---|
| ≤ [COUNTRY-SPECIFIC — e.g., 12 months US/AU] | Short-term | [COUNTRY-SPECIFIC — e.g., marginal rate US, marginal AU] |
| > [COUNTRY-SPECIFIC — e.g., 12 months US/AU] | Long-term | [COUNTRY-SPECIFIC — e.g., 0/15/20% US, 50% discount AU] |

### CGT discount / inclusion rate

| Jurisdiction | Mechanism | Effect |
|---|---|---|
| US | Preferential rate (0/15/20%) | Lower rate for long-term gains |
| AU | 50% CGT discount (individuals) | Only 50% of gain is assessable |
| ZA | 40% inclusion rate (individuals) | Only 40% of gain is taxed at marginal rate |
| UK | Flat rates (10%/20% or 18%/24% for property) | Applied to net gain after AEA |
| [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

### Cost basis methods for securities

| Method | Description | Jurisdictions |
|---|---|---|
| FIFO | First shares bought are first sold | [COUNTRY-SPECIFIC — default UK (S104 pool actually), AU] |
| Specific identification | Taxpayer designates which lot | [COUNTRY-SPECIFIC — US with broker confirmation] |
| Average cost | Pooled cost ÷ total shares = per-share cost | [COUNTRY-SPECIFIC — UK S104 pool, mutual fund US] |
| LIFO | Last bought first sold | [COUNTRY-SPECIFIC — rare; check availability] |

---

## Step 6 — Dividend allowance and tax-free amounts

| Jurisdiction | Allowance | Year | Notes |
|---|---|---|---|
| UK | £500 | 2024/25 | Reduced from £1,000 (2023/24) and £2,000 (2022/23) |
| US | $0 (no allowance) | N/A | All dividends taxable (unless in Roth/IRA) |
| ZA | R0 (dividends tax is final WHT at 20%) | N/A | No individual allowance; WHT is final |
| [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

### Dividend allowance computation (UK example)

```
Total dividend income                          £5,000
LESS: Dividend allowance                       (£500)
= Taxable dividends                            £4,500

If basic rate band remaining ≥ £4,500:
  Tax = £4,500 × 8.75% = £393.75
If partially in higher band:
  Split between bands and apply respective rates
```

---

## Step 7 — Foreign dividends and double tax relief

### Computation of double tax relief (DTR)

```
Foreign dividend received (gross, before WHT)   [CURRENCY] X
Foreign WHT deducted at source                  [CURRENCY] Y
Net dividend received                           [CURRENCY] (X - Y)

Domestic tax on gross foreign dividend:
  X × [COUNTRY-SPECIFIC marginal rate] = Z

DTR credit = LOWER OF:
  (a) Foreign WHT actually paid (Y)
  (b) Domestic tax on that income (Z)

Net domestic tax = Z - DTR credit
```

### Excess foreign tax credit

| Jurisdiction | Treatment of excess |
|---|---|
| US | Carry back 1 year / forward 10 years |
| UK | Cannot carry; lost if exceeds UK tax |
| AU | Cannot carry; lost |
| [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

### Foreign income reporting

| Aspect | Requirement |
|---|---|
| Conversion to local currency | Use exchange rate on date of payment (or average rate if [COUNTRY-SPECIFIC] permits) |
| Gross-up for WHT | Report gross amount (before WHT) as income |
| Claim credit separately | DTR claimed on return [COUNTRY-SPECIFIC form/box] |
| Documentation | Dividend statements; WHT certificates; broker 1099-DIV (US) |

---

## Step 8 — Reporting requirements

### Annual return reporting

| Income type | Where reported | Jurisdiction |
|---|---|---|
| Dividends (domestic) | [COUNTRY-SPECIFIC — e.g., SA100 Box 4 UK, 1040 Schedule B US] | [COUNTRY-SPECIFIC] |
| Dividends (foreign) | [COUNTRY-SPECIFIC — e.g., SA106 UK, 1040 Schedule B US] | [COUNTRY-SPECIFIC] |
| Interest income | [COUNTRY-SPECIFIC — e.g., SA100 Box 2 UK, Schedule B US] | [COUNTRY-SPECIFIC] |
| Capital gains | [COUNTRY-SPECIFIC — e.g., SA108 UK, Schedule D US] | [COUNTRY-SPECIFIC] |
| Franking credits | [COUNTRY-SPECIFIC — AU supplementary section] | [COUNTRY-SPECIFIC] |
| DTR claims | [COUNTRY-SPECIFIC — e.g., SA106 UK, Form 1116 US] | [COUNTRY-SPECIFIC] |

### Reporting thresholds

| Threshold | Jurisdiction | Effect |
|---|---|---|
| > $10 interest/dividends from single payer | US | 1099-INT / 1099-DIV issued |
| > [COUNTRY-SPECIFIC] total investment income | [COUNTRY-SPECIFIC] | Must file return / supplementary pages |
| Foreign accounts > [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC — e.g., $10,000 US FBAR] | Additional disclosure required |

---

## Step 9 — Interaction with personal income tax

### Order of taxation (UK example structure)

```
1. Non-savings income (employment, self-employment, rental, pension)
   → Uses personal allowance and basic rate band first
2. Savings income (interest)
   → Savings allowance within remaining basic rate band
3. Dividend income (taxed last)
   → Dividend allowance then dividend rates on remainder

[COUNTRY-SPECIFIC: Insert ordering rules for your jurisdiction]
```

### Impact on marginal rate

| Scenario | Effect on investment income taxation |
|---|---|
| High employment income pushes into higher band | Dividends/gains taxed at higher rates |
| Loss of personal allowance (income > [COUNTRY-SPECIFIC]) | Effective marginal rate increases |
| Dividend income pushes into next band | Marginal rate changes mid-dividend |
| Capital gains added on top | CGT rate determined by remaining basic rate band |

---

## Prohibitions

- NEVER assume all dividends are qualified — holding period and source tests must be verified
- NEVER ignore withholding tax already deducted at source — it is a credit, not a loss
- NEVER double-count franking credits — the gross-up and credit must be applied symmetrically
- NEVER apply treaty rates without confirming beneficial ownership and correct forms filed
- NEVER treat dividend reinvestment (DRIP) as non-taxable — reinvested dividends are taxable income
- NEVER ignore the ordering rules — non-savings, savings, dividends use bands in sequence
- NEVER claim foreign tax credit exceeding domestic tax on that income
- NEVER apply CGT discount/inclusion without verifying holding period threshold
- NEVER mix pre-tax and post-tax dividend figures — always identify whether amounts are gross or net of WHT
- NEVER present outputs as tax advice — direct to a qualified tax professional

---

## Edge Case Registry

| # | Scenario | Correct treatment |
|---|---|---|
| EC-1 | Stock dividend (scrip dividend) instead of cash | [COUNTRY-SPECIFIC — generally taxable at market value of shares received] |
| EC-2 | Return of capital distribution (exceeds E&P) | Not income; reduces cost basis of shares; excess is capital gain |
| EC-3 | Dividend from REIT / property fund | [COUNTRY-SPECIFIC — may be taxed as property income, not dividend] |
| EC-4 | Liquidation distribution | [COUNTRY-SPECIFIC — treated as disposal proceeds, not dividend] |
| EC-5 | Dividend received via nominee / custodian | Beneficial owner reports income; WHT certificates from custodian required |
| EC-6 | Cum-dividend vs ex-dividend purchase timing | Dividend belongs to registered holder on record date; buyer after ex-date does not receive |
| EC-7 | Excess franking credits (AU) — refund for low-income | Full refund of excess credits if total tax liability < credits |
| EC-8 | Controlled foreign corporation (CFC) deemed dividend | [COUNTRY-SPECIFIC — income attributed to shareholder regardless of distribution] |
| EC-9 | Dividend paid in foreign currency | Convert at spot rate on payment date; FX gain/loss on subsequent conversion is separate event |
| EC-10 | Dividend waiver (shareholder waives entitlement) | [COUNTRY-SPECIFIC — anti-avoidance may attribute income regardless; HMRC settlements legislation UK] |

---

## Test Suite

| # | Input | Expected output |
|---|---|---|
| T-1 | UK taxpayer; dividends £6,000; basic rate band remaining > £6,000 | Allowance £500; taxable £5,500 × 8.75% = £481.25 |
| T-2 | US taxpayer; qualified dividends $10,000; 15% bracket | Tax = $10,000 × 15% = $1,500 |
| T-3 | AU taxpayer; fully franked dividend $700; 30% company rate; marginal 32.5% | Gross-up = $1,000; tax = $325; less franking $300; net tax = $25 |
| T-4 | Foreign dividend $1,000 (gross); 15% WHT deducted ($150); domestic marginal rate 40% | DTR = lower of $150 (WHT) or $400 (domestic tax); credit = $150; net tax = $250 |
| T-5 | Sell 100 shares: bought at $50, sold at $80; held 18 months; US long-term | Gain = $3,000; rate = 15% (assuming 15% bracket); tax = $450 |
| T-6 | Interest income £1,500; basic rate taxpayer; UK PSA £1,000 | Taxable interest = £500; tax = £500 × 20% = £100 |
| T-7 | Partially franked AU dividend: $500 franked portion (30% rate), $200 unfranked | Franking credit = $214.29; gross-up franked = $714.29; total assessable = $914.29 |
| T-8 | DRIP: 50 shares reinvested at $20/share ($1,000 reinvested dividend) | Taxable dividend income = $1,000; new cost basis of 50 shares = $20 each |

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
