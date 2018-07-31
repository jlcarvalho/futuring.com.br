import Document, { Head, Main, NextScript } from 'next/document'
import { injectGlobal, ServerStyleSheet } from 'styled-components'
import { Global } from '../components/styles'

const GA_TRACKING_ID = 'UA-36868130-1'

injectGlobal`
  ${Global}
`

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html lang='en'>
        <Head>
          <title>Futuring</title>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0' />

          <meta name='description' content='We deliver digital experiences.' />

          <meta property='og:locale' content='en_US' />
          <meta property='og:url' content='https://futuring.com.br' />
          <meta property='og:description' content='We deliver digital experiences.' />
          <meta property='og:site_name' content='Futuring' />
          <meta property='og:image' content='https://futuring.com.br/static/images/facebook-image.png' />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='900' />

          <meta name='theme-color' content='#141414' />

          {styleTags}

          <link rel='preconnect' href='https://api.filesquash.io' />
          <link rel='preconnect' href='https://unpkg.com' />
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
          {process.env.NODE_ENV === 'production' && [
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />,
            <script dangerouslySetInnerHTML={{ __html: ` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_TRACKING_ID}');` }} />
          ]}
          <script dangerouslySetInnerHTML={{__html: `
            var filesquashConfig = {
              projectId: '572043a6'
            }
          `}} />
          <script defer src='https://unpkg.com/filesquash-widget@0.6.2/dist/filesquash.js' />
        </body>
      </html>
    )
  }
}
