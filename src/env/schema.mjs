// @ts-check
import { z } from 'zod';

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  // example:
  // NEXT_PUBLIC_ROOT_DOMAIN: z.string().min(1),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  // example:
  // NEXT_PUBLIC_ROOT_DOMAIN: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
};

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  VERCEL: z.boolean().default(false),
});

/**
 * You can't destruct `process.env` as a regular object in Next.js Middleware also,
 * so you have to do it manually here. Also it helps to parse and set conditional defaults.
 * @type {{ [k in keyof z.infer<typeof serverSchema>]: z.infer<typeof serverSchema>[k] | undefined }}
 */
export const serverEnv = {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL: ['1', 'true', 'TRUE'].includes(process.env.VERCEL ?? ''),
};
