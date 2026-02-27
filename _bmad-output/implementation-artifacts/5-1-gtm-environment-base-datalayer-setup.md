# Story 5.1: Gtm Environment Base Datalayer Setup

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a Growth Manager,
I want the GTM environment to be correctly initialized,
so that I can begin tracking user interactions with precision.

## Acceptance Criteria

1. **GTM Initialization:** The `GTM-KZGXGTPD` container must be initialized on site load (Next.js client-side mount). [Source: prd.md#L60 / epics.md#L325]
2. **DataLayer Ready:** The `window.dataLayer` must be initialized and ready for event queuing before any custom events are dispatched. [Source: epics.md#L326]
3. **Environmental Parity:** GTM must load in local development, staging, and production environments (as specified in environment variables).
4. **No Console Errors:** Initialization must not produce script blocking or console errors that affect user experience. [Source: prd.md#L208]

## Tasks / Subtasks

- [ ] Implement GTM Injection (AC: #1)
  - [ ] Add the GTM script tags to `src/app/layout.tsx` (using `next/script`)
  - [ ] Ensure the container ID `GTM-KZGXGTPD` is correctly used
- [ ] Initialize DataLayer (AC: #2)
  - [ ] Create a utility that ensures `window.dataLayer = window.dataLayer || []` is called
- [ ] Verify Script Loading (AC: #1, #4)
  - [ ] Use GTM Tag Assistant or browser console to verify the container is active
- [ ] Production Readiness (AC: #3)
  - [ ] Config for production domains (if different from KZGXGTPD)

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Use `next/script` with `strategy="afterInteractive"` to ensure that GTM doesn't block the initial page render (LCP optimization).
- **SEO/SSR:** GTM scripts should be injected such that they don't break SSR metadata.
- **Source tree components:** `src/app/layout.tsx`, `src/lib/gtm-utils.ts`.

### Project Structure Notes

- Keep tracking IDs in `.env` or a central `tracking-config.ts` for security and maintainability.

### References

- [PRD: Technical Success - GTM Impecável](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L60)
- [Architecture: Technical Constraints - GTM](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/architecture.md#L37)
- [Epics: Story 6.1 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L315-L327)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
