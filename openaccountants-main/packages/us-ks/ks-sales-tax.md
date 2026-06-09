---
name: ks-sales-tax
description: Use this skill whenever asked about Kansas sales and use tax. Trigger on phrases like "Kansas sales tax", "KS sales tax", "KDOR", "K.S.A. §79-3603", "Kansas grocery tax". ALWAYS load us-sales-tax first.
version: 2.0
jurisdiction: US-KS
validation_status: ai-drafted-q3
---

# Kansas Sales and Use Tax Skill v2.0

## Section 1 -- Quick reference

| Field | Value |
|---|---|
| Jurisdiction | Kansas |
| State rate | 6.50% |
| Grocery food state rate | 0.00% (effective January 1, 2025 -- phased down from 6.5%) |
| Maximum combined rate | ~11.50% |
| Sourcing | Destination-based (SST) |
| Economic nexus | $100,000 in gross receipts |
| Tax authority | Kansas Department of Revenue (KDOR) |
| Portal | https://www.kdor.ks.gov |
| SST member | Yes -- Full Member |
| Skill version | 2.0 |

## Section 3 -- Transaction pattern library

| Pattern | Taxable? | Notes |
|---|---|---|
| General TPP | TAXABLE 6.50% + local | |
| Clothing | TAXABLE | No exemption |
| Grocery food (unprepared) | 0% state (as of Jan 2025) | Local rates still apply; phased down from 6.5% |
| Prepared food | TAXABLE 6.50% | |
| SaaS | NOT TAXABLE | Kansas has not clearly taxed SaaS |
| Canned software (download) | TAXABLE | |
| Professional services | NOT TAXABLE | |
| Manufacturing equipment | EXEMPT | |
| Prescription drugs | EXEMPT | |
| Resale | EXEMPT | |

## Section 10 -- Prohibitions

- NEVER apply state tax to grocery food as of 2025 -- state rate is 0%. Local still applies.
- NEVER forget the phase-down history of grocery food taxation.
- NEVER compute any number.

## Disclaimer

Informational only. Review by qualified professional required before filing.


---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.

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
