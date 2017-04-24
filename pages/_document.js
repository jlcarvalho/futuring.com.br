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
