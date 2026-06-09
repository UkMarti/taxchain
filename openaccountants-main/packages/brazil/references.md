# Brazil — Related Open-Source Projects

OpenAccountants is AGPL-3.0. All projects below have compatible licenses.

## irpf-investidor

- Repository: [staticdev/irpf-investidor](https://github.com/staticdev/irpf-investidor)
- License: MIT
- Language: Portuguese
- Stars: ~30
- Scope: Calculates costs for stocks, ETFs, and FIIs (real estate funds) for the IRPF Bens e Direitos declaration. Handles B3 CEI data, emoluments, and settlement fees.
- Integration: MIT. Cost basis calculation logic and B3 data parsing directly usable.

## ir_investidor

- Repository: [barbolo/ir_investidor](https://github.com/barbolo/ir_investidor)
- License: MIT
- Language: Portuguese
- Stars: 51
- Scope: Automatic income tax calculation for variable income investors. Supports stocks, options, FIIs (normal and day-trade). Runs locally via Docker.
- Integration: MIT. Investment income tax rules and day-trade vs swing-trade logic can be adapted.

## consolidador-cei

- Repository: [danilofrp/consolidador-cei](https://github.com/danilofrp/consolidador-cei)
- License: GPL-3.0
- Language: Portuguese
- Stars: 20
- Scope: Consolidates B3 CEI statements for IRPF. Generates declaration of assets (bens e direitos) reports and monthly profit/loss tracking.
- Integration: GPL-3.0 flows into AGPL-3.0. Report structure and consolidation logic usable with attribution.

## Leão Faminto API

- Repository: [jeancsanchez/leaofaminto-api-kt](https://github.com/jeancsanchez/leaofaminto-api-kt)
- License: check
- Language: Portuguese / Kotlin
- Scope: API to calculate taxes on stock exchange operations and assist with annual IRPF declaration. Supports B3 brokers, day-trade/swing-trade, FIIs, US stocks/REITs.
- Integration: Reference for Brazilian investment tax computation patterns.

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
