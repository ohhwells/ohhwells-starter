'use client';

import Link from 'next/link';
import type { NavItem } from '@/types/content';

interface MobileMenuProps {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ items, open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="mobile-menu">
      <nav className="mobile-menu__nav">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mobile-menu__link"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
