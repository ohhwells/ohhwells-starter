import { DM_Serif_Display, DM_Sans } from 'next/font/google';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-heading-next',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body-next',
  display: 'swap',
});

export const fontClasses = `${dmSerifDisplay.variable} ${dmSans.variable}`;
