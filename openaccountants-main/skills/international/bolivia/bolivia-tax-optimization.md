---
name: bolivia-tax-optimization
description: >
  Use this skill whenever asked about reducing tax in Bolivia, tax planning, or legal strategies to minimise tax for a small trader or business in Bolivia. Trigger on phrases like "reduce tax Bolivia", "régimen simplificado", "RTS Bolivia", "small trader tax", "IUE 25%", "self-employed Bolivia", "save tax Bolivia", "tax planning Bolivia". This skill covers the Régimen Tributario Simplificado (capital-based fixed fee), the general regime (IUE/IVA/IT/RC-IVA), and the eligibility/anti-avoidance red lines. ALWAYS read this skill before advising on any Bolivian tax optimisation.
version: 0.1
jurisdiction: BO
category: tax-optimization
depends_on: []
verified_by: pending
---

# Bolivia Tax Optimization Skill v0.1

**Tier 2 — research-verified. Sources: Servicio de Impuestos Nacionales (SIN/Impuestos.gob.bo), PwC Bolivia. Figures must agree with `bolivia-income-tax.md` / `bolivia-social-contributions.md`. NOT yet signed off by a Bolivian tax adviser. Aggressive positions are never advised; every suggestion must be reviewed.**

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Plurinational State of Bolivia |
| Currency | BOB (boliviano, Bs) |
| Headline levers | Régimen Tributario Simplificado (RTS) for tiny traders; otherwise the general regime |
| General regime | IUE 25% (corporate); IVA 13%; IT 3%; RC-IVA 13% (complementary on individuals) |
| Anti-avoidance | RTS activity/capital limits; substance |

> **Bolivia's small-trader lever is the RTS** — a fixed bimonthly fee based on **capital**, not income, for retail/food/artisan activity. It is very narrow; most service businesses fall under the general regime (IUE 25%).

---

## Section 2 -- Régimen Tributario Simplificado (RTS)

| Feature | Detail |
|---|---|
| Who | Natural persons in **retail commerce, food sales (vivanderos), artisans** only |
| Capital limit | Bs 60,000 (capital ≤ Bs 12,000 with sales < Bs 184,000 → no registration needed) |
| Tax | A **fixed bimonthly fee (Bs 47–200)** by category (assigned on declared capital); no invoices issued |

The RTS is a flat, predictable micro-fee — but excludes most professional/service activity. (SIN; impuestos.gob.bo)

---

## Section 3 -- General Regime (most businesses)

| Tax | Rate |
|---|---|
| IUE (corporate income tax) | 25% |
| IVA (VAT) | 13% |
| IT (transactions tax) | 3% |
| RC-IVA (complementary, individuals) | 13% — offsettable with VAT on personal purchase invoices |

**Optimisation under the general regime is mostly about (a) collecting VAT-bearing purchase invoices to offset RC-IVA/IVA, and (b) genuine deductible expenses against IUE.** **[RESEARCH GAP — reviewer to confirm any SME incentives and the dividend treatment.]**

---

## Section 4 -- Red Lines (do not cross)

- **RTS eligibility** is narrow (activity + capital limits) — don't place service/professional activity there. **AUDIT FLASH POINT**.
- Keep genuine VAT purchase invoices to offset RC-IVA — but never use fake invoices (a known enforcement focus).
- Substance for any structure.

---

## PROHIBITIONS

- NEVER present the RTS for service/professional activity (retail/food/artisan only).
- NEVER use fabricated purchase invoices to offset RC-IVA/IVA.
- NEVER contradict the rates in `bolivia-income-tax.md` / `bolivia-social-contributions.md`.
- NEVER present [RESEARCH GAP] figures as confirmed, nor optimisation as definitive advice — route to a licensed Bolivian tax adviser.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a licensed tax adviser in Bolivia) before acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
