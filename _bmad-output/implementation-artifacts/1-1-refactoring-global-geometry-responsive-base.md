# Story 1.1: Refactoring Global Geometry Responsive Base

Status: done

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

- [x] Define Extended Theme in globals.css (AC: #1, #2, #3)
  - [x] Update `src/app/globals.css` with `@theme` variables for colors and radius
  - [x] Map `rounded-xl` or custom `rounded-vyr-fluid` to `1.5rem`
- [x] Create Design System Preview Page (AC: #4)
  - [x] Build a temporary `/design-system` route showing all colors and geometric applications
  - [x] Validate contrast ratios using a headless accessibility checker or manual verification
- [x] Audit Base UI Components (AC: #3)
  - [x] Ensure any newly created components in `src/components/ui` utilize these tokens

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

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

Antigravity (Gemini 2.0 Flash Thinking)

### Debug Log References

- No critical bugs found during implementation.
- Fixed minor lint errors in `TestimonialsSection` and `EditorialSafraSection`.

### Completion Notes List

- Implemented global design tokens in `globals.css` (Tailwind 4.0).
- Established fluid geometry base of `1.5rem` (24px).
- Created `/design-system` preview page for visual verification.
- Refactored 6 core UI components to use the new `rounded-vyr-fluid` token.
- Verified implementation via local linting and project build.

### File List

- [src/app/globals.css](file:///home/johny/Documentos/projetos/vyrtech/src/app/globals.css)
- [src/app/design-system/page.tsx](file:///home/johny/Documentos/projetos/vyrtech/src/app/design-system/page.tsx)
- [src/components/ui/ConversionForm.tsx](file:///home/johny/Documentos/projetos/vyrtech/src/components/ui/ConversionForm.tsx)
- [src/components/ui/EditorialConversionForm.tsx](file:///home/johny/Documentos/projetos/vyrtech/src/components/ui/EditorialConversionForm.tsx)
- [src/components/ui/EditorialSafraSection.tsx](file:///home/johny/Documentos/projetos/vyrtech/src/components/ui/EditorialSafraSection.tsx)
- [src/components/ui/ProblemsSection.tsx](file:///home/johny/Documentos/projetos/vyrtech/src/components/ui/ProblemsSection.tsx)
- [src/components/ui/TestimonialsSection.tsx](file:///home/johny/Documentos/projetos/vyrtech/src/components/ui/TestimonialsSection.tsx)
- [src/components/ui/CasesSection.tsx](file:///home/johny/Documentos/projetos/vyrtech/src/components/ui/CasesSection.tsx)
- [_bmad-output/implementation-artifacts/sprint-status.yaml](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/implementation-artifacts/sprint-status.yaml)
