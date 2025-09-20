'use client'

import { FC } from 'react'

import { AppBar, Link, Stack, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'

import { NEXT_ROUTES } from '@/constants/routes'
import { useDrawerStore } from '@/store/drawerStore'

import { Button } from './Header.styles'

const Header: FC = () => {
  const { open } = useDrawerStore()
  const drawerWidth = open ? 240 : 64

  return (
    <AppBar
      component="nav"
      position="fixed"
      sx={{
        top: 0,
        left: { xs: 0, md: drawerWidth },
        right: 0,
        width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
        transition: { xs: 'none', md: 'left 0.225s, width 0.225s' },
      }}
    >
      <Toolbar>
        <Link href={NEXT_ROUTES.home} aria-label="Go to home page" sx={{ flexGrow: 1 }}>
          <Stack direction="row" alignItems="center" gap={1.5}>
            <Image src="/assets/svg/logo.svg" alt="Logo" width={32} height={32} />
            <Typography variant="titleLight" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              BRAND NAME
            </Typography>
          </Stack>
        </Link>
        <Stack spacing={2} direction="row">
          <Button backgroundType="outlined">Login</Button>
          <Button backgroundType="gradient">Register</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
