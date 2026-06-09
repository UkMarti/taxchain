# United Kingdom — Related Open-Source Projects

OpenAccountants is AGPL-3.0. All projects below have compatible licenses.

## HMRC Tax Kalculator

- Repository: [hmrc/tax-kalculator](https://github.com/hmrc/tax-kalculator)
- License: Apache-2.0
- Language: English / Kotlin
- Stars: 16
- Scope: Kotlin Multiplatform take-home pay calculator covering income tax, National Insurance, and student loan repayments. Official HMRC repository.
- Why it matters: This is actual HMRC code — the tax authority's own open-source implementation.
- Integration: Apache-2.0 flows into AGPL-3.0. Logic and calculation patterns can be adapted with attribution.

## SavingTool HMRC Income Tax

- Repository: [SavingTool/hmrc-income-tax](https://github.com/SavingTool/hmrc-income-tax)
- License: MIT
- Language: English / TypeScript
- Stars: 22
- Scope: TypeScript library for UK income tax, National Insurance (employee and employer), and student loan calculations. Supports Scottish rates. Updated for 2026/27.
- Why it matters: Clean, well-tested, actively maintained. Covers both employee and employer-side payroll calculations.
- Integration: MIT. Freely usable with attribution.

## HMRC PAYE Estimator

- Repository: [hmrc/paye-estimator](https://github.com/hmrc/paye-estimator)
- License: Apache-2.0
- Language: Scala / JavaScript
- Stars: 3
- Scope: Scala.js library for PAYE tax estimation. Official HMRC repository.
- Why it matters: Another official HMRC open-source tool, useful for validation.
- Integration: Apache-2.0. Compatible.

## BittyTax

- Repository: [BittyTax/BittyTax](https://github.com/BittyTax/BittyTax)
- License: check
- Language: English / Python
- Scope: Cryptocurrency tax calculator implementing UK HMRC rules — Same-Day, Bed & Breakfast, Section 104 Pool, capital gains computation. PDF report generation.
- Why it matters: Comprehensive implementation of UK CGT share-matching rules. Useful reference if OpenAccountants covers investment income.
- Integration: Reference for UK capital gains tax rules and HMRC crypto guidance.

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
