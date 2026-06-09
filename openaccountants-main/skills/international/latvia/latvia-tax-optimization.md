---
name: latvia-tax-optimization
description: >
  Use this skill whenever asked about reducing tax in Latvia, tax planning, or legal strategies to minimise tax for a self-employed person or small company in Latvia. Trigger on phrases like "reduce tax Latvia", "Latvia 0% retained profit", "distributed profits tax", "reinvested profit Latvia", "micro-enterprise tax", "mikrouzņēmuma nodoklis", "FIK vs SIA", "Latvia dividends", "save tax Latvia", "tax planning Latvia". This skill covers the distributed-profits CIT (0% on reinvested profit, 20% only on distribution), the micro-enterprise tax regime, the self-employed vs company choice, the 2026 alternative dividend regime, and the substance/anti-avoidance red lines. ALWAYS read this skill before advising on any Latvian tax optimisation.
version: 0.1
jurisdiction: LV
category: tax-optimization
depends_on: []
verified_by: pending
---

# Latvia Tax Optimization Skill v0.1

**Tier 2 — research-verified. Sources: VID (State Revenue Service), Finanšu ministrija, PwC/KPMG Latvia. Figures must agree with `latvia-income-tax.md` / `latvia-social-contributions.md` / `latvia-payroll.md`. NOT yet signed off by a Latvian tax adviser. Aggressive positions are never advised; every suggestion must be reviewed.**

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Republic of Latvia |
| Currency | EUR |
| Headline levers | Distributed-profits CIT (0% reinvested / 20% on distribution); micro-enterprise tax; FIK vs SIA |
| Corporate tax (SIA) | **0% on reinvested/retained profit; 20% only when distributed** (applied to a 0.8 base → effective 25% of the net amount distributed). (VID; Finanšu ministrija) |
| Micro-enterprise tax | **25% of turnover** (a single combined tax) for qualifying small businesses |
| Self-employed (FIK) | IIN at **25.5%** (progressive top) **or** micro-enterprise tax 25% |
| Anti-avoidance | Substance; deemed-distribution rules capture non-business spending |

> **The Latvian headline mirrors Estonia: an SIA company pays 0% on profit it RETAINS/REINVESTS, and 20% only when it distributes.** Reinvest, and you defer indefinitely.

---

## Section 2 -- Deferral via a Company (the core lever)

| Action | Tax |
|---|---|
| SIA earns profit, **reinvests/retains** it | **0% CIT** |
| SIA **distributes** profit as dividends | 20% CIT on the distribution (gross-up: tax = 20% × profit/0.8 ⇒ ~25% of the net paid) |
| Non-business spending / deemed distributions | Taxed as if distributed — keep business/private clean |

For anyone reinvesting to grow (hiring, equipment, expansion), the SIA defers all corporate tax until cash is taken out. **This usually beats operating as a self-employed FIK** (taxed currently at up to 25.5%).

**2026 alternative regime** — for SIAs whose direct shareholders are **only individuals**: distributable profit is divided by **0.85** and taxed at **15% CIT**, with **6% PIT** withheld on the actual amount paid. **[RESEARCH GAP — reviewer to confirm the 2026 alternative-regime mechanics and whether it beats the standard 20% route for the client.]**

---

## Section 3 -- Micro-Enterprise Tax (simplicity for the small)

- A single **25% of turnover** tax covers CIT + PIT + (part of) social insurance for qualifying micro-enterprises. (PwC)
- Simple and predictable; but **no expense deduction** and turnover caps + activity limits apply. **[RESEARCH GAP — reviewer to confirm the current turnover cap and eligibility.]**
- Best for very small, low-expense activities; model against the FIK/SIA routes.

---

## Section 4 -- Self-Employed (FIK) vs Company (SIA)

| Route | Treatment | Best when |
|---|---|---|
| **FIK** (self-employed) | IIN up to 25.5% currently on net income; mandatory social insurance | Small, want income now, simple |
| **Micro-enterprise** | 25% of turnover | Tiny, low expenses |
| **SIA** | 0% retained / 20% distributed; real-expense deduction; limited liability | Reinvesting, growing, higher margins |

---

## Section 5 -- Deductions & Reliefs

| Item | Treatment |
|---|---|
| Differentiated non-taxable minimum / reliefs | Per `latvia-income-tax.md` — confirm the 2025/2026 non-taxable minimum and dependant allowances. |
| SIA business expenses | Deductible against profit; but private use → deemed distribution (taxed). |
| Pension (Pillar 3) & donations | Limited deductible allowances. |

---

## Section 6 -- Red Lines (do not cross)

- **Deemed distributions:** non-business expenses, excessive loans to shareholders, and non-arm's-length transactions are taxed as if distributed — you cannot extract value tax-free by mislabelling it.
- **Substance:** the SIA must carry on genuine business.
- Micro-enterprise regime must not be used to disguise what is really employment or a larger business split into pieces. **AUDIT FLASH POINT**.

---

## PROHIBITIONS

- NEVER describe the SIA 0%-retained system as tax-free — it is deferral; 20% applies on distribution.
- NEVER advise extracting company value as "expenses"/loans to dodge the distribution tax — that triggers deemed-distribution tax.
- NEVER present the micro-enterprise regime without its turnover cap and no-deduction trade-off.
- NEVER contradict the rates in `latvia-income-tax.md` / `latvia-social-contributions.md` / `latvia-payroll.md`.
- NEVER present [RESEARCH GAP] figures as confirmed, nor optimisation as definitive advice — route to a licensed Latvian tax adviser.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a licensed tax adviser in Latvia) before acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
