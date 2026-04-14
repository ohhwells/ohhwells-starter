import Link from 'next/link';
import { Container } from './Container';
import type { FooterContent, SocialLink, NavItem } from '@/types/content';

interface FooterProps {
  content: FooterContent;
  socials: SocialLink[];
  navItems?: NavItem[];
  logoText?: string;
}

export function Footer({ content, socials, navItems, logoText }: FooterProps) {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          {/* Logo */}
          <Link href="/" className="footer__logo">
            {logoText || 'ohhwells'}
          </Link>

          {/* Nav links */}
          {navItems && (
            <nav className="footer__nav">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="footer__link">
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Copyright */}
          <p className="footer__copyright">{content.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
