import { TextField as MUITextField, outlinedInputClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

const TextField = styled(MUITextField)(({ theme }) => ({
  [`& .${outlinedInputClasses.root}`]: {
    backgroundColor: theme.palette.backgroundLevels[2],
    height: 40,
    '& input': {
      color: theme.palette.text.primary,
    },
  },
}))

export { TextField }
