import type { NextConfig } from "next";

import { env } from "~/env";

const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async headers() {
    return [
      env.NODE_ENV === "production" && {
        // Apply these security headers to all routes in production.
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ].filter(Boolean);
  },
  async rewrites() {
    return [
      !!env.NEXT_PUBLIC_UMAMI_TRACKING_ID && {
        source: "/stats/:match*",
        destination: `${
          env.NEXT_PUBLIC_UMAMI_TRACKING_URL ?? "https://umami.kraftend.dev"
        }/:match*`,
      },
    ].filter(Boolean);
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default config;
