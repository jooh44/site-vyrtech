# Story 2.3: Interactive Depth Layering Glassmorphism

Status: ready-for-dev

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

- [ ] Implement Glassmorphism Utility (AC: #1)
  - [ ] Create a reusable Tailwind class for glass-blur (e.g., `bg-white/10 backdrop-blur-md`)
- [ ] Build Category Cards (AC: #1, #2, #4)
  - [ ] Create `TechCategoryCard.tsx` in `src/components/ui`
  - [ ] Apply `rounded-vyr-fluid` and glass effects
- [ ] Add Gsap Interactivity (AC: #3)
  - [ ] Implement hover listeners that trigger a subtle GSAP "pulse" or "glow" reveal
- [ ] Polish Accent Borders (AC: #2)
  - [ ] Use 1px purple borders for glassmorphic elements to define boundaries in a dark environment

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. Do NOT overwrite the base `globals.css` or core configurations. Refactor existing components to match new geometry and flow.

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

### File List
