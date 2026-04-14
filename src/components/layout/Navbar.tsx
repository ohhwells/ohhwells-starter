'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { NavItem, LogoConfig } from '@/types/content';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  items: NavItem[];
  logo: LogoConfig;
  ctaButton?: { label: string; href: string };
}

export function Navbar({ items, logo, ctaButton }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <Link href="/" className="navbar__logo">
          {logo.text}
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="navbar__link">
              {item.label}
            </Link>
          ))}
          {ctaButton && (
            <Link href={ctaButton.href} className="navbar__cta">
              {ctaButton.label}
            </Link>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileMenu
        items={items}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
