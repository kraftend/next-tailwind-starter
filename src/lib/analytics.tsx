'use client';

import Script from 'next/script';
import {
  GoogleAnalytics,
  GoogleTagManager,
  sendGAEvent,
  sendGTMEvent,
} from '@next/third-parties/google';
import { Analytics as VercelAnalytics, track as vercelTrack } from '@vercel/analytics/react';

import { env } from '~/env';
import { isClient, isDev, isProd, signatureLog } from '~/lib/constants';

declare global {
  interface Window {
    umami?: {
      track: (...args: any[]) => void;
    };
  }
}

export function logEvent(name: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    if (env.NEXT_PUBLIC_GA_TRACKING_ID) {
      sendGAEvent({ event: name, ...parameters });
    }

    if (env.NEXT_PUBLIC_GTM_ID) {
      sendGTMEvent({ event: name, ...parameters });
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
      {!!env.NEXT_PUBLIC_GA_TRACKING_ID && (
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_TRACKING_ID} />
      )}
      {!!env.NEXT_PUBLIC_VERCEL_ANALYTICS && <VercelAnalytics />}
      {!!env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />}
    </>
  );
}
