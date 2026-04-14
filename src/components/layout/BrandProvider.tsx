'use client';

import { brand } from '@/content/brand';

const categoryPrefix: Record<string, string> = {
  colors: 'color',
  fonts: 'font',
  spacing: 'spacing',
  borderRadius: 'radius',
};

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const cssVars: Record<string, string> = {};

  for (const [category, values] of Object.entries(brand)) {
    const prefix = categoryPrefix[category] || category;
    for (const [key, value] of Object.entries(values as Record<string, string>)) {
      cssVars[`--${prefix}-${key}`] = value;
    }
  }

  return (
    <div style={cssVars as React.CSSProperties} className="brand-root">
      {children}
    </div>
  );
}
