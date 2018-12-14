import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

import '../theme/globalStyles';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }: any) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${
              process.env.GA_KEY
            }`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_KEY}');
          `
            }}
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/favicon-16x16.png"
            sizes="16x16"
          />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
