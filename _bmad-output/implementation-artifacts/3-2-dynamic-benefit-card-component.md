# Story 3.2: Dynamic Benefit Card Component

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want benefit cards to look great on any theme,
so that the information is presented clearly whether I'm on the Atelier or Tech page.

## Acceptance Criteria

1. **Dynamic Theming:** Benefit cards must automatically swap themes (Editorial Wine or Tech Onyx) based on the current page context. [Source: epics.md#L253]
2. **Fixed Dimensionality:** Cards should have a fixed width of 400px (with responsive scaling for mobile). [Source: epics.md#L252 / ux-design-specification.md#L180]
3. **Exact Copy Integration:** Section 3 titles/descriptions: "Alvo em Safra", "Fertilização", "Rastreamento", "Aprimoramento". [Source: prd.md#L75]
4. **Fluid Geometry:** All cards must use the `1.5rem` (24px) border-radius. [Source: prd.md#L164]

## Tasks / Subtasks

- [x] Create `BenefitCard.tsx` (AC: #1, #2, #4)
  - [x] Implement props for `title`, `description`, and `pageTheme`
  - [x] Apply `rounded-vyr-fluid` to the card container
- [x] Map Theme Styles (AC: #1)
  - [x] Editorial Theme: Light background, `--vyr-wine` text
  - [x] Tech Theme: Glassmorphic Onyx background, White/Purple text
- [x] Populate Content (AC: #3)
  - [x] Build a data object with the four required benefit items from the PRD
- [x] Mobile Refinement (AC: #2)
  - [x] Scale card width to `90vw` on screens smaller than 640px

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Avoid duplicate card components; use conditional Tailwind classes based on a `theme` prop.
- **Performance:** Target 90+ PageSpeed by keeping components lightweight and assets optimized.
- **Source tree components:** `src/components/ui/BenefitCard.tsx`.

### Project Structure Notes

- Data content for cards should be kept in a separate `config` or `data` file for easy editing.

### References

- [PRD: Product Scope - Section 3 Copy](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L75)
- [UX Spec: Linear Style Benefit Grids](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L141)
- [Epics: Story 4.2 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L248-L254)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

- Created a dynamic `<BenefitCard>` with dual-theme constraint validation.
- Maintained the vertical timeline UI logic preferred by user in earlier sessions.
- Reduced steps from S.A.F.R.A (5 items) to A.F.R.A (4 items) matching exact PRD copywriting.
- Replaced the hardcoded inline markup on `SafraSection` and `EditorialSafraSection` with semantic `<BenefitCard>` imports.

### File List

- `src/components/ui/BenefitCard.tsx`
- `src/components/ui/SafraSection.tsx`
- `src/components/ui/EditorialSafraSection.tsx`
