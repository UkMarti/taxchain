---
name: pk-return-assembly
description: >
  Final orchestrator that assembles the complete Pakistan filing package for a Pakistan-resident
  self-employed person. Trigger on phrases like "assemble my Pakistan return", "what do I file FBR",
  "file my IRIS return and wealth statement", "Pakistan freelancer filing". Consumes outputs from
  pk-it-export-tax or pk-income-tax, pakistan-sales-tax, and pk-social-contributions, and produces the
  filing checklist, forms, and deadlines. Computes nothing itself.
version: 0.1
jurisdiction: PK
tax_year: 2026
category: orchestrator
depends_on:
  - pk-freelance-intake
---

# Pakistan Return Assembly — Orchestrator v0.1

## What this file is
The capstone for a Pakistan-resident freelancer/sole proprietor. It sequences the upstream skills, selects forms, and produces a single pre-filing package via IRIS. It computes nothing.

## Section 1 — What you file
| Item | Where | When (verify) |
|---|---|---|
| Annual income tax return | FBR **IRIS** | By ~30 September following the tax year (individuals) |
| Wealth statement (individuals) | IRIS (with the return) | With the return |
| IT-export income | Reported under the final-tax regime | With the return |
| Sales tax on services | Provincial authority (SRB/PRA/KPRA/BRA/ICT) | Monthly |
| Sales tax on goods | FBR | Monthly |

## Section 2 — Assembly order
1. **Intake** (pk-freelance-intake) → confirm export vs domestic, PSEB, filer/ATL, residency.
2. **Tax base** → pk-it-export-tax (final tax on export proceeds) and/or pk-income-tax (domestic business slabs).
3. **Sales tax** → pakistan-sales-tax (goods/services) if registered.
4. **Social** → pk-social-contributions (usually nil for a solo freelancer; relevant if an employer).
5. **Reconcile** export remittances (PRCs) with declared income; gather withholding-tax certificates for credit.
6. **File** the return + wealth statement via **IRIS**; confirm **ATL** status afterward.

## Section 3 — Pre-filing checklist
- [ ] Export proceeds matched to bank PRCs; final tax computed
- [ ] Domestic income on the correct slabs; expenses documented
- [ ] Wealth statement reconciles to assets/income
- [ ] Withholding-tax credits claimed
- [ ] Sales-tax returns filed (if registered)
- [ ] Return filed on IRIS by the deadline; on the ATL

## Section 10 — Prohibitions
- NEVER file export income under normal slabs when the concession applies (or vice versa).
- NEVER omit the wealth statement for an individual.
- NEVER state deadlines as final without verifying the FBR calendar (extensions are common).

## Disclaimer
Informational only; not advice. Verify forms and deadlines with the FBR. All outputs must be reviewed and signed off by a qualified Pakistani tax practitioner before filing. Maintained at [openaccountants.com](https://www.openaccountants.com).
