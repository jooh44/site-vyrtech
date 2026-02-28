---
title: 'Policy Pages Integration'
slug: 'policy-pages'
created: '2026-02-27T21:21:06-03:00'
status: 'Implementation Complete'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['Next.js 16.1.6 (App Router)', 'React 19.2.3', 'Tailwind CSS 4.0', 'TypeScript 5.0+']
files_to_modify: ['src/components/ui/Footer.tsx', 'src/components/ui/EditorialFooter.tsx', 'src/app/politica-de-privacidade/page.tsx', 'src/app/termos-de-servico/page.tsx']
code_patterns: ['App Router Conventions', 'Tailwind CSS Variables (@theme)', 'Dark Theme Aesthetic']
test_patterns: ['Manual Visual Testing']
---

# Tech-Spec: Policy Pages Integration

**Created:** 2026-02-27T21:21:06-03:00

## Overview

### Problem Statement

The user needs to add two simple policy pages (Privacy Policy and Terms of Service) linked in the footer. These pages currently have placeholder links (`#`) in the `Footer.tsx` and `EditorialFooter.tsx` components.

### Solution

Create two new pages (`/politica-de-privacidade` and `/termos-de-servico`) by copying content from the live old site URLs provided. Each page should be styled appropriately as requested ("cada uma com seu estilo"), and the footer links should be updated to point to these new pages.

### Scope

**In Scope:**

- Fetching and formatting content from `https://vyrtech.com/politica-de-privacidade/` and `https://vyrtech.com/termos-de-servico/`.
- Creating new Next.js route pages for both policies with appropriate styling matching the project's design system.
- Updating `Footer.tsx` and `EditorialFooter.tsx` to link to the new pages.

**Out of Scope:**

- Any functional changes to other pages.
- Complex interactive elements within the policy pages (they should be "simple").

## Context for Development

Confirmed Clean Slate for the new policy routes. No legacy constraints inside `src/app/politica-de-privacidade/` or `src/app/termos-de-servico/`.

### Codebase Patterns

- **Routing:** Next.js App Router. New pages will live in `src/app/politica-de-privacidade/page.tsx` and `src/app/termos-de-servico/page.tsx`.
- **Styling:** The project uses Tailwind CSS 4.0 with custom `@theme` variables in `globals.css` (e.g. `--color-vyr-wine`). Do not hardcode hex colors when a variable exists. The general theme is dark and tech-focused (#08080A background), though the Atelier page uses lighter themes in some sections.
- **Typography:** The text should be formatted cleanly using markdown-like structures (H1, H2, paragraphs, lists) but implemented with Tailwind utility classes.

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `src/components/ui/Footer.tsx` | Main website footer requiring correct Links |
| `src/components/ui/EditorialFooter.tsx` | Atelier landing page footer requiring correct Links |
| `_bmad-output/project-context.md` | Core implementation rules and theme guidelines |

### Technical Decisions

- **Content Migration:** The content will be manually migrated and structured in standard React/JSX using Tailwind typography classes to ensure it matches the brand aesthetic. The content was fetched and verified to be plain text/markdown style terms and policies.
- **Link Components:** We will use `next/link` for the footer URLs.

## Implementation Plan

### Tasks

- [x] Task 1: Create the Privacy Policy Page Route
  - File: `src/app/politica-de-privacidade/page.tsx`
  - Action: Create a new server component exporting a full-page layout including the standard Header and Footer. Implement the privacy policy content as HTML utilizing Tailwind CSS for typography, tracking, and leading to ensure readability. Adhere to the dark theme standard unless overriden by specific brand guidelines.

- [x] Task 2: Create the Terms of Service Page Route
  - File: `src/app/termos-de-servico/page.tsx`
  - Action: Create a new server component exporting a full-page layout including the standard Header and Footer. Implement the terms of service content as HTML utilizing Tailwind. Ensure standard readable spacing (prose-like) and distinct typographical hierarchy for H1s, H2s, H3s.

- [x] Task 3: Update Links in the Tech Footer
  - File: `src/components/ui/Footer.tsx`
  - Action: Locate the hardcoded `href="#"` links at the bottom of the component for "Termos de Uso" and "Política de Privacidade". Replace them with Next.js `<Link>` components pointing to `/termos-de-servico` and `/politica-de-privacidade` respectively.

- [x] Task 4: Update Links in the Atelier Footer
  - File: `src/components/ui/EditorialFooter.tsx`
  - Action: Locate the hardcoded `href="#"` links at the bottom of the component for "Termos de Uso" and "Política de Privacidade". Replace them with Next.js `<Link>` components pointing to `/termos-de-servico` and `/politica-de-privacidade` respectively.

### Acceptance Criteria

- [x] AC 1: Given a user on the root or atelier page, when they click "Política de Privacidade" in the footer, then they are navigated to `/politica-de-privacidade` and see the formatted policy content.
- [x] AC 2: Given a user on the root or atelier page, when they click "Termos de Uso" in the footer, then they are navigated to `/termos-de-servico` and see the formatted terms content.
- [x] AC 3: Given the new policy pages, when rendered, then they properly display the Vyrtech header and footer components without breaking layout.
- [x] AC 4: Given the content of the policies, when rendered, then it accurately reflects the provided source URLs and is properly styled for legibility (spacing, size, contrast).

## Additional Context

### Dependencies

- Current Header and Footer components to wrap the new pages.

### Testing Strategy

- Manual visual verification of both `/politica-de-privacidade` and `/termos-de-servico` in a local development environment.
- Click testing the footer links from both the Tech landing page and the Atelier landing page to ensure proper routing without full page reloads.

### Notes

- Both policy documents are relatively text-heavy. Implementing max-width containers (e.g., `max-w-4xl`) and increased line heights (`leading-relaxed` or `leading-loose`) will significantly improve the user's reading experience.

## Review Notes

- Adversarial review completed
- Findings: 10 total, 6 fixed, 4 skipped
- Resolution approach: Fix automatically applied to F2, F3, F5, F6, F9, F10.
- Note on F1: Links in `Navbar.tsx` already use leading slashes (e.g. `/#diagnostico`), so no fix was needed.
- Note on F4: `prose-vyr` is a standard Tailwind typography modifier used elsewhere, so left as is.
- Note on F7/F8: Mailto links and email address kept as originally provided in the live site copy.
