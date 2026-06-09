---
name: ms-sales-tax
description: Use this skill whenever asked about Mississippi sales and use tax. Trigger on phrases like "Mississippi sales tax", "MS sales tax", "Miss. Code §27-65". ALWAYS load us-sales-tax first.
version: 2.0
jurisdiction: US-MS
validation_status: ai-drafted-q3
---

# Mississippi Sales and Use Tax Skill v2.0

## Section 1 -- Quick reference

| Field | Value |
|---|---|
| Jurisdiction | Mississippi |
| State rate | 7.00% |
| Local taxes | Very limited (up to 0.25% in some areas) |
| Maximum combined rate | ~7.25% |
| Sourcing | Origin-based |
| Economic nexus | $250,000 in sales |
| Tax authority | Mississippi Department of Revenue |
| Portal | https://www.dor.ms.gov |
| SST member | No |
| Skill version | 2.0 |

**Mississippi taxes MOST services broadly and taxes grocery food at a reduced rate.**

## Section 3 -- Transaction pattern library

| Pattern | Taxable? | Notes |
|---|---|---|
| General TPP | TAXABLE 7% | |
| Clothing | TAXABLE | No exemption |
| Grocery food | TAXABLE at 5% | Reduced rate (not exempt) |
| Prepared food | TAXABLE 7% | |
| SaaS | NOT TAXABLE | Not clearly taxed |
| Canned software | TAXABLE | |
| Most services | TAXABLE | Mississippi taxes services broadly |
| Professional services | Varies | Many professional services taxable |
| Manufacturing equipment | REDUCED RATE | |
| Prescription drugs | EXEMPT | |
| Resale | EXEMPT | |

## Section 10 -- Prohibitions

- NEVER say grocery food is exempt -- Mississippi taxes it at 5%.
- NEVER assume services are exempt -- Mississippi taxes most services.
- NEVER forget origin-based sourcing.
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
