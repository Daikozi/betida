import { createTheme } from '@mui/material/styles'

import { colors, typography } from './tokens'

const theme = createTheme({
  palette: {
    primary: { main: colors.background['3'] },
    background: { default: colors.background['3'], paper: colors.background['1'] },
    text: { primary: colors.white['3'], secondary: colors.white['1'] },
    sports: { main: colors.sports.base },
    casino: { main: colors.casino.base },
    backgroundLevels: {
      1: colors.background['1'],
      2: colors.background['2'],
      3: colors.background['3'],
    },
    white: {
      1: colors.white['1'],
      2: colors.white['2'],
      3: colors.white['3'],
    },
    gradients: {
      primary: colors.primary.gradient,
      sports: colors.sports.gradient,
      casino: colors.casino.gradient,
    },
    divider: colors.white['2'],
  },
  typography: {
    fontFamily: typography.fontFamily,
    titleLight: {
      ...typography.variants.title,
      color: colors.white['1'],
    },
    titleDark: {
      ...typography.variants.title,
      color: colors.white['3'],
    },
    textLight: {
      ...typography.variants.text,
      color: colors.white['1'],
    },
    textDark: {
      ...typography.variants.text,
      color: colors.white['3'],
    },
    captionLight: {
      ...typography.variants.caption,
      color: colors.white['1'],
    },
    captionDark: {
      ...typography.variants.caption,
      color: colors.white['3'],
    },
  },

  shape: {
    borderRadius: 10,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: `1px solid ${colors.white['2']}`,
          padding: 0,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '16px 0 !important',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          [theme.breakpoints.down('xl')]: {
            padding: '16px 16px !important',
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          margin: 0,
          backgroundColor: '#39373E',
          fontSize: '14px',
          color: 'white',
          height: '40px',
          border: '1px solid transparent',
          '& > fieldset': {
            display: 'none',
          },
          '&:hover': {
            border: '1px solid #a6a5a8',
          },
        },
        select: {
          padding: '8px',
          paddingLeft: '12px',
          paddingRight: '42px !important',
        },
        icon: {
          color: 'white',
          right: '8px',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: 'white',
          fontSize: '14px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          padding: '10px 14px',
          color: theme.palette.white[1],
          lineHeight: '16px',
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: colors.white['1'],
          backgroundColor: colors.white['2'],
          maxWidth: 'fit-content',
          height: 24,
          fontSize: '0.75rem',
          fontWeight: 500,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 10,
          borderRadius: 5,
          background: colors.background['2'],
        },
        bar: {
          background: colors.primary.gradient,
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          textTransform: 'none',
          color: colors.white['3'],
          border: 0,
          padding: '10px 14px',
          height: 36,
          lineHeight: 1,
          borderRadius: 10,
          marginRight: 8,
          width: 'fit-content',
          '&.Mui-disabled': {
            border: 0,
          },
          '&.Mui-selected': {
            backgroundColor: colors.white['2'],
            color: colors.white['1'],
          },
        },
      },
    },
  },
})

export default theme
