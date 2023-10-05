import { Antonio, VT323 } from 'next/font/google';

export const antonio = Antonio({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-antonio',
});

export const vt323 = VT323({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vt323',
  weight: '400',
});
