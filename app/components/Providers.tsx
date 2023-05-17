'use client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../createEmotionCache';
import { AppProps } from 'next/app';

import theme from '../theme';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const Providers = ({ children, session }: any) => (
  <SessionProvider session={session}>
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  </SessionProvider>
);

export default Providers;