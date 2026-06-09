---
name: br-freelance-intake
description: ALWAYS USE THIS SKILL when a user asks for help preparing their Brazil tax returns AND mentions freelancing, self-employment, autônomo, MEI, microempreendedor individual, or Simples Nacional. Trigger on phrases like "help me do my taxes", "prepare my IRPF", "I'm a freelancer in Brazil", "I'm MEI", "I'm autônomo", "do my taxes as a contractor", "prepare my declaração de ajuste anual", or any similar phrasing where the user is a Brazil-resident self-employed individual needing tax return preparation. This is the REQUIRED entry point for the Brazil self-employed tax workflow -- every other skill in the stack (br-irpf, br-simples, br-inss, br-return-assembly) depends on this skill running first to produce a structured intake package. Uses upload-first workflow -- the user dumps all their documents and the skill infers as much as possible before asking questions. Uses ask_user_input_v0 for structured questions instead of one-at-a-time prose. Built for speed. Brazil full-year residents only; self-employed individuals, MEI, and Simples Nacional sole proprietors.
version: 1.0
jurisdiction: BR
category: orchestrator
---

# Brazil Self-Employed Intake Skill v1.0

## What this file is

The intake orchestrator for Brazil-resident self-employed individuals. Every downstream Brazil content skill (br-irpf, br-simples, br-inss, br-iss) and the assembly orchestrator (br-return-assembly) depend on this skill running first to produce a structured intake package.

This skill does not compute any tax figures. Its job is to collect all the facts, parse all the documents, confirm everything with the user, and hand off a clean intake package to `br-return-assembly`.

---

## Design principles

v1.0 follows the upload-first, inference-then-confirm pattern:

1. **Compact refusal sweep** using `ask_user_input_v0` -- 3 interactive questions, ~30 seconds.
2. **Upload-first workflow** -- after the refusal check, the user dumps everything they have.
3. **Inference pass** -- Claude parses every document and extracts as much as possible.
4. **Gap-filling only** -- Claude asks the user ONLY about what is missing, ambiguous, or needs confirmation.
5. **Single confirmation pass** at the end -- show the full picture, let the user correct anything wrong, hand off to downstream skills.

Target: intake completes in 5 minutes for a prepared user, 15 minutes for a user who has to go fetch documents.

## Critical operating principles

**Do not narrate the workflow.** Do not say "Phase 1," "Phase 2," "Now I'll ask you about deductions." Just do the work.

**Do not ask questions that have already been answered.** If the refusal check established the user is MEI, do not later ask about business type. Track what is known.

**Do not ask about things visible in uploaded documents.** If the bank statement shows monthly DAS payments, do not ask "did you pay DAS." Confirm what you see, do not re-ask.

**Use `ask_user_input_v0` for any multiple-choice question.** Text input is only for genuinely open-ended data (names, addresses, specific amounts when they cannot be inferred).

**Prefer batching.** Ask 3 related questions in a single message when they do not depend on each other's answers.

**Be terse but complete.** No hedging, no "let me know if you have questions," no "I hope this helps."

**Exception for blocking decisions.** If a single question determines whether the user is in-scope or out-of-scope, ask it standalone.

---

## Section 1 -- The opening

When triggered, respond with ONE message that:

1. One-line greeting (no paragraph of expectation-setting)
2. One-line summary of the flow (scope check -> upload -> gaps -> handoff to return assembly)
3. One-line reviewer reminder (must be reviewed by qualified contador before filing)
4. Launch the refusal sweep immediately using `ask_user_input_v0`

**Example first message:**

> Vamos preparar suas declarações de 2025. Checagem rápida de escopo, depois você envia seus documentos, e eu preencho as lacunas. Tempo estimado: 10 minutos.
>
> Lembrete: tudo que eu produzir precisa ser revisado e assinado por um contador habilitado antes de protocolar qualquer coisa na Receita Federal. Não sou substituto de revisão profissional.
>
> Scope check:

Then immediately call `ask_user_input_v0` with the refusal questions.

**Do NOT:**
- Write a welcome paragraph
- Explain the phases
- Ask "are you ready to start"
- List what documents you will eventually need
- Give a disclaimer beyond the one reviewer line

---

## Section 2 -- Refusal sweep (compact)

Present the refusal sweep as a single `ask_user_input_v0` call with 3 questions, all single-select.

**The 3 questions to ask first:**

```
Q1: "Brazil residency in 2025?"
    Options: ["Full year", "Part year (immigrated/emigrated)", "Did not live in Brazil"]

Q2: "Business type?"
    Options: ["MEI (microempreendedor individual)", "Simples Nacional (ME/EPP, not MEI)", "Autônomo / pessoa física (CPF, no CNPJ)", "Lucro Presumido", "Lucro Real", "Not sure"]

Q3: "Employment status in 2025?"
    Options: ["Fully self-employed (no employer)", "CLT employed + side self-employment", "CLT employed only (no self-employment income)"]
```

**After the response, evaluate:**

- **Q1 = Full year** -> continue
- **Q1 = Part year** -> stop. "Sou configurado apenas para residentes de ano inteiro no Brasil. Residentes parciais têm regras diferentes sobre renda de fonte mundial vs. fonte brasileira na Declaração de Saída Definitiva. Você precisa de um contador especializado em declarações de não-residente."
- **Q1 = Did not live in Brazil** -> stop. "Non-residents have different filing obligations. You need a contador who handles non-resident returns and Declaração de Saída Definitiva."

- **Q2 = MEI** -> continue. Simplified path: DASN-SIMEI annual declaration + IRPF if obligated.
- **Q2 = Simples Nacional** -> continue. DAS calculation path + IRPF declaração de ajuste anual.
- **Q2 = Autônomo / pessoa física** -> continue. Carnê-leão monthly + IRPF ajuste anual path.
- **Q2 = Lucro Presumido** -> stop. "Lucro Presumido envolve IRPJ, CSLL, PIS/COFINS cumulativo com regras corporativas separadas. Você precisa de um contador familiarizado com apuração de Lucro Presumido."
- **Q2 = Lucro Real** -> stop. "Lucro Real é o regime tributário mais complexo do Brasil, com escrituração contábil completa, LALUR, e obrigações acessórias extensas. Você precisa de um contador especializado em Lucro Real."
- **Q2 = Not sure** -> decision tree follow-up:
  "Você tem CNPJ? Se sim, qual o regime tributário no cartão CNPJ (Receita Federal)?
  - CNPJ com 'MEI' → MEI
  - CNPJ com 'Simples Nacional' → Simples
  - CNPJ com 'Lucro Presumido' ou 'Lucro Real' → fora do escopo
  - Sem CNPJ, recebe como pessoa física → Autônomo/PF"

- **Q3 = Fully self-employed** -> continue
- **Q3 = CLT employed + side self-employment** -> continue with a flag: need to consolidate rendimentos tributáveis from both sources on IRPF. Informe de rendimentos from employer required.
- **Q3 = CLT employed only** -> stop. "Você não tem renda de trabalho autônomo. Este workflow é para autônomos e MEI. Seu empregador cuida da retenção de IRRF. Se você tem outras rendas (aluguel, investimentos), precisa de um contador para sua declaração completa de IRPF."

**After Q1-Q3 pass, route based on Q2 answer and ask the second batch:**

**For MEI:**
```
Q4: "MEI revenue in 2025?"
    Options: ["Under R$81,000", "Over R$81,000 (exceeded MEI limit)", "Not sure"]

Q5: "Did you have other income besides MEI in 2025?"
    Options: ["No, MEI only", "Yes, CLT employment income", "Yes, rental income", "Yes, investment income", "Yes, multiple other sources"]

Q6: "Marital status?"
    Options: ["Single", "Married (comunhão parcial)", "Married (comunhão universal)", "Married (separação total)", "Stable union (união estável)"]
```

**For Simples Nacional:**
```
Q4: "Simples Nacional revenue in 2025?"
    Options: ["Under R$360,000 (ME)", "R$360,000 - R$4,800,000 (EPP)", "Over R$4,800,000 (exceeded Simples limit)", "Not sure"]

Q5: "Primary activity type?"
    Options: ["Services (Anexo III -- contabilidade, engenharia, etc.)", "Services (Anexo IV -- advocacia, limpeza, vigilância)", "Services (Anexo V -- TI, consultoria, publicidade)", "Commerce (Anexo I)", "Industry (Anexo II)"]

Q6: "Marital status?"
    Options: ["Single", "Married (comunhão parcial)", "Married (comunhão universal)", "Married (separação total)", "Stable union (união estável)"]
```

**For Autônomo/PF:**
```
Q4: "How do you receive payments?"
    Options: ["Directly from individuals (pessoa física) -- carnê-leão obrigatório", "From companies (pessoa jurídica) -- IRRF na fonte", "Both individuals and companies", "Via platforms (Uber, iFood, 99, etc.)"]

Q5: "Do you pay INSS?"
    Options: ["Yes, contribuinte individual (20% sobre remuneração)", "Yes, plano simplificado (11% sobre salário mínimo)", "Yes, MEI (via DAS)", "No / not sure"]

Q6: "Marital status?"
    Options: ["Single", "Married (comunhão parcial)", "Married (comunhão universal)", "Married (separação total)", "Stable union (união estável)"]
```

**Evaluate Q4 (MEI):**
- Under R$81,000 -> continue. Standard DASN-SIMEI + IRPF if other income or assets trigger obligation.
- Over R$81,000 -> flag: MEI desenquadramento. If up to R$97,200 (20% excess), pay DAS complementar on excess. If over R$97,200, retroactive Simples Nacional from January. T2 for reviewer.
- Not sure -> "Check your total faturamento bruto in 2025. Sum all notas fiscais emitted. The MEI annual limit is R$81,000 (or proportional if you opened mid-year)."

**Evaluate Q4 (Simples Nacional):**
- Under R$360,000 -> ME classification. Standard DAS.
- R$360,000-R$4,800,000 -> EPP classification. Standard DAS, higher sublimite may apply for ISS/ICMS.
- Over R$4,800,000 -> stop. "Faturamento acima de R$4,8 milhões exclui do Simples Nacional. Você precisa migrar para Lucro Presumido ou Real. Consulte um contador."

**Total time:** ~45 seconds if the user taps through.

---

## Section 3 -- The dump

Once the refusal sweep passes, immediately ask for the document dump. Single message. No preamble.

**Example (Autônomo path):**

> Escopo confirmado. Agora envie tudo que você tem de 2025 -- tudo de uma vez:
>
> - Extratos bancários de 2025 (conta PF e/ou PJ) -- CSV ou PDF
> - Recibos de pagamento / notas fiscais emitidas em 2025
> - Recibos de despesas dedutíveis (livro-caixa)
> - Comprovantes de pagamento do carnê-leão (DARFs código 0190)
> - Informe de rendimentos de pessoa jurídica (se recebeu de empresas)
> - Informe de rendimentos de instituição financeira (bancos, corretoras)
> - Comprovante de INSS recolhido (GPS ou DAS)
> - Declaração de IRPF do ano anterior (2024)
> - Notas fiscais de aquisição de bens (computador, equipamento, veículo)
> - Comprovantes de despesas médicas e educação (para deduções legais)
> - Comprovantes de previdência privada (PGBL)
> - Qualquer correspondência da Receita Federal
> - Qualquer outro documento fiscal que você tenha
>
> Não se preocupe em organizar -- eu descubro o que cada arquivo é. Arraste e solte quando estiver pronto.

**Example (MEI path):**

> Escopo confirmado. Envie tudo que você tem de 2025:
>
> - Relatório mensal de faturamento (ou notas fiscais emitidas)
> - Comprovantes de pagamento do DAS mensal
> - Extratos bancários (conta PJ e PF)
> - DASN-SIMEI do ano anterior (se tiver)
> - Informe de rendimentos de outras fontes (emprego CLT, investimentos)
> - Comprovante de despesas médicas e educação
> - Comprovantes de previdência privada (PGBL)
> - Qualquer correspondência da Receita Federal

Then wait. Do not ask any other questions while waiting.

**If the user uploads a partial dump and says "that's what I have":** move to inference. Do not demand more. Request specific missing items during gap-filling.

**If the user says "I don't know what I have":** Switch to guided mode:
> Verifique estes lugares:
> - App do banco: baixe extratos de 2025 como PDF ou CSV
> - Portal e-CAC da Receita Federal: baixe declarações anteriores, informes de rendimentos
> - Email: pesquise por "nota fiscal", "DARF", "DAS", "informe de rendimentos"
> - Seu contador do ano passado, se teve um
> - App da previdência (Meu INSS): extrato de contribuições
> - Corretora de investimentos: informe de rendimentos
>
> Volte quando tiver algo para enviar. Trabalho com o que você trouxer.

---

## Section 4 -- The inference pass

When documents arrive, parse each one. For each document, extract:

**Bank statement:**
- Total deposits (candidate gross receipts)
- Recurring inflows (client payments with names/CPF/CNPJ)
- Outflows to Receita Federal (DARFs -- carnê-leão código 0190, IRPF código 0211, IRPJ)
- Outflows for DAS (MEI or Simples)
- INSS payments (GPS or via DAS)
- ISS payments (if applicable)
- Outflows to suppliers (business expenses)
- Equipment purchases
- Transfers between PJ and PF accounts
- Medical expenses (potential deduction)
- Education expenses (potential deduction)
- PGBL contributions (previdência privada)

**Notas fiscais emitidas:**
- Client names/CNPJ and amounts
- Service codes (CNAE / código de serviço municipal)
- ISS retained or paid
- IRRF retained (1.5% for services to PJ)
- Total faturamento reconciliation against bank deposits
- Any nota fiscal de produto (ICMS/IPI implications)

**Informes de rendimentos (from companies):**
- Rendimentos tributáveis
- IRRF retido na fonte
- Contribuição previdenciária retida
- 13º salário, férias (if CLT)

**Informe de rendimentos de instituição financeira:**
- Rendimentos de aplicações financeiras (renda fixa, renda variável)
- IR retido na fonte sobre aplicações
- Saldo em conta corrente e poupança on 31/12/2025

**Livro-caixa (expense book):**
- Despesas dedutíveis: aluguel de escritório, material de escritório, conta de telefone/internet (parcela profissional), transporte, despesas com empregados (se autônomo com até 1 empregado doméstico)
- Receitas mensais
- Monthly balance (receitas minus despesas)

**Prior year IRPF:**
- Prior year rendimentos tributáveis
- Prior year deduções legais
- Prior year imposto devido and pago
- Bens e direitos (assets and rights -- carried forward)
- Dívidas e ônus reais (debts)

**DAS/GPS payment receipts:**
- Monthly DAS payments (MEI: R$75.90 base 2025; Simples: variable by faturamento and anexo)
- GPS payments (autônomo: 20% sobre remuneração or 11% plano simplificado)

**After parsing everything, build an internal inference object.** Do not show the raw inference yet -- transform it into a compact summary for the user in Section 5.

---

## Section 5 -- The confirmation

After inference, present a single compact summary message. Use a structured format that is fast to scan. Invite the user to correct anything wrong.

**Example summary message (Autônomo path):**

> Aqui está o que extraí dos seus documentos. Confira e me diga o que está errado.
>
> **Identidade**
> - Maria Silva, solteira
> - Residente no Brasil ano inteiro (São Paulo - SP)
> - Autônoma / pessoa física, CPF 123.456.789-00
> - Atividade: consultoria em tecnologia
>
> **Receita (do extrato bancário + notas fiscais)**
> - Rendimentos tributáveis recebidos de PJ: ~R$120,000
>   - TechCorp Ltda: R$72,000 (mensal)
>   - ConsultBR SA: R$36,000 (projetos)
>   - Diversos PF: R$12,000
> - IRRF retido na fonte (PJ): ~R$1,800
>
> **Carnê-leão (rendimentos de PF)**
> - Rendimentos de PF: R$12,000 (R$1,000/mês)
> - Carnê-leão pago (DARFs 0190): R$0 (mensal abaixo da faixa de isenção individual)
> - Verificar: carnê-leão deveria ter sido calculado mensalmente sobre total de rendimentos PF
>
> **Despesas dedutíveis -- Livro-caixa**
> - Aluguel de escritório: R$14,400
> - Internet/telefone: R$3,600 (TBD -- percentual profissional)
> - Software/SaaS: R$4,800
> - Material de escritório: R$1,200
> - Total livro-caixa: ~R$24,000
>
> **INSS**
> - Contribuinte individual (20%): R$1,412.00/mês x 12 = R$16,944 (teto)
> - Verificar: contribuição sobre teto do INSS (R$7,786.02 em 2025 x 20% = R$1,557.20/mês)
>
> **Deduções legais (IRPF)**
> - Despesas médicas: R$8,400 (sem limite)
> - Despesas de educação: R$3,561.50 (limite 2025)
> - PGBL: R$9,600 (verificar limite 12% da renda bruta tributável)
> - Dependentes: nenhum
>
> **Bens e direitos (do IRPF anterior)**
> - Apartamento: R$450,000 (custo aquisição)
> - Veículo: R$85,000
> - Conta corrente + poupança 31/12/2025: R$42,000
> - Investimentos (CDB, fundos): R$120,000
>
> **Flags que já identifiquei:**
> 1. Telefone/internet -- precisa do percentual profissional
> 2. Carnê-leão sobre rendimentos de PF -- verificar se foi calculado e pago mensalmente
> 3. PGBL -- verificar se não excede 12% da renda bruta tributável
> 4. IRRF retido na fonte -- confirmar valores com informes de rendimentos oficiais
> 5. Livro-caixa não pode exceder a receita (despesas limitadas à receita mensal)
>
> **Está correto? Responda "ok" ou me diga o que corrigir.**

---

## Section 6 -- Gap filling

After the user confirms the summary (or corrects it), ask about things that cannot be inferred from documents. Use `ask_user_input_v0` where possible.

**Things that usually cannot be inferred:**

1. **Modelo de declaração** -- Completa (deduções legais) vs simplificada (desconto de 20%, limite R$16,754.34 em 2025).
2. **Dependentes** -- Cannot always tell from documents.
3. **Pensão alimentícia** -- Judicial or by escritura pública.
4. **Home office** -- Percentage of home used professionally for livro-caixa.
5. **Private use percentage** -- Phone, internet, vehicle.
6. **Bens e direitos updates** -- New acquisitions or sales in 2025.
7. **Dívidas e ônus reais** -- Debts over R$5,000 on 31/12/2025.
8. **Rendimentos isentos** -- Poupança, dividends from PJ (until new rules), FGTS, seguro desemprego.
9. **Rendimentos do exterior** -- If any foreign-source income.

**Modelo de declaração:**

Call `ask_user_input_v0` with:

```
Q: "Which IRPF model?"
   Options: [
     "Completa (deduções legais -- I have medical, education, PGBL, dependents)",
     "Simplificada (desconto de 20%, max R$16,754.34)",
     "Calculate both and pick the better one"
   ]
```

If option 3 -> compute both models and select the one with lower imposto devido. Flag as T2 to confirm.

**Dependentes:**

Call `ask_user_input_v0` with:

```
Q: "Dependentes for IRPF 2025?"
   Options: [
     "None",
     "1 dependent",
     "2 dependents",
     "3+ dependents (tell me details)"
   ]
```

If dependents -> ask for name, CPF, date of birth, relationship (filho, cônjuge, companheiro, pai/mãe). Deduction: R$2,275.08 per dependent (2025).

**Livro-caixa percentages:**

Call `ask_user_input_v0` with:

```
Q: "Home office -- percentual de uso profissional?"
   Options: [
     "100% -- escritório dedicado separado da residência",
     "75-100% -- cômodo exclusivo para trabalho",
     "50-75% -- cômodo compartilhado",
     "Under 50%",
     "No home office (separate business premises)"
   ]
```

Flag all private-use percentages as T2 -- contador must confirm.

---

## Section 7 -- The final handoff

Once gap-filling is done, produce a final handoff message and hand off to `br-return-assembly`.

**Decision tree for routing:**

- **MEI** -> DASN-SIMEI (simplified annual declaration) + IRPF (if obligated: other income > isenção, bens > R$800,000, rendimentos isentos > R$200,000, etc.)
- **Simples Nacional** -> DAS reconciliation + IRPF declaração de ajuste anual (pró-labore as rendimentos tributáveis, distributed profit as isento)
- **Autônomo/PF** -> Carnê-leão reconciliation + IRPF declaração de ajuste anual (livro-caixa deductions)

**Example handoff message:**

> Intake completo. Seguindo para a montagem das declarações:
>
> Autônoma/PF, solteira, CPF, residente ano inteiro. Rendimentos tributáveis R$120,000, despesas livro-caixa R$24,000, renda líquida estimada ~R$96,000.
>
> Vou preparar o pacote completo:
> 1. Reconciliação do carnê-leão mensal (DARFs código 0190)
> 2. IRPF -- Declaração de Ajuste Anual (modelo completa ou simplificada)
> 3. Reconciliação INSS
> 4. ISS (se aplicável)
>
> Você receberá:
> 1. Uma planilha Excel com todos os cálculos e fórmulas
> 2. Um resumo para o revisor com posições, citações legais, e alertas
> 3. Um calendário de obrigações com prazos e valores
>
> Começando agora.

Then internally invoke `br-return-assembly` with the structured intake package.

---

## Section 8 -- Structured intake package (internal format)

The downstream skill (`br-return-assembly`) consumes a JSON structure. It is internal and not shown to the user unless they ask. Key fields:

```json
{
  "jurisdiction": "BR",
  "tax_year": 2025,
  "taxpayer": {
    "name": "",
    "cpf": "",
    "cnpj": "",
    "birth_year": 0,
    "marital_status": "single | married_comunhao_parcial | married_comunhao_universal | married_separacao | uniao_estavel",
    "residency": "full_year",
    "business_type": "mei | simples_nacional | autonomo_pf",
    "cnae_principal": "",
    "employment_status": "self_employed | employed_plus_side",
    "municipality": "",
    "state": ""
  },
  "income": {
    "rendimentos_tributaveis_pj": 0,
    "rendimentos_tributaveis_pf": 0,
    "irrf_retido": 0,
    "rendimentos_isentos": 0,
    "rendimentos_sujeitos_tributacao_exclusiva": 0,
    "faturamento_bruto_mei_simples": 0,
    "client_breakdown": []
  },
  "expenses": {
    "livro_caixa": [],
    "total_livro_caixa": 0,
    "mixed_use": [],
    "despesas_medicas": 0,
    "despesas_educacao": 0,
    "pgbl": 0,
    "pensao_alimenticia": 0
  },
  "carne_leao": {
    "monthly_receipts_pf": [],
    "monthly_darfs_paid": [],
    "total_paid": 0
  },
  "inss": {
    "contribution_type": "contribuinte_individual_20 | plano_simplificado_11 | mei_das",
    "monthly_payments": [],
    "total_paid": 0
  },
  "mei": {
    "faturamento_bruto": 0,
    "das_payments": [],
    "das_total": 0,
    "parcela_isenta_servicos": 0.32,
    "parcela_isenta_comercio": 0.08,
    "parcela_isenta_industria": 0.08,
    "parcela_isenta_transporte": 0.16
  },
  "simples_nacional": {
    "faturamento_bruto_12m": 0,
    "anexo": "I | II | III | IV | V",
    "fator_r": 0,
    "das_payments": [],
    "das_total": 0,
    "pro_labore": 0,
    "distribuicao_lucros_isenta": 0
  },
  "deducoes_legais": {
    "dependentes": [],
    "despesas_medicas": 0,
    "despesas_educacao": 0,
    "pgbl": 0,
    "pensao_alimenticia": 0,
    "inss": 0
  },
  "bens_e_direitos": [],
  "dividas_e_onus": [],
  "prior_year": {
    "imposto_devido": 0,
    "rendimentos_tributaveis": 0,
    "bens_e_direitos": []
  },
  "modelo_declaracao": "completa | simplificada | calculate_both",
  "open_flags": [],
  "refusals_triggered": [],
  "documents_received": []
}
```

---

## Section 9 -- Refusal handling

Refusals fire from either the refusal sweep (Section 2) or during inference (e.g., Lucro Presumido structure discovered in documents).

When a refusal fires:
1. Stop the workflow
2. State the specific reason in one sentence
3. Recommend the path forward (specific practitioner type)
4. Offer to continue with partial help ONLY if the out-of-scope item is cleanly separable (rare)

**Do not:**
- Apologize profusely
- Try to work around the refusal
- Suggest the user "might be able to" fit into scope if they answer differently
- Continue silently

**Refusals:**

**R-BR-1 -- Lucro Real.** "Stop -- Lucro Real é o regime tributário mais complexo do Brasil, com escrituração contábil completa, LALUR (Livro de Apuração do Lucro Real), ECF, ECD, e obrigações acessórias extensas (SPED). Você precisa de um contador especializado em Lucro Real."

**R-BR-2 -- Import/export companies.** "Stop -- empresas de importação/exportação envolvem regimes aduaneiros especiais, Siscomex, drawback, e tributação complexa de ICMS/IPI/PIS/COFINS. Você precisa de um contador com expertise em comércio exterior."

**R-BR-3 -- S.A. structures.** "Stop -- sociedades anônimas (S.A.) têm obrigações específicas com a CVM, publicação de balanços, e regras distintas de tributação. Você precisa de um contador especializado em S.A."

**Sample refusal:**

> Stop -- você tem apuração por Lucro Real. Sou configurado para MEI, Simples Nacional, e autônomos pessoa física apenas. Lucro Real requer escrituração contábil completa, LALUR, e apuração trimestral/anual de IRPJ e CSLL. Você precisa de um contador especializado.
>
> Não posso ajudar com esse caso.

---

## Section 10 -- Self-checks

**Check IN1 -- No one-question-at-a-time prose in the refusal sweep.** If the skill asked "Question 1 of 10" or walked through questions as separate messages, check fails.

**Check IN2 -- Refusal sweep used ask_user_input_v0.** The first substantive interaction used the interactive tool, not prose questions.

**Check IN3 -- Upload-first flow honoured.** After refusal sweep, the skill asked for a document dump before asking any content questions.

**Check IN4 -- Documents were parsed and inferred before asking questions.** The inference summary (Section 5) was shown before gap-filling questions (Section 6).

**Check IN5 -- Gap-filling only asked about things NOT visible in documents.** If the skill asked "você pagou INSS" after the bank statement showed GPS payments, check fails.

**Check IN6 -- Open flags captured.** Anything ambiguous, risky, or attention-worthy during inference is in the `open_flags` list in the handoff package.

**Check IN7 -- Handoff to `br-return-assembly` is explicit.** The user was told "I'm now going to run the return preparation," and the downstream orchestrator was explicitly invoked with the intake package.

**Check IN8 -- Reviewer step was stated upfront and reiterated before handoff.** The opening message mentioned contador signoff.

**Check IN9 -- Refusals were clean.** No hedging. Stop means stop.

**Check IN10 -- No meta-commentary about workflow phases.** The skill did not say "Phase 1," "Phase 2," etc.

**Check IN11 -- Total user-facing turn count is low.** Target: 8 turns or fewer from start to handoff for a prepared user. More than 12 turns for a normal intake is a check failure.

**Check IN12 -- Business type was established and routing applied.** MEI vs Simples vs Autônomo was confirmed before inference, as it changes the entire downstream path.

---

## Section 11 -- Performance targets

For a prepared user (documents in a folder, ready to upload):
- **Refusal sweep**: 45 seconds (1-2 interactive turns)
- **Document upload**: 2 minutes (1 upload turn)
- **Inference and confirmation display**: 1 minute Claude processing + 1 turn for user confirmation
- **Gap filling**: 2 minutes (2-3 interactive turns)
- **Handoff**: immediate
- **Total**: ~6 minutes

For an unprepared user (has to go fetch documents):
- Refusal sweep: same
- Document discovery: 10-20 minutes offline
- Rest: same
- **Total**: 15-25 minutes

---

## Section 12 -- Cross-skill references

**Inputs:** User-provided documents and answers.

**Outputs:** Structured intake package consumed by `br-return-assembly`.

**Downstream skills triggered (via br-return-assembly):**
- `br-irpf` -- Declaração de Ajuste Anual (IRPF)
- `br-simples` -- DAS calculation and reconciliation (MEI/Simples)
- `br-inss` -- INSS contribution reconciliation
- `br-iss` -- ISS municipal tax (if applicable)

---

### Change log

- **v1.0 (May 2026):** Initial draft. Upload-first, inference-then-confirm pattern modelled on mt-freelance-intake v0.1.

## End of Intake Skill v1.0


---

## Disclaimer

This skill and its outputs are provided for informational and computational purposes only and do not constitute tax, legal, or financial advice. Open Accountants and its contributors accept no liability for any errors, omissions, or outcomes arising from the use of this skill. All outputs must be reviewed and signed off by a qualified professional (such as a CPA, EA, tax attorney, or equivalent licensed practitioner in your jurisdiction) before filing or acting upon.

The most up-to-date, verified version of this skill is maintained at [openaccountants.com](https://www.openaccountants.com). Log in to access the latest version, request a professional review from a licensed accountant, and track updates as tax law changes.
