# Japan — Related Open-Source Projects

OpenAccountants is AGPL-3.0. MIT content can be incorporated with attribution. All projects below are license-compatible.

## Shinkoku

- Repository: [kazukinagata/shinkoku](https://github.com/kazukinagata/shinkoku)
- License: MIT
- Language: Japanese
- Scope: AI-agent plugin for Japanese tax filing automation, including bookkeeping, income tax, consumption tax, settlement workflows, e-Tax guidance, and browser-assisted filing through the National Tax Agency's 確定申告書等作成コーナー.
- Why it matters: This is the strongest known Japan-native open-source project in the same problem space as OpenAccountants. It is built around agent skills, uses official Japanese tax terminology, and covers practical workflows beyond pure tax formulas.
- Integration approach:
  - Reference Shinkoku for Japan-specific workflow design, terminology, e-Tax process shape, bookkeeping patterns, and validation ideas.
  - Keep OpenAccountants outputs review-first and accountant-facing.
  - Consider future compatibility with Shinkoku's data model or command workflow for users who want a deeper Japan-native tool.

## Current OpenAccountants Usage

The Japan package already credits Shinkoku in `README.md` because parts of the Japan workflow were informed by that project. Future Japan updates should check Shinkoku first before inventing new e-Tax, bookkeeping, consumption tax, or incorporation workflow patterns.

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
