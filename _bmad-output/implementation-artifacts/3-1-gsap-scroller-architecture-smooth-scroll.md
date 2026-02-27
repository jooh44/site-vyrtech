# Story 3.1: Gsap Scroller Architecture Smooth Scroll

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want to navigate benefits horizontally with smooth transitions,
so that I can quickly absorb project value without scroll fatigue.

## Acceptance Criteria

1. **Horizontal Scroller:** Section 3 across both pages (Atelier and Tech) must be transformed from a long vertical layout into a compact horizontal scroller. [Source: epics.md#L239 / prd.md#L165]
2. **GSAP Smoothness:** Transitions must utilize GSAP with a 1.2s duration for organic-feeling movement. [Source: epics.md#L240 / ux-design-specification.md#L273]
3. **ScrollTrigger Integration:** The horizontal scroller must be triggered by the user's vertical scroll (Scrub behavior). [Source: epics.md#L265 / ux-design-specification.md#L142]
4. **Fluid Layout Consistency:** Scroller containers must maintain the global `1.5rem` (24px) border-radius. [Source: prd.md#L164]

## Tasks / Subtasks

- [ ] Initialize Section 3 Component (AC: #1)
  - [ ] Create `HorizontalScroller.tsx` in `src/components/ui`
  - [ ] Implement a `sticky` wrapper to pin the section during horizontal transition
- [ ] Connect GSAP ScrollTrigger (AC: #2, #3)
  - [ ] Setup `useGSAP` hook with `ScrollTrigger`
  - [ ] Map vertical scroll delta to horizontal `translateX` of the internal card container
- [ ] Smooth Scroll Configuration (AC: #2)
  - [ ] Implement/verify global smooth scroll behavior (Lenis or GSAP ScrollSmoother if available)
- [ ] Mobile Optimization (AC: #1)
  - [ ] Ensure horizontal swiping works naturally on touch devices

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Use `Client Components` for the scroller since it's GSAP-heavy.
- **Performance:** Use `will-change: transform` to optimize the GPU layer during scrolling.
- **Source tree components:** `src/components/ui/HorizontalScroller.tsx`.

### Project Structure Notes

- The scroller should be generic enough to accept different card data for Atelier vs Tech pages.

### References

- [PRD: Product Scope - Re-layout da Seção 3](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L80)
- [UX Spec:Transferable UX Patterns - Linear Grid](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L128)
- [Epics: Story 4.1 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L235-L241)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
