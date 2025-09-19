'use client'

import { FC, Fragment, useState } from 'react'

import { sideMenu } from '@/data/sideMenu'
import { useDrawerStore } from '@/store/drawerStore'
import { Box, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'

import SearchBar from '../SearchBar/SearchBar'
import ViewModeSelector from '../ViewModeSelector/ViewModeSelector'
import MenuList from './MenuList'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}))

type SideMenuProps = {
  forceOpen?: boolean
}

const SideMenu: FC<SideMenuProps> = ({ forceOpen }) => {
  const { open, setOpen } = useDrawerStore()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [betType, setBetType] = useState<'Casino' | 'Sport'>('Casino')

  if (forceOpen !== undefined) {
    if (forceOpen && !open) setOpen(true)
    if (!forceOpen && open) setOpen(false)
  }

  const { header, searchBar, list } = sideMenu

  const menuContent = (
    <>
      <DrawerHeader sx={{ height: '76px', justifyContent: 'center', px: 2, display: { xs: 'none', md: 'flex' } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={open ? 'space-between' : 'center'}
          sx={{ width: '100%' }}
        >
          <IconButton onClick={() => setOpen(!open)} sx={{ mr: open ? 2 : 0, p: 0 }}>
            <Image src={header.menu.icon} alt={header.menu.text} width={22} height={14} />
          </IconButton>
          {open && <ViewModeSelector />}
        </Stack>
      </DrawerHeader>
      <Box sx={{ display: { xs: 'blog', md: 'none' } }}>
        <Stack direction="row" spacing={1} alignItems="center" m={2} mb={0}>
          <Select
            id="betType-select"
            labelId="betType-label"
            name={searchBar.select.name}
            sx={{ minWidth: 100 }}
            value={betType}
            aria-labelledby="betType-label"
            onChange={(event) => setBetType(event.target.value)}
          >
            {' '}
            {searchBar.select.option.map((option) => (
              <MenuItem key={option.value} value={option.text}>
                {option.text}
              </MenuItem>
            ))}
          </Select>
          <InputLabel id="betType-label" sx={{ display: 'none' }}>
            {searchBar.select.label}
          </InputLabel>
          <SearchBar placeholder={searchBar.textInput.placeholder} />
        </Stack>
        <ViewModeSelector
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            pb: 0,
            '& > *': { flex: 1 },
          }}
        />
      </Box>
      {list.map((menuItems, index) => {
        if (index === 0 && open) {
          return
        }

        return (
          <Fragment key={index}>
            {!open && <Divider sx={{ display: { xs: 'none', md: 'flex' } }} />}

            <MenuList isSideMenuOpen={open} menuItems={menuItems} />
          </Fragment>
        )
      })}
    </>
  )

  if (isMobile) {
    return (
      <MuiDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: 1099,
          '& .MuiDrawer-paper': {
            width: '100vw',
            maxWidth: '100vw',
            position: 'fixed',
            top: '76px',
            height: 'calc(100vh - 76px)',
            zIndex: 1099,
            pointerEvents: 'auto',
            background: '#252427',
          },
        }}
      >
        {menuContent}
      </MuiDrawer>
    )
  }
  return (
    <Drawer variant="permanent" open={open} sx={{ display: { xs: 'none', md: 'block' } }}>
      {menuContent}
    </Drawer>
  )
}

export default SideMenu
