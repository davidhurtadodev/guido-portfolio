import '../../node_modules/@sakun/system.css/style.css';
import '../../node_modules/nes.css/css/nes.css';
import './globals.css';
import type { Metadata } from 'next';
import { antonio, vt323 } from '@/lib/fonts';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Script from 'next/script';

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
      {process.env.NODE_ENV === 'production' ? (
        <Script strategy="afterInteractive" id="hotjar">
          {`function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3844172,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=';`}
        </Script>
      ) : null}
    </html>
  );
}
