"use client";

import type { FC, ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import theme from "../theme";
import { CssBaseline } from "@mui/material";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  </StyledEngineProvider>
);

export default ThemeProvider;
