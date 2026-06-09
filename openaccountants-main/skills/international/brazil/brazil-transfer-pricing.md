---
name: brazil-transfer-pricing
description: >
  Use this skill whenever asked about Brazil transfer pricing rules, documentation requirements, or preços de transferência compliance. Trigger on phrases like "transfer pricing Brazil", "Brazilian TP documentation", "preços de transferência", "master file Brazil", "local file Brazil", "CbCR Brazil", "APA Brazil", "Law 14.596/2023", "IN RFB 2161", "arm's length Brazil", "ECF", or any question about intercompany pricing for Brazilian entities.
version: 1.0
jurisdiction: BR
category: transfer-pricing
depends_on:
  - transfer-pricing-workflow-base
---

# Brazil Transfer Pricing Skill v1.0

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Brazil (Federative Republic of Brazil) |
| Tax authority | Receita Federal do Brasil (RFB -- Federal Revenue Service) |
| Key TP legislation | Law 14.596/2023 (new OECD-aligned regime); IN RFB 2.161/2023 (implementing regulation) |
| Previous regime | Laws 9.430/1996 and 9.959/2000 (prescriptive/fixed-margin system -- fully replaced) |
| OECD member? | Yes (joined January 2024) |
| BEPS signatory? | Yes |
| Effective date (new rules) | Mandatory from 1 January 2024 (early adoption was available for FY2023) |
| Currency | BRL |
| Documentation language | Local File: Portuguese; Master File: English or Spanish accepted (translation on request) |
| Skill version | 1.0 |

---

## Section 2 -- Documentation Requirements

### 2.1 Master File (Arquivo Global)

| Item | Detail |
|---|---|
| Required? | Yes, for taxpayers in scope (controlled transactions with related parties abroad) |
| Format | OECD-aligned three-tier structure per IN RFB 2.161/2023 |
| Language | English or Spanish accepted; Portuguese translation on RFB request |
| Filing deadline | 3 months after ECF filing deadline (October for standard calendar-year taxpayers) |

### 2.2 Local File (Arquivo Local)

| Item | Detail |
|---|---|
| Required? | Yes, for taxpayers with controlled transactions |
| Content tiers | Simplified for smaller taxpayers; complete for larger taxpayers |
| Complete Local File content | Business description, competitors, controlled transactions, method application, accounting data |
| Language | Portuguese |
| Filing deadline | 3 months after ECF filing deadline |

### 2.3 Tier Classification

| Category | Criteria | Documentation Level |
|---|---|---|
| Category 1 | Below thresholds | Simplified Local File |
| Category 2 | Mid-range intercompany volumes | Standard Local File |
| Category 3 | Large intercompany volumes | Complete Local File + Master File |

### 2.4 Country-by-Country Report (CbCR)

| Item | Detail |
|---|---|
| Threshold | Consolidated group revenue ≥ BRL 2.4 billion (approx. EUR 750 million) |
| Filing deadline | Included in ECF reporting cycle |
| Content | Per OECD Annex III |

### 2.5 Corporate Tax Return (ECF)

| Item | Detail |
|---|---|
| TP disclosure | Transfer pricing information included in ECF (Escrituração Contábil Fiscal) |
| ECF filing deadline | July of following year (standard calendar-year taxpayers) |

---

## Section 3 -- Arm's Length Standard

### 3.1 Definition

Article 2, Law 14.596/2023: Controlled transactions must be priced consistently with conditions that would be established between unrelated parties in comparable transactions under comparable circumstances (arm's length principle).

### 3.2 Historic Context

Brazil's previous regime (1996-2023) used prescriptive fixed-margin methods (PIC, PRL, CPL, PVEx, PVA, PVV, CAP) with statutory margins. The new regime (from 2024) fully adopts the OECD arm's length standard.

### 3.3 Accepted Methods (New Regime)

| Method | Accepted |
|---|---|
| Comparable Uncontrolled Price (PIC) | Yes |
| Resale Price Method (PRL) | Yes |
| Cost Plus Method (MCL) | Yes |
| Transactional Net Margin Method (MLT) | Yes |
| Profit Split Method (MDL) | Yes |

### 3.4 Most Appropriate Method

Article 12, Law 14.596/2023: The most appropriate method must be selected based on the nature of the transaction, comparability, and data availability. No statutory hierarchy.

### 3.5 OECD Guidelines as Subsidiary Source

IN RFB 2.161/2023, Art. 1, §4: OECD Transfer Pricing Guidelines (2022 edition and approved updates) serve as a subsidiary source for interpretation, unless contrary to Brazilian law or RFB normative acts.

---

## Section 4 -- Filing Obligations

| Obligation | Detail |
|---|---|
| ECF (TP information) | Annual electronic filing (July) |
| Master File | Filed 3 months after ECF deadline |
| Local File | Filed 3 months after ECF deadline |
| CbCR | Per ECF reporting cycle |
| Technical responsibility | External expert/consultant who prepared the economic study bears technical responsibility |

---

## Section 5 -- Deadlines

| Item | Deadline |
|---|---|
| ECF filing (including TP data) | July of following year (standard calendar year) |
| Master File and Local File | 3 months after ECF deadline (October for standard; December 2025 for FY2024 transition) |
| FY2024 (first year) special deadline | December 31, 2025 |
| CbCR | Within ECF reporting cycle |

---

## Section 6 -- Penalties

| Offence | Penalty |
|---|---|
| Late filing of Master/Local File | 0.2% per month (or fraction) on taxpayer's gross income |
| Submission without meeting requirements (inaccurate/incomplete) | 3% of gross income; minimum BRL 20,000; maximum BRL 5,000,000 |
| Late ECF filing | BRL 1,500/month for legal entities (general) |
| Inaccurate CbCR information | 0.2% of consolidated revenue of MNE group for prior year |
| TP adjustment by RFB | Additional tax + SELIC interest + fine of 75% (standard) or 150% (fraud/concealment) |

---

## Section 7 -- Advance Pricing Agreements (APA)

| Item | Detail |
|---|---|
| Availability | Yes (introduced by Law 14.596/2023; "Processo de Consulta Específico") |
| Types | Unilateral (initially); bilateral/multilateral expected |
| Governing regulation | Under development -- RFB opened public consultation August 2024 |
| Effective date | Regulations effective from 1 January 2025 |
| Duration | To be determined (expected 3-5 years) |
| Fees | To be determined |
| Status | New mechanism; limited practical experience to date |

---

## Section 8 -- Safe Harbours

| Area | Detail |
|---|---|
| General | No broad statutory safe harbour under the new regime |
| Low-value intra-group services | Under Art. 23 of Law 14.596/2023; specific rules for intra-group services |
| Financial transactions | Specific provisions in forthcoming normative instructions |
| Commodities | Separate rules under development |
| Historical regime | Old fixed-margin methods (PRL 20%, CPL 20%, etc.) no longer apply |

---

## Section 9 -- Recent Developments

| Date | Development |
|---|---|
| January 2024 | New OECD-aligned TP regime mandatory (Law 14.596/2023) |
| September 2023 | IN RFB 2.161/2023 published (implementing regulation) |
| August 2024 | Public consultation on intra-group services and APA rules |
| January 2025 | APA regulations effective |
| January 2024 | Brazil becomes OECD member |
| December 2025 | First Master/Local File submissions due (for FY2024) |
| Ongoing | Additional normative instructions expected for: commodities, intangibles, financial transactions, restructurings |
| Ongoing | Pillar Two implementation under discussion |

---

## Section 10 -- Interaction with Other Skills

| Related skill | Interaction |
|---|---|
| brazil-corporate-tax (IRPJ/CSLL) | TP adjustments affect corporate income tax (IRPJ) and social contribution (CSLL) base |
| brazil-bookkeeping | TP documentation relies on Brazilian accounting records (IFRS-aligned) |
| ECF reporting | Transfer pricing data integral part of ECF |
| Thin capitalisation | Separate rules under Art. 24-25 of Law 12.249/2010 interact with TP for intercompany loans |
| CbCR | Used by RFB for risk assessment |
| Customs valuation | TP adjustments may affect customs duties on imports |

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional before filing or acting upon.
