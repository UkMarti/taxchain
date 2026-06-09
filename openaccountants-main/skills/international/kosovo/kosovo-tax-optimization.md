---
name: kosovo-tax-optimization
description: >
  Use this skill whenever asked about reducing tax in Kosovo, tax planning, or legal strategies to minimise tax for a self-employed person or small business in Kosovo. Trigger on phrases like "reduce tax Kosovo", "small business 3% Kosovo", "turnover tax Kosovo", "9% services tax", "sole proprietor vs company Kosovo", "0% dividend Kosovo", "save tax Kosovo", "tax planning Kosovo". This skill covers the small-business simplified turnover tax (3% trade / 9% services, under €30k), the 10% CIT option, the 0% dividend extraction, and the disguised-employment red line. ALWAYS read this skill before advising on any Kosovo tax optimisation.
version: 0.1
jurisdiction: XK
category: tax-optimization
depends_on: []
verified_by: pending
---

# Kosovo Tax Optimization Skill v0.1

**Tier 2 — research-verified. Sources: ATK (Tax Administration of Kosovo), PwC Kosovo, Eurofast. Figures must agree with `kosovo-income-tax.md` / `kosovo-social-contributions.md`. NOT yet signed off by a Kosovo tax adviser. Aggressive positions are never advised; every suggestion must be reviewed.**

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Republic of Kosovo |
| Currency | EUR |
| Headline levers | Small-business simplified turnover tax (3% / 9%, under €30k); **0% dividends**; 10% CIT |
| Corporate tax | 10% |
| Dividends | **0%** (exempt) |
| Anti-avoidance | Substance; disguised employment |

> **Kosovo combines a tiny small-business turnover tax with 0% dividends.** Businesses under **€30,000** gross are exempt from CIT and pay a simplified quarterly turnover tax — and distributions are tax-free.

---

## Section 2 -- Small-Business Simplified Regime (under €30,000)

| Activity | Quarterly turnover tax |
|---|---|
| Trade, transport, agriculture | **3%** of gross (min €37.50/quarter) |
| Services, professional, artisanal | **9%** of gross |

- Available where **gross annual income ≤ €30,000**; exempt from the 10% CIT.
- A small business may **voluntarily elect the 10% CIT** instead — beneficial only when **real deductible expenses are high** (10% of net profit < 3%/9% of gross). Model both. (PwC; ATK)

---

## Section 3 -- Above €30,000 & Extraction

- Above €30,000: 10% CIT on net profit (companies) / business income on the PIT scale (per `kosovo-income-tax.md`).
- **Dividends: 0%** — profit extracts tax-free once CIT is paid.
- Interest 10%, rent 9%, royalties 10% (for completeness).

---

## Section 4 -- Red Lines (do not cross)

- **Disguised employment:** single-client sole proprietor under employer-like control → reclassification. **AUDIT FLASH POINT**.
- Don't split a business across entities to stay under €30,000 without substance.
- The 9% services rate is on **gross** — for high-expense services, the 10% CIT route may be cheaper; don't default to the turnover tax blindly.

---

## PROHIBITIONS

- NEVER present the 3% rate for services — services pay 9% of gross under the simplified regime.
- NEVER ignore the €30,000 ceiling.
- NEVER present single-client work as safe self-employment.
- NEVER contradict the rates in `kosovo-income-tax.md` / `kosovo-social-contributions.md`.
- NEVER present optimisation as definitive advice — route to a licensed Kosovo tax adviser.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a licensed tax adviser in Kosovo) before acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
