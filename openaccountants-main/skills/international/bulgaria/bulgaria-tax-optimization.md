---
name: bulgaria-tax-optimization
description: >
  Use this skill whenever asked about reducing tax in Bulgaria, tax planning, or legal strategies to minimise tax for a freelancer, sole trader, or small company in Bulgaria. Trigger on phrases like "reduce tax Bulgaria", "10% flat tax", "Bulgaria freelancer 7.5%", "svobodna profesiya", "normative expense deduction", "sole trader vs EOOD", "Bulgaria dividends 5%", "save tax Bulgaria", "Bulgaria tax haven", "tax planning Bulgaria". This skill covers the freelancer (self-insured professional) 25% normative-expense regime giving a 7.5% effective rate, sole-trader vs EOOD company choice, the 5% dividend withholding, deductions and child reliefs, and the substance/anti-avoidance red lines. ALWAYS read this skill before advising on any Bulgarian tax optimisation.
version: 0.1
jurisdiction: BG
category: tax-optimization
depends_on: []
verified_by: pending
---

# Bulgaria Tax Optimization Skill v0.1

**Tier 2 — research-verified. Sources: NRA (National Revenue Agency), PwC Bulgaria, Innovires/NomadTax. Figures must agree with `bulgaria-income-tax.md` / `bulgaria-social-contributions.md`. NOT yet signed off by a Bulgarian tax adviser. Aggressive positions are never advised; every suggestion must be reviewed.**

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Republic of Bulgaria |
| Currency | BGN (EUR from 1 Jan 2026 at 1.95583) |
| Headline levers | Freelancer 25% normative deduction → **7.5% effective**; freelancer vs sole-trader vs EOOD; 5% dividend WHT |
| Personal income tax | **10% flat** (per `bulgaria-income-tax.md`) |
| Corporate tax (EOOD) | **10%**; dividend withholding **5%** → ~15% combined on fully-distributed profit |
| Anti-avoidance | Substance over form; freelancer must not be disguised employment |

> **The Bulgarian headline is the FREELANCER (svobodna profesiya) regime:** a registered free-profession gets an automatic **25% "normatively recognised expense" deduction**, so only 75% of gross is taxed at 10% → an **effective ~7.5%** income-tax rate (the lowest in the EU), before contributions.

---

## Section 2 -- Regime Election (the core decision)

| Structure | Income tax | Best when |
|---|---|---|
| **Freelancer** (svobodna profesiya, self-insured) | 10% on 75% of gross = **7.5% effective** (automatic 25% normative deduction; no need to prove expenses) | Solo professionals/consultants, low real expenses, roughly **< €100–150k/yr**, no employees |
| **Sole trader** (ET, едноличен търговец) | ~**15%** on net profit (with a 5% discount for early filing) | Rarely optimal vs freelancer for solo work |
| **EOOD** (single-member Ltd) | **10% CIT** + **5%** dividend WHT ≈ 15% on distributed profit | Higher volumes, teams, real expenses, liability/credibility; retained profit deferred until distribution |

**Tipping point:** the freelancer's flat 7.5% wins for solo work up to roughly €100–150k/yr; above that, or with employees/teams, an **EOOD** typically nets more (real-expense deduction + retained-profit deferral). Model both around that range. (Innovires; NomadTax)

---

## Section 3 -- Dividends & Profit Extraction (EOOD)

- EOOD profit: 10% CIT. Retained profit is **not** taxed again until distributed.
- Dividends to the owner: **5% final withholding** → ~15% all-in on fully distributed profit.
- A modest, deductible **manager's contract** salary can cover social security while the bulk is taken as low-taxed dividends — but it must be genuine. **[RESEARCH GAP — reviewer to confirm minimum manager-remuneration / self-insured base rules.]**

---

## Section 4 -- Deductions & Contributions

| Item | Treatment |
|---|---|
| Freelancer normative expense | Automatic 25% of gross — no documentation needed; you cannot *also* deduct real expenses. |
| EOOD real expenses | Genuine business costs deductible against the 10% CIT base. |
| Social & health contributions | Deductible from the PIT base; freelancers/self-insured pay on an elected insurable income between the floor and ceiling (see `bulgaria-social-contributions.md`) — electing the **minimum insurable income** minimises contributions (within the law). |
| Voluntary pension/life | Limited deductible allowances. |

---

## Section 5 -- Reliefs

| Relief | Detail |
|---|---|
| Children relief | Annual PIT reduction per child (and enhanced for a disabled child), claimed via the annual return. **[RESEARCH GAP — reviewer to confirm current per-child amounts.]** |
| Early-filing discount | 5% discount for sole traders/individuals who file and pay by the deadline. |
| Personal contributions | Mandatory contributions reduce the taxable base. |

---

## Section 6 -- Red Lines (do not cross)

- **Disguised employment:** a "freelancer" working for a single client under employer-like control can be reclassified as an employee. **AUDIT FLASH POINT**.
- **Substance:** an EOOD used purely to convert salary into 5% dividends without genuine business can be challenged.
- Electing the minimum insurable income is legal, but **under-declaring real income is not**.

---

## PROHIBITIONS

- NEVER combine the 25% normative deduction with real-expense deductions — it is one or the other.
- NEVER present the freelancer regime for what is really single-client employment.
- NEVER advise under-declaring income to stay in a low band.
- NEVER contradict the rates in `bulgaria-income-tax.md` / `bulgaria-social-contributions.md`.
- NEVER present [RESEARCH GAP] figures as confirmed, nor optimisation as definitive advice — route to a licensed Bulgarian tax adviser.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a licensed tax adviser in Bulgaria) before acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
