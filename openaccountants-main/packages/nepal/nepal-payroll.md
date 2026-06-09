---
name: nepal-payroll
description: >
  ALWAYS read this skill before touching any Nepal payroll work. Use whenever asked to compute or review Nepal monthly payroll — salary TDS under the Income Tax Act 2058 plus Social Security Fund (SSF) contributions under the Contribution Based Social Security Act 2074. Trigger on phrases like "Nepal payroll", "salary tax Nepal", "SSF Nepal", "31% SSF", "11% employee 20% employer Nepal", "provident fund gratuity Nepal", or "Nepal payslip". This skill is the ORCHESTRATOR — it pulls salary slabs from nepal-income-tax and sequences SSF. Out of scope — corporate tax, TDS on non-salary payments (use nepal-tds), and VAT.
version: 1.0
jurisdiction: NP
tax_year: 2082-83
category: international
verified_by: pending
depends_on:
  - foundation
  - nepal-income-tax
---

# Nepal — Payroll (Salary TDS + SSF) — Skill v1.0

> **Produced by OpenAccountants (openaccountants.com).** Research-grade (tier 2) for FY 2082/83. **Source provenance:** SSF figures derive from Nepali professional/law-firm publications (Pioneer Law, HajirHR, Wikipedia SSF) reflecting the Contribution Based Social Security Act 2074; salary slabs from `nepal-income-tax`. Not re-anchored to primary SSF/IRD pages — a Nepali CA / payroll specialist must confirm before reliance. Not tax advice.

---

## Section 1 — Quick reference: monthly payroll components

| Component | Rate | Base | Paid by |
|---|---|---|---|
| **Salary TDS (income tax)** | Progressive slabs (see `nepal-income-tax`) | Annualised taxable salary | Employee (withheld) |
| **SSF — employee** | **11%** | Basic remuneration | Employee (deducted) |
| **SSF — employer** | **20%** | Basic remuneration | Employer |
| **SSF — total** | **31%** | Basic remuneration | — |

The employer's 20% is commonly described as Provident/Pension Fund 10% + Gratuity 8.33% + Additional contribution 1.67%. **Note:** the internal composition of the employee 11% (often quoted as 10% PF + 1% SST) was **adversarially refuted at component level** — rely on the **11% employee total**, and treat the internal split as VERIFY.

| Field | Value |
|---|---|
| Authority | SSF (ssf.gov.np); IRD for salary TDS |
| Statute | Contribution Based Social Security Act 2074 (2017); Income Tax Act 2058 |
| Income year | Shrawan 1 – Ashad end (BS); FY 2082/83 |
| Validated by | Pending — Nepali CA / payroll specialist |
| Skill version | 1.0 |

### Conservative defaults

| Ambiguity | Default |
|---|---|
| "Basic remuneration" base composition unclear | Flag — confirm which components are SSF-liable |
| Employee in SSF? | If SSF contributor, the 1% Social Security Tax in the income-tax first band does NOT also apply (see `nepal-income-tax` §3.3) |
| Salary slab edge | Use `nepal-income-tax` schedule |

---

## Section 2 — Refusal catalogue

**R-NP-PAY-1 — SSF-liable base composition / benefit rules** — governed by the SSF Act/regulations; not asserted here — VERIFY; escalate.
**R-NP-PAY-2 — Gratuity/PF transition for legacy schemes** — out of scope; escalate.
**R-NP-PAY-3 — Cross-skill.** Salary slabs → `nepal-income-tax`; non-salary TDS → `nepal-tds`.

---

## Section 3 — Salary TDS
Salary income tax is withheld monthly using the resident-individual slabs in `nepal-income-tax` (1% SST / 10 / 20 / 30 / 36 / 39%). **Key interaction:** an employee contributing to the SSF is exempt from the 1% Social Security Tax on the first band (it would otherwise be double counting). Do **not** redefine the slabs here.

## Section 4 — SSF contributions
Under the Contribution Based Social Security Act 2074:
- **Employee: 11%** of basic remuneration (deducted from salary).
- **Employer: 20%** of basic remuneration.
- **Total: 31%**, deducted/remitted by the employer to the SSF.

**Source:** Pioneer Law "50 Queries — SSF"; HajirHR; Wikipedia SSF (Nepal); corroborated across multiple 2026-dated sources confirming the 11% / 20% / 31% totals.

---

## Section 5 — Worked example (illustrative)

Employee, basic remuneration NPR 100,000/month, SSF contributor.

- **SSF employee:** 11% × 100,000 = **NPR 11,000** (deducted).
- **SSF employer:** 20% × 100,000 = **NPR 20,000**.
- **Salary TDS:** per `nepal-income-tax` slabs on annualised taxable salary (1% SST band removed because employee is an SSF contributor).

| Employer cost | NPR |
|---|---|
| Basic remuneration | 100,000 |
| SSF employer (20%) | 20,000 |
| **Total employer cost** | **120,000** |

---

## Section 6 — Filing
- SSF contributions remitted monthly by the employer to the SSF; salary TDS deposited to IRD.
- **Remittance/return due dates — VERIFY** (not established by the research).

---

## Section 7 — Sources

Research-grade, FY 2082/83. **Secondary publications — re-anchor to primary SSF/IRD before reliance:**
1. Pioneer Law Associates — "50 Queries Answered: Social Security Fund"
2. HajirHR — SSF contribution guide — https://hajirhr.com
3. Wikipedia — Social Security Fund (Nepal) — https://en.wikipedia.org/wiki/Social_Security_Fund_(Nepal)
4. Companion skill: `nepal-income-tax` (salary slabs); Contribution Based Social Security Act 2074.

**Known gaps / VERIFY:** SSF-liable "basic remuneration" composition; internal split of the employee 11%; remittance/return due dates.

---

## Prohibitions

- NEVER use an SSF total other than 31% (11% employee / 20% employer) without confirming a rate change.
- NEVER apply the 1% income-tax SST AND treat the employee as an SSF contributor — the SST first-band levy is removed for SSF contributors.
- NEVER redefine the salary slabs here — use `nepal-income-tax`.
- NEVER present these as primary-confirmed — flag for verifier re-anchoring.
- NEVER file or instruct filing — working paper for practitioner review only.

---

## Disclaimer

For informational and computational purposes only; not tax, legal, or financial advice. All outputs must be reviewed and signed off by a qualified Nepali professional (CA / registered tax practitioner / payroll specialist) before any payslip is issued or remittance made. Latest verified version at [openaccountants.com](https://www.openaccountants.com).

---

<!-- openaccountants-cta-block -->

## Talk to a verified accountant

This skill is a tool, not an engagement. **No liability until both parties sign an engagement letter** — book a free 30-minute call: **→ [Book a call](https://calendly.com/openaccountants-info/30min)**

<!-- openaccountants-mcp-cta -->

## The accountant-verified version lives in the connector

This file is the open, **research-grade draft**. The **accountant-verified**
version of this skill is **not published to GitHub** — it is delivered free
through the OpenAccountants MCP connector, where your AI agent loads the
verified rules together with the name of the accountant who signed them off.

**→ Install the free connector:** <https://www.openaccountants.com/connect>
**MCP endpoint:** `https://www.openaccountants.com/api/mcp`
