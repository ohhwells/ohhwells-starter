import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import type { FooterMinimalContent } from './FooterMinimal.types';
import './FooterMinimal.styles.css';

interface FooterMinimalProps {
  content: FooterMinimalContent;
  logoText?: string;
}

export function FooterMinimal({ content, logoText = 'ohhwells' }: FooterMinimalProps) {
  return (
    <footer className="footer-minimal" data-ohw-section="footer" data-ohw-section-label="Footer">
      <Container>
        <div className="footer-minimal__inner">
          <Link href="/" className="footer-minimal__logo">
            {content.logoUrl ? (
              <Image
                src={content.logoUrl}
                alt={logoText}
                width={120}
                height={24}
                data-ohw-editable="image"
                data-ohw-key="footer-logo"
              />
            ) : (
              <span data-ohw-editable="plain" data-ohw-key="footer-logo-text">
                {logoText}
              </span>
            )}
          </Link>

          {content.links.length > 0 && (
            <nav className="footer-minimal__nav">
              {content.links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-ohw-href-key={`footer-${i}-href`}
                  className="footer-minimal__link"
                >
                  <span data-ohw-editable="text" data-ohw-key={`footer-${i}-label`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          )}

          <p
            className="footer-minimal__copyright"
            data-ohw-editable="plain"
            data-ohw-key="footer-copyright"
          >
            {content.copyrightText}
          </p>
        </div>
      </Container>
    </footer>
  );
}
