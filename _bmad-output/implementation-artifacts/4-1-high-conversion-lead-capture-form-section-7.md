# Story 4.1: High Conversion Lead Capture Form Section 7

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want to submit my information through a simple, well-validated form,
so that I can request a service without friction or confusion.

## Acceptance Criteria

1. **Simplified Fields:** Form must only require: Name, Email, and Niche (3-field initial capture). [Source: ux-design-specification.md#L225 / prd.md#L149]
2. **Real-time Validation:** Visual feedback on field validity with 500ms debounce. [Source: prd.md#L149 / ux-design-specification.md#L268]
3. **Anti-Spam:** Integration of a honeypot field or simple server-side validation to prevent bot submissions. [Source: epics.md#L283 / prd.md#L35]
4. **Frictionless UI:** High-contrast design following the page theme (Editorial Wine or Tech Dark) with unique form IDs (`bottom_lead_form_id`, `hero_lead_form_id`). [Source: prd.md#L61 / epics.md#L284]

## Tasks / Subtasks

- [ ] Build Form Component (AC: #1, #4)
  - [ ] Create `LeadForm.tsx` in `src/components/ui`
  - [ ] Implement props for `formId` to handle different page contexts
- [ ] Implement Validation Logic (AC: #2)
  - [ ] Use `react-hook-form` or native state for field management
  - [ ] Add 2px focus rings (vyr-wine or white) for accessibility
- [ ] Setup Anti-Spam (AC: #3)
  - [ ] Add a hidden `honeypot` field
- [ ] Theme Adaptation (AC: #4)
  - [ ] Ensure input styles match the "High-Ticket" aesthetic (custom autofill, clean borders)

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Form submissions should use `Server Actions` or a standard `API route`.
- **UX:** Focus should shift to the first field after anchor navigation (linked with 5.2).
- **Source tree components:** `src/components/ui/LeadForm.tsx`.

### Project Structure Notes

- Generic form logic should be reusable across both Atelier and Tech pages.

### References

- [PRD: Success Criteria - IDs Únicos](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L61)
- [UX Spec: Flow Optimization Principles](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L223-L228)
- [Epics: Story 5.1 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L279-L284)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
