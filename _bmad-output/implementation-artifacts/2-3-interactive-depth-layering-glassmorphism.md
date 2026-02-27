# Story 2.3: Interactive Depth Layering Glassmorphism

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want a modern interactive feel on the tech page,
so that the product categories are clearly differentiated and visually appealing.

## Acceptance Criteria

1. **Glassmorphic Effects:** Product category cards and interactive layers must utilize glassmorphism (translucent backgrounds with blur filters). [Source: epics.md#L222 / ux-design-specification.md#L130]
2. **Interactive Accents:** Vyrtech purple (#6D2749 or lighter variant) must highlight active or hovered elements. [Source: epics.md#L223 / ux-design-specification.md#L41]
3. **Hover States:** Subtle glow or scaling effects (organic GSAP pulse) on primary tech-page triggers. [Source: ux-design-specification.md#L74]
4. **Fluid Geometry Bindings:** Glassmorphic layers must adhere to the `1.5rem` (24px) border-radius system. [Source: prd.md#L164]

## Tasks / Subtasks

- [x] Implement Glassmorphism Utility (AC: #1)
  - [x] Create a reusable Tailwind class for glass-blur (e.g., `bg-white/10 backdrop-blur-md`)
- [x] Build Category Cards (AC: #1, #2, #4)
  - [x] Create `TechCategoryCard.tsx` in `src/components/ui`
  - [x] Apply `rounded-vyr-fluid` and glass effects
- [x] Add Gsap Interactivity (AC: #3)
  - [x] Implement hover listeners that trigger a subtle GSAP "pulse" or "glow" reveal
- [x] Polish Accent Borders (AC: #2)
  - [x] Use 1px purple borders for glassmorphic elements to define boundaries in a dark environment

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Avoid overusing `backdrop-blur` as it can be GPU-intensive. Limit to primary UI elements.
- **GSAP:** Use `gsap.to()` for smooth hover transitions.
- **Source tree components:** `src/components/ui/TechCategoryCard.tsx`.

### Project Structure Notes

- Put glassmorphic presets in `globals.css` or Tailwind theme configuration.

### References

- [PRD: Innovation & Novel Patterns - Hierarchy of Contrast](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L123)
- [UX Spec: Transferable UX Patterns - Glassmorphism](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L130)
- [Epics: Story 3.3 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L219-L224)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

- Implemented reusable `.glass-panel` utility within `globals.css` with Tailwind 4.0 compatible variables and borders.
- Created `<TechCategoryCard />` component utilizing GSAP hover triggers and glassmorphic base layering.
- Updated `CasesSection.tsx` existing cards to use the `.glass-panel` layout, increasing depth and hover interaction fidelity.

### File List

- `src/app/globals.css`
- `src/components/ui/TechCategoryCard.tsx`
- `src/components/ui/CasesSection.tsx`
