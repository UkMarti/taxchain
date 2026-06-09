# Example working papers

What an OpenAccountants skill actually produces. The output is a **working paper** — a structured, sourced computation for a human to check — not a filed return and not tax advice.

> ⚠️ The example below is **illustrative**, with round invented numbers, to show the *format*. It is not a real computation and the figures are not authoritative. Real output uses the live rates and thresholds in the skill, dated, with the verifier's name attached.

## Anatomy of a working paper

Every working paper has the same bones:

1. **Inputs** — the facts the user provided, restated so they can confirm them
2. **Computation** — each line derived from a specific rule in the skill, not from model recall
3. **Audit flash points** — the spots a real practitioner must check before filing
4. **Provenance footer** — skill, jurisdiction, date, and (for Tier 1) the named verifier
5. **Handoff** — a route to a licensed accountant for sign-off

## Illustrative example — UK sole trader (SA103)

**Inputs (confirm these):**
- Self-employment income: £50,000
- Allowable expenses: £8,000
- Tax year: 2025/26 · No other income

**Computation (illustrative):**

| Line | Amount |
|---|---|
| Turnover | £50,000 |
| Less allowable expenses | (£8,000) |
| **Net profit** | **£42,000** |
| Personal allowance | (£12,570) |
| Taxable profit | £29,430 |
| Income tax (basic rate band) | _per skill's current rate table_ |
| Class 4 NIC | _per skill's current thresholds_ |
| **Estimated liability** | _computed from the above_ |

**Audit flash points (the skill flags these):**
- Is the trader registered for VAT? Turnover is near common thresholds — confirm.
- Any disallowable items inside the £8,000 expenses (entertainment, private-use split)?
- Payments on account for next year — has the user budgeted for them?
- Student loan / High Income Child Benefit Charge interactions if other income exists.

**Provenance footer:**
> Computed with `uk-self-employment-sa103` · 2025/26 rules · research-verified.
> _For accountant-verified output with a named UK CPA on the result, use the [MCP connector](https://www.openaccountants.com/connect)._

**Handoff:** the AI then offers to route the working paper to a licensed accountant via `request_accountant_review`.

## Generate a real one

Don't copy figures from this page. To produce a real working paper:
- **Upload** the relevant package from [`packages/`](../packages/) to your LLM and give it your facts, or
- **Connect via [MCP](https://www.openaccountants.com/connect)** and ask your question — the AI loads the authoritative skill automatically and attaches a verifier's name where one exists.

Always have a credentialed professional review before filing.
