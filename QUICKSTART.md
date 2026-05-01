# OhhWells Starter — Vibe Coding Workflow

This starter is built around one decision tenet:

> **The component receives content — it never fetches content.**

That single rule enables the rest: predictable structure, safe handoffs, and a platform-managed content layer.

---

## Where this guide lives (share this link)

This guide is stored in the repo as `QUICKSTART.md`. It’s written for external vibe-coders building client sites from this starter.

---

## Prerequisites

- **Node.js**: **18.17+** (Node 20+ recommended)
- **npm**: comes with Node (or use pnpm/yarn if your team standardizes it)
- **Git**
- **OhhWells access (for platform deploy / Content API)**:
  - Access credentials for the OhhWells deploy + Content API (team will provide)
  - A **test subdomain** to publish to (e.g. `yourname-starter-test`)
- **Optional (non-platform deploy)**:
  - **Vercel CLI** if you want to publish to `*.vercel.app`: `npm i -g vercel`

---

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

### Why this exists (the decision tenet)

If a section component fetches/imports its own content, you can’t safely replace content via a platform later (and content becomes scattered across JSX). Keeping all content in `content/` makes the site:

- editable by a platform without touching your code
- easy to audit and review
- safer to refactor (content wiring is obvious)

### Example: create content → define types → build section → wire it on the page

#### 1) Create or edit a content file (data only)

Content lives in `content/home.ts` (or `content/<page>.ts`):

```ts
import type { HomeContent } from '@/types/content';

export const homeContent: HomeContent = {
  hero: {
    headline: 'Hello',
    subheadline: 'World',
    ctaText: 'Contact',
    ctaLink: '/contact',
  },
  // ...
};
```

#### 2) Define a section prop type (typed props)

All content shapes live in `src/types/content.ts` so the Content API can serve the same shape later.

Example: `src/components/sections/Hero/types.ts` is just a typed alias:

```ts
import type { HeroContent } from '@/types/content';

export type HeroProps = HeroContent;
```

#### 3) Write a section component that accepts typed props (no content imports)

`src/components/sections/Hero/Hero.tsx`:

```tsx
import type { HeroProps } from './types';

export function Hero({ headline, subheadline }: HeroProps) {
  return (
    <section className="hero">
      <h1 className="hero__headline">{headline}</h1>
      <p className="hero__sub">{subheadline}</p>
    </section>
  );
}
```

#### 4) Wire content into the page (this is where content is imported)

`src/app/page.tsx` imports content and passes it down as props:

```tsx
import { homeContent } from '@/content/home';
import { Hero } from '@/components/sections/Hero';

export default function Page() {
  return <Hero {...homeContent.hero} />;
}
```

### Before/after: the mistake we never allow

Bad (breaks ownership + platform editing later):

```tsx
// ❌ Don't do this inside a section component
import { homeContent } from '@/content/home';

export function Hero() {
  return <h1>{homeContent.hero.headline}</h1>;
}
```

---

## Brand layer (MANDATORY)

### Rules

- Brand tokens live in `content/brand.ts`
- **No hardcoded colors/fonts** in components
- Styling uses **CSS variables** like `var(--color-primary)` and `var(--font-body)`

### Edit the brand (single source of truth)

All visual tokens (colors, fonts, spacing, radii) live here:

```ts
import type { Brand } from '@/types/content';

export const brand: Brand = {
  colors: {
    primary: '#0F0F0F',
    accent: '#C8B89A',
    background: '#FFFFFF',
    // ...
  },
  fonts: {
    heading: "'DM Serif Display', serif",
    body: "'DM Sans', sans-serif",
  },
  spacing: {
    section: '7rem',
    container: '1200px',
    gap: '1.5rem',
  },
  borderRadius: {
    md: '0.5rem',
    // ...
  },
};
```

### How BrandProvider generates CSS variables (real code)

`src/providers/BrandProvider.tsx` converts the tokens into `:root` variables with consistent naming:

```tsx
import { brand } from '@/content/brand';

const categoryPrefix: Record<string, string> = {
  colors: 'color',
  fonts: 'font',
  spacing: 'spacing',
  borderRadius: 'radius',
};

function buildRootCssVariables() {
  const cssVars: Record<string, string> = {};

  for (const [category, values] of Object.entries(brand)) {
    const prefix = categoryPrefix[category] || category;
    for (const [key, value] of Object.entries(values as Record<string, string>)) {
      cssVars[`--${prefix}-${key}`] = value;
    }
  }

  const declarations = Object.entries(cssVars)
    .map(([k, v]) => `${k}: ${v};`)
    .join('\n');

  return `:root {\n${declarations}\n}\n`;
}

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const cssText = buildRootCssVariables();
  return (
    <>
      <style data-ohhwells-brand>{cssText}</style>
      {children}
    </>
  );
}
```

It’s mounted once in `src/app/layout.tsx`, wrapping the whole app:

```tsx
import { BrandProvider } from '@/providers/BrandProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BrandProvider>{children}</BrandProvider>
      </body>
    </html>
  );
}
```

### How sections “use the brand” (no hardcoded values)

Sections should use class-based styling, and CSS uses variables. Example from `src/styles/globals.css`:

```css
.btn--primary {
  background: var(--color-primary);
  color: var(--color-onPrimary);
}

body {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-background);
}
```

**Result:** changing `content/brand.ts` changes the entire site’s look without editing any component code.

---

## Ownership model (MANDATORY)

- **Code (developer-owned)**: everything under `src/` (components, pages, providers, utilities)
- **Data (platform-owned)**: everything under `content/` (copy + structure + brand tokens)

The starter’s job is to keep those boundaries clean.

### What happens after handoff (important)

- **Developer can redeploy code** (new sections/layout/features) without overwriting client content, because content is owned by the platform layer.
- **Client/platform can edit content + brand** (via the editor / Content API) without touching the developer’s code.

---

## Vibe-code customisations (safe workflow)

This is the recommended workflow when you “vibe code” a new client site from the starter.

### Step 1: Reskin via `content/brand.ts` first

- Update **colors** (`primary`, `accent`, `background`, `text`, etc.)
- Update **fonts** (`heading`, `body`)
- Update **spacing / radius** if needed

Only after the brand feels right, start touching components.

### Step 2: Replace copy/images in `content/*.ts`

- Update `content/global.ts` (nav, footer, socials, logo text)
- Update page content (`home.ts`, `about.ts`, `services.ts`, `contact.ts`)
- Keep content as plain data (no JSX, no React nodes)

### Step 3: Add/modify sections (typed props only)

- Add a new prop type to `src/types/content.ts`
- Add data to the relevant `content/*.ts`
- Create a section component under `src/components/sections/<SectionName>/`
- Wire it in the page file (`src/app/**/page.tsx`) by passing props

### Step 4: Sanity checks before deploy

- `npm run build` passes
- No hardcoded colors/fonts in components
- No section imports `@/content/*`

---

## Common mistakes

- **Importing content inside a component**
  - Bad: `import { homeContent } from '@/content/home'` inside `Hero.tsx`
- **Hardcoding colors**
  - Bad: `style={{ color: '#fff' }}` or CSS `color: #fff`
- **Hardcoding fonts**
  - Bad: `font-family: 'Inter'` in a component stylesheet instead of `var(--font-body)` / `var(--font-heading)`
- **Mixing code and data**
  - Bad: putting page copy inside `src/components/...`

---

## End-to-end test (follow this exactly)

This is the “from starter → published site” workflow. If any step fails, fix the friction before considering the guide complete.

### 1) Create a new site folder from the starter

```powershell
Copy-Item -Recurse -Force ohhwells-starter my-test-site
cd my-test-site
```

### 2) Install and run locally

```bash
npm install
npm run dev
```

Verify `http://localhost:3000` loads.

### 3) Brand change verification (required)

Edit `content/brand.ts`:

- Change `colors.primary` to something obvious (e.g. `#0057FF`)
- Change `colors.accent` to something obvious (e.g. `#FF3D81`)
- Optionally change `fonts.heading` / `fonts.body`

Verify in the browser:

- Primary buttons + dark sections update (driven by `var(--color-primary)`)
- Accent text (eyebrows, accents) updates (driven by `var(--color-accent)`)
- Body + headings update if you changed fonts (driven by `var(--font-body)` / `var(--font-heading)`)

### 4) Production build check (required)

```bash
npm run build
npm run start
```

Verify `http://localhost:3000` still works in production mode.

### 5) Publish to a test subdomain

Choose one:

#### Option A (recommended): publish to Vercel `*.vercel.app`

Prereq: `npm i -g vercel`

```bash
vercel login
vercel
vercel --prod
```

Vercel will print a public URL like `https://<project>.vercel.app` (your test subdomain).

#### Option B: publish via OhhWells platform deploy (if you have access)

- Ensure `ohhwells.json` exists at the repo root and set:
  - `subdomain`: your test subdomain
  - `apiUrl`: the OhhWells API base URL provided by the platform team
- Run the platform deploy command your team provides (CLI + auth required).

### 6) Verify the published site

- Public URL loads
- Brand changes are visible on multiple sections (not just one component)
- No runtime errors in console

---

## Troubleshooting

- **Build fails with module resolution**
  - Ensure you’re importing content via `@/content/...` and that `tsconfig.json` has the `@/content/*` path.
- **Brand changes don’t apply**
  - Confirm `BrandProvider` is used in `src/app/layout.tsx`
  - Confirm you’re changing `content/brand.ts` (not `src/content/brand.ts`)
- **Vercel deploy fails**
  - Run `vercel login`
  - Ensure your repo has no secrets committed (don’t deploy `.env`)

---

## Verify production

Verification checklist:

- Home page loads
- Brand tokens match expected (primary color + fonts)
- Content matches `content/*.ts`
- No console errors

