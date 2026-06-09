---
name: portugal-bookkeeping
description: >
  Use this skill whenever asked about Portuguese bookkeeping, chart of accounts, SNC, financial statements, or accounting standards in Portugal. Trigger on phrases like "Portuguese bookkeeping", "contabilidade Portugal", "SNC", "código de contas", "Sistema de Normalização Contabilística", "plano de contas", "microentidade", "pequena entidade", "NCRF", "NCRF-PE", "NC-ME", "balanço", "demonstração de resultados", "IES", "TOC", "contabilista certificado", or any question about recording transactions, financial reporting, or accounting rules for Portuguese entities.
version: 1.0
jurisdiction: PT
category: bookkeeping
depends_on:
  - bookkeeping-workflow-base
tax_year: 2025
verified_by: pending
---

# Portugal Bookkeeping Skill v1.0

---

## Section 1 -- Quick Reference

| Field | Value |
|---|---|
| Country | Portugal (República Portuguesa) |
| Currency | EUR |
| Financial year | Calendar year (1 January -- 31 December) mandatory for most entities |
| Accounting standards | SNC (Sistema de Normalização Contabilística); NCRF (full), NCRF-PE (small), NC-ME (micro) |
| Standard chart of accounts | Código de Contas SNC (Portaria n.º 218/2015) -- mandatory |
| Governing body | CNC (Comissão de Normalização Contabilística) |
| Key legislation | Decreto-Lei n.º 158/2009 (amended by DL 98/2015); Portaria 218/2015 (chart of accounts); Portaria 220/2015 (financial statement models) |
| Filing obligation | IES (Informação Empresarial Simplificada) -- annual electronic filing to AT/IRN/INE/BdP |
| Tax authority | AT (Autoridade Tributária e Aduaneira) |
| Professional body | OCC (Ordem dos Contabilistas Certificados) |
| Mandatory certified accountant | Yes -- all entities subject to SNC must have a Contabilista Certificado |

---

## Section 2 -- Standard Chart of Accounts (Código de Contas SNC)

The SNC chart of accounts is mandatory and structured into 8 classes. Companies must use the prescribed account structure.

### Class 1 -- Meios Financeiros Líquidos (Cash and Cash Equivalents)

| Code | Account | Description |
|---|---|---|
| 11 | Caixa | Cash in hand |
| 12 | Depósitos à ordem | Current bank accounts |
| 13 | Outros depósitos bancários | Other bank deposits (term) |
| 14 | Outros instrumentos financeiros | Other financial instruments |

### Class 2 -- Contas a Receber e a Pagar (Receivables and Payables)

| Code | Account | Description |
|---|---|---|
| 21 | Clientes | Customers (trade receivables) |
| 211 | Clientes c/c | Customer current accounts |
| 2111 | Clientes gerais | General customers |
| 212 | Clientes -- títulos a receber | Bills of exchange receivable |
| 219 | Perdas por imparidade acumuladas | Accumulated impairment losses |
| 22 | Fornecedores | Suppliers (trade payables) |
| 221 | Fornecedores c/c | Supplier current accounts |
| 23 | Pessoal | Staff accounts |
| 231 | Remunerações a pagar | Wages payable |
| 232 | Adiantamentos a pessoal | Advances to staff |
| 24 | Estado e outros entes públicos | State and public entities |
| 241 | Imposto sobre o rendimento | Income tax (IRC) |
| 2411 | IRC estimado | Estimated IRC |
| 2412 | IRC retido na fonte | IRC withheld at source |
| 2413 | Pagamentos por conta | Payments on account |
| 243 | IVA | VAT |
| 2431 | IVA suportado | Input VAT |
| 2432 | IVA dedutível | Deductible VAT |
| 2433 | IVA liquidado | Output VAT |
| 2434 | IVA regularizações | VAT adjustments |
| 2435 | IVA apuramento | VAT clearing |
| 2436 | IVA a pagar | VAT payable |
| 2437 | IVA a recuperar | VAT recoverable |
| 245 | Contrib. para Segurança Social | Social security contributions |
| 25 | Financiamentos obtidos | Financing obtained (loans) |
| 251 | Instituições de crédito | Bank loans |
| 26 | Acionistas/sócios | Shareholders/partners |
| 27 | Outras contas a receber e a pagar | Other receivables and payables |
| 271 | Fornecedores de investimentos | Investment suppliers (capex creditors) |
| 278 | Outros devedores e credores | Other debtors and creditors |

### Class 3 -- Inventários e Ativos Biológicos (Inventories)

| Code | Account | Description |
|---|---|---|
| 31 | Compras | Purchases |
| 311 | Mercadorias | Goods for resale |
| 312 | Matérias-primas | Raw materials |
| 32 | Mercadorias | Goods for resale (inventory) |
| 33 | Matérias-primas | Raw materials (inventory) |
| 34 | Produtos acabados | Finished products |
| 35 | Produtos e trabalhos em curso | Work in progress |
| 36 | Subprodutos e desperdícios | By-products and waste |
| 38 | Reclassificação e regularização | Reclassification and adjustments |
| 39 | Adiantamentos por conta de compras | Advance payments for purchases |

### Class 4 -- Investimentos (Fixed Assets)

| Code | Account | Description |
|---|---|---|
| 41 | Investimentos financeiros | Financial investments |
| 42 | Propriedades de investimento | Investment properties |
| 43 | Ativos fixos tangíveis | Tangible fixed assets |
| 431 | Terrenos e recursos naturais | Land and natural resources |
| 432 | Edifícios e outras construções | Buildings |
| 433 | Equipamento básico | Basic equipment (machinery) |
| 434 | Equipamento de transporte | Transport equipment (vehicles) |
| 435 | Equipamento administrativo | Administrative equipment (office/IT) |
| 436 | Equipamentos biológicos | Biological assets (equipment) |
| 437 | Outros ativos fixos tangíveis | Other tangible fixed assets |
| 438 | Depreciações acumuladas | Accumulated depreciation |
| 44 | Ativos intangíveis | Intangible assets |
| 441 | Goodwill | Goodwill |
| 442 | Projetos de desenvolvimento | Development projects |
| 443 | Programas de computador | Computer software |
| 444 | Propriedade industrial | Industrial property (patents, trademarks) |
| 446 | Outros ativos intangíveis | Other intangibles |
| 448 | Amortizações acumuladas | Accumulated amortization |
| 45 | Investimentos em curso | Assets under construction |
| 46 | Ativos não correntes detidos para venda | Non-current assets held for sale |

### Class 5 -- Capital, Reservas e Resultados Transitados (Equity)

| Code | Account | Description |
|---|---|---|
| 51 | Capital | Share capital |
| 52 | Ações (quotas) próprias | Own shares (treasury stock) |
| 53 | Outros instrumentos de capital próprio | Other equity instruments |
| 54 | Prémios de emissão | Share premium |
| 55 | Reservas | Reserves |
| 551 | Reservas legais | Legal reserves |
| 552 | Outras reservas | Other reserves |
| 56 | Resultados transitados | Retained earnings |
| 57 | Ajustamentos em ativos financeiros | Financial asset adjustments |
| 58 | Excedentes de revalorização | Revaluation surplus |
| 59 | Outras variações no capital próprio | Other changes in equity |

### Class 6 -- Gastos (Expenses)

| Code | Account | Description |
|---|---|---|
| 61 | CMVMC | Cost of goods sold / materials consumed |
| 62 | Fornecimentos e serviços externos (FSE) | External supplies and services |
| 6211 | Subcontratos | Subcontracts |
| 6212 | Trabalhos especializados | Specialized work (accountancy, legal, etc.) |
| 6213 | Publicidade e propaganda | Advertising |
| 6214 | Vigilância e segurança | Security |
| 6215 | Honorários | Professional fees |
| 6216 | Comissões | Commissions |
| 622 | Serviços diversos | Miscellaneous services |
| 6221 | Rendas e alugueres | Rent and leases |
| 6222 | Comunicação | Telecommunications |
| 6223 | Seguros | Insurance |
| 6224 | Royalties | Royalties |
| 6225 | Transportes de mercadorias | Freight |
| 6226 | Deslocações e estadas | Travel and accommodation |
| 6227 | Material de escritório | Office materials |
| 6228 | Energia e fluidos | Energy and utilities |
| 6229 | Manutenção e reparação | Maintenance and repairs |
| 63 | Gastos com o pessoal | Staff costs |
| 631 | Remunerações dos órgãos sociais | Directors' remuneration |
| 632 | Remunerações do pessoal | Employee wages |
| 635 | Encargos sobre remunerações | Social security charges (employer) |
| 636 | Seguros de acidentes de trabalho | Work accident insurance |
| 64 | Gastos de depreciação e amortização | Depreciation and amortization |
| 641 | Propriedades de investimento | Depreciation -- investment properties |
| 642 | Ativos fixos tangíveis | Depreciation -- tangible assets |
| 643 | Ativos intangíveis | Amortization -- intangible assets |
| 65 | Perdas por imparidade | Impairment losses |
| 66 | Perdas por reduções de justo valor | Fair value losses |
| 67 | Provisões do período | Provisions |
| 68 | Outros gastos e perdas | Other expenses and losses |
| 681 | Impostos (indiretos) | Indirect taxes |
| 6811 | IMI e outros impostos | Property tax and other local taxes |
| 682 | Descontos de pronto pagamento | Early settlement discounts given |
| 686 | Gastos financeiros | Financial expenses (interest paid) |
| 688 | Outros | Other miscellaneous expenses |
| 69 | Gastos e perdas de financiamento | Financing costs |
| 691 | Juros suportados | Interest expense |

### Class 7 -- Rendimentos (Income)

| Code | Account | Description |
|---|---|---|
| 71 | Vendas | Sales of goods |
| 72 | Prestações de serviços | Services rendered |
| 73 | Variações nos inventários da produção | Changes in production inventories |
| 74 | Trabalhos para a própria entidade | Work for own entity (capitalised) |
| 75 | Subsídios à exploração | Operating grants |
| 76 | Reversões | Reversal of impairments/provisions |
| 78 | Outros rendimentos e ganhos | Other income and gains |
| 781 | Rendimentos suplementares | Supplementary income |
| 782 | Descontos obtidos | Early settlement discounts received |
| 786 | Rendimentos financeiros | Financial income (interest received) |
| 79 | Juros e rendimentos similares | Interest and similar income |

### Class 8 -- Resultados (Results)

| Code | Account | Description |
|---|---|---|
| 81 | Resultado líquido do período | Net profit/loss for the period |
| 811 | Resultado antes de impostos | Profit before tax |
| 812 | Imposto sobre o rendimento | Income tax expense |
| 818 | Resultado líquido | Net result |

---

## Section 3 -- Revenue Recognition

### Cash vs Accrual Basis

| Entity Type | Basis | Notes |
|---|---|---|
| All SNC entities | Accrual (mandatory) | SNC/NCRF requires accrual basis (regime do acréscimo) |
| Microentidades (NC-ME) | Accrual | Simplified recognition rules but still accrual |
| Self-employed (Cat. B IRS) | Cash or Accrual | Simplified regime uses invoiced amounts; organized accounting uses accrual |

### Key Rules

- Revenue from sale of goods: recognised when risks/rewards transfer to the buyer (NCRF 20)
- Revenue from services: percentage-of-completion method if outcome can be estimated reliably; otherwise, only to the extent of costs recoverable
- NC-ME (micro): revenue recognised at invoicing for goods; over time for services
- IVA (VAT): obligation arises at invoicing date (factura obrigatória within 5 business days of delivery)

### Simplified Regime for Self-Employed (Regime Simplificado)

- Available for annual income < EUR 200,000
- Taxable income calculated as a coefficient applied to gross receipts (0.75 for services, 0.15 for goods resale)
- No formal bookkeeping required under simplified regime -- only record of invoices
- Organized accounting (contabilidade organizada) is mandatory above EUR 200,000 or upon election

---

## Section 4 -- Expense Classification

### Deductible Expenses (IRC)

| Category | SNC Code | Deductibility |
|---|---|---|
| Rent (business premises) | 6221 | 100% deductible |
| Utilities | 6228 | 100% deductible |
| Professional fees (accountant, lawyer) | 6212/6215 | 100% deductible |
| Insurance (business) | 6223 | 100% deductible |
| Advertising | 6213 | 100% deductible |
| Office materials | 6227 | 100% deductible |
| Telecoms | 6222 | 100% deductible (business portion) |
| Bank charges | 686 | 100% deductible |
| Staff costs | 63x | 100% deductible |
| Travel (business) | 6226 | 100% deductible with documentation |
| Software subscriptions | 6212 | 100% deductible |
| Maintenance and repairs | 6229 | 100% deductible |

### Partially/Non-Deductible Expenses

| Category | Limitation |
|---|---|
| Vehicle expenses (passenger cars) | Limited by Tributação Autónoma surcharges |
| Entertainment/representation | Subject to autonomous taxation at 10% |
| Undocumented expenses | Not deductible + 50% autonomous taxation |
| Fines and penalties (multas) | 0% -- never deductible |
| IRC (income tax itself) | 0% -- never deductible |
| Excessive per diems | Non-deductible above legal limits |
| Expenses with tax haven entities | Not deductible unless commercial substance proven |

### Tributação Autónoma (Autonomous Taxation)

Belgian-style surcharges on certain expenses even if the company is profitable:

| Expense | Rate |
|---|---|
| Representation expenses | 10% |
| Vehicle costs (acquisition ≤ EUR 27,500) | 10% |
| Vehicle costs (EUR 27,500-35,000) | 27.5% |
| Vehicle costs (> EUR 35,000) | 35% |
| Undocumented expenses | 50% (70% if tax-exempt entity) |
| Per diem allowances not invoiced | 5% |
| Electric vehicle costs (≤ EUR 62,500) | 0% |

---

## Section 5 -- Asset vs Expense Thresholds

### Capitalization Rules

| Rule | Detail |
|---|---|
| Mandatory capitalization | All items with useful life > 1 year and reliably measurable cost |
| Low-value threshold | No legal de minimis; practice allows expensing items < EUR 1,000 in some cases |
| Subsequent expenditure | Capitalised if extends useful life or increases capacity; otherwise, expensed |

### Depreciation Rates (Decreto Regulamentar n.º 25/2009 -- Generic Table II)

| Asset Type | Method | Maximum Annual Rate | Typical Useful Life |
|---|---|---|---|
| Industrial buildings | Straight-line | 5% | 20 years |
| Commercial buildings | Straight-line | 2% | 50 years |
| Light structures | Straight-line | 10% | 10 years |
| Basic machinery and equipment | Straight-line | 12.5-20% | 5-8 years |
| Transport equipment (heavy) | Straight-line | 20% | 5 years |
| Passenger vehicles | Straight-line | 25% | 4 years |
| Computer hardware | Straight-line | 33.33% | 3 years |
| Computer software | Straight-line | 33.33% | 3 years |
| Office furniture | Straight-line | 12.5% | 8 years |
| Office equipment | Straight-line | 20% | 5 years |
| Tools | Straight-line | 25% | 4 years |
| Goodwill | Straight-line | Max 5% per year (20 years) | Per contract |

### Key Rules

- Straight-line is the default; declining-balance method is available for new tangible assets (except buildings, vehicles, and office furniture)
- Minimum annual depreciation = 50% of maximum rate (quotas mínimas)
- If depreciation below minimum is practiced, requires written communication to AT
- Depreciation starts from the month of entry into service (pro rata)
- Land is never depreciated

---

## Section 6 -- P&L Format (Demonstração de Resultados por Naturezas)

Portugal uses the by-nature format as the standard income statement. The by-function format is optional.

### By Nature (Standard for all SNC entities)

```
Vendas e serviços prestados (Revenue)                          xxx
Subsídios à exploração (Operating grants)                      xxx
Variação nos inventários da produção                           xxx
Trabalhos para a própria entidade                              xxx
CMVMC (Cost of goods sold)                                    (xxx)
Fornecimentos e serviços externos (FSE)                       (xxx)
Gastos com o pessoal (Staff costs)                            (xxx)
Imparidade de inventários (Inventory impairment)              (xxx)
Imparidade de dívidas a receber (Receivables impairment)      (xxx)
Provisões (Provisions)                                        (xxx)
Outras imparidades / variações JV                             (xxx)
Outros rendimentos e ganhos (Other income)                     xxx
Outros gastos e perdas (Other expenses)                       (xxx)
                                                            -------
EBITDA                                                         xxx

Gastos de depreciação e amortização (Depreciation)            (xxx)
                                                            -------
EBIT (Resultado operacional)                                   xxx

Juros e rendimentos similares obtidos                          xxx
Juros e gastos similares suportados                           (xxx)
                                                            -------
Resultado antes de impostos (EBT)                              xxx

Imposto sobre o rendimento do período (IRC)                   (xxx)
                                                            -------
Resultado líquido do período (Net result)                      xxx
```

---

## Section 7 -- Balance Sheet Format (Balanço)

Portugal uses a vertical format with current/non-current classification.

### Format

```
ATIVO (Assets)

Ativo não corrente (Non-current assets)
  Ativos fixos tangíveis                                      xxx
  Propriedades de investimento                                xxx
  Goodwill                                                    xxx
  Ativos intangíveis                                          xxx
  Investimentos financeiros                                   xxx
  Ativos por impostos diferidos                               xxx
                                                           -------
  Total ativo não corrente                                    xxx

Ativo corrente (Current assets)
  Inventários                                                 xxx
  Clientes                                                    xxx
  Estado e outros entes públicos                              xxx
  Outras contas a receber                                     xxx
  Diferimentos (Prepayments)                                  xxx
  Caixa e depósitos bancários                                 xxx
                                                           -------
  Total ativo corrente                                        xxx

TOTAL DO ATIVO                                                xxx
                                                           =======

CAPITAL PRÓPRIO E PASSIVO (Equity and Liabilities)

Capital próprio (Equity)
  Capital realizado                                           xxx
  Reservas legais                                             xxx
  Outras reservas                                             xxx
  Resultados transitados                                      xxx
  Resultado líquido do período                                xxx
                                                           -------
  Total do capital próprio                                    xxx

Passivo não corrente (Non-current liabilities)
  Financiamentos obtidos                                      xxx
  Provisões                                                   xxx
  Passivos por impostos diferidos                             xxx
                                                           -------
  Total passivo não corrente                                  xxx

Passivo corrente (Current liabilities)
  Fornecedores                                                xxx
  Estado e outros entes públicos                              xxx
  Financiamentos obtidos (curto prazo)                        xxx
  Outras contas a pagar                                       xxx
  Diferimentos (Deferred income)                              xxx
                                                           -------
  Total passivo corrente                                      xxx

TOTAL DO CAPITAL PRÓPRIO E PASSIVO                            xxx
                                                           =======
```

---

## Section 8 -- Bank Reconciliation Patterns

### Portuguese Bank Statement Formats

| Bank | Format | Key Fields |
|---|---|---|
| Millennium BCP | CSV, OFX | Date, Description, Amount, Balance, Counterparty |
| Caixa Geral de Depósitos (CGD) | CSV, OFX | Data, Descrição, Valor, Saldo |
| Novo Banco | CSV | Date, Description, Debit, Credit, Balance |
| Santander Totta | CSV, OFX | Date, Description, Amount, Balance |
| BPI | CSV | Data Valor, Descrição, Débito, Crédito, Saldo |
| ActivoBank | CSV | Date, Type, Description, Amount |

### Common Transaction Descriptions

| Pattern | Classification |
|---|---|
| TRF, TRANSFERENCIA | Transfer (check direction) |
| DD, DEBITO DIRETO | Direct debit (recurring expense) |
| MB, MULTIBANCO | ATM/card payment |
| PAGAMENTO DE SERVICOS | Service payment (utilities, etc.) |
| AT-AUTORIDADE TRIBUTARIA | Tax payment to AT |
| SEGURANCA SOCIAL, SS | Social security payment |
| COMPRA/VENDA MB WAY | Mobile payment |
| JUROS | Interest (check debit/credit) |
| COMISSAO, DESPESA | Bank charges |
| IMPOSTO SELO | Stamp duty (bank tax) |

---

## Section 9 -- Micro-Entity / Small Business Simplifications

### Size Categories (until 2025; increased from 2026)

| Category | Balance Sheet Total | Net Turnover | Employees |
|---|---|---|---|
| Microentidade | ≤ EUR 350,000 (EUR 450,000 from 2026) | ≤ EUR 700,000 (EUR 900,000 from 2026) | ≤ 10 |
| Pequena entidade | ≤ EUR 4,000,000 (EUR 5,000,000 from 2026) | ≤ EUR 8,000,000 (EUR 10,000,000 from 2026) | ≤ 50 |
| Média entidade | ≤ EUR 20,000,000 (EUR 25,000,000 from 2026) | ≤ EUR 40,000,000 (EUR 50,000,000 from 2026) | ≤ 250 |

Must not exceed 2 of 3 criteria in the immediately preceding period.

### Applicable Standards

| Category | Standard | Key Simplifications |
|---|---|---|
| Microentidade | NC-ME | No deferred taxes, no revaluations, no fair value; simplified financial statements (2 pages) |
| Pequena entidade | NCRF-PE | Reduced disclosures; no cash flow statement required |
| Média/Grande | Full NCRF (28 standards) | Complete disclosures; cash flow statement; statement of changes in equity |

### NC-ME Simplifications (Micro-entities)

- Balance sheet + Income statement + limited annex only (no cash flow, no equity changes)
- All assets measured at cost less depreciation/amortisation (no fair value, no revaluation)
- No deferred tax computation required
- Simplified annex with 15 items maximum
- Leases: no finance/operating distinction; all leases expensed

### Sole Trader (Empresário em Nome Individual)

- Simplified regime (regime simplificado) available if turnover < EUR 200,000
- No bookkeeping obligation under simplified regime -- taxed on coefficients
- Organized accounting (contabilidade organizada) voluntary below threshold, mandatory above
- Mandatory certified accountant (Contabilista Certificado) if organized accounting elected

---

## Section 10 -- Interaction with Tax Skills

### Corporate Income Tax (IRC)

- IES filing integrates accounting and tax data into one annual submission
- Tax result starts from accounting result (conta 81) with fiscal adjustments in Quadro 07 of Modelo 22
- Key adjustments: autonomous taxation (tributação autónoma), non-deductible expenses, tax incentives (SIFIDE, RFAI, DLRR)
- IRC rate: 21% (standard); 17% on first EUR 50,000 for SMEs; 21% surcharge (derrama estadual) on profits > EUR 1.5M
- Use the pt-income-tax skill for detailed computation

### VAT (IVA)

- IVA accounts: class 243x in the SNC chart
- Monthly filing if turnover > EUR 650,000; otherwise quarterly
- Standard rate: 23% (mainland); 16% (Açores); 22% (Madeira)
- Reduced rates: 6% and 13%
- Use the portugal-vat-return skill for filing details

### Social Security (Segurança Social)

- Employer contributions: 23.75% of gross salary
- Employee contributions: 11% of gross salary
- Self-employed (trabalhador independente): 21.4% of relevant income (25.2% for first year)
- Recorded in account 245 until paid
- Use the pt-social-contributions skill for details

---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional before filing or acting upon.
