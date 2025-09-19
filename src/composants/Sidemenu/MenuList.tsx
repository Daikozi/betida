import { FC, useState } from 'react'

import { Box, List } from '@mui/material'
import { StaticImageData } from 'next/image'

import MenuItem from './MenuItem'

type MenuItemProps = {
  icon: StaticImageData
  gradient?: string
  text: string
  showWhenOpen: boolean
  subMenu?: { text: string; link: string; icon: StaticImageData }[]
}

type MenuListProps = {
  isSideMenuOpen?: boolean
  menuItems: MenuItemProps[]
}

const MenuList: FC<MenuListProps> = ({ isSideMenuOpen, menuItems }) => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <Box
      sx={{
        borderRadius: 1.2,
        bgcolor: isSideMenuOpen ? '#0F0F10' : 'transparent',
        my: 1,
        mx: isSideMenuOpen ? 2 : 0,
      }}
    >
      <List sx={{ py: 0 }}>
        {menuItems.map(({ icon, showWhenOpen, text, subMenu, gradient }) => (
          <MenuItem
            key={text}
            icon={icon}
            text={text}
            showWhenOpen={showWhenOpen}
            gradient={gradient}
            subitems={subMenu}
            isSideMenuOpen={isSideMenuOpen}
            isSelected={!gradient && selected === text}
            onClick={() => setSelected(text)}
          />
        ))}
      </List>
    </Box>
  )
}

export default MenuList
