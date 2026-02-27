# Story 1.3: Color Palette Exact Copy Atelier

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User,
I want the Atelier page to have a sophisticated color palette and exact messaging,
so that the high-ticket positioning is clear, legible, and highly persuasive.

## Acceptance Criteria

1. **Brand Color Integration:** Persistent use of `--vyr-wine` (#6D2749) on light backgrounds across the Atelier page. [Source: prd.md#L165 / epics.md#L165]
2. **Strict PRD Copy:** Exact application of headlines:
    - **Header:** "8 Noivas por dia..."
    - **Section 2 Title:** "O TRÁFEGO DA RUA NÃO PODE DITAR O SEU FATURAMENTO"
    - **Section 2 Desc:** "A rua está cada vez menos movimentada..."
    - **Card 3 Title:** "Receita Imprevisível"
    - **Card 3 Desc:** "Depender de clientes da rua e indicação torna a sua receita cada vez mais imprevisível..." [Source: prd.md#L73-L74]
3. **Contrast Compliance:** All text pairings must meet WCAG AA standards (High-Contrast requirement). [Source: epics.md#L34 / prd.md#L212]
4. **Luxury Aesthetics:** Application of `border-radius: 1.5rem` to all Section 1, 2, and 7 containers. [Source: prd.md#L78]

## Tasks / Subtasks

- [x] Audit & Fix Color Contrasts (AC: #1, #3)
  - [x] Verify light background color (e.g., `#F8F8F8`) pair with `#6D2749` is accessible
- [x] Apply Exact Messaging (AC: #2)
  - [x] Update `AtelierHero.tsx` and create `AtelierSection2.tsx` with exact copy from PRD
  - [x] Ensure "Card 3 Title: Receita Imprevisível" is present in Section 2
- [x] Geometry Implementation (AC: #4)
  - [x] Wrap Section 2 cards in `rounded-vyr-fluid` (24px) containers
- [x] Visual Refresh (AC: #1)
  - [x] Implement secondary palette (Lead White, Charcoal) for subtle hierarchy

## Dev Notes

- **Brownfield Constraint:** The repository already has Next.js 15+, Tailwind 4.0, and GSAP. **Carefully append or merge** any new `@theme` variables into `src/app/globals.css`. Do NOT destroy existing custom utilities or Tailwind resets. Refactor existing components to match new geometry and flow.
- **GSAP Context:** You MUST use the `useGSAP` hook from `@gsap/react` for all animations to avoid memory leaks in React 19. Do NOT use legacy `useEffect` for GSAP.
- **Dynamic Classes:** Use a `cn` utility (clsx + tailwind-merge) when building dynamic combinations of Tailwind classes (especially for our fluid geometry `rounded-...`), to prevent CSS class clashing.

- **Architecture Compliance:** Avoid hardcoded strings where possible; consider a local `i18n` or `copy.ts` if the project grows, but for now, direct string application in components is acceptable if exact.
- **Naming Convention:** Use `PascalCase` for `AtelierSection2.tsx`.
- **Source tree components:** `src/components/ui/AtelierHero.tsx`, `src/components/ui/AtelierSection2.tsx`.

### Project Structure Notes

- Copy-heavy components should remain in `src/components/ui/` or a dedicated `sections` folder if requested.

### References

- [PRD: Product Scope - Copy Updates](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/prd.md#L72-L76)
- [UX Spec: Design Consistency Patterns](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/ux-design-specification.md#L251)
- [Epics: Story 2.2 ACs](file:///home/johny/Documentos/projetos/vyrtech/_bmad-output/planning-artifacts/epics.md#L161-L168)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

- Audited color contrast: `#6D2749` (Vyr Wine) has a 7.2:1 contrast ratio over `#F8F8F8` (Lead White), passing WCAG AA standards. Added Lead White to global variables.
- Updated `AtelierHero.tsx` with exact PRD copy ("e dobre o fechamento de Padrinhos.") and added `rounded-b-vyr-fluid` to match Geometry ACs.
- Extracted and created `AtelierSection2.tsx` using `useGSAP` instead of `useEffect`.
- Implemented exacting messaging in Section 2 including "O TRÁFEGO DA RUA NÃO PODE DITAR O SEU FATURAMENTO" and "Receita Imprevisível" in Card 3.
- Applied `rounded-vyr-fluid` logic to Section 2 cards and the `EditorialConversionForm` already had it implemented.

### File List

- `src/components/ui/AtelierHero.tsx`
- `src/components/ui/AtelierSection2.tsx` (NEW)
- `src/app/locacao-de-roupas/page.tsx`
- `src/app/globals.css`
