# Story 5.3: Multi Page Source Identification Form Ids

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a Business Analyst,
I want to know exactly which page generated each lead,
so that I can allocate marketing resources based on performance.

## Acceptance Criteria

1. **Page-Specific Form IDs:** The tracking event must include the specific client-requested form ID string: `bottom_lead_form_id` (for Section 7) or `hero_lead_form_id` (if applicable). [Source: prd.md#L82 / epics.md#L351]
2. **Context Resolution:** The `LeadForm` component must automatically detect or receive its `form_id` based on the parent landing page (Atelier vs Tech). [Source: prd.md#L61 / epics.md#L349]
3. **DataLayer Payload:** The `form_id` must be passed as a property in the `vyrtech_lead_submission` DataLayer push. [Source: epics.md#L351]
4. **Verification:** GTM debug console must verify that `bottom_lead_form_id` is passed when submitting from the bottom section. [Source: epics.md#L352]

## Tasks / Subtasks

- [ ] Extend Form Props (AC: #1, #2)
  - [ ] Add `trackingId` prop to the `LeadForm` component
- [ ] Pass IDs from Landing Pages (AC: #2)
  - [ ] Inject `bottom_lead_form_id` in `AtelierHero.tsx` or Section 7 instantiation
- [ ] Update GTM Payload (AC: #3)
  - [ ] Append `form_id: props.trackingId` to the `dataLayer.push` call
- [ ] Cross-Page Validation (AC: #4)
  - [ ] Test form submission on both Atelier and Tech pages to ensure IDs differ correctly

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. Do NOT overwrite the base `globals.css` or core configurations. Refactor existing components to match new geometry and flow.

- **Architecture Compliance:** Unified tracking logic ensures that adding new pages in the future is "low effort" for lead source identification.
- **UX:** IDs must be technical but the user should never see these (hidden/background tracking).
- **Source tree components:** `src/components/ui/LeadForm.tsx`, `src/lib/gtm-utils.ts`.

### Project Structure Notes

- Define the IDs as constants linked to specific page routes or section roles.

### References

- [PRD: Technical Success - IDs Únicos](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L61)
- [UX Spec: Design Consistency Patterns - Analytics](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L251)
- [Epics: Story 6.3 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L341-L353)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
