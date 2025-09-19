import {
  ListItem as MUIListItem,
  ListItemButton as MUIListItemButton,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
  listItemButtonClasses,
  listItemClasses,
  listItemIconClasses,
  listItemTextClasses,
} from '@mui/material'
import { styled } from '@mui/material/styles'

type ListItemProps = {
  display?: boolean
}

type ListItemButtonProps = {
  isSelected?: boolean
  isSideMenuOpen?: boolean
}

type ListItemIconProps = {
  isSideMenuOpen?: boolean
}

type ListItemTextProps = ListItemIconProps

const ListItem = styled(MUIListItem, {
  shouldForwardProp: (prop) => prop !== 'display',
})<ListItemProps>(({ display = false }) => ({
  [`&.${listItemClasses.root}`]: {
    display: display ? 'block' : 'none',
    borderRadius: 10,
    overflow: 'hidden',
  },
}))

const ListItemButton = styled(MUIListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isSideMenuOpen',
})<ListItemButtonProps>(({ isSelected = false, isSideMenuOpen = false, theme }) => ({
  [`&.${listItemButtonClasses.root}`]: {
    backgroundColor: isSelected ? theme.palette.backgroundLevels[2] : 'transparent',
    justifyContent: isSideMenuOpen ? 'initial' : 'center',
    height: 44,
    padding: 10,
    '&:hover': {
      backgroundColor: theme.palette.backgroundLevels[1],
    },
  },
}))

const ListItemIcon = styled(MUIListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'isSideMenuOpen',
})<ListItemIconProps>(({ isSideMenuOpen = false }) => ({
  [`&.${listItemIconClasses.root}`]: {
    minWidth: 0,
    justifyContent: 'center',
    marginRight: isSideMenuOpen ? 10 : 0,
  },
}))

const ListItemText = styled(MUIListItemText, {
  shouldForwardProp: (prop) => prop !== 'isSideMenuOpen',
})<ListItemTextProps>(({ isSideMenuOpen = false }) => ({
  [`&.${listItemTextClasses.root}`]: {
    display: isSideMenuOpen ? 'block' : 'none',
    opacity: isSideMenuOpen ? 1 : 0,
    marginLeft: 0,
    marginRight: 0,
  },
}))

const SubMenuListItemButton = styled(MUIListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isSideMenuOpen',
})<ListItemButtonProps>(({ isSelected = false, theme }) => ({
  [`&.${listItemButtonClasses.root}`]: {
    backgroundColor: isSelected ? theme.palette.backgroundLevels[2] : 'transparent',
    height: 24,
    padding: '0 10px',
    '&:hover': {
      backgroundColor: theme.palette.backgroundLevels[1],
    },
  },
}))

export { ListItem, ListItemButton, ListItemIcon, ListItemText, SubMenuListItemButton }
