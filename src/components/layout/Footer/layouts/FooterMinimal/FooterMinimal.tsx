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
    <footer className="footer-minimal">
      <Container>
        <div className="footer-minimal__inner">
          <Link href="/" className="footer-minimal__logo">
            {content.logoUrl ? (
              <Image src={content.logoUrl} alt={logoText} width={120} height={24} />
            ) : (
              logoText
            )}
          </Link>

          {content.links.length > 0 && (
            <nav className="footer-minimal__nav">
              {content.links.map((link) => (
                <Link key={link.href} href={link.href} className="footer-minimal__link">
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          <p className="footer-minimal__copyright">{content.copyrightText}</p>
        </div>
      </Container>
    </footer>
  );
}
