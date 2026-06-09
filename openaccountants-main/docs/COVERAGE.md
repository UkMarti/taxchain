# Coverage — single source of truth

**This file is the canonical record of OpenAccountants coverage numbers.** Every other surface — GitHub README, repo About, the website, Smithery, MCP directories, release notes — should match the figures here. If they disagree, this file wins; fix the other surface.

_Last updated: 2026-06-07 · source: production database (skills served via the MCP server)._

## Headline (use these)

| Claim | Number |
|---|---|
| Skills (published) | **1,098** |
| Jurisdictions | **192** |
| Rounded headline | **1,000+ skills across 192 jurisdictions** |

> When a headline needs round numbers, use **"1,000+ skills"** and **"192 jurisdictions"** (or **"130+ countries plus every US state"**). Do not invent other figures.

## Verification split

OpenAccountants has two verification tiers (see [QUALITY-TIERS.md](QUALITY-TIERS.md)). The distinction matters and should never be collapsed into a blanket "accountant-verified":

| Tier | What it means | Count | Where it lives |
|---|---|---|---|
| **Accountant-verified** (Tier 1) | A licensed practitioner has signed off; name + credential on every output | **85** | **MCP server only** (not in this repo) |
| **Research-verified** (Tier 2) | Every rate/threshold/form drafted from authoritative sources, awaiting credentialed sign-off | **1,013** | **This repo** |

**Correct headline phrasing:** _"Research-verified in this repo. Accountant-verified via the MCP connector."_

## Jurisdiction breakdown

| Level | Count |
|---|---|
| Country-level jurisdictions | **139** |
| US state-level codes (50 states + DC + federal) | **53** |
| **Total distinct jurisdictions** | **192** |

Notes:
- "130+ countries" is the safe rounded claim (139 country-level jurisdictions). **Do not say "every country"** — there are ~195 sovereign countries; we cover ~139.
- Canada is served at the federal level (`CA`) via the MCP; this repo additionally breaks Canada into province/territory packages.
- US is covered federally plus every state and DC.

## How to update this file

When skills are published or jurisdictions added, re-run the counts against the production database and update the tables above **and** the "Last updated" date. Then reconcile the README headline, repo About, and website to match.
