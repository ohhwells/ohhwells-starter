'use client';

import Link from 'next/link';
import type { NavItem } from '@/types/content';

interface MobileMenuProps {
  items: NavItem[];
  ctaButton?: { label: string; href: string };
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ items, ctaButton, open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="mobile-menu" data-ohw-nav-drawer="">
      <nav className="mobile-menu__nav">
        {items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            data-ohw-href-key={`nav-${i}-href`}
            className="mobile-menu__link"
            onClick={onClose}
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
            className="mobile-menu__cta"
            onClick={onClose}
          >
            <span data-ohw-editable="text" data-ohw-key="nav-cta-label">
              {ctaButton.label}
            </span>
          </Link>
        )}
      </nav>
    </div>
  );
}
