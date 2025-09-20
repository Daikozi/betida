import { FC, useState } from 'react'

import { Box, List } from '@mui/material'

import MenuItem from './MenuItem'

type MenuItemProps = {
  icon: string
  gradient?: string
  text: string
  showWhenOpen: boolean
  url: string
  subMenu?: { text: string; link: string; icon: string }[]
}

type MenuListProps = {
  isSideMenuOpen?: boolean
  menuItems: MenuItemProps[]
  transparent?: boolean
}

const MenuList: FC<MenuListProps> = ({ isSideMenuOpen, menuItems, transparent = false }) => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <Box
      sx={{
        borderRadius: 1.2,
        bgcolor: isSideMenuOpen && !transparent ? '#0F0F10' : 'transparent',
        my: 1,
        mx: isSideMenuOpen ? 2 : 0,
      }}
    >
      <List sx={{ py: 0 }}>
        {menuItems.map(({ icon, showWhenOpen, text, subMenu, gradient, url }) => (
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
            url={url}
          />
        ))}
      </List>
    </Box>
  )
}

export default MenuList
