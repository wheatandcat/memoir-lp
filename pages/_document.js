import Document, { Html, Head, Main, NextScript } from "next/document";
import Meta from "components/molecules/Meta/Meta.tsx";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cardo:wght@700&family=Roboto+Condensed:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <Meta />
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
