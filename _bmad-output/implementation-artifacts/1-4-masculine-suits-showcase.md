# Story 1.4: Masculine Suits Showcase (Background Integration)

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a User interested in male gala attire,
I want to see masculine imagery integrated seamlessly into the design flow,
So that I know the atelier also caters to masculine needs with the same level of sophistication.

## Acceptance Criteria

1. **Given** the 3rd or 4th fold of the Atelier page
2. **When** I scroll to this section
3. **Then** high-quality images of men's suits must be applied as **background elements** with a dark/wine overlay
4. **And** the presentation must mimic the sophisticated "Hero section" style, avoiding generic boxed images.

## Tasks / Subtasks

- [x] Task 1: Refactor Structure (AC: 1, 4)
  - [x] Implement a full-width section container for the 3rd or 4th fold.
  - [x] Ensure the container supports background images and overlays.
- [x] Task 2: Apply Background & Overlay (AC: 3)
  - [x] Add the masculine suit imagery as a `bg-image` or using Next.js `Image` component with `object-fit: cover` and absolute positioning.
  - [x] Apply a dark/wine overlay (using the `--vyr-wine` or `--vyr-dark` token with opacity) over the image to ensure text legibility and aesthetic consistency.
- [x] Task 3: Typography & Content Alignment (AC: 4)
  - [x] Ensure any text content placed over this section uses high contrast (e.g., white/light text) and follows the PP Editorial New / Inter Tight typography rules.

## Dev Notes

- **Design System:** Use the global design tokens defined in `globals.css` (e.g., `--vyr-wine`).
- **Styling:** The background image should mimic the Hero section. Do NOT use standard `<img>` tags inside a constrained layout; it must span the background to create an immersive, sophisticated feel.
- **Fluid Geometry:** If this section has any internal containers, they must respect the global `border-radius: 1.5rem` (24px) rule.

### Project Structure Notes

- **Components:** Update the specific page component handling the Atelier layout (likely within `src/app/locacao-de-roupas/page.tsx` or a related component in `src/components`).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 1.4: Masculine Suits Showcase (Background Integration)]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Design Opportunities]
- [Source: _bmad-output/planning-artifacts/prd.md#Estética & Layout (Premium B2B)]

## Dev Agent Record

### Agent Model Used

gemini-2.5-pro

### Debug Log References

- No regressions visually. The UI compiles successfully.

### Completion Notes List

- Refactored `SuitsShowcase` to use a full-width background image (`/suit-tuxedo.png` with fixed parallax) instead of a generic boxed 2-column layout.
- Applied a dark wine overlay (`bg-vyr-wine/60` and a dark bottom gradient) using `mix-blend-multiply` to integrate elegantly while maintaining high readability.
- Updated text colors to high-contrast white with `drop-shadow` for the headlines ensuring legibility over the image.

### File List

- `src/components/ui/SuitsShowcase.tsx`

## Change Log

- Date: 2026-02-27 - Implemented story 1.4: Masculine Suits Showcase, applying a dark background and full width imagery to align with the Atelier aesthetic.
