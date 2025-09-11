"use client";

import type { FC, ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import ThemeProvider from "./ThemeProvider";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider>
    <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
  </ThemeProvider>
);
