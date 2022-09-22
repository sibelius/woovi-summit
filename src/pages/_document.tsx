import NextDocument, { Html, Main, Head, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Woovi Summit"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <meta name="application-name" content="Woovi Summit" />
          <meta name="description" content="Woovi Summit" />
          {/* Social Media */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://woovi-summit.vercel.app/" />
          <meta name="twitter:title" content="Woovi Summit" />
          <meta
            name="twitter:description"
            content="Woovi Summit"
          />
          <meta name="twitter:creator" content="Woovi" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Woovi Summit" />
          <meta
            property="og:description"
            content="Woovi Summit"
          />
          <meta property="og:site_name" content="Woovi Summit" />
          <meta property="og:url" content="https://woovi-summit.vercel.app/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
