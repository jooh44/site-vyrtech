# Story 1.1: Refactoring Global Geometry Responsive Base

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a UI Developer,
I want to implement the global design tokens and fluid geometry system,
so that the site has a consistent, sophisticated, and fluid aesthetic.

## Acceptance Criteria

1. **Color Palette Tokens:** Global CSS variables defined for `--vyr-wine` (#6D2749), `--vyr-dark` (#08080A), `--vyr-onyx` (gradient layer), and `--vyr-charcoal` in Tailwind 4.0 `@theme` block. [Source: epics.md#L18 / ux-design-specification.md#L39]
2. **Fluid Geometry:** Global `border-radius: 1.5rem` (24px) established as the standard for all main containers and cards. [Source: epics.md#L17 / ux-design-specification.md#L45]
3. **Tailwind Interoperability:** Custom tokens must be usable via Tailwind utility classes (e.g., `text-vyr-wine`, `rounded-vyr-fluid`).
4. **Contrast Verification:** Ensure Wine/Dark palette combinations meet WCAG AA standards. [Source: prd.md#L212]

## Tasks / Subtasks

- [ ] Define Extended Theme in globals.css (AC: #1, #2, #3)
  - [ ] Update `src/app/globals.css` with `@theme` variables for colors and radius
  - [ ] Map `rounded-xl` or custom `rounded-vyr-fluid` to `1.5rem`
- [ ] Create Design System Preview Page (AC: #4)
  - [ ] Build a temporary `/design-system` route showing all colors and geometric applications
  - [ ] Validate contrast ratios using a headless accessibility checker or manual verification
- [ ] Audit Base UI Components (AC: #3)
  - [ ] Ensure any newly created components in `src/components/ui` utilize these tokens

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. Do NOT overwrite the base `globals.css` or core configurations. Refactor existing components to match new geometry and flow.

- **Architecture Compliance:** Use Tailwind 4.0's CSS-variable-first approach. Do not hardcode hex values in component files.
- **Performance:** Ensure that the CSS variables do not cause excessive style recalculations on mobile.
- **Source tree components:** `src/app/globals.css`, `src/components/ui/*`.

### Project Structure Notes

- All global styles MUST stay in `src/app/globals.css`.
- UI Primitives must be stored in `src/components/ui/`.

### References

- [Epics: FR2 & FR4](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L51)
- [UX Spec: Color Palette & Geometry](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L37-L47)
- [PRD: Success Criteria - Adherence Estética](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L62)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
