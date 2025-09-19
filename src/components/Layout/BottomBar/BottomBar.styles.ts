import {
  BottomNavigation as MUIBottomNavigation,
  BottomNavigationAction as MUIBottomNavigationAction,
  Box as MUIBox,
  bottomNavigationActionClasses,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const Box = styled(MUIBox)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  borderTop: `1 solid ${theme.palette.divider}`,
  zIndex: 1300,
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

const BottomNavigation = styled(MUIBottomNavigation)(({ theme }) => ({
  height: 76,
  backgroundColor: theme.palette.background.paper,
  paddingTop: 1,
  paddingBottom: 2,
}))

const BottomNavigationAction = styled(MUIBottomNavigationAction)(({ theme }) => ({
  [`& .${bottomNavigationActionClasses.label}`]: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 500,
    color: theme.palette.text.primary,
    '&.Mui-selected': { color: theme.palette.text.secondary },
  },
}))

export { Box, BottomNavigation, BottomNavigationAction }
