import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/fullpage.js@3.0.1/dist/fullpage.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
