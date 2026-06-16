import type { ReactNode } from 'react';
import { brand } from '@/content/brand';

/**
 * BrandProvider — emits brand design tokens as CSS custom properties at :root.
 * Server-rendered (no client JS). Components reference tokens via var(--brand-*).
 *
 * Token naming contract (matches core/CLAUDE.md):
 *   Colors  → --brand-{kebab-key}   e.g. --brand-primary, --brand-text-muted
 *   Fonts   → --brand-font-{key}    e.g. --brand-font-heading, --brand-font-body
 *   Spacing → --spacing-{key}       e.g. --spacing-section, --spacing-container
 *   Radii   → --radius-{key}        e.g. --radius-md, --radius-lg
 *
 * To re-skin: edit src/content/brand.ts only.
 */

function kebab(str: string): string {
  return str.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}

const cssVars = (() => {
  const lines: string[] = [];

  for (const [key, value] of Object.entries(brand.colors)) {
    lines.push(`--brand-${kebab(key)}: ${value};`);
  }

  for (const [key, value] of Object.entries(brand.fonts)) {
    lines.push(`--brand-font-${key}: ${value};`);
  }

  for (const [key, value] of Object.entries(brand.spacing)) {
    lines.push(`--spacing-${key}: ${value};`);
  }

  for (const [key, value] of Object.entries(brand.borderRadius)) {
    lines.push(`--radius-${key}: ${value};`);
  }

  return `:root {\n  ${lines.join('\n  ')}\n}`;
})();

export function BrandProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssVars }} />
      {children}
    </>
  );
}
