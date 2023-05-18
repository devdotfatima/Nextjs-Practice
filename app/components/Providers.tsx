"use client";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../createEmotionCache";
import { AppProps } from "next/app";
import { Container } from "@mui/material";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const defaultTheme = createTheme();
const clientSideEmotionCache = createEmotionCache();

const Providers = ({ children, session }: any) => (
  <SessionProvider session={session}>
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  </SessionProvider>
);

export default Providers;
