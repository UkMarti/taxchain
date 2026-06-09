# South Korea — Related Open-Source Projects

OpenAccountants is AGPL-3.0. MIT, Apache-2.0, GPL-3.0, and AGPL-3.0 content can all be incorporated with attribution. Projects below are license-compatible unless noted otherwise.

## tax-ui-kr

- Repository: [kimtoma/tax-ui-kr](https://github.com/kimtoma/tax-ui-kr)
- License: verify before reuse
- Language: Korean
- Scope: Year-end settlement (연말정산) PDF parser with AI chat analysis. Parses 원천징수영수증 (withholding tax receipts) and visualises 소득공제 (income deductions) and 세액공제 (tax credits).
- Why it matters: Directly addresses the 연말정산 workflow that most Korean salaried workers go through annually. The PDF parsing and deduction visualisation are practical features.
- Integration approach:
  - Reference for 연말정산 document structure, 소득공제/세액공제 categorisation, and Korean tax receipt parsing patterns.
  - Treat as reference-only until the license is confirmed.

## korean-tax-calc

- Repository: [chapoleon/korean-tax-calc](https://github.com/chapoleon/korean-tax-calc)
- License: verify before reuse
- Language: Korean / English
- Scope: 2026 Korean tax calculations including severance pay (퇴직금), four major social insurances (4대보험: 국민연금, 건강보험, 고용보험, 산재보험), personal income tax, and gross-to-net computation. Published as an npm package.
- Why it matters: Covers the full payroll cycle from gross salary through social insurance deductions to net pay, which is essential for Korean employment tax workflows.
- Integration approach:
  - Reference for 4대보험 contribution rates, PIT bracket calculations, and 퇴직금 tax treatment.
  - Treat as reference-only until the license is confirmed.

## KoSimpleTax

- Repository: [hyeonki-min/kosimpletax](https://github.com/hyeonki-min/kosimpletax)
- License: MIT
- Language: Korean / English
- Scope: Python payroll tax calculator based on the 근로소득 간이세액표 (simplified withholding tax table) published by NTS (국세청).
- Why it matters: MIT-licensed implementation of the official NTS withholding tables, which are the standard reference for Korean payroll tax withholding.
- Integration approach:
  - MIT is fully compatible. Withholding table logic and rate schedules directly usable.
  - Reference for 근로소득 간이세액표 structure and monthly withholding calculations.

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
