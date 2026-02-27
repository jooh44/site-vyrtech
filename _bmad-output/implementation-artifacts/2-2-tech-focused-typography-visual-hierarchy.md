# Story 2.2: Tech Focused Typography Visual Hierarchy

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want the typography to reflect technical precision,
so that the information is easy to parse and looks professional.

## Acceptance Criteria

1. **Tech Typography:** All Tech page headers must use `Inter Tight` (or a modern geometric sans) with tracking reduced (e.g., `-0.02em`). [Source: epics.md#L209 / ux-design-specification.md#L172]
2. **Visual Hierarchy:** Clear differentiation between H1 (4rem), H2 (2.5rem), and Body (1rem/1.6 line-height). [Source: ux-design-specification.md#L174]
3. **Copy Accuracy:** Implementation of the updated Tech copy: "Projeção de aumento de vendas" (replacing "Projeção de Melhorias de CRO"). [Source: prd.md#L76]
4. **Legibility:** High-contrast text on dark backgrounds ensuring WCAG AA compliance. [Source: epics.md#L34]

## Tasks / Subtasks

- [ ] Font Configuration (AC: #1)
  - [ ] Add `Inter Tight` to the project font stack in `layout.tsx` or `globals.css`
- [ ] Apply Typography Scale (AC: #2)
  - [ ] Implement Tailwind utility mappings for the 4rem/2.5rem/1.5rem/1rem scale
- [ ] Update Tech Page Copy (AC: #3)
  - [ ] Perform a global find/replace or targeted update for the "Projeção de aumento de vendas" phrase
- [ ] Visual Hierarchy Audit (AC: #2, #4)
  - [ ] Ensure that H1/H2 have enough contrast and "breathability" via tracking and line-height

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Use `next/font` for optimized font loading.
- **Performance:** Ensure only necessary font weights are loaded to minimize payload.
- **Source tree components:** `src/app/tech/page.tsx`, `src/components/ui/TechTypography.tsx`.

### Project Structure Notes

- Centralize typography tokens in the Tailwind theme for easy maintenance.

### References

- [PRD: Product Scope - Section 6 Tech Copy](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L76)
- [UX Spec: Typography System](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L170-L175)
- [Epics: Story 3.2 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L205-L211)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
