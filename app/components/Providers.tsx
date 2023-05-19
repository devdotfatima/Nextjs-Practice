"use client";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

const Providers = ({ children, session }: any) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Providers;
