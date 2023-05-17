"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import theme from "./theme";
import createEmotionCache from "./createEmotionCache";

const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "First Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <body className={poppins.className}>
              <Header />
              <main className="container">{children}</main>
            </body>
          </ThemeProvider>
        </CacheProvider>
      </SessionProvider>
    </html>
  );
}
