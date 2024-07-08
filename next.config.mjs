/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const env = await import('./src/env.mjs').then((m) => m.env);

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
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          resourceQuery: /react/,
          as: '*.js',
        },
      },
    },
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async headers() {
    return [
      env.NODE_ENV === 'production' && {
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
  webpack(config) {
    // ******* SVGR SUPPORT
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    fileLoaderRule.resourceQuery = {
      ...fileLoaderRule.resourceQuery,
      not: [...fileLoaderRule.resourceQuery.not, /react/], // exclude if *.svg?react
    };

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      resourceQuery: /react/, // *.svg?react
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
