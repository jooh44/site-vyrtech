---
stepsCompleted: [1, 2]
inputDocuments: ['_bmad-output/planning-artifacts/prd.md', '_bmad-output/project-context.md']
workflowType: 'architecture'
project_name: 'vyrtech'
user_name: 'Johny'
date: '2026-02-26T23:32:53-03:00'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
Architecture must support SSR (Next.js) for SEO, a responsive grid/carousel for the compact Section 3, and a smooth anchor system for internal navigation. GSAP integration is required for high-fidelity micro-interactions.

**Non-Functional Requirements:**

- **Performance:** 90+ score Requirement drives a "Performance Budget" architecture.
- **SEO:** SSR is mandatory.
- **Accessibility:** WCAG AA compliance.

**Scale & Complexity:**

- Primary domain: Web App (Next.js/React)
- Complexity level: Low
- Estimated architectural components: ~4 (Header, Layout, Section Components, Analytics/Form Layer)

### Technical Constraints & Dependencies

- **Next.js:** SSR requirement.
- **GSAP:** Animation framework.
- **GTM:** Tag `GTM-KZGXGTPD` dependency.

### Cross-Cutting Concerns Identified

- **Design System Consistency:** Global application of `border-radius: 1.5rem` and high-contrast color palette.
- **Event Tracking:** Unified approach to form IDs and GTM event dispatching.
