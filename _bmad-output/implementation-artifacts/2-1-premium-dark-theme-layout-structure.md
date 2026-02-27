# Story 2.1: Premium Dark Theme Layout Structure

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want to see a professional tech-focused layout,
so that I feel the technical precision and reliability of Vyrtech.

## Acceptance Criteria

1. **Premium Dark Aesthetic:** The page background must utilize deep onyx (#08080A) and charcoal layers for depth. [Source: epics.md#L196 / ux-design-specification.md#L41]
2. **Unified Grid:** Application of a strict 12-column grid for precise technical alignment of all components. [Source: epics.md#L197 / ux-design-specification.md#L179]
3. **Fluid Geometry:** All tech-page containers must maintain the global `border-radius: 1.5rem` (24px) for sophistication. [Source: prd.md#L164]
4. **Vyrtech Purple Accents:** Subtle use of the core purple color for interactive highlights and markers. [Source: ux-design-specification.md#L41]

## Tasks / Subtasks

- [x] Setup Tech Page Layout (AC: #1, #2)
  - [x] Create `tech/page.tsx` or handle theme switching in a unified `page.tsx`
  - [x] Apply `bg-vyr-dark` as the base background color
- [x] Implement Structural Layers (AC: #1)
  - [x] Create background "Onyx/Charcoal" layered divs to build visual depth
- [x] Apply Global Geometry (AC: #3)
  - [x] Ensure all Section wrappers use `rounded-vyr-fluid`
- [x] Accessibility Check (AC: #1)
  - [x] Verify that dark backgrounds provide sufficient contrast for Inter Tight typography

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Use Tailwind 4.0 `@theme` variables for depth colors if not already defined.
- **Performance:** Avoid heavy blurred layers that might impact mobile performance. Use CSS gradients for depth where possible.
- **Source tree components:** `src/app/tech/page.tsx`, `src/components/ui/TechHero.tsx`.

### Project Structure Notes

- Keep the Tech-specific components modular to allow for future pattern reuse.

### References

- [PRD: Product Scope - Section 6 Tech](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L76)
- [UX Spec: Target Users - Marcos](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L22)
- [Epics: Story 3.1 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L192-L198)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

- Updated `src/app/page.tsx` (the main structural Tech page) implementing the Premium Dark aesthetic using `bg-vyr-dark` and segmented wrappers around the existing content.
- Handled structural layers grouping `<ProblemsSection />` & `<SafraSection />` within a Charcoal depth layer (`bg-vyr-charcoal/30`), and `<CasesSection />` down within a deeper Onyx layer (`bg-vyr-darker`).
- Applied fluid geometry `rounded-t-vyr-fluid` to layer wrapping containers for vertical flow sophistication.
- Preserved all existing textual copy in Hero, Problems, and Safra sections natively.
- Readability is maintained using `vyr-lead-white` and `vyr-text-muted` against the deep backgrounds.

### File List

- `src/app/page.tsx`
