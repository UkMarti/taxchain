# Czech Republic — Related Open-Source Projects

OpenAccountants is AGPL-3.0. MIT, Apache-2.0, GPL-3.0, and AGPL-3.0 content can all be incorporated with attribution. Projects below are license-compatible unless noted otherwise.

## OSVČ Kalkulačka

- Repository: [fertek/osvc-kalkulacka](https://github.com/fertek/osvc-kalkulacka)
- License: verify before reuse
- Language: Czech
- Scope: OSVČ (self-employed / osoby samostatně výdělečně činné) DPFO income tax calculator with social and health insurance contribution computation. Verifies results against official EPO XML exports from the Finanční správa.
- Why it matters: Focuses on the self-employed tax return workflow, which is the most complex individual filing scenario in CZ. Validation against EPO XML adds confidence in the calculations.
- Integration approach:
  - Reference for OSVČ tax computation, social/health insurance bases, and paušální výdaje (flat-rate expense) percentages.
  - Treat as reference-only until the license is confirmed.

## Czech Income Tax Calculator

- Repository: [zakjan/czech-income-tax-calculator](https://github.com/zakjan/czech-income-tax-calculator)
- License: AGPL-3.0
- Stars: 28
- Language: Czech / English
- Scope: Czech income tax calculator web application.
- Why it matters: AGPL-3.0 licensed with meaningful community adoption (28 stars). Directly compatible with OpenAccountants.
- Integration approach:
  - AGPL-3.0 is the same license family as OpenAccountants. Content can be incorporated with attribution.
  - Use as a validation reference for Czech PIT brackets, slevy na dani (tax credits), and nezdanitelné části základu daně (non-taxable portions).

## Odoo Czech VAT Filing Addon

- Repository: [tompta1/odoo-addon-czech-vat-filing](https://github.com/tompta1/odoo-addon-czech-vat-filing)
- License: MIT
- Language: Czech / English
- Scope: Czech VAT filing XML generation for DPHDP3, DPHKH1, and DPHSHV declarations with official Ministry of Finance XSD validation.
- Why it matters: MIT-licensed implementation of the official Czech VAT XML schemas (DPHDP3 for VAT return, DPHKH1 for kontrolní hlášení, DPHSHV for souhrnné hlášení). XSD validation against MF schemas provides strong correctness guarantees.
- Integration approach:
  - MIT is fully compatible. XML schema logic and VAT declaration structure directly usable.
  - Reference for Czech VAT return field mapping, kontrolní hlášení structure, and Finanční správa submission formats.

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
