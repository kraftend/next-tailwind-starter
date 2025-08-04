'use client';

import {
  GoogleAnalytics,
  GoogleTagManager,
  sendGAEvent,
  sendGTMEvent,
} from '@next/third-parties/google';
import Script from 'next/script';

import { env } from '~/env';
import { isClient, isDev, isProd, signatureLog } from '~/lib/constants';

declare global {
  interface Window {
    umami?: {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      track: (...args: any[]) => void;
    };
  }
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function logEvent(name: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    if (env.NEXT_PUBLIC_GA_TRACKING_ID) {
      sendGAEvent({ event: name, ...parameters });
    }

    if (env.NEXT_PUBLIC_GTM_ID) {
      sendGTMEvent({ event: name, ...parameters });
    }

    if (env.NEXT_PUBLIC_UMAMI_TRACKING_ID && 'umami' in window) {
      window.umami?.track(name, parameters);
    }

    if (isDev) {
      // biome-ignore lint/suspicious/noConsole: <explanation>
      console.log(`Track: ${name}`, parameters);
    }
  }
}

function UmamiAnalytics() {
  if (env.NEXT_PUBLIC_UMAMI_TRACKING_ID) {
    return (
      <Script
        data-website-id={env.NEXT_PUBLIC_UMAMI_TRACKING_ID}
        src="/stats/script.js"
        strategy="afterInteractive"
      />
    );
  }

  return null;
}

export function Analytics() {
  if (isClient && isProd) {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log(signatureLog);
  }

  return (
    <>
      <UmamiAnalytics />
      {!!env.NEXT_PUBLIC_GA_TRACKING_ID && (
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_TRACKING_ID} />
      )}
      {!!env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
      )}
    </>
  );
}
