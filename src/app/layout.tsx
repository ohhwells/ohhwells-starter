import { BrandProvider } from '@/components/layout/BrandProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { globalContent } from '@/content/global';
import { fontClasses } from '@/lib/fonts';
import { buildMetadata } from '@/lib/seo';
import '@/styles/globals.css';

export const metadata = buildMetadata({
  title: 'Home',
  description: 'A minimal base template for every vibe-coded OhhWells site.',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClasses}>
      <body>
        <BrandProvider>
          <Navbar
            items={globalContent.navItems}
            logo={globalContent.logo}
            ctaButton={globalContent.ctaButton}
          />
          <main>{children}</main>
          <Footer
            content={globalContent.footer}
            socials={globalContent.socials}
            navItems={globalContent.navItems}
            logoText={globalContent.logo.text}
          />
        </BrandProvider>
      </body>
    </html>
  );
}
