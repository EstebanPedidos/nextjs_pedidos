import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from '../styles/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-mx">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/images/pedidos-icon-x48.png"></link>
          <meta name="theme-color" content="#fff" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;800&display=swap" rel="stylesheet"/>
          {this.props.emotionStyleTags}
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