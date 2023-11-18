/* eslint-disable @typescript-eslint/require-await */
import { env } from './src/env.mjs';

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  async headers() {
    return [
      process.env.NODE_ENV === 'production' && {
        // Apply these security headers to all routes in production.
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ].filter(Boolean);
  },
  async rewrites() {
    return [
      !!env.NEXT_PUBLIC_UMAMI_TRACKING_ID && {
        source: '/stats/:match*',
        destination: `${
          env.NEXT_PUBLIC_UMAMI_TRACKING_URL ?? 'https://umami.kraftend.dev'
        }/:match*`,
      },
    ].filter(Boolean);
  },
});
