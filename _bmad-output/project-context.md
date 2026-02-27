---
project_name: 'vyrtech'
user_name: 'Johny'
date: '2026-02-26T22:15:15-03:00'
sections_completed: ['technology_stack']
existing_patterns_found: 3
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- **Framework:** Next.js 16.1.6 (App Router)
- **Library:** React 19.2.3
- **Styling:** Tailwind CSS 4.0, PostCSS
- **Animations:** GSAP 3.14.2, Framer Motion 12.34.2
- **Icons:** Lucide React 0.575.0
- **Utilities:** clsx, tailwind-merge
- **Language:** TypeScript 5.0+

## Critical Implementation Rules

### Coding Patterns & Conventions

- **Routing Structure:**
  - `/` (Root): This is the **Tech/Agency Landing Page**. DO NOT create a separate `/tech` route.
  - `/locacao-de-roupas`: This is the **Atelier (Fashion Rental) Landing Page**.
- **Hero Guardrail:** The Hero section on the Tech page (`/` root) is complete and **PERFECT**. Do NOT modify `Hero.tsx` or the root Hero section unless explicitly requested.
- **Component Organization:** All UI components are located in `src/components/ui`.
- **Naming Convention:** Components use `PascalCase` (e.g., `Hero.tsx`, `CasesSection.tsx`).
- **Styling:** Use `@theme` in `src/app/globals.css` for custom color variables (e.g., `--color-vyr-wine`). Avoid hardcoding hex values in components; use the Tailwind classes derived from these variables (e.g., `text-vyr-wine`).
- **Imports:** Use the `@/*` alias for imports from the `src` directory.

### UI/UX Standards

- **Theme:** Dark, tech-focused aesthetic (Vyr-dark: `#08080A`, Vyr-wine: `#6D2749`).
- **Scroll Behavior:** Smooth scrolling enabled globally.
- **Form Handling:** Autofill styles are customized in `globals.css` to match the dark theme.

## Appendix: Raw Client Feedback (WhatsApp - Feb 2026)

_This section preserves the exact client requests that drove the divergence into the distinct "Atelier" and "Tech" Landing Pages._

### 1. Design & Estrutura

- "Colocar uma imagem/imagens de um homem de terno na quarta dobra pra remeter a trajes masculinos."
- "A página como um todo está muito branca, com pouco contraste."
- "As divs estão bem angulares e quadradas, dar uma arredondada remetendo fluidez e sofisticação, combinando com trajes de festa e casamento por exemplo."
- "A terça dobra está muito longa, tendo que escrolar muito. Ideal seria deixar mais compacto, tirando da vertical e colocando na horizontal."
- "As imagens de terno, pode ser de fundo da terceira dobra (que você vai alterar) ou da quarta ... Veja qual faz mais sentido. (Dá pra seguir o padrão da primeira dobra que ficou legal)"

### 2. Copy - Página Locação

- **Badge/H1/Sub:** "MÉTODO VALIDADO PARA LOCAÇÃO DE TRAJES | Coloque 8 Noivas por dia no seu provador e dobre o fechamento de Padrinhos | O sistema de tração que gera agendamentos qualificados diariamente e escalou ateliês de 40 para 80 locações semanais"
- **Seção 2:** "Título: O TRÁFEGO DA RUA NÃO PODE DITAR O SEU FATURAMENTO | Desc: A rua está cada vez menos movimentada e depender dos clientes entrarem na loja se tornou pouco lucrativo."
- **Seção 2 (Card 3):** "Título: Receita Imprevisível (ideia) / Desc: Depender de clientes da rua e indicação torna a sua receita cada vez mais imprevisível, sem saber se vai fechar o mês no positivo."
- **Seção 3:**
  - "Alvo em Safra: Definição de objetivos claros e alinhados com a realidade atual da empresa"
  - "Fertilização: execução estratégica com foco em alcançar os objetivos financeiros da empresa"
  - "Rastreamento: Monitoramento analítico e acompanhamento constante das métricas que movem o ponteiro"
  - "Aprimoramento: Análise dos resultados e melhoria contínua visando maximizar resultados e escalando através de ações guiadas"

### 3. Copy - Página Tech

- "Operamos como seu braço direito de crescimento (Troquei a palavra Growth por crescimento)"
- "Terceiro item lá de baixo... 'Projeção de aumento de vendas' (No lugar de projeção de melhorias de cro)"

### 4. Integração (GTM)

- Identificadores de formulário sugeridos pelo cliente nas imagens: `bottom_lead_form_id` e `hero_lead_form_id`.
