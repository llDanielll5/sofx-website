import React, { ComponentType } from "react";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createTheme } from "../utils/theme";
import { useNProgress } from "../hooks/useNProgress";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BaseContext, NextPageContext } from "next/dist/shared/lib/utils";
import type { AppProps } from "next/app";
import createEmotionCache from "../utils/services/createEmotionCache";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

type CustomNextComponentType<
  Context extends BaseContext = NextPageContext,
  InitialProps = {},
  Props = {}
> = ComponentType<Props> & {
  getInitialProps?(context: Context): InitialProps | Promise<InitialProps>;
  getLayout: (c: React.ReactElement) => React.ReactElement;
};

interface CustomAppProps extends Omit<AppProps, "Component"> {
  emotionCache: EmotionCache;
  Component: CustomNextComponentType<NextPageContext, any, any>;
}

export default function App(props: CustomAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const theme = createTheme();
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}
