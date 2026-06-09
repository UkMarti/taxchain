# Denmark — Related Open-Source Projects

OpenAccountants is AGPL-3.0. MIT-licensed projects below can be incorporated with attribution.

## tesoro

- Repository: [libo/tesoro](https://github.com/libo/tesoro)
- License: MIT
- Stars: 24
- Language: Ruby
- Scope: Danish capital gains tax calculator for stock/investment portfolios. Implements the two-tier aktieindkomst (share income) taxation system with progressive rates: 27% up to progressionsgrænsen (DKK 58,900 in 2023) and 42% above. Supports married/unmarried filing with combined progressive threshold for married couples (2×).
- Why it matters: Clean implementation of SKAT's aktieindkomst progressive system with historical threshold data from 2014–2023. MIT license.
- Integration approach: Capital gains rate structure (27%/42% split) and progressive thresholds incorporated into the income tax skill.

## skattefar

- Repository: [ob-vest/skattefar](https://github.com/ob-vest/skattefar)
- License: MIT
- Stars: 0 (new, May 2026)
- Language: TypeScript
- Scope: Danish tax calculator "for mere mortals" — aims to simplify SKAT's complex system into understandable components.
- Integration approach: Reference for Danish tax calculation UX and bracket structure.

## etrade-skat-tools

- Repository: [mpdn/etrade-skat-tools](https://github.com/mpdn/etrade-skat-tools)
- License: MIT
- Stars: 2
- Language: TypeScript
- Scope: Tooling for reporting stock plan sales from E-Trade to Danish SKAT. Handles currency conversion (USD→DKK) using Nationalbanken rates, calculates gains using FIFO, and formats for SKAT reporting.
- Integration approach: Reference for foreign stock income reporting to SKAT, FIFO methodology, and Nationalbanken FX rate sourcing.

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
