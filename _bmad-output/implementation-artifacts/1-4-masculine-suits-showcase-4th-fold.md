# Story 1.4: Masculine Suits Showcase 4th Fold

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User interested in male gala attire,
I want to see dedicated imagery for suits,
so that I know the atelier also caters to masculine needs.

## Acceptance Criteria

1. **Suits Imagery:** High-quality imagery of men's suits integrated into the 4th fold of the Atelier page. [Source: epics.md#L179 / prd.md#L182]
2. **Editorial Presentation:** The image presentation must match the editorial "Magazine" aesthetic of the rest of the page (asymmetrical, premium). [Source: epics.md#L180]
3. **Fluid Geometry:** Image containers must use `border-radius: 1.5rem` (24px). [Source: prd.md#L164]
4. **Micro-interactions:** Subtle GSAP reveal (opacity/scale) as the user scrolls to the 4th fold. [Source: ux-design-specification.md#L51]

## Tasks / Subtasks

- [ ] Identify/Generate Assets (AC: #1)
  - [ ] Use `generate_image` tool to create High-End masculine suit imagery if not provided
- [ ] Implement Suits Section Component (AC: #1, #2)
  - [ ] Create `SuitsShowcase.tsx` in `src/components/ui`
  - [ ] Layout the section to appear precisely in the 4th scroll fold
- [ ] Apply Styling & Animations (AC: #3, #4)
  - [ ] Wrap images in `rounded-vyr-fluid` containers
  - [ ] Setup `ScrollTrigger` for a subtle reveal animation
- [ ] Verify Mobile Display (AC: #2)
  - [ ] Ensure the showcase remains elegant and readable on mobile screens

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Use `next/image` for optimized loading and to avoid LCP issues.
- **GSAP:** Use `ScrollTrigger` with `scrub: false` for a one-time "sophisticated" reveal.
- **Source tree components:** `src/components/ui/SuitsShowcase.tsx`.

### Project Structure Notes

- Images and media should be modular and easily replaceable.

### References

- [PRD: Product Scope - Visual Refresh](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L77)
- [UX Spec: Design Opportunities - Inclusive Imagery](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L33)
- [Epics: Story 2.3 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L175-L181)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
