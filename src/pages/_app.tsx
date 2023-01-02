import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals";
import { GoogleFonts } from "next-google-fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" />
      <Component {...pageProps} />
    </>
  );
}
