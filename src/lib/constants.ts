/** biome-ignore-all lint/style/noNestedTernary: <explanation> */
import { env } from '~/env';

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';

export const isClient = typeof document !== 'undefined';
export const isServer = !isClient;

export const siteURL = new URL(
  env.NEXT_PUBLIC_SITE_URL
    ? env.NEXT_PUBLIC_SITE_URL
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : isDev
        ? 'http://localhost:3000'
        : '/'
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
