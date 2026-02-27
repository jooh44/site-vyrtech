---
stepsCompleted: ['step-01-validate-prerequisites']
inputDocuments: ['_bmad-output/planning-artifacts/prd.md', '_bmad-output/planning-artifacts/architecture.md', '_bmad-output/planning-artifacts/ux-design-specification.md']
---

# vyrtech - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for vyrtech, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: O site deve apresentar duas landing pages distintas com identidades visuais separadas (Locação: Estilo High-End Editorial/Magazine; Tech: Estilo Premium Dark com camadas Onyx/Charcoal).
FR2: O sistema deve aplicar `border-radius` consistentes (mínimo 24px) em todos os cards e containers principais para transmitir fluidez.
FR3: O sistema deve exibir imagens de trajes masculinos (Suits) na 4ª dobra da página de Locação com tratamento visual sofisticado.
FR4: O sistema deve utilizar uma paleta de cores de alto contraste, integrando o Roxo Vyrtech como acento (Locação) ou base de profundidade (Tech).
FR5: O sistema deve implementar a Seção 3 em layout horizontal compacto (grid/carousel), permitindo leitura rápida sem scroll excessivo.
FR6: O usuário pode clicar no CTA da Seção 7 e ser movido suavemente (âncora interna) para o formulário na mesma página.
FR7: O sistema deve executar animações GSAP sutis focadas em transições orgânicas e reforço de autoridade no scroll.
FR8: O sistema deve fornecer feedback visual instantâneo ao usuário após o preenchimento bem-sucedido do formulário.
FR9: O sistema deve disparar eventos específicos no GTM (`GTM-KZGXGTPD`) quando um formulário é enviado.
FR10: O sistema deve identificar no GTM se o lead veio da página de 'Atelier' ou da página 'Tech' através de IDs únicos nos formulários.
FR11: O sistema deve carregar as páginas via SSR (Next.js) para otimização de SEO básico.
FR12: As páginas devem ser responsivas e otimizadas para navegadores modernos (Chrome, Safari, Edge, Firefox).

### NonFunctional Requirements

NFR1: O site deve atingir uma pontuação mínima de 90/100 no Google PageSpeed Insights (Mobile e Desktop).
NFR2: O LCP (Largest Contentful Paint) deve ser inferior a 2.5 segundos.
NFR3: As animações GSAP devem ser executadas a 60fps estáveis em dispositivos móveis e desktop.
NFR4: Garantia de contraste (Level AA) e navegação via teclado para suporte básico a acessibilidade (WCAG 2.1).
NFR5: Proteção básica contra spam no formulário da Seção 7 (honeypot/validação server-side).

### Additional Requirements

- **Framework & Infrastructure:** Next.js with SSR is mandatory for SEO and performance.
- **Animation Engine:** GSAP 3.x for micro-interactions and scroll-triggered reveals.
- **Tracking:** GTM-KZGXGTPD setup with specific form IDs (`bottom_lead_form_id`, `hero_lead_form_id`).
- **Styling:** Tailwind CSS 4.0 for elite visual uniqueness and performance.
- **Geometry Tokens:** Global application of `border-radius: 1.5rem` (24px) to all main containers.
- **Section 3 Layout:** Compact horizontal scroller cards (approx. 400px width).
- **Smooth Scroll:** 1.2s GSAP smooth-scroll for all internal anchors.
- **Responsive Strategy:** Mobile-first with compact horizontal benefit scrollers.

### FR Coverage Map

FR1: Epic 1 & 2 - Distinct identities for Atelier and Tech pages.
FR2: Epic 1 - Consistent 24px border-radius system.
FR3: Epic 1 - Suit imagery on Atelier page.
FR4: Epic 1 & 2 - Color palettes (Wine/Light for Atelier, Dark/Onyx for Tech).
FR5: Epic 3 - Horizontal scroller for Section 3.
FR6: Epic 4 - Smooth anchor to Section 7 form.
FR7: Epic 3 - GSAP animations for Section 3 reveals.
FR8: Epic 4 - Visual feedback for form submission.
FR9: Epic 5 - GTM event dispatching on submission.
FR10: Epic 5 - Unique form IDs (`bottom_lead_form_id`, `hero_lead_form_id`) for page-specific tracking.
FR11: Epic 1 - Next.js SSR validation.
FR12: Epic 1 - Responsive foundation validation.

## Epic List

### Epic 1: High-End Editorial Landing Page (Atelier)

Implement the luxury magazine-style layout for the clothing rental niche with high-contrast wine/light aesthetics and refactor components to use the 24px global border radius.
**FRs covered:** FR1, FR2, FR3, FR4, FR11, FR12

### Epic 2: Premium Dark Landing Page (Tech)

Deploy the growth-focused tech landing page using deep onyx/charcoal layers and the Vyrtech purple base.
**FRs covered:** FR1, FR4

### Epic 3: Horizontal Value Discovery System (Section 3)

Build the high-fidelity horizontal scroller for Section 3 across both pages, powered by GSAP.
**FRs covered:** FR5, FR7

### Epic 4: Frictionless Lead Capture & Smooth Navigation

Implement the Section 7 conversion form and the internal anchor system for a seamless user journey.
**FRs covered:** FR6, FR8

### Epic 5: Integrated Tracking & Growth Analytics

Finalize the GTM integration with unique identifiers to ensure lead predictability and data precision.
**FRs covered:** FR9, FR10

## Detail - Epic 1: High-End Editorial Landing Page (Atelier)

Implement the luxury magazine-style layout for the clothing rental niche, refactoring the existing Next.js components to use the new 24px fluid geometry system and high-contrast wine/light aesthetics.

### Story 1.1: Refactoring Global Geometry & Responsive Base

As a User,
I want the site's layout to feel consistently fluid and adapt perfectly to my screen,
So that the experience feels sophisticated and professional on any device.

**Acceptance Criteria:**

**Given** the existing Next.js and Tailwind 4.0 codebase
**When** I view the general structural containers
**Then** a global `border-radius: 1.5rem` (24px) should be applied uniformly across refactored components
**And** the layout should adapt to a 12-column grid on desktop while stacking cleanly on mobile
**And** SSR rendering of metadata should be preserved

### Story 1.2: Editorial Hero & Typography Setup

As a User,
I want to see a high-impact editorial hero section,

So that I immediately feel the luxury and authority of the brand.

**Acceptance Criteria:**

**Given** the project layout
**When** I visit the Atelier page
**Then** the hero section should reflect an asymmetrical "Magazine" layout
**And** PP Editorial New typography should be used for headers

### Story 1.3: Color Palette & Whitespace Reduction (Atelier)

As a User,
I want the Atelier page to have a sophisticated color palette with high contrast,
So that the high-ticket positioning is clear, legible, and visually striking without feeling empty.

**Acceptance Criteria:**

**Given** the design tokens and PRD copy
**When** the Atelier theme is active
**Then** the primary wine color (`#6D2749`) should be applied as the main background for at least 1-2 major sections to drastically reduce plain whitespace
**And** the contrast ratio must meet WCAG AA standards
**And** the exact copy for Hero ("8 Noivas por dia...") and constraints ("O tráfego da rua não pode ditar...") must be strictly applied as per the PRD.

### Story 1.4: Masculine Suits Showcase (Background Integration)

As a User interested in male gala attire,
I want to see masculine imagery integrated seamlessly into the design flow,
So that I know the atelier also caters to masculine needs with the same level of sophistication.

**Acceptance Criteria:**

**Given** the 3rd or 4th fold of the Atelier page
**When** I scroll to this section
**Then** high-quality images of men's suits must be applied as **background elements** with a dark/wine overlay
**And** the presentation must mimic the sophisticated "Hero section" style, avoiding generic boxed images.

## Detail - Epic 2: Premium Dark Landing Page (Tech)

Deploy the growth-focused tech landing page using deep onyx/charcoal layers and the Vyrtech purple base.

### Story 2.1: Premium Dark Theme & Layout Structure

As a User,
I want to see a professional tech-focused layout,
So that I feel the technical precision and reliability of Vyrtech.

**Acceptance Criteria:**

**Given** the tech page theme
**When** I visit the Tech page
**Then** the background should utilize deep onyx and charcoal layers
**And** the 12-column grid should be used for technical alignment

### Story 2.2: Tech-Focused Typography & Visual Hierarchy

As a User,
I want the typography to reflect technical precision,
So that the information is easy to parse and looks professional.

**Acceptance Criteria:**

**Given** the Tech page
**When** I read the headers
**Then** Inter Tight typography should be applied
**And** tracking should be reduced to signal modern tech aesthetics

### Story 2.3: Interactive Depth & Layering (Glassmorphism)

As a User,
I want a modern interactive feel on the tech page,
So that the product categories are clearly differentiated and visually appealing.

**Acceptance Criteria:**

**Given** the Tech landing page
**When** I hover over product components
**Then** glassmorphic effects (blurred boundaries) should be visible
**And** Vyrtech purple accents should highlight interactive elements

## Detail - Epic 3: Horizontal Value Discovery System (Section 3)

Build the high-fidelity horizontal scroller for Section 3 across both pages, powered by GSAP.

### Story 3.1: GSAP Scroller Architecture & Smooth Scroll

As a User,
I want to navigate benefits horizontally with smooth transitions,
So that I can quickly absorb project value without scroll fatigue.

**Acceptance Criteria:**

**Given** Section 3 of either landing page
**When** I scroll into the section
**Then** the horizontal scroller should activate
**And** GSAP smoothed transitions (1.2s dur) should control the slide movement

### Story 3.2: Dynamic Benefit Card Component

As a User,
I want the horizontal value cards to adapt visually to the page context,
So that I receive clear, readable information whether I am exploring the Atelier or Tech services.

**Acceptance Criteria:**

**Given** the horizontal scroller
**When** card data is rendered
**Then** cards should be 400px wide (responsive)
**And** themes (Editorial Wine or Tech Onyx) should be automatically applied based on the parent page

### Story 3.3: Scroll-Triggered State Reveals

As a User,
I want to see content revealed progressively as I scroll,
So that the experience feels high-fidelity and sophisticated.

**Acceptance Criteria:**

**Given** the horizontal scroller section
**When** I scroll horizontally
**Then** GSAP ScrollTrigger should reveal benefit cards sequentially
**And** micro-interactions (opacity/Y-offset) should be triggered during the reveal

## Detail - Epic 4: Frictionless Lead Capture & Smooth Navigation

Implement the Section 7 conversion form and the internal anchor system for a seamless user journey.

### Story 4.1: High-Conversion Lead Capture Form (Section 7)

As a User,
I want to submit my information through a simple, well-validated form,
So that I can request a service without friction or confusion.

**Acceptance Criteria:**

**Given** the Section 7 form
**When** I enter my Name, Email, and Niche
**Then** the form should validate data in real-time
**And** a honeypot field should protect against automated spam submission

### Story 4.2: Smooth Internal Navigation (CTA Âncora)

As a User,
I want CTA buttons to move me directly to the lead form,
So that I don't have to manually scroll and search for where to sign up.

**Acceptance Criteria:**

**Given** any main CTA button on the page
**When** I click the button
**Then** I should be moved smoothly (1.2s GSAP) to the Section 7 form
**And** the focus should shift to the first form field

### Story 4.3: Visual Submission Feedback & Confirmation

As a User,
I want clear feedback after submitting a form,
So that I know my request was successfully received.

**Acceptance Criteria:**

**Given** a successful form submission
**When** the server acknowledges the data
**Then** the form should transition to a "Lead Sent" state
**And** a green glassmorphic glow should provide positive visual reinforcement

## Detail - Epic 5: Integrated Tracking & Growth Analytics

Finalize the GTM integration with unique identifiers to ensure lead predictability and data precision.

### Story 5.1: GTM Environment & Base DataLayer Setup

As a Marketer,
I want the data tracking framework (GTM) to be actively capturing data,
So that I can accurately monitor conversion rates based on true user interactions.

**Acceptance Criteria:**

**Given** the production environment
**When** the site loads
**Then** the `GTM-KZGXGTPD` container should be initialized
**And** the DataLayer should be ready for event queuing

### Story 5.2: Custom Form Event Tracking (Section 7)

As a Marketer,
I want form submissions to trigger GTM events,
So that I can measure conversion rates accurately.

**Acceptance Criteria:**

**Given** a successful form submission
**When** the form state changes to "Lead Sent"
**Then** a custom event (`vyrtech_lead_submission`) should be dispatched to the DataLayer
**And** it should include parameters for validation status

### Story 5.3: Multi-Page Source Identification (Form IDs)

As a Business Analyst,
I want to know exactly which page generated each lead,
So that I can allocate marketing resources based on performance.

**Acceptance Criteria:**

**Given** the Section 7 form on either page
**When** the tracking event is dispatched
**Then** the event should include the specific client-requested form ID (`bottom_lead_form_id` or `hero_lead_form_id`)
**And** the GTM debug console should verify the correct ID is passed for each page
