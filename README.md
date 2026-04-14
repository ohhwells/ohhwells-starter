# ohhwells-starter

A minimal, production-ready Next.js base template for every vibe-coded OhhWells site. Swap the brand tokens and content files — the architecture stays the same.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    App Router pages + system pages
│   ├── layout.tsx          Root layout (BrandProvider + Navbar + Footer)
│   ├── page.tsx            Homepage
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   ├── loading.tsx         Branded loading skeleton
│   ├── not-found.tsx       Branded 404
│   ├── error.tsx           Branded error page
│   ├── sitemap.ts          Auto-generated sitemap.xml
│   └── robots.ts           Crawl rules
│
├── components/
│   ├── ui/                 Design primitives (Button, Card, Input)
│   ├── layout/             Structural wrappers (Navbar, Footer, BrandProvider, Container, MobileMenu)
│   └── sections/           Page sections (Hero, Services, AboutPreview, Testimonials, CallToAction)
│
├── content/                Plain TypeScript data objects
│   ├── brand.ts            Visual tokens (colors, fonts, spacing, radii)
│   ├── global.ts           Nav items, footer, social links
│   ├── home.ts
│   ├── about.ts
│   ├── services.ts
│   └── contact.ts
│
├── lib/                    Utilities
│   ├── seo.ts              Reusable metadata builder
│   ├── fonts.ts            next/font config (DM Serif Display + DM Sans)
│   ├── utils.ts            Helper functions
│   └── constants.ts        Site name, base URL
│
├── styles/
│   └── globals.css         Base styles using CSS custom properties
│
└── types/
    └── content.ts          TypeScript interfaces for all content shapes
```

## The Three Conventions

### 1. Content Convention

Content lives in `content/` as plain TypeScript objects. Section components receive content via typed props — they never import or fetch content directly.

```tsx
// content/home.ts — data
export const homeContent: HomeContent = {
  hero: { headline: "Your headline", ... }
};

// components/sections/Hero.tsx — receives props
export function Hero({ headline, subheadline, ctaText, ctaLink }: HeroContent) { ... }

// app/page.tsx — wiring layer
<Hero {...homeContent.hero} />
```

### 2. Brand Layer

All visual tokens live in `content/brand.ts`. The `BrandProvider` component injects them as CSS custom properties at the root level. Components use `var(--color-primary)`, `var(--font-heading)`, etc. — never hardcoded values.

```ts
// content/brand.ts
export const brand = {
  colors: { primary: "#0F0F0F", accent: "#C8B89A", ... },
  fonts: { heading: "'DM Serif Display', serif", body: "'DM Sans', sans-serif" },
  ...
};
```

To reskin the entire site, edit `brand.ts`. Nothing else needs to change.

### 3. Ownership Model

After handoff, developers own the code (components, layout, logic) and the platform owns the data (content files, brand settings). Clients edit content and brand through the OhhWells editor without touching code. Developers redeploy code without overwriting client data.

## Forking for a New Client

1. Copy this template
2. Update `content/brand.ts` with the client's colors, fonts, and spacing
3. Replace content in `content/home.ts`, `about.ts`, `services.ts`, `contact.ts` with real copy
4. Update `content/global.ts` with the client's site name, nav items, and social links
5. Swap Unsplash image URLs for client-specific photography
6. Update `lib/constants.ts` with the production URL and site name
7. Deploy

## Tech Stack

- **Next.js 14** (App Router, server components)
- **TypeScript** (strict mode, all content shapes typed)
- **CSS custom properties** (via BrandProvider, no Tailwind dependency)
- **Google Fonts** (DM Serif Display + DM Sans, configured via next/font)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
