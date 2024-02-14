import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { createTheme } from "../utils/theme";
import { useNProgress } from "../hooks/useNProgress";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../utils/services/createEmotionCache";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

export default function App(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const theme = createTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}
