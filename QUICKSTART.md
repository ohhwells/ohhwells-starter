# OhhWells Starter — Vibe Coding Workflow

This starter is built around one decision tenet:

> **The component receives content — it never fetches content.**

That single rule enables the rest: predictable structure, safe handoffs, and a platform-managed content layer.

---

## Prerequisites

Before starting, make sure you have:

- **Node.js 18+** (recommended: latest LTS)
- **npm / pnpm / yarn**
- **Git** (for cloning and version control)
- **OhhWells CLI** (for deployment)

---

### Install OhhWells CLI

If you're using the local repo:

```bash
cd ohhwells-deploy
npm install
npm run build
npm link
```

## Start a new site from `ohhwells-starter`

From repo root:

```bash
# Copy the starter into a new site folder (example)
cp -R ohhwells-starter my-new-site
```

On Windows PowerShell:

```powershell
Copy-Item -Recurse -Force ohhwells-starter my-new-site
```

Then install deps:

```bash
cd my-new-site
npm install
```

---

## Run the project

```bash
npm run dev
```

Build + start:

```bash
npm run build
npm run start
```

---

## Content convention (MANDATORY)

### Rules

- **All content lives in** `./content`
- **Components do not import content** from `./content` (or from anywhere)
- **Components receive typed props only**

### Example

Content lives in `content/home.ts`:

```ts
export const homeContent = {
  hero: {
    headline: "Hello",
    subheadline: "World",
    ctaText: "Contact",
    ctaLink: "/contact"
  }
}
```

Page imports content and passes it as props:

```tsx
import { homeContent } from '@/content/home'
import { Hero } from '@/components/sections/Hero'

export default function Page() {
  return <Hero {...homeContent.hero} />
}
```

Component only consumes props (no content imports):

```tsx
export function Hero(props: HeroProps) {
  return <h1>{props.headline}</h1>
}
```

---

## Brand layer (MANDATORY)

### Rules

- Brand tokens live in `content/brand.ts`
- **No hardcoded colors/fonts** in components
- Styling uses **CSS variables** like `var(--color-primary)` and `var(--font-body)`

### Where variables come from

- `src/providers/BrandProvider.tsx` injects `content/brand.ts` tokens into `:root` as CSS variables.
- The app is wrapped in `BrandProvider` in `src/app/layout.tsx`.

### Change the brand

Edit `content/brand.ts`, for example:

- Change `colors.primary`
- Change `fonts.heading` / `fonts.body`

Refresh the page — the entire UI should update without touching components.

---

## Ownership model (MANDATORY)

- **Code (developer-owned)**: everything under `src/` (components, pages, providers, utilities)
- **Data (platform-owned)**: everything under `content/` (copy + structure + brand tokens)

The starter’s job is to keep those boundaries clean.

---

## Decision tenet explained

When components fetch/import content directly:

- content becomes scattered and un-auditable
- it becomes impossible to safely override content from a platform
- refactors break “random pages” because content coupling is hidden

When components only receive typed props:

- content is centralized and replaceable
- the platform can own data without touching code
- sections become reusable building blocks

---

## Common mistakes

- **Importing content inside a component**
  - Bad: `import { homeContent } from '@/content/home'` inside `Hero.tsx`
- **Hardcoding colors**
  - Bad: `style={{ color: '#fff' }}` or CSS `color: #fff`
- **Mixing code and data**
  - Bad: putting page copy inside `src/components/...`

---

## Troubleshooting

- **Build fails with module resolution**
  - Ensure you’re importing content via `@/content/...` and that `tsconfig.json` has the `@/content/*` path.
- **Brand changes don’t apply**
  - Confirm `BrandProvider` is used in `src/app/layout.tsx`
  - Confirm you’re changing `content/brand.ts` (not `src/content/brand.ts` re-export)
- **Deploy CLI says not logged in**
  - Run `ohhwells login` (see deploy section)

---

## Deploy using `ohhwells-deploy`

### What it does

The deploy CLI:

- runs `npx next build`
- zips the project source (excluding `node_modules`, `.next`, `.git`, `.env`, etc.)
- uploads the zip to the OhhWells API for deployment

### Install/build the CLI (local repo usage)

From repo root:

```bash
cd ohhwells-deploy
npm install
npm run build
```

You can run it via node:

```bash
node dist/cli.js --help
```

Or link it globally (optional):

```bash
npm link
ohhwells --help
```

### Configure your site subdomain

In your site root (`my-new-site/`), create `ohhwells.json`:

```json
{
  "subdomain": "your-test-subdomain"
}
```

### Login

```bash
ohhwells login
```

### Deploy

From the site root:

```bash
ohhwells deploy
```

Or explicitly:

```bash
ohhwells deploy --site your-test-subdomain
```

---

## Verify production

After deploy completes, the CLI prints:

- **Public URL** (OhhWells domain)
- **Vercel URL** (underlying deployment)

Verification checklist:

- Home page loads
- Brand tokens match expected (primary color + fonts)
- Content matches `content/*.ts`
- No console errors

