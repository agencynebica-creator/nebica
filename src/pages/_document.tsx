import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=	G-E7FCYWK4NF"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '	G-E7FCYWK4NF');
    `,
            }}
          />
        </Head>
        <body>




          <Main />
          <script
            id="tawk-to"
            dangerouslySetInnerHTML={{
              __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
              s1.async=true;
s1.src='https://embed.tawk.to/69dcb58cd99cf01c408cdbee/1jm32abgg';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
            }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
