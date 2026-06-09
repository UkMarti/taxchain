---
name: brazil-einvoice
description: >
  Use this skill whenever asked about Brazil e-invoicing, NF-e (Nota Fiscal Eletrônica), NFS-e (Nota Fiscal de Serviço Eletrônica), NFC-e (Nota Fiscal de Consumidor Eletrônica), CT-e (Conhecimento de Transporte Eletrônico), SEFAZ (Secretaria da Fazenda), DANFE, chave de acesso, XML schema layout 4.00, certificado digital A1/A3, ICMS, IPI, PIS, COFINS, or any question about generating, transmitting, validating, or troubleshooting Brazilian electronic fiscal documents. Also trigger when advising on SEFAZ integration, contingency modes (EPEC, SVC), event handling (cancelamento, carta de correção), or NFS-e national system (SNNFSe). ALWAYS read this skill before touching any Brazil e-invoice work.
version: 1.0
jurisdiction: BR
category: invoicing
depends_on:
  - einvoice-workflow-base
---

# Brazil E-Invoice (NF-e / NFS-e) Skill v1.0

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Federative Republic of Brazil |
| Currency | BRL (Real) |
| E-Invoicing System | Multi-document: NF-e, NFS-e, NFC-e, CT-e, MDF-e |
| Governing Bodies | Federal: Receita Federal, ENCAT; State: SEFAZ (26 states + DF); Municipal: each municipality |
| Key Legislation | Federal Constitution Art. 150/155; Lei Complementar 87/96 (ICMS); Ajuste SINIEF 07/2005; NT 2025.002 (tax reform) |
| Schema Standard | Proprietary XML (W3C compliant); layout version 4.00 |
| Namespace | http://www.portalfiscal.inf.br/nfe |
| Implementation Start | 2006 (pilot); mandatory for all since 2014 |
| Current Status | Fully operational; undergoing tax reform adaptation (IBS/CBS from 2026) |
| Portal | www.nfe.fazenda.gov.br (NF-e); www.gov.br/nfse (NFS-e Nacional) |

### Document Type Overview

| Document | Full Name | Jurisdiction | Use Case |
|---|---|---|---|
| NF-e (modelo 55) | Nota Fiscal Eletrônica | State (SEFAZ) | B2B goods sales, interstate transactions |
| NFC-e (modelo 65) | Nota Fiscal de Consumidor Eletrônica | State (SEFAZ) | B2C point-of-sale retail |
| NFS-e | Nota Fiscal de Serviço Eletrônica | Municipal → National (SNNFSe) | Services |
| CT-e | Conhecimento de Transporte Eletrônico | State (SEFAZ) | Freight/transport |
| MDF-e | Manifesto Eletrônico de Documentos Fiscais | State (SEFAZ) | Transport manifest |

---

## Section 2 -- Mandate Scope

### NF-e (Goods) — Universal Mandate

- **All taxpayers** engaged in interstate commerce or in ICMS-taxable goods operations
- No revenue threshold — mandatory for virtually all commercial/industrial establishments
- Mandatory for: manufacturers, wholesale distributors, importers, exporters
- Covers: sales, returns, transfers between branches, remittances, complementary/adjustment notes

### NFC-e (B2C Retail)

- Replaces the old paper cupom fiscal (ECF)
- Mandatory for retail establishments (phased in by state; now universal)
- Simplified format; buyer identification optional for purchases < BRL 200

### NFS-e (Services)

- Historically issued per municipal rules (each of Brazil's 5,570 municipalities had own system)
- National NFS-e system (SNNFSe) launched for unified issuance
- Transitioning to mandatory use of SNNFSe platform with IBS/CBS fields (2026 reform)
- Service providers in all municipalities must comply

### Document Events

| Event | Code | Description |
|---|---|---|
| Cancelamento | 110111 | Cancel within 24 hours (7 days in some states) |
| Carta de Correção | 110110 | Correction letter for non-financial errors |
| Confirmação | 210200 | Buyer confirms receipt |
| Desconhecimento | 210220 | Buyer does not recognize the operation |
| EPEC | 110140 | Emergency contingency registration |

---

## Section 3 -- Technical Format

### NF-e XML Schema (Layout 4.00)

| Aspect | Detail |
|---|---|
| Format | XML |
| Layout Version | 4.00 (current since 2019) |
| Root Element (submission) | `<enviNFe>` |
| Root Element (single NF-e) | `<NFe>` containing `<infNFe>` |
| Namespace | http://www.portalfiscal.inf.br/nfe |
| Digital Signature Namespace | http://www.w3.org/2000/09/xmldsig# |
| Schema Files | enviNFe_v4.00.xsd, leiauteNFe_v4.00.xsd, etc. |
| Encoding | UTF-8 |
| Signature Standard | XMLDSig (enveloped) using ICP-Brasil certificate |

### Access Key (Chave de Acesso) — 44 Digits

| Position | Digits | Content |
|---|---|---|
| 1-2 | 2 | State code (UF IBGE) |
| 3-6 | 4 | Year/Month (AAMM) |
| 7-20 | 14 | CNPJ of issuer |
| 21-22 | 2 | Model (55=NF-e, 65=NFC-e) |
| 23-25 | 3 | Series |
| 26-34 | 9 | NF-e number |
| 35 | 1 | Emission type (tpEmis) |
| 36-43 | 8 | Numeric code (random) |
| 44 | 1 | Check digit (mod 11) |

### Digital Certificate Requirements

| Type | Description |
|---|---|
| ICP-Brasil A1 | Software-based certificate (file .pfx); valid 1 year |
| ICP-Brasil A3 | Hardware-based (smart card/token); valid 3 years |
| Signing | Enveloped XMLDSig; SHA-256 recommended |
| Certificate in XML | X509Certificate element in `<Signature>` |

---

## Section 4 -- Mandatory Fields

### Identification (ide)

| Tag | Description | Example |
|---|---|---|
| cUF | State code (IBGE) | 35 (São Paulo) |
| cNF | Random 8-digit code | 12345678 |
| natOp | Nature of operation | "Venda de mercadoria" |
| mod | Model | 55 |
| serie | Series number | 1 |
| nNF | NF-e number | 000000001 |
| dhEmi | Emission date/time | 2026-05-22T14:30:00-03:00 |
| tpNF | Direction (0=input, 1=output) | 1 |
| idDest | Destination (1=internal, 2=interstate, 3=export) | 2 |
| cMunFG | Municipality code (IBGE) of taxable event | 3550308 |
| tpImp | DANFE print format | 1 (portrait) |
| tpEmis | Emission type | 1 (normal) |
| tpAmb | Environment (1=production, 2=homologation) | 1 |
| finNFe | Purpose (1=normal, 2=complementary, 3=adjustment, 4=return) | 1 |
| indFinal | Final consumer (0=no, 1=yes) | 0 |
| indPres | Presence indicator | 1 (in-person) |

### Issuer (emit)

| Tag | Description |
|---|---|
| CNPJ | 14-digit CNPJ |
| xNome | Legal name |
| xFant | Trade name |
| IE | State tax registration (Inscrição Estadual) |
| CRT | Tax regime (1=Simples Nacional, 2=SN excess, 3=Normal) |
| enderEmit | Full address (xLgr, nro, xBairro, cMun, UF, CEP) |

### Recipient (dest)

| Tag | Description |
|---|---|
| CNPJ or CPF | Recipient tax ID |
| xNome | Name |
| indIEDest | IE indicator (1=ICMS contributor, 2=exempt, 9=non-contributor) |
| IE | State registration (if contributor) |
| enderDest | Full address |

### Products (det/prod)

| Tag | Description |
|---|---|
| cProd | Internal product code |
| cEAN | GTIN barcode (or "SEM GTIN") |
| xProd | Product description |
| NCM | Mercosur nomenclature code (8 digits) |
| CFOP | Fiscal operation code (4 digits) |
| uCom | Unit of measure |
| qCom | Quantity |
| vUnCom | Unit price |
| vProd | Total product value (qCom × vUnCom) |
| cEANTrib | Tax unit barcode |
| uTrib | Tax unit of measure |
| qTrib | Tax quantity |
| vUnTrib | Tax unit price |

### Taxes (det/imposto)

| Tax Group | Tags | Description |
|---|---|---|
| ICMS | orig, CST/CSOSN, modBC, vBC, pICMS, vICMS | State goods circulation tax |
| IPI | CST, vBC, pIPI, vIPI | Federal excise (manufactured goods) |
| PIS | CST, vBC, pPIS, vPIS | Federal social contribution |
| COFINS | CST, vBC, pCOFINS, vCOFINS | Federal social contribution |

### Totals (total/ICMSTot)

| Tag | Description |
|---|---|
| vBC | Total ICMS tax base |
| vICMS | Total ICMS |
| vProd | Total products |
| vFrete | Total freight |
| vSeg | Total insurance |
| vDesc | Total discounts |
| vIPI | Total IPI |
| vPIS | Total PIS |
| vCOFINS | Total COFINS |
| vNF | Total NF-e value |

---

## Section 5 -- Transmission Method

### SEFAZ Web Services

| Service | WSDL Action | Purpose |
|---|---|---|
| NfeAutorizacao | NfeAutorizacaoLote | Submit batch of NF-e for authorization |
| NfeRetAutorizacao | NfeRetAutorizacaoLote | Query authorization result |
| NfeConsultaProtocolo | NfeConsulta | Query single NF-e status |
| NfeInutilizacao | NfeInutilizacao | Number range cancellation |
| RecepcaoEvento | NfeRecepcaoEvento | Submit events (cancel, correction, etc.) |
| NfeStatusServico | NfeStatusServico | Check SEFAZ availability |
| NfeDistribuicaoDFe | NFeDistribuicaoDFe | Download DFe addressed to taxpayer |

### SEFAZ Environments

| Environment | URL Pattern | Purpose |
|---|---|---|
| Production | https://nfe.sefaz{UF}.{domain}/... | Live transactions |
| Homologation | https://homologacao.nfe.sefaz{UF}.{domain}/... | Testing |

### Virtual SEFAZ (SVRS / SVC)

- States that don't host their own SEFAZ use SVRS (Sefaz Virtual RS) or SVAN (Sefaz Virtual AN)
- Contingency modes: SVC-AN, SVC-RS (when primary SEFAZ is down)
- EPEC: Evento Prévio de Emissão em Contingência (offline pre-registration)

### Authorization Flow

1. Generate NF-e XML (all mandatory fields)
2. Sign XML with ICP-Brasil certificate (XMLDSig enveloped)
3. Submit to SEFAZ via NfeAutorizacao web service (synchronous or batch)
4. SEFAZ validates schema, business rules, digital signature
5. SEFAZ returns protocolo de autorização (authorization protocol) with status code
6. Embed authorization protocol in NF-e XML (nfeProc) → legally valid document
7. Generate DANFE (auxiliary printed document) for transport accompaniment
8. Deliver XML to recipient within 24 hours

---

## Section 6 -- Validation Rules

### SEFAZ Validation Layers

1. **Schema validation** — XML conforms to leiauteNFe_v4.00.xsd
2. **Digital signature** — Valid ICP-Brasil certificate; signature mathematically correct
3. **Business rules** — ~900+ validation rules defined in Notas Técnicas
4. **Tax calculation** — ICMS, IPI, PIS, COFINS amounts verified against rates and bases
5. **Cross-reference** — CNPJ/IE must be active in SEFAZ cadastro
6. **GTIN validation** — Barcode must exist in CCG (Cadastro Centralizado de GTINs)
7. **Duplicate check** — Same chave de acesso cannot be authorized twice

### Common Rejection Codes

| Code | Description | Fix |
|---|---|---|
| 204 | Duplicate NF-e (same access key) | Use new nNF or cNF |
| 215 | Schema validation error | Fix XML structure per XSD |
| 225 | Invalid destination state for CFOP | Align CFOP with idDest |
| 301 | Irregular use of IE | Verify IE is active in destination state |
| 539 | Duplicate NF-e (duplicate content) | Review NF-e number sequence |
| 611 | GTIN not found in CCG | Register product GTIN or use "SEM GTIN" |
| 778 | NCM incompatible with CFOP | Check NCM-CFOP alignment |

### Authorization Status Codes

| Code | Meaning |
|---|---|
| 100 | Authorized |
| 101 | Cancellation authorized |
| 110 | Use denied (registered but not authorized) |
| 135 | Event registered |
| 301-999 | Various rejection codes |

---

## Section 7 -- Tax Computation Rules

### ICMS (State Tax)

- Rates vary by state and product (7%, 12%, 17%, 18%, 19%, 20%, 25% most common)
- Interstate rates: 4% (imported goods), 7% (South/Southeast → other), 12% (other combinations)
- ICMS-ST (substituição tributária): tax collected in advance by manufacturer/importer
- DIFAL: differential rate for interstate B2C to final consumer

### IPI (Federal Excise)

- Applied on manufactured/imported goods
- Rates from 0% to 365% depending on product (TIPI table)
- Simples Nacional companies generally exempt from IPI credit

### PIS/COFINS (Federal Social Contributions)

| Regime | PIS Rate | COFINS Rate | Method |
|---|---|---|---|
| Cumulativo (presumed profit) | 0.65% | 3.00% | On gross revenue, no credits |
| Não-cumulativo (real profit) | 1.65% | 7.60% | On revenue minus credits |

### Tax Reform (IBS/CBS) — From 2026

- NT 2025.002 introduces new XML groups for IBS (state/municipal) and CBS (federal)
- Transitional period: IBS/CBS coexist with ICMS/ISS/PIS/COFINS until full replacement (2033)
- New fields in NF-e XML for IBS and CBS amounts

### Rounding Rules

- Monetary values: 2 decimal places
- Quantities: up to 4 decimal places
- Unit prices: up to 10 decimal places
- Tax rates: up to 4 decimal places
- Tolerance in tax totals: BRL 0.01 per tax group

---

## Section 8 -- Archiving Requirements

| Requirement | Detail |
|---|---|
| Retention Period | Minimum 5 years from first day of following fiscal year (decadência tributária) |
| Format | Original authorized XML (with protocolo de autorização embedded) |
| Recipient Obligation | Must store received NF-e XML for same period |
| DANFE | Not a substitute for XML; printed for transport only |
| Events | All events (cancellation, correction letters) must be archived alongside |
| Digital Signature | Preserved within the XML; no separate signature file |
| Access | Must be producible on demand during fiscal audit (SEFAZ or Receita Federal) |
| Backup | Recommended redundant storage; SEFAZ maintains copy but taxpayer remains responsible |

---

## Section 9 -- Penalties for Non-Compliance

| Violation | Penalty |
|---|---|
| Operating without NF-e when required | 1% of transaction value (minimum BRL 500) per document; varies by state |
| Issuing NF-e with incorrect data | Fine varies by state (typically 1% of NF-e value) |
| Not transmitting NF-e to SEFAZ | Goods seizure during transport + fine |
| Transporting goods without DANFE | Goods seizure + fine (state regulation) |
| Not delivering XML to recipient | Administrative fine + recipient cannot claim credits |
| Late cancellation | Fine; cancellation may be denied after deadline |
| Operating with revoked/expired certificate | NF-e rejection; inability to operate |

### State-Specific Penalty Ranges (Examples)

| State | Typical Fine for Missing NF-e |
|---|---|
| São Paulo (SP) | 50% of transaction value (ICMS-related) |
| Minas Gerais (MG) | 40% of transaction value |
| Rio de Janeiro (RJ) | Minimum 5 UFIR-RJ per document |
| Paraná (PR) | 30% of transaction value |

Penalties compound if multiple violations occur in the same audit period.

---

## Section 10 -- Interaction with Tax Skills

### SPED Fiscal (EFD ICMS/IPI)

- Monthly digital bookkeeping obligation that references all NF-e issued/received
- Bloco C (goods) populated from NF-e XML data
- Cross-validation: SPED entries must match SEFAZ-authorized NF-e records exactly
- Discrepancies trigger automatic SEFAZ audit notices

### EFD-Contribuições (PIS/COFINS)

- Federal digital bookkeeping for PIS/COFINS
- Line-item detail from NF-e feeds into credit/debit calculations
- CST codes in NF-e determine PIS/COFINS treatment in EFD

### SPED ECD / ECF (Accounting / Corporate Tax)

- Revenue recognized in corporate books must align with NF-e issuance
- Receita Federal cross-references ECF declarations against NF-e aggregate data

### NFS-e → ISS Return

- NFS-e data feeds municipal ISS (Imposto Sobre Serviços) return
- With SNNFSe national system, ISS data will flow to national IBS calculations (reform)

### DCTF / DARF

- Federal tax payments (IPI, PIS, COFINS) reconciled against NF-e-derived obligations
- Under tax reform: CBS replaces PIS/COFINS with data sourced from NF-e/NFS-e

### Import/Export (DI/DUE)

- Export NF-e linked to DU-E (Declaração Única de Exportação)
- Import NF-e references DI (Declaração de Importação) number
- CFOP codes 3.xxx (imports) and 7.xxx (exports) tie to customs documentation

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a Contador, CRC-registered accountant, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com).
