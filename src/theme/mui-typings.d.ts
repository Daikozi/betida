/* eslint-disable @typescript-eslint/consistent-type-definitions */
// mui-typings.d.ts
import '@mui/material/Button'
import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    sports: { main: string }
    casino: { main: string }

    backgroundLevels: { 1: string; 2: string; 3: string }

    white: { 1: string; 2: string; 3: string }

    gradients: {
      primary: string
      sports: string
      casino: string
    }
  }

  interface PaletteOptions {
    sports?: { main?: string }
    casino?: { main?: string }
    backgroundLevels?: Partial<{ 1: string; 2: string; 3: string }>
    white?: Partial<{ 1: string; 2: string; 3: string }>
    gradients?: Partial<{
      primary: string
      sports: string
      casino: string
    }>
  }

  interface TypographyVariants {
    titleLight: React.CSSProperties
    titleDark: React.CSSProperties
    textLight: React.CSSProperties
    textDark: React.CSSProperties
    captionLight: React.CSSProperties
    captionDark: React.CSSProperties
    visuallyHidden: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    titleLight?: React.CSSProperties
    titleDark?: React.CSSProperties
    textLight?: React.CSSProperties
    textDark?: React.CSSProperties
    captionLight?: React.CSSProperties
    captionDark?: React.CSSProperties
    visuallyHidden?: React.CSSProperties
  }
}

declare module '@mui/material/Button' {
  type ButtonPropsVariantOverrides = {
    gradient: true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleLight: true
    titleDark: true
    textLight: true
    textDark: true
    captionLight: true
    captionDark: true
    visuallyHidden: true
  }
}
