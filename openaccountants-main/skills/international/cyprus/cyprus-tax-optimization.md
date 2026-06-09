---
name: cyprus-tax-optimization
description: >
  Use this skill whenever asked about reducing tax in Cyprus, tax planning, or legal strategies to minimise tax for an individual, freelancer, or company in Cyprus. Trigger on phrases like "reduce tax Cyprus", "Cyprus non-dom", "non-domiciled", "0% dividend tax", "SDC exemption", "Cyprus IP box", "3% tax IP", "Cyprus company dividends", "60-day rule", "save tax Cyprus", "tax planning Cyprus". This skill covers the non-dom regime (17 years 0% SDC on dividends/interest/rents), the company-plus-dividend extraction structure, the IP Box (~3% on qualifying IP), self-employment vs company, the personal-income reliefs, and the substance/anti-avoidance red lines. ALWAYS read this skill before advising on any Cyprus tax optimisation.
version: 0.1
jurisdiction: CY
category: tax-optimization
depends_on: []
verified_by: pending
---

# Cyprus Tax Optimization Skill v0.1

**Tier 2 — research-verified. Sources: Cyprus Tax Department, PwC/KPMG/Deloitte Cyprus, 2026 tax-reform commentary. Figures must agree with `cyprus-income-tax.md` / `cyprus-social-contributions.md`. NOT yet signed off by a Cyprus tax adviser. Aggressive positions are never advised; every suggestion must be reviewed.**

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Republic of Cyprus |
| Currency | EUR |
| Headline levers | Non-dom (0% SDC on dividends/interest/rents); company + dividend extraction; IP Box (~3% on qualifying IP) |
| Personal income tax | 0% up to €19,500 (2025); 20/25/30/35% bands above. **2026 reform raises the 0% band to €22,000** — confirm against `cyprus-income-tax.md`. |
| Corporate tax | 12.5% → **15%** under OECD Pillar Two (confirm effective date) |
| SDC (Special Defence Contribution) | Applies to dividends/interest/rents of Cyprus-DOMICILED residents; **non-doms are exempt** |
| Self-employed social insurance | ~16.6% of deemed income |
| Anti-avoidance | Substance / place-of-effective-management; ATAD GAAR |

> **The Cyprus headline is the NON-DOM + COMPANY combo:** run profits through a Cyprus company (12.5–15% CIT), then extract as dividends which — for a non-dom — bear **0% SDC and 0% PIT**. Total effective tax ≈ the corporate rate only.

---

## Section 2 -- Non-Dom Regime (the headline)

A Cyprus tax resident who is **non-domiciled** pays **0% SDC** on worldwide **dividends, interest and rental income** for **17 years** of residency (extendable by two further 5-year blocks via a €250,000 lump-sum fee each → up to 27 years). (Savva; KPMG)

**Becoming resident** — two routes:
- **183-day rule**, or
- **60-day rule**: ≥60 days in Cyprus, not tax-resident elsewhere, no >183 days in any single country, plus a Cyprus tie (business/employment/directorship) and a residence (owned or rented).

**AUDIT FLASH POINT** — the 60-day route and non-dom status require genuine residency and ties; sham residency is challengeable. Confirm the client actually meets the day-count and tie tests.

---

## Section 3 -- Company + Dividend Extraction

| Step | Treatment |
|---|---|
| Trade through a Cyprus company | 12.5–15% CIT on profits |
| Pay a modest director salary | Deductible; subject to PIT + social insurance; covers cover/pension |
| Distribute the rest as dividends | Non-dom shareholder: **0% SDC + 0% PIT** on dividends |

Net effect for a non-dom owner-manager: roughly the **corporate rate only** on extracted profit. Compare with operating as a **self-employed individual**, taxed on the progressive scale up to 35% — usually worse at higher incomes. **[RESEARCH GAP — model the salary/dividend split and confirm the GHS (health) contribution treatment on dividends.]**

---

## Section 4 -- IP Box (~3% on qualifying IP)

Qualifying IP income (patents, copyrighted software, etc.) gets an **80% deemed deduction**, so only 20% is taxed at the corporate rate → **≈3% effective**. Benefit is proportional to the **R&D you actually incur** (OECD modified nexus). Ideal for SaaS/tech/IP founders. (Mondaq; LCK)

**AUDIT FLASH POINT** — the nexus rule ties the benefit to genuine R&D substance in Cyprus; acquired IP with no local development does not qualify. **[RESEARCH GAP — reviewer to confirm qualifying-asset definitions and the nexus fraction.]**

---

## Section 5 -- Personal Reliefs & Exemptions

| Relief | Detail |
|---|---|
| 0% band | Income up to €19,500 (2025) / €22,000 (2026 reform) is tax-free. |
| Expat / first-employment relief | 50% exemption for high-earning new residents (above a salary threshold) for a number of years; a separate 20% relief exists for others. **[RESEARCH GAP — reviewer to confirm current thresholds and durations after the 2026 reform.]** |
| Foreign pension | Taxed at a flat 5% above a small exempt amount (election available). |
| Life insurance / provident / social insurance | Deductible up to a capped percentage of income. |

---

## Section 6 -- Red Lines (do not cross)

- **Substance & management:** a Cyprus company must be genuinely managed and controlled in Cyprus (board, decisions, substance) to be Cyprus-resident and to benefit. Letterbox companies are challengeable.
- **Non-dom residency must be real** — meet the day-count and tie tests; don't fabricate residency.
- **IP Box needs real R&D** — nexus approach; no benefit for parked, acquired IP.
- ATAD GAAR / anti-abuse applies to arrangements whose main purpose is a tax advantage without substance.

---

## PROHIBITIONS

- NEVER present non-dom 0% SDC without confirming genuine Cyprus tax residency (60-day or 183-day test).
- NEVER present the IP Box 3% without the R&D-nexus / substance condition.
- NEVER advise a substance-free Cyprus company as a tax shell.
- NEVER contradict the rates/bands in `cyprus-income-tax.md` / `cyprus-social-contributions.md`.
- NEVER present any [RESEARCH GAP] figure as confirmed, nor present optimisation as definitive advice — route to a licensed Cyprus tax adviser.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a licensed tax adviser in Cyprus) before acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
