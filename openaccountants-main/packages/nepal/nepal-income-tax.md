---
name: nepal-income-tax
description: >
  Use this skill whenever asked about Nepal personal income tax for resident individuals, couples, employees, sole proprietors, and freelancers filing with the Inland Revenue Department (IRD). Trigger on phrases like "Nepal income tax", "IRD Nepal", "PAN Nepal", "income tax slabs Nepal", "Social Security Tax 1% Nepal", "couple tax Nepal", "Income Tax Act 2058", "Finance Act 2082", or "FY 2082/83". Covers the Income Tax Act 2058 (2002) as amended by the Finance Act 2082: the resident-individual progressive bands (1% SST / 10 / 20 / 30 / 36 / 39%), the single vs couple thresholds, the 1% Social Security Tax nuance, and IRD filing basics. Out of scope — corporate income tax (separate skill), TDS / withholding (separate skill), payroll/SSF (separate skill), VAT (separate skill), and detailed capital gains beyond the headline rates.
version: 1.0
jurisdiction: NP
tax_year: 2082-83
category: international
verified_by: pending
depends_on:
  - foundation
---

# Nepal — Personal Income Tax (Individuals & Couples) — Skill v1.0

> **Produced by OpenAccountants (openaccountants.com).** Research-grade (tier 2) for FY 2082/83 BS. **Source provenance:** figures derive from reputable Nepali professional-firm tax-fact publications (PKF T.R. Upadhya & Co., Baker Tilly Nepal) reflecting the Income Tax Act 2058 and Finance Act 2082 — they have **not** been re-anchored to primary IRD (ird.gov.np) / statute-section pages. A Nepali CA / registered tax practitioner must confirm each figure against the primary statute before reliance. Not tax advice.

---

## Section 1 — Quick reference

| Field | Value |
|---|---|
| Country | Federal Democratic Republic of Nepal |
| Tax | Personal income tax (resident individuals & couples) |
| Currency | NPR (Nepalese Rupee) only |
| Income year (FY) | Shrawan 1 – Ashad end (Bikram Sambat); FY 2082/83 BS ≈ mid-July 2025 – mid-July 2026 |
| Primary legislation | Income Tax Act 2058 (2002), as amended by the **Finance Act 2082** (budget 29 May 2025) |
| Tax authority | Inland Revenue Department (IRD), Nepal — https://ird.gov.np |
| Taxpayer ID | PAN (Permanent Account Number) |
| First-band levy | **1% Social Security Tax (SST)** — separate IRD revenue account 11211 |
| Validated by | Pending — requires sign-off by a Nepali CA / registered tax practitioner |
| Skill version | 1.0 |

### Resident individual — single (FY 2082/83)

| Taxable income band (NPR) | Rate on band |
|---|---|
| First 500,000 | **1%** (Social Security Tax) |
| Next 200,000 (500,001 – 700,000) | 10% |
| Next 300,000 (700,001 – 1,000,000) | 20% |
| Next 1,000,000 (1,000,001 – 2,000,000) | 30% |
| Next 3,000,000 (2,000,001 – 5,000,000) | 36% |
| Above 5,000,000 | 39% |

### Resident individual — couple (electing joint treatment, FY 2082/83)

Same schedule, but the **first 1% band is NPR 600,000** (the +100,000 applies only to band 1). The 30% band therefore spans NPR 900,000.

| Taxable income band (NPR) | Rate on band |
|---|---|
| First 600,000 | **1%** (SST) |
| Next 200,000 | 10% |
| Next 300,000 | 20% |
| Next 1,000,000 | 30% |
| Next 3,000,000 | 36% |
| Above remainder | 39% |

Slabs are **unchanged from FY 2081/82**. **Source:** PKF Trunco "Tax Rates 2082-83"; Baker Tilly Nepal "Tax Fact 2025-2026"; Income Tax Act 2058 Schedule 1 (confirm primary).

### Conservative defaults

| Ambiguity | Default |
|---|---|
| Single vs couple election unclear | Apply single schedule (lower first band) and flag |
| Residency uncertain | Hard stop — residency drives worldwide vs source taxation (verify) |
| Marginal band borderline | Apply higher band on the disputed slice |
| Whether 1% SST applies | Apply 1% unless taxpayer is a sole proprietor / pensioner / SSF contributor (then exempt — see §3.3) |

---

## Section 2 — Required inputs and refusal catalogue

### Required inputs
Residency status; single vs couple election; employment vs business income; salary certificate / PAN; bank statements or books for business income; SSF membership status (affects the 1% SST); any TDS credit certificates.

### Refusal catalogue

**R-NP-IT-1 — Corporate return.** Companies file under the corporate regime (25%/30%). Out of scope — use `nepal-corporate-tax`.

**R-NP-IT-2 — TDS computation for a payer.** Payer-side withholding is separate — use `nepal-tds`.

**R-NP-IT-3 — Capital gains.** Gains on shares/land have their own rates and advance-tax collection (Sec 95Ka). This skill states headline rates only; escalate detailed CGT.

**R-NP-IT-4 — Payroll / SSF.** Salary TDS sequencing + SSF contributions — use `nepal-payroll`.

**R-NP-IT-5 — Non-resident / treaty.** Non-resident taxation and DTAA relief require treaty analysis. Out of scope — escalate.

**R-NP-IT-6 — Annual return due dates.** The exact annual return filing deadlines under the Income Tax Act 2058 were NOT established by the research — VERIFY with the practitioner (flagged, not asserted).

---

## Section 3 — Tier 1 rules

### 3.1 Income year and charge
Income tax is charged under the Income Tax Act 2058 (2002), as amended by the Finance Act 2082. The income year runs **Shrawan 1 to Ashad end** (Bikram Sambat). Residents are taxed on worldwide income; non-residents on Nepal-source income (confirm residency/source rules).

### 3.2 Progressive rates
Apply the single or couple schedule in Section 1. The top marginal rate is **39%** on income above NPR 5,000,000.

### 3.3 The 1% Social Security Tax (first band)
The 1% on the first band is a **Social Security Tax**, deposited to a separate IRD revenue account (**code 11211**). It does **NOT** apply to:
- sole proprietors (business income of a natural person),
- pension income,
- contribution-based pension fund income, or
- taxpayers who deposit into the **Social Security Fund (SSF)**.

For those, the first band is effectively 0% (the 1% is removed), with the remaining bands unchanged. **Source:** PKF Trunco; Baker Tilly; corroborated by IRD revenue-code guides.

---

## Section 4 — Worked example (illustrative — confirm against current schedule)

Resident single individual, taxable income NPR 1,500,000, FY 2082/83, not an SSF contributor.

| Band | NPR | Rate | Tax |
|---|---|---|---|
| First 500,000 | 500,000 | 1% | 5,000 |
| Next 200,000 | 200,000 | 10% | 20,000 |
| Next 300,000 | 300,000 | 20% | 60,000 |
| Next 500,000 (to 1,500,000) | 500,000 | 30% | 150,000 |
| **Total** | | | **235,000** |

If the same person were an SSF contributor, the first 500,000 would be at 0% (no SST), reducing tax by NPR 5,000.

---

## Section 5 — Filing and payment

- **Income year:** Shrawan 1 – Ashad end (BS).
- **PAN** required to file via IRD.
- **Annual return + instalment (D-01/D-03) due dates:** VERIFY — not established by the research; confirm against the Income Tax Act 2058 / IRD calendar.

---

## Section 6 — Conservative defaults

| Situation | Default |
|---|---|
| Single vs couple unclear | Single schedule; flag |
| SSF-contributor status unknown | Apply 1% SST; flag to confirm exemption |
| Marginal band borderline | Higher band |
| Any figure flagged VERIFY | Flag for reviewer; do not finalise |

---

## Section 7 — Sources

Research-grade, FY 2082/83 (verified by deep research, 2026-06). **Secondary firm publications — re-anchor to primary IRD/statute before reliance:**

1. PKF T.R. Upadhya & Co. — "Tax Rates 2082-83" — https://pkf.trunco.com.np/files/publications/1748841198_Tax%20Rates%202082-83_Final_250601_213028.pdf
2. Baker Tilly Nepal — "Tax Fact 2025-2026" — https://bakertilly.com.np/storage/download/1750310698_Tax_Fact_2025-2026.pdf
3. Income Tax Act 2058 (2002), Schedule 1 — confirm at https://ird.gov.np
4. Finance Act 2082 (budget 29 May 2025).

**Known gaps / VERIFY:** primary IRD/statute citations for each figure; residency test; annual return + instalment due dates; treaty positions.

---

## Prohibitions

- NEVER omit the 1% SST for a person who is NOT an SSF contributor / sole proprietor / pensioner; NEVER charge it where the SSF/sole-proprietor/pension exemption applies.
- NEVER use the single first band (500,000) for a couple electing joint treatment — theirs is 600,000.
- NEVER present these figures as primary-IRD-confirmed — they are firm-publication-derived; flag for the verifier to re-anchor.
- NEVER assert annual return due dates or residency tests this skill flags as VERIFY.
- NEVER file or instruct filing — produce a working paper for a Nepali practitioner to review.

---

## Disclaimer

This skill and its outputs are for informational and computational purposes only and do not constitute tax, legal, or financial advice. All outputs must be reviewed and signed off by a qualified Nepali professional (Chartered Accountant / registered tax practitioner) before filing or acting upon. The latest verified version is maintained at [openaccountants.com](https://www.openaccountants.com).

---

<!-- openaccountants-cta-block -->

## Talk to a verified accountant

This skill is a tool, not an engagement. To speak with a licensed accountant who verifies skills for your jurisdiction — **no liability until both parties sign an engagement letter** — book a free 30-minute call:

**→ [Book a call](https://calendly.com/openaccountants-info/30min)**

<!-- openaccountants-mcp-cta -->

## The accountant-verified version lives in the connector

This file is the open, **research-grade draft**. The **accountant-verified**
version of this skill is **not published to GitHub** — it is delivered free
through the OpenAccountants MCP connector, where your AI agent loads the
verified rules together with the name of the accountant who signed them off.

**→ Install the free connector:** <https://www.openaccountants.com/connect>
**MCP endpoint:** `https://www.openaccountants.com/api/mcp`
