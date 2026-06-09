---
name: bangladesh-references
jurisdiction: BD
version: 1.0
description: Primary source references and related open-source projects for this jurisdiction.
---

# Bangladesh — Related Open-Source Projects

OpenAccountants is AGPL-3.0. MPL-2.0, MIT, and Apache-2.0 are all compatible licenses for reference and integration.

## bd-income-tax-calculator

- Repository: [ssi-anik/bd-income-tax-calculator](https://github.com/ssi-anik/bd-income-tax-calculator)
- License: MPL-2.0
- Stars: 87
- Language: JavaScript (React)
- Scope: Bangladesh personal income tax calculator implementing NBR tax slabs, salary component exemptions (house rent 50% capped, medical 10% capped, conveyance), investment rebate calculation (tiered 15%/12%/10% based on income level), and taxpayer category-based thresholds (male, female, 65+, specially-abled, freedom fighter).
- Why it matters: Most-starred Bangladesh-specific tax calculator on GitHub. Implements the real NBR slab structure and exemption logic used by Bangladeshi taxpayers.
- Integration approach: Tax slab rates, exemption thresholds per taxpayer category, salary component tax-free limits, and investment rebate logic directly incorporated into the OpenAccountants skill.
