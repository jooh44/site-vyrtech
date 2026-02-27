# Story 4.1: High Conversion Lead Capture Form Section 7

Status: done

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

- [x] Build Form Component (AC: #1, #4)
  - [x] Create `LeadForm.tsx` in `src/components/ui`
  - [x] Implement props for `formId` to handle different page contexts
- [x] Implement Validation Logic (AC: #2)
  - [x] Use `react-hook-form` or native state for field management
  - [x] Add 2px focus rings (vyr-wine or white) for accessibility
- [x] Setup Anti-Spam (AC: #3)
  - [x] Add a hidden `honeypot` field
- [x] Theme Adaptation (AC: #4)
  - [x] Ensure input styles match the "High-Ticket" aesthetic (custom autofill, clean borders)
- [x] Scopes Section (Added per user request)
  - [x] Create `ScopesSection.tsx` with 6 pillars of Tech services.
  - [x] Integrate into Home page.

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

gemini-2.5-pro

### Debug Log References

- GSAP setup on `ScopesSection` to mirror `AtelierSection2`. Added dark mode variants.
- Form replaced large multistep legacy forms in both Tech and Locacao sections.

### Completion Notes List

- `LeadForm` created to strip down friction (Name, Email, Niche + Honeypot).
- Dual Theming functioning properly (`theme="tech"` | `theme="editorial"`).
- Included extra task requested by User to transpose `AtelierSection2` into `ScopesSection` on the Tech page (Home).
- GSAP animations trigger efficiently via `ScrollTrigger`.

### File List

- src/components/ui/LeadForm.tsx
- src/components/ui/ConversionForm.tsx
- src/components/ui/EditorialConversionForm.tsx
- src/components/ui/ScopesSection.tsx
- src/app/page.tsx
