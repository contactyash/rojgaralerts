import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Rojgar Alerts</title>
          <meta
            name="Description"
            content="Rojgar Alerts Provides Clear,Concise Information of Latest Govt Jobs, Latest Results and Admit Cards"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/nprogress.css"
          />
          <link rel="stylesheet" type="text/css" href="/static/css/share.css" />
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="../static/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
