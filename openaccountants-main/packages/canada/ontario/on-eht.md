---
name: on-eht
description: Use this skill for Ontario Employer Health Tax (EHT). Triggers "Ontario EHT", "Employer Health Tax Ontario", "EHT exemption Ontario", "EHT $1M threshold", "Ontario payroll tax", "Form 6076E EHT annual return". ALWAYS read alongside canada-payroll.
version: 1.0
jurisdiction: CA
sub_region: ON
tax_year: 2025
category: international
verified_by: pending
---

# Ontario — Employer Health Tax (EHT) — Skill v1.0

The Ontario Employer Health Tax (EHT) is a payroll-based tax levied under the *Employer Health Tax Act*, R.S.O. 1990, c. E.11, administered by the Ontario Ministry of Finance. It applies to employers with permanent establishments in Ontario, in addition to any federal CPP/EI obligations covered by **canada-payroll**. This skill MUST be read alongside canada-payroll whenever Ontario payroll is in scope.

---

## 1. Quick reference

| Item | 2025 value |
|---|---|
| Exemption (private-sector eligible employers) | **$1,000,000** of Ontario remuneration |
| Top rate (payroll > $400,000) | **1.95%** |
| Bottom rate (payroll ≤ $200,000, not exempt) | **0.98%** |
| Sliding scale band | $200,001 – $400,000 (rate 0.98% → 1.95%) |
| Registration / filing threshold | Total Ontario payroll > **$200,000** in the year, OR EHT payable for the year |
| Annual return | **Form 6076E** — due **March 15** following tax year |
| Monthly instalment trigger | Prior-year EHT > **$600** |

> **Two-step calculation:** (1) subtract any allocated $1M exemption from total Ontario remuneration; (2) apply the rate from the bracket that the **total** (pre-exemption) payroll falls into to the **remuneration after exemption**.

---

## 2. Required inputs + refusal catalogue

### Required inputs
- Legal name, Ontario EHT account number (1234-5678-RT0001 style not used; EHT has its own 7-digit account).
- Total **Ontario remuneration** paid in the calendar year (gross wages, salaries, bonuses, taxable benefits, commissions, vacation pay, stock-option benefits, director's fees attributable to Ontario service).
- Whether the employer is part of an **associated group** under s. 1(2) of the EHT Act (and the associated-employer Exemption Allocation Agreement, Form ON00150E).
- Sector classification (private, public, charitable, multi-account charitable).
- Prior-year EHT (to determine monthly-instalment requirement).
- Number of months of operation in the year (for proration in start-up / wind-up / short-year cases).

### Refusal catalogue
Refuse and escalate if the engagement involves:
- **R-ON-EHT-1** Public-sector or quasi-public-sector employers (no $1M exemption; complex grant-funded payroll rules).
- **R-ON-EHT-2** Multi-account charitable employers with more than one qualifying campus (s. 2.1 EHT Act, separate per-campus exemption mechanics).
- **R-ON-EHT-3** Voluntary disclosure or arrears settlement (Ontario Voluntary Disclosures Program).
- **R-ON-EHT-4** Associated-employer disputes where the s. 256 ITA association test is contested.
- **R-ON-EHT-5** Stock option benefit timing disputes (s. 1(1) "remuneration" — Ontario follows federal timing under s. 7 ITA, but disputes go to the Minister, not us).
- **R-ON-EHT-6** Special purpose entities — partnerships of corporations, joint ventures with separate Ontario PE, non-resident employers with intermittent Ontario presence.
- **R-ON-EHT-7** Out-of-scope: WSIB premiums (separate regime — see §10).

---

## 3. Rate

The EHT rate is **not flat**. It is a graduated scale based on **total Ontario remuneration** (pre-exemption):

| Total Ontario remuneration (pre-exemption) | Rate applied to remuneration after exemption |
|---|---|
| Up to $200,000 | 0.98% |
| $200,000.01 – $230,000 | 1.101% |
| $230,000.01 – $260,000 | 1.223% |
| $260,000.01 – $290,000 | 1.344% |
| $290,000.01 – $320,000 | 1.465% |
| $320,000.01 – $350,000 | 1.586% |
| $350,000.01 – $380,000 | 1.708% |
| $380,000.01 – $400,000 | 1.829% |
| Over $400,000 | 1.95% |

The sliding band between $200k and $400k is constructed so the marginal rate climbs roughly linearly from 0.98% to 1.95%.

---

## 4. Exemption

**Eligible private-sector employers** receive an annual exemption of **$1,000,000** of Ontario remuneration. This was raised from $490,000 in March 2020 and remains at $1M for the 2025 tax year.

**Eligibility for the exemption:**
- Private-sector employer (corporations, partnerships, sole proprietors with employees).
- **Not** a public-sector employer listed in s. 1 of the Act (Crown agencies, municipalities, school boards, hospitals, public colleges/universities — these get **no** exemption).
- Total annual Ontario payroll of an associated group **≤ $5,000,000** (the $5M cap was introduced in 2014 — if combined associated-group payroll exceeds $5M, **the entire group loses the exemption** for that year, except for registered charities).
- Registered charities are **not subject to the $5M cap** and always receive the exemption (and may have multiple-account treatment under s. 2.1).

**Associated employers must share** the $1M exemption pursuant to s. 2.2 of the Act. They file **Form ON00150E — Associated Employers Exemption Allocation** to allocate the exemption among themselves. Each associated employer that does not allocate exemption to itself is fully taxable on its Ontario remuneration with no exemption.

**Proration:** the exemption is prorated for short years (employer started or ceased operations partway through the year): exemption × (months of operation ÷ 12). A partial month counts as a full month.

---

## 5. Liability threshold — who must register and file

An employer **must register** for an EHT account if:
- Total Ontario remuneration exceeds the **$1,000,000 exemption** for the year (private sector), OR
- Total Ontario remuneration exceeds **$200,000** for the year and the employer is **not eligible** for the exemption (public sector, associated group over $5M, etc.), OR
- The employer is required to remit EHT on Ontario remuneration that exceeds its allocated share of the exemption.

**No filing required** if Ontario remuneration ≤ $1M for a sole eligible private-sector employer with no associated employers — but **best practice is still to register** if approaching the threshold, because retroactive registration triggers penalties.

**Public sector** and **associated employers over the $5M cap**: must register and file once Ontario payroll exceeds **$200,000** (no exemption — the $200k figure here is the registration floor, not an exemption).

---

## 6. Annual return — Form 6076E

The annual return is **Form 6076E — Employer Health Tax Annual Return**, due **March 15** of the year following the tax year (e.g., 2025 tax year → due **March 15, 2026**).

The return reconciles total Ontario remuneration, applies the exemption (and associated-group allocation), computes EHT at the correct graduated rate, and credits any monthly instalments paid during the year. Net balance owing is due **March 15**; refunds are issued by the Ministry of Finance.

**Filing channels:**
- ONT-TAXS online (preferred — most employers).
- Paper Form 6076E mailed to Ministry of Finance, 33 King Street West, Oshawa ON L1H 8H5.

**Late filing penalty:** 5% of unpaid tax plus 1% per month for up to 12 months, plus interest at the prescribed rate.

---

## 7. Instalments

If the employer's **prior-year EHT** exceeded **$600**, monthly instalments are required for the current year. Instalments are due the **15th day of the month following** the month in which remuneration was paid (e.g., January payroll → February 15 instalment).

Each monthly instalment is computed by applying the appropriate rate to the **Ontario remuneration paid that month**, after deducting the **monthly portion of the exemption** ($1,000,000 ÷ 12 = $83,333.33 per month for a full-year private-sector employer with no associated allocations).

Employers with prior-year EHT ≤ $600 pay annually with the Form 6076E filing.

**Final reconciliation:** the March 15 annual return either tops up underpayment or claims refund of overpayment.

---

## 8. Special situations

**Registered charities (s. 2.1).** Charities receive the $1M exemption per **qualifying campus** (a separate physical location with payroll). Multi-campus charities can multiply their exemption. They are exempt from the $5M associated-group cap.

**Seasonal employers.** Operate only part of the year; exemption is **not** prorated for seasonal operation if the employer existed throughout the year (e.g., a ski resort with a 5-month payroll season still gets the full $1M exemption). The exemption is **only** prorated when the employer's existence (not its activity) is shorter than 12 months.

**Multi-employer associated groups.** Under s. 256 ITA association rules (applied via s. 1(2) EHT Act). One Exemption Allocation Agreement (Form ON00150E) per group. If unallocated, **no employer in the group gets exemption**. Group's combined Ontario payroll determines the $5M cap test.

**Non-resident employers.** Liable for EHT on remuneration paid to employees who report for work at a **permanent establishment in Ontario**, or who are paid from an Ontario PE. A non-resident with no Ontario PE may still trigger EHT if the employee spends substantially all working time in Ontario (s. 1(2) deeming rules).

**Mid-year start-up or wind-up.** Exemption prorated by months of existence. A business that started July 1 has 6 months of existence → exemption = $1,000,000 × 6/12 = $500,000.

**Stock option benefits.** Treated as Ontario remuneration in the year the s. 7 ITA benefit is included in employment income. Sourced to Ontario based on where employment services were performed during the option's vesting period.

---

## 9. Worked example — Toronto tech startup

**Facts:**
- "AcmeDev Inc." — Ontario CCPC, single Ontario PE in downtown Toronto.
- 12 employees, all in Toronto, paid evenly throughout 2025.
- Total 2025 Ontario remuneration: **$1,500,000** (salaries $1,380,000 + taxable benefits $90,000 + bonuses $30,000).
- No associated employers, no public-sector involvement.
- Prior-year (2024) EHT: $4,800 → monthly instalments required.

**Step 1 — Confirm exemption eligibility.**
Private-sector, no associated group, payroll < $5M → eligible for **$1,000,000 exemption**.

**Step 2 — Determine bracket.**
Total Ontario remuneration = $1,500,000. This is **over $400,000**, so the applicable rate is **1.95%** on remuneration after exemption.

**Step 3 — Compute taxable remuneration.**
$1,500,000 − $1,000,000 exemption = **$500,000** taxable.

**Step 4 — Compute EHT.**
$500,000 × 1.95% = **$9,750.00** annual EHT.

**Step 5 — Monthly instalments during 2025.**
Each month: $125,000 paid (1.5M ÷ 12), monthly exemption portion = $83,333.33.
Taxable per month = $125,000 − $83,333.33 = $41,666.67.
EHT per month = $41,666.67 × 1.95% = **$812.50**.
12 × $812.50 = $9,750 ✓ ties to annual.

**Step 6 — Annual return.**
Form 6076E filed by **March 15, 2026**. Total EHT $9,750; instalments paid $9,750; balance owing **$0**.

**Reviewer cross-check:** AcmeDev's federal T4 summary should show $1,500,000 in Box 14 totals across all T4s issued for Ontario employees, matching the Ontario remuneration figure on Form 6076E within a typical reconciling-item tolerance (taxable benefits not on T4 Box 14, etc.). Flag any variance > 2% for review.

---

## 10. Coordination with WSIB

**WSIB (Workplace Safety and Insurance Board)** premiums are a **separate Ontario regime** under the *Workplace Safety and Insurance Act, 1997* — **not** part of EHT. Key distinctions:

| | EHT | WSIB |
|---|---|---|
| Statute | EHT Act, R.S.O. 1990 | WSI Act, S.O. 1997 |
| Administered by | Ministry of Finance | WSIB (Crown agency) |
| Base | Total Ontario remuneration | Insurable earnings (capped) |
| 2025 max insurable earnings (WSIB) | n/a — uncapped | $117,000 per worker |
| Rate | 0.98% – 1.95% (graduated) | Industry classification rate (varies — see WSIB rate schedule) |
| Coverage required? | All Ontario payrolls (over threshold) | Schedule 1 and 2 industries; some industries optional |
| Filing | Form 6076E annually | Monthly/quarterly reconciliation + annual reconciliation |

**Out of scope** for this skill — WSIB has its own classification, premium-rate, and reconciliation framework. If the engagement requires WSIB compliance, escalate to a dedicated Ontario payroll specialist or the WSIB Employer Account Services line.

**Coordination note:** EHT and WSIB use **different definitions of "remuneration"**. EHT includes taxable benefits, stock-option benefits, and bonuses; WSIB excludes amounts over the max insurable earnings cap and excludes certain benefits. Never assume one figure satisfies both.

---

## 11. Conservative defaults

When inputs are ambiguous, apply the following defaults:

1. **Assume not exempt** until private-sector status and $5M associated-group cap are confirmed in writing.
2. **Apply the top rate (1.95%)** when total Ontario remuneration is unknown but clearly over $400,000.
3. **Treat all Ontario-paid employees as Ontario-resident for EHT purposes** unless evidence of out-of-province work performance is documented.
4. **Include all taxable benefits, bonuses, vacation pay, commissions, and stock-option benefits** in remuneration. Exclude only items explicitly excluded under s. 1(1) of the Act (e.g., reimbursements of business expenses).
5. **Assume monthly instalments are required** if prior-year EHT cannot be confirmed. Setting up monthly instalments mid-year is much cheaper than catching up late.
6. **Register early.** If approaching $1M payroll, register before crossing the threshold to avoid retroactive penalties.
7. **For associated groups, allocate exemption to the highest-payroll member first** unless tax planning suggests otherwise (the allocation is binding for the year once filed — get sign-off from the group's tax advisor before submitting Form ON00150E).
8. **March 15 is a hard deadline.** Late filing penalty starts immediately; do not assume any administrative grace period.
9. **Reconcile EHT remuneration to T4 Box 14 totals** as a final review step; document any variance.
10. **Refer all WSIB questions out.** EHT scope only.

---

## 12. Sources

- **Employer Health Tax Act, R.S.O. 1990, c. E.11.** Particularly:
  - s. 1(1) — definitions of "remuneration," "permanent establishment," "eligible employer."
  - s. 1(2) — associated-employer rule, incorporating s. 256 ITA.
  - s. 2 — imposition of tax; rate schedule.
  - s. 2.1 — multi-account treatment for registered charities.
  - s. 2.2 — sharing of exemption among associated employers.
  - s. 3 — annual return and instalment requirements.
- **Ontario Ministry of Finance — Employer Health Tax guides and bulletins:**
  - *Employer Health Tax — Tax Bulletin* (Ministry of Finance, current as of 2025).
  - *Form 6076E — Employer Health Tax Annual Return* and instructions.
  - *Form ON00150E — Associated Employers Exemption Allocation*.
  - Ministry of Finance ONT-TAXS online portal.
- **2020 Ontario Economic Outlook and Fiscal Review** (March 25, 2020) — permanently raised the exemption from $490,000 to $1,000,000 effective 2020.
- **Workplace Safety and Insurance Act, 1997, S.O. 1997, c. 16, Sch. A** — referenced in §10 for scope boundary only.
- **Income Tax Act (Canada), s. 256** — association rules incorporated by reference under s. 1(2) EHT Act.

**Verification status:** pending. This skill must be reviewed and signed off by a credentialed Ontario tax practitioner (CPA Ontario member in good standing with current Ontario payroll-tax experience) before reliance for client work. Coordinate with **canada-payroll** for federal CPP/EI/income-tax-withholding obligations on the same payroll base.

---

<!-- openaccountants-cta-block -->

## Talk to a verified accountant

This skill is a tool, not an engagement. Every taxpayer's situation is
different, and the rules in the skill may not match your specific facts.

To speak with one of the licensed accountants who verifies skills for your
jurisdiction — **no liability on either side until you and the accountant sign
a formal engagement letter** — book a free 30-minute call:

**→ [Book a call](https://calendly.com/openaccountants-info/30min)**

We'll route you to the named verifier covering your country or state. You can
also see the full list of verified accountants at
[openaccountants.com/network](https://www.openaccountants.com/network).

<!-- openaccountants-mcp-cta -->

## The accountant-verified version lives in the connector

This file is the open, **research-grade draft**. The **accountant-verified**
version of this skill is **not published to GitHub** — it is delivered free
through the OpenAccountants MCP connector, where your AI agent loads the
verified rules together with the name of the accountant who signed them off.

**→ Install the free connector:** <https://www.openaccountants.com/connect>
**MCP endpoint:** `https://www.openaccountants.com/api/mcp`
