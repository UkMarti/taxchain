---
name: ca-nonresident-cgt
description: >
  Canada non-resident capital gains: Section 116 clearance certificate, Part XIII
  withholding, taxable Canadian property (TCP), notional assessment. Trigger on:
  "non-resident selling Canadian property", "Section 116 Canada", "clearance certificate
  CRA", "TCP taxable Canadian property", "withholding on sale Canada", "non-resident
  selling Canadian shares", "Part XIII withholding Canada", "NR4 Canada".
version: 1.0
jurisdiction: CA
tax_year: 2025
category: international
---

# Canada — Non-Resident Capital Gains & Section 116 — v1.0

## Core rule

Non-residents of Canada are taxed on capital gains from **Taxable Canadian Property (TCP)**.
Gains from non-TCP assets: **no Canadian tax**.

---

## Taxable Canadian Property (TCP)

| Asset | TCP? |
|---|---|
| Canadian real property | **Always TCP** |
| Property used in a Canadian business (inventory, equipment) | TCP |
| Shares in a **private corporation** where > 50% of FMV derives from Canadian real property in any of the preceding 60 months | TCP |
| Shares in a **public corporation** listed on a designated exchange | **Not TCP** (general rule) |
| Shares in a Canadian-controlled private corporation (CCPC) — operating business | TCP if the 50% real property test is met; otherwise not TCP |
| Options to acquire TCP | TCP |
| Partnership interests where > 50% of FMV is Canadian real property | TCP |

---

## Section 116 — Clearance Certificate

When a non-resident disposes of TCP, they must notify the CRA and obtain a
**clearance certificate** under ITA §116:

1. **Notify CRA**: within 10 days of the sale (or before the sale if withholding
   obligation applies)
2. **CRA issues a certificate**: confirming the amount of tax payable on the gain
3. **Buyer's withholding obligation**: If the seller does NOT produce a clearance
   certificate, the **buyer** must withhold and remit **25%** (or 50% for certain
   property) of the **gross proceeds** to the CRA

The withholding is on gross proceeds — not the gain. This can be extremely punishing
on low-gain transactions.

---

## Tax rate for non-residents on TCP gains

Non-residents pay Canadian income tax on TCP gains at the same rates as residents,
applied to the included portion of the gain (50% / 2/3 above $250k — see `ca-capital-gains`).

Combined federal + provincial top rates on the included portion: approximately 26%–27%
(federal) + varying provincial rates.

---

## Filing requirement

Non-residents who dispose of TCP must file a **Canadian non-resident tax return** (T1
or T2 as applicable) for the year of disposition. A non-resident individual files
Form T1 — Income Tax and Benefit Return noting non-resident status.

---

## Part XIII withholding on dividends

Dividends paid from Canadian corporations to non-residents are subject to **25% Part XIII
withholding** (reduced by treaty — typically 15% for portfolio, 5% for 10%+ corporate
shareholders under most DTAs). This is separate from the capital gains rules above.

---

## Sources

- Income Tax Act (Canada), §2(3) (non-resident taxable in Canada), §115 (non-resident
  income from Canadian sources), §116 (clearance certificates), §212–218 (Part XIII)
- CRA: canada.ca/en/revenue-agency/services/tax/international-non-residents/information-been-moved/disposing-of-certain-canadian-property.html

> Working paper only. The TCP classification for shares requires analysis of the
> corporation's assets. A §116 clearance certificate must be obtained BEFORE settlement
> or the buyer faces withholding liability. Engage a qualified Canadian tax adviser.
