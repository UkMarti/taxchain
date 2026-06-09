# Start Here

A guided tour. Find the row that matches you, follow the recipe.

If you only read one file in this repo, this is the one.

---

## What is this?

OpenAccountants is a library of **research-verified or accountant-verified** AI skills that you upload to Claude, ChatGPT, or any LLM. Give the AI your bank statement and the right files, and you get a working paper your accountant can sign off in minutes.

It is **not** tax advice. It is a pre-meeting working paper.

---

## Find your scenario

### Pick the row that matches you most closely

| You are… | Go to | Upload | Then say |
|---|---|---|---|
| **A freelancer / sole proprietor in [country]** | [`packages/<country>/`](packages/) | Every `.md` in your country folder | "Help me with my 2025 taxes. Here's my bank statement." |
| **A US freelancer / sole proprietor / single-member LLC** | [`packages/us-<state>/`](packages/) (e.g. `us-ca`, `us-ny`, `us-tx`) | All files in your state folder | "Help me with my 2025 taxes. I'm based in [state]. Here's my bank statement." |
| **A Canadian sole proprietor** | [`packages/ca-<province>/`](packages/) (e.g. `ca-on`, `ca-qc`, `ca-bc`) — bundled federal + provincial | All files in your province package. If absent, run `python3 scripts/build-packages.py` first. | "Help me with my 2025 taxes. I'm based in [province]. Here's my bank statement." |
| **A freelance developer / consultant** | Your country/state package **plus** [`packages/_verticals/freelance-developer.md`](packages/_verticals/) | Country files + the vertical file | "I'm a freelance developer in [location]. Here's my bank statement." |
| **An e-commerce seller (Etsy, Shopify, Amazon, eBay)** | Your country package + [`packages/_verticals/ecommerce-seller.md`](packages/_verticals/) + [`packages/_integrations/`](packages/_integrations/) (Stripe, PayPal, Shopify, Amazon Seller) | All of the above | "I sell on [platforms]. Here's last year's data." |
| **A content creator (YouTube, Twitch, Patreon, Substack)** | Your country package + [`packages/_verticals/content-creator.md`](packages/_verticals/) | All of the above | "I make money from [platforms]. Here's my statements." |
| **A property landlord / rental investor** | Your country package + [`packages/_verticals/property-investor.md`](packages/_verticals/) | All of the above | "I own [n] rental properties in [location]. Here's the income/expenses." |
| **A medical professional in private practice** | Your country/state package + [`packages/_verticals/medical-professional.md`](packages/_verticals/) | All of the above | "I run a private practice in [location]. Here's the books." |
| **A small accounting firm or solo practitioner** | Multiple country packages for the jurisdictions your clients are in | Per client | "I'm preparing for [client] in [jurisdiction]. Here's their bank statement." |
| **A crypto trader / investor** | Your country package + `<country>-crypto-tax.md` (21 countries and all 51 US states ship a dedicated skill) | Country + crypto skill | "Here's my exchange CSV / wallet history. Help me with my crypto tax." |
| **A SaaS / digital products company** | Your country/state corporate package + [`skills/verticals/saas-digital-products.md`](skills/verticals/saas-digital-products.md) + [`skills/cross-border/digital-services-tax-matrix.md`](skills/cross-border/digital-services-tax-matrix.md) | All of the above | "We sell SaaS to customers in [countries]. Help us with DST, OSS, sales tax." |
| **An MNE / large group worried about Pillar Two** | [`skills/cross-border/pillar-two-globe-minimum-tax.md`](skills/cross-border/pillar-two-globe-minimum-tax.md) + relevant country corporate skills | Pillar Two + your group's country packages | "We're an MNE with EUR 1bn revenue across [countries]. Help us model the Pillar Two ETR." |
| **An EU importer worried about CBAM** | [`skills/cross-border/cbam-carbon-border-adjustment.md`](skills/cross-border/cbam-carbon-border-adjustment.md) | Just the CBAM skill (it's standalone) | "I import [steel/cement/fertiliser/aluminium/hydrogen/electricity] from [country]. Help me prepare the CBAM quarterly report." |
| **A Financial Institution / FI / trustee handling FATCA/CRS** | [`skills/cross-border/fatca-crs-automatic-exchange.md`](skills/cross-border/fatca-crs-automatic-exchange.md) | Just the FATCA/CRS skill | "We're an FI in [country]. Classify these accounts under FATCA and CRS." |
| **A startup planning an S-corp election (US)** | [`packages/us-<state>/us-s-corp-election-decision.md`](packages/) | Federal + state files including the S-corp skill | "Should I become an S-corp? My net profit is [$X], state is [Y]." |
| **A property buyer figuring out stamp duty / SDLT / ABSD** | [`skills/cross-border/property-transfer-tax-matrix.md`](skills/cross-border/property-transfer-tax-matrix.md) | The RETT matrix | "I'm buying property in [country] for [amount], status [resident/non-resident/foreign]. How much is the transfer tax?" |
| **Handling an estate / inheritance** | [`skills/cross-border/inheritance-estate-gift-matrix.md`](skills/cross-border/inheritance-estate-gift-matrix.md) + relevant country packages | All of the above | "[Decedent] died in [country] holding [assets in countries]. Help with the estate." |
| **An accountant who wants to verify a jurisdiction** | [`docs/QUALITY-TIERS.md`](docs/QUALITY-TIERS.md) + your jurisdiction's source files in `skills/` | None to upload — you're a reviewer | "I want to verify the skills for [jurisdiction]. What's the process?" |

---

## How the AI uses these files

Every skill has the same structure:

1. **Step 0 — Onboarding.** The AI asks 3-5 scope questions before touching numbers.
2. **Step 1+ — Classification & computation.** Every transaction gets one of three outcomes:
   - **Classified** — clear from documents
   - **Assumed** — a conservative default applied, flagged for reviewer
   - **Needs Input** — one targeted question for you
3. **Output** — Working Paper, Reviewer Brief, Action List, Review Checklist.

The default behaviour: when uncertain, **assume more tax, never less**. Your accountant can correct an over-conservative position; an aggressive one is much harder to unwind.

---

## What you give the AI

The more you give, the less it has to assume. Best-to-worst order:

1. **Bookkeeping export** from Xero / QuickBooks / FreeAgent / Sage / FreshBooks — perfect.
2. **Bank statement CSV or PDF** — workable.
3. **Bank statement screenshots** — works but slower.
4. **Verbal description** — last resort.

Always also share:
- Last year's tax return (if any) — anchors the current year.
- A list of invoices issued / received (if not on bank statement).
- Anything unusual (asset sales, new business activities, life events, mid-year jurisdiction change).

---

## What the AI gives you

Four artefacts per session:

1. **Working Paper** — full transaction-by-transaction classification with reasoning.
2. **Reviewer Brief** — what your accountant needs to see first; key positions; assumptions; risk register.
3. **Action List** — what you (the taxpayer) need to do next (pay this, file that, by date).
4. **Review Checklist** — what your accountant should check before signing.

Take all four to your accountant. Their job becomes review-and-correct, not classify-from-zero.

---

## Two ways to load the skills

| Method | How | Best for |
|---|---|---|
| **Manual upload** | Drag and drop the `.md` files into Claude.ai project knowledge / ChatGPT custom GPT / any LLM file attachment | Anyone, any LLM, one-off use |
| **MCP server** | `pip install openaccountants-mcp`; add one line to Claude Desktop config | Power users; auto-loads the right country |

See the main [README.md](README.md) for MCP installation details.

---

## Quality — what you're trusting

Every skill is one of two tiers:

- **Accountant-verified** — a licensed practitioner has signed off. (Currently: Malta full suite, Germany VAT, US federal bookkeeping + SE.)
- **Research-verified** — drafted from authoritative sources (tax-authority publications and primary legislation), awaiting credentialed sign-off.

Every output goes to your accountant. We do not file anything on your behalf, and we are not a substitute for a credentialed reviewer.

See [QUALITY-TIERS.md](docs/QUALITY-TIERS.md) for the full definitions.

---

## If you're stuck

- **Country not listed?** Check [`packages/`](packages/) — we have folders for 134 countries. If yours is missing, file an issue.
- **Your scenario isn't in the table above?** Open an issue describing it and we'll add a row.
- **Skill produced something wrong?** That's a contribution. Email info@openaccountants.com or submit a PR. Your correction gets the skill upgraded and you get public credit.

---

## What this repo is not

- It is **not** tax filing software. Nothing here e-files for you.
- It is **not** a substitute for an accountant. Every output requires credentialed review.
- It is **not** legal advice. Tax law has nuance no AI captures.
- It is **not** a guarantee. LLMs hallucinate, rates change, and your circumstances are unique.

The point is to do the boring 80% of the work — classification, computation, filing prep — so your accountant can focus on the 20% that requires judgment.
