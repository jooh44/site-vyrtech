# Story 5.2: Custom Form Event Tracking Section 7

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a Marketer,
I want form submissions to trigger GTM events,
so that I can measure conversion rates accurately.

## Acceptance Criteria

1. **Submission Event:** A custom event named `vyrtech_lead_submission` must be dispatched to the DataLayer upon successful form submission. [Source: epics.md#L338]
2. **Payload Precision:** The event payload must include `validation_status: "success"` and any non-PII identifiers requested. [Source: epics.md#L339]
3. **GTM Tag Sync:** The event dispatch must coincide with the visual "Lead Sent" feedback state transition. [Source: epics.md#L337]
4. **Accuracy:** 100% precision in GTM firing; no duplicate events on a single submission. [Source: prd.md#L60]

## Tasks / Subtasks

- [ ] Create GTM Event Utility (AC: #1)
  - [ ] Implement `pushToDataLayer(event: string, data: any)` helper
- [ ] Connect Form Success to GTM (AC: #1, #3)
  - [ ] Trigger `vyrtech_lead_submission` in the `LeadForm` submit handler after server success
- [ ] Add Payload Data (AC: #2)
  - [ ] Ensure `validation_status` is passed correctly
- [ ] Debug & Verify (AC: #4)
  - [ ] Use GTM Debug mode to confirm the event fires with the correct name and parameters

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. Do NOT overwrite the base `globals.css` or core configurations. Refactor existing components to match new geometry and flow.

- **Architecture Compliance:** Do not send Personal Information (Emails, Names) to GTM to maintain privacy compliance.
- **Performance:** Ensure event dispatch doesn't block the visual feedback transition (Green Glow).
- **Source tree components:** `src/components/ui/LeadForm.tsx`, `src/lib/gtm-utils.ts`.

### Project Structure Notes

- Centralize all custom event names in a `tracking-events.ts` enum.

### References

- [PRD: Measurable Outcomes - GTM Tracking](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L67)
- [UX Spec: Success Feedback Transition](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L261)
- [Epics: Story 6.2 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L328-L340)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
