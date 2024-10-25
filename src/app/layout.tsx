import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '~/app/providers';
import { TailwindIndicator } from '~/components/ui/tailwind-indicator';
import { ThemeProvider } from '~/components/ui/theme-provider';
import { Analytics } from '~/lib/analytics';
import { siteURL } from '~/lib/constants';
import { cn } from '~/lib/utils';

import './globals.css';
import 'lenis/dist/lenis.css';

const inter = Inter({ variable: '--font-sans', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: siteURL,
  title: {
    default: 'next-starter | kraftend',
    template: `%s | kraftend`,
  },
  description: `Kraftend's default boilerplate with Next.js.`,
  openGraph: {
    type: 'website',
    url: siteURL,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@kraftend',
    siteId: '@kraftend',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
          <TailwindIndicator />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
