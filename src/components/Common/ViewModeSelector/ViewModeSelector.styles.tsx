import { ToggleButtonGroup as MUIToggleButtonGroup, toggleButtonGroupClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

const ToggleButtonGroup = styled(MUIToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    textTransform: 'none',
    color: theme.palette.text.secondary,
    fontWeight: 700,
    border: 0,
    width: 81,
    height: 44,
    borderRadius: 10,
    marginRight: 8,
    backgroundColor: theme.palette.white[2],
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.firstButton}`]: {
    [`&.${toggleButtonGroupClasses.selected}`]: {
      background: theme.palette.gradients.casino,
    },
  },
  [`& .${toggleButtonGroupClasses.lastButton}`]: {
    marginRight: 0,
    [`&.${toggleButtonGroupClasses.selected}`]: {
      background: theme.palette.gradients.sports,
    },
  },
}))

export { ToggleButtonGroup }
