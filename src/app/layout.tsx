import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import AppFrame from '@/components/AppFrame';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <AppFrame>{children}</AppFrame>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
