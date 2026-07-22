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
    <header className="navbar" data-ohw-nav-root="">
      <div className="navbar__inner">
        {/* Logo */}
        <Link href="/" className="navbar__logo">
          <span data-ohw-editable="plain" data-ohw-key="nav-logo-text">
            {logo.text}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" data-ohw-nav-container="">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              data-ohw-href-key={`nav-${i}-href`}
              className="navbar__link"
            >
              <span data-ohw-editable="text" data-ohw-key={`nav-${i}-label`}>
                {item.label}
              </span>
            </Link>
          ))}
          {ctaButton && (
            <Link
              href={ctaButton.href}
              data-ohw-href-key="nav-cta-href"
              data-ohw-role="navbar-button"
              data-ohw-drag-disabled="true"
              className="navbar__cta"
            >
              <span data-ohw-editable="text" data-ohw-key="nav-cta-label">
                {ctaButton.label}
              </span>
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
        ctaButton={ctaButton}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
