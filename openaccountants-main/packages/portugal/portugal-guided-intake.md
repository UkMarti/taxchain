---
name: pt-guided-intake
description: ALWAYS USE THIS SKILL when a user asks for help with Portuguese taxes. PT-PT keywords: "ajudar com IRS", "preparar IRS Portugal", "RNH", "IFICI", "Categoria B", "Recibos Verdes", "Modelo 3", "trabalhador independente Portugal", "abrir atividade Portugal", "Segurança Social trabalhador independente", "Anexo B", "Anexo L", "Anexo J"; Trigger also on: "help me with my Portugal taxes", "Portugal tax help", "Portugal freelancer", "NHR Portugal", "IFICI Portugal", "Portuguese tax return"; LER SEMPRE este skill PRIMEIRO ao iniciar um workflow fiscal português.
version: 1.0
jurisdiction: PT
tax_year: 2025
category: orchestrator
verified_by: pending
---

# Portugal — Intake Orientado por Perfil — Skill v1.0

## O que é este ficheiro

Orquestrador de intake para o pacote fiscal português da OpenAccountants. É o ponto de entrada obrigatório para qualquer pedido de ajuda com impostos em Portugal: identifica o perfil do contribuinte, escolhe a rota correcta (RNH legado, IFICI, Categoria A, Categoria B, sociedade portuguesa, ou Categoria G), e encaminha para os skills de conteúdo a jusante.

Os outputs deste skill destinam-se a um revisor credenciado — em Portugal, um Contabilista Certificado inscrito na Ordem dos Contabilistas Certificados (OCC) — que assina e submete a declaração no Portal das Finanças. Este skill não substitui o CC: limita-se a estruturar o dossier e a preparar o working paper para revisão humana.

A campanha do IRS (Modelo 3) referente ao ano fiscal anterior decorre tipicamente entre 1 de Abril e o **último dia útil de Junho**. Toda a árvore de decisão abaixo pressupõe que o utilizador é (ou pretende ser tratado como) residente fiscal em Portugal no ano em causa.

---

## Secção 1 — Quando este skill se aplica

Aplica-se sempre que o utilizador:

- Pede ajuda para preparar, rever ou compreender a declaração de IRS portuguesa (Modelo 3 e anexos).
- Menciona qualquer dos regimes especiais: RNH (Residente Não Habitual), NHR, IFICI (Incentivo Fiscal à Investigação Científica e Inovação), "ex-IFICI", "novo NHR".
- Quer abrir, alterar ou cessar **actividade aberta** nas Finanças (Modelo de Início de Actividade / Recibos Verdes).
- Tem rendimentos de Categoria B (trabalho independente, prestação de serviços, ato isolado) em Portugal.
- Tem rendimentos do estrangeiro a declarar em Anexo J e quer perceber a interacção com a Convenção para Evitar a Dupla Tributação (CDT) aplicável.
- Quer constituir, gerir ou liquidar uma sociedade portuguesa (Unipessoal Lda, Lda, SA) e perceber o IRC.
- Pergunta sobre Segurança Social do trabalhador independente, taxa contributiva, base de incidência contributiva trimestral, ou isenção do primeiro ano.
- Refere IVA, regime de isenção do artigo 53.º do CIVA, declaração periódica de IVA, ou facturação electrónica em Portugal (ATCUD, código de série, QR code, SAF-T (PT)).

**Não se aplica** (refere ao revisor humano e pára) quando o utilizador:

- Não é residente fiscal em Portugal e não pretende sê-lo no ano em causa (ver R-PT-1 na Secção 4).
- Tem situação que exige sign-off contencioso, inspectivo ou de planeamento internacional complexo — ver Secção 4 — catálogo de recusas.

---

## Secção 2 — Árvore de decisão por perfil

Esta árvore é executada **antes** de qualquer pergunta de detalhe. Cada bifurcação activa uma rota distinta e um conjunto distinto de skills a jusante. O assistente nunca deve saltar passos nem inferir respostas sem confirmação do utilizador.

```
Pergunta 1: É residente fiscal em Portugal no ano fiscal em causa?
            (Critérios do artigo 16.º do CIRS: > 183 dias em qualquer
             período de 12 meses, OU habitação em Portugal a 31 de Dezembro
             em condições que façam supor intenção de manter e ocupar como
             residência habitual.)
  Não → pt-non-resident-withholding (fora do âmbito deste pack — encaminhar
        para revisor; aplicar retenção liberatória do artigo 71.º do CIRS
        quando aplicável)
  Sim → Pergunta 2

Pergunta 2: Quando se tornou residente fiscal em Portugal?
  Antes de 1 de Janeiro de 2024 + tem inscrição RNH activa
        (estatuto concedido antes do fim do regime transitório do
         OE 2024 — Lei n.º 82/2023)
        → ROTA A — RNH legado (até 10 anos a contar da inscrição)
        → carregar pt-nhr-ifici
  Em 2024 ou depois → Pergunta 3

Pergunta 3: Qualifica para IFICI?
            (Decreto-Lei n.º 81/2024 e Portaria n.º 187/2024/1; em vigor
             desde 2024 como sucessor do RNH para novos residentes.)
            Caminhos típicos de elegibilidade:
              a) Investigação científica e ensino superior;
              b) Actividade qualificada constante da Portaria 187/2024/1
                 (CAEs e profissões elegíveis, incluindo certas funções
                 técnicas e de I&D);
              c) Contrato com entidade certificada pela FCT, ANI, AICEP,
                 IAPMEI ou Startup Portugal;
              d) Cargo de direcção em entidade beneficiária de regime
                 contratual de investimento.
  Sim → ROTA B — IFICI → carregar pt-nhr-ifici
        (taxa especial de 20% sobre rendimentos de actividades de elevado
         valor acrescentado de fonte portuguesa; isenção, com método de
         isenção, sobre a generalidade dos rendimentos de fonte estrangeira
         — verificar lista por categoria)
  Não → Pergunta 4

Pergunta 4: Tipo de rendimento principal em Portugal no ano em causa?
  Categoria A (trabalho dependente / salário)
        → ROTA C1 → carregar pt-income-tax (foco no Anexo A)
                 + portugal-payroll (se também é entidade empregadora
                   por exemplo de empregada doméstica ou de pessoal próprio)
        Notas: tabelas de retenção na fonte mensais; deduções específicas
        do artigo 25.º do CIRS; subsídio de refeição até ao limite isento.

  Categoria B (trabalho independente / Recibos Verdes / acto isolado)
        → ROTA C2 → carregar pt-income-tax (foco no Anexo B)
                 + pt-social-contributions
                 + portugal-vat-return
                 + portugal-bookkeeping
                 + portugal-einvoice
        Sub-bifurcação obrigatória: regime simplificado (artigo 31.º do
        CIRS, coeficientes 0,75 / 0,35 / 0,15 / 0,95 conforme tipo de
        rendimento) vs contabilidade organizada (artigo 28.º, n.º 2 do
        CIRS — obrigatória acima de € 200.000 de rendimento ilíquido
        anual ou por opção).

  Sociedade portuguesa (Unipessoal Lda, Lda, SA)
        → ROTA D → carregar portugal-formation
                 + (pt-corporate-tax — futuro / em desenvolvimento)
                 + portugal-vat-return
                 + portugal-payroll
                 + portugal-financial-statements
        Notas: IRC à taxa geral de 21% (Continente); derrama municipal
        até 1,5%; derrama estadual escalonada; regime simplificado de
        IRC do artigo 86.º-A do CIRC quando aplicável; IES/DA até 15 de
        Julho do ano seguinte.

  Categoria G (mais-valias mobiliárias ou imobiliárias),
  Categoria E (rendimentos de capitais),
  Categoria F (rendas), ou
  rendimentos do estrangeiro (Anexo J)
        → ROTA E → carregar pt-income-tax
                 + portugal-crypto-tax (se aplicável — Lei n.º 24-D/2022,
                   distinção entre detenção < 365 dias vs ≥ 365 dias,
                   actividade habitual em Categoria B, e staking/mining)
```

A árvore é determinística: cada combinação de respostas conduz a uma única rota principal, eventualmente combinada com rotas paralelas (por exemplo, IFICI + Categoria B é possível e activa **ambas** as rotas B e C2).

---

## Secção 3 — Perguntas obrigatórias por rota

Usar `ask_user_input_v0` sempre que possível. Agrupar até 3 perguntas independentes por chamada. Termos em português (PT-PT) na pergunta; nunca em português do Brasil ("contribuinte" e não "contribuinte fiscal"; "facto" e não "fato"; "receção" e não "recepção"; "actividade" admite ambas as grafias mas usar "actividade" com c).

### 3.1 Sweep inicial (uma chamada `ask_user_input_v0`, 4 perguntas)

- **P1 — Residência fiscal no ano em causa:** Residente todo o ano | Residente parcial (entrou ou saiu durante o ano) | Não residente | Não tenho a certeza.
- **P2 — Ano de início da residência fiscal em Portugal:** Antes de 2024 com RNH activo | Antes de 2024 sem RNH | Em 2024 ou 2025 | Sou residente de longa data (nascido / criado em PT) | Não sei.
- **P3 — Estatuto / regime especial:** Tenho RNH activo (concedido até 2023) | Pedi ou pretendo pedir IFICI | Não tenho regime especial | Não sei o que é nada disto.
- **P4 — Fonte principal de rendimento:** Trabalho dependente (Categoria A) | Trabalho independente / Recibos Verdes (Categoria B) | Sociedade portuguesa (Lda / Unipessoal / SA) | Pensões (Categoria H) | Rendimentos de capitais, rendas ou mais-valias | Mistura.

### 3.2 Perguntas específicas — ROTA A (RNH legado)

- **P5A — Data de inscrição como RNH:** ano e mês (necessário para contagem dos 10 anos).
- **P6A — Profissão exercida ao abrigo do RNH:** profissão de elevado valor acrescentado constante da Portaria n.º 230/2019 (lista vigente para o RNH legado, distinta da Portaria 187/2024/1 do IFICI).
- **P7A — Tem rendimentos de fonte estrangeira em 2025?** Sim — trabalho dependente | Sim — dividendos / juros / royalties | Sim — pensões | Sim — múltiplos tipos | Não.
- **P8A — Há CDT aplicável ao país pagador?** Sim (indicar país) | Não | Não sei.

### 3.3 Perguntas específicas — ROTA B (IFICI)

- **P5B — Data de início da residência em Portugal:** ano e mês (o regime IFICI tem prazo de 10 anos a contar do ano da inscrição como residente).
- **P6B — Via de elegibilidade IFICI:** (a) Docência no ensino superior / investigação | (b) Profissão da Portaria 187/2024/1 | (c) Contrato com entidade certificada FCT/ANI/AICEP/IAPMEI/Startup Portugal | (d) Quadro de regime contratual de investimento.
- **P7B — Já obteve a comunicação de inscrição IFICI da AT / IAPMEI / FCT / ANI?** Sim | Pedido submetido, a aguardar | Ainda não submeti | Não sei.
- **P8B — Fontes de rendimento 2025:** Salário PT + zero estrangeiro | Salário PT + capitais estrangeiros | Recibos Verdes PT | Mistura | Outro.

### 3.4 Perguntas específicas — ROTA C2 (Categoria B / Recibos Verdes)

- **P5C — Tem actividade aberta nas Finanças?** Sim, desde [ano] | Não, ainda não abri | Cessei recentemente.
- **P6C — CAE / CIRS principal:** código de actividade económica e/ou tabela do artigo 151.º do CIRS (por exemplo, 1519 "outros prestadores de serviços", 1320 "engenheiros") — campo livre.
- **P7C — Regime contabilístico:** Simplificado | Contabilidade organizada | Não sei.
- **P8C — Volume de negócios 2025 (estimativa):** ≤ € 15.000 | € 15.001–€ 200.000 | > € 200.000 | Não sei.
- **P9C — Regime de IVA:** Isento ao abrigo do artigo 53.º do CIVA | Enquadrado no regime normal (trimestral ou mensal) | Não sei.
- **P10C — Segurança Social — primeiro ano de actividade?** Sim (isenção de 12 meses pode aplicar-se) | Não, já contribuo | Não sei.

### 3.5 Perguntas específicas — ROTA D (Sociedade portuguesa)

- **P5D — Forma jurídica:** Unipessoal por Quotas | Lda (2+ sócios) | SA | Outra (ENI, cooperativa) | Ainda não constituída.
- **P6D — Ano de constituição e regime fiscal de IRC:** Regime geral | Regime simplificado de IRC (artigo 86.º-A do CIRC) | Não sei.
- **P7D — Tem trabalhadores por conta de outrem?** Sim (n.º de trabalhadores) | Apenas sócios-gerentes | Não.
- **P8D — Contas: já entregou IES/DA do ano anterior?** Sim | Não | Não aplicável (sociedade nova).

### 3.6 Perguntas específicas — ROTA E (Categoria G / E / F / Anexo J)

- **P5E — Tipo de rendimento:** Mais-valias mobiliárias (acções, ETFs, criptoactivos) | Mais-valias imobiliárias | Dividendos / juros | Rendas | Múltiplos.
- **P6E — Detenção de criptoactivos:** Sim, com vendas em 2025 | Sim, apenas detenção | Não.
- **P7E — Optou pelo englobamento das taxas liberatórias / especiais?** Sim | Não | Não sei o que isto significa.
- **P8E — Tem Anexo J a entregar (rendimentos do estrangeiro)?** Sim | Não | Não sei.

---

## Secção 4 — Catálogo de recusas

Quando uma destas condições se verifica, o assistente **pára o workflow**, expõe a razão em uma frase, e encaminha para um Contabilista Certificado (OCC) ou, conforme o caso, para um Advogado fiscalista ou Revisor Oficial de Contas (ROC). Não contornar.

| Código | Situação | Acção |
|---|---|---|
| R-PT-1 | Não residente fiscal em Portugal e sem intenção de o ser no ano fiscal em causa | Encaminhar; este pack cobre residentes; aplicar regras do artigo 18.º do CIRS para rendimentos de fonte portuguesa, mas a preparação fica fora do âmbito. |
| R-PT-2 | Residência parcial (mudança de residência durante o ano) com necessidade de divisão de rendimentos por períodos de residência (artigo 16.º, n.º 3 do CIRS na redacção do OE 2015) | Encaminhar a CC; este skill não automatiza a divisão. |
| R-PT-3 | Pedido de planeamento fiscal internacional, holdings, ZFM (Zona Franca da Madeira) ou estruturas com sociedades não residentes | Encaminhar a fiscalista. |
| R-PT-4 | Inspecção tributária em curso, procedimento de revisão oficiosa, contencioso fiscal pendente | Encaminhar a Advogado fiscalista; o output deste skill não serve em contencioso. |
| R-PT-5 | Sociedade com obrigação de Revisão Legal de Contas (artigo 262.º do CSC) ou consolidação de contas | Encaminhar a ROC; o pack cobre micro e pequena entidade SNC e regime de Normalização Contabilística para Microentidades (NC-ME). |
| R-PT-6 | Pedido de regularização voluntária de períodos anteriores (RERT, regularizações de IVA materialmente relevantes, declarações de substituição complexas) | Encaminhar a CC para análise caso a caso. |
| R-PT-7 | Reorganização societária — fusão, cisão, entrada de activos, permuta de partes sociais (artigos 73.º e seguintes do CIRC) | Encaminhar. |
| R-PT-8 | Pedido de aplicação combinada de RNH + IFICI ao mesmo período (mutuamente exclusivos) | Esclarecer que são incompatíveis e voltar à árvore de decisão. |
| R-PT-9 | Confidencialidade ou suspeita de branqueamento — qualquer indicação de origem ilícita dos rendimentos | Parar; obrigação de comunicação à UIF cabe ao CC, não a este skill. |
| R-PT-10 | Volume de negócios > € 50.000.000 ou pertença a Grupo de Sociedades | Fora do âmbito de uma stack para freelancers e PME. |

---

## Secção 5 — Pacote de output

Após a sweep inicial e o gap-filling, o assistente produz **dois artefactos**: (a) um resumo legível em português para o utilizador confirmar; (b) um working paper estruturado para o revisor (CC inscrito na OCC).

### 5.1 Resumo de confirmação (mostrado ao utilizador)

```
RESUMO DE INTAKE — IRS 2025 Portugal

Contribuinte: [Nome]   NIF: [9 dígitos]
Residência fiscal 2025: [Residente integral | Residente IFICI | Residente RNH legado]
Agregado familiar: [solteiro | casado — tributação separada / conjunta | unido de facto]

ROTA SELECCIONADA: [A — RNH legado | B — IFICI | C1 — Categoria A |
                    C2 — Categoria B | D — Sociedade PT | E — Categorias E/F/G/J]

Categorias de rendimento 2025:
  - Categoria A: [€]
  - Categoria B: [€]   regime [simplificado | contabilidade organizada]
  - Categoria E: [€]   englobamento: [sim | não]
  - Categoria F: [€]
  - Categoria G: [€]   (mais-valias)
  - Categoria H: [€]
  - Anexo J (estrangeiro): [€]   CDT: [país, método de eliminação]

IVA: [isento art. 53.º | enquadrado — trimestral | enquadrado — mensal | n/a]
Segurança Social TI: [enquadrado | primeiro ano com isenção | n/a]
Contabilidade organizada: [sim — CC obrigatório | não]

SKILLS A JUSANTE A CARREGAR:
  [pt-nhr-ifici] [pt-income-tax] [pt-social-contributions]
  [portugal-vat-return] [portugal-bookkeeping] [portugal-einvoice]
  [portugal-payroll] [portugal-formation] [portugal-financial-statements]
  [portugal-crypto-tax] [portugal-tax-optimization]

FLAGS EM ABERTO / RECUSAS ACTIVADAS / DEFAULTS CONSERVADORES
APLICADOS — listados abaixo.

Confirme ou corrija qualquer ponto antes de prosseguir.
```

### 5.2 Working paper estruturado (para o revisor — Contabilista Certificado)

Estrutura mínima do dossier que o CC abre quando recebe o output deste skill. Cada secção deve ter sub-pasta correspondente no portal da OCC ou no software de contabilidade utilizado.

1. **Capa e folha de identificação** — NIF, ano fiscal, CC responsável, data de elaboração, situação fiscal e contributiva (consultas no Portal das Finanças e na Segurança Social Directa).
2. **Inventário de documentos recebidos** — recibos verdes emitidos, facturas recebidas, extractos bancários, declarações de rendimentos pagos por terceiros, comprovativos de retenções na fonte, contratos relevantes, comunicações da AT.
3. **Resumo de rendimentos por categoria** — totais por categoria do CIRS, ligação a cada anexo do Modelo 3 (A, B, C, D, E, F, G, H, I, J, L, SS) que será preenchido.
4. **Mapa de deduções específicas e à colecta** — saúde, educação, habitação, lares, IVA dedutível por exigência de factura (e-Factura), PPR, donativos, encargos com imóveis para arrendamento, pensões de alimentos.
5. **Mapa de retenções na fonte e pagamentos por conta** — Categoria A (entidade empregadora), Categoria B (clientes que retêm às taxas dos artigos 101.º do CIRS), pagamentos por conta de Setembro/Novembro do ano anterior.
6. **Quadro do regime especial aplicável** — para ROTA A ou ROTA B, anexo com o cálculo da taxa especial de 20% e/ou aplicação do método de isenção sobre rendimentos estrangeiros (artigo 81.º do CIRS).
7. **Apuramento do IRS estimado** — colecta, deduções, imposto a pagar / a recuperar; comparação simplificado vs contabilidade organizada se aplicável.
8. **Mapa de Segurança Social** — base contributiva trimestral (artigo 162.º do Código Contributivo), 21,4% (TI generalidade) ou 25,2% (empresário em nome individual com contabilidade organizada), declaração trimestral e ajustamento anual.
9. **Mapa de IVA** — periodicidade (trimestral até € 650.000 de volume de negócios; mensal acima), prazo de entrega (até dia 20 do segundo mês seguinte para trimestral; até dia 20 do mês seguinte para mensal — verificar regime em vigor), apuramento Q1–Q4.
10. **Lista de acções pendentes** — o que o utilizador tem ainda de fornecer, o que o CC tem de validar no Portal das Finanças, datas-limite (último dia útil de Junho para Modelo 3; 15 de Julho para IES/DA), e proposta de calendário de submissão.
11. **Flags, recusas e defaults conservadores** — registo auditável de todas as decisões automatizadas tomadas por este skill.

### 5.3 Pacote estruturado (JSON interno, opcional)

```json
{
  "jurisdiction": "PT",
  "tax_year": 2025,
  "taxpayer": {
    "nome": "",
    "nif": "",
    "residencia_fiscal": "residente_integral|residente_rnh|residente_ifici|nao_residente",
    "agregado": "solteiro|casado_separado|casado_conjunto|uniao_de_facto",
    "rota_seleccionada": "A|B|C1|C2|D|E"
  },
  "regimes": {
    "rnh_legado_ativo": false,
    "rnh_ano_inscricao": null,
    "ifici_ativo": false,
    "ifici_via": "investigacao|portaria_187|entidade_certificada|rci|null"
  },
  "categoria_b": {
    "actividade_aberta": false,
    "regime": "simplificado|contabilidade_organizada|null",
    "volume_negocios_estimado": 0,
    "cae_principal": "",
    "tabela_151": ""
  },
  "iva": {
    "enquadramento": "isencao_art53|normal_trimestral|normal_mensal|n_a",
    "volume_negocios_12m": 0
  },
  "seguranca_social": {
    "enquadrado": false,
    "primeiro_ano_isencao": false,
    "base_contributiva_trimestral": 0
  },
  "sociedade": {
    "forma": "unipessoal_lda|lda|sa|outra|null",
    "regime_irc": "geral|simplificado_86A|null",
    "trabalhadores": 0
  },
  "rendimentos_estrangeiros": {
    "tem_anexo_j": false,
    "paises": [],
    "cdt_aplicavel": false
  },
  "documentos_recebidos": [],
  "skills_a_carregar": [],
  "flags_em_aberto": [],
  "recusas_ativadas": [],
  "defaults_conservadores_aplicados": []
}
```

---

## Secção 6 — Cross-references por rota

### Rota A — RNH legado

- **Carregar:** `pt-nhr-ifici` (capítulo RNH), `pt-income-tax`, `pt-social-contributions` (se também Categoria B), `portugal-vat-return` (se aplicável), `portugal-bookkeeping`.
- **Não carregar:** `portugal-financial-statements` (salvo se houver sociedade); `portugal-payroll` (salvo se entidade empregadora).
- **Notas de articulação:** o RNH legado mantém o regime concedido até completar 10 anos a contar da inscrição. A AT continua a aceitar Modelo 3 sob RNH para quem se inscreveu antes do fim do regime transitório do OE 2024.

### Rota B — IFICI

- **Carregar:** `pt-nhr-ifici` (capítulo IFICI), `pt-income-tax`, `pt-social-contributions` (se Categoria B), `portugal-vat-return` (se aplicável), `portugal-bookkeeping`.
- **Verificação obrigatória pelo CC:** comprovativo de inscrição IFICI (comunicação da AT, FCT, ANI, AICEP, IAPMEI ou Startup Portugal conforme via de elegibilidade). Sem este comprovativo o regime não pode ser aplicado no Modelo 3 — Anexo L.

### Rota C1 — Categoria A

- **Carregar:** `pt-income-tax` (Anexo A), `portugal-payroll` apenas se o utilizador for **também** entidade empregadora a título particular.
- **Notas:** retenção na fonte mensal pelas tabelas do Despacho do Secretário de Estado dos Assuntos Fiscais em vigor; deduções específicas automáticas (artigo 25.º do CIRS); subsídio de refeição isento até ao limite legal.

### Rota C2 — Categoria B

- **Carregar:** `pt-income-tax` (Anexo B), `pt-social-contributions`, `portugal-vat-return`, `portugal-bookkeeping`, `portugal-einvoice`.
- **Sub-bifurcação simplificado vs organizada:** simplificado se rendimento ilíquido ≤ € 200.000 e sem opção pela organizada; coeficientes 0,75 (prestações de serviços profissionais — tabela do artigo 151.º), 0,35 (outros serviços e hotelaria/restauração), 0,15 (vendas de mercadorias e produtos), 0,95 (rendimentos da propriedade intelectual sem isenção). A organizada implica SAF-T (PT) mensal e CC obrigatório.
- **IVA:** isenção do artigo 53.º do CIVA quando volume de negócios ≤ € 15.000 (limite em vigor desde 1 de Janeiro de 2025, conforme Lei do OE/2024; verificar valor actualizado no momento da preparação). Acima do limite, regime normal trimestral ou mensal.

### Rota D — Sociedade portuguesa

- **Carregar:** `portugal-formation` (se ainda em constituição), `portugal-vat-return`, `portugal-payroll`, `portugal-financial-statements`, e o futuro `pt-corporate-tax`.
- **Obrigações principais:** Declaração de IRC (Modelo 22) até 31 de Maio; IES/DA até 15 de Julho; pagamentos por conta de Julho/Setembro/Dezembro; pagamento especial por conta (quando aplicável); retenção na fonte sobre dividendos pagos a sócios.

### Rota E — Categorias E / F / G / Anexo J

- **Carregar:** `pt-income-tax`, `portugal-crypto-tax` (se aplicável).
- **Mais-valias de criptoactivos (Lei n.º 24-D/2022, OE 2023):** detenção < 365 dias → tributação à taxa especial de 28% (artigo 72.º do CIRS) ou englobamento; detenção ≥ 365 dias → exclusão de tributação para activos não emitidos em paraíso fiscal; actividade habitual → Categoria B.
- **Anexo J:** crédito de imposto pago no estrangeiro até ao limite do imposto português correspondente; aplicar a CDT pertinente.

---

## Secção 7 — Defaults conservadores

Quando uma resposta é ambígua ou em falta, o assistente aplica o default mais cauteloso (geralmente, o que conduz a maior imposto ou a maior obrigação declarativa) e regista a decisão em `defaults_conservadores_aplicados` para revisão pelo CC.

| Ambiguidade | Default conservador |
|---|---|
| Residência fiscal incerta perto dos 183 dias | Tratar como residente integral e activar todas as obrigações declarativas portuguesas; o CC valida com a IES/contagem de dias documentada. |
| RNH vs IFICI dúvida quanto ao regime aplicável | Não aplicar nenhum dos regimes especiais por defeito; tratar como residente comum até o utilizador apresentar comprovativo de inscrição. |
| Regime simplificado vs organizada perto de € 200.000 | Assumir contabilidade organizada (mais exigente); flag para o CC confirmar. |
| Coeficiente aplicável a uma prestação de serviços não claramente classificada na tabela do artigo 151.º | Aplicar coeficiente 0,75 (prestações de serviços profissionais), que é o mais comum e o mais fiscalmente neutro entre os relevantes. |
| Isenção do artigo 53.º do CIVA perto do limite anual | Assumir saída da isenção e enquadramento no regime normal; flag para verificação. |
| Primeiro ano de isenção de Segurança Social — datas em dúvida | Não aplicar a isenção até comprovativo do início de actividade nas Finanças; calcular contribuição plena. |
| Englobamento de rendimentos de capitais (Categoria E) — sem instrução do utilizador | Não optar pelo englobamento; aplicar taxas liberatórias do artigo 71.º do CIRS, regra geral mais simples e mais previsível. |
| Mais-valias de criptoactivos — período de detenção em dúvida | Assumir detenção < 365 dias e aplicar 28%. |
| Anexo J — método de eliminação da dupla tributação não claro | Aplicar o método do crédito de imposto (regra residual do artigo 81.º do CIRS) e remeter para o CC validar a CDT. |
| Acesso ao Portal das Finanças — desconhecido | Assumir não activo; flag para senha de acesso a regularizar antes da submissão. |
| Capital social vs suprimentos numa sociedade | Capitalizar e flag. |

---

## Secção 8 — Fontes

Diplomas e instrumentos regulamentares portugueses citados (todos em vigor para o ano fiscal de 2025; o CC valida actualizações de OE 2025 e portarias subsequentes):

- **CIRS** — Código do IRS (Decreto-Lei n.º 442-A/88, com as alterações vigentes), em especial os artigos 16.º (residência), 18.º (rendimentos de fonte portuguesa), 25.º (deduções específicas Categoria A), 28.º (regime de contabilidade Categoria B), 31.º (regime simplificado e coeficientes), 71.º (taxas liberatórias), 72.º (taxas especiais, incluindo mais-valias e criptoactivos), 81.º (eliminação da dupla tributação internacional), 101.º (retenções na fonte sobre Categoria B), 151.º (tabela de actividades).
- **CIRC** — Código do IRC (Decreto-Lei n.º 442-B/88), em especial os artigos 86.º-A (regime simplificado de IRC), 87.º (taxas), e Capítulo V (operações de reestruturação).
- **CIVA** — Código do IVA (Decreto-Lei n.º 394-B/84), artigo 53.º (regime de isenção dos pequenos contribuintes) e artigos 41.º e 88.º (periodicidade e prazos).
- **Código Contributivo** — Lei n.º 110/2009, regime do trabalhador independente nos artigos 132.º e seguintes (taxa contributiva, base de incidência trimestral, declaração trimestral).
- **Regime do Residente Não Habitual (RNH legado):** artigo 16.º, n.º 8 e seguintes do CIRS na redacção anterior à Lei n.º 82/2023 (OE 2024); Portaria n.º 230/2019 (lista de profissões de elevado valor acrescentado para o RNH legado).
- **Regime IFICI:** Decreto-Lei n.º 81/2024; Portaria n.º 187/2024/1 (lista de actividades e profissões qualificadas); diplomas complementares de regulamentação da inscrição via FCT, ANI, AICEP, IAPMEI e Startup Portugal.
- **Lei n.º 82/2023** — OE 2024, que pôs fim ao RNH para novos residentes e fixou o regime transitório.
- **Lei n.º 24-D/2022** — OE 2023, que introduziu o regime de tributação de criptoactivos em Portugal (Categorias E, G e B conforme natureza da actividade).
- **OE 2025** — Lei do Orçamento do Estado para 2025 (a verificar no momento da preparação para confirmar limites, escalões, taxa especial IFICI e ajustes ao IRS, IRC, IVA e Código Contributivo).
- **Estatutos da OCC** — Ordem dos Contabilistas Certificados, para o quadro do CC responsável pela contabilidade organizada e pela submissão da IES.
- **Portal das Finanças** — instruções de preenchimento do Modelo 3 e dos respectivos anexos para o ano fiscal em causa.

---

## Secção 9 — Auto-verificações antes do handoff

Antes de invocar o skill de assembly da declaração ou de devolver o working paper ao CC, executar todas as verificações seguintes; falha em qualquer ponto obriga a corrigir antes de avançar.

1. Sweep inicial executada via `ask_user_input_v0`, não em prosa.
2. Residência fiscal confirmada e categorizada (integral / parcial / IFICI / RNH legado / não residente).
3. Rota seleccionada (A / B / C1 / C2 / D / E) com justificação ligada à árvore da Secção 2.
4. Para ROTA A ou B: ano de inscrição e via de elegibilidade documentados.
5. Para ROTA C2: regime simplificado vs organizada decidido; coeficiente do artigo 31.º aplicável identificado; enquadramento em IVA registado.
6. Para ROTA D: forma jurídica, regime de IRC e número de trabalhadores documentados.
7. Categorias de rendimento listadas com montantes (ou flag "a determinar").
8. Anexo J considerado quando há rendimentos do estrangeiro.
9. Segurança Social do trabalhador independente avaliada para todos os casos de Categoria B.
10. Todos os defaults conservadores aplicados estão registados com a regra que os justifica.
11. Lembrete ao utilizador de que o output requer revisão e assinatura por Contabilista Certificado inscrito na OCC antes de qualquer submissão no Portal das Finanças.
12. Lista clara dos skills a jusante a carregar, e dos skills explicitamente **não** a carregar com a razão.

---

## Secção 10 — Handoff final

Concluídas as auto-verificações, o assistente produz uma mensagem curta de handoff identificando:

(a) Contribuinte (nome, NIF) e agregado;
(b) Rota seleccionada com a citação principal (por exemplo, "ROTA B — IFICI ao abrigo do Decreto-Lei n.º 81/2024");
(c) Categorias de rendimento e regimes paralelos activos (IVA, Segurança Social);
(d) Skills a jusante por ordem de execução;
(e) Skills explicitamente não executados e porquê;
(f) Lembrete de revisão pelo CC e prazo do Modelo 3 (último dia útil de Junho).

Exemplo (residente IFICI desde 2024, Categoria B, regime simplificado, isenção art. 53.º do CIVA):

> Intake concluído. João Silva, NIF 2XX XXX XXX, residente fiscal em Portugal desde Março de 2024, IFICI via Portaria 187/2024/1 (CAE 62010 — programação informática). Rendimento Categoria B 2025 estimado em € 38.000, regime simplificado (coeficiente 0,75 — artigo 31.º do CIRS), IVA enquadrado no artigo 53.º do CIVA (≤ € 15.000 — a confirmar limite OE 2025), Segurança Social TI a 21,4% sobre base trimestral. A executar: pt-nhr-ifici, pt-income-tax (Anexo B + Anexo L), pt-social-contributions, portugal-vat-return, portugal-bookkeeping, portugal-einvoice. Não executar: portugal-payroll (sem trabalhadores), portugal-financial-statements (sem sociedade), portugal-crypto-tax (sem criptoactivos). Requer revisão e assinatura por Contabilista Certificado inscrito na OCC antes da submissão no Portal das Finanças. Prazo do Modelo 3 2025: último dia útil de Junho de 2026.

---

## Registo de alterações

- **v1.0 (Maio de 2026):** Versão inicial do skill de intake orientado por perfil para Portugal. Rotas A (RNH legado), B (IFICI), C1 (Categoria A), C2 (Categoria B), D (Sociedade portuguesa) e E (Categorias E/F/G/Anexo J). Reflecte o fim do RNH para novos residentes (Lei n.º 82/2023), o regime IFICI (Decreto-Lei n.º 81/2024 e Portaria n.º 187/2024/1), o regime de criptoactivos (Lei n.º 24-D/2022) e o quadro do Código Contributivo para trabalhadores independentes.

---

## Aviso legal

Este skill e os respectivos outputs são fornecidos exclusivamente para fins informativos e de apoio à preparação fiscal e não constituem aconselhamento fiscal, jurídico ou financeiro. A OpenAccountants e os seus contribuidores não assumem qualquer responsabilidade por erros, omissões ou consequências decorrentes da utilização deste skill. Todos os outputs devem ser revistos e assinados por um Contabilista Certificado inscrito na Ordem dos Contabilistas Certificados (OCC) — ou, quando aplicável, por Revisor Oficial de Contas (ROC) ou Advogado fiscalista — antes de qualquer submissão no Portal das Finanças, na Segurança Social Directa ou perante qualquer outra entidade pública portuguesa.

A versão verificada e mais actualizada deste skill é mantida em [openaccountants.com](https://www.openaccountants.com).

---

*OpenAccountants — skills de contabilidade open-source para IA*
*Este output tem de ser revisto por um profissional qualificado antes de qualquer submissão ou actuação.*
*Skills verificados mais recentes: openaccountants.com | Reportar erros: github.com/openaccountants/openaccountants*

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
