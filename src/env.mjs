import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
    NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
    NEXT_PUBLIC_GA_TRACKING_ID: z.string().optional(),
    NEXT_PUBLIC_UMAMI_TRACKING_ID: z.string().optional(),
    NEXT_PUBLIC_UMAMI_TRACKING_URL: z.string().url().optional(),
    NEXT_PUBLIC_VERCEL_ANALYTICS: z
      .string()
      .optional()
      .transform((s) => !!s && s !== 'false' && s !== '0'),
  },
  shared: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
    VERCEL: z
      .string()
      .optional()
      .transform((s) => !!s && s !== 'false' && s !== '0'),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {},
});
