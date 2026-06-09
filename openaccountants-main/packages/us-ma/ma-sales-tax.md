---
name: ma-sales-tax
description: Use this skill whenever asked about Massachusetts sales and use tax. Trigger on phrases like "Massachusetts sales tax", "MA sales tax", "MA DOR", "ST-9", "Massachusetts clothing exemption". ALWAYS load us-sales-tax first.
version: 2.0
jurisdiction: US-MA
validation_status: ai-drafted-q3
---

# Massachusetts Sales and Use Tax Skill v2.0

## Section 1 -- Quick reference

| Field | Value |
|---|---|
| Jurisdiction | Massachusetts |
| State rate | 6.25% |
| Local taxes | None |
| Maximum combined rate | 6.25% |
| Sourcing | Destination-based |
| Economic nexus | $100,000 in sales |
| Tax authority | Massachusetts Department of Revenue (DOR) |
| Portal | https://www.mass.gov/orgs/massachusetts-department-of-revenue |
| SST member | No |
| Clothing exemption | Yes -- under $175/item |
| Skill version | 2.0 |

## Section 3 -- Transaction pattern library

| Pattern | Taxable? | Notes |
|---|---|---|
| General TPP | TAXABLE 6.25% | |
| Clothing under $175/item | EXEMPT | Per-item threshold |
| Clothing $175+ per item | TAXABLE on amount over $175 | Only excess over $175 is taxed |
| Grocery food | EXEMPT | |
| Prepared food (meals) | TAXABLE at 6.25% | Local option meals tax up to 0.75% additional |
| SaaS | TAXABLE | Massachusetts taxes SaaS |
| Canned software | TAXABLE | |
| Digital goods | TAXABLE | |
| Professional services | NOT TAXABLE | |
| Manufacturing equipment | EXEMPT | |
| Prescription drugs | EXEMPT | |
| Resale | EXEMPT | |

## Section 10 -- Prohibitions

- NEVER apply full tax to clothing under $175 -- only the excess over $175 is taxable.
- NEVER forget the local option meals tax (up to 0.75% additional on prepared food).
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
