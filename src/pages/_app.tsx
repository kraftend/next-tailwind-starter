import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import SEOConfig from '@_/seo.config';
import { useVhValue } from '@/hooks/useVhValue';
import 'focus-visible';
import '@fontsource/inter/variable.css';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useVhValue();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
