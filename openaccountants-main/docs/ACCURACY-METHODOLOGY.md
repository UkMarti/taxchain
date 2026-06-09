# Accuracy methodology

How OpenAccountants skills are built, verified, and corrected — and, just as importantly, what "verified" does **not** mean.

## The problem we're solving

General-purpose LLMs hallucinate tax law: they invent rates, misremember thresholds, cite forms that don't exist, and apply last year's rules to this year. OpenAccountants skills replace the model's guesswork with content drafted from authoritative sources and, where possible, signed off by a licensed practitioner.

## Two verification tiers

See [QUALITY-TIERS.md](QUALITY-TIERS.md) for the full definitions. In short:

| Tier | Standard | Who |
|---|---|---|
| **Research-verified** (Tier 2) | Every rate, threshold, form, and deadline drafted from authoritative sources (tax-authority publications and primary legislation) | Drafted + cross-checked, awaiting credentialed sign-off |
| **Accountant-verified** (Tier 1) | A licensed practitioner has reviewed the skill, tested it against representative data, and put their name + credential on it | Named CPA / CA / EA / Steuerberater / local equivalent |

The honest headline is **"research-verified here, accountant-verified via MCP"** — never a blanket "verified by accountants." Most skills in this repo are Tier 2. See [COVERAGE.md](COVERAGE.md) for the exact split.

## Sources

Skills are drafted from, and cite, primary sources only:
- Tax-authority publications (IRS, HMRC, CRA, ATO, etc.)
- Primary legislation and statutory instruments
- Official forms and their instructions

Training-data recall and unsourced web results are **not** acceptable sources for a rate or threshold.

## Conservative by design

When the correct treatment is genuinely uncertain, skills are written to **assume the higher-tax / more-compliant position** and to flag the uncertainty rather than guess in the taxpayer's favour. Every skill surfaces **audit flash points** — the specific spots where a real practitioner should look before anything is filed.

## The correction feedback loop

Accuracy improves in the open. When a skill produces something wrong:
1. Anyone can open an issue or PR with the correct figure and a source, or email a correction (see [CORRECTION-FEEDBACK-LOOP-SPEC.md](CORRECTION-FEEDBACK-LOOP-SPEC.md)).
2. The fix is applied and the contributor gets public credit.
3. With credentialed sign-off, the skill moves from research-verified to accountant-verified.

## What "verified" does NOT mean

- It is **not** tax advice and **not** a filed return — every output is a **working paper** for a human to check.
- A research-verified skill has **not** been signed off by a credentialed practitioner.
- Verification reflects the rules **as of the skill's stated date**; tax law changes — check the date.
- Coverage of a jurisdiction does not imply coverage of every edge case within it.

The product is designed around this honesty: the AI produces a working paper and routes you to a real accountant for sign-off via `request_accountant_review`.
