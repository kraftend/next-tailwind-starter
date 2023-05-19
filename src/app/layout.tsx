import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { cn } from '@/lib/utils';

const inter = Inter({ variable: '--font-sans', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'New Project | Kraftend',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable)}>
      <body>
        {children}
        {/* <Analytics /> */}
        <TailwindIndicator />
      </body>
    </html>
  );
}
