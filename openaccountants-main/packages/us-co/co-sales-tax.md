---
name: co-sales-tax
description: Use this skill whenever asked about Colorado sales and use tax, home-rule cities, CDOR filings. Trigger on phrases like "Colorado sales tax", "CO sales tax", "CDOR", "home-rule city Colorado", "retail delivery fee". ALWAYS load us-sales-tax first.
version: 2.0
jurisdiction: US-CO
validation_status: ai-drafted-q3
---

# Colorado Sales and Use Tax Skill v2.0

## Section 1 -- Quick reference

| Field | Value |
|---|---|
| Jurisdiction | Colorado |
| State rate | 2.90% (lowest in the US) |
| Maximum combined rate | ~11.2% (with home-rule city taxes) |
| Sourcing | Destination-based (state); home-rule cities may differ |
| Economic nexus | $100,000 in retail sales |
| Tax authority | Colorado Department of Revenue (CDOR) |
| Portal | https://www.colorado.gov/revenueonline |
| SST member | Yes (associate) |
| Home-rule cities | ~70+ self-administer their own sales tax |
| Skill version | 2.0 |

**CRITICAL: ~70+ home-rule cities self-administer with different rates, rules, and exemptions. Denver, Aurora, Colorado Springs, Boulder are all home-rule.**

## Section 3 -- Transaction pattern library

| Pattern | Taxable? | Notes |
|---|---|---|
| General TPP | TAXABLE 2.9% + local | |
| Clothing | TAXABLE | No exemption |
| Grocery food (unprepared) | EXEMPT from state | Local may still tax food |
| Prepared food | TAXABLE | |
| SaaS | NOT TAXABLE | |
| Canned software (download) | TAXABLE | |
| Professional services | NOT TAXABLE | |
| Manufacturing equipment | EXEMPT | |
| Prescription drugs | EXEMPT | |
| OTC drugs | EXEMPT | |
| Resale | EXEMPT | |

## Section 10 -- Prohibitions

- NEVER ignore home-rule cities -- ~70+ cities self-administer with different rules.
- NEVER treat SaaS as taxable in Colorado.
- NEVER forget grocery food is exempt from STATE tax but local may still apply.
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
