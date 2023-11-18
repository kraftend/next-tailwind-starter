import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Analytics } from '@/lib/analytics';
import { siteURL } from '@/lib/constants';
import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({ variable: '--font-sans', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: siteURL,
  title: {
    default: 'next-starter | kraftend',
    template: `%s | kraftend`,
  },
  description: `Kraftend's default boilerplate with Next.js.`,
  twitter: {
    card: 'summary_large_image',
    title: 'next-starter | kraftend',
    creator: '@kraftend',
    siteId: '@kraftend',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable)} suppressHydrationWarning>
      <body>
        {children}
        <TailwindIndicator />
        <Analytics />
      </body>
    </html>
  );
}
