# Poland — Related Open-Source Projects

OpenAccountants is AGPL-3.0. All projects below have compatible licenses.

## Pitly

- Repository: [volodymyr-kovtun/Pitly](https://github.com/volodymyr-kovtun/Pitly)
- License: MIT
- Language: Polish / English
- Stars: 42
- Scope: PIT-38 tax calculator for Polish investors using foreign brokers (Interactive Brokers, Trading 212). Converts trades and dividends to PLN using NBP exchange rates, applies FIFO capital gains, handles dividend withholding credits under PL-US treaty, and generates ready-to-file PIT-38 field values.
- Why it matters: Solves the exact pain point of Polish investors who need to file PIT-38 manually. Well-structured API with clear field mappings to the official form.
- Integration: MIT. Logic for NBP rate conversion, FIFO matching, and PIT-38 field generation can be adapted.

## kloPIT

- Repository: [SkeLLLa/klopit](https://github.com/SkeLLLa/klopit)
- License: AGPL-3.0
- Language: Polish / English
- Scope: Browser-based PIT-38 calculator. Imports broker CSV, fetches NBP rates, applies FIFO, fills PIT-38 and PIT/ZG fields. Runs entirely client-side.
- Why it matters: Same license family as OpenAccountants. Clean implementation of Polish tax law references (ustawa o PIT).
- Integration: AGPL-3.0. Directly compatible. Calculation logic and legal references can be incorporated.

## pit8c

- Repository: [iyazerski/pit8c](https://github.com/iyazerski/pit8c)
- License: MIT
- Language: English / Polish
- Stars: 6
- Scope: Python CLI that transforms raw broker reports into PIT-8C declarations. Handles FIFO trade matching, currency conversion, and PDF report generation.
- Why it matters: Covers PIT-8C (investment income reporting) which complements PIT-38 (capital gains tax).
- Integration: MIT. Freely usable.

## pit-38 (pbialon)

- Repository: [pbialon/pit-38](https://github.com/pbialon/pit-38)
- License: MIT
- Language: Polish / English
- Stars: 18
- Scope: Python scripts for PIT-38 calculation covering both stocks and cryptocurrency. Supports multiple broker formats.
- Why it matters: Handles crypto-specific PIT-38 workflows alongside traditional investments.
- Integration: MIT. Freely usable.

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
