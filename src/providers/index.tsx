"use client";

import type { FC, ReactNode } from "react";

import ThemeProvider from "./ThemeProvider";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
