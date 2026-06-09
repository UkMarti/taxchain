# OpenAccountants — Agent Instructions

This is the open-source skills repository (AGPL-3.0 + attribution + commercial dual-license). The companion website + admin layer lives in a separate repo. AI agents working on this repo should read the following before writing or committing.

## Repository overview

- `packages/` — All published tax & accounting skills, grouped by jurisdiction (e.g. `malta/`, `us-ca/`, `us-federal/`, `_cross-border/`, `_verticals/`, `_integrations/`).
- `mcp/` — Python MCP server package (`openaccountants-mcp` on PyPI).
- `docs/` — Repo documentation, quality tiers, contributor guides.
- `scripts/` — Maintenance scripts (frontmatter cleanup, manifest regeneration, etc.).
- `LICENSE` — AGPL-3.0.
- `LICENSE-ADDITIONAL.md` — Section 7 attribution requirement.
- `COMMERCIAL_LICENSE.md` — Commercial alternative for those who can't comply with AGPL.

## Skill file conventions

Every skill is a single Markdown file with YAML frontmatter:

```yaml
---
name: <slug>
description: <80-100 word description trigger phrase for AI agents>
jurisdiction: <ISO 2-letter for countries, US-XX for US states, CA + sub_region for Canadian provinces, GLOBAL/INTL for cross-border>
category: <state-tax|federal-tax|vat|income-tax|payroll|formation|...>
tier: 2  # 1 = accountant-verified (named accountant signed off); 2 = research-verified (awaiting sign-off)
verified_by: pending  # or a real name + credential string like "Michael Cutajar, CPA (Malta)"
last_updated: YYYY-MM-DD
version: 0.1
---
```

After the frontmatter, the skill body is structured as numbered sections covering Scope, Topic-specific rules, Worked examples, Provenance, and a Circular 230 §10.37 disclosure for US skills.

Every published skill ends with the `<!-- openaccountants-cta-block -->` marker followed by a "Talk to a verified accountant" CTA with a Calendly link. The marker makes the stamp idempotent — bulk re-stamps skip files that already have it.

## AUDIT FLASH POINT convention

Skills covering positions that are actively litigated or aggressively audited should flag those sections with the exact marker `**AUDIT FLASH POINT**`. CPAs scan for this when reviewing. Examples: §174 R&D capitalization, §1402(a)(13) limited-partner SE (post-Soroban), §183 hobby vs business, ERC clawbacks, BBA partnership audits, AB5 misclassification.

## Annual update infrastructure

`packages/us-federal/rates.2025.json` and `rates.2026.json` carry all indexed federal amounts (brackets, SS wage base, retirement limits, FEIE, gift/estate, etc.). Skills cite the markdown for narrative; in December each year, maintainers refresh the rates JSON and re-publish. See `packages/us-federal/ANNUAL-UPDATE-RUNBOOK.md` for the December playbook.

## Commit policy

Do **not** add `Co-Authored-By: Claude` trailers, `Co-Authored-By: <any AI>` trailers, or "🤖 Generated with Claude Code" / similar AI-attribution lines to commit messages.

All commits should show only the human author (Michael Cutajar or whoever else is committing). GitHub's contributor graph follows `Co-Authored-By` trailers and attributes them to the listed user; the `Co-Authored-By: Claude … <noreply@anthropic.com>` line caused a phantom `claude` GitHub user to dominate the project's contributor stats. The fix is to drop the trailer entirely going forward.

Transparency about AI involvement is expressed in README content and public posts, not via per-commit attribution.

## When in doubt

Read the existing files in the same jurisdiction before writing new ones. Tax skills follow predictable shapes (scope → topic-specific rules → worked examples → provenance → disclosure). Match the pattern of well-developed packs (Malta, US-CA, Germany, UK) when filling in thinner countries.
