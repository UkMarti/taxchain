---
name: id-income-tax
description: >
  Use this skill whenever asked about Indonesian individual income tax (Pajak Penghasilan Orang Pribadi / PPh OP) for self-employed individuals, freelancers (pekerjaan bebas), professionals, sole proprietors, and small business owners filing an annual return. Trigger on phrases like "Indonesia income tax", "PPh Orang Pribadi", "PPh OP", "SPT Tahunan 1770", "annual tax return Indonesia", "progressive tax rates Indonesia", "Article 17 brackets", "PTKP", "NPPN", "Norma Penghitungan", "pekerjaan bebas", "pajak penghasilan tahunan", "Coretax DJP", or "kode billing PPh 29". Covers Article 17 progressive brackets under UU HPP 7/2021, the PTKP family-status table, the three regime choices (UMKM Final 0.5%, progressive with NPPN, progressive with pembukuan), SPT 1770 vs 1770S vs 1770SS form selection, PPh 21/22/23/24 prepaid credits, PPh 29 final settlement, and Coretax DJP filing mechanics. Out of scope — employee-only payroll computation is in id-payroll-pph21; the UMKM Final 0.5% regime under PP 55/2022 is in id-pph-final-umkm; corporate income tax (PPh Badan), property capital gains, oil & gas, and partial-year residency are not handled here. ALWAYS read this skill before touching any Indonesian individual income tax work.
version: 1.0
jurisdiction: ID
tax_year: 2025
category: international
depends_on:
  - foundation
verified_by: pending
---

# Indonesia Individual Income Tax — PPh Orang Pribadi Skill v1.0

---

## Section 1 — Quick Reference

| Field | Value |
|---|---|
| Country | Indonesia (Republik Indonesia) |
| Tax | Pajak Penghasilan Orang Pribadi (PPh OP) — individual income tax |
| Currency | IDR (Indonesian Rupiah) only |
| Tax year | Calendar year (1 January – 31 December) |
| Primary legislation | UU No. 7/2021 (Harmonisasi Peraturan Perpajakan / "UU HPP"), amending UU No. 36/2008 (PPh) |
| NPPN regulation | KEP-536/PJ./2000 (Norma Penghitungan Penghasilan Neto) — verify against any superseding PER/DJP issuance |
| UMKM Final 0.5% | PP No. 55/2022 (see `id-pph-final-umkm`) |
| Tax authority | Direktorat Jenderal Pajak (DJP), Ministry of Finance |
| Filing portal | Coretax DJP (https://coretaxdjp.pajak.go.id) — replaced DJP Online for tax year 2025 onward |
| Annual SPT filing deadline | 31 March of the following year (individuals) |
| Payment instrument | Surat Setoran Elektronik via kode billing → bank/post |
| NPWP format | NIK 16-digit (effective 1 July 2024 per PMK 112/2022 for Indonesian citizens) |
| Validated by | Pending — requires sign-off by a registered Indonesian Konsultan Pajak |
| Validation date | Pending |
| Skill version | 1.0 |

### Article 17 Progressive Brackets (UU HPP, effective 2022+)

| Penghasilan Kena Pajak (annual taxable income, IDR) | Rate | Cumulative tax at top of band |
|---|---|---|
| 0 – 60,000,000 | 5% | IDR 3,000,000 |
| 60,000,001 – 250,000,000 | 15% | IDR 31,500,000 |
| 250,000,001 – 500,000,000 | 25% | IDR 94,000,000 |
| 500,000,001 – 5,000,000,000 | 30% | IDR 1,444,000,000 |
| > 5,000,000,000 | 35% | — |

Non-NPWP surcharge (PPh 21 withholding only): an extra 20% on the withheld amount where the recipient has not furnished an NPWP. The surcharge does not apply at the annual SPT level — it is a withholding mechanism only.

### PTKP (Penghasilan Tidak Kena Pajak) Annual Table

Base: TK/0 = IDR 54,000,000.
Marriage uplift: + IDR 4,500,000 (status K/*).
Dependents (tanggungan): + IDR 4,500,000 each, maximum 3.
Spouse-with-separate-income combined return ("PH" / penghasilan istri digabung) adds a further IDR 54,000,000 (status K/I/*).

| Status code | Description | PTKP (IDR) |
|---|---|---|
| TK/0 | Single, no dependents | 54,000,000 |
| TK/1 | Single, 1 dependent | 58,500,000 |
| TK/2 | Single, 2 dependents | 63,000,000 |
| TK/3 | Single, 3 dependents | 67,500,000 |
| K/0 | Married, no dependents | 58,500,000 |
| K/1 | Married, 1 dependent | 63,000,000 |
| K/2 | Married, 2 dependents | 67,500,000 |
| K/3 | Married, 3 dependents | 72,000,000 |
| K/I/0 | Married, combined-income, no dependents | 112,500,000 |
| K/I/1 | Married, combined-income, 1 dependent | 117,000,000 |
| K/I/2 | Married, combined-income, 2 dependents | 121,500,000 |
| K/I/3 | Married, combined-income, 3 dependents | 126,000,000 |

Dependent definition (UU PPh Art. 7(1)): blood relative or in-law in a straight line, plus adopted child, fully maintained by the taxpayer, with no separate income. Maximum 3.

### SPT Tahunan Form Selection

| Form | Who files | Notes |
|---|---|---|
| 1770 | Individuals with business income or pekerjaan bebas (self-employed professionals) | Required for the scope of this skill |
| 1770 S | Employees with annual gross income > IDR 60,000,000 from one or more employers (no business income) | Out of scope — see `id-payroll-pph21` |
| 1770 SS | Employees with annual gross income ≤ IDR 60,000,000, one employer, no business income | Out of scope — see `id-payroll-pph21` |

### Conservative Defaults

| Ambiguity | Default |
|---|---|
| Unknown PTKP status | TK/0 (lowest PTKP, highest tax) |
| Unknown regime election (UMKM vs NPPN vs pembukuan) | Progressive with pembukuan (real books) unless documented NPPN notification or UMKM Final election exists |
| NPPN coefficient uncertainty for a KLU code | Use the higher coefficient in the published range; flag for reviewer |
| Mixed personal/business expense | 0% deductible until apportionment evidence provided |
| Asset useful life unknown | Group I, 4 years (25%) — most conservative for the taxpayer (fastest deduction) only when supported; otherwise group as advised by reviewer |
| Spouse income treatment | Default separate (KK / PH split) — reviewer confirms combined election |
| Foreign tax credit (PPh 24) | Limit to the lower of foreign tax paid and Indonesian tax on the same income |

---

## Section 2 — Required Inputs and Refusal Catalogue

### Required Inputs

**Minimum viable** — confirmation of (a) residency for the full tax year, (b) PTKP family status, (c) regime election (UMKM Final / NPPN / pembukuan), (d) at least one of: (i) bank statements covering the calendar year, (ii) general ledger / pembukuan extract, or (iii) gross revenue figure plus KLU code for NPPN.

**Recommended** — bukti potong PPh 21/22/23 received during the year; PPh 25 monthly instalment receipts; foreign withholding certificates for PPh 24 credit; NPWP/NIK confirmation; KLU code from prior-year SPT or DGT registration; spouse NPWP and income disclosure if married.

**Ideal** — complete trial balance, asset register with acquisition dates and groups, full set of bukti potong, prior-year SPT 1770 with carry-forward losses (if any), e-Bupot output, Coretax DJP login confirmation, foreign-source income breakdown by country.

**Refusal if minimum is missing — SOFT WARN.** No regime election + no documents = hard stop. Documents but no PTKP status = hard stop (rate computation impossible). Regime documented but data unsupported = proceed with reviewer warning that the SPT was produced from a single source and that bukti potong must be verified.

### Refusal Catalogue

**R-ID-IT-1 — PTKP status unknown.** "PTKP family status drives the entire tax computation. Cannot compute without confirmation of marital status, number of dependents, and (if married) whether spouse income is combined or separate. Please confirm before proceeding."

**R-ID-IT-2 — UMKM Final 0.5% regime client.** "If the client has elected the UMKM Final 0.5% regime under PP 55/2022 and remains within the eligibility window, route to `id-pph-final-umkm`. This skill covers progressive PPh OP only."

**R-ID-IT-3 — Employee-only client (no business income).** "Pure employees file SPT 1770S or 1770SS based on PPh 21 withholding. Use `id-payroll-pph21` for withholding computation and the appropriate employee-return guidance. This skill covers individuals with business income or pekerjaan bebas."

**R-ID-IT-4 — Corporate (PPh Badan) return.** "PT, CV, koperasi, yayasan and other entities file SPT 1771 under different rules. Out of scope. Escalate to a corporate tax practitioner."

**R-ID-IT-5 — Partial-year resident or dual-resident.** "Dual residency, mid-year migration, and split-year computations require treaty analysis. Out of scope. Escalate to a registered Konsultan Pajak."

**R-ID-IT-6 — Property / capital gains / final-tax categories.** "Land and building transfers (PPh Final 2.5%), share disposals on IDX, government securities interest, lottery, and other PPh Final categories are reported separately on Form 1770 but not computed here. Flag for reviewer."

**R-ID-IT-7 — Arrears, audit, or STP/SKP enforcement.** "Outstanding tax assessments (SKP/STP), ongoing audit (pemeriksaan), or objection (keberatan) proceedings carry penalty interest (currently published monthly by the Minister of Finance) and may have suspensive effects. Do not advise. Escalate immediately."

**R-ID-IT-8 — VAT (PPN) return requested.** "This skill covers PPh OP only. For PPN preparation use `indonesia-vat`."

**R-ID-IT-9 — Payroll withholding for employees of the taxpayer.** "Use `id-payroll-pph21` for PPh 21 and BPJS on employees. This skill handles only the taxpayer's own annual return."

---

## Section 3 — Tier 1 Rules: Article 17 Progressive Computation

### 3.1 Computation flow

```
Gross income from all sources (worldwide for residents)
  – Allowable expenses (if pembukuan) OR
    (Gross income × NPPN%) → Net income (if NPPN)
= Penghasilan Neto (net income)
  – Zakat / mandatory religious donation (if paid through BAZNAS or accredited body, UU PPh Art. 9(1)g)
  – Carry-forward losses (max 5 years, pembukuan only)
  – PTKP (per family status table)
= Penghasilan Kena Pajak (PKP) — rounded DOWN to nearest IDR 1,000
× Article 17 progressive rates
= PPh Terutang (tax payable)
  – PPh 21 withheld (bukti potong from any employer / payer)
  – PPh 22 prepaid (import / certain transactions)
  – PPh 23 withheld (services, rents, royalties received)
  – PPh 24 foreign tax credit (capped, see Section 8)
  – PPh 25 monthly instalments paid during the year
= PPh 29 (final settlement payable) OR PPh 28A (refund)
```

### 3.2 Rounding

Penghasilan Kena Pajak is rounded **down** to the nearest IDR 1,000 (UU PPh Art. 17(4)). Tax payable is reported in whole IDR.

### 3.3 Worldwide income

A resident (subjek pajak dalam negeri) is taxed on worldwide income. Foreign income is grossed up (add back foreign withholding to the IDR-converted gross), then PPh 24 credit is applied subject to the per-country limit in Section 8.

### 3.4 Spouse income — combined vs separate

UU PPh Art. 8 default: spouse income is **combined** with the husband's return unless one of three exceptions applies:
- Spouses are legally separated (HB — hidup berpisah);
- Spouses elect separate filing in writing (PH — pisah harta);
- Wife elects to exercise her own tax rights and obligations (MT — memilih terpisah).

If combined (KK), PTKP uses status K/I/*. If separate, each spouse files using TK/* status with their own income; PTKP for dependents is allocated by agreement (default to the husband).

### 3.5 Carry-forward losses

Pembukuan only. Tax losses carry forward 5 years (UU PPh Art. 6(2)). NPPN and UMKM Final users cannot use loss carry-forward — they are deemed-profit regimes.

---

## Section 4 — PTKP Detail and Worked Application

PTKP status is determined as at **1 January** of the tax year (UU PPh Art. 7(2)). Marriage, birth of a child, or addition of a maintained relative during the year do not increase PTKP for that year — they take effect from 1 January of the following tax year.

### 4.1 Combined status mechanics (K/I/*)

Status K/I means the husband's return aggregates the wife's net income and applies a combined PTKP of IDR 54,000,000 (taxpayer) + IDR 4,500,000 (married) + IDR 54,000,000 (wife) + IDR 4,500,000 per dependent. The 1770 form has a dedicated worksheet for combined computation.

### 4.2 Dependent eligibility

- Blood relative or in-law in a straight line (parents, grandparents, children, grandchildren, siblings of either spouse).
- Adopted child counts.
- Must be fully maintained by the taxpayer and have no separate income source.
- Maximum 3 dependents, regardless of how many qualify in fact.

### 4.3 Worked PTKP examples

| Scenario | Status | PTKP (IDR) |
|---|---|---|
| Single freelancer, no dependents | TK/0 | 54,000,000 |
| Single freelancer supporting elderly mother | TK/1 | 58,500,000 |
| Married consultant, spouse has separate employment, separate filing | TK/0 (each spouse) | 54,000,000 each |
| Married consultant, spouse not working, 2 children | K/2 | 67,500,000 |
| Married consultant, spouse separately employed, combined return, 1 child | K/I/1 | 117,000,000 |
| Single parent (widowed), 3 children | TK/3 | 67,500,000 (Indonesia has no separate "single parent" rate; widow is single for PTKP) |

---

## Section 5 — Regime Choice Decision Matrix

A self-employed Orang Pribadi has three mutually exclusive regimes for business / pekerjaan bebas income. The choice has large consequences and is governed by gross turnover (peredaran bruto) and election deadlines.

### 5.1 Comparison table

| Feature | UMKM Final 0.5% (PP 55/2022) | Progressive + NPPN | Progressive + Pembukuan |
|---|---|---|---|
| Eligibility | Gross turnover ≤ IDR 4.8B in prior year | Gross turnover < IDR 4.8B + notify DJP within 3 months of tax year start | Mandatory if turnover > IDR 4.8B OR voluntary at any turnover |
| Tax base | Gross monthly turnover | Gross turnover × NPPN% | Net profit per accrual books |
| Rate | 0.5% (final) | Article 17 progressive | Article 17 progressive |
| PTKP applies? | No (final tax) | Yes | Yes |
| Deductions? | None | Deemed by NPPN coefficient | Actual, subject to UU PPh Art. 6/9 |
| Capital allowances? | No | Embedded in NPPN | Yes, asset groups I–IV |
| Loss carry-forward? | No | No | Yes, 5 years |
| Monthly obligation | Final 0.5% setoran each month | PPh 25 instalment | PPh 25 instalment |
| Bookkeeping | Pencatatan (simple records) | Pencatatan only | Full pembukuan (accrual) |
| Time limit | 7 years (individuals) under PP 55/2022 | None (per-year election) | None |
| Reference skill | `id-pph-final-umkm` | This skill, Section 6 | This skill |

### 5.2 Decision flow

1. **Is current-year gross turnover > IDR 4.8B?** → Must use Pembukuan. Skip to Section 7.
2. **Has client elected UMKM Final 0.5% and is still within the 7-year window?** → Route to `id-pph-final-umkm`. Stop.
3. **Did client notify DJP of NPPN election within 3 months of the tax year (i.e. by 31 March of the tax year)?** → NPPN is available. Compare NPPN vs Pembukuan; the client may use NPPN.
4. **No NPPN notification on file and not UMKM Final?** → Pembukuan is mandatory by default (UU PPh Art. 14(2)).

### 5.3 When NPPN typically wins

NPPN tends to favour the client when actual deductible expenses are below the NPPN coefficient, when bookkeeping is impractical, or when documentation of expenses is weak. Pembukuan typically wins when real margins are tight (actual expenses > NPPN coefficient) or when significant capital allowances and loss carry-forwards are available.

### 5.4 Switching regimes

- UMKM Final to Progressive: triggered automatically when the 7-year window expires or when turnover > IDR 4.8B in the prior year.
- NPPN to Pembukuan: voluntary at any year boundary; once on Pembukuan, return to NPPN requires fresh notification within the 3-month window.
- Pembukuan to NPPN: requires the 3-month notification AND turnover must be < IDR 4.8B in the prior year.

---

## Section 6 — NPPN (Norma Penghitungan Penghasilan Neto)

### 6.1 Definition and source

NPPN is the deemed-net-income regime under UU PPh Art. 14. Under NPPN, net income is computed as a fixed percentage of gross turnover; no actual deductions are taken. The current coefficient table is published in KEP-536/PJ./2000 (Direktur Jenderal Pajak). The table is organised by KLU (Klasifikasi Lapangan Usaha) industry code and by city tier (10 provincial capitals, other provincial capitals, other locations).

> **Note.** KEP-536/PJ./2000 remains the operative NPPN coefficient source as of the cut-off for this skill version. DJP has signalled intent to publish a refreshed coefficient list; **TBC — verify with Indonesian accountant** that KEP-536 is still the controlling instrument for the tax year being prepared, and that the client's specific KLU code coefficient has not been amended by subsequent PER/DJP.

### 6.2 Eligibility requirements

- Individual taxpayer (Orang Pribadi) only — corporate taxpayers cannot use NPPN.
- Gross turnover in the prior tax year < IDR 4,800,000,000.
- Written notification (pemberitahuan) to the Kantor Pelayanan Pajak (KPP) within **3 months from the start of the tax year** (i.e. by 31 March). Without timely notification, NPPN is unavailable for that year.
- Maintain pencatatan (simple income/expense records) for at least the gross-turnover side.

### 6.3 Mechanics

```
Penghasilan Neto (NPPN) = Peredaran Bruto × NPPN% (per KLU + city tier)
```

The resulting net income then flows through the standard progressive computation (less PTKP, zakat, no loss carry-forward).

If the taxpayer has multiple business activities under different KLU codes, NPPN is applied per activity and totalled.

### 6.4 Sample KLU coefficient ranges

The following are **illustrative ranges** drawn from KEP-536/PJ./2000 to anchor reviewer intuition. **Always look up the specific KLU code in the KEP-536 table — coefficients vary materially across the ~1,800 codes.** If uncertain, flag "TBC — verify with Indonesian accountant".

| Activity family (illustrative) | Typical NPPN range | Notes |
|---|---|---|
| Retail trade (perdagangan eceran) | ~25% – 35% net of gross | Lower margins; coefficients reflect typical mark-up |
| Wholesale trade | ~15% – 25% | |
| Restaurants and food service | ~20% – 30% | |
| Professional services (legal, accounting, consulting) | ~50% | Higher deemed margin because cost base is mainly labour |
| Independent medical practice | ~50% | |
| Online sellers / e-commerce | ~25% – 35% | Treat under the relevant trade KLU |
| Authors, artists, performers (pekerjaan bebas) | ~50% | |
| Transport (passenger or goods) | ~20% – 30% | Capital-intensive |
| Construction services | ~25% – 35% | Note: some construction services have separate PPh Final regimes — verify |
| Agriculture / fisheries | ~15% – 20% | |

For any specific filing, the reviewer must extract the exact percentage for the registered KLU code from KEP-536/PJ./2000 or its current replacement.

### 6.5 Pekerjaan bebas (independent personal services)

UU PPh Art. 1(2) distinguishes **business** from **pekerjaan bebas** (independent personal services — doctors, lawyers, notaries, consultants, architects, accountants, authors, athletes, artists). Both can use NPPN. Pekerjaan bebas coefficients are concentrated around 50%.

---

## Section 7 — SPT Tahunan 1770 Family

### 7.1 Form selection

| Form | Business income? | Employment income | Other income | Notes |
|---|---|---|---|---|
| 1770 | Yes (business or pekerjaan bebas) | May coexist | May coexist | **Default for this skill** |
| 1770 S | No | Yes, > IDR 60M gross | May include investment, rental | Out of scope |
| 1770 SS | No | Yes, ≤ IDR 60M, single employer | None | Out of scope |

### 7.2 Form 1770 structure (high level)

| Section | Lampiran | Content |
|---|---|---|
| Induk (main form) | — | Identitas, calculation summary, PPh 29/28A determination, signature |
| Lampiran I | I-A | Net income from business / pekerjaan bebas — pembukuan |
|  | I-B | Net income from business / pekerjaan bebas — NPPN (coefficient × gross) |
|  | I-C | Net income from employment (if any) |
|  | I-D | Other net income (sewa, royalti, hadiah non-final, etc.) |
| Lampiran II | — | List of credits: PPh 21, 22, 23, 24, 25 with bukti potong references |
| Lampiran III | — | Income subject to PPh Final and tax-exempt income (informational) |
| Lampiran IV | — | Asset (harta) and liability (kewajiban) at year-end, dependents (tanggungan) |

All four lampiran plus the induk are mandatory for 1770. Coretax DJP renders the form as an electronic flow; SPT submitted via Coretax must still reconcile to the legacy 1770 box structure.

### 7.3 Asset and liability disclosure (Lampiran IV)

All assets held at year-end (including overseas) must be listed at acquisition cost in IDR, with acquisition year. Liabilities are listed at outstanding balance. Failure to disclose foreign assets can trigger penalty under UU PPh Art. 18 anti-avoidance and historic Tax Amnesty (UU 11/2016 / 7/2021) tracking rules.

---

## Section 8 — Tax Credits and Final Settlement (PPh 29)

### 8.1 PPh 21 credit

Withholding by employers (UU PPh Art. 21) and by payers of fees to certain individual service providers. The 1721-A1 (or equivalent bukti potong) is the supporting document. Bukti potong PPh 21 are now issued electronically via e-Bupot 21/26.

### 8.2 PPh 22 credit

Withholding on certain transactions: imports, sales to government bodies (bendaharawan), purchase of certain commodities. Supported by bukti pungut PPh 22. Cross-check to the Pemberitahuan Impor Barang (PIB) for import-side PPh 22.

### 8.3 PPh 23 credit

Domestic withholding on services rendered to corporate payers, rent on assets other than land/buildings, royalties, dividends to certain recipients, prizes/awards. Rate is generally 2% on services or 15% on royalties/interest/dividends. Supported by bukti potong PPh 23 (e-Bupot Unifikasi).

### 8.4 PPh 24 foreign tax credit

UU PPh Art. 24: credit allowed for foreign income tax actually paid, capped per-country (per-country limitation method, "ordinary credit"). Cap = (foreign net income / total net income) × total Indonesian tax. Excess is **not** carried forward.

Documentation: foreign tax authority statement or equivalent proof. Coretax has a dedicated PPh 24 worksheet referencing the foreign jurisdiction code.

### 8.5 PPh 25 monthly instalments

Monthly prepayment computed as 1/12 × prior year PPh 29 (subject to PMK 215/PMK.03/2018 adjustments for new businesses, OP Pengusaha Tertentu, and certain re-computations). Paid by the 15th of the following month, reported on SPT Masa PPh 25.

### 8.6 PPh 29 / 28A settlement

```
PPh terutang (Article 17 on PKP)
  – Σ PPh 21 + 22 + 23 + 24 (cap) + 25
= PPh 29 (payable) if positive
  OR PPh 28A (refund) if negative
```

PPh 29 must be paid before the SPT is filed (deadline 31 March). The setoran is made via kode billing (Surat Setoran Elektronik) on Coretax DJP or DJP Online, then settled at an authorised bank/post or via virtual account.

PPh 28A refund triggers a tax-audit (pemeriksaan untuk restitusi) unless the taxpayer opts for the pre-payment offset under UU KUP Art. 17B/17C. Refund processing time is up to 12 months and almost always triggers an audit — flag for reviewer.

---

## Section 9 — Worked Example: Freelancer Using NPPN

**Facts.**
- Taxpayer: Andi, single, no dependents (TK/0).
- Independent IT consultant (pekerjaan bebas) operating in Jakarta.
- 2025 gross fees received: IDR 600,000,000.
- KLU coefficient: assume **50%** (illustrative for professional services). Reviewer must confirm exact KLU code.
- PPh 21 withheld by corporate clients during the year: IDR 12,500,000 (per e-Bupot).
- PPh 25 instalments paid in 2025: IDR 8,000,000.
- No zakat, no foreign income, no carry-forward loss (NPPN regime).
- NPPN notification filed on time on 12 February 2025.

**Computation.**

| Step | Description | IDR |
|---|---|---|
| 1 | Peredaran bruto (gross fees) | 600,000,000 |
| 2 | Penghasilan neto = 600,000,000 × 50% | 300,000,000 |
| 3 | Less PTKP (TK/0) | (54,000,000) |
| 4 | Penghasilan Kena Pajak (rounded down to IDR 1,000) | 246,000,000 |
| 5 | Article 17 progressive tax: 5% × 60,000,000 = 3,000,000; plus 15% × (246,000,000 − 60,000,000) = 15% × 186,000,000 = 27,900,000 | 30,900,000 |
| 6 | Less PPh 21 withheld | (12,500,000) |
| 7 | Less PPh 25 instalments | (8,000,000) |
| 8 | PPh 29 final settlement payable by 31 March 2026 | **10,400,000** |

**Reviewer notes.**
- Confirm KLU code and NPPN coefficient against KEP-536/PJ./2000 (or its replacement) before signing.
- Confirm NPPN notification was filed within 3 months from 1 January 2025.
- 2026 PPh 25 = PPh 29 / 12 = IDR 866,667/month (subject to adjustment under PMK 215/2018 if facts change).
- Lampiran IV must list at-year-end assets (laptop, motorbike, savings, etc.) at cost.

**Alternative computation — if Andi had been on Pembukuan with actual expenses of IDR 350,000,000 (margin 41.7%):**

| Step | Description | IDR |
|---|---|---|
| 1 | Gross fees | 600,000,000 |
| 2 | Less actual deductible expenses | (350,000,000) |
| 3 | Penghasilan neto | 250,000,000 |
| 4 | Less PTKP (TK/0) | (54,000,000) |
| 5 | PKP | 196,000,000 |
| 6 | Tax: 5% × 60,000,000 + 15% × 136,000,000 = 3,000,000 + 20,400,000 | 23,400,000 |

Pembukuan would have been ~IDR 7,500,000 cheaper. The choice is not just about regime mechanics — it depends on real margin vs the KLU coefficient.

---

## Section 10 — Filing and Payment Mechanics

### 10.1 Coretax DJP

From tax year 2025 onward, the SPT Tahunan PPh OP is filed through **Coretax DJP** (https://coretaxdjp.pajak.go.id), which replaced the legacy DJP Online / e-Filing flow. Authentication uses NPWP/NIK + password + token (2FA via registered email or authenticator app).

Key Coretax workflow steps:
1. Login → "Layanan Wajib Pajak" → "SPT Tahunan".
2. Select tax year and form (1770 for this skill).
3. Pre-population: Coretax pulls bukti potong from e-Bupot Unifikasi, e-Bupot 21/26, and PPh 25 records. Reviewer must reconcile against client's records.
4. Complete Lampiran I → II → III → IV → Induk in order.
5. Generate PPh 29 kode billing if payable. Pay via authorised channel (bank, post office, virtual account, fintech).
6. Submit SPT. Receive BPE (Bukti Penerimaan Elektronik) — keep as proof of filing.

### 10.2 Deadlines

| Item | Deadline | Source |
|---|---|---|
| SPT Tahunan PPh OP (1770/1770S/1770SS) | 31 March of following year | UU KUP Art. 3(3)(b) |
| PPh 29 payment | Before SPT is filed (i.e. by 31 March) | UU KUP Art. 9(2)(c) |
| PPh 25 monthly instalment payment | 15th of following month | PMK 242/PMK.03/2014 |
| PPh 25 monthly reporting (where required) | Automatic via payment system | |
| NPPN election notification | Within 3 months of start of tax year (i.e. by 31 March of tax year) | UU PPh Art. 14(2) |
| SPT extension | Up to 2 months — written request to KPP before 31 March deadline | UU KUP Art. 3(4) |

### 10.3 Late filing and late payment penalties

| Breach | Sanction |
|---|---|
| Late SPT filing (individual) | IDR 100,000 administrative fine (UU KUP Art. 7) |
| Late PPh 29 payment | Monthly interest at the MoF-published rate (currently set monthly per UU HPP Art. 14(3) — verify rate for the relevant month) — calculated per month of delay, capped at 24 months |
| Underpayment found in audit | 2% per month interest, max 24 months, plus possible administrative sanctions under UU KUP Art. 13 |
| Failure to file after warning (teguran) | SKPKB jabatan plus 50% surcharge under UU KUP Art. 13(3) |
| Criminal — wilful failure / falsification | UU KUP Art. 38–39 — escalate to Konsultan Pajak immediately |

The MoF interest rate is published monthly and depends on the type of breach (between roughly 5% and 25% per annum equivalent). **TBC — verify the prevailing monthly rate for the tax year being filed.**

### 10.4 NPWP / NIK integration

Since 1 July 2024 (PMK 112/2022), the 16-digit NIK is the NPWP for Indonesian citizens. Foreign-national taxpayers continue to receive a 15-digit NPWP. Coretax accepts either. Bukti potong from 2024 onward should already carry the NIK-as-NPWP — reconcile any legacy 15-digit references against the client's current identity.

---

## Section 11 — Conservative Defaults

| Situation | Conservative default | Rationale |
|---|---|---|
| PTKP status uncertain | TK/0 | Lowest PTKP, highest tax; cannot under-assess |
| Regime election undocumented | Pembukuan | NPPN requires affirmative notification; UMKM Final requires affirmative election |
| KLU coefficient at the high end of a range | Use the higher number | Higher net income, more tax |
| Mixed personal/business expense, no apportionment | Exclude entirely from deductions | Aligns with Art. 9 non-deductible list |
| Foreign tax paid without official certificate | Disallow PPh 24 credit | Documentation requirement |
| Year-end asset with unknown acquisition cost | Use lower of estimate and reviewer-supplied figure for Lampiran IV; never invent | Disclosure integrity |
| Bukti potong missing | Do not claim credit; flag and request from payer | Anti-double-credit |
| Carry-forward loss in NPPN year | Disallow | NPPN is final-deemed, no loss carry |
| Married couple — combined vs separate election unclear | Separate (TK/* each) | Cannot impose combined election without affirmative spouse consent |
| 1770 vs 1770S — borderline (small side-gig) | Use 1770 if any pekerjaan bebas income exists | Captures business income properly |

---

## Section 12 — Sources

### Primary legislation
- **UU No. 36/2008** — Pajak Penghasilan (Income Tax Act), as last amended.
- **UU No. 7/2021** — Harmonisasi Peraturan Perpajakan ("UU HPP") — established the current Article 17 progressive brackets effective tax year 2022 onward.
- **UU No. 6/1983** as amended by **UU No. 7/2021** — Ketentuan Umum dan Tata Cara Perpajakan (KUP — general tax procedure).

### NPPN
- **KEP-536/PJ./2000** — Norma Penghitungan Penghasilan Neto coefficient table by KLU and city tier. Operative reference; **TBC — verify whether replaced by current PER/DJP**.

### UMKM Final 0.5%
- **PP No. 55/2022** — Penyesuaian Pengaturan di Bidang Pajak Penghasilan; covers the 0.5% final regime and its 7-year individual window. Handled in `id-pph-final-umkm` (not this skill).

### Withholding regimes
- **PMK 168/2023** — TER (Tarif Efektif Rata-rata) for PPh 21 (employee withholding).
- **PP No. 58/2023** — TER categories. Handled in `id-payroll-pph21`.
- **PMK 215/PMK.03/2018** — PPh 25 instalment computation for individuals, including OP Pengusaha Tertentu.
- **PMK 242/PMK.03/2014** — payment and reporting mechanics.

### NPWP / NIK integration
- **PMK No. 112/PMK.03/2022** — implementation of NIK as NPWP for individuals.

### Filing infrastructure
- **Direktorat Jenderal Pajak (DJP)** — https://www.pajak.go.id
- **Coretax DJP portal** — https://coretaxdjp.pajak.go.id
- **e-Bupot Unifikasi / e-Bupot 21-26** — DJP withholding-certificate issuance systems.

### Cross-references within this package
- `id-payroll-pph21.md` — PPh 21 employee withholding, TER tables, BPJS.
- `indonesia-vat.md` — PPN treatment of taxable supplies and reverse charge.
- `id-pph-final-umkm.md` — UMKM Final 0.5% PP 55/2022 regime.
- `foundation.md` — workflow architecture and conservative-defaults principle.
- `intake.md` — onboarding question flow.
- `references.md` — source repository and verified-link index.

---

## PROHIBITIONS

- NEVER apply Article 17 brackets without confirming PTKP family status (R-ID-IT-1).
- NEVER allow NPPN deemed-income treatment without confirming the 3-month notification was filed.
- NEVER apply UMKM Final 0.5% logic in this skill — route to `id-pph-final-umkm`.
- NEVER claim PPh 24 foreign tax credit beyond the per-country cap.
- NEVER include UMKM-Final income in the Article 17 progressive computation (it is already taxed finally).
- NEVER round PKP up — UU PPh Art. 17(4) requires rounding down to IDR 1,000.
- NEVER allow carry-forward loss in an NPPN year.
- NEVER omit Lampiran IV asset and liability disclosure on Form 1770.
- NEVER treat the NIK-as-NPWP transition as optional for Indonesian citizens post-1 July 2024.
- NEVER present a refund (PPh 28A) without flagging the audit-on-restitution risk.
- NEVER invent or guess an NPPN coefficient — if unsure, mark "TBC — verify with Indonesian accountant" and stop.
- NEVER file or instruct filing — this skill produces a working paper for review by a registered Indonesian Konsultan Pajak only.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a registered Indonesian Konsultan Pajak (or equivalent licensed practitioner) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.

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
