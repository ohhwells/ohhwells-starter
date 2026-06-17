import Link from 'next/link';
import { Container } from './Container';
import type { FooterContent, SocialLink } from '@/types/content';
import Image from 'next/image';

interface FooterProps {
  content: FooterContent;
  socials: SocialLink[];
  logoText?: string;
}

export function Footer({ content, socials, logoText }: FooterProps) {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <Link href="/" className="footer__logo">
            {content.logoUrl ? (
              <Image
                src={content.logoUrl}
                alt={logoText || 'ohhwells'}
              />
            ) : (
              logoText || 'ohhwells'
            )}
          </Link>

          {content.links.length > 0 && (
            <nav className="footer__nav">
              {content.links.map((item) => (
                <Link key={item.href} href={item.href} className="footer__link">
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          <p className="footer__copyright">{content.copyrightText}</p>
        </div>
      </Container>
    </footer>
  );
}
