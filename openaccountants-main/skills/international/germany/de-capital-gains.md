---
name: de-capital-gains
description: >
  Use this skill for any German capital gains tax question. Trigger on: "Abgeltungsteuer", "capital gains Germany", "CGT Germany", "Kapitalertragsteuer", "Sparer-Pauschbetrag", "sell shares Germany", "German exit tax", "Wegzugsbesteuerung", "leaving Germany tax shares", "crypto Germany CGT", "German investment gains", "German shareholder 1% rule". Covers Abgeltungsteuer flat rate, annual exemption, offsetting losses, exit tax on departure.
version: 1.0
jurisdiction: DE
tax_year: 2025
category: international
depends_on:
  - de-income-tax
---

# Germany — Capital Gains Tax (Abgeltungsteuer) — Skill v1.0

---

## Section 1 — Quick Reference

| Field | Value |
|---|---|
| Country | Germany |
| System | Abgeltungsteuer (withholding tax on investment income) |
| Rate | 25% + 5.5% solidarity surcharge = **26.375%** total |
| Annual exemption (Sparer-Pauschbetrag) | **€1,000** single / **€2,000** joint (from 2023) |
| Loss offsetting | Capital losses can only offset capital gains |
| Church tax | Additional 8-9% on the 25% base if member |
| Exit tax | Yes — on departure with substantial shareholdings |
| Primary legislation | Einkommensteuergesetz (EStG) §20, §32d |
| Tax authority | Bundeszentralamt für Steuern / local Finanzamt |
| Verified by | Pending — German Steuerberater sign-off required |

---

## Section 2 — What is Taxed: Abgeltungsteuer

The **Abgeltungsteuer** (withholding/flat tax) applies to:
- Capital gains from disposal of shares, bonds, funds, ETFs
- Dividends
- Interest income
- Gains from derivatives, CFDs, options
- Crypto asset gains (treated as private sale transactions under §23 EStG)

The 26.375% is a **final withholding tax** — German banks withhold it automatically. Income subject to Abgeltungsteuer is NOT added to the progressive income tax base (no further top-up unless electing progressive rates and the marginal rate is lower).

---

## Section 3 — Annual Exemption (Sparer-Pauschbetrag)

Each individual has an annual tax-free allowance:

| Status | Allowance |
|---|---|
| Single individual | **€1,000** |
| Jointly assessed couple | **€2,000** |

The allowance covers all investment income (dividends + interest + gains combined). Unused allowance cannot be carried forward.

**Freistellungsauftrag**: instruct your German bank to apply the exemption automatically (up to the €1,000/€2,000 limit across all banks).

---

## Section 4 — Loss Offsetting Rules

Capital losses (Verlustverrechnungstopf) can **only** be offset against capital gains:
- Share losses can only offset share gains (stricter rule from 2020)
- Other capital losses (e.g. bond gains) can offset each other
- Unused losses carry forward indefinitely to future years
- Capital losses **cannot** offset employment income or other income

Annual capital loss certificate issued by banks (Verlustbescheinigung) — can be used when filing tax return.

---

## Section 5 — Substantial Shareholdings: Different Rules

For **substantial holdings** (≥1% shareholding in a company), gains are NOT taxed under Abgeltungsteuer. Instead, they are taxed under the **Teileinkünfteverfahren**:
- 60% of the gain is included in taxable income
- Taxed at the progressive income tax rate (up to 45%)
- Effective rate: up to 27% (60% × 45%)

This applies regardless of whether the company is German or foreign.

---

## Section 6 — Exit Tax (Wegzugsbesteuerung) — CRITICAL

**Germany imposes an exit tax** (§6 AStG) when an individual **leaves Germany** and holds a qualifying shareholding.

**Qualifying holding**: ≥1% shareholding in a corporation at any point in the preceding 5 years.

**Trigger**: departure from Germany (ceasing German tax residence).

**What happens**: deemed disposal of the shares at market value — unrealised gains are taxed as if the shares were sold on the day of departure.

**Rate**: Teileinkünfteverfahren (60% of gain at progressive rates).

**Deferral options**:
- Moving within EU/EEA: tax can be deferred interest-free until actual disposal
- Moving to third country (e.g. UAE, Singapore, UK): tax is immediately payable (or can be paid in 7 annual instalments in some cases)

**This is a major planning consideration** for anyone leaving Germany with significant company shareholdings.

---

## Section 7 — Crypto Assets

Cryptocurrency gains in Germany are subject to **special rules under §23 EStG** (not Abgeltungsteuer):

- Holding period < 1 year: gain fully taxable at progressive rates (no flat 26.375%)
- Holding period ≥ 1 year: **completely exempt** from tax
- Annual exemption for §23 gains: €1,000 total (not the €1,000 Sparer-Pauschbetrag)
- Loss offsetting: §23 losses only offset §23 gains

See `de-crypto-tax` for full crypto analysis.

---

## Section 8 — Sources

- EStG §20 (investment income), §32d (Abgeltungsteuer), §23 (private sale transactions)
- AStG §6 (exit tax)
- Bundesfinanzministerium: bundesfinanzministerium.de
- BMF-Schreiben on Abgeltungsteuer

> **Working paper only.** Exit tax (§6 AStG) analysis requires shareholding history and market value determination — engage a German Steuerberater before departing Germany with shareholdings ≥1%.
