# Next.js Base Application

A batteries-included **Next.js 16** starter template with modern tooling, strict quality gates, and flexible state management. Built to be cloned once and reused across projects.

---

## What’s Included

### Core

- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- pnpm

### Styling

- Tailwind CSS

### Linting & Formatting

- ESLint v9 (flat config)
- Prettier
- Accessibility lint rules via `eslint-plugin-jsx-a11y`
- Import ordering enforced

### Testing

- Jest + React Testing Library (unit & integration)
- Cypress (end-to-end)
- jsdom test environment

### State Management

- Zustand
- Redux Toolkit
- Toggleable via environment variable

### Git Hygiene & CI

- Husky (pre-commit & pre-push)
- lint-staged
- GitHub Actions CI (mirrors `pnpm run check`)
- Netlify build gate (same checks as local)

---

## Getting Started

### Install dependencies

```bash
pnpm install
```

Start development server

```bash
pnpm dev
```

The app will be available at:
http://localhost:3000

## Scripts

| Script             | Description                                   |
| ------------------ | --------------------------------------------- |
| pnpm dev           | Start development server                      |
| pnpm build         | Production build                              |
| pnpm start         | Start production server                       |
| pnpm lint          | Lint source files                             |
| pnpm lint:fix      | Lint + auto-fix                               |
| pnpm lint:strict   | Lint entire repo with zero warnings allowed   |
| pnpm format        | Check formatting                              |
| pnpm format:fix    | Format all files                              |
| pnpm typecheck     | TypeScript type checking                      |
| pnpm test:unit     | Run Jest tests                                |
| pnpm test:watch    | Jest watch mode                               |
| pnpm test:e2e      | Run Cypress headless                          |
| pnpm test:e2e:open | Open Cypress UI                               |
| pnpm check         | Lint + typecheck + tests (used by Husky & CI) |

### State Management Toggle

Global state management is controlled via a single environment variable.

**Configuration**
Create or update `.env.local:`

`NEXT_PUBLIC_STATE_PROVIDER=zustand`

Supported values:
`zustand` (default)
`redux`
`none`

**How it Works**
The app is wrapped once in a generic AppProviders component.
Redux is conditionally loaded only when enabled.
Zustand does not require a provider by default.

Relevant files:
`src/lib/config/state.ts`
`src/store/providers.tsx`
`src/store/redux/*`
`src/store/zustand/*`

### Testing

Unit & Integration Tests
Tests live under:

```
src/tests/
  unit/
    components/
    lib/
  integration/
    app/
```

Test file naming:
_`.test.ts`
_`.test.tsx`
_`.spec.ts`
_`.spec.tsx`

Run unit/integration tests:
`pnpm test:unit`

Watch mode:
`pnpm test:watch`

_Jest is configured explicitly (via jest.config.mjs) so it does not fall back to default patterns and miss tests._
_`jest.setup.js` uses CommonJS (require(...)) for compatibility with Jest’s execution environment._

**End-to-End Tests**
Cypress tests live under:
`cypress/e2e/`

Run Cypress headless:
`pnpm test:e2e`

Open Cypress UI:
`pnpm test:e2e:open`

**Husky Hooks**
Husky prevents broken code from being committed or pushed.

Pre-commit:
Runs `lint-staged`

Lints and formats staged files only
Pre-push:
Runs `pnpm check`

- ESLint (strict)
- TypeScript typecheck
- Jest tests

Hooks are defined in:

```
.husky/
  pre-commit
  pre-push
```

### CI & Deployment

**GitHub Actions**
CI runs on pull requests and pushes to main, and mirrors the same gate used locally:

Install dependencies
`pnpm run check`
`pnpm run build`

The “single source of truth” quality gate is `pnpm run check`.

Husky pre-push, GitHub Actions, and Netlify should all run that same command.

Folder Structure

```src/
  app/            # Next.js routes & layouts
  components/     # UI, layout, and feature components
  lib/            # Hooks, utils, config, API helpers
  store/
    redux/
    zustand/
  styles/
  tests/
cypress/
  e2e/
.github/
  workflows/
```

**Notes**
ESLint uses flat config: `eslint.config.mjs`
next lint is intentionally not used (Next 16 behavior)
Designed to work cleanly on Windows, CI, and Netlify

License
Private / internal starter template.
