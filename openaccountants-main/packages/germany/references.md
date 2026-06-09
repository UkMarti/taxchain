# Germany — Related Open-Source Projects

OpenAccountants is AGPL-3.0. All projects below have compatible licenses.

## LstGen

- Repository: [jenner/LstGen](https://github.com/jenner/LstGen)
- License: MIT
- Stars: 65
- Language: Python (generator), outputs Python/Java/JavaScript/Go/PHP
- Scope: Code generator that produces working payroll tax (Lohnsteuer) calculators from the official BMF Programmablaufplan (PAP) XML files.
- Why it matters: The German Federal Ministry of Finance publishes tax calculation logic as XML flowcharts. LstGen turns those into runnable code — the most direct possible source of truth for German wage tax.
- Data extracted: PAP structure, input/output parameter definitions, usage patterns for all Steuerklassen.
- Integration: MIT. Formulas and logic adapted into `de-payroll.md` with attribution.

## Lohnsteuer (MarcelLehmann)

- Repository: [MarcelLehmann/Lohnsteuer](https://github.com/MarcelLehmann/Lohnsteuer)
- License: Apache-2.0
- Stars: 35
- Language: Java (generated from BMF PAP XML)
- Scope: Java wage tax calculator generated from BMF PAP. Covers 2006–2026 with official BMF XML sources included.
- Why it matters: Longest-running German payroll tax implementation. Includes test suite validated against BMF's online Steuerrechner API.
- Data extracted for `de-payroll.md`:
  - UPTAB25 formula constants (GFB=12,096; zone boundaries 17,444/68,481/277,826; formula coefficients 932.30/176.64/1,400/2,397/1,015.13/10,911.92/19,246.67)
  - MPARA social insurance parameters (BBGRV=96,600; BBGKVPV=66,150; RVSATZAN=0.093; KVSATZAN base 0.07; PVSATZAN/PVSATZAG rates)
  - Steuerklasse V/VI thresholds (W1STKL5=13,785; W2STKL5=34,240; W3STKL5=222,260)
  - SOLZFREI=19,950; SolZ 5.5% rate with 11.9% phase-in
  - Steuerklasse parameter assignments (ANP, SAP, KFB, EFA, KZTAB per class)
  - PV Beitragsabschlage rates (0.0025 per additional child)
  - Sachsen PV exception (PVS=1: AN 2.3%, AG 1.3%)
- PAP version: Stand 2025-09-17 (September 2025 revision from ITZBund Berlin)
- Integration: Apache-2.0. All formula constants and computation logic extracted into `de-payroll.md`.

## TaxJs (taxcalcs)

- Repository: [taxcalcs/taxjs](https://github.com/taxcalcs/taxjs)
- License: MIT
- Stars: 7
- Language: TypeScript/JavaScript
- Scope: npm-installable library for German wage tax calculation, generated from BMF pseudo-code.
- Why it matters: Tested against BMF's own online calculator. Useful for JavaScript-based validation.
- Integration: MIT. Logic and test values usable for validation of `de-payroll.md`.

## horstoeko/zugferd

- Repository: [horstoeko/zugferd](https://github.com/horstoeko/zugferd)
- License: MIT
- Stars: 417
- Language: PHP
- Scope: ZUGFeRD/XRechnung/Factur-X e-invoicing library. Implements the German electronic invoicing standard with full codelist support.
- Data extracted:
  - VAT category codes (UNTDID 5305): S (standard rate), Z (zero-rated), E (exempt), AE (reverse charge), K (intra-community), G (free export), O (outside scope), L (Canary Islands IGIC), M (Ceuta/Melilla IPSI)
  - VAT type codes for German invoicing
  - Example usage confirms German standard VAT rates: 19% (Regelsteuersatz) and 7% (ermaessigter Steuersatz)
- Integration: MIT. VAT category code definitions referenced in `germany-vat-return.md`. E-invoicing patterns useful for invoice processing workflows.

## 0-k/netto

- Repository: [0-k/netto](https://github.com/0-k/netto) (verify URL)
- License: check
- Language: Python
- Scope: Python calculator for German income tax and social security contributions.
- Integration: Reference for net income calculation patterns.

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
