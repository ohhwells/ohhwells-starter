import type { FooterSharedContent } from '../../Footer.types';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocial {
  platform: string;
  url: string;
}

export interface FooterMinimalContent extends FooterSharedContent {
  links: FooterLink[];
  socials?: FooterSocial[];
}
