---
name: crypto-digital-assets-template
description: Reusable cross-country template for cryptocurrency and digital asset taxation. Covers capital gains vs income classification, cost basis methods (FIFO/LIFO/specific ID), DeFi protocols, NFTs, mining, staking, airdrops, hard forks, and reporting obligations. Adapt by inserting country-specific rates, holding periods, and de minimis thresholds at [COUNTRY-SPECIFIC] placeholders.
version: 1.0
category: template
---

# Crypto & Digital Assets Tax Template v1.0

---

## Section 1 — Quick reference

| Field | Value |
|---|---|
| Jurisdiction | [COUNTRY-SPECIFIC] |
| Tax authority | [COUNTRY-SPECIFIC] |
| Primary legislation | [COUNTRY-SPECIFIC] |
| Tax year | [COUNTRY-SPECIFIC] |
| Capital gains rate (short-term) | [COUNTRY-SPECIFIC] |
| Capital gains rate (long-term) | [COUNTRY-SPECIFIC] |
| Holding period for long-term treatment | [COUNTRY-SPECIFIC] |
| Income tax rate (mining/staking) | [COUNTRY-SPECIFIC — marginal rates] |
| De minimis exemption | [COUNTRY-SPECIFIC — e.g., £3,000 UK, $0 US, AUD $10,000 personal use AU] |
| Reporting form | [COUNTRY-SPECIFIC — e.g., Form 8949 US, SA108 UK, Schedule 3 CA] |
| Wash sale / bed-and-breakfasting rule | [COUNTRY-SPECIFIC — e.g., 30-day US, 30-day UK S104 pool] |
| Filing deadline | [COUNTRY-SPECIFIC] |
| Currency | [COUNTRY-SPECIFIC] |

### Conservative defaults

| Ambiguity | Default |
|---|---|
| Unknown acquisition cost | Zero cost basis (maximises gain) |
| Unknown holding period | Short-term (higher rate) |
| Unknown whether income or capital | Income (higher rate treatment) |
| Unknown fair market value at receipt | Use CoinGecko/CoinMarketCap daily close |
| Unknown cost basis method | FIFO (first in, first out) |
| Airdrop with no clear service performed | Income at FMV on receipt |

---

## Step 0 — Onboarding questions

Before computing, you MUST obtain:

1. **Which digital assets are held?** — BTC, ETH, stablecoins, NFTs, DeFi tokens, etc.
2. **Transaction history source** — exchange CSV exports, on-chain wallet addresses, DeFi protocol records
3. **Acquisition dates and costs** — purchase price per lot in fiat equivalent
4. **Disposal events in the period** — sells, swaps (crypto-to-crypto counts as disposal in most jurisdictions), gifts, payments for goods/services
5. **Mining/staking/yield farming income** — amounts received, FMV at time of receipt
6. **Airdrops and hard forks** — what was received, when, whether any action was required
7. **NFT activity** — minting costs, sales proceeds, royalties received
8. **Cost basis method elected** — FIFO, LIFO, specific identification, average cost (if jurisdiction permits)
9. **Any prior year losses carried forward?**
10. **Personal use asset claim?** — [COUNTRY-SPECIFIC threshold, e.g., AUD $10,000 in Australia]

---

## Step 1 — Classification: capital asset vs trading income

### Decision tree

```
Was the asset acquired with intention to resell at profit
AND does the taxpayer exhibit badges of trade?
  ├─ YES → Trading income (taxed at marginal income rates)
  │         Indicators: high frequency, short hold periods,
  │         sophistication, leveraged positions, business infrastructure
  └─ NO  → Capital asset (taxed at capital gains rates)
            Indicators: buy-and-hold, long-term investment thesis,
            infrequent disposals, personal portfolio
```

| Factor | Points toward INCOME | Points toward CAPITAL |
|---|---|---|
| Holding period | < [COUNTRY-SPECIFIC] days | > [COUNTRY-SPECIFIC] days |
| Transaction frequency | > 100 trades/year | < 20 trades/year |
| Use of leverage | Yes | No |
| Source of funds | Borrowed capital | Own savings |
| Taxpayer's profession | Trader / fin services | Unrelated field |
| Organised activity | Dedicated trading setup | Casual app-based |

[COUNTRY-SPECIFIC: Insert classification test — e.g., UK "badges of trade", AU "carrying on a business", US §1221 capital asset definition]

---

## Step 2 — Cost basis methods

| Method | Description | Jurisdictions permitting |
|---|---|---|
| FIFO | First coins acquired are first sold | [COUNTRY-SPECIFIC] |
| LIFO | Last coins acquired are first sold | [COUNTRY-SPECIFIC] |
| Specific identification | Taxpayer designates which lot sold | [COUNTRY-SPECIFIC] |
| Average cost (pooled) | Weighted average of all acquisitions | [COUNTRY-SPECIFIC — e.g., UK S104 pool, CA superficial loss rule] |
| Highest-in-first-out (HIFO) | Highest cost lots sold first | [COUNTRY-SPECIFIC] |

### Computation per disposal

```
Proceeds (FMV in fiat at time of disposal)
  LESS: Cost basis of disposed units (per elected method)
  LESS: Transaction fees (gas fees, exchange fees, network fees)
  = Gain or (Loss)
```

Apply [COUNTRY-SPECIFIC] holding period test:
- Short-term: held < [COUNTRY-SPECIFIC] → taxed at [COUNTRY-SPECIFIC RATE]
- Long-term: held ≥ [COUNTRY-SPECIFIC] → taxed at [COUNTRY-SPECIFIC RATE]

---

## Step 3 — Taxable events

| Event | Taxable? | Type | FMV basis |
|---|---|---|---|
| Buy crypto with fiat | No | Acquisition | Record cost basis |
| Sell crypto for fiat | Yes | Disposal — capital gain/loss | Proceeds in fiat |
| Crypto-to-crypto swap | Yes (most jurisdictions) | Disposal + acquisition | FMV of asset received |
| Pay for goods/services with crypto | Yes | Disposal | FMV at time of payment |
| Gift crypto (outbound) | [COUNTRY-SPECIFIC] | May trigger CGT | [COUNTRY-SPECIFIC rules] |
| Receive crypto as gift | [COUNTRY-SPECIFIC] | May inherit donor's cost basis | [COUNTRY-SPECIFIC] |
| Transfer between own wallets | No | Not a disposal | No change in cost basis |
| Margin/leveraged trading | Yes | Each close is disposal | Settlement amount |
| Liquidation of position | Yes | Forced disposal | Liquidation proceeds |

---

## Step 4 — DeFi-specific treatment

### 4.1 Staking rewards

| Aspect | Treatment |
|---|---|
| Receipt of staking reward | Income at FMV on date of receipt |
| Subsequent disposal of staked reward | Capital gain/loss from FMV cost basis |
| Cost basis of reward | FMV on date received (becomes acquisition cost) |

### 4.2 Lending / yield farming

| Event | Treatment |
|---|---|
| Deposit tokens into lending protocol | [COUNTRY-SPECIFIC — disposal or not?] |
| Receive interest/yield tokens | Income at FMV on receipt |
| Withdrawal from protocol | [COUNTRY-SPECIFIC — reacquisition?] |
| Impermanent loss (liquidity pools) | [COUNTRY-SPECIFIC — realised on withdrawal?] |

### 4.3 Liquidity pool participation

```
Deposit into LP:
  [COUNTRY-SPECIFIC: Some jurisdictions treat LP token receipt as a disposal
   of underlying assets; others treat it as a non-event until withdrawal]

LP token receipt → record FMV at deposit
Withdrawal → disposal of LP token, reacquisition of underlying
Difference = gain/loss (includes impermanent loss)
```

### 4.4 Wrapped tokens

| Event | Treatment |
|---|---|
| Wrap (e.g., ETH → WETH) | [COUNTRY-SPECIFIC — generally not taxable if 1:1] |
| Unwrap (e.g., WETH → ETH) | [COUNTRY-SPECIFIC — generally not taxable if 1:1] |
| Bridge across chains | [COUNTRY-SPECIFIC — may constitute disposal] |

---

## Step 5 — Mining income

| Aspect | Treatment |
|---|---|
| Hobby mining (occasional, no profit motive) | [COUNTRY-SPECIFIC — may be non-taxable until disposal] |
| Business mining (organised, profit-seeking) | Income at FMV on date mined |
| Deductible expenses (business mining) | Electricity, hardware depreciation, cooling, rent |
| Hardware depreciation | [COUNTRY-SPECIFIC — e.g., 3-year accelerated US, pooled AU] |
| Cost basis of mined coins | FMV at time of mining (if taxed as income on receipt) |

---

## Step 6 — Airdrops and hard forks

### Airdrops

| Scenario | Treatment |
|---|---|
| Airdrop requiring action (claim, hold threshold) | Income at FMV when received/claimed |
| Unsolicited airdrop (no action required) | [COUNTRY-SPECIFIC — income at receipt or zero cost basis?] |
| Airdrop with zero value at receipt | Zero cost basis; full gain on disposal |

### Hard forks

| Scenario | Treatment |
|---|---|
| New coin received from fork (e.g., BCH from BTC) | [COUNTRY-SPECIFIC] |
| Cost basis allocation | [COUNTRY-SPECIFIC — e.g., US: zero basis for new coin; UK: apportion original cost by FMV ratio] |
| Disposal of forked coin | Capital gain from allocated cost basis |

---

## Step 7 — NFT treatment

| Event | Treatment |
|---|---|
| Mint NFT (creator) | No taxable event on creation |
| Sell NFT (creator, primary sale) | Income (if business) or capital gain |
| Buy NFT (collector) | Acquisition — record cost basis |
| Sell NFT (collector) | Capital gain/loss |
| Royalty income (creator, secondary sales) | Income at FMV on receipt |
| NFT swap | Disposal + acquisition (both at FMV) |
| NFT becomes worthless | [COUNTRY-SPECIFIC — negligible value claim?] |

---

## Step 8 — Wash sale and anti-avoidance rules

[COUNTRY-SPECIFIC: Insert applicable anti-avoidance provisions]

| Rule | Jurisdiction | Effect |
|---|---|---|
| Wash sale (30-day) | US (proposed, not enacted for crypto pre-2025) | Loss disallowed if reacquired within 30 days |
| Bed-and-breakfasting (30-day) | UK | Loss disallowed; matched to reacquisition |
| Superficial loss (30-day) | Canada | Loss denied; added to cost of reacquired property |
| [COUNTRY-SPECIFIC rule] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC effect] |

---

## Step 9 — Reporting and record-keeping

### Required records per transaction

- Date and time of transaction (UTC)
- Type (buy/sell/swap/receive/send)
- Asset and quantity
- FMV in local fiat at time of transaction
- Counterparty (exchange, wallet, protocol)
- Transaction hash (on-chain transactions)
- Fees paid (gas, exchange commission)
- Running cost basis per lot

### Reporting obligations

| Form/Schedule | Jurisdiction | Content |
|---|---|---|
| Form 8949 + Schedule D | US | Each disposal: date acquired, date sold, proceeds, cost basis, gain/loss |
| SA108 (Capital Gains) | UK | Summary of crypto gains/losses |
| Schedule 3 | Canada | Each disposition |
| [COUNTRY-SPECIFIC form] | [COUNTRY-SPECIFIC] | [COUNTRY-SPECIFIC] |

---

## Prohibitions

- NEVER assume crypto-to-crypto swaps are non-taxable — they are disposals in most jurisdictions
- NEVER use a cost basis method not permitted by the jurisdiction
- NEVER ignore DeFi yield as non-taxable — receipt of value is generally income
- NEVER apply wash sale rules where the jurisdiction has not enacted them for crypto
- NEVER treat transfers between own wallets as disposals
- NEVER advise on tax positions without verifying the taxpayer's classification (trader vs investor)
- NEVER estimate FMV without a verifiable price source (exchange data, oracle, aggregator)
- NEVER ignore gas/network fees — they are part of cost basis or deductible expense
- NEVER assume airdrops are tax-free — most jurisdictions treat them as income on receipt
- NEVER present outputs as tax advice — direct to a qualified tax professional

---

## Edge Case Registry

| # | Scenario | Correct treatment |
|---|---|---|
| EC-1 | Lost wallet / inaccessible keys | No disposal until formally abandoned; [COUNTRY-SPECIFIC negligible value claim] |
| EC-2 | Theft / hack | [COUNTRY-SPECIFIC — theft loss deduction? Capital loss?] |
| EC-3 | Exchange bankruptcy (e.g., FTX) | Capital loss when confirmed unrecoverable; timing per [COUNTRY-SPECIFIC] |
| EC-4 | Stablecoin depeg | Capital loss on disposal at reduced FMV |
| EC-5 | DAO governance token received for participation | Income at FMV on receipt |
| EC-6 | Play-to-earn gaming rewards | Income at FMV on receipt |
| EC-7 | Cross-chain bridge exploit (funds lost) | Same as theft (EC-2) |
| EC-8 | Token migration (old → new) | Generally not a taxable event if 1:1 swap |
| EC-9 | Margin call / forced liquidation | Disposal at liquidation price |
| EC-10 | Gifting crypto to charity | [COUNTRY-SPECIFIC — possible deduction at FMV] |

---

## Test Suite

| # | Input | Expected output |
|---|---|---|
| T-1 | Buy 1 BTC at $30,000; sell 0.5 BTC at $50,000 (FIFO, held > 1 year) | Gain = (0.5 × $50,000) - (0.5 × $30,000) = $10,000 long-term capital gain |
| T-2 | Swap 2 ETH (cost $3,000 total) for 5,000 USDC | Gain = $5,000 - $3,000 = $2,000 capital gain |
| T-3 | Receive 0.01 ETH staking reward (FMV $25) | Income = $25; cost basis of reward = $25 |
| T-4 | Mine 0.1 BTC (business mining, FMV $4,000); electricity cost $500 | Income = $4,000; deductible expense = $500; cost basis = $4,000 |
| T-5 | Airdrop 1,000 tokens (FMV $0.50 each) requiring claim action | Income = $500; cost basis = $500 |
| T-6 | Transfer 5 ETH from Coinbase to Ledger wallet | Not taxable; no change to cost basis |
| T-7 | Sell NFT minted at cost of 0.1 ETH ($200) for 2 ETH ($4,000) | Gain = $4,000 - $200 = $3,800 |
| T-8 | Provide liquidity (1 ETH + 2000 USDC); withdraw (0.8 ETH + 2200 USDC); ETH FMV at withdrawal = $2500 | Compare withdrawal FMV ($2,000 + $2,200 = $4,200) vs deposit cost basis; gain/loss = difference |

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
