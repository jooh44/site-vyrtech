# Story 4.2: Smooth Internal Navigation Cta Ancora

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want CTA buttons to move me directly to the lead form,
so that I don't have to manually scroll and search for where to sign up.

## Acceptance Criteria

1. **Smooth Anchor Navigation:** CTA buttons must move the user directly to the Section 7 form using a 1.2s GSAP `ScrollTo` animation. [Source: epics.md#L295 / prd.md#L81 / ux-design-specification.md#L273]
2. **Context Continuity:** The navigation must feel like a "narrative drop" ensuring the user remains immersed in the page aesthetic. [Source: ux-design-specification.md#L220]
3. **Field Focus:** Upon arrival at Section 7, the focus must automatically shift to the first form field (Name). [Source: epics.md#L296]
4. **Accessibility:** Navigation must work via keyboard and provide correct visual context for screen readers. [Source: epics.md#L34]

## Tasks / Subtasks

- [ ] Implement CTA Click Handler (AC: #1)
  - [ ] Use `gsap.to(window, { ... scrollTo: '#section-7' })`
- [ ] Connect Focus Logic (AC: #3)
  - [ ] Use a `ref` on the form field and trigger `.focus()` after the scroll finishes
- [ ] Audit Global Anchor CSS (AC: #1)
  - [ ] Ensure no browser defaults conflict with the GSAP smooth scroll
- [ ] Mobile Verification (AC: #1)
  - [ ] Verify that the scroll duration feels appropriate and doesn't cause disorientation on mobile

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Ensure `gsap` and `ScrollToPlugin` are correctly registered.
- **GSAP:** Catch scroll interrupts if the user tries to scroll manualy during the automated transition.
- **Source tree components:** `src/components/ui/Button.tsx`, `src/components/ui/LeadForm.tsx`.

### Project Structure Notes

- Centralize anchor scroll logic to avoid duplication across multiple CTA components.

### References

- [PRD: Product Scope - Form Correction](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L81)
- [UX Spec: The Frictionless Drop](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L220)
- [Epics: Story 5.2 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L291-L297)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
