import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:url" content="https://microfactory.digitalax.xyz/" />
        <meta property="og:title" content="Microfactory Mini Map" />
        <meta
          property="og:description"
          content="Combining ageless techniques with near future tech,
made cost effective today with web3."
        />
        <meta property="og:image" content="/assets/images/head.png" />
        <meta property="twitter:card" content="summary" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Armata&family=Londrina+Solid:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Londrina Solid Light"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
           @font-face {
             font-family: "Space Grotesk";
             font-weight: 400;
             src: url("./fonts/SpaceGrotesk-Regular.otf");
           }

           @font-face {
             font-family: "Space Grotesk Bold";
             font-weight: 700;
             src: url("./fonts/SpaceGrotesk-Bold.otf");
           }

           @font-face {
             font-family: 'Mr. Machine';
             font-weight: 400;
             src: url("./fonts/MrMachine.otf");
           }

           @font-face {
             font-family: 'New Press';
             font-weight: 400;
             src: url("./fonts/NewPress.otf");
           }


           @font-face {
             font-family: 'F25 Bank Printer';
             font-weight: 400;
             src: url("./fonts/F25_Bank_Printer.ttf");
           }

           @font-face {
             font-family: 'Old Press Original';
             font-weight: 400;
             src: url("./fonts/Old Press Original.otf");
           }
          
           @font-face {
             font-family: 'Cooper Black';
             font-weight: 400;
             src: url("./fonts/COOPBL.ttf");
           }

           @font-face {
            font-family: 'Londrina Shadow';
            font-weight: 400;
            src: url("./fonts/LondrinaShadow-Regular.ttf");
          }

          @font-face {
            font-family: 'Londrina Light';
            font-weight: 400;
            src: url("./fonts/LondrinaSolid-Light.otf");
          }

          @font-face {
            font-family: 'Londrina Thin';
            font-weight: 400;
            src: url("./fonts/LondrinaSolid-Thin.otf");
          }
          
           `,
          }}
        ></style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
