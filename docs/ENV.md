# ENV.md

This document describes the environment variables required for the project.

## Example: .env.template

The `.env.template` file provides example environment variables for local development. Below are the variables currently present in `.env.template`:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_ENV=local
NEXT_PUBLIC_ROBOTS_ALLOW=false
CHROMATIC_PROJECT_TOKEN=<redacted>
```

### Variable descriptions

- `NEXT_PUBLIC_BASE_URL`: Base URL for the frontend application (used for API calls, routing, etc.)
- `NEXT_PUBLIC_ENV`: Environment name (e.g., local, staging, production)
- `NEXT_PUBLIC_ROBOTS_ALLOW`: If set to `true`, allows robots to index the site; `false` to disallow
- `CHROMATIC_PROJECT_TOKEN`: Token for Chromatic deployment and visual testing

> **Note:** Never put real secret values in this file. Use `.env.template` for example values.
