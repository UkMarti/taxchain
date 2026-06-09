---
name: portugal-formation
description: >
  Use this skill whenever asked about forming, incorporating, or registering a company in Portugal. Trigger on phrases like "set up a company in Portugal", "Lda formation", "sociedade por quotas", "Empresa na Hora", "Portuguese company formation", "register a business Portugal", "sociedade unipessoal", "NIF Portugal", "Registo Comercial", or any question about starting a business entity in Portugal. Covers entity types (Lda, SA, ENI), registration process, capital requirements, costs, post-formation compliance, and bank account opening. ALWAYS read this skill before advising on Portuguese company formation.
version: 1.0
jurisdiction: PT
category: formation
depends_on:
  - company-formation-workflow-base
tax_year: 2025
verified_by: pending
---

# Portugal Company Formation Skill v1.0

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Portugal (Portuguese Republic) |
| Currency | EUR |
| Company registrar | Instituto dos Registos e do Notariado (IRN) / Conservatória do Registo Comercial |
| Key legislation | Código das Sociedades Comerciais (CSC); DL 111/2005 (Empresa na Hora) |
| Typical formation time | 1 hour (Empresa na Hora) to 2 weeks (traditional/online) |
| Corporate tax rate | 21% (standard IRC); 17% on first €50,000 for SMEs in interior regions |
| Skill version | 1.0 |

---

## Section 2 -- Entity Types Comparison

| Feature | Empresário em Nome Individual (ENI) | Sociedade por Quotas (Lda) | Sociedade Unipessoal (Unipessoal Lda) | Sociedade Anónima (SA) |
|---|---|---|---|---|
| Legal personality | No | Yes | Yes | Yes |
| Liability | Unlimited | Limited to capital contribution | Limited | Limited |
| Min. founders | 1 | 2 | 1 | 5 (or 1 if held by another company) |
| Min. share capital | N/A | €1 (per quota min. €1) | €1 | €50,000 |
| Tax treatment | IRS (personal) | IRC (corporate) | IRC (corporate) | IRC (corporate) |
| Admin burden | Low | Medium | Medium | High |
| Audit required | No | Only if thresholds exceeded | Only if thresholds exceeded | Yes (ROC mandatory above thresholds) |

**Recommended default:** Sociedade por Quotas (Lda) or Sociedade Unipessoal por Quotas for most commercial purposes.

---

## Section 3 -- Registration Process

### Option A: Empresa na Hora (Same-Day Formation)

Portugal's "Company in an Hour" service is one of the fastest formation processes in Europe.

1. **Appear at an Empresa na Hora desk** (IRN offices, Lojas do Cidadão)
2. **Choose a pre-approved company name** from the Bolsa de Firmas, or present an approved certificado de admissibilidade
3. **Select a pre-approved pacto social** (standard articles) or bring your own
4. **Provide ID** (Cartão de Cidadão or passport + NIF) for all founders
5. **Nominate a Contabilista Certificado** (certified accountant) or select one from the desk
6. **Pay €360** (standard) or €220 (with pre-approved articles online)
7. **Receive immediately**: pacto social, certidão permanente access code, Cartão da Empresa, NIF da empresa, NISS (social security number)
8. **Deposit capital** within 5 working days into company bank account (or deliver to company coffers by end of first financial year)

### Option B: Empresa Online 2.0

1. Go to gov.pt or Empresa Online platform
2. Complete the digital form with company details
3. Upload documents (ID, articles, etc.)
4. Pay €220 (pre-approved articles) or €360 (custom articles)
5. IRN processes in 5--10 working days
6. Company registration and NIF issued electronically

### Option C: Traditional Formation (Conservatória)

1. Obtain certificado de admissibilidade (name approval) from RNPC
2. Draft pacto social (articles)
3. Execute escritura pública (public deed) before a notary
4. Register at Conservatória do Registo Comercial
5. Register with Finanças (tax) and Segurança Social
6. Takes 1--3 weeks; more expensive due to notary fees

### Post-Registration Steps (All Options)
- Register for IRC (corporate tax) with Autoridade Tributária e Aduaneira
- Register for IVA (VAT) if applicable
- Register with Segurança Social as employer (if hiring)
- Submit Declaração de Início de Atividade within 15 days

---

## Section 4 -- Capital Requirements

| Entity Type | Min. Share Capital | Min. Paid-Up | Payment Timing | In-Kind Contributions |
|---|---|---|---|---|
| Lda (multi-quotaholder) | €2 (min. €1 per quota) | No minimum at formation | Deposit within 5 working days or deliver by end of 1st year | Permitted (ROC valuation required if over €5,000) |
| Unipessoal Lda | €1 | Same as Lda | Same as Lda | Permitted |
| SA | €50,000 | 30% at formation | Remainder per articles | Permitted (ROC report required) |

---

## Section 5 -- Costs Breakdown

| Cost Component | Amount (EUR) | Notes |
|---|---|---|
| Empresa na Hora (standard) | €360 | All-inclusive: registration, NIF, NISS |
| Empresa na Hora (with trademark, 1 class) | €360 + €200 | Trademark registration included |
| Empresa Online (pre-approved articles) | €220 | Digital process |
| Empresa Online (custom articles) | €360 | Digital process |
| Certificado de admissibilidade (if needed) | €75 (online) / €150 (urgent) | Name approval for non-Bolsa names |
| Traditional notary + registration | €500--€1,500 | Escritura pública + Conservatória |
| Share capital deposit | €1 (minimum) | Practical: €1,000+ recommended |
| **Total (Empresa na Hora)** | **€360** | Cheapest and fastest option |

### Annual Maintenance

| Item | Cost (EUR) |
|---|---|
| Contabilista Certificado | €1,200--€3,600/year |
| IES/IRC return filing | Included in accountant fees |
| Certidão permanente (online registry access) | €25/year |
| Publicações obrigatórias | Included in IES filing |

---

## Section 6 -- Post-Formation Compliance

| Obligation | Deadline | Authority |
|---|---|---|
| IES (Informação Empresarial Simplificada) | By 15 July of following year | Autoridade Tributária |
| IRC return (Modelo 22) | By 31 May of following year | Autoridade Tributária |
| IVA declarations | Monthly or quarterly | Autoridade Tributária |
| Relatório de gestão and annual accounts | Approved within 3 months of year-end | Internal (assembleia geral) |
| Registo central do beneficiário efetivo (RCBE) | At incorporation + annual confirmation | IRN |
| Segurança Social contributions | Monthly | Instituto da Segurança Social |

---

## Section 7 -- Bank Account Opening

### Documents Typically Required
- Certidão permanente (online company certificate)
- Pacto social
- NIF of company and all gerentes/sócios
- ID (Cartão de Cidadão or passport) of directors and shareholders
- Proof of address
- Declaração de início de atividade

### Typical Timeline
- 1--5 days (Portuguese banks are relatively fast for residents)
- 1--3 weeks for non-resident founders

### Common Banks
- Caixa Geral de Depósitos, Millennium BCP, Novo Banco, BPI (traditional)
- Revolut Business, Wise Business (digital)

---

## Section 8 -- Foreign Founder Considerations

| Question | Answer |
|---|---|
| Non-resident directors (gerentes) allowed? | Yes -- NIF required (obtainable with a fiscal representative) |
| Fiscal representative required? | Yes, for non-EU/EEA residents (appointed representative in Portugal for tax purposes) |
| Physical presence required? | Yes for Empresa na Hora; power of attorney accepted for traditional/online |
| Apostille requirements | Foreign documents require apostille + certified Portuguese translation |
| NIF for foreigners | Obtainable at Finanças office or via online services with fiscal representative |
| Foreign ownership restrictions | None for standard Lda; regulated sectors may require specific authorisations |
| Golden Visa | Investment-based residence permit (€500,000+ fund investment as of 2023 reform) |

---

## Section 9 -- Common Mistakes and Refusals

**R-PT-F1 -- Skipping the Contabilista Certificado.** "Every Portuguese company must have a Contabilista Certificado (CC) appointed. This is a legal requirement, not optional. The CC is personally liable for the accuracy of tax declarations."

**R-PT-F2 -- Not depositing capital on time.** "Capital must be deposited within 5 working days of Empresa na Hora formation, or delivered to company coffers by end of first financial year. Failure can result in personal liability for gerentes."

**R-PT-F3 -- Non-resident without fiscal representative.** "Non-EU/EEA residents must appoint a fiscal representative in Portugal before obtaining a NIF. Without a NIF, no corporate formation is possible."

**R-PT-F4 -- Shell company for Golden Visa.** "Company formation alone does not qualify for the Golden Visa. The investment must meet specific criteria (fund investment, job creation, etc.) as per the 2023 reform. Do not advise formation as a visa pathway without specialist immigration advice."

**R-PT-F5 -- RCBE non-compliance.** "Failure to file and annually confirm the beneficial ownership register (RCBE) results in the company being unable to enter into contracts, receive funds, or distribute profits."

---

## Section 10 -- Timeline

| Step | Duration | Cumulative |
|---|---|---|
| Obtain NIF (if foreign founder) | 1--10 days | Day 1--10 |
| Empresa na Hora appointment | 1 day (same day) | Day 2--11 |
| Company legally formed | Immediate | Day 2--11 |
| Deposit capital in bank | 1--5 days | Day 3--16 |
| Declaração de início de atividade | Within 15 days | Day 3--26 |
| Bank account fully operational | 1--5 days | Day 4--21 |
| RCBE filing | Within 30 days | Day 4--41 |
| **Ready to trade** | | **As fast as 1--2 days (residents via Empresa na Hora)** |

Portugal's Empresa na Hora is one of the fastest company formation processes in the world.

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute legal, tax, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional before acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com).
