// ─── Content Types ─────────────────────────────────────────────────────────
// Page-specific types live in section layout folders.
// Shared page-level types used across multiple pages remain here.

export interface ServiceItem {
  title: string;
  description: string;
  iconUrl?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServicesPageContent {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  services: ServiceItem[];
}

export interface AboutPageContent {
  eyebrow?: string;
  headline: string;
  body: string[];
  image?: string;
  stats?: StatItem[];
}

// ─── Global Types ──────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface LogoConfig {
  text: string;
  image?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  layout: 'minimal';
  content: {
    logoUrl?: string;
    tagline?: string;
    copyrightText: string;
    links: FooterLink[];
    socials?: SocialLink[];
  };
}

export interface GlobalContent {
  siteName: string;
  logo: LogoConfig;
  navItems: NavItem[];
  ctaButton?: { label: string; href: string };
  footer: FooterContent;
  socials: SocialLink[];
}

// ─── Brand Types ───────────────────────────────────────────────────────────

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  onPrimary: string;
  primarySurface: string;
  primaryBorder: string;
  onPrimaryMuted: string;
  onPrimaryFaint: string;
  navbarBackground: string;
}

export interface BrandFonts {
  heading: string;
  body: string;
}

export interface BrandSpacing {
  section: string;
  container: string;
  gap: string;
}

export interface BrandRadius {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface Brand {
  colors: BrandColors;
  fonts: BrandFonts;
  spacing: BrandSpacing;
  borderRadius: BrandRadius;
}
