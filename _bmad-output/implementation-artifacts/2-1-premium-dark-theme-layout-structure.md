# Story 2.1: Premium Dark Theme Layout Structure

Status: ready-for-dev

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

- [ ] Setup Tech Page Layout (AC: #1, #2)
  - [ ] Create `tech/page.tsx` or handle theme switching in a unified `page.tsx`
  - [ ] Apply `bg-vyr-dark` as the base background color
- [ ] Implement Structural Layers (AC: #1)
  - [ ] Create background "Onyx/Charcoal" layered divs to build visual depth
- [ ] Apply Global Geometry (AC: #3)
  - [ ] Ensure all Section wrappers use `rounded-vyr-fluid`
- [ ] Accessibility Check (AC: #1)
  - [ ] Verify that dark backgrounds provide sufficient contrast for Inter Tight typography

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. Do NOT overwrite the base `globals.css` or core configurations. Refactor existing components to match new geometry and flow.

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

### File List
