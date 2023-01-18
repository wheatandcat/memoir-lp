import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "react-kofi-button/dist/KofiButton/style.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default MyApp;
