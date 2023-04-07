import Head from 'next/head'
import '../styles/globals.scss'
import { AppProps } from 'next/app'
import { TeamProvider } from 'hooks/teamContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Limbus Company Team Builder</title>
        <meta name="description" content="Limbus Company Team Builder" />

      {/* Worry about this later if doing PWA.
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      */}
      </Head>
      <TeamProvider initialState={[]}>
        <Component {...pageProps} />
      </TeamProvider>
    </>
  )
}
