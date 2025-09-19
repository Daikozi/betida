'use client'

import { FC, useEffect, useState } from 'react'

import carat_down_dark from '@/assets/svg/carat_down_dark.svg'
import carat_up_light from '@/assets/svg/carat_up_light.svg'
import { colors } from '@/theme/tokens'
import { Collapse, List, ListItemProps } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

import { ListItem, ListItemButton, ListItemIcon, ListItemText, SubMenuListItemButton } from './MenuItem.styles'

type MenuItemProps = {
  text: string
  icon: StaticImageData
  showWhenOpen?: boolean
  isSideMenuOpen?: boolean
  isOpen?: boolean
  isSelected?: boolean
  onClick: VoidFunction
  subitems?: { text: string; link: string; icon: StaticImageData }[]
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
  ...listItemProps
}) => {
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const hasSubMenu = subitems && subitems.length > 0

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
        }}
        isSelected={isSelected || (hasSubMenu && openSubMenu)}
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
              background: isSelected && !isSideMenuOpen ? colors.primary.gradient : 'transparent',
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
          <Image src={(isOpen ? carat_up_light : carat_down_dark) as StaticImageData} alt="" width={24} height={24} />
        )}
      </ListItemButton>
      {hasSubMenu && (
        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
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
