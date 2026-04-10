import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import AppFrame from '@/components/AppFrame';
import SmoothScroll from '@/components/SmoothScroll';
import { siteConfig } from '@/lib/site-data';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.legalName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  applicationName: siteConfig.name,
  metadataBase: new URL('https://www.gutech.edu.pk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.legalName,
    description: siteConfig.tagline,
    siteName: siteConfig.legalName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.legalName,
    description: siteConfig.tagline,
  },
  icons: {
    icon: '/gutech_tab_logo.png',
    shortcut: '/gutech_tab_logo.png',
    apple: '/gutech_tab_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <AppFrame>{children}</AppFrame>
        </SmoothScroll>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
