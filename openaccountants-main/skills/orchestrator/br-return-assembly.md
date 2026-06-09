---
name: br-return-assembly
description: Final orchestrator skill that assembles the complete Brazil filing package for Brazil-resident self-employed individuals (MEI, Simples Nacional, autônomo/pessoa física). Consumes outputs from all Brazil content skills (br-irpf for Declaração de Ajuste Anual, br-simples for DAS/DASN reconciliation, br-inss for INSS contributions, br-iss for ISS municipal) to produce a single unified reviewer package containing every worksheet, every form, every brief section, all cross-skill reconciliations, and the final action list with payment instructions, filing instructions, and next-year planning. This is the capstone skill that runs last and produces the final deliverable. MUST be loaded alongside all Brazil content skills listed above. Brazil full-year residents only. Self-employed individuals only.
version: 1.0
jurisdiction: BR
category: orchestrator
---

# Brazil Return Assembly Skill v1.0

## CRITICAL EXECUTION DIRECTIVE -- READ FIRST

**When this skill is invoked, you have already passed through intake. The user has consented to the full workflow. Execute all steps without pausing for permission.**

Specifically:

- **Do NOT ask the user "how deep do you want me to go"** or "do you want the full package" or any variant. The user asked for their tax returns. They want their tax returns. Produce them.
- **Do NOT announce how many tokens or tool calls this will take.** Execute.
- **Do NOT ask which deliverables to prioritise.** Produce all deliverables listed in Section 4. If you run out of context mid-execution, finish the computation work first (numbers, positions, flags) then produce whatever formatted outputs you can, and at the very end state clearly which deliverables were not produced and why.
- **Do NOT re-validate scope that intake already validated.** If `br-freelance-intake` produced an intake package, trust it. You can cross-check specific numbers during reconciliation but do not re-interrogate the user about residency, business type, or anything else intake already captured.
- **Do NOT pause between content skills to check in.** Run them in dependency order (Section 2) without prose status updates between each one. A single status message at the end is fine.
- **Self-checks are targets, not blockers.** If a self-check fails, note it in the reviewer brief's open flags section and continue. Do NOT halt the entire workflow because one self-check had an ambiguous answer.
- **Primary source citations go in the final reviewer brief, not in intermediate computation steps.**

**The user has already been told (by the intake skill) that the final package requires contador signoff before filing. State it once in the final output and move on.**

**Failure mode to avoid:** The skill halts mid-execution and asks the user a meta-question about workflow pacing. If you feel the urge to ask "how should I proceed," the correct action is to pick the most defensible path and proceed, flagging the decision in the reviewer brief so the reviewer can challenge it.

---

## What this file is

The final capstone skill for Brazil self-employed returns. Every Brazil content skill feeds into this one. The output is the complete reviewer package that a contador can review, sign off on, and deliver to the client along with filing instructions.

This skill coordinates execution of the content skills, verifies cross-skill consistency, and assembles the final deliverable.

---

## Section 1 -- Scope

Produces the complete Brazil filing package for:
- Full-year Brazil residents
- Self-employed individuals: MEI (microempreendedor individual), Simples Nacional (ME/EPP), autônomo/pessoa física
- Tax year 2025 (ano-calendário 2025, exercício 2026)
- Filing IRPF Declaração de Ajuste Anual, DASN-SIMEI (MEI), DAS reconciliation (Simples), carnê-leão reconciliation (autônomo), INSS reconciliation, ISS reconciliation (if applicable)

---

## Section 2 -- Execution order and dependency chain

The skill routes based on business type established during intake, then enforces execution order:

### Route A: MEI

1. **`br-simples` (MEI mode)** -- DASN-SIMEI annual declaration + DAS payment reconciliation
   - Verify faturamento bruto vs R$81,000 limit
   - Reconcile 12 monthly DAS payments (R$75.90 base for serviços 2025, adjusted for ICMS/ISS component)
   - Calculate parcela isenta (32% serviços, 8% comércio, 8% indústria, 16% transporte)
   - Output: DASN-SIMEI values, parcela isenta, parcela tributável for IRPF

2. **`br-irpf`** -- Declaração de Ajuste Anual (if obligated)
   - MEI parcela tributável enters as rendimentos tributáveis
   - MEI parcela isenta enters as rendimentos isentos e não tributáveis
   - Other income sources consolidated
   - Output: IRPF complete with all fichas

3. **`br-inss`** -- INSS reconciliation
   - MEI INSS is included in DAS (5% salário mínimo for aposentadoria por idade)
   - If complementary contribution paid (15% additional for aposentadoria por tempo de contribuição), reconcile
   - Output: INSS contribution summary, months contributed

### Route B: Simples Nacional

1. **`br-simples` (Simples mode)** -- DAS reconciliation
   - Determine correct Anexo (I-V) based on CNAE
   - Calculate fator R (folha de pagamento / receita bruta 12 meses) for Anexo V -> III migration
   - Reconcile monthly DAS payments against faturamento
   - Verify sublimite estadual for ICMS/ISS if applicable
   - Output: DAS reconciliation, alíquota efetiva, total paid vs due

2. **`br-irpf`** -- Declaração de Ajuste Anual
   - Pró-labore as rendimentos tributáveis (with INSS 11% deducted)
   - Distribuição de lucros isentos (lucro - impostos Simples, limited to presunção or contabilidade)
   - Other income sources consolidated
   - Output: IRPF complete with all fichas

3. **`br-inss`** -- INSS reconciliation
   - INSS on pró-labore: 11% retido (empresa) + CPP within DAS
   - Verify INSS ceiling (teto previdenciário R$7,786.02 in 2025)
   - Output: INSS contribution summary

4. **`br-iss`** -- ISS reconciliation (if service activity)
   - ISS included in DAS for Simples Nacional (except Anexo IV activities)
   - For Anexo IV (advocacia, vigilância, limpeza): ISS paid separately to municipality
   - Output: ISS reconciliation

### Route C: Autônomo / Pessoa Física

1. **`br-iss`** -- ISS reconciliation (if service activity in municipality that requires)
   - ISS rate per municipality (typically 2-5%)
   - Reconcile ISS paid or retained
   - Output: ISS values, deductible amount

2. **Carnê-leão reconciliation** (built into br-irpf)
   - Monthly computation of rendimentos PF, deduções livro-caixa, INSS, dependentes
   - Monthly IRPF tabela progressiva application
   - Reconcile DARFs paid (código 0190) against imposto devido mensal
   - Output: monthly carnê-leão schedule, total paid, any shortfall with multa/juros exposure

3. **`br-irpf`** -- Declaração de Ajuste Anual
   - All rendimentos tributáveis (PF via carnê-leão + PJ com IRRF)
   - Livro-caixa deductions
   - INSS paid as deduction
   - Deduções legais (médicas, educação, PGBL, dependentes, pensão)
   - Bens e direitos / dívidas e ônus updated
   - Output: IRPF complete with all fichas

4. **`br-inss`** -- INSS reconciliation
   - Contribuinte individual: 20% sobre remuneração (up to teto R$7,786.02)
   - Or plano simplificado: 11% sobre salário mínimo
   - Reconcile GPS payments
   - Output: INSS contribution summary, months contributed

If any upstream content skill fails to produce validated output, the assembly skill notes the failure in the reviewer brief and continues with available data rather than halting entirely.

---

## Section 3 -- Cross-skill reconciliation

### Cross-check 1: Revenue reconciliation across obligations

| Source | IRPF | Simples/MEI | Carnê-leão | Rule |
|--------|------|-------------|------------|------|
| Notas fiscais emitidas | Rendimentos tributáveis (ficha Rendimentos Recebidos de PJ) | Faturamento bruto (PGDAS-D / DASN-SIMEI) | Rendimentos recebidos de PF (mensal) | All must reconcile to bank deposits within R$100 |
| Bank deposits | Sum of all income sources | Total faturamento | Monthly PF receipts | Timing differences (competência vs caixa) are common |

**If mismatch:** Flag for reviewer. Common causes: notas fiscais not emitted for all receipts, timing between emission and payment, returns/cancellations.

### Cross-check 2: INSS contributions vs IRPF deduction

| INSS Source | IRPF Treatment | Rule |
|-------------|---------------|------|
| Autônomo GPS (20% or 11%) | Dedução na ficha Pagamentos Efetuados (código 36) | Amount actually paid, not amount due |
| MEI DAS (INSS component) | Not separately deductible (included in parcela isenta calculation) | Do not double-count |
| Simples pró-labore INSS (11%) | Dedução do rendimento tributável na ficha Rendimentos Recebidos de PJ | Retained by company, reduces rendimento tributável |

**If mismatch:** Verify the INSS path matches the business type. Double-counting INSS is a common error.

### Cross-check 3: Carnê-leão vs ajuste anual alignment (autônomo only)

| Carnê-leão (monthly) | Ajuste Anual | Rule |
|----------------------|-------------|------|
| Rendimentos de PF mensais | Same amounts in ficha Rendimentos Recebidos de PF | Monthly totals must sum to annual |
| Deduções livro-caixa mensais | Total livro-caixa in ajuste anual | Monthly cannot exceed monthly revenue |
| Imposto pago (DARFs 0190) | Imposto pago / retido (ficha Imposto Pago/Retido código 1) | Credited against annual liability |

**If mismatch:** Carnê-leão that was not properly calculated/paid monthly results in multa (0.33%/day up to 20%) + juros SELIC. Flag exposure in reviewer brief.

### Cross-check 4: Nota fiscal issuance verification

| Item | Check | Rule |
|------|-------|------|
| Total notas fiscais emitidas | Must match or exceed rendimentos declared | Art. 1 LC 116/2003 (services), ICMS legislation (commerce) |
| ISS retained on notas | Must match ISS paid/retained amount | Municipal rates per LC 116/2003 |
| IRRF retained on notas (PJ services) | Must match informe de rendimentos from each PJ | 1.5% standard for services (Art. 647 RIR/2018) |

**If inconsistency:** Missing notas fiscais is a compliance risk. Flag for reviewer.

### Cross-check 5: Bens e direitos consistency

| Prior Year | Current Year | Rule |
|-----------|-------------|------|
| Bens e direitos 31/12/2024 | Bens e direitos 31/12/2025 | Changes must be explained (acquisitions, sales, depreciation) |
| Dívidas e ônus 31/12/2024 | Dívidas e ônus 31/12/2025 | Changes must be explained (new debt, payments) |

**If inconsistency:** Unexplained increases in bens without corresponding income is a red flag for malha fina. Flag.

---

## Section 4 -- Final reviewer package contents

### Documents

1. **Executive summary** -- one-page overview: business type, rendimentos, imposto devido, imposto pago, restituição/saldo a pagar
2. **IRPF worksheet** -- ficha-by-ficha with formulas (all fichas relevant to self-employed)
3. **Carnê-leão schedule** (autônomo) OR **DAS reconciliation** (MEI/Simples) -- monthly breakdown
4. **Livro-caixa summary** (autônomo) -- monthly revenue and deductible expenses
5. **INSS reconciliation** -- contribution type, monthly payments, total, ceiling verification
6. **ISS reconciliation** (if applicable) -- municipal rates, amounts paid, alignment with notas
7. **Bens e direitos / dívidas e ônus schedule** -- complete asset and liability declaration
8. **Cross-skill reconciliation summary** -- all five cross-checks with pass/fail and notes
9. **Reviewer brief** -- comprehensive narrative with positions, citations, flags, self-check results
10. **Client action list** -- what the client needs to do, with dates and amounts

### Reviewer brief contents

```markdown
# Complete Return Package: [Client Name] -- Ano-calendário 2025 / Exercício 2026

## Executive Summary
- Filing status: [Single / Married / União estável]
- Residence: Brazil (full-year), [municipality] - [state]
- Business type: MEI / Simples Nacional (Anexo [X]) / Autônomo PF
- CNPJ: [number] (or CPF only for autônomo)
- Total rendimentos tributáveis: R$ X
- Total deduções: R$ X
- Base de cálculo IRPF: R$ X
- Imposto devido: R$ X
- IRRF retido na fonte: R$ X
- Carnê-leão pago: R$ X (autônomo only)
- Imposto a restituir / saldo a pagar: R$ X
- INSS total contribuído: R$ X
- DAS total pago: R$ X (MEI/Simples only)

## IRPF -- Declaração de Ajuste Anual
[Content from br-irpf output]

### Rendimentos Tributáveis
- Rendimentos recebidos de PJ: R$ X
  - [Client breakdown with IRRF retained per PJ]
- Rendimentos recebidos de PF (carnê-leão): R$ X
- Pró-labore (Simples): R$ X

### Rendimentos Isentos e Não Tributáveis
- Parcela isenta MEI: R$ X (32% serviços / 8% comércio)
- Distribuição de lucros isentos (Simples): R$ X
- Rendimentos de poupança: R$ X
- Outros isentos: R$ X

### Rendimentos Sujeitos à Tributação Exclusiva/Definitiva
- Aplicações financeiras: R$ X
- 13º salário: R$ X (if CLT)

### Deduções Legais (modelo completa)
- INSS: R$ X
- Dependentes: R$ X (R$2,275.08 x [n])
- Despesas médicas: R$ X (sem limite)
- Despesas de educação: R$ X (limite R$3,561.50 por pessoa)
- PGBL: R$ X (limite 12% rendimentos tributáveis)
- Pensão alimentícia: R$ X
- Livro-caixa: R$ X

### Desconto Simplificado (modelo simplificada)
- 20% dos rendimentos tributáveis: R$ X
- Limite: R$16,754.34
- Modelo mais vantajoso: [completa / simplificada] -- economia de R$ X

### Cálculo do Imposto
- Base de cálculo: R$ X
- Tabela progressiva 2025:
  - Até R$2,259.20/mês (R$27,110.40/ano): isento
  - R$2,259.21 - R$2,826.65: 7.5%
  - R$2,826.66 - R$3,751.05: 15%
  - R$3,751.06 - R$4,664.68: 22.5%
  - Acima R$4,664.68: 27.5%
- Imposto devido: R$ X
- Dedução do imposto: R$ X
- Imposto líquido: R$ X

### Imposto Pago / Retido
- IRRF retido na fonte (PJ): R$ X
- Carnê-leão pago (DARFs 0190): R$ X
- Imposto complementar pago: R$ X
- Total creditado: R$ X
- Restituição / saldo a pagar: R$ X

## Carnê-Leão (Autônomo only)
[Monthly schedule]
- Month | Rendimento PF | Livro-caixa | INSS | Dependentes | Base | Imposto | DARF pago | Diferença
- Jan-Dec breakdown
- Total annual: imposto devido R$ X, pago R$ X, diferença R$ X
- Multa/juros exposure if underpaid: [calculation or "none"]

## DAS / DASN-SIMEI (MEI only)
[Content from br-simples output]
- Faturamento bruto 2025: R$ X
- vs limit R$81,000: [within / exceeded]
- Monthly DAS payments: R$75.90 x 12 = R$910.80 (base serviços 2025)
- DAS paid: R$ X
- DAS em atraso: R$ X (if any)
- Parcela isenta: R$ X (32% serviços)
- Parcela tributável para IRPF: R$ X

## DAS Reconciliation (Simples Nacional only)
[Content from br-simples output]
- Anexo: [I-V]
- Fator R: [value] (Anexo V -> III migration if >= 28%)
- RBT12 (receita bruta 12 meses): R$ X
- Alíquota nominal: [rate]%
- Parcela a deduzir: R$ X
- Alíquota efetiva: [rate]%
- Monthly DAS due vs paid: [schedule]
- Total DAS due: R$ X
- Total DAS paid: R$ X
- Diferença: R$ X

## INSS
[Content from br-inss output]
- Contribution type: [contribuinte individual 20% / plano simplificado 11% / MEI 5%]
- Monthly base: R$ X
- Teto previdenciário: R$7,786.02 (2025)
- Monthly INSS due: R$ X
- Monthly paid: [schedule]
- Total due: R$ X
- Total paid: R$ X
- Months contributed: [count]/12

## ISS (if applicable)
[Content from br-iss output]
- Municipality: [name]
- ISS rate: [rate]%
- ISS due: R$ X
- ISS paid/retained: R$ X
- Alignment with notas fiscais: [pass/fail]

## Bens e Direitos / Dívidas e Ônus
- Bens e direitos 31/12/2025: R$ X total
  - [Item list with código, descrição, situação 31/12/2024, situação 31/12/2025]
- Dívidas e ônus 31/12/2025: R$ X total
  - [Item list]
- Year-over-year changes explained: [list]

## Cross-skill Reconciliation
- Revenue across obligations: [pass/fail]
- INSS vs IRPF deduction: [pass/fail]
- Carnê-leão vs ajuste anual: [pass/fail]
- Nota fiscal issuance: [pass/fail]
- Bens e direitos consistency: [pass/fail]

## Reviewer Attention Flags
[Aggregated from all upstream skills]
- T2 items requiring contador confirmation
- Carnê-leão underpayment exposure (multa + juros SELIC)
- MEI faturamento approaching R$81,000 limit
- Simples Nacional faturamento approaching sublimite or R$4.8M limit
- Fator R calculation for Anexo V -> III migration
- Livro-caixa deductions exceeding monthly revenue
- Bens e direitos year-over-year changes without income explanation
- PGBL exceeding 12% limit
- Malha fina risk indicators

## Positions Taken
[List with legislation citations]
- e.g., "Livro-caixa deductions: R$24,000 -- Art. 75-78 RIR/2018 (Decreto 9.580/2018)"
- e.g., "Parcela isenta MEI 32% serviços -- Art. 15 Lei 9.249/1995 c/c Art. 26 §1° LC 123/2006"
- e.g., "PGBL deduction R$9,600 (within 12% limit) -- Art. 11 Lei 9.532/1997"
- e.g., "Despesas médicas R$8,400 (full deduction, no limit) -- Art. 80 RIR/2018"

## Planning Notes for 2026
- Carnê-leão mensal: obrigatório se rendimentos de PF excedem faixa de isenção
- MEI limit R$81,000: current faturamento trajectory for 2026
- INSS: verify contribution plan adequacy for aposentadoria objectives
- DAS payment calendar (MEI/Simples): dia 20 de cada mês
- Legislative changes: verify tabela progressiva IRPF 2026, salário mínimo, teto INSS
- Obrigações acessórias: DIRF (being phased out), EFD-Reinf, eSocial

## Client Action List

### Immediate (before last business day of May 2026 -- IRPF deadline):
1. Review this return package with your contador
2. Submit IRPF Declaração de Ajuste Anual via programa IRPF 2026 (Receita Federal)
3. Pay saldo a pagar R$ X (or first quota of up to 8 parcelas -- mínimo R$50 via DARF código 0211)
4. Submit DASN-SIMEI (MEI) -- deadline 31 May 2026
5. Verify all DAS 2025 payments are current (regularize any em atraso with juros + multa)

### Monthly obligations (2026):
- DAS payment (MEI/Simples): dia 20 de cada mês
- Carnê-leão (autônomo receiving from PF): last business day of month following receipt
- INSS GPS (autônomo): dia 15 do mês seguinte
- ISS (if not in Simples): per municipal calendar

### IRPF quota payments (if parcelamento):
- 1ª quota: last business day May 2026
- 2ª quota: last business day June 2026 (+ SELIC)
- Through 8ª quota: last business day December 2026 (+ SELIC acumulada)

### Ongoing:
1. Emit nota fiscal for all services/products (obrigatório -- LC 116/2003, ICMS legislation)
2. Maintain livro-caixa monthly (autônomo) -- Art. 75 RIR/2018
3. Keep all receipts and invoices for 5 years (Art. 195 CTN -- decadência)
4. Calculate and pay carnê-leão monthly if receiving from PF
5. Monitor MEI faturamento vs R$81,000 limit / Simples vs R$4.8M
6. Update bens e direitos register for any acquisitions/disposals
7. Pay INSS monthly to maintain contribution count for aposentadoria
```

---

## Section 5 -- Refusals

**R-BR-1 -- Upstream skill did not run.** Name the specific skill. Note: this is a warning, not a hard stop. Continue with available data and flag the gap.

**R-BR-2 -- Upstream self-check failed.** Name the specific check and note it in the reviewer brief. Continue.

**R-BR-3 -- Cross-skill reconciliation failed.** Name the specific reconciliation and describe the discrepancy. Flag for reviewer but continue.

**R-BR-4 -- Intake incomplete.** Specific missing intake items prevent computation. List what is missing and ask the user for the specific data point.

**R-BR-5 -- Out-of-scope item discovered during assembly.** E.g., ganhos de capital (GCAP), foreign income requiring carnê-leão on foreign-source, or rental income requiring separate DARF. Flag and exclude from computation.

---

## Section 6 -- Self-checks

**Check BR1 -- All upstream skills executed.** br-irpf, br-inss, and the applicable br-simples or carnê-leão path produced output.

**Check BR2 -- Revenue reconciliation passes.** Total rendimentos across IRPF, DAS/carnê-leão, and notas fiscais align within R$100.

**Check BR3 -- INSS correctly classified and deducted.** INSS path matches business type. No double-counting between DAS component and separate GPS.

**Check BR4 -- Carnê-leão aligns with ajuste anual (autônomo).** Monthly totals sum to annual. DARFs paid credited correctly.

**Check BR5 -- MEI parcela isenta correctly calculated.** Correct percentage (32% serviços, 8% comércio, 8% indústria, 16% transporte) applied to faturamento.

**Check BR6 -- Simples Anexo correctly determined.** CNAE maps to correct Anexo. Fator R calculated if Anexo V activity.

**Check BR7 -- Modelo IRPF (completa vs simplificada) optimised.** Both models computed, more favourable selected.

**Check BR8 -- Bens e direitos complete and consistent.** All assets > R$5,000 declared. Year-over-year changes explained.

**Check BR9 -- Deduções legais within limits.** Educação per-person limit R$3,561.50. PGBL 12% limit. Dependentes R$2,275.08 each.

**Check BR10 -- Filing calendar is complete.** IRPF deadline, DASN-SIMEI deadline, DAS monthly, carnê-leão monthly, INSS monthly all listed.

**Check BR11 -- No form numbers in user-facing messages.** Internal notes can reference fichas and artigos; user-facing messages use plain Portuguese/English where possible.

**Check BR12 -- Reviewer brief contains legislation citations.** Every position references specific articles of RIR/2018, LC 123/2006, Lei 9.249/1995, CTN, or other applicable legislation.

---

## Section 7 -- Output files

The final output is **three files**:

1. **`[client_slug]_2025_br_master.xlsx`** -- Single master workbook containing every worksheet. Sheets include: Cover, IRPF Summary (all fichas), Carnê-Leão Monthly Schedule (autônomo) or DAS Reconciliation (MEI/Simples), Livro-Caixa (autônomo), INSS Reconciliation, ISS Reconciliation, Bens e Direitos, Dívidas e Ônus, Cross-Check Summary. Use live formulas where possible -- e.g., IRPF rendimentos references carnê-leão/DAS sheets; INSS deduction references INSS sheet; tabela progressiva is formula-driven. Verify no `#REF!` errors. Verify computed values match within R$1 before shipping.

2. **`reviewer_brief.md`** -- Single markdown file covering all sections from Section 4 above: executive summary, IRPF, carnê-leão/DAS, INSS, ISS, bens e direitos, cross-skill reconciliation, flags, positions, planning notes.

3. **`client_action_list.md`** -- Single markdown file with step-by-step actions: immediate filings and payments, monthly DAS/carnê-leão/INSS calendar for 2026, ongoing compliance reminders.

**If execution runs out of context mid-build:** produce whatever is complete, then state at the end which of the three files were not produced or are partial.

**All files are placed in `/mnt/user-data/outputs/` and presented to the user via the `present_files` tool at the end.**

---

## Section 8 -- Cross-skill references

**Inputs:**
- `br-freelance-intake` -- structured intake package (JSON)
- `br-irpf` -- IRPF Declaração de Ajuste Anual computation output
- `br-simples` -- DAS/DASN reconciliation output (MEI or Simples)
- `br-inss` -- INSS contribution reconciliation output
- `br-iss` -- ISS reconciliation output (if applicable)

**Outputs:** The final reviewer package. No downstream skill.

---

## Section 9 -- Known gaps

1. PDF form filling is not automated. The reviewer uses the worksheets to fill the IRPF via the programa da Receita Federal.
2. E-filing is handled by the reviewer via programa IRPF or e-CAC portal, not by this skill.
3. Payment execution is the client's responsibility; the skill only provides instructions, DARFs, and amounts.
4. Ganhos de capital (GCAP) on asset sales require separate DARF and are out of scope.
5. Foreign-source income (rendimentos do exterior) with carnê-leão on foreign-source is out of scope.
6. Rental income (aluguéis) requiring separate carnê-leão treatment is out of scope.
7. Espólio (estate) returns are out of scope.
8. The package is complete only for ano-calendário 2025; 2026 appears only as prospective planning.
9. Retificadora (amended return) preparation is supported only if the original was filed during this workflow.
10. DIRF/EFD-Reinf employer obligations for Simples with employees are out of scope.

### Change log
- **v1.0 (May 2026):** Initial draft. Modelled on mt-return-assembly v0.1 adapted for Brazil jurisdiction with four content skills (IRPF, Simples/DAS, INSS, ISS).

## End of skill


---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
