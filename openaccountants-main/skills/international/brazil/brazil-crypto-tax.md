---
name: brazil-crypto-tax
description: >
  Use this skill whenever asked about Brazil cryptocurrency or digital asset taxation. Trigger on phrases like "crypto tax Brazil", "imposto de renda cripto", "Bitcoin Brazil", "criptoativos Brasil", "cryptocurrency gains Brazil", "Receita Federal crypto", "DARF crypto", "GCAP crypto", "staking Brazil", "mining income Brazil", "NFT tax Brazil", "Binance Brazil", "Mercado Bitcoin", "IN 1888", "Instrução Normativa 1888", "IRPF crypto", "ganho de capital crypto", or any question about the income tax, capital gains, or reporting obligations for cryptocurrency, tokens, or digital assets for Brazilian tax residents. Covers progressive capital gains rates, monthly R$35,000 de minimis threshold, IN RFB 1,888/2019 reporting, DARF payments, IRPF annual declaration, and Crypto Framework Law 14,478/2022. ALWAYS read this skill before touching any Brazil crypto work.
version: 1.0
jurisdiction: BR
tax_year: 2025
category: crypto
depends_on:
  - brazil-income-tax
verified_by: pending
---

# Brazil Crypto / Digital Assets Tax Skill v1.0

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Brazil (República Federativa do Brasil) |
| Tax | Imposto de Renda (Income Tax) — Capital Gains on Crypto |
| Currency | BRL (all values must be in BRL at transaction date) |
| Tax year | Calendar year (1 January -- 31 December) |
| Primary legislation | Lei 7,713/1988 (Art. 3 §3); Lei 8,981/1995 (Art. 21); Lei 13,259/2016 (progressive CG rates) |
| Regulatory framework | Instrução Normativa RFB 1,888/2019 (monthly reporting); Law 14,478/2022 (Crypto Framework Law) |
| Tax authority | Receita Federal do Brasil (RFB) — Brazilian Federal Revenue |
| Filing portal | e-CAC (Centro Virtual de Atendimento ao Contribuinte) |
| Annual return | IRPF (Declaração de Ajuste Anual do Imposto de Renda da Pessoa Física) |
| Annual filing deadline | Last business day of May of the following year (e.g. 29 May 2026 for tax year 2025) |
| Monthly obligation | DARF (Documento de Arrecadação de Receitas Federais) — code 4600 |
| Monthly payment deadline | Last business day of the month following the disposal |
| Validated by | Pending — requires sign-off by a Brazilian contador (CRC-registered accountant) |
| Skill version | 1.0 |

### Tax Rate Summary (2025)

| Item | Rate / Threshold |
|---|---|
| Capital gains (progressive rates) | 15% / 17.5% / 20% / 22.5% (see Section 3) |
| Monthly de minimis exemption | Disposals ≤ **R$35,000** in total across all exchanges in a month → gains **exempt** |
| Monthly reporting threshold (IN 1,888) | Operations > **R$30,000/month** outside Brazilian exchanges → must report to RFB |
| Annual declaration threshold | Holdings ≥ **R$5,000** per crypto type at 31 December → must declare in IRPF |

### Conservative Defaults

| Ambiguity | Default |
|---|---|
| Unknown cost basis | STOP — cannot compute gain without custo de aquisição |
| Unknown residency | STOP — Brazil taxes worldwide income only for tax residents |
| Disposal amount near R$35,000 threshold | Compute precisely across ALL exchanges/wallets combined |
| Unknown whether to file IN 1,888 | File if in doubt — penalties for non-filing are severe |
| Token classification unclear | Treat as criptoativo (financial asset) — subject to capital gains |

---

## Section 2 -- Classification Rules

### 2.1 Receita Federal Classification

Receita Federal classifies crypto assets (criptoativos) as "ativos financeiros" (financial assets) / "bens e direitos" (assets and rights). They are not legal tender but are subject to income tax on gains and must be declared in the annual IRPF.

**IRPF Bens e Direitos — Grupo 08 (Criptoativos):**

| Code | Type | Examples |
|---|---|---|
| 01 | Bitcoin (BTC) | BTC |
| 02 | Other cryptocurrencies (altcoins) | ETH, SOL, ADA, XRP, LTC, BNB |
| 03 | Stablecoins | USDT, USDC, DAI, BRZ, BUSD |
| 10 | NFTs (Non-Fungible Tokens) | Digital art, collectibles, gaming items |
| 99 | Other crypto-assets | Utility tokens, governance tokens, DeFi tokens, security tokens |

### 2.2 Taxable Events

| Event | Taxable? | Notes |
|---|---|---|
| Crypto → BRL (sell on exchange) | Yes | Gain = proceeds − custo de aquisição (cost basis) |
| Crypto → crypto (swap) | Yes | Each swap is a taxable disposal; gain/loss at FMV |
| Crypto → goods/services | Yes | Disposal at FMV of goods/services received |
| Receiving crypto as payment | Yes | Income at FMV when received |
| Transfer between own wallets | No | No change in beneficial ownership |
| Donation of crypto | Potentially | ITCMD (state inheritance/gift tax) may apply; not federal income tax |
| Inheritance of crypto | Potentially | ITCMD at state level; cost basis = FMV at date of death or declared value |

---

## Section 3 -- Rate Tables and Computation

### 3.1 Capital Gains Tax — Progressive Rates

**Legal basis:** Lei 13,259/2016, Art. 1; Lei 8,981/1995, Art. 21.

| Gain Bracket (BRL) | Rate |
|---|---|
| Up to R$5,000,000 | **15%** |
| R$5,000,001 to R$10,000,000 | **17.5%** |
| R$10,000,001 to R$30,000,000 | **20%** |
| Above R$30,000,000 | **22.5%** |

These are **marginal rates** — each bracket applies only to the portion of gain within that range.

### 3.2 Monthly De Minimis Exemption

| Parameter | Value |
|---|---|
| Threshold | Total disposals (alienações) ≤ **R$35,000** in a calendar month |
| Scope | Sum of ALL crypto disposals across ALL exchanges and wallets in the month |
| Effect | If total disposal amount ≤ R$35,000 → gains are **exempt** from tax |
| If exceeded | Tax is due on the **entire gain** (not just the excess above R$35,000) |

**Critical:** The R$35,000 threshold is based on total **disposal proceeds** (not gains), and it is calculated across **all platforms combined** — not per exchange.

### 3.3 Monthly DARF Payment

| Parameter | Value |
|---|---|
| DARF code | **4600** (IRPF — Ganho de Capital — Alienação de Criptoativo) |
| Due date | Last business day of the month following the disposal |
| Computation tool | GCAP (Programa de Apuração dos Ganhos de Capital) — Receita Federal software |
| Late payment penalty | 0.33% per day (max 20%) + Selic interest |
| Generation | Via GCAP program or Sicalc Web (receita.fazenda.gov.br) |

**Computation formula:**
```
Monthly gain = Σ(disposal proceeds − cost basis) for all crypto disposals in the month
If total disposal proceeds > R$35,000:
  Tax = apply progressive rates to total gain
Else:
  Tax = R$0 (exempt)
```

---

## Section 4 -- Cost Basis Methods

### 4.1 Accepted Method

| Method | Status | Notes |
|---|---|---|
| **Average cost per unit (custo médio)** | **Standard / default** | Receita Federal requires weighted average cost |
| Specific identification | Not standard | Not the default method under RFB guidance |
| FIFO / LIFO | Not standard | Not prescribed by Receita Federal for individuals |

**The standard method for Brazilian individuals is weighted average cost per unit**, calculated as:

```
New average cost = (previous total cost + new acquisition cost) / total units held
```

### 4.2 Cost Basis Components

- Purchase price in BRL (convert foreign currency at PTAX rate on acquisition date)
- Exchange/trading fees and commissions
- Network/gas fees directly attributable to the acquisition
- Transfer fees

### 4.3 Declaring Cost Basis in IRPF

- Always use **acquisition cost** (custo de aquisição), never market value
- Report in "Bens e Direitos" → Grupo 08 → appropriate code
- "Situação em 31/12/2024" = cost basis at end of prior year
- "Situação em 31/12/2025" = updated cost basis at end of current year
- If fully sold during the year, enter R$0.00 for the current year-end position

---

## Section 5 -- DeFi, Staking, Mining, and Airdrops

| Activity | Tax Treatment | Timing | Notes |
|---|---|---|---|
| Mining (individual, occasional) | Income at FMV when tokens are sold | At disposal | Cost basis = expenses incurred (electricity, etc.) if documented; otherwise zero |
| Mining (business/professional) | Business income (Pessoa Jurídica or MEI) | At receipt or at disposal per accounting | Subject to corporate taxes (Simples, Lucro Presumido, or Lucro Real) |
| Staking rewards | Income at FMV when received → establishes cost basis | At receipt (for cost basis); gain at disposal | Treat as "rendimentos" — must include in IRPF; subject to CG on disposal |
| DeFi lending interest | Income at FMV when received | At receipt | Similar to financial income; may be classified as "rendimentos de aplicação financeira" |
| Liquidity provision | Adding to pool = potential disposal (swap); LP tokens = new acquisition | At each event | Each side of a liquidity add/remove is a taxable event if >R$35k/month |
| Yield farming | Income at FMV when received | At receipt | Each token receipt establishes a new cost basis |
| Airdrops (gratuitous) | Cost basis = R$0; taxable on disposal if monthly disposals >R$35,000 | At disposal | Must still be declared in IRPF Bens e Direitos if value ≥R$5,000 |
| Airdrops (service-related) | Income at FMV when received | At receipt | Include in "Rendimentos Tributáveis Recebidos de PF/Exterior" |
| Hard forks | New coins: cost basis = R$0 | At disposal | Must declare in IRPF; original coin cost basis unchanged |

---

## Section 6 -- NFT Treatment

| Scenario | Treatment |
|---|---|
| Purchase of NFT | Acquisition at cost — cost basis (Grupo 08, Code 10 in IRPF) |
| Sale of NFT for profit | Capital gain; subject to R$35,000/month de minimis and progressive rates |
| Creation and sale (artist/creator) | If habitual → business income (MEI, Simples, or Lucro Presumido); if occasional → redditos diversos via GCAP |
| NFT → NFT swap | Taxable event — each side valued at FMV |
| NFT royalties (smart contract) | Income at FMV when received; declare as rendimentos |
| Must declare in IRPF | Yes, if acquisition cost ≥ R$5,000 at 31 December |

---

## Section 7 -- Reporting Requirements

### 7.1 Monthly Reporting — IN RFB 1,888/2019

**Legal basis:** Instrução Normativa RFB 1,888 (3 May 2019), as amended by IN RFB 2,065/2022.

| Who Must Report | When | How |
|---|---|---|
| **Brazilian exchanges** (e.g. Mercado Bitcoin, Foxbit, NovaDAX) | Monthly, all transactions regardless of amount | Automatic — exchange reports to RFB |
| **Individuals** operating through foreign exchanges (Binance, Coinbase, Kraken, etc.) or P2P | Monthly, if total operations > **R$30,000** in the month | Via e-CAC, "Coleta Nacional" system |
| **Legal entities** operating through foreign exchanges | Monthly, if total operations > **R$30,000** in the month | Via e-CAC |

**Deadline:** Last business day of the month following the operations.

**Penalties for non-compliance (Art. 10, IN 1,888):**
- Individuals: up to 1.5% of the undeclared transaction value
- Legal entities: up to 3% of the undeclared transaction value
- Late filing: from R$100 per month of delay
- DARF code for penalties: 5720

### 7.2 Monthly GCAP / DARF Payment

| Step | Detail |
|---|---|
| 1. Calculate gains | Use GCAP software for each month with disposals > R$35,000 |
| 2. Generate DARF | Code 4600; period = month/year of disposal |
| 3. Pay DARF | By last business day of the following month |
| 4. Import to IRPF | At year-end, import GCAP data into the annual IRPF declaration |

### 7.3 Annual IRPF Declaration

| Section | Purpose | Who Must File |
|---|---|---|
| **Bens e Direitos, Grupo 08** | Declare all crypto holdings at acquisition cost | Anyone holding ≥ R$5,000 in any crypto type at 31 December |
| **Rendimentos Isentos e Não Tributáveis** | Report exempt gains (months with disposals ≤ R$35,000) | Anyone who had exempt crypto gains |
| **Rendimentos Sujeitos à Tributação Exclusiva** | Report gains already taxed via DARF | Anyone who paid DARF on crypto gains |
| **Dívidas e Ônus Reais** | Report any crypto-related debts/loans | If applicable |

**"Discriminação" field must include:** quantity held, token name/symbol, exchange or custody method (Brazilian exchange, foreign exchange, or self-custody wallet), and acquisition date.

**From IRPF 2025:** taxpayers must indicate whether crypto is held in Brazil (location 105) or abroad (location 106).

### 7.4 Law 14,478/2022 — Crypto Framework Law

This law (enacted 21 December 2022, effective 20 June 2023) establishes the regulatory framework for virtual asset service providers (VASPs) in Brazil. While primarily regulatory (not tax), it affects tax compliance by:

- Requiring VASPs to register with the Central Bank of Brazil (BCB)
- Mandating AML/KYC compliance for exchanges operating in Brazil
- Enabling better information sharing between exchanges and Receita Federal
- BCB designated as primary regulator (Decree 11,563/2023)

### 7.5 Decripto — Successor to IN 1,888

Receita Federal has been developing "Decripto" to replace the IN 1,888 reporting framework. This system provides more standardised data formats, enhanced cross-referencing capabilities, and reduced margin for reporting inconsistencies. Taxpayers should monitor RFB announcements for implementation timelines.

---

## Section 8 -- Loss Offset and Carry-Forward

| Rule | Detail |
|---|---|
| Netting within month | Crypto losses can offset crypto gains **within the same month** |
| Cross-month netting | Losses from one month **cannot** be carried forward to offset gains in future months |
| Cross-asset netting | Crypto losses **cannot** offset gains from other asset classes (e.g. stocks, real estate) |
| Carry-forward | **Not permitted** for individual capital gains tax purposes |
| Carry-back | **Not permitted** |
| Strategic implication | Taxpayers should time disposals to net gains and losses within the same calendar month |

**Critical difference from other jurisdictions:** Brazil does not allow carry-forward of crypto capital losses. Losses expire at the end of the month in which they occur.

---

## Section 9 -- Anti-Avoidance Rules

| Rule | Description |
|---|---|
| General anti-avoidance (CTN Art. 116, parágrafo único) | Tax authority can disregard transactions lacking economic substance |
| Transfer pricing | Applicable to cross-border related-party transactions (Lei 14,596/2023, aligned with OECD) |
| Beneficial ownership | Receita Federal may look through nominee arrangements or trusts |
| Structuring / splitting | Deliberately splitting disposals across months to stay under R$35,000 is monitored; if detected as artificial, RFB may aggregate |
| Foreign exchange reporting | CBE (Capitais Brasileiros no Exterior) — annual declaration to BCB for assets abroad >US$1M (quarterly if >US$100M) |
| CFC rules | Brazilian residents with participations in foreign entities in low-tax jurisdictions: income may be attributed annually (Lei 14,754/2023) |

---

## Section 10 -- Worked Examples

### Example 1 -- Monthly Disposal Below R$35,000 (Exempt)

**Input:** Brazilian tax resident. In March 2025, sold 0.5 BTC for R$30,000 on Mercado Bitcoin. Cost basis (average cost): R$20,000.

**Computation:**
```
Disposal proceeds:      R$30,000
Cost basis:             R$20,000
Gain:                   R$10,000

Total disposals in March: R$30,000 (≤ R$35,000 threshold)

Tax due:                R$0 (exempt — total disposals ≤ R$35,000)
```

**Reporting:** Declare gain as "Rendimentos Isentos e Não Tributáveis" in annual IRPF. No DARF required. No IN 1,888 report required (transaction on Brazilian exchange — exchange reports automatically).

### Example 2 -- Monthly Disposal Above R$35,000 (Taxable)

**Input:** Brazilian tax resident. In July 2025:
- Sold 1 BTC for R$50,000 on Binance (foreign exchange). Cost basis: R$30,000.
- Sold 2 ETH for R$15,000 on Coinbase (foreign exchange). Cost basis: R$8,000.

**Computation:**
```
Total disposals in July: R$50,000 + R$15,000 = R$65,000 (> R$35,000 threshold)

BTC gain:  R$50,000 - R$30,000 = R$20,000
ETH gain:  R$15,000 - R$8,000  = R$7,000
Total gain: R$27,000

Tax (progressive rates):
  R$27,000 falls entirely in first bracket (≤ R$5M)
  Tax = R$27,000 × 15% = R$4,050

DARF code:   4600
Due date:    Last business day of August 2025
```

**Reporting:**
1. Pay DARF (R$4,050) by end of August 2025
2. File IN 1,888 via e-CAC (foreign exchange operations >R$30,000 in month)
3. Import GCAP data into annual IRPF (due May 2026)

### Example 3 -- Staking Income and Subsequent Disposal

**Input:** Brazilian tax resident. In 2025:
- Received 1 ETH in staking rewards across the year. FMV at each receipt date totals R$10,000.
- In December, sold the 1 staked ETH for R$12,000 on Mercado Bitcoin.

**Computation:**
```
Staking income:
  Cost basis of received ETH = R$10,000 (FMV at receipt dates)
  Declare as income when received

December disposal:
  Total disposals in December: R$12,000 (≤ R$35,000)
  Gain: R$12,000 - R$10,000 = R$2,000
  Tax: R$0 (exempt — total disposals ≤ R$35,000)
```

**Reporting:** Declare staking income in IRPF. Declare ETH holdings in Bens e Direitos (Grupo 08, Code 02). Exempt gain in "Rendimentos Isentos."

---

## Self-Checks

Before finalising any Brazil crypto tax computation:

- [ ] Confirmed taxpayer is Brazilian tax resident (domicílio fiscal no Brasil)
- [ ] Total monthly disposals calculated across ALL exchanges and wallets combined
- [ ] R$35,000 de minimis threshold correctly applied (based on total disposal proceeds, not gains)
- [ ] DARF generated and paid for each month where disposals exceed R$35,000
- [ ] IN 1,888 monthly report filed for foreign exchange operations >R$30,000
- [ ] Cost basis computed using weighted average cost method
- [ ] All crypto holdings ≥R$5,000 per type declared in IRPF Bens e Direitos (Grupo 08)
- [ ] Exempt gains reported in "Rendimentos Isentos e Não Tributáveis"
- [ ] Taxed gains imported from GCAP to IRPF
- [ ] Staking/mining/airdrop income included and cost basis established
- [ ] No losses carried forward between months (not permitted in Brazil)
- [ ] Foreign exchange holdings reported for CBE if applicable (>US$1M abroad)

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CRC-registered contador, advogado tributarista, or equivalent licensed practitioner in Brazil) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
