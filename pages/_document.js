import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Adding custom fonts to my Nextjs app
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400&family=Oswald:wght@500&family=Playfair+Display:ital,wght@0,500;0,600;1,400;1,500;1,600&family=Square+Peg&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
