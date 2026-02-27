---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
inputDocuments: ['_bmad-output/planning-artifacts/prd.md', '_bmad-output/project-context.md']
---

# UX Design Specification vyrtech

**Author:** Johny
**Date:** 2026-02-26T23:36:00-03:00

---

## Executive Summary

### Project Vision

Transform existing landing pages into high-impact lead traction systems. The goal is to move from passive informative pages to active growth tools that provide predictability (previsibilidade) for the client.

### Target Users

- **Fabiana (Atelier Owner):** High-ticket boutique owner looking for luxury and authority to filter for qualified leads.
- **Marcos (Tech/Growth Manager):** Scaling-focused leader seeking professional, reliable, and non-cliché tech solutions.

### Key Design Challenges

- **Performance vs. Luxury:** Maintaining a 90+ PageSpeed score while using rich GSAP animations and high-res imagery.
- **Context Swapping:** Ensuring a clear distinction between the "Editorial" feel of Locação and the "Premium Dark" feel of Tech, while maintaining a unified brand.

### Design Opportunities

- **Luxury Aesthetic:** Transition from angular/square divs to broad rounded corners (`rounded-xl`+ / 24px) reflecting fluidity and sophistication (perfect for wedding/gala attire).
- **Efficient Layout:** Transforming the long vertical scroll of Section 3 into a compact horizontal scroller to reduce scroll fatigue.
- **Inclusive & Immersive Imagery:** Integration of high-quality masculine suit imagery applied as **background elements with dark overlays** (e.g., in the 3rd or 4th fold) to match the sophistication of the Hero section, rather than isolated generic images.
- **Color Saturation (Combating Whitespace):** Expanding the use of the Vyrtech primary color (`--vyr-wine`) beyond just accents. It will be used for large background blocks on the Atelier page to reduce the "too white/low contrast" feeling and elevate the premium aesthetic.

## Design System & Tokens

### Color Palette

- **Primary Wine:** `#6D2749` (`--vyr-wine`)
- **Dark Base:** `#08080A` (`--vyr-dark`)
- **Accent Depth:** Onyx / Charcoal gradients for depth layers in Tech mode.

### Geometry & Spacing

- **Border Radius:** `24px` / `1.5rem` (`rounded-xl`) applied to all main containers for fluid, sophisticated aesthetics.
- **Section Spacing:** Compact horizontal layouts for Section 3 to maximize above-the-fold engagement.

### Motion & Interaction

- **Engine:** GSAP 3.x
- **Transitions:** Organic opacity and Y-axis transforms for subtle "scroll reveals".
- **Behavior:** Global smooth scroll enabled.

### Analytics & Compliance

- **GTM Tag:** `GTM-KZGXGTPD`
- **Form Identifiers:** `vyrtech-form-noivas`, `vyrtech-form-tech`

## Core User Experience

### 2.1 Defining Experience

**"Authoritative Discovery"**: Moving through a Vyrtech page should feel like a guided tour of a high-end showroom. The layout reinforces authority through editorial typography and high-fidelity reveals.

### 2.2 User Mental Model

- **Vyrtech Model:** "The website is the first interaction with my premium service; it must feel as polished as the service itself."
- **User Expectation:** Instant loading, effortless navigation, and a direct, visible path to resolution (leads).

### 2.3 Success Criteria

- **Instant Authority:** A measurable "Wow" factor within 3s of entry.
- **Cognitive Ease:** Zero searching for CTAs; the design naturally points towards conversion.
- **Tactile Response:** Every hover/click provides an elegant GSAP organic response.

### 2.4 Novel UX Patterns

- **Hybrid Editorial-Tech Grid:** Luxury magazine asymmetrical balance meets high-density tech grids (Linear-style).
- **The "Slide Reveal":** Horizontal movement in Section 3 to break vertical fatigue and present "Alvo em Safra", "Fertilização" compactly.
- **Organic Fluidity:** Eschewing harsh angles for smooth, rounded containers that evoke tailored fit and sophistication.

### 2.5 Experience Mechanics

1. **Initiation:** Typography reveals via Y-axis GSAP animation upon entry.
2. **Interaction:** Scroll-triggered horizontal benefit cards to ensure value absorption.
3. **Feedback:** Subtle "glow" or "scale" effects on lead triggers.
4. **Completion:** High-contrast, simplified form experience for conversion.

## Desired Emotional Response

### Primary Emotional Goals

- **Absolute Trust:** Users must feel that Vyrtech is the definitive authority in their niche.
- **Inspirational Relief:** The "Aha!" moment of finding a partner who balances scale and quality.

### Emotional Journey Mapping

- **Discovery:** Awe & Curiosity (driven by rounded geometry and high-fidelity reveals).
- **Interaction:** Control & Clarity (driven by compact layouts and smooth motion).
- **Conversion:** Confidence & Anticipation (frictionless form transitions).

### Micro-Emotions

- **Delight:** Subtle animations that breathe life into the "Editorial" layout.
- **Exclusivity:** A sense of high-ticket belonging for the Atelier persona.
- **Precision:** A feeling of accurate measurement and "Previsibilidade" for the Tech persona.

### Design Implications

- **Trust → Qualidade:** High-resolution imagery and CSS precision (autofill, theme variables).
- **Confidence → Transparência:** Horizontal grids for transparent value communication.
- **Delight → Micro-interações:** Sophisticated, timed button transitions.

### Emotional Design Principles

- **Authority through Aesthetics:** Elite visuals as a barrier against lower-tier competitors.
- **Quiet Power:** "Whisper-quiet" organic animations that never distract.
- **Predictability as Calm:** Intuitive site behavior that aligns with user expectations.

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

Analysis of elite sources like Dior/Chanel for whitespace and Vogue for editorial hierarchy, contrasted with Linear for tech precision and Vercel for performance cues.

### Transferable UX Patterns

- **Linear Grid:** Compact horizontal Section 3 blocks for efficient value delivery.
- **Editorial Scroll:** Magazine-style page reveals via GSAP.
- **Glassmorphism:** Layered depth for a premium "Growth Tech" feel.

### Anti-Patterns to Avoid

- **Generic Agency Layouts:** Angular corners and flat, clichè stock photos.
- **Vertical Scroll Fatigue:** Overly long vertical sections.
- **Visual Noise:** Fragmented color palettes; sticking to Onyx/Wine spectrum.

### Design Inspiration Strategy

- **Adopt:** Dior-style high-end editorial aesthetics for Atelier page.
- **Adopt:** Linear-style horizontal "Benefit Grids" for Section 3 efficiency.
- **Adapt:** GSAP ScrollTrigger for pacing the storytelling reveals.
- **Avoid:** Any "Budget" design indicators that compromise High-Ticket trust.

## Design System Foundation

### Design System Choice

Custom Design System built with **Tailwind CSS 4.0**.

### Rationale for Selection

Essential for "High-Ticket" visual uniqueness, performance budget (90+ PageSpeed), and precise application of fluid geometry tokens (24px radius).

### Implementation Approach

Utility-first components in `src/components/ui`, centralized `@theme` variables in `globals.css`, and mapping tokens directly to GSAP transition presets.

### Customization Strategy

Standardization of brand-specific wine/dark colors and a "Compact Horizontal" spacing rule for performance and mobile efficiency.

## Visual Design Foundation

### Color System

- **Brand Palette:** `--vyr-wine` (#6D2749), `--vyr-dark` (#08080A), Charcoal Gray (#1A1A1C), Lead White (#F8F8F8).
- **Semantic mapping:** Primary (Wine), Surface (Dark), Border (Charcoal), Action (White).
- **Atelier Strategy (Combating Whitespace):** Use `--vyr-wine` aggressively as the background color for at least 2 major sections (e.g., Section 2 or the Footer) to break up the white space and create a high-contrast, premium storytelling rhythm.

### Typography System

- **Headings:** PP Editorial New / Inter Tight. Large, tracking-reduced headers.
- **Body:** Inter (Regular), 1.6 line-height.
- **Scale:** 4rem (H1) → 2.5rem (H2) → 1.5rem (H3) → 1rem (Body).

### Spacing & Layout Foundation

- **Base Unit:** 8px (0.5rem).
- **Grid Strategy:** Asymmetrical whitespace for Atelier; 12-column recursive grid for Tech.
- **Section 3:** Fixed-height horizontal scroller cards (400px width).

### Accessibility Considerations

- **Contrast:** AA/AAA compliance for all text pairings.
- **Motion:** Full support for `prefers-reduced-motion`.
- **Zooming:** Fluid layouts tested up to 200% zoom.

## Design Direction Decision

### Directions Explored

Explored "Editorial Luxury" (High-whitespace) vs "Technical Precision" (High-density dark grids).

### Chosen Direction

**The Vyrtech Standard (Hybrid)**: Luxury editorial headers combined with horizontal "Linear-style" benefit grids.

### Strategic Rationale

Signals elite status to the Atelier persona while providing the technical "Previsibilidade" (predictability) the Tech persona requires.

### Direction Implementation

- **Layout:** Vertical storytelling reveals for hero sections; horizontal grids for Section 3 methodology.
- **GSAP:** Organic Y-axis reveals for components.
- **Depth:** Subtle glassmorphic layers for technical separation.

## User Journey Flows

### Journey 01: The "High-Ticket" Path (Atelier)

Builds authority and emotional connection through "Editorial Hero Reveal" and interactive storytelling before asking for the lead. Path: Discovery → 3s Authority → Vertical Story → Section 3 Scroller → Seamless Form Drop.

### Journey 02: The "Scale & Growth" Path (Tech)

Focuses on technical precision and immediate value clarity using "Premium Dark" theme and high-density grids. Path: Entry → Value Reveal → Horizontal Benefit Grid → Tech Specs → Instant Form Focus.

### Journey Patterns

- **The Frictionless Drop:** GSAP ScrollTo ensuring narrative continuity to the form.
- **Progressive Authority:** Layered technical detail reveal upon engagement.

### Flow Optimization Principles

- **Efficiency:** 3-field initial lead capture (Name, Email, Niche).
- **Delight:** Subtle glow effects on input focus.
- **Error Recovery:** Real-time feedback in premium aesthetic styles.

## Component Strategy

### Design System Components

Leveraging Tailwind 4.0 primitives for Buttons, Inputs, and responsive Grids.

### Custom Components

- **Editorial Hero:** High-impact aspherical typography + parallax.
- **Linear Benefit Cards:** Horizontal scroller with hover glow effects.
- **Drop Reveal Form:** GSAP Y-axis reveal component for lead capture.

### Component Implementation Strategy

Priority: 1. Core Actions (Form/Buttons) → 2. Experience Core (Hero/Scroller) → 3. Polish (Animations).

### Implementation Roadmap

- **Phase 1:** Core Actions (Lead Traction).
- **Phase 2:** High-Fidelity Experience (Storytelling).
- **Phase 3:** Micro-interactions (GSAP optimizations).

## UX Consistency Patterns

### Button Hierarchy

- **Primary:** High-contrast, rounded-full, with organic GSAP "Lift".
- **Secondary:** Outlined/Ghost style with subtle background glow.
- **Tertiary:** Discrete text links with animated underline reveal.

### Feedback Patterns

- **Success:** Button transforms to "Lead Sent" checkmark + green glassmorphic glow.
- **Error:** Shaking animation + red border-glow (non-intrusive).
- **Loading:** Subtle button pulse (maintains background visual integrity).

### Form Patterns

- **Focus:** 2px `--vyr-wine` ring + background dimming.
- **Validation:** 500ms debounced real-time checks.

### Navigation Patterns

- **Behavior:** Fade-in on scroll-up; hidden on scroll-down (immersion).
- **Motion:** 1.2s GSAP smooth-scroll for all anchors.

## Responsive Design & Accessibility

### Responsive Strategy

- **Mobile First:** Compact horizontal benefit scrollers for high-density value.
- **Desktop:** 1200px+ editorial layouts with high whitespace.
- **Tablet:** Side-by-side technical specification grids.

### Breakpoint Strategy

Tailwind 4.0 defaults with custom adjustments for legibility at `360px`.

### Accessibility Strategy

- **Compliance:** WCAG 2.1 Level AA.
- **Keyboard:** Wine-colored focus rings; skip-animation logic.
- **Reduced Motion:** Automated GSAP simplification.

### Testing Strategy

- **Responsive:** Real device performance testing (iPhone/Samsung).
- **Accessibility:** Axe/Lighthouse automated scans + VoiceOver testing.

### Implementation Guidelines

- **Units:** `rem` for type and `%`/`vw` for containers.
- **Structure:** Full semantic HTML implementation for authority.
