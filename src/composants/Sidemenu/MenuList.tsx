import { FC, useState } from 'react'

import { Box, List } from '@mui/material'
import { StaticImageData } from 'next/image'

import MenuItem from './MenuItem'

type MenuItemProps = {
  icon: StaticImageData
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
        borderRadius: '10px',
        bgcolor: isSideMenuOpen ? '#0F0F10' : 'transparent',
        mt: 2,
        mb: isSideMenuOpen ? 1 : 0,
        mx: isSideMenuOpen ? 2 : 0,
      }}
    >
      <List sx={{ py: 0 }}>
        {menuItems.map(({ icon, showWhenOpen, text, subMenu }) => (
          <MenuItem
            key={text}
            icon={icon}
            text={text}
            showWhenOpen={showWhenOpen}
            subitems={subMenu}
            isSideMenuOpen={isSideMenuOpen}
            isSelected={selected === text}
            onClick={() => setSelected(text)}
          />
        ))}
      </List>
    </Box>
  )
}

export default MenuList
