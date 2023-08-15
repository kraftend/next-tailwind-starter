import { env } from '@/env.mjs';

export const isDev = env.NODE_ENV === 'development';
export const isProd = env.NODE_ENV === 'production';

export const isClient = typeof document !== 'undefined';
export const isServer = !isClient;

export const siteURL = new URL(
  env.NEXT_PUBLIC_SITE_URL ?? env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${env.NEXT_PUBLIC_VERCEL_URL}`
    : isDev
    ? 'http://localhost:3000'
    : '/',
);
export const siteOrigin = siteURL.origin;

export const signatureLog = `
  @@@@@
  @@@@@
  @@@@@
  @@@@@     @@@@@@
  @@@@@   @@@@@@
  @@@@@ @@@@@@
  @@@@@@@@@@@@@@
  @@@@@@@    @@@@@

  made by kraftend. https://kraftend.com
`;
