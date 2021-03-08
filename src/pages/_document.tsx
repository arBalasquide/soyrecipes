import NextDocument, { Html, Main, Head, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <body>
          <Head />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
