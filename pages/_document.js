import Document, { Head, Main, NextScript } from 'next/document'
import { injectGlobal } from 'styled-components'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import { Global } from '../components/styles'

injectGlobal(Global)

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const style = styleSheet.rules().map(rule => rule.cssText).join('\n')
    return { ...page, style }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Futuring</title>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />

          <meta name='description' content='We deliver digital experiences.' />

          <meta property='og:locale' content='en_US' />
          <meta property='og:url' content='https://futuring.com.br' />
          <meta property='og:description' content='We deliver digital experiences.' />
          <meta property='og:site_name' content='Futuring' />
          <meta property='og:image' content='https://futuring.com.br/static/images/facebook-image.png' />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='900' />

          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
