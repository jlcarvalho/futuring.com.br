import { ThemeProvider, createGlobalStyle } from "styled-components";
import Head from "next/head";

import { Global } from '../components/styles';

const GlobalStyle = createGlobalStyle`
  ${Global}
`;
const GA_TRACKING_ID = 'UA-36868130-1';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Futuring</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0' />

        <meta name='description' content='Nós entregamos experiências digitais.' />

        <meta property='og:locale' content='pt_BR' />
        <meta property='og:url' content='https://futuring.com.br' />
        <meta property='og:description' content='Nós entregamos experiências digitais.' />
        <meta property='og:site_name' content='Futuring' />
        <meta property='og:image' content='https://futuring.com.br/static/images/facebook-image.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='900' />

        <meta name='theme-color' content='#141414' />

        <link rel='preconnect' href='https://api.filesquash.io' />
        <link rel='preconnect' href='https://unpkg.com' />
      </Head>

      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>

      {process.env.NODE_ENV === 'production' && [
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />,
        <script dangerouslySetInnerHTML={{ __html: ` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_TRACKING_ID}');` }} />
      ]}
    </>
  );
}

export default MyApp;
