'use client'

import { FC, useEffect, useState } from 'react'

import { Collapse, List, ListItemProps } from '@mui/material'
import Image from 'next/image'

import { useDisplayMode } from '@/store/displayModeStore'
import { colors } from '@/theme/tokens'

import { ListItem, ListItemButton, ListItemIcon, ListItemText, SubMenuListItemButton } from './MenuItem.styles'

type MenuItemProps = {
  text: string
  icon: string
  showWhenOpen?: boolean
  isSideMenuOpen?: boolean
  isOpen?: boolean
  isSelected?: boolean
  onClick: VoidFunction
  subitems?: { text: string; link: string; icon: string }[]
  gradient?: string
} & ListItemProps

const MenuItem: FC<MenuItemProps> = ({
  text,
  icon,
  showWhenOpen = false,
  isSideMenuOpen = false,
  isOpen = false,
  isSelected = false,
  onClick,
  subitems,
  gradient,
  ...listItemProps
}) => {
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const { displayMode, setDisplayMode } = useDisplayMode()

  const hasSubMenu = subitems && subitems.length > 0
  const iconBackground = gradient ?? colors.primary.gradient

  useEffect(() => {
    if (hasSubMenu && openSubMenu && !isSelected) {
      setOpenSubMenu(false)
    }
  }, [isSelected, hasSubMenu, openSubMenu])

  return (
    <ListItem key={text} disablePadding display={showWhenOpen || !isSideMenuOpen} {...listItemProps}>
      <ListItemButton
        onClick={() => {
          onClick()
          if (hasSubMenu) {
            setOpenSubMenu(!openSubMenu)
          }

          if (text.toLowerCase() === 'casino' || text.toLowerCase() === 'sports') {
            setDisplayMode(text.toLowerCase() === displayMode ? null : (text.toLowerCase() as 'casino' | 'sports'))
          }
        }}
        isSelected={isSelected || (hasSubMenu && openSubMenu) || displayMode === text.toLowerCase()}
        isSideMenuOpen={isSideMenuOpen}
      >
        <ListItemIcon isSideMenuOpen={isSideMenuOpen}>
          <Image
            src={icon}
            alt={text}
            width={isSideMenuOpen ? 24 : 32}
            height={isSideMenuOpen ? 24 : 32}
            style={{
              padding: isSideMenuOpen ? 0 : '4px',
              borderRadius: isSideMenuOpen ? 0 : '8px',
              background:
                (isSelected && !isSideMenuOpen) || displayMode === text.toLowerCase() ? iconBackground : 'transparent',
            }}
          />
        </ListItemIcon>
        <ListItemText
          slotProps={{
            primary: {
              fontSize: 14,
            },
          }}
          primary={text}
          isSideMenuOpen={isSideMenuOpen}
        />
        {hasSubMenu && isSideMenuOpen && (
          <Image
            src={isOpen ? '/assets/svg/carat_up_light.svg' : '/assets/svg/carat_down_dark.svg'}
            alt=""
            width={24}
            height={24}
          />
        )}
      </ListItemButton>
      {hasSubMenu && (
        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ mb: 1 }}>
            {subitems.map(({ text, icon }) => (
              <SubMenuListItemButton key={text}>
                <ListItemIcon isSideMenuOpen={openSubMenu}>
                  <Image src={icon} alt="sponsorships" width={24} height={24} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      fontSize: 14,
                    },
                  }}
                  primary={text}
                  isSideMenuOpen={openSubMenu}
                />
              </SubMenuListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </ListItem>
  )
}

export default MenuItem
