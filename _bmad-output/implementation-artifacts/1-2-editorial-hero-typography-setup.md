# Story 1.2: Editorial Hero Typography Setup

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want to see a high-impact editorial hero section,
so that I immediately feel the luxury and authority of the brand.

## Acceptance Criteria

1. **Magazine Layout:** The Hero section on the Atelier page must utilize an asymmetrical "Magazine" layout (aspherical typography balance). [Source: epics.md#L152 / ux-design-specification.md#L78]
2. **Editorial Typography:** Headers must use `PP Editorial New` (or equivalent high-end serif) with reduced tracking. [Source: epics.md#L153 / ux-design-specification.md#L172]
3. **Hero Animation:** Typography reveals via Y-axis GSAP animation (organic reveal) upon page entry. [Source: ux-design-specification.md#L84]
4. **Visual Contrast:** High-contrast Wine (#6D2749) on Light background for authority and legibility. [Source: prd.md#L79]

## Tasks / Subtasks

- [ ] Setup Font Foundation (AC: #2)
  - [ ] Configure `PP Editorial New` (or designated serum font) in `globals.css` and Tailwind theme
- [ ] Build Atelier Hero Component (AC: #1, #4)
  - [ ] Create `AtelierHero.tsx` in `src/components/ui`
  - [ ] Implement asymmetrical grid/flex layout for editorial feel
  - [ ] Apply `--vyr-wine` color and large typography scales (4rem H1)
- [ ] Implement GSAP Entrance Animation (AC: #3)
  - [ ] Use GSAP `from()` to animate headers with `y: 50`, `autoAlpha: 0`, and `ease: "power3.out"`
  - [ ] Ensure animation triggers immediately on client-side mount

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Use `Client Components` only where GSAP is necessary. Keep copy and structure in `Server Components` if possible.
- **GSAP:** Ensure `useGSAP` hook or `useEffect` with cleanup is used for animation to prevent memory leaks in React 19.
- **Performance:** Optimize font loading (swap/display) to prevent FOIT/layout shift.

### Project Structure Notes

- Hero component goes to `src/components/ui/AtelierHero.tsx`.
- Typography configuration in `src/app/globals.css`.

### References

- [PRD: Executive Summary - Atelier Focus](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L33)
- [UX Spec: Core User Experience - Authoritative Discovery](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L63)
- [Epics: Story 2.1 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L149-L154)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
