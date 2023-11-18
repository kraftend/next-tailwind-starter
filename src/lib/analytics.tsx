'use client';

import Script from 'next/script';
import { Analytics as VercelAnalytics, track as vercelTrack } from '@vercel/analytics/react';

import { env } from '@/env.mjs';
import { isClient, isDev, isProd, signatureLog } from '@/lib/constants';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    umami?: {
      track: (...args: any[]) => void;
    };
  }
}

export function logEvent(name: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    if (env.NEXT_PUBLIC_GA_TRACKING_ID) {
      if ('gtag' in window) {
        window.gtag?.('event', name, parameters);
      } else {
        window.dataLayer = window.dataLayer ?? [];
        window.dataLayer.push({ event: name, ...parameters });
      }
    }

    if (env.NEXT_PUBLIC_UMAMI_TRACKING_ID) {
      if ('umami' in window) {
        window.umami?.track(name, parameters);
      }
    }

    if (env.NEXT_PUBLIC_VERCEL_ANALYTICS) {
      vercelTrack(name, parameters);
    }

    if (isDev) {
      // eslint-disable-next-line no-console
      console.log(`Track: ${name}`, parameters);
    }
  }
}

function GoogleAnalytics() {
  if (env.NEXT_PUBLIC_GA_TRACKING_ID) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${env.NEXT_PUBLIC_GA_TRACKING_ID}');
          `}
        </Script>
      </>
    );
  }
  return null;
}

function UmamiAnalytics() {
  if (env.NEXT_PUBLIC_UMAMI_TRACKING_ID) {
    return (
      <Script
        strategy="afterInteractive"
        src="/stats/script.js"
        data-website-id={env.NEXT_PUBLIC_UMAMI_TRACKING_ID}
      />
    );
  }

  return null;
}

export function Analytics() {
  if (isClient && isProd) {
    // eslint-disable-next-line no-console
    console.log(signatureLog);
  }

  return (
    <>
      <UmamiAnalytics />
      <GoogleAnalytics />
      {!!env.NEXT_PUBLIC_VERCEL_ANALYTICS && <VercelAnalytics />}
    </>
  );
}
