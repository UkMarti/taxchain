---
name: portugal-financial-statements
description: >
  Use this skill when preparing, reviewing, or advising on annual financial statements (demonstrações financeiras) for a Portuguese company. Trigger on phrases like "demonstrações financeiras", "IES", "Informação Empresarial Simplificada", "SNC", "NCRF", "NCRF-PE", "NC-ME", "balanço", "demonstração de resultados", "Portal das Finanças", "depósito de contas", "ROC", "revisão legal", or any question about preparing and filing statutory accounts under Portuguese law. Covers SNC framework, size thresholds, required statements, formats, notes, IES filing, and audit requirements.
version: 1.0
jurisdiction: PT
category: financial-statements
depends_on:
  - financial-statements-workflow-base
tax_year: 2025
verified_by: pending
---

# Portugal Financial Statements Skill v1.0

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Portugal (República Portuguesa) |
| Currency | EUR |
| Filing authority | Portal das Finanças (AT — Autoridade Tributária) + Conservatória do Registo Comercial |
| Primary legislation | Decreto-Lei n.º 158/2009 (SNC); Decreto-Lei n.º 98/2015 (SNC revision) |
| Supporting legislation | Código das Sociedades Comerciais (CSC); Código do Registo Comercial |
| Accounting standards | SNC — Sistema de Normalização Contabilística (NCRF, NCRF-PE, NC-ME) |
| Financial year | Usually calendar year (January–December) |
| Filing deadline | 15th day of the 7th month after year-end (i.e., 15 July for calendar year) |
| Filing fee | EUR 80 (registo da prestação de contas) |
| Digital filing | Electronic via Portal das Finanças (IES submission) |

---

## Section 2 -- Reporting Framework

| Entity type | Applicable standard |
|---|---|
| Large and medium entities | Full NCRF (28 standards, aligned with IFRS for SMEs) |
| Small entities (Pequenas Entidades) | NCRF-PE (simplified single standard) |
| Micro entities (Microentidades) | NC-ME (very simplified single standard) |
| Listed groups (consolidated) | IFRS as adopted by the EU (mandatory) |
| Non-listed groups (consolidated) | NCRF or IFRS (choice) |
| Banks and insurance | IFRS (mandatory) |

Entities may always opt to apply a higher-level standard (e.g., micro can choose NCRF-PE or full NCRF).

---

## Section 3 -- Size Thresholds

Effective for financial years up to 31 December 2025:

| Criterion | Micro (NC-ME) | Pequena/Small (NCRF-PE) | Média/Medium | Grande/Large |
|---|---|---|---|---|
| Total do balanço (Balance sheet) | ≤ EUR 350,000 | ≤ EUR 4,000,000 | ≤ EUR 20,000,000 | > EUR 20,000,000 |
| Volume de negócios líquido (Turnover) | ≤ EUR 700,000 | ≤ EUR 8,000,000 | ≤ EUR 40,000,000 | > EUR 40,000,000 |
| Número médio de empregados (Employees) | ≤ 10 | ≤ 50 | ≤ 250 | > 250 |

**From financial years beginning 1 January 2026** (DL 126-B/2025):

| Criterion | Micro | Pequena | Média | Grande |
|---|---|---|---|---|
| Total do balanço | ≤ EUR 450,000 | ≤ EUR 5,000,000 | ≤ EUR 25,000,000 | > EUR 25,000,000 |
| Volume de negócios líquido | ≤ EUR 900,000 | ≤ EUR 10,000,000 | ≤ EUR 50,000,000 | > EUR 50,000,000 |
| Número médio de empregados | ≤ 10 | ≤ 50 | ≤ 250 | > 250 |

Must not exceed **2 out of 3** thresholds. Assessment in the first year, or for **two consecutive** years thereafter.

---

## Section 4 -- Required Financial Statements

| Document | Micro (NC-ME) | Small (NCRF-PE) | Medium/Large (NCRF) |
|---|---|---|---|
| Balanço (Balance sheet) | Required (simplified) | Required | Required |
| Demonstração de resultados por naturezas (P&L by nature) | Required (simplified) | Required | Required |
| Demonstração de alterações no capital próprio (Changes in equity) | Not required | Not required | Required |
| Demonstração de fluxos de caixa (Cash flow statement) | Not required | Not required | Required |
| Anexo (Notes) | Required (minimal) | Required (simplified) | Required (full) |
| Relatório de gestão (Management report) | Required (all companies) | Required | Required |
| Certificação legal de contas (Audit report) | If applicable | If applicable | Required (if thresholds met) |

---

## Section 5 -- Year-End Adjustments Checklist

| # | Adjustment | Portugal-specific notes |
|---|---|---|
| 1 | Depreciações e amortizações (Depreciation) | NCRF 7; systematic; tax rates (Decreto Regulamentar 25/2009) as maximum |
| 2 | Provisões (Provisions) | NCRF 21; present obligation, probable outflow, reliable estimate |
| 3 | Acréscimos e diferimentos (Accruals/deferrals) | Strict periodização matching |
| 4 | Imparidade de dívidas a receber (Bad debts) | NCRF 27; individual + portfolio assessment |
| 5 | Inventários (Inventory) | NCRF 18; lower of cost (FIFO/CMP) and NRV |
| 6 | Impostos diferidos (Deferred tax) | NCRF 25; temporary differences; IRC rate 21% + derrama |
| 7 | Câmbio (Foreign currency) | NCRF 23; monetary items at closing rate |
| 8 | Locações (Leases) | NCRF 9; finance/operating classification |
| 9 | Benefícios dos empregados (Employee benefits) | NCRF 28; holiday pay + Christmas bonus provision |
| 10 | Subsídios do governo (Government grants) | NCRF 22; deferred income released to P&L |
| 11 | Ativos intangíveis (Intangibles) | NCRF 6; capitalise development if criteria met |
| 12 | Estimativa de IRC (Tax provision) | Current tax + autonomous taxation + derrama municipal |

---

## Section 6 -- Demonstração de Resultados por Naturezas (P&L)

SNC model — by nature:

```
Vendas e serviços prestados (Revenue)
Subsídios à exploração
Ganhos/perdas imputados de subsidiárias e associadas
Variação nos inventários da produção
Trabalhos para a própria entidade
Custo das mercadorias vendidas e matérias consumidas
Fornecimentos e serviços externos
Gastos com o pessoal
Imparidade de inventários (perdas/reversões)
Imparidade de dívidas a receber (perdas/reversões)
Provisões (aumentos/reduções)
Imparidade de investimentos não depreciáveis (perdas/reversões)
Aumentos/reduções de justo valor
Outros rendimentos e ganhos
Outros gastos e perdas
  ─── Resultado antes de depreciações, gastos de financiamento e impostos (EBITDA) ───

Gastos/reversões de depreciação e de amortização
Imparidade de investimentos depreciáveis (perdas/reversões)
  ─── Resultado operacional (antes de gastos de financiamento e impostos) ───

Juros e rendimentos similares obtidos
Juros e gastos similares suportados
  ─── Resultado antes de impostos ───

Imposto sobre o rendimento do período
  ─── Resultado líquido do período ───
```

---

## Section 7 -- Balanço Format (Balance Sheet)

SNC model:

```
ATIVO (Assets)

Ativo não corrente (Non-current assets)
  Ativos fixos tangíveis
  Propriedades de investimento
  Goodwill
  Ativos intangíveis
  Participações financeiras
  Outros ativos financeiros
  Ativos por impostos diferidos

Ativo corrente (Current assets)
  Inventários
  Clientes
  Estado e outros entes públicos
  Outras contas a receber
  Diferimentos
  Ativos financeiros detidos para negociação
  Caixa e depósitos bancários

TOTAL DO ATIVO

─────────────────────────────────────

CAPITAL PRÓPRIO E PASSIVO

Capital próprio (Equity)
  Capital realizado
  Ações (quotas) próprias
  Outros instrumentos de capital próprio
  Prémios de emissão
  Reservas legais
  Outras reservas
  Resultados transitados
  Excedentes de revalorização
  Resultado líquido do período

TOTAL DO CAPITAL PRÓPRIO

Passivo não corrente (Non-current liabilities)
  Provisões
  Financiamentos obtidos
  Outras contas a pagar
  Passivos por impostos diferidos

Passivo corrente (Current liabilities)
  Fornecedores
  Estado e outros entes públicos
  Financiamentos obtidos
  Outras contas a pagar
  Diferimentos

TOTAL DO PASSIVO

TOTAL DO CAPITAL PRÓPRIO E PASSIVO
```

---

## Section 8 -- Anexo (Notes to Accounts)

| # | Disclosure | Micro | Small (NCRF-PE) | Medium/Large |
|---|---|---|---|---|
| 1 | Políticas contabilísticas (Accounting policies) | Simplified | Required | Required (full) |
| 2 | Ativos fixos tangíveis movements | Summary | Required | Required |
| 3 | Locações (Leases) | Not required | If material | Required |
| 4 | Partes relacionadas (Related parties) | Not required | Key management | Required (full) |
| 5 | Instrumentos financeiros | Not required | Simplified | Required |
| 6 | Pessoal (Employee info) | Average headcount | Headcount + costs | Detailed |
| 7 | Órgãos sociais (Management remuneration) | Not required | Not required | Required |
| 8 | Compromissos e contingências | Required (basic) | Required | Required |
| 9 | Impostos sobre o rendimento | Not required | Simplified | Required (reconciliation) |
| 10 | Capital próprio (Equity detail) | Required (basic) | Required | Required |
| 11 | Subsídios do governo | If applicable | Required | Required |
| 12 | Eventos após data do balanço | Required | Required | Required |

---

## Section 9 -- Filing Requirements

| Item | Detail |
|---|---|
| Filing method | IES (Informação Empresarial Simplificada) — electronic via Portal das Finanças |
| Single filing covers | Tax declaration (IRC), commercial registry deposit, statistics (INE), Bank of Portugal data |
| Filing deadline | 15th day of the 7th month after year-end (15 July for calendar year companies) |
| Filing fee | EUR 80 (registo da prestação de contas component) |
| Format | Electronic XML via Portal das Finanças; PDF attachments for consolidated accounts |
| IES annexes | Annex A (individual accounts), Annex A1 (consolidated), others as applicable |
| Language | Portuguese |
| Certified accountant | Must be submitted by a Contabilista Certificado (CC) |
| Late filing penalty | EUR 150 to EUR 3,750 (coimas — administrative fines) |
| Non-filing consequences | Impossibility of obtaining commercial certificates; potential dissolution proceedings |

---

## Section 10 -- Audit Requirements

### Mandatory appointment of ROC (Revisor Oficial de Contas)

Companies must appoint a statutory auditor (certificação legal de contas) if they exceed **2 of 3** thresholds for **two consecutive** years:

| Criterion | Threshold |
|---|---|
| Total do balanço (Balance sheet) | EUR 1,500,000 |
| Volume de negócios líquido (Turnover) | EUR 3,000,000 |
| Número médio de empregados (Employees) | 50 |

### Always subject to audit

- Sociedades Anónimas (SA): always require a ROC (fiscal council or audit board)
- Entities issuing securities on regulated markets
- Entities preparing consolidated accounts
- Public interest entities

### Auditor qualification

Revisor Oficial de Contas (ROC) or Sociedade de Revisores Oficiais de Contas (SROC), registered with the Ordem dos Revisores Oficiais de Contas (OROC).

### Audit mandate

- Duration: 3 to 4 years (depending on governance model)
- Maximum tenure: rotation rules apply for public interest entities

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional before filing or acting upon.
