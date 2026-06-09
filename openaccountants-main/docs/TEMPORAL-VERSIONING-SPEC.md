# Temporal Versioning Specification v0.1

Status: **DRAFT**
Author: OpenAccountants core
Last revised: 2026-05-22

This is the spec for the temporal versioning system referenced as **Level 3** in [INTELLIGENCE-ROADMAP.md](INTELLIGENCE-ROADMAP.md). It turns the repo from a snapshot of rates into a living dataset where every figure has a validity window and rate transitions are handled mechanically.

---

## 1. The problem

Tax law changes mid-year. A few recent examples:

- **UK SDLT residential 0% threshold** moved from GBP 250k to GBP 125k on 1 April 2025
- **UK SDLT additional dwelling surcharge** moved from 3% to 5% on 31 October 2024
- **Multiple Dwellings Relief (UK)** repealed for transactions effective 1 June 2024 or later
- **Hong Kong stamp duty on shares** cut from 0.13% to 0.10% per side in November 2023
- **EU CBAM transitional → definitive period** begins 1 January 2026
- **India e-commerce Equalisation Levy 2.0** repealed effective 1 August 2024
- **Spanish Impuesto Temporal de Solidaridad** extended through 2025 by RDL 9/2024
- **OBBBA US** (P.L. 119-21, July 2025) permanently extended TCJA estate exemption etc.

A skill containing only "the current rate" produces the wrong answer for transactions on either side of a change boundary. Today, skills must be edited every time a rate changes — and the historical period becomes unrecoverable.

---

## 2. The data model

Every rate, threshold, deadline, or applicability flag in a skill must carry a **validity window**:

```yaml
rates:
  - id: uk_sdlt_residential_0_band
    description: "UK SDLT residential 0% band — single dwelling, no surcharge"
    effective: 2025-04-01
    expires: null            # open-ended
    threshold: 125000
    currency: GBP
    source: "FA 2024 Sch 5 Pt 1"

  - id: uk_sdlt_residential_0_band
    description: "UK SDLT residential 0% band — pre-2025 reform"
    effective: 2022-09-23
    expires: 2025-03-31
    threshold: 250000
    currency: GBP
    source: "Stamp Duty Land Tax (Temporary Relief) Act 2023"
```

### 2.1 Required fields

| Field | Type | Description |
|---|---|---|
| `id` | string | Stable identifier across all versions of this rule |
| `description` | string | Human-readable label |
| `effective` | ISO 8601 date | First day the rule applies |
| `expires` | ISO 8601 date \| null | Last day the rule applies (null = open-ended) |
| `value` / `rate` / `threshold` | varies | The actual figure |
| `currency` | ISO 4217 | Where applicable |
| `source` | string | Primary citation |

### 2.2 Optional fields

| Field | Description |
|---|---|
| `superseded_by` | id of replacing rule (when expires is set) |
| `transitional_rule` | how to handle transactions straddling effective date |
| `jurisdictional_overlay` | regional / cantonal / state variation |
| `taxpayer_class` | which subset of taxpayers (size, sector, status) |
| `condition` | additional eligibility (e.g., "first-time buyer = true") |

### 2.3 Format

Stored either:
1. **In skill frontmatter** for skill-internal lookups
2. **In a separate JSON/YAML file** referenced from the skill (`rates/<jurisdiction>/<topic>.yaml`)

Recommendation: separate files. Skill markdown remains human-readable; rates files are machine-readable. Build script joins them.

---

## 3. Lookup contract

When applying a rule:

```
Given:
  - rule_id: "uk_sdlt_residential_0_band"
  - transaction_date: "2025-02-15"

Process:
  1. Read all rules with rule_id = "uk_sdlt_residential_0_band"
  2. Filter to rules where effective <= transaction_date AND (expires is null OR transaction_date <= expires)
  3. Expected: exactly 1 match. If 0 → escalate (gap in coverage). If >1 → escalate (overlap).
  4. Return the matched rule's value.
```

For a date in 2025-02-15, the 2022-09-23 rule applies (threshold 250k).
For 2025-04-15, the 2025-04-01 rule applies (threshold 125k).

---

## 4. Transitional rules

For transactions that straddle a change boundary (e.g., contract signed 28 March 2025 but completed 15 April 2025), each rule may specify a `transitional_rule`:

```yaml
transitional_rule:
  type: contract_signing  # or completion, accrual, invoice, payment
  description: "SDLT rate determined by effective date of transaction; 'effective date' is generally the date of completion"
  applies_to: "transactions with contract before but completion after effective date"
  citation: "FA 2003 s.119"
```

The skill must implement a decision procedure:
1. Read the transaction's "effective" date per the transitional rule type
2. Apply the rule effective at that date

---

## 5. Implementation phases

### Phase A (current state): rates inline as text

```markdown
**Rates 2025:**
- 0-125,000: 0%
- 125,001-250,000: 2%
...
```

**Pain points:** unmachinable, no historical lookup, brittle to copy-paste errors.

### Phase B (target): rates in structured YAML alongside skill

```
skills/cross-border/property-transfer-tax-matrix.md
skills/cross-border/property-transfer-tax-matrix.rates.yaml
```

Skill markdown references `[T1]` rules from the rates file. Build script ingests both, produces packages.

### Phase C (future): rates engine as a runtime service

A separate service (or CLI) that the AI can query: "what was the SDLT rate for a residential single-dwelling sale at GBP 200k completed on 2024-12-15?" Returns: "2% on the slice above 250k = £0 (because 200k < 250k); total SDLT £0."

### Phase D (vision): integration with the practitioner correction loop

See `CORRECTION-FEEDBACK-LOOP-SPEC.md`. When a practitioner submits a correction with effective date, the rates file is updated and historical filings can be tested.

---

## 6. Migration plan

### 6.1 Pilot

Pick 3 jurisdictions with substantial recent change:
- UK (SDLT 2024-2025 reforms; ADS rate change; MDR repeal)
- US Federal (OBBBA permanent extensions; §174 capitalisation)
- EU CBAM (transitional → definitive)

Convert their rates to YAML. Manually verify lookup behavior across the change boundaries.

### 6.2 Tooling

Build script enhancements:
1. `scripts/rates_lint.py` — validate rates files for overlaps, gaps, source citation completeness
2. `scripts/rates_query.py <id> <date>` — CLI lookup
3. `scripts/build-packages.py` — bundle rates files into packages alongside skills

### 6.3 Backfill

Each existing skill maintainer (or community contributor) converts their rates inline → YAML during Q3 2026.

### 6.4 Version control

Rates files are git-tracked. Every change has a commit attributing the source (statute, regulation, official notice). Practitioner corrections (see correction feedback loop) create commits with the practitioner's credentials.

---

## 7. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Schema rot — fields multiply over time | Strict review of new fields; semver on the schema |
| Skill drift — markdown text contradicts YAML rate | Build-time check: text claim against the matching YAML rule |
| Gap coverage — what if no rule matches the transaction date | Escalate to reviewer with clear message ("no rule found for [id] effective [date]") |
| Source rot — citation URLs change | Snapshot key sources; store PDFs in a sibling `_sources/` folder for long-term reference |
| Practitioner trust — "the YAML says X but my client got assessed Y" | Correction feedback loop captures the corrected position with the practitioner's credential |

---

## 8. Open questions

- **Currency translation** — for cross-border applications, what is the canonical exchange rate? Suggest: per-jurisdiction official rate for that period (e.g., ECB monthly rate for EU; HMRC published rate for UK; etc.) stored alongside.
- **Multi-jurisdiction rules** (e.g., MLI Article 7 across all treaty partners) — does the YAML rule live in the cross-border skill or duplicated in each country skill? Suggest: cross-border skill is canonical; country skills reference by id.
- **Sub-national overlays** (US states, Swiss cantons, Spanish CCAA, German Länder, Australian states, Brazilian states, Indian states) — same schema with explicit `jurisdictional_overlay` field.

---

## 9. Next actions

1. **Pilot** with three jurisdictions (Q3 2026)
2. **Schema review** with 3+ practitioners after pilot
3. **Tooling** — rates_lint, rates_query, build integration (Q3-Q4 2026)
4. **Backfill** — start with end-to-end jurisdictions, expand outward (Q4 2026 – Q2 2027)
5. **Practitioner correction integration** (Q2 2027 — see correction feedback loop spec)
