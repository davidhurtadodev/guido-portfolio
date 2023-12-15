import '../../node_modules/@sakun/system.css/style.css';
import '../../node_modules/nes.css/css/nes.css';
import './globals.css';
import type { Metadata } from 'next';
import { antonio, vt323 } from '@/lib/fonts';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Guido Hurtado - Portfolio',
  description: `I'm a Venezuelan UI/UX Designer with more than 15 years of experience`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`window ${antonio.variable} ${vt323.variable} after:absolute after:w-0 after:h-0 after:overflow-hidden after:-z-10 after:content-[url('/assets/images/guido-drinking.gif')] cursor-[url(/assets/images/cursor.gif)_22_22,_auto]`}
      >
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS &&
        process.env.NODE_ENV === 'production' ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}
      </body>
    </html>
  );
}
