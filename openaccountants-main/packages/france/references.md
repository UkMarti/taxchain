# France — Related Open-Source Projects

OpenAccountants is AGPL-3.0. All projects below have compatible licenses.

## OpenFisca France

- Repository: [openfisca/openfisca-france](https://github.com/openfisca/openfisca-france)
- License: AGPL-3.0
- Language: French
- Stars: 296
- Scope: Complete model of the French tax and benefit system — income tax, social contributions, housing benefits, family benefits, and more. Encodes French fiscal law as executable Python code with a web API.
- Why it matters: This is the gold standard for rules-as-code in France. Maintained by a dedicated organisation, used by French government services, and covers far more than just income tax.
- Integration: Same license (AGPL-3.0). Content, formulas, parameter values, and test cases can be directly referenced or adapted with attribution.

## Calculette Impôts (DGFiP source code)

- Repository: [GouvernementFR/calculette-impots-m-source-code](https://github.com/GouvernementFR/calculette-impots-m-source-code)
- License: CeCILL 2.1 (GPL-compatible)
- Language: French (M language — DGFiP internal)
- Stars: ~58
- Scope: The actual source code used by the French tax authority (DGFiP) to compute income tax. Written in a custom "M" language.
- Why it matters: This is literally the government's own tax engine source code, published under an open license. It is the ultimate source of truth for how French income tax is actually calculated.
- Integration: CeCILL 2.1 is explicitly GPL-compatible, which flows into AGPL. Logic can be adapted with attribution.

## Calculette Impôts Python

- Repository: [openfisca/calculette-impots-python](https://github.com/openfisca/calculette-impots-python)
- License: AGPL-3.0
- Language: French / Python
- Stars: 9
- Scope: Python translation of the DGFiP M-language tax calculator.
- Why it matters: More readable than the raw M source. Useful as a bridge between the official logic and OpenAccountants skill format.
- Integration: AGPL-3.0. Directly compatible.

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
