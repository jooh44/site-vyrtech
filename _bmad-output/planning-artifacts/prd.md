---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
inputDocuments: ['_bmad-output/project-context.md']
documentCounts:
  briefCount: 0
  researchCount: 0
  brainstormingCount: 0
  projectDocsCount: 1
classification:
  projectType: 'web_app'
  domain: 'general'
  complexity: 'low'
  projectContext: 'brownfield'
workflowType: 'prd'
---

# Product Requirements Document - vyrtech

**Author:** Johny
**Date:** 2026-02-26T22:21:05-03:00

## User Requirements Analysis

- **Project Name:** vyrtech (Brownfield)
- **Primary Source:** Client WhatsApp messages regarding landing page alterations.
- **Pages Affected:**
  1. **Clothing Rental (Noivas/Trajes):** Structural and design changes (Section 1, 2, 3, 7).
  2. **Tech/Automation (LP, Chatbot, Automacao):** Repositioning of central idea and design updates (Section 6).
- **Goal:** Update both landing pages with new copy, structural logic, and visual assets (images).

## Executive Summary

O projeto **Vyrtech** visa a atualização estratégica de duas landing pages de alto impacto (Locação de Roupas e Soluções Tech/Automação). O objetivo central é transmutar páginas informativas passivas em **sistemas de tração de leads**, focando na previsibilidade de receita. Para a frente de Noivas, o foco é a escalabilidade de 40 para 80 agendamentos semanais via método S.A.F.R.A. Para a frente Tech, o reposicionamento foca em 'LP, Chatbot e Automação', transformando a consultoria no braço direito de crescimento (growth) do cliente.

### What Makes This Special

A Vyrtech não entrega apenas design; entrega **previsibilidade**. O diferencial reside na união do rastreamento analítico preciso (GTM) com uma jornada de usuário sem atrito, onde cada ponto de contato (como o formulário na mesma página) é otimizado para o agendamento imediato. O insight central é que o tráfego da rua é inconstante, mas um pipeline digital configurado para '8 noivas/dia' é um ativo comercial escalável.

## Project Classification

- **Tipo de Projeto:** Web App (Next.js/React)
- **Domínio:** Geral (Marketing & Sales)
- **Complexidade:** Baixa
- **Contexto:** Brownfield (Melhoria de sistema existente)

## Success Criteria

### User Success

- **Aha! Moment:** O momento em que o usuário preenche o formulário na Seção 7 sem sair da página, sentindo que o agendamento é o próximo passo natural.
- **Métrica de Conversão:** Aumento na taxa de agendamento qualificado (meta: chegar a 8 por dia na frente de Locação).

### Business Success

- **Métrica de Tração:** Escalar de 40 para 80 locações semanais.
- **ROI de Growth:** Redução da dependência do tráfego orgânico de rua, comprovada pelo aumento de leads via canais digitais (rastreados pelo GTM) em 3 meses.

### Technical Success

- **GTM Impecável:** 100% de precisão no disparo da tag `GTM-KZGXGTPD` no carregamento e nos envios de formulário.
- **IDs Únicos:** Implementação de IDs específicos (`bottom_lead_form_id`, `hero_lead_form_id`) para alinhar com a estrutura técnica solicitada pelo cliente.
- **Aderência Estética:** Validação visual do contraste e da nova linguagem "fluída/arredondada" solicitada pelo cliente.

### Measurable Outcomes

- Taxa de conversão de leads/agendamentos por página.
- Precisão do rastreamento de eventos de formulário no GTM.
- Aprovação do cliente sobre o novo layout compacto da Seção 3.

## Product Scope

- Atualização completa de cópia conforme solicitação do cliente:
  - **Seção 1:** Badge: "MÉTODO VALIDADO PARA LOCAÇÃO DE TRAJES" / H1: "Coloque 8 Noivas por dia no seu provador e dobre o fechamento de Padrinhos" / Sub: "O sistema de tração que gera agendamentos qualificados diariamente e escalou ateliês de 40 para 80 locações semanais"
  - **Seção 2:** Title: "O TRÁFEGO DA RUA NÃO PODE DITAR O SEU FATURAMENTO" / Desc: "A rua está cada vez menos movimentada..." / Card 3 Title: "Receita Imprevisível" / Card 3 Desc: "Depender de clientes da rua e indicação torna a sua receita cada vez mais imprevisível..."
  - **Seção 3:** Títulos e descrições exatos: "Alvo em Safra", "Fertilização", "Rastreamento", "Aprimoramento".
  - **Seção 6 (Tech):** Trocar "Growth" por "crescimento" no copy; e trocar de "Projeção de Melhorias de CRO" para "Projeção de aumento de vendas".
- **Visual Refresh Elevado:** Troca de imagens de fundo, incluindo imagens de homens de terno (4ª dobra) para alinhamento com trajes masculinos.
- **Refatoração Gramatical do Design:** Transição de divs angulares/quadradas para bordas arredondadas (fluidez/sofisticação).
- **Contraste e Legibilidade:** Ajuste de cores para reduzir o excesso de branco e aumentar o impacto visual.
- **Re-layout da Seção 3:** Compactação da seção, transformando o layout vertical em horizontal para reduzir o scroll excessivo.
- **Correção técnica do CTA da Seção 7** (âncora interna no formulário).
- **Setup e validação do GTM** (`GTM-KZGXGTPD`) com os Form IDs `bottom_lead_form_id` e `hero_lead_form_id`.

### Growth Features (Post-MVP)

- Dashboards de conversão em tempo real.
- Testes A/B nas headlines para otimizar os '8 agendamentos/dia'.

### Vision (Future)

- Automação completa do agendamento integrada ao CRM do ateliê.

## User Journeys

### Cenário 1: "A Empresária Fabiana e o Toque de Sofisticação"

- **Persona:** Fabiana, dona de um ateliê de alta costura e locação de trajes.
- **Situação:** Fabiana tem um Instagram bonito, mas com leads desqualificados. Ela busca um parceiro que transmita o mesmo luxo que suas peças.
- **Rising Action:** Ao entrar na LP, as bordas arredondadas e o contraste alto passam autoridade imediata. A Seção 3 compacta (horizontal) respeita o tempo dela.
- **Climax:** Ela vê a imagem de trajes masculinos na 4ª dobra, validando que a Vyrtech entende todo o ecossistema de festas.
- **Resolução:** Ela se sente segura em um ambiente digital premium e solicita o agendamento estratégica via formulário in-page.

### Cenário 2: "O Gestor em Busca de Escala (Nicho Geral)"

- **Persona:** Marcos, dono de uma empresa de serviços que fatura bem, mas de forma manual e bagunçada.
- **Situação:** Marcos quer crescer sem explodir o custo operacional. Ele precisa de uma solução que pareça "sob medida".
- **Rising Action:** Ele percebe que o site não tem "cara de IA", graças às bordas sutis e design fluído. O layout horizontal da Seção 3 facilita o entendimento rápido da proposta de valor.
- **Climax:** O contraste alto permite que ele leia os benefícios principais instantaneamente no celular.
- **Resolução:** Ele solicita o diagnóstico gratuito, percebendo que a Vyrtech é o "Braço Direito" de infraestrutura que ele buscava.

### Journey Requirements Summary

- **Estética de Luxo:** Bordas arredondadas (`rounded-xl`+) e alto contraste para reforçar o posicionamento High-Ticket.
- **Layout Eficiente:** Seção 3 horizontal para reduzir o scroll e aumentar a taxa de retenção.
- **Inclusividade de Público:** Imagens de trajes masculinos (Suits) para equilibrar a oferta de locação.
- **Conversão Friceless:** Formulários in-page (Section 7) para manter o momentum da jornada.

## Innovation & Novel Patterns

### Detected Innovation Areas

- **Micro-interações Orgânicas (GSAP):** Uso de animações sutis para suavizar a transição entre as divs arredondadas, criando uma sensação de fluidez e "luxo artesanal". O GSAP será usado para "revelar" os elementos da Seção 3 compacta de forma progressiva.
- **Hierarquia de Contraste Dinâmica (Onyx & Purple):** Uso de gradientes que partem do "Vyrtech Purple" para tons de Onyx/Charcoal, reforçando a profundidade visual e combatendo o visual "chapado" para uma estética premium.

### Design Principles Adoption

- **Respeito ao Design System + Fluidez:** As animações seguirão as constantes de easing, mas serão ajustadas para complementar a nova geometria arredondada (`rounded-xl`+) das divs.
- **Equilíbrio Cromático:** Uso minimalista do roxo na página de Locação para preservar o estilo Editorial limpo, e uso expansivo no modo Dark da Tech para profundidade.

### Validation Approach

- **Percepção de Marca:** Verificação visual para garantir que as animações aumentam a percepção de valor (High-Ticket) sem afetar o tempo de carregamento ou a usabilidade móvel.

## Web App Specific Requirements

### Technical Architecture Considerations

- **SSR & SEO Optimization:** Uso nativo de Server-Side Rendering (Next.js) para garantir que todas as novas headlines e meta-docs sejam indexáveis.
- **Micro-interações GSAP:** Implementação de animações sutis seguindo o padrão orgânico para reforçar autoridade.
- **Design de Contraste:** Uso de gradientes profundos e sombras (depth) em vez de cores sólidas para combater o visual "clichê/chapado".

### Performance & Accessibility

- **Target Browsers:** Otimização para navegadores modernos (Chrome, Safari, Edge, Firefox).
- **Acessibilidade:** Garantia de contrastes adequados (especialmente nas sessões Dark) e labels nos elementos de formulário.

### Real-time Considerations

- **Validação de Formulário:** Feedback visual imediato em campos obrigatórios na Seção 7.

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving & Experience MVP (Sophisticated Delivery).
**Resource Requirements:** Desenvolvedor Full-stack (Next.js/React/GSAP).
**Current System State (Brownfield):** O repositório atual já possui Next.js 15+, Tailwind CSS 4.0 e GSAP configurados, com o estilo base da marca Pré-aprovado. Não haverá fase de 'setup inicial'. O foco absoluto é a refatoração dos componentes existentes e a implementação da nova arquitetura de fluxo.

### MVP Feature Set (Phase 1 Only)

**Must-Have Capabilities:**

- **Copy Update:** Atualização total conforme diretrizes do cliente.
- **Visual Refresh Elevado:** Inclusão de fotos de trajes masculinos (4ª dobra).
- **Refatoração Visual:** Transição para `border-radius: 1.5rem`+ em containers principais para fluidez.
- **Re-layout da Seção 3:** Transformação de layout vertical longo para horizontal compacto (grid/carousel).
- **Diferencial Competitivo:** Transformação de landing pages em máquinas de geração de leads High-Ticket, unindo a sofisticação de um layout "Magazine Editorial" com a precisão técnica do GTM e a identidade visual icônica (Paleta Roxa) da Vyrtech.
- **Equilíbrio de Estilos:** Manutenção do estilo "Magazine Editorial" na Locação e "Premium Dark" na Tech, mas com alto contraste e legibilidade.
- **Form Correction:** CTA da Seção 7 com âncora interna funcional.
- **Tracking Base:** Configuração e validação do GTM.

### Risk Mitigation Strategy

- **Technical Risks:** Complexidade de animação (GSAP) impactando performance móvel. *Mitigação:* Uso de easings padrão e transformações simples `opacity/y`.
- **Market Risks:** Falha no rastreamento de leads. *Mitigação:* Validação rigorosa dos IDs de formulário no GTM.

## Functional Requirements

### Estética & Layout (Premium B2B)

- **FR1:** O site deve apresentar duas landing pages distintas com identidades visuais separadas (Locação: Estilo High-End Editorial/Magazine; Tech: Estilo Premium Dark com camadas Onyx/Charcoal).
- **FR2:** O sistema deve aplicar `border-radius` consistentes (mínimo 24px) em todos os cards e containers principais para transmitir fluidez.
- **FR3:** O sistema deve exibir imagens de trajes masculinos (Suits) na 4ª dobra da página de Locação com tratamento visual sofisticado.
- **FR4:** O sistema deve utilizar uma paleta de cores de alto contraste, integrando o Roxo Vyrtech como acento (Locação) ou base de profundidade (Tech).
- **FR5:** O sistema deve implementar a Seção 3 em layout horizontal compacto (grid/carousel), permitindo leitura rápida sem scroll excessivo.

### Interação & Conversão (UX)

- **FR6:** O usuário pode clicar no CTA da Seção 7 e ser movido suavemente (âncora interna) para o formulário na mesma página.
- **FR7:** O sistema deve executar animações GSAP sutis focadas em transições orgânicas e reforço de autoridade no scroll.
- **FR8:** O sistema deve fornecer feedback visual instantâneo ao usuário após o preenchimento bem-sucedido do formulário.

### Rastreamento & Analytics (Data)

- **FR9:** O sistema deve disparar eventos específicos no GTM (`GTM-KZGXGTPD`) quando um formulário é enviado.
- **FR10:** O sistema deve associar os eventos aos IDs de formulário exigidos pelo cliente (`bottom_lead_form_id`, `hero_lead_form_id`).

### Performance & Acesso

- **FR11:** O sistema deve carregar as páginas via SSR (Next.js) para otimização de SEO básico.
- **FR12:** As páginas devem ser responsivas e otimizadas para navegadores modernos (Chrome, Safari, Edge, Firefox).

## Non-Functional Requirements

### Performance

- **Site Speed:** O site deve atingir uma pontuação mínima de **90/100 no Google PageSpeed Insights** (Mobile e Desktop).
- **Core Web Vitals:** O LCP (Largest Contentful Paint) deve ser inferior a **2.5 segundos**.
- **GSAP Fidelity:** As animações devem ser executadas a **60fps** estáveis em dispositivos móveis e desktop.

### Accessibility

- **WCAG Standards:** Garantia de contraste (Level AA) e navegação via teclado para suporte básico a acessibilidade.

### Security

- **Data Integrity:** Proteção básica contra spam no formulário da Seção 7 (honeypot/validação server-side).
