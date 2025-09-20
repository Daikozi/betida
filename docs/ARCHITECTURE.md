# Betida – Architecture Overview

## Stack

- **Framework**: Next.js (App Router, TypeScript)
- **UI**: React, Material UI (MUI), Emotion
- **State**: Zustand
- **Testing**: Vitest, Playwright, Storybook, Chromatic
- **PWA**: next-pwa

## Structure

- `src/app/` : Next.js app directory (pages, layouts, routing)
- `src/composants/` : UI components (atomic, feature, layout)
- `src/data/` : Static/dynamic data for menus, sidebars, etc.
- `src/theme/` : MUI theme and tokens
- `src/store/` : Zustand stores
- `public/` : Static assets (images, icons, manifest)
- `docs/` : Documentation, route inventory, etc.
- `ADR/` : Architecture Decision Records

## Routing

- Centralized in `src/constants/routes.ts` and `src/data/sideMenu.ts`
- All routes inventoried in `docs/route-inventory.csv`
- Placeholder pages use a `ComingSoon` component with `noindex`

## Security

- Security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options) set via `middleware.ts`
- Sensitive config via `.env` (see `.env.template`)

## Build & CI

- Storybook deployed on GitHub Pages (see workflow)
- Chromatic for visual regression
- Vercel for main app deployment (recommended)

---

# Handover Note

- See `README.md` for setup, scripts, and environment variables.
- All routes and navigation are documented in `docs/ROUTING.md` and `docs/route-inventory.csv`.
- Security headers are enforced via `middleware.ts`.
- For UI/UX, use Storybook and Chromatic for review.
- For any new feature, follow the existing folder structure and update documentation accordingly.

For any question, refer to the ADR folder and project documentation.
