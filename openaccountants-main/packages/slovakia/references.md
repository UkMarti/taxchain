# Slovakia — Related Open-Source Projects

OpenAccountants is AGPL-3.0. MIT, Apache-2.0, GPL-3.0, and AGPL-3.0 content can all be incorporated with attribution. Projects below are license-compatible unless noted otherwise.

## Priznanie Digital

- Repository: [priznanie-digital/priznanie-digital](https://github.com/priznanie-digital/priznanie-digital)
- License: MIT
- Stars: 18
- Contributors: 40
- Language: Slovak / English
- Scope: Full DPFO typ B (Daň z príjmov fyzickej osoby — personal income tax return, type B for self-employed) web application for Slovak freelancers (SZČO — samostatne zárobkovo činná osoba). Supports paušálne výdavky (flat-rate expenses), nezdaniteľné časti základu dane (non-taxable amounts), daňový bonus na dieťa (child tax bonus), and generates XML for electronic filing via slovensko.sk.
- Why it matters: Active project (last push April 2026) with 40 contributors, which is exceptional community involvement for a country-specific tax tool. MIT-licensed and covers the most common freelancer filing scenario in Slovakia.
- Integration approach:
  - MIT is fully compatible. Tax computation logic, deduction rules, and XML generation patterns directly usable.
  - Strong reference for Slovak DPFO typ B calculations, SZČO social/health insurance contributions, paušálne výdavky percentages, and slovensko.sk electronic filing format.
  - The large contributor base suggests the calculations are well-tested against real returns.

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
