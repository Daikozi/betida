'use client'

import { FC, ReactNode } from 'react'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { StyledEngineProvider } from '@mui/material/styles'

import ThemeProvider from './ThemeProvider'

type ProvidersProps = {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <AppRouterCacheProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  </StyledEngineProvider>
)
