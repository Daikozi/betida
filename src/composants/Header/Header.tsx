'use client'

import { FC } from 'react'

import logo from '@/assets/svg/logo.svg'
import { useDrawerStore } from '@/store/drawerStore'
import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

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
        px: '16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        transition: { xs: 'none', md: 'left 0.225s, width 0.225s' },
      }}
    >
      <Toolbar
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          height: '76px',
          p: '0 !important',
        }}
      >
        <Stack direction="row" alignItems="center" gap={1.5} sx={{ flexGrow: 1 }}>
          <Image src={logo as StaticImageData} alt="Logo" width={32} height={32} />
          <Typography
            variant="subtitle1"
            component="div"
            fontWeight={600}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            BRAND NAME
          </Typography>
        </Stack>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            sx={{
              color: '#fff',
              width: '90px',
              border: '1.5px solid rgba(255, 255, 255, 0.55)',
              borderRadius: '10px',
              padding: '14px 10px',
              textTransform: 'none',
              fontWeight: 600,
              lineHeight: '16px',
              height: '44px',
            }}
            variant="outlined"
          >
            Login
          </Button>
          <Button
            sx={{
              color: '#fff',
              width: '90px',
              borderRadius: '10px',
              padding: '14px 10px',
              textTransform: 'none',
              fontWeight: 600,
              lineHeight: '16px',
              background: 'linear-gradient(180deg, #F8A902 0%, #F3696E 100%)',
              height: '44px',
            }}
            variant="contained"
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
