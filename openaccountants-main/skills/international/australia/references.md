---
name: australia-references
jurisdiction: AU
version: 1.0
description: Primary source references and related open-source projects for this jurisdiction.
---

# Australia — Related Open-Source Projects

OpenAccountants is AGPL-3.0. MIT, Apache-2.0, GPL-3.0, and AGPL-3.0 content can all be incorporated with attribution. Projects below are license-compatible unless noted otherwise.

## PolicyEngine Australia

- Repository: [PolicyEngine/policyengine-au](https://github.com/PolicyEngine/policyengine-au)
- License: AGPL-3.0
- Language: English
- Scope: Full Australian tax-benefit microsimulation model covering personal income tax, Medicare levy, HECS-HELP repayment thresholds, and superannuation rules.
- Why it matters: Comprehensive, actively maintained microsimulation with detailed modelling of Australian tax and transfer policy. Strong validation source for PIT brackets, offsets, and levy calculations.
- Integration approach:
  - AGPL-3.0 is the same license family as OpenAccountants. Content can be incorporated with attribution.
  - Use as a validation reference for income tax brackets, Medicare levy surcharge thresholds, HECS-HELP repayment rates, and superannuation contribution caps.

## Aussie Tax Helper

- Repository: [kazimurtaza/aussie-tax-helper](https://github.com/kazimurtaza/aussie-tax-helper)
- License: Apache-2.0
- Stars: 6
- Language: English
- Scope: ATO 2024-25 tax calculator with work-from-home deduction comparison (Fixed Rate method vs Actual Cost method).
- Why it matters: Practical focus on the WFH deduction methods that are a common pain point for individual filers. Apache-2.0 is license-compatible.
- Integration approach:
  - Reference for WFH deduction logic and ATO rate tables.
  - Apache-2.0 permits incorporation with attribution.

## Quick Tax Calc

- Repository: [zorfling/quick-tax-calc](https://github.com/zorfling/quick-tax-calc)
- License: verify before reuse
- Language: English
- Scope: ATO individual tax rates calculator.
- Why it matters: Lightweight reference for Australian individual income tax rate schedules.
- Integration approach:
  - Reference for tax bracket calculations and rate verification against ATO published tables.
  - Treat as reference-only until the license is confirmed.
