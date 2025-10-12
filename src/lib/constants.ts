export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";

export const isClient = typeof document !== "undefined";
export const isServer = !isClient;

export const getURL = (path?: string | URL | null) => {
  if (isClient) {
    const protocol = window.location.protocol;
    const domain = window.location.hostname;
    const port = window.location.port;

    return new URL(path || "", `${protocol}//${domain}${port ? `:${port}` : ""}`);
  }

  const url = process.env.NEXT_PUBLIC_SITE_URL || "";

  if (!url && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(path || "", `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  if (isDev) {
    return new URL(path || "", "http://localhost:3000");
  }

  return new URL(path || "", url);
};

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
