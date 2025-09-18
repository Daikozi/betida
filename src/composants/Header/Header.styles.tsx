import { Button as MUIButton, buttonClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

type ButtonProps = {
  backgroundType?: 'outlined' | 'gradient'
}

const Button = styled(MUIButton, {
  shouldForwardProp: (prop) => prop !== 'backgroundType',
})<ButtonProps>(({ backgroundType, theme }) => ({
  [`&.${buttonClasses.root}`]: {
    width: '90px',
    height: '44px',
    fontWeight: 600,
    ...(backgroundType === 'outlined' && {
      border: `1.5px solid rgba(255, 255, 255, 0.55)`,
      background: 'transparent',
    }),
    ...(backgroundType === 'gradient' && {
      border: 'none',
      background: theme.palette.gradients.primary,
    }),
  },
}))

export { Button }
