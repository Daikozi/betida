# ROUTING.md

## Routing Policy

The application navigation is structured around main menus (casino, sports, promotions, etc.) and dynamic submenus. Routes are primarily defined in configuration files and source code, and are inventoried in `docs/route-inventory.csv`.

## ComingSoon Placeholder

For pages under construction or not yet available, the `ComingSoon` component is used. It must:

- Return an HTTP 200 status (accessible page, but not indexed)
- Include a `meta noindex` tag to prevent search engine indexing

## Route Management

- Main routes are listed in the side menu (`sideMenu.ts`) and navigation components.
- Submenus are managed via configuration properties and may point to internal routes or placeholders.
- Any new route must be added to the inventory (`route-inventory.csv`) and documented here if it has a specific policy (auth, restricted access, etc.).

## Key Files

- `src/data/sideMenu.ts`: side menu structure and main routes
- `src/constants/routes.ts`: central route definitions for the application
- `docs/route-inventory.csv`: route inventory
- `components/common/ComingSoon.tsx`: placeholder component for upcoming pages

For any navigation changes, update these files and the related documentation.
