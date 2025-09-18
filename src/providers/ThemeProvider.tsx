'use client'

import { FC, ReactNode } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles'

import theme from '../theme/theme'

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  </StyledEngineProvider>
)

export default ThemeProvider
