---
name: pt-income-tax
description: >
  Utilizar esta skill sempre que for solicitada ajuda com o IRS (Imposto sobre o Rendimento das Pessoas Singulares) em Portugal para trabalhadores independentes. Acionar com expressões como "quanto IRS pago", "IRS Portugal", "Modelo 3", "Anexo B", "Categoria B", "regime simplificado", "contabilidade organizada", "retenção na fonte", "trabalhador independente", "recibos verdes", "coeficientes regime simplificado", "IRS Jovem", "adicional de solidariedade", ou qualquer questão sobre apresentação ou cálculo de IRS para um cliente independente em Portugal. Esta skill abrange a declaração anual Modelo 3 + Anexo B, rendimentos da Categoria B, regime simplificado vs contabilidade organizada, escalões progressivos do IRS, adicional de solidariedade, deduções específicas, retenção na fonte, IRS Jovem e prazos de entrega. LER SEMPRE esta skill antes de tocar em qualquer trabalho de IRS português. Para regime RNH/IFICI ver skill pt-nhr-ifici. Trigger also on: "how much tax do I pay in Portugal", "IRS Portugal", "Modelo 3", "income tax return Portugal", "NIF", "freelancer Portugal tax".
version: 3.0
jurisdiction: PT
tax_year: 2025
category: international
verified_by: pending
---

# Portugal — IRS (Imposto sobre o Rendimento das Pessoas Singulares) — Skill v3.0

> **Nota de remissão:** Se o contribuinte está sob regime RNH (Residente Não Habitual) ou IFICI (Incentivo Fiscal à Investigação Científica e Inovação), **ver o skill `pt-nhr-ifici`** para o tratamento detalhado. Esta skill cobre apenas o regime geral progressivo.

## Secção 1 — Referência Rápida

### Escalões de IRS 2025 (Categoria B — Regime Simplificado / regime geral)

| Rendimento Coletável (EUR) | Taxa | Imposto Cumulativo |
|---|---|---|
| 0 – 8 059 | 13,00% | 1 047,67 |
| 8 059 – 12 160 | 16,50% | 1 724,33 |
| 12 160 – 17 233 | 22,00% | 2 840,39 |
| 17 233 – 22 306 | 25,00% | 4 108,64 |
| 22 306 – 28 400 | 32,00% | 6 058,72 |
| 28 400 – 41 629 | 35,50% | 10 754,01 |
| 41 629 – 44 987 | 43,50% | 12 215,24 |
| 44 987 – 83 696 | 45,00% | 29 634,29 |
| Acima de 83 696 | 48,00% | — |

**Fórmula:** Imposto = imposto cumulativo do escalão inferior + (rendimento − limite inferior do escalão) × taxa marginal.

**Verificação prévia obrigatória:** antes de aplicar as tabelas progressivas, **verificar se o contribuinte está abrangido por RNH ou IFICI** (ver skill `pt-nhr-ifici`). Em caso afirmativo, a taxa fixa de 20% sobre AEVA pode substituir os escalões para certos rendimentos.

### Adicional de Solidariedade

| Rendimento Coletável (EUR) | Taxa |
|---|---|
| 80 000 – 250 000 | 2,5% sobre o excedente acima de EUR 80 000 |
| Acima de 250 000 | 2,5% sobre EUR 170 000 + 5% sobre o excedente acima de EUR 250 000 |

### Regime Simplificado — Coeficientes 2025

Em regime simplificado, rendimento tributável = receitas brutas × coeficiente aplicável (não despesas reais):

| Tipo de Rendimento | Coeficiente | Base Tributável Efetiva |
|---|---|---|
| Vendas de mercadorias e produtos | 0,15 | 15% do bruto |
| Prestação de serviços — geral | 0,35 | 35% do bruto |
| Atividades profissionais (art.º 151.º CIRS — profissões listadas: advogados, médicos, engenheiros, arquitetos, consultores) | 0,35 | 35% do bruto |
| Hotelaria, restauração e alojamento local | 0,15 | 15% do bruto |
| Outros rendimentos da Categoria B | 0,95 | 95% do bruto |
| Propriedade intelectual (se o autor for o criador originário) | 0,50 | 50% do bruto |

**Nota:** Regime simplificado disponível apenas quando as receitas brutas do ano anterior (ou estimadas no ano corrente para novos contribuintes) sejam ≤ EUR 200 000.

### Regime de Contabilidade Organizada (Despesas Reais)

Quando as receitas brutas > EUR 200 000 (obrigatório) ou por opção: rendimento tributável = receitas brutas − despesas dedutíveis reais (requer Contabilista Certificado / CC).

### Retenção na Fonte (Retenção pelos Clientes)

| Tipo de Beneficiário | Taxa |
|---|---|
| Trabalhador independente geral — Categoria B | 25% |
| Profissões de elevado valor acrescentado (lista RNH/IFICI) | Taxas especiais — ver skill `pt-nhr-ifici` |
| Não residente (Categoria B) | 25% |

Clientes que pagam a trabalhador independente com NIF têm de reter 25% e entregar à AT. O montante retido é creditado contra a coleta final de IRS.

**Dispensa de retenção na fonte:** Contribuintes cujos rendimentos brutos de Categoria B do ano anterior ≤ EUR 15 000 podem apresentar declaração aos clientes para dispensa de retenção.

### Segurança Social (Contribuições)

| Esquema | Taxa | Base |
|---|---|---|
| Trabalhador independente SS | 21,4% | 70% das receitas brutas trimestrais ÷ 3 (base mensal) |
| Base mensal mínima | EUR 522,50 | Se rendimento muito baixo |

Contribuições para a SS são dedutíveis ao rendimento tributável de IRS (reduzem o bruto antes de aplicar o coeficiente, ou deduzidas como despesa na contabilidade organizada).

### IRS Jovem (Isenção para Jovens)

Para contribuintes ≤ 35 anos (durante os primeiros 10 anos de obtenção de rendimentos em Portugal após conclusão dos estudos):

| Ano | Isenção de Imposto |
|---|---|
| Anos 1–3 | 100% isento (limitado a EUR 28 737/ano) |
| Anos 4–6 | 75% isento |
| Anos 7–9 | 50% isento |
| Ano 10 | 25% isento |

Confirmar elegibilidade antes de aplicar. O IRS Jovem aplica-se aos escalões de IRS; as contribuições para a SS continuam a aplicar-se.

### Defaults Conservadores

| Situação | Pressuposto por Defeito |
|---|---|
| Tipo de serviço ambíguo (bens vs serviços) | Aplicar coeficiente 0,35 (serviços) — base mais elevada; sinalizar ao cliente |
| Regime simplificado vs. contabilidade organizada | Regime simplificado (default para < EUR 200 000 receitas) |
| Elegibilidade IRS Jovem ambígua | NÃO aplicar — sinalizar ao cliente para confirmar anos de elegibilidade |
| Estatuto RNH/IFICI ambíguo | NÃO aplicar taxas especiais — aplicar escalões padrão; remeter para skill `pt-nhr-ifici` |
| Contribuições SS não fornecidas | Estimar a 21,4% × 70% do bruto; sinalizar como estimativa |
| Montantes de retenção não confirmados | NÃO presumir — exigir declarações de retenção dos clientes |
| Despesa em contabilidade organizada sem fatura/recibo | Rejeitar — não dedutível sem documento de suporte |

### Limiares de Alerta (Red Flags)

| Alerta | Limiar |
|---|---|
| Receitas brutas > EUR 200 000 | Contabilidade organizada obrigatória — parar se ainda em simplificado |
| Cliente único > 80% das receitas | Risco de requalificação como relação laboral (falso recibo verde) |
| Sem retenções recebidas mas clientes são empresas | Verificar — empresas têm obrigação legal de reter 25% |
| Contribuições SS aparentemente ausentes ou muito baixas | Verificar cálculo da base SS |
| IRS Jovem reclamado após o ano 10 | Inelegível — sinalizar imediatamente |

---

## Secção 2 — Inputs Obrigatórios + Catálogo de Recusas

### Inputs Obrigatórios

Antes de calcular o IRS português, recolher:

1. **Total das receitas brutas** (recibos verdes emitidos e recebidos) — Categoria B integral
2. **Discriminação por cliente** — para identificar tipo de serviço e coeficiente aplicável
3. **Declarações de retenção na fonte** — de cada cliente
4. **Pagamentos de contribuições para a SS** — recibos trimestrais
5. **Regime aplicável** — simplificado ou contabilidade organizada (se eleito)
6. **Estatuto IRS Jovem** — idade + número do ano de obtenção de rendimentos em Portugal
7. **Extratos bancários** — 12 meses do ano fiscal
8. **Estatuto RNH ou IFICI** — se aplicável (caso em que se remete para skill `pt-nhr-ifici`)
9. **Outras categorias de rendimentos** — Categoria A (trabalho dependente), Categoria F (prediais), Categoria G (mais-valias)
10. **Estado civil e dependentes** — para quociente conjugal e deduções por dependentes

### Catálogo de Recusas

| Código | Situação | Ação |
|---|---|---|
| R-PT-1 | Receitas brutas > EUR 200 000 mas cliente insiste no regime simplificado | Parar — contabilidade organizada obrigatória; necessário Contabilista Certificado (CC) |
| R-PT-2 | Estatuto RNH/IFICI alegado | Remeter para skill `pt-nhr-ifici` — não aplicar regras especiais nesta skill |
| R-PT-3 | Sem declarações de retenção mas pagamentos efetuados por empresas portuguesas | Sinalizar — empresas têm obrigação legal de reter 25%; recolher declarações antes de finalizar |
| R-PT-4 | Risco de falso recibo verde (cliente único > 80% das receitas, regularidade laboral) | Sinalizar — a AT pode requalificar como Categoria A (trabalho dependente); aconselhar revisão jurídica |
| R-PT-5 | Contabilidade organizada sem CC (Contabilista Certificado) | Parar — a contabilidade organizada exige legalmente a assinatura de CC; não prosseguir sem este |

---

## Secção 3 — Biblioteca de Padrões Transacionais

### Padrões de Rendimentos

| # | Padrão de Descritivo | Linha Fiscal | Notas |
|---|---|---|---|
| I-01 | `TRANSF DE [nome cliente]` / `TRF DE [cliente]` | Receitas brutas — Categoria B | Transferência SEPA padrão de cliente |
| I-02 | `MB WAY [cliente]` / `MBWAY RECEBIDO` | Receitas brutas — Categoria B | MB Way (pagamento digital português) |
| I-03 | `STRIPE PAYMENTS EUROPE` / `STRIPE PAYOUT` | Receitas brutas — gross-up | Pagamento líquido Stripe; recompor ao bruto pré-comissão; comissão dedutível |
| I-04 | `PAYPAL TRANSFER` / `PAYPAL RECEBIDO` | Receitas brutas — gross-up | Pagamento líquido PayPal; recompor; comissão dedutível |
| I-05 | `TRANSFERÊNCIA RECEBIDA [cliente]` | Receitas brutas — Categoria B | Crédito por transferência genérica |
| I-06 | `IFTHENPAY PAYOUT` / `EUPAGO SETTLEMENT` | Receitas brutas — gross-up | Liquidação de gateway de pagamento português |
| I-07 | `RETENÇÃO NA FONTE` (linha separada ou anotação) | Crédito de retenção | Recomposição: recebido = líquido após 25% de retenção → bruto = recebido / 0,75 |
| I-08 | `REEMBOLSO IRS AT` / `REEMBOLSO AT` | NÃO é rendimento — reembolso fiscal | Reembolso da AT; não é rendimento de Categoria B |
| I-09 | `DEVOLUÇÃO` / `REEMBOLSO [cliente]` | Não tributável se for reembolso ao cliente | Tem de estar documentado; caso contrário tributável |
| I-10 | `JUROS RECEBIDOS` / `JUROS CONTA` | Categoria E (rendimentos de capitais) | Não é Categoria B — tratamento separado em sede de IRS |

### Padrões de Despesa

| # | Padrão de Descritivo | Linha Fiscal | Notas |
|---|---|---|---|
| E-01 | `RENDA` / `ARRENDAMENTO ESCRITÓRIO` | Renda — dedutível (apenas contabilidade organizada) | Regime simplificado: despesas reais não dedutíveis (coeficiente aplica-se) |
| E-02 | `EDP` / `GALP ENERGIA` / `ENDESA` / `IBERDROLA` | Utilidades — dedutíveis (apenas contab. organizada) | Não dedutíveis em regime simplificado |
| E-03 | `MEO` / `NOS` / `VODAFONE PT` / `NOWO` | Telefone/internet — dedutível (contab. organizada) | Regime simplificado: N/A |
| E-04 | `ADOBE` / `MICROSOFT 365` / `GOOGLE WORKSPACE` | Software — dedutível (contab. organizada) | Regime simplificado: N/A |
| E-05 | `SEGURANÇA SOCIAL` / `TAXA SS` | Contribuições SS — dedutíveis | Ambos os regimes: SS reduz a matéria coletável de IRS |
| E-06 | `CONTABILISTA` / `CC` / `ROC` | Honorários do contabilista — dedutíveis (contab. organizada) | Exigido para contabilidade organizada |
| E-07 | `CP COMBOIO` / `COMBOIOS DE PORTUGAL` | Deslocações em comboio — dedutível (contab. organizada) | Viagem profissional; documentar finalidade |
| E-08 | `TAP AIR PORTUGAL` / `RYANAIR` / `EASYJET` | Viagens aéreas — dedutíveis (contab. organizada) | Viagem profissional; documentar itinerário |
| E-09 | `SEGURO PROFISSIONAL` / `SEGURO RC` | Seguro profissional — dedutível | Ambos os regimes (quando especificamente profissional) |
| E-10 | `AT PAGAMENTO IRS` / `LIQUIDAÇÃO IRS` | Pagamento de IRS — NÃO dedutível | Pagamentos de imposto não são despesas |
| E-11 | `AT IVA PAGAMENTO` / `IVA ENTREGUE` | Pagamento de IVA — NÃO dedutível | O IVA é separado; não é despesa de IRS |
| E-12 | `BANCO [nome] COMISSÕES` / `COMISSÃO BANCÁRIA` | Comissões bancárias — dedutível (contab. organizada) | Comissões da conta profissional |
| E-13 | `FORMAÇÃO` / `CURSO` / `WORKSHOP` | Formação — dedutível (contab. organizada) | Desenvolvimento profissional |
| E-14 | `COMBUSTÍVEL` / `GALP` / `BP` / `REPSOL` | Combustível — dedutível (contab. organizada, parcial) | Despesas de viatura: documentar uso profissional |
| E-15 | `MBNET` / `TRANSFERÊNCIA MB` / `MULTIBANCO` | Pagamento genérico — classificar pela finalidade | Identificar beneficiário pelo descritivo; classificar |
| E-16 | `SEGURO SAÚDE` / `MÉDIS` / `MULTICARE` | Seguro de saúde — dedução à coleta (Anexo H) | Não é despesa de Categoria B — dedução pessoal separada no Anexo H |
| E-17 | `DESCONTO RECIBO VERDE` / `RETENÇÃO CLIENTE` | Retenção pelo cliente (25%) | Não é despesa — crédito contra IRS; verificar com declaração |

---

## Secção 4 — Exemplos Práticos

### Exemplo 1 — Millennium BCP (Lisboa, Consultor — Regime Simplificado)

**Banco:** Extrato Millennium BCP (PDF/CSV)
**Cliente:** Ana Ferreira, consultora de gestão, Lisboa, com NIF registado, regime simplificado.

```
Data;Descrição;Débito;Crédito;Saldo
05/01/2025;TRANSF DE EMPRESA ALPHA LDA;;3.750,00;
31/01/2025;COMISSÃO BANCÁRIA;4,50;;
10/02/2025;TRANSF DE STARTUP BETA LDA;;2.500,00;
28/02/2025;SEGURANÇA SOCIAL;350,00;;
15/03/2025;TRANSF DE GAMMA CONSULTING LDA;;4.200,00;
31/03/2025;SEGURANÇA SOCIAL;350,00;;
05/04/2025;STRIPE PAYMENTS EUROPE;;1.920,00;
30/04/2025;SEGURANÇA SOCIAL;350,00;;
15/06/2025;TRANSF DE DELTA SA;;3.100,00;
30/06/2025;SEGURANÇA SOCIAL;350,00;;
```

**Nota:** Os clientes retiveram 25% à fonte. Montantes brutos antes de retenção:
- EMPRESA ALPHA: EUR 3.750 recebidos = EUR 5.000 brutos (÷ 0,75)
- STARTUP BETA: EUR 2.500 = EUR 3.333,33 brutos
- GAMMA CONSULTING: EUR 4.200 = EUR 5.600 brutos
- DELTA SA: EUR 3.100 = EUR 4.133,33 brutos

Stripe: EUR 1.920 líquido (sem retenção — pagador estrangeiro). Recompor para ~EUR 1.978 (após comissões).

**Passo 1 — Total de Receitas Brutas**

```
Recompostas de clientes com retenção:  EUR 18.066,67
Stripe bruto (sem retenção):           EUR  1.978,00
Restantes meses (extrapolados):        admitir ano completo = EUR 52.000 bruto (exemplo)
Total bruto Categoria B:               EUR 52.000
```

**Passo 2 — Aplicar Coeficiente do Regime Simplificado**

```
Tipo de serviço: consultoria de gestão → coeficiente 0,35
Rendimento tributável: EUR 52.000 × 0,35 = EUR 18.200
Menos contribuições SS pagas (dedutíveis): EUR 350 × 12 = EUR 4.200
Rendimento tributável para IRS: EUR 18.200 − EUR 4.200 = EUR 14.000
```

**Passo 3 — Cálculo do IRS**

```
EUR 8.059 × 13,00% = EUR 1.047,67
(EUR 12.160 − EUR 8.059) × 16,50% = EUR 4.101 × 16,50% = EUR 676,67
(EUR 14.000 − EUR 12.160) × 22,00% = EUR 1.840 × 22,00% = EUR 404,80
IRS bruto: EUR 2.129,14
Menos retenções na fonte: receitas brutas de clientes PT × 25%
  = EUR 18.066,67 × 25% (efetivamente retido) = EUR 4.516,67 já retido
Saldo IRS: EUR 2.129,14 − EUR 4.516,67 = **(EUR 2.387,53 a reembolsar)**
```

Cenário de reembolso — confirmar que todas as declarações de retenção batem com os montantes recompostos.

---

### Exemplo 2 — Caixa Geral de Depósitos (Porto, Programador)

**Banco:** Extrato online CGD
**Cliente:** Pedro Costa, programador, Porto, IRS Jovem ano 2 (75% isento).

Receitas brutas: EUR 45.000 (coeficiente de serviços 0,35)
Base tributável: EUR 45.000 × 0,35 = EUR 15.750
Menos SS: EUR 45.000 × 70% × 21,4% / 12 × 12 = EUR 6.741
Tributável líquido: EUR 15.750 − EUR 6.741 = EUR 9.009

IRS Jovem — ano 2 (75% isento): EUR 9.009 × 25% sujeito = EUR 2.252,25

IRS: EUR 2.252,25 × 13,00% = **EUR 292,79**

Alerta: o IRS Jovem requer confirmação da AT do número do ano. O Pedro deve apresentar declaração via Portal das Finanças.

---

### Exemplo 3 — BPI (Algarve, Arquiteta — Contabilidade Organizada)

**Banco:** Extrato BPI
**Cliente:** Sofia Pinto, arquiteta, Algarve, receitas brutas EUR 220.000 (contab. organizada obrigatória).

Nota: Contabilidade organizada obrigatória — exige assinatura de CC. Este exemplo apresenta apenas a estrutura.

Receitas brutas: EUR 220.000
Despesas dedutíveis (reais):
- Renda do escritório: EUR 12.000
- Utilidades: EUR 2.400
- Telefone/internet: EUR 1.200
- Software: EUR 2.400
- Honorários CC: EUR 4.800
- Seguro profissional: EUR 1.500
- Deslocações: EUR 3.000
- Contribuições SS: EUR 32.917 (21,4% × 70% × EUR 220.000)
Total de despesas: EUR 60.217

Resultado líquido: EUR 220.000 − EUR 60.217 = EUR 159.783

IRS sobre EUR 159.783:
Escalão acima de EUR 83.696: EUR 29.634,29 + (EUR 159.783 − EUR 83.696) × 48% = EUR 29.634,29 + EUR 36.521,76 = EUR 66.156,05

Adicional de solidariedade (rendimento > EUR 80.000):
(EUR 159.783 − EUR 80.000) × 2,5% = EUR 79.783 × 2,5% = EUR 1.994,58

Total IRS: EUR 66.156,05 + EUR 1.994,58 = **EUR 68.150,63**

Alerta: bruto > EUR 200.000 — CC obrigatório; adicional de solidariedade aplica-se.

---

### Exemplo 4 — Santander Portugal (Lisboa, Designer, muitos MB Way)

**Banco:** Extrato Santander Totta
**Cliente:** Margarida Santos, designer gráfica, Lisboa, recebe muitos pagamentos via MB Way.

Descritivos de MB Way no extrato: `MBWAY RECEBIDO CLIENTE X` × várias entradas.

Tratamento: receções de MB Way são rendimento padrão. O desafio principal é identificar o pagador. Muitos microclientes podem ser consumidores particulares não registados e portanto sem obrigação de retenção.

Regra-chave: se o pagador for não-empresa (consumidor particular), não há obrigação de retenção. Se for empresa com NIF, a retenção de 25% é obrigatória.

Para designers com muito MB Way: muitos pequenos pagamentos de consumidores = sem retenção. Somar todos os créditos MB Way como receitas brutas de Categoria B pelo valor facial (sem recompor).

Receitas brutas MB Way: EUR 18.000 (todos consumidores particulares)
Outras TRANSF de empresas (com retenção): EUR 24.000 brutos

Total bruto: EUR 42.000
Coeficiente 0,35: EUR 42.000 × 0,35 = EUR 14.700
Menos SS: ~EUR 6.300
Tributável: EUR 8.400

IRS: EUR 8.059 × 13,00% + EUR 341 × 16,50% = EUR 1.047,67 + EUR 56,27 = **EUR 1.103,94**

---

### Exemplo 5 — Cliente sob RNH / IFICI

**Cliente alegando RNH ou IFICI:** STOP nesta skill.

Aplicar a recusa **R-PT-2** e remeter o trabalho para a skill `pt-nhr-ifici`, que trata em detalhe:
- Taxa fixa de 20% sobre AEVA (Atividades de Elevado Valor Acrescentado)
- Isenções de rendimentos de fonte estrangeira
- Processo de candidatura à AT
- Lista de profissões qualificadas

Não aplicar taxas progressivas nem 20% flat **sem confirmação documental** do estatuto. A presente skill assume regime geral.

---

### Exemplo 6 — ActivoBank / Moey (Coimbra, Tradutora)

**Banco:** Extrato ActivoBank/Moey (banco digital)
**Cliente:** Rita Alves, tradutora, Coimbra, primeiro ano como trabalhadora independente.

Considerações para o primeiro ano:
- Regime simplificado aplica-se (novo contribuinte, rendimento estimado < EUR 200.000)
- Se rendimento anual estimado ≤ EUR 15.000: pode solicitar dispensa de retenção na fonte
- IRS Jovem: se a Rita tiver ≤ 35 anos, confirmar elegibilidade ano 1 para isenção a 100% (limite EUR 28.737)

Receitas brutas (ano completo): EUR 22.000
Coeficiente (tradução = serviços Categoria B): 0,35
Tributável: EUR 22.000 × 0,35 = EUR 7.700
Menos SS (isenção primeiro ano: 12 meses sem contribuições para novos contribuintes, depois regime normal): admitir EUR 0 SS no ano 1
Tributável para IRS: EUR 7.700

IRS Jovem ano 1 (100% isento até EUR 28.737): EUR 7.700 totalmente isentos
**IRS: EUR 0**

Nota: isenção SS no primeiro ano — novos trabalhadores independentes estão isentos de contribuições para a SS nos primeiros 12 meses. Confirmar data de registo AT/SS.

---

## Secção 5 — Regras de Tier 1 (Aplicar Diretamente)

**T1-PT-1 — Regime simplificado: coeficiente, não despesas reais**
Em regime simplificado, rendimento tributável = receitas brutas × coeficiente. Despesas individuais NÃO são dedutíveis (estão implicitamente cobertas pelo coeficiente). Apenas as contribuições para a SS pagas são deduzidas separadamente da base tributável. Aplicar mecanicamente — não somar despesas em regime simplificado.

**T1-PT-2 — Retenção na fonte é um adiantamento, não uma redução de rendimento**
Os 25% retidos pelos clientes são um adiantamento de imposto creditado contra a coleta final de IRS. Não reduzem as receitas brutas da Categoria B. Recompor sempre os pagamentos recebidos líquidos de retenção (dividir por 0,75) para obter o bruto.

**T1-PT-3 — Contribuições SS sempre dedutíveis**
As contribuições para a SS pagas são dedutíveis à base tributável do IRS em ambos os regimes. Em regime simplificado: deduzir à base tributável reduzida pelo coeficiente. Em contabilidade organizada: deduzir como despesa. Aplicar sem escalar.

**T1-PT-4 — IRS Jovem: confirmar número do ano antes de aplicar**
Nunca presumir a aplicação do IRS Jovem. O contribuinte tem de ter ≤ 35 anos E confirmar o número do ano (ano 1 = primeiro ano de rendimentos de Categoria A ou B após conclusão dos estudos). Pedir sempre confirmação antes de aplicar qualquer isenção.

**T1-PT-5 — Contabilidade organizada obrigatória a partir de EUR 200 000**
Receitas brutas acima de EUR 200 000 no ano anterior obrigam à contabilidade organizada a partir do ano seguinte. Aplicar regime simplificado apenas quando confirmado bruto ≤ EUR 200 000 no ano anterior (ou ano corrente para novos contribuintes).

**T1-PT-6 — Pagamentos de IRS e IVA não são despesas de IRS**
Pagamentos à AT (pagamento por conta, saldo de IRS) e entregas de IVA são pagamentos de imposto, não despesas de Categoria B. Excluir todos os descritivos de pagamentos à AT do cálculo do rendimento.

**T1-PT-7 — RNH / IFICI: encaminhar para skill dedicada**
Se houver qualquer indício de estatuto RNH ou IFICI (datas de registo, ano de início, indicação do cliente), **parar e remeter para a skill `pt-nhr-ifici`**. Não tentar aplicar a taxa de 20% AEVA, nem isenções de rendimento estrangeiro, nesta skill.

---

## Secção 6 — Catálogo Tier 2 (Requer Julgamento do Revisor)

| Código | Situação | Motivo de Escalonamento | Tratamento Sugerido |
|---|---|---|---|
| T2-PT-1 | Regime RNH / IFICI | Isenções de rendimento estrangeiro e taxa de 20% — complexidade | Remeter para skill `pt-nhr-ifici` |
| T2-PT-2 | Múltiplas categorias (A + B, ou B + F) | Regras de englobamento vs. tributação autónoma para certas categorias | Sinalizar — contribuinte pode optar pelo englobamento ou não |
| T2-PT-3 | Casais — tributação conjunta | Tributação conjunta vs. separada produz resultados distintos (quociente conjugal) | Apresentar ambas as opções; não escolher por defeito |
| T2-PT-4 | Falso recibo verde (cliente único > 80%) | A AT pode requalificar como Categoria A; tratamento diferente | Sinalizar para revisão jurídica; não requalificar unilateralmente |
| T2-PT-5 | Deduções à coleta para saúde, educação, habitação (Anexo H) | Deduções pessoais fora da Categoria B — sujeitas a matching com e-fatura | Confirmar que as faturas na e-fatura estão atribuídas ao NIF; sinalizar deduções não reclamadas |
| T2-PT-6 | Residência parcial ou não residente | Taxas e regras de convenções diferentes para não residentes | Sinalizar — não aplicar taxas de residente a não residentes |

---

## Secção 7 — Modelo 3 e Anexos: Mapeamento

A declaração anual de IRS é a **Modelo 3**, acompanhada dos anexos consoante as categorias de rendimentos:

| Anexo | Categoria / Conteúdo |
|---|---|
| Anexo A | Categoria A (trabalho dependente) e Categoria H (pensões) |
| Anexo B | Categoria B — regime simplificado (trabalhadores independentes) |
| Anexo C | Categoria B — contabilidade organizada |
| Anexo D | Imputação de rendimentos (transparência fiscal) |
| Anexo E | Categoria E (rendimentos de capitais) |
| Anexo F | Categoria F (rendimentos prediais) |
| Anexo G | Categoria G (mais-valias e outros incrementos patrimoniais) |
| Anexo H | Deduções à coleta (saúde, educação, lares, imóveis, donativos) — alimentado por e-fatura |
| Anexo J | Rendimentos obtidos no estrangeiro (residentes) |
| Anexo L | Residentes não habituais — ver skill `pt-nhr-ifici` |

**Prazo de entrega:** **último dia útil de junho** do ano seguinte ao do facto tributário (ex.: IRS 2024 a entregar até 30 de junho de 2025).

---

## Secção 8 — Folha de Trabalho (Excel)

```
PAPEL DE TRABALHO IRS PORTUGAL (CATEGORIA B — REGIME SIMPLIFICADO)
Contribuinte: _______________  NIF: _______________  Ano: 2025

SECÇÃO A — RECEITAS BRUTAS (Categoria B)
                                        EUR
Total faturado (recibos verdes bruto)   ___________
Recomposição de montantes retidos       ___________
Plataformas online (recompostas)        ___________
Outras receitas Categoria B             ___________
TOTAL RECEITAS BRUTAS                   ___________

SECÇÃO B — COEFICIENTE REGIME SIMPLIFICADO
Tipo de serviço: _______________
Coeficiente aplicado: _______________
Base tributável (bruto × coeficiente)   ___________
Menos: contribuições SS pagas           (___________)
RENDIMENTO TRIBUTÁVEL IRS               ___________

SECÇÃO C — CÁLCULO DO IRS (ESCALÕES PADRÃO)
Imposto pelos escalões                  ___________
Isenção IRS Jovem (se aplicável)        (___________)
IRS antes de créditos                   ___________
Menos: retenções na fonte               (___________)
Menos: pagamentos por conta IRS         (___________)
SALDO IRS A PAGAR / (REEMBOLSAR)        ___________

SECÇÃO D — ADICIONAL DE SOLIDARIEDADE
(Apenas se rendimento > EUR 80.000)     ___________

SECÇÃO E — SEGURANÇA SOCIAL
Base trimestral SS: 70% × bruto trim. ÷ 3 ___________
SS anual devida: base mensal × 21,4% × 12  ___________
Menos: SS já paga                          (___________)
Saldo SS a pagar                           ___________

SECÇÃO F — ALERTAS DO REVISOR
[ ] Regime simplificado confirmado (bruto ≤ EUR 200.000 ano anterior)?
[ ] Coeficiente correto para o tipo de serviço?
[ ] Todas as declarações de retenção recolhidas?
[ ] Pagamentos SS conferidos contra recibos
[ ] IRS Jovem — número do ano confirmado?
[ ] Estatuto RNH/IFICI verificado (se aplicável, ver skill pt-nhr-ifici)?
[ ] Risco de falso recibo verde avaliado (cliente único > 80%)?
[ ] Deduções pessoais e-fatura verificadas (Anexo H)?
```

---

## Secção 9 — Guia de Leitura de Extratos Bancários

### Millennium BCP
- Exportação: CSV via "Consultas" → "Movimentos" → "Exportar"
- Colunas: `Data;Descrição;Débito;Crédito;Saldo`
- Formato do valor: separador de milhares `.`, decimal `,` (ex.: `3.750,00`)
- Formato da data: DD/MM/AAAA
- Descritivos de crédito: `TRANSF DE [remetente]`, `TRANSFERÊNCIA RECEBIDA`
- Descritivos de débito: `TRANSF PARA [beneficiário]`, `COMISSÃO`, `SEGURANÇA SOCIAL`

### Caixa Geral de Depósitos (CGD)
- Exportação: PDF ou CSV em e.caixa.pt
- Formato semelhante ao Millennium; colunas: `Data;Descrição;Movimento;Saldo`
- Movimento positivo = crédito; negativo = débito

### BPI (Banco BPI)
- Exportação: CSV via BPINet
- Colunas: `Data movimento;Descrição;Valor;Saldo`
- Valor positivo = crédito; negativo = débito

### Santander Portugal
- Exportação: CSV via NetBanco Santander
- Colunas: `Fecha;Concepto;Importe;Saldo` (nota: cabeçalhos em espanhol pela casa-mãe)
- Valor positivo = crédito; negativo = débito; decimal por vírgula

### Novo Banco
- Exportação: CSV ou Excel via Novo Banco Online
- Colunas: `Data;Descrição;Débito;Crédito;Saldo`
- Formato bancário português padrão

### ActivoBank / Moey (digital)
- Exportação: CSV/PDF via aplicação
- Formato simples; valor a crédito em coluna dedicada

### MB Way / Multibanco
- Não é um extrato bancário próprio — pagamentos aparecem como descritivos no extrato bancário principal
- Procurar: `MBWAY RECEBIDO`, `MULTIBANCO RECEBIMENTO`, `TPA [comerciante]`

---

## Secção 10 — Onboarding e Recolha de Informação em Falta

**Declarações de retenção em falta:**
> "Para calcular o IRS com rigor, preciso das declarações de retenção na fonte de cada cliente que reteve 25% dos pagamentos. Pode pedi-las aos clientes em janeiro/fevereiro — as empresas têm obrigação legal de emiti-las. Em alternativa, consulte o Portal das Finanças → 'Consultar' → 'Retenções na Fonte' — a AT poderá já ter os dados."

**Tipo de serviço ambíguo:**
> "Para aplicar o coeficiente correto do regime simplificado, preciso de saber a natureza dos serviços. Está a vender mercadorias (coeficiente 0,15), a prestar serviços gerais (0,35) ou exerce profissão listada no artigo 151.º do CIRS (também 0,35)? Confirme para aplicar a base tributável correta."

**IRS Jovem:**
> "Com base na sua idade, poderá ter direito ao IRS Jovem. Este isenta 100% do imposto nos anos 1–3, 75% nos anos 4–6, 50% nos anos 7–9 e 25% no ano 10. Para o aplicar, preciso de confirmar: (1) que tem 35 anos ou menos, e (2) o número do ano da sua carreira de obtenção de rendimentos em Portugal. Pode confirmar quando começou a receber rendimentos de Categoria A ou B em Portugal após concluir os estudos?"

**RNH / IFICI:**
> "Se está abrangido pelo regime de Residente Não Habitual (RNH) ou pelo IFICI, o tratamento de IRS é diferente — taxa fixa de 20% sobre Atividades de Elevado Valor Acrescentado, com possíveis isenções de rendimentos de fonte estrangeira. Confirma o seu estatuto e, em caso afirmativo, o trabalho será encaminhado para a skill especializada (`pt-nhr-ifici`)?"

**Contribuições SS desconhecidas:**
> "As contribuições para a Segurança Social são dedutíveis à matéria coletável de IRS e podem reduzir significativamente o imposto. Tem os recibos trimestrais de pagamento à SS? Caso não, posso estimar com base nas suas receitas brutas declaradas: a base contributiva é 70% das receitas brutas trimestrais ÷ 3, à taxa de 21,4%."

---

## Secção 11 — Remissão para RNH / IFICI

Esta skill **não cobre** o regime de Residente Não Habitual (RNH) nem o IFICI (Incentivo Fiscal à Investigação Científica e Inovação).

Se o contribuinte está sob regime RNH ou IFICI, **ver o skill `pt-nhr-ifici`** para o tratamento detalhado da:
- Taxa fixa de 20% sobre AEVA (Atividades de Elevado Valor Acrescentado);
- Isenções de rendimentos de fonte estrangeira (categorias B, E, F, G, H), incluindo a regra dos 10 anos;
- Lista de profissões e atividades qualificáveis;
- Processo de candidatura e registo junto da AT (Autoridade Tributária e Aduaneira);
- Interação com convenções de dupla tributação;
- Transição RNH → IFICI após a reforma de 2024.

**Regra operativa:** verificar sempre se o contribuinte está sob RNH/IFICI **antes de aplicar as tabelas progressivas** desta skill. Em caso afirmativo, remeter integralmente.

---

## Secção 12 — Referências

### Legislação-Chave
- **CIRS (Código do IRS)** — Decreto-Lei n.º 442-A/88, de 30 de novembro, com as alterações em vigor; art.º 28.º (Categoria B), art.º 31.º (coeficientes), art.º 101.º (retenção na fonte)
- **Lei n.º 24-D/2022** — alterações ao IRS Jovem
- **Portaria 1011/2001** — lista do art.º 151.º do CIRS de profissões de elevado valor acrescentado
- **Decreto Regulamentar n.º 25/2009** — depreciações e amortizações (relevante para contabilidade organizada)

### Prazos 2025 (declaração FY 2024)
| Prazo | Evento |
|---|---|
| 1 de abril de 2025 | Abertura do prazo de entrega da Modelo 3 |
| Último dia útil de junho de 2025 | Prazo de entrega da Modelo 3 (IRS 2024) |
| Agosto de 2025 | A AT emite as liquidações; pagamentos a efetuar no prazo da notificação |
| 31 de agosto de 2025 | Pagamento por conta — 1.ª prestação para 2025 |
| 30 de novembro de 2025 | Pagamento por conta — 2.ª prestação para 2025 |

### Referências Úteis
- Portal das Finanças (AT): portaldasfinancas.gov.pt
- Segurança Social Direta: app.seg-social.pt
- CIRS consolidado: dre.pt (Diário da República)
- IRS Jovem (confirmação): Portal das Finanças → "IRS Jovem"
- Skill relacionada: `pt-nhr-ifici` (RNH / IFICI)

---

## Disclaimer

Esta skill e os seus outputs são fornecidos exclusivamente para fins informativos e de cálculo e não constituem aconselhamento fiscal, jurídico ou financeiro. A Open Accountants e os seus contribuidores não aceitam qualquer responsabilidade por erros, omissões ou consequências decorrentes da utilização desta skill. Todos os outputs devem ser revistos e validados por um profissional qualificado (Contabilista Certificado, advogado fiscalista ou equivalente licenciado na jurisdição aplicável) antes de qualquer entrega ou actuação.

A versão mais actualizada e verificada desta skill é mantida em [openaccountants.com](https://www.openaccountants.com). Faça login para aceder à versão mais recente, solicitar revisão profissional por um contabilista licenciado e acompanhar actualizações à medida que a lei fiscal evolui.

---

<!-- openaccountants-cta-block -->

## Talk to a verified accountant

This skill is a tool, not an engagement. Every taxpayer's situation is
different, and the rules in the skill may not match your specific facts.

To speak with one of the licensed accountants who verifies skills for your
jurisdiction — **no liability on either side until you and the accountant sign
a formal engagement letter** — book a free 30-minute call:

**→ [Book a call](https://calendly.com/openaccountants-info/30min)**

We'll route you to the named verifier covering your country or state. You can
also see the full list of verified accountants at
[openaccountants.com/network](https://www.openaccountants.com/network).

<!-- openaccountants-mcp-cta -->

## The accountant-verified version lives in the connector

This file is the open, **research-grade draft**. The **accountant-verified**
version of this skill is **not published to GitHub** — it is delivered free
through the OpenAccountants MCP connector, where your AI agent loads the
verified rules together with the name of the accountant who signed them off.

**→ Install the free connector:** <https://www.openaccountants.com/connect>
**MCP endpoint:** `https://www.openaccountants.com/api/mcp`
