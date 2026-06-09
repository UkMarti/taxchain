---
name: [country-or-topic]-[domain]
description: >
  [One paragraph: what this skill covers, entity types, jurisdiction, tax year.
  Include trigger phrases the AI should match. Be specific about scope.]
version: 0.1
jurisdiction: XX   # REQUIRED — MT, GB, DE, US, US-CA, GLOBAL, INTL, EU-27, etc.
tax_year: 2025
category: international   # international | crypto | bookkeeping | payroll | formation | cross-border | vertical | integration | foundation | orchestrator | federal | state
depends_on:
  - [workflow-base-or-country-skill]
verified_by: pending
---

# [Skill Name] v0.1

> **Jurisdiction is required.** Set `jurisdiction:` in frontmatter even when the folder path implies it (e.g. `skills/international/malta/` → still use `jurisdiction: MT`). Sync to openaccountants.com skips files without a resolvable jurisdiction. See [WEBSITE-SYNC.md](WEBSITE-SYNC.md).

## What this file is

**This file is a content skill that loads on top of a workflow base** (e.g. `us-tax-workflow-base`, `crypto-tax-workflow-base`, `bookkeeping-workflow-base`).

[Describe: what it computes, where it fits in the pipeline, what it does NOT cover.
Reference the upstream skills it depends on and the downstream skills that consume its output.]

**Tax year coverage.** This skill is current for **tax year 2025** as of its currency date.

**The reviewer is the customer of this output.** Per the base, this skill assumes a credentialed reviewer reviews and signs the return. The skill produces working papers and a brief, not a return.

---

## Section 1 — Scope statement

This skill covers:

- [What forms and schedules]
- [What entity types — sole prop, SMLLC, etc.]
- [What line items or computations]

This skill does NOT cover:

- [What's out of scope — reference which other skills handle it]

---

## Section 2 — Filing requirements

[Who must file, thresholds, deadlines. Cite the state statute or IRC section.]

---

## Section 3 — Rates and thresholds

[All dollar amounts, percentages, phase-outs for the tax year.
Each figure must have a primary source citation.]

| Item | Amount | Source |
|------|--------|--------|
| [Rate/threshold] | [$X] | [Statute § or Notice] |

---

## Section 4 — Computation rules

[Step-by-step computation logic. This is the core of the skill.
Write it so Claude can execute it mechanically.]

### Step 1 — [Name]

[Rule with citation]

### Step 2 — [Name]

[Rule with citation]

---

## Section 5 — Edge cases and special rules

[Unusual situations, exceptions, elections, safe harbors.
Each with a citation.]

---

## Section 6 — Self-checks

Before delivering output, verify:

- [ ] All input figures trace to source documents
- [ ] Rates and thresholds match the tax year
- [ ] Computation follows the steps in Section 4
- [ ] Edge cases from Section 5 are checked
- [ ] Output format matches the base skill spec

---

## Section 7 — Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
