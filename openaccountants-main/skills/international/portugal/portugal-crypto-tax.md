---
name: portugal-crypto-tax
description: >
  Use this skill whenever asked about Portugal cryptocurrency or digital asset taxation. Trigger on phrases like "crypto tax Portugal", "Bitcoin Portugal", "criptoativos IRS", "cryptocurrency gains Portugal", "crypto income Portugal", "staking Portugal", "mining income Portugal", "NFT tax Portugal", "NHR crypto", "IFICI crypto", "non-habitual resident crypto", "Modelo 3 crypto", "Anexo G crypto", "Anexo G1 crypto", "365 days crypto Portugal", "Autoridade Tributária crypto", "Binance Portugal tax", "Coinbase Portugal tax", "DeFi tax Portugal", or any question about the income tax, capital gains, or VAT treatment of cryptocurrency, tokens, or digital assets for Portuguese tax residents or Portugal-source crypto income. Covers the 365-day exemption, 28% short-term rate, Category B mining/staking, NFT exclusion, FIFO method, NHR/IFICI regime, and DAC8 reporting. ALWAYS read this skill before touching any Portugal crypto work.
version: 1.0
jurisdiction: PT
tax_year: 2025
category: crypto
depends_on:
  - portugal-income-tax
verified_by: pending
---

# Portugal Crypto / Digital Assets Tax Skill v1.0

---

## Section 1 — Quick Reference

| Field | Value |
|---|---|
| Country | Portugal (República Portuguesa) |
| Tax | IRS — Imposto sobre o Rendimento das Pessoas Singulares |
| Currency | EUR (all values must be in EUR at transaction date) |
| Tax year | Calendar year (1 January – 31 December) |
| Primary authority | Código do IRS (CIRS), Articles 10.º, 12.º-A, 28.º, 31.º, 72.º; Lei n.º 24-D/2022 (Orçamento do Estado 2023) — crypto provisions |
| Key reform | OE 2023 introduced crypto taxation from 1 January 2023 — before this date, crypto gains for individuals were NOT taxable |
| Tax authority | Autoridade Tributária e Aduaneira (AT) |
| Filing portal | Portal das Finanças (portaldasfinancas.gov.pt) |
| Filing deadline | 1 April – 30 June of the following year |
| EU reporting | DAC8 — crypto platforms report from 2026; Portuguese-registered platforms already report since 2024 (by 31 January annually) |
| Validated by | Pending — requires sign-off by a Portuguese contabilista certificado or advogado tributarista |
| Skill version | 1.0 |

### The 365-Day Exemption — Portugal's Headline Rule

| Holding Period | Tax Treatment |
|---|---|
| **< 365 days** | Taxable at **28% flat rate** (taxa autónoma) with option for englobamento (progressive rates) |
| **≥ 365 days** | **EXEMPT from IRS** — but must still be declared in Anexo G1 |

This exemption applies to crypto-assets that are NOT classified as securities (valores mobiliários). It does not apply to professional traders (Category B).

### Crypto Classification Under IRS

| Activity | IRS Category | Tax Treatment |
|---|---|---|
| Capital gains on crypto held < 365 days | Category G (Mais-valias) | 28% flat or progressive rates (englobamento) |
| Capital gains on crypto held ≥ 365 days | Category G — exempt | 0% (must still declare in Anexo G1) |
| Staking / lending / yield farming rewards | Category E (Rendimentos de capitais) | 28% flat or progressive rates (englobamento) |
| Mining / issuance of crypto | Category B (Rendimentos empresariais e profissionais) | Progressive rates 14.5%–53% |
| Professional/habitual crypto trading | Category B | Progressive rates 14.5%–53% |
| Crypto-to-crypto swap | NOT a taxable event | Cost basis carries forward to new asset |
| NFT income | Excluded from crypto tax regime | See Section 6 |

### Conservative Defaults

| Ambiguity | Default |
|---|---|
| Unknown holding period | Treat as < 365 days (taxable at 28%) |
| Unknown whether activity is occasional or habitual | Treat as occasional (Category G/E) unless clear business indicators |
| Unknown cost basis | STOP — cannot compute gain without acquisition cost |
| Unknown residency status | STOP — affects worldwide vs source taxation |
| Staking reward: unclear if passive or business | Treat as Category E (passive — 28%) |
| Crypto received as payment for work | Category A (employment) or Category B (self-employment) — not Category G |

---

## Section 2 — Required Inputs and Refusal Catalogue

### Required Inputs

**Minimum viable** — transaction history from exchange(s) or wallet(s), confirmation of Portuguese tax residency, holding periods for all disposals, and indication of whether activity is occasional or professional.

**Recommended** — full CSV exports from all exchanges used (Binance, Coinbase, Kraken, Revolut, etc.), wallet addresses with on-chain history, acquisition dates and costs for each holding, record of staking/lending/mining activity, and NHR/IFICI status if applicable.

**Ideal** — complete portfolio tracker export (e.g. CoinTracking, Koinly), DeFi protocol interaction history with dates, documentation of all holding periods (acquisition date proof), and records of any token airdrops.

### Refusal Catalogue

**R-PTC-1 — Residency unknown.** "Portuguese tax residents are subject to IRS on worldwide income. Non-residents are only taxed on Portugal-source income. Cannot proceed without confirming tax residency status."

**R-PTC-2 — No transaction records or holding period proof.** "The 365-day exemption is the most valuable benefit in PT crypto taxation. Without proof of acquisition dates, the AT may deny the exemption. Cannot proceed without complete records."

**R-PTC-3 — Corporate crypto holdings.** "Companies holding crypto are subject to IRC (Imposto sobre o Rendimento das Pessoas Coletivas) with different rules. This skill covers individuals (IRS) only. Escalate to a contabilista certificado."

**R-PTC-4 — Category B classification disputes.** "Whether crypto activity constitutes a professional/business activity (Category B) depends on regularity, volume, and intent. Category B overrides Categories G and E. Escalate to a qualified professional."

**R-PTC-5 — Securities tokens.** "Crypto-assets that qualify as valores mobiliários (securities) have different tax treatment and do not benefit from the 365-day exemption. Escalate for classification."

---

## Section 3 — Rate Tables

### 3.1 Category G — Capital Gains (Short-Term, < 365 Days)

| Option | Rate | When Beneficial |
|---|---|---|
| Taxa autónoma (autonomous/flat rate) | **28%** | Default — beneficial when total income would place you in a marginal bracket > 28% |
| Taxa autónoma (blacklisted jurisdiction) | **35%** | If counterparty is in a tax haven (listed in Portaria 150/2004) |
| Englobamento (aggregation with progressive rates) | **14.5%–53%** | Beneficial when total annual income (including crypto gains) < ~€23,000 |

**2025 IRS Progressive Rates (for englobamento):**

| Taxable Income | Rate |
|---|---|
| Up to €7,703 | 14.5% |
| €7,704 – €11,623 | 21% |
| €11,624 – €16,472 | 26.5% |
| €16,473 – €21,321 | 28.5% |
| €21,322 – €27,146 | 35% |
| €27,147 – €39,791 | 37% |
| €39,792 – €51,997 | 43.5% |
| €51,998 – €81,199 | 45% |
| Over €81,199 | 48% (+ 2.5% solidarity surcharge > €80,000 and 5% > €250,000 = effective up to 53%) |

**Citation:** Código do IRS, Article 72.º, n.º 1, alínea d) (28% rate); Article 68.º (progressive rates); Lei n.º 24-D/2022 (OE 2023 crypto provisions).

### 3.2 Category E — Investment Income (Staking, Lending)

| Scenario | Rate |
|---|---|
| Staking / lending rewards (paid in fiat or converted to fiat) | 28% (taxa liberatória or taxa especial) |
| Staking / lending rewards (received in crypto, not yet converted) | **Not immediately taxable** — taxed at 28% upon conversion to fiat |
| Income from tax haven jurisdiction | 35% |
| Englobamento option | Available — progressive rates may be cheaper |

**Critical nuance:** When staking rewards are received in the same crypto (e.g. staking SOL and receiving SOL rewards), there is **no immediate taxation**. Tax is triggered only when the rewards are converted to fiat currency or used for purchases. This is confirmed by the Belim Tax Law Office interpretation of CIRS provisions and AT guidance.

**Citation:** CIRS Article 5.º (rendimentos de capitais); Article 71.º, n.º 1 (taxa liberatória 28%); Article 72.º, n.º 1, alínea d) (taxa especial 28%).

### 3.3 Category B — Business Income (Mining, Professional Trading)

| Regime | Tax Base | Rate |
|---|---|---|
| Regime simplificado (turnover < €200,000) | 15% of gross crypto revenue is treated as taxable income (coefficient 0.15 for sales; 0.95 for services) | Progressive rates on deemed income |
| Regime simplificado — mining specifically | Field 422 of Quadro 4-A, Anexo B | Progressive rates |
| Contabilidade organizada (organised accounting) | Actual profit = revenue − documented expenses | Progressive rates 14.5%–53% |

**Note:** Under the simplified regime, only 15% of revenue from crypto sales is considered taxable (a 85% automatic deduction), making the effective rate very low. However, this only applies to genuine Category B activities. For mining specifically, the coefficient is 0.95 (field 422), meaning 95% is taxable.

**Citation:** CIRS Article 31.º (simplified regime coefficients); Article 28.º (Category B scope).

---

## Section 4 — Cost Basis Methods

### 4.1 FIFO — Required

| Method | Status |
|---|---|
| FIFO (First In, First Out) | **Mandatory** — required under CIRS Article 44.º and 48.º for determining acquisition value |
| LIFO | Not permitted |
| Average cost | Not permitted |
| Specific identification | Not permitted |

### 4.2 Cost Basis Components

The acquisition value (valor de aquisição) includes:
- Purchase price in EUR (converted at exchange rate on acquisition date)
- Exchange fees and commissions on acquisition
- Network/gas fees directly attributable to the acquisition

The disposal value (valor de realização) includes:
- Sale proceeds in EUR (or market value if disposal is for non-fiat consideration)
- Per CIRS Article 44.º

Deductible expenses (despesas e encargos):
- Necessary expenses actually incurred in the acquisition and disposal of the crypto-asset

### 4.3 Crypto-to-Crypto Swaps — NOT Taxable

This is a fundamental difference from most EU jurisdictions. When swapping one crypto for another (e.g. BTC → ETH):

- **No taxable event is triggered**
- The cost basis of the original asset **carries forward** to the new asset
- The holding period for the 365-day exemption **resets** from the date of the swap (conservative interpretation — the AT has not provided definitive guidance on holding period continuity for swaps)
- Tax is only triggered when crypto is ultimately converted to **fiat currency** (EUR, USD, etc.) or used to **purchase goods/services**

**Conservative default on holding period:** Treat each swap as a new acquisition for 365-day purposes. Flag for professional review if the holding-period-continuity interpretation is critical to the tax outcome.

---

## Section 5 — DeFi, Staking, Mining, and Airdrop Treatment

### 5.1 Staking and Lending

| Type | Category | Treatment |
|---|---|---|
| Staking rewards received in same crypto | Category E | **Not immediately taxable** — taxed at 28% only when converted to fiat |
| Staking rewards received in fiat | Category E | Taxable at 28% (or progressive rates via englobamento) in the year received |
| Lending interest received in fiat | Category E | Taxable at 28% in the year received |
| Lending interest received in crypto | Category E | Not immediately taxable — taxed on conversion to fiat |
| Staking/validation as regular business | Category B | Progressive rates (overrides Category E) |

### 5.2 Mining

| Scenario | Category | Treatment |
|---|---|---|
| Occasional mining (hobby) | Likely Category E | 28% on conversion to fiat |
| Habitual mining (dedicated infrastructure) | Category B | Progressive rates 14.5%–53%, declared in Anexo B |
| Mining specifically | Category B, field 422 | Coefficient 0.95 under simplified regime |

**Category B overrides Category E when activity is habitual.** Per CIRS rules, if there is an established pattern of professional/business activity, it takes precedence.

### 5.3 Airdrops

| Type | Treatment |
|---|---|
| Gratuitous airdrop (no action required) | Not immediately taxable; cost basis = €0; taxed on disposal |
| Airdrop for service rendered | Category B or Category E depending on context |
| Airdrop received by business operator | Category B income |

### 5.4 DeFi Protocols

| Activity | Treatment |
|---|---|
| Providing liquidity to DEX pools | Adding crypto to pool — not a taxable event (crypto-to-crypto logic); LP token received carries forward cost basis of deposited assets |
| Yield farming rewards in crypto | Category E — not immediately taxable until conversion to fiat |
| Impermanent loss | Not a recognised tax event (loss recognised only on actual disposal for fiat) |
| Governance token rewards | Cost basis = €0 (gratuitous); taxed on disposal for fiat after holding period analysis |

### 5.5 Hard Forks

No specific AT guidance. Conservative treatment:
- Cost basis of original coin: unchanged
- Cost basis of forked coin: €0
- 365-day holding period for forked coin: starts from fork date
- Tax triggered on disposal to fiat

---

## Section 6 — NFT Treatment

**NFTs are expressly excluded from the Portuguese crypto tax regime.**

| Rule | Detail |
|---|---|
| Legal basis | Lei n.º 24-D/2022 (OE 2023) — NFTs ("tokens não fungíveis") are classified as unique digital assets and excluded from the criptoativos tax rules |
| Capital gains on NFT sales | Currently NOT taxable for private individuals (no specific tax provision) |
| Creating and selling NFTs | May be Category B business income if habitual (as a creative/artistic activity) |
| NFT royalties | Potentially Category B or Category E depending on regularity |
| NFTs as securities | If an NFT represents a security (financial instrument), it falls under the securities regime, not the crypto-asset regime |

**Warning:** The NFT exclusion is one of the most favourable aspects of Portuguese crypto taxation. However, the AT or future legislation may change this treatment. Monitor OE (Orçamento do Estado) updates annually.

---

## Section 7 — Reporting Requirements

### 7.1 Modelo 3 — Annual IRS Return

| Anexo | Content | When Used |
|---|---|---|
| **Anexo G** (Quadro 18) | Taxable capital gains — crypto held < 365 days | When you sold crypto held < 365 days at a gain (or loss) |
| **Anexo G** (Quadro 18A) | Capital gains where counterparty is in non-EU/EEA jurisdiction without tax treaty | Specific foreign counterparty situations |
| **Anexo G1** (Quadro 7) | Exempt capital gains — crypto held ≥ 365 days | **Mandatory even though exempt** — must declare for AT tracking |
| **Anexo E** | Category E investment income (staking, lending) | When staking/lending rewards were received or converted to fiat |
| **Anexo B** (Quadro 4-A) | Category B business income (mining, professional trading) | Field 419: crypto trading/services; Field 422: mining |
| **Anexo B** (Quadro 13G) | Supplementary crypto business information | Required when filing Anexo B for crypto activity |

### 7.2 Filing Details

| Item | Detail |
|---|---|
| Filing deadline | 1 April – 30 June of the following year |
| Payment deadline | 31 August of the following year |
| Platform | Portal das Finanças (portaldasfinancas.gov.pt) |
| Mandatory declaration | Even if gains are exempt (≥ 365 days), they must be declared in Anexo G1 |

### 7.3 Exchange Reporting

Crypto-asset service providers registered in Portugal are required to report all client transactions to the AT by 31 January of the following year. DAC8 will extend this to EU-wide platforms from 2026.

### 7.4 Record-Keeping

| Requirement | Detail |
|---|---|
| Retention period | 4 years from end of relevant tax year (Article 128.º CIRS) — extended to 12 years if AT opens investigation |
| Records to maintain | Transaction logs with dates (critical for 365-day proof), cost basis records, FIFO ledger, staking/mining logs, wallet addresses |
| Holding period proof | **Essential** — acquisition date documentation is the most important record for claiming the 365-day exemption |
| Format | Exchange CSV exports, blockchain explorer records, portfolio tracker data |

---

## Section 8 — Loss Offset and Carry-Forward

### 8.1 Category G Losses (Short-Term)

| Rule | Detail |
|---|---|
| Same-year offset | Capital losses from crypto (< 365 days) can offset capital gains from crypto (< 365 days) within Category G |
| Cross-category offset | Category G losses CANNOT offset Category E or Category B income |
| Carry-forward | Capital losses in Category G can be carried forward for **5 years** (CIRS Article 55.º) |
| Englobamento requirement | To carry forward losses, you MUST opt for englobamento in both the loss year and the subsequent years |

### 8.2 Category E Losses

Category E income (staking/lending) cannot generate losses in the traditional sense — it is taxed on receipt. No carry-forward applies.

### 8.3 Category B Losses

| Rule | Detail |
|---|---|
| Same-year offset | Category B losses can offset Category B income |
| Carry-forward | **12 years** under CIRS Article 55.º, n.º 1, alínea a) |
| Cross-category | Cannot offset other categories |

### 8.4 Tax Haven Limitation

If the counterparty is in a tax haven jurisdiction (per Portaria 150/2004), the rate is 35% and loss offset rules may be restricted.

---

## Section 9 — Anti-Avoidance Rules

### 9.1 General Anti-Abuse (Cláusula Geral Anti-Abuso)

Article 38.º, n.º 2 of the Lei Geral Tributária (LGT) provides a general anti-abuse rule. The AT can disregard arrangements that are:
- Wholly or partly artificial
- Structured with the essential purpose of obtaining a tax advantage
- Contrary to the intent of the legislation

### 9.2 Specific Crypto Anti-Avoidance

| Measure | Detail |
|---|---|
| Exit taxation | If you lose Portuguese tax residency, unrealised crypto gains are deemed disposed of at market value on the date of departure — potentially taxable (CIRS Article 10.º, n.º 22) |
| Tax haven surcharge | Income from/transactions with entities in tax haven jurisdictions: 35% rate (CIRS Article 72.º, n.º 17) |
| Transfer pricing | Related-party transactions valued at arm's length (CIRS Article 43.º, n.º 9, referencing IRC Article 63.º, n.º 4) |
| Exchange reporting | Portuguese platforms report client data to AT since 2024; DAC8 from 2026 |
| Penalties | Failure to declare: fines from €375 to €22,500 (depending on intent and amount); tax fraud: criminal liability |

### 9.3 NHR / IFICI Regime and Crypto

**NHR (Non-Habitual Resident) — Original regime (pre-2024 registrations):**

| Income Type | NHR Treatment |
|---|---|
| Long-term crypto gains (≥ 365 days) | Already exempt under general rules — NHR adds nothing |
| Short-term crypto gains (< 365 days) | Taxable at 28% — NHR does NOT generally exempt PT-source capital gains |
| Staking/lending (Category E) | If foreign-source: may be exempt under NHR (20% flat on PT-source qualified income) |
| Mining (Category B) | Taxable at progressive rates — NHR 20% flat applies only to "high-value-added" activities |

**IFICI (Incentivo Fiscal à Investigação Científica e Inovação) — New regime from 2024:**

The NHR regime was replaced by IFICI for new registrations from 2024. IFICI has a narrower scope targeting scientific research and innovation, with a 20% flat rate on qualifying employment/self-employment income. It does NOT provide broad crypto tax benefits.

**Bottom line:** Neither NHR nor IFICI significantly benefits crypto holders, because the 365-day exemption is already available to all Portuguese residents.

---

## Section 10 — Worked Examples

### Example 1 — Short-Term Gain (< 365 Days)

**Input:** Portuguese tax resident. Bought 2 BTC at €30,000 each on 1 March 2025. Sold 2 BTC at €50,000 each on 1 November 2025 (8 months holding — < 365 days). Exchange fees: €200 total on acquisition, €300 on disposal. Annual employment income: €40,000.

**Computation:**
```
Disposal value:     2 × €50,000 = €100,000
Less disposal fees:               −€300
Net disposal:                      €99,700

Acquisition cost:   2 × €30,000 = €60,000
Plus acq. fees:                    +€200
Total cost:                        €60,200

Capital gain:       €99,700 − €60,200 = €39,500

Option A — 28% flat rate (taxa autónoma):
  €39,500 × 28% = €11,060

Option B — Englobamento:
  Total income: €40,000 (salary) + €39,500 (crypto) = €79,500
  Marginal rate at €79,500 ≈ 45%
  Englobamento is MORE expensive → Choose flat rate.

Tax: €11,060 (flat rate preferred)
Reported in: Anexo G, Quadro 18
```

### Example 2 — Long-Term Gain (≥ 365 Days) — Exempt

**Input:** Portuguese tax resident. Bought 5 ETH at €1,500 each on 15 January 2024. Sold 5 ETH at €4,000 each on 20 February 2025 (401 days holding — ≥ 365 days). Exchange fees: €100 total.

**Computation:**
```
Capital gain:  (5 × €4,000) − (5 × €1,500) − €100 = €12,400

Holding period: 401 days ≥ 365 → EXEMPT

Tax: €0
Reported in: Anexo G1, Quadro 7 (mandatory declaration
  even though exempt)
```

### Example 3 — Staking Rewards (Category E)

**Input:** Portuguese tax resident. Staked SOL on a Portuguese-registered exchange throughout 2025. Received 50 SOL in staking rewards. 30 SOL were converted to EUR at €150 each (= €4,500). 20 SOL remain in the staking wallet (not converted).

**Computation:**
```
Converted portion:  30 SOL × €150 = €4,500
  Tax: €4,500 × 28% = €1,260 (taxa liberatória,
  withheld by Portuguese exchange)

Unconverted portion: 20 SOL — NOT immediately taxable
  (rewards received in same crypto, not yet converted to fiat)
  Cost basis of these 20 SOL = €0 for future disposal
  365-day holding starts from receipt date

Total tax for 2025: €1,260
Reported in: Anexo E (for converted portion)
```

---

## Self-Checks

Before delivering any Portugal crypto tax computation, verify:

- [ ] Residency confirmed — Portuguese tax resident (worldwide) or non-resident?
- [ ] Holding period calculated for every disposal — is it ≥ or < 365 days?
- [ ] FIFO applied per coin type across all exchanges and wallets
- [ ] Crypto-to-crypto swaps treated as non-taxable (cost basis carried forward)
- [ ] NFTs correctly excluded from crypto tax regime
- [ ] Staking rewards in crypto: not immediately taxable (only on fiat conversion)
- [ ] Category B indicators assessed — is activity occasional or professional?
- [ ] Englobamento vs flat rate comparison performed
- [ ] Exempt gains (≥ 365 days) still declared in Anexo G1
- [ ] NHR/IFICI status checked — usually irrelevant for crypto
- [ ] Tax haven counterparty risk assessed (35% rate)
- [ ] Output labelled as estimated — flag for professional review

---

## PROHIBITIONS

- NEVER assume Portugal is still a crypto tax haven — gains have been taxable since 1 January 2023
- NEVER apply tax to crypto held for ≥ 365 days (unless professional trading or securities tokens)
- NEVER treat crypto-to-crypto swaps as taxable events — they are NOT taxable in Portugal
- NEVER forget to declare exempt gains in Anexo G1 — omission may trigger penalties
- NEVER assume staking rewards in crypto are immediately taxable — they are taxed only on conversion to fiat
- NEVER classify NFT income under the crypto tax regime — NFTs are expressly excluded
- NEVER ignore the holding period reset question on crypto-to-crypto swaps — use conservative default
- NEVER present crypto tax positions as definitive — always label as estimated and flag for professional review
- NEVER ignore exit taxation risk for individuals losing Portuguese tax residency
- NEVER compute gains without verified acquisition dates — the 365-day exemption depends on provable holding period

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a contabilista certificado, advogado tributarista, or revisor oficial de contas in Portugal) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
