# Story 3.3: Scroll Triggered State Reveals

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want to see content revealed progressively as I scroll,
so that the experience feels high-fidelity and sophisticated.

## Acceptance Criteria

1. **Sequential Reveal:** Benefit cards must appear sequentially via GSAP `ScrollTrigger` as the user navigates the horizontal scroller. [Source: epics.md#L265 / ux-design-specification.md#L81]
2. **Micro-interactions:** Reveals should include subtle `opacity` and `Y-offset` transforms for an organic feel. [Source: epics.md#L266 / ux-design-specification.md#L51]
3. **Execution Fidelity:** Animations must run at a stable 60fps on mobile and desktop. [Source: prd.md#L208]
4. **Sophisticated Easing:** Use "whisper-quiet" organic animations (e.g., `power2.out`) that never distract. [Source: ux-design-specification.md#L117]

## Tasks / Subtasks

- [ ] Implement Reveal GSAP Timeline (AC: #1, #2, #4)
  - [ ] Use `gsap.timeline()` within the scroller component
  - [ ] Add staggered `from()` animations for the card children
- [ ] Optimize Scroll Performance (AC: #3)
  - [ ] Use GSAP's `lazy: true` and ensure no layout thrashing during scroll callbacks
- [ ] Mobile Responsiveness (AC: #3)
  - [ ] Simplify or disable heavy blur animations on low-power mobile devices if FPS drops
- [ ] Visual Refinement (AC: #4)
  - [ ] Audit the animation timing to ensure it feels "Luxury/High-Ticket" (not jittery or fast)

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. Do NOT overwrite the base `globals.css` or core configurations. Refactor existing components to match new geometry and flow.

- **Architecture Compliance:** Stick to the "Performance Budget" - 90+ score is the goal. Keep GSAP payload minimal.
- **GSAP:** Leverage `stagger` property for easy sequential reveals.
- **Source tree components:** `src/components/ui/HorizontalScroller.tsx`.

### Project Structure Notes

- Keep animation configuration (durations, easings) in a shared `animation-tokens.ts` if reuse is high.

### References

- [PRD: Non-Functional Requirements - GSAP Fidelity](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L208)
- [UX Spec: Quality Gates - Organic Fluidity](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L80)
- [Epics: Story 4.3 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L261-L267)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
