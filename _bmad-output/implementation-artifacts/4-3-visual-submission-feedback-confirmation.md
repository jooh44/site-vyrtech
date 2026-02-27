# Story 4.3: Visual Submission Feedback Confirmation

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want clear feedback after submitting a form,
so that I know my request was successfully received.

## Acceptance Criteria

1. **Success State Transition:** Upon successful submission, the form must transition to a "Lead Sent" state (replacing input fields with a confirmation message). [Source: epics.md#L308 / prd.md#L190]
2. **Visual Reinforcement:** A green glassmorphic glow or "Lead Sent" checkmark icon should provide positive reinforcement. [Source: epics.md#L309 / ux-design-specification.md#L261]
3. **Response Timing:** Feedback must be visible within 200ms of server acknowledgment. [Source: prd.md#L51]
4. **Immersion Maintenance:** The success message must adhere to the page theme (Editorial Wine or Tech Dark) and maintain the `1.5rem` radius. [Source: prd.md#L164]

## Tasks / Subtasks

- [ ] Implement Submission Success State (AC: #1)
  - [ ] Add a `submitted` state to the `LeadForm` component
- [ ] Build Feedback UI (AC: #2, #4)
  - [ ] Design a translucent green success card with high-fidelity effects
  - [ ] Include a clear "Thank you" and "Next steps" message
- [ ] Implement GSAP Transition (AC: #1)
  - [ ] Animate the transition between the form and the success message (e.g., cross-fade)
- [ ] GTM Trigger Integration (linked with Epic 6) (AC: #3)
  - [ ] Ensure the success state is reached only after a confirmed successful response

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Use `React state` for local UI feedback. Ensure error states are also handled elegantly.
- **UX:** Success feedback is the "Confirmation" phase of the emotional journey.
- **Source tree components:** `src/components/ui/LeadForm.tsx`.

### Project Structure Notes

- Place confirmation copy in the same data file as form labels for consistency.

### References

- [PRD: Success Criteria - Aha! Moment](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L50)
- [UX Spec: Feedback Patterns - Success](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L261)
- [Epics: Story 5.3 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L303-L310)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
