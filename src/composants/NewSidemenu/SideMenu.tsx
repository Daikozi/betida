'use client'

import { FC, useState } from 'react'

import affiliate from '@/assets/svg/affiliate.svg'
import blog from '@/assets/svg/blog.svg'
import branche from '@/assets/svg/branche.svg'
import branche_end from '@/assets/svg/branche_end.svg'
import carat_down_dark from '@/assets/svg/carat_down_dark.svg'
import carat_up_light from '@/assets/svg/carat_up_light.svg'
import casino_gradient from '@/assets/svg/casino_gradient.svg'
import casino_unselected from '@/assets/svg/casino_unselected.svg'
import forum from '@/assets/svg/forum.svg'
import live_support from '@/assets/svg/live_support.svg'
import menu from '@/assets/svg/menu.svg'
import promotion from '@/assets/svg/promotions.svg'
import responsible_gambling from '@/assets/svg/responsible_gambling.svg'
import sponsorships from '@/assets/svg/sponsorships.svg'
import sports_gradient from '@/assets/svg/sports_gradient.svg'
import sports_unselected from '@/assets/svg/sports_unselected.svg'
import vip_club from '@/assets/svg/vip_club.svg'
import { useDisplayMode } from '@/store/displayModeStore'
import { useDrawerStore } from '@/store/drawerStore'
import { Box, Collapse, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image, { StaticImageData } from 'next/image'

import SearchBar from '../SearchBar/SearchBar'
import ViewModeSelector from '../ViewModeSelector/ViewModeSelector'

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

const firstMenuItems = [
  {
    text: 'Promotion',
    icon: promotion as StaticImageData,
    showWhenOpen: true,
    subitems: [
      { text: '$75k Weekly Raffle', link: '#' },
      { text: '$100k Race', link: '#' },
      { text: 'Pragmatic Drops & Wins', link: '#' },
      { text: 'View All', link: '#' },
    ],
  },
  { text: 'Affiliate', icon: affiliate as StaticImageData, showWhenOpen: true },
  { text: 'VIP Club', icon: vip_club as StaticImageData, showWhenOpen: true },
  { text: 'Blog', icon: blog as StaticImageData, showWhenOpen: true },
  { text: 'Forum', icon: forum as StaticImageData, showWhenOpen: true },
]

const secondMenuItems = [
  {
    text: 'Sponsorships',
    icon: sponsorships as StaticImageData,
    showWhenOpen: true,
    subitems: [
      { text: 'sponsorships 1', link: '#' },
      { text: 'sponsorships 2', link: '#' },
      { text: 'sponsorships 3', link: '#' },
      { text: 'sponsorships 4', link: '#' },
      { text: 'sponsorships 5', link: '#' },
    ],
  },
  {
    text: 'Responsible Gambling',
    icon: responsible_gambling as StaticImageData,
    showWhenOpen: true,
  },
  { text: 'Live Support', icon: live_support as StaticImageData, showWhenOpen: true },
]

const SideMenu: FC = () => {
  const { open, setOpen } = useDrawerStore()
  const [promotionsOpen, setPromotionsOpen] = useState(false)
  const [sponsorshipsOpen, setSponsorshipsOpen] = useState(false)
  const [betType, setBetType] = useState<'Casino' | 'Sport'>('Casino')
  const { displayMode, setDisplayMode } = useDisplayMode()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const displayModeList = [
    {
      text: 'Casino',
      icon: (displayMode === 'casino' ? casino_gradient : casino_unselected) as StaticImageData,
      showWhenOpen: false,
    },
    {
      text: 'Sports',
      icon: (displayMode === 'sports' ? sports_gradient : sports_unselected) as StaticImageData,
      showWhenOpen: false,
    },
  ]

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
            <Image src={menu as StaticImageData} alt="Menu" width={24} height={24} />
          </IconButton>
          {open && <ViewModeSelector />}
        </Stack>
      </DrawerHeader>
      <Divider sx={{ display: { xs: 'none', md: 'flex' } }} />
      <Box sx={{ display: { xs: 'blog', md: 'none' } }}>
        <Stack direction="row" spacing={1} alignItems="center" m={2} mb={0}>
          <Select
            id="betType-select"
            labelId="betType-label"
            name="betType"
            sx={{ minWidth: 100 }}
            value={betType}
            aria-labelledby="betType-label"
            onChange={(event) => setBetType(event.target.value)}
          >
            <MenuItem value="Casino">Casino</MenuItem>
            <MenuItem value="Sport">Sport</MenuItem>
          </Select>
          <InputLabel id="betType-label" sx={{ display: 'none' }}>
            Bet Type
          </InputLabel>
          <SearchBar />
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
      <Box
        sx={{
          borderRadius: '10px',
          bgcolor: open ? '#0F0F10' : 'transparent',
          mt: 2,
          mb: open ? 1 : 0,
          mx: open ? 2 : 0,
        }}
      >
        <List sx={{ py: 0 }}>
          {displayModeList.map(({ icon, showWhenOpen, text }) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                display: showWhenOpen || !open ? 'block' : 'none',
              }}
            >
              <ListItemButton
                onClick={() => {
                  setDisplayMode(
                    text.toLowerCase() === displayMode ? null : (text.toLowerCase() as 'sports' | 'casino'),
                  )
                }}
                sx={[
                  {
                    minHeight: 44,
                    p: '10px',
                    borderRadius: '10px 10px 0px 0px',
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: '10px',
                        }
                      : {
                          mr: '0',
                        },
                  ]}
                >
                  <Image src={icon} alt={text} width={24} height={24} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      fontSize: 14,
                      color: 'white',
                    },
                  }}
                  primary={text}
                  sx={{
                    display: open ? 'block' : 'none',
                    opacity: open ? 1 : 0,
                    my: 0,
                  }}
                />
                {text === 'Promotion' && open && (
                  <Image
                    src={(promotionsOpen ? carat_up_light : carat_down_dark) as StaticImageData}
                    alt=""
                    width={24}
                    height={24}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
          {firstMenuItems.map(({ icon, showWhenOpen, text, subitems }) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                display: showWhenOpen || !open ? 'block' : 'none',
              }}
            >
              <ListItemButton
                onClick={() => {
                  if (text === 'Promotion') {
                    setPromotionsOpen((prev) => !prev)
                  }
                }}
                sx={[
                  {
                    minHeight: 44,
                    p: '10px',
                    borderRadius: '10px 10px 0px 0px',
                    backgroundColor: text === 'Promotion' && promotionsOpen ? '#39373E' : 'inherit',
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: '10px',
                        }
                      : {
                          mr: '0',
                        },
                  ]}
                >
                  <Image src={icon} alt={text} width={24} height={24} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      fontSize: 14,
                      color: 'white',
                    },
                  }}
                  primary={text}
                  sx={{
                    display: open ? 'block' : 'none',
                    opacity: open ? 1 : 0,
                    my: 0,
                  }}
                />
                {text === 'Promotion' && open && (
                  <Image
                    src={(promotionsOpen ? carat_up_light : carat_down_dark) as StaticImageData}
                    alt=""
                    width={24}
                    height={24}
                  />
                )}
              </ListItemButton>
              {subitems && subitems.length > 0 && (
                <Collapse in={promotionsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {subitems.map(({ text }, index, { length }) => (
                      <ListItemButton key={text} sx={{ height: 24, px: '10px', py: 0 }}>
                        <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                          <Image
                            src={(index === length - 1 ? branche_end : branche) as StaticImageData}
                            alt="sponsorships"
                            width={16}
                            height={16}
                          />
                        </ListItemIcon>
                        <ListItemText
                          slotProps={{
                            primary: {
                              fontSize: 14,
                            },
                          }}
                          primary={text}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
      {!open && <Divider />}
      <Box
        sx={{
          borderRadius: '10px',
          bgcolor: open ? '#0F0F10' : 'transparent',
          mt: open ? 0 : 1,
          mb: open ? 1 : 0,
          mx: open ? 2 : 0,
        }}
      >
        <List sx={{ py: 0 }}>
          {secondMenuItems.map(({ icon, showWhenOpen, text, subitems }) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                display: showWhenOpen || !open ? 'block' : 'none',
              }}
            >
              <ListItemButton
                onClick={() => {
                  if (text === 'Sponsorships') {
                    setSponsorshipsOpen((prev) => !prev)
                  }
                }}
                sx={[
                  {
                    minHeight: 44,
                    p: '10px',
                    borderRadius: '10px 10px 0px 0px',
                    backgroundColor: text === 'Sponsorships' && sponsorshipsOpen ? '#39373E' : 'inherit',
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: '10px',
                        }
                      : {
                          mr: '0',
                        },
                  ]}
                >
                  <Image src={icon} alt={text} width={24} height={24} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      fontSize: 14,
                      color: 'white',
                    },
                  }}
                  primary={text}
                  sx={{
                    display: open ? 'block' : 'none',
                    opacity: open ? 1 : 0,
                    my: 0,
                  }}
                />
                {text === 'Sponsorships' && open && (
                  <Image
                    src={(sponsorshipsOpen ? carat_up_light : carat_down_dark) as StaticImageData}
                    alt=""
                    width={24}
                    height={24}
                  />
                )}
              </ListItemButton>
              {subitems && subitems.length > 0 && (
                <Collapse in={sponsorshipsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {subitems.map(({ text }, index, { length }) => (
                      <ListItemButton key={text} sx={{ height: 24, px: '10px', py: 0 }}>
                        <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                          <Image
                            src={(index === length - 1 ? branche_end : branche) as StaticImageData}
                            alt="sponsorships"
                          />
                        </ListItemIcon>
                        <ListItemText
                          slotProps={{
                            primary: {
                              fontSize: 14,
                            },
                          }}
                          primary={text}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )

  // Affichage Drawer permanent sur desktop, Drawer temporaire plein écran sur mobile
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
