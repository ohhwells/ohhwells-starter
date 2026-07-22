# OhhWells Canvas Editor — Template Authoring Guide

The canvas editor lets studio owners edit this site's text, images, and links inline, without touching code. The `OhhwellsBridge` component (wired into `src/app/layout.tsx`) handles the editor UI, saving, and hydration automatically — your job is to add `data-ohw-*` attributes to the elements that should be editable.

This file is the contract for those attributes. It also documents the key-naming scheme already used across this starter's sections, so new sections stay consistent.

---

## Required attributes

### `data-ohw-key`
A **unique string identifier** for each editable node. This is the key used to store and hydrate content. Must be unique across the entire site.

```tsx
<h1 data-ohw-key="hero-headline">{content.headline}</h1>
```

- Use kebab-case: `hero-headline`, `about-heading`, `cta-primary-label`
- Keys are **stable** — changing a key after deployment loses saved content for that node

### `data-ohw-editable`
Marks the element as editable. Five modes:

| Value | Behavior |
|-------|----------|
| `"text"` | Rich text — bold, italic, alignment, lists allowed |
| `"plain"` | Plain text only — no formatting, saves `innerText` |
| `"image"` | Replaces an `<img>` (or Next `<Image>`) element's `src` via file upload |
| `"bg-image"` | Replaces a container's `backgroundImage` CSS via file upload |
| `"video"` | Replaces a `<video>` element's `src` via file upload (mp4/webm) |

Both `data-ohw-key` and `data-ohw-editable` must be on the **same element**.

---

## Optional attributes

### `data-ohw-max-length`
Limits how many characters the studio owner can type. A floating badge shows the current count and turns red when exceeded.

```tsx
<h1 data-ohw-editable="text" data-ohw-key="hero-headline" data-ohw-max-length="80">
```

Recommended limits: headlines/CTAs `60–80`, subtitles `120–160`, body paragraphs — omit (no limit).

### Bridge-managed links (nav, footer, buttons)

Use a plain `<Link>`/`<a>` with `data-ohw-href-key` for links whose **destination URL** is edited in the canvas. Pair with an inner `<span>` that carries the label key — the label **must** use `data-ohw-editable="text"`, not `"plain"`: the bridge only recognizes an `[data-ohw-href-key]` link as a navigation item (enabling drag-to-reorder, the nav toolbar, hover states) when it contains a `data-ohw-editable="text"` child:

```tsx
<Link href={item.href} data-ohw-href-key={`nav-${i}-href`}>
  <span data-ohw-editable="text" data-ohw-key={`nav-${i}-label`}>
    {item.label}
  </span>
</Link>
```

Add `data-ohw-role="navbar-button"` on a primary nav/header CTA — first click selects the button and shows an **Edit link** toolbar; a second click on the label enters text editing. Plain nav/footer text links use the normal single-click-to-edit flow. Also add `data-ohw-drag-disabled="true"` on the CTA — it's already excluded from reorder because of `navbar-button`, but set it explicitly anyway (matches `rebound-template`'s reference implementation):

```tsx
<Link href={ctaButton.href} data-ohw-href-key="nav-cta-href" data-ohw-role="navbar-button" data-ohw-drag-disabled="true">
  <span data-ohw-editable="text" data-ohw-key="nav-cta-label">{ctaButton.label}</span>
</Link>
```

To exempt a specific *non-CTA* link from reorder (e.g. a link that should always stay last), set `data-ohw-drag-disabled="true"` on it directly — omit the attribute entirely (don't set it to `"false"`) for every link that should stay reorderable, which is the default.

The `Button` component (`src/components/ui/Button.tsx`) forwards `data-ohw-key`/`data-ohw-editable`/`data-ohw-max-length` onto whichever element it renders (`<Link>` or `<button>`), so section CTAs can be tagged directly:

```tsx
<Button href={content.ctaHref} data-ohw-editable="plain" data-ohw-key="hero-cta-label">
  {content.ctaLabel}
</Button>
```

---

## Rules

1. **Every editable element needs both `data-ohw-key` and `data-ohw-editable`** — one without the other does nothing
2. **Keys must be unique** within the site — duplicates cause both elements to sync to the same content
3. **Don't put editable elements inside other editable elements** — nested editables are not supported
4. **Don't rely on inline styles for text content** — the editor saves/restores `innerHTML`, so CSS-class formatting is fine, but inline `style` on the editable element itself may be overwritten
5. **When content renders as an array** (paragraphs split from one string, list items mapped from an array), tag the **wrapping container**, not each generated child — see `AboutSplit.tsx`'s `about-body` key for the pattern
6. **List items get an index-suffixed key**: `services-item-${i}-title`, `testimonials-item-${i}-quote`, etc. — stable as long as item order doesn't change
7. **Nav/footer link labels (paired with `data-ohw-href-key`) must use `data-ohw-editable="text"`**, never `"plain"` — see the Bridge-managed links example above

---

## Key naming already in use in this starter

| Component | Keys |
|---|---|
| `Navbar` / `MobileMenu` | `nav-logo-text`, `nav-${i}-href` / `nav-${i}-label` (shared across desktop + mobile), `nav-cta-href` / `nav-cta-label` |
| `FooterMinimal` | `footer-logo` (image) or `footer-logo-text` (plain), `footer-${i}-href` / `footer-${i}-label`, `footer-copyright` |
| `HeroCentered` | `hero-headline`, `hero-subheadline`, `hero-bg-image` |
| `AboutSplit` | `about-heading`, `about-body`, `about-image` |
| `CTACentered` | `cta-headline`, `cta-subheadline` |
| `ContactCentered` | `contact-heading`, `contact-subheading` |
| `ServicesGrid` | `services-eyebrow`, `services-heading`, `services-subheading`, `services-item-${i}-title` / `-desc` / `-icon` |
| `TestimonialsGrid` | `testimonials-heading`, `testimonials-subheading`, `testimonials-item-${i}-quote` / `-author` / `-role` / `-photo` |
| `error.tsx` | `error-eyebrow`, `error-headline`, `error-body` |
| `not-found.tsx` | `notfound-eyebrow`, `notfound-headline`, `notfound-body` |
| `app/services/page.tsx` (page header, separate from `ServicesGrid`) | `services-page-eyebrow`, `services-page-headline`, `services-page-subheadline` |
| `app/about/page.tsx` (page header, separate from `AboutSplit`) | `about-page-eyebrow`, `about-page-headline`, `about-page-body` |

Each section root also carries `data-ohw-section="<name>"` and `data-ohw-section-label="<Label>"` (e.g. `data-ohw-section="hero"`) so the editor can identify and label sections in its UI.

Form inputs (`Input.tsx`, used in `ContactCentered`) are intentionally **not** tagged — form fields are structural/functional, not editorial content.

`Button` component labels are intentionally **not** tagged anywhere in this starter — the only editable button label is the top navbar CTA (`nav-cta-label`, on the `<Link data-ohw-role="navbar-button">` in `Navbar`/`MobileMenu`, not the `Button` component). Don't add `data-ohw-editable`/`data-ohw-key` to a `<Button>` usage unless explicitly asked.

---

## Environment variables

```env
NEXT_PUBLIC_FLOWOPS_API_URL=   # Backend API — used by OhhwellsBridge to fetch/save content
NEXT_PUBLIC_SITE_URL=          # Public URL of this deployed site
```

See `.env.example`. Both are set automatically when deploying via `ohhwells deploy` — no manual config needed for a real deployment; they're only needed locally to preview editor behavior against a real backend.

> `NEXT_PUBLIC_SITE_URL` is set once at the project level — don't hardcode it, and don't let a local override leak into a deploy. The bridge reads the current hostname at runtime to identify the site.
