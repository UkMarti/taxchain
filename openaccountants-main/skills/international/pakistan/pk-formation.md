---
name: pk-formation
description: >
  Use this skill whenever asked how to register or start a business in Pakistan as a freelancer or
  small business. Trigger on phrases like "register NTN", "how to start freelancing Pakistan legally",
  "sole proprietor Pakistan", "register with PSEB", "SECP company registration", "AOP Pakistan".
  Covers NTN registration on IRIS, the sole proprietor / AOP / company choice, PSEB for IT exporters,
  and sales-tax registration. ALWAYS read before any Pakistan formation work.
version: 1.0
jurisdiction: PK
tax_year: 2026
category: international
depends_on:
  - income-tax-workflow-base
---

# Pakistan Business Formation — Skill v1.0

## Section 1 — Quick Reference

| Field | Value |
|---|---|
| Solo vehicle | Sole proprietor (just an NTN + business name) |
| Multi-owner | AOP (Association of Persons) |
| Company | (Pvt) Ltd via SECP |
| Core registration | NTN via FBR IRIS (free, online) |
| IT exporter | Register with PSEB (pseb.org.pk) for the concessional export rate |
| Sales tax | FBR (goods) and/or provincial revenue authority (services) registration if applicable |
| Quality tier | Research-verified — pending sign-off by a Pakistani tax practitioner |
| Skill version | 1.0 |

### Conservative defaults
| Ambiguity | Default |
|---|---|
| Vehicle unknown | Sole proprietor for a solo freelancer |
| IT exporter | Recommend PSEB registration (lower export tax) |
| On ATL? | Recommend filing to join the Active Taxpayer List |

## Section 2 — Steps for a solo freelancer (Tier 1)
1. **Get an NTN** via **FBR IRIS** (using CNIC) — registers you as a taxpayer; pick a business name and activity.
2. **Open a business bank account** (needed for export remittances / PRCs).
3. **IT exporters:** register with **PSEB** to secure the ~0.25% export concession.
4. **Sales tax:** register with the relevant **provincial authority** (Sindh SRB, Punjab PRA, KPRA, Balochistan BRA, or ICT for Islamabad) if providing taxable **services**; with **FBR** if dealing in taxable **goods**.
5. **File the annual return + wealth statement** to stay on the **ATL**.

## Section 3 — Sole proprietor vs AOP vs company
| Factor | Sole proprietor | AOP | (Pvt) Ltd |
|---|---|---|---|
| Setup | NTN only | Partnership deed + NTN | SECP incorporation |
| Liability | Personal | Shared | Limited |
| Tax | Individual slabs / export final tax | AOP slabs | Corporate rate |
| Best for | Solo freelancer | Partners | Scaling/investors |

## Section 10 — Prohibitions
- NEVER skip PSEB for an IT exporter who wants the low rate.
- NEVER omit provincial sales-tax registration where services are taxable.
- NEVER present registration thresholds/rates without verifying current rules.

## Disclaimer
Informational only; not advice. Verify registration steps and thresholds with the FBR, PSEB, SECP and provincial authorities. All outputs must be reviewed and signed off by a qualified Pakistani practitioner. Maintained at [openaccountants.com](https://www.openaccountants.com).
