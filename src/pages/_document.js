import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Armata&family=Londrina+Solid:wght@100&display=swap" rel="stylesheet" />
        <style
            dangerouslySetInnerHTML={{
              __html: `
            @font-face {
              font-family: "Space Grotesk";
              src: url("./fonts/SpaceGrotesk-Regular.otf") format("woff2"),
              url("./fonts/SpaceGrotesk-Regular.otf") format("otf");
              font-weight: normal;
              font-style: normal;
            }`}}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}