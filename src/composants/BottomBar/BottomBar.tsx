'use client'

import { FC, useState } from 'react'

import bets from '@/assets/svg/bets.svg'
import browse from '@/assets/svg/browse.svg'
import browse_selected from '@/assets/svg/browse_selected.svg'
import casino from '@/assets/svg/casino.svg'
import casino_selected from '@/assets/svg/casino_selected.svg'
import chat from '@/assets/svg/chat.svg'
import sports from '@/assets/svg/sports.svg'
import theme from '@/theme'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

const BottomBar: FC = () => {
  const [value, setValue] = useState(0)
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: `1px solid ${theme.palette.divider}`,
        zIndex: 1300,
        display: { xs: 'block', md: 'none' },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue: number) => {
          setValue(newValue)
        }}
        sx={{
          height: 76,
          backgroundColor: '#0F0F10',
          paddingTop: 1,
          paddingBottom: 2,
        }}
      >
        <BottomNavigationAction
          label="Browse"
          value={0}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              marginTop: '4px',
              fontSize: '14px',
              fontWeight: 500,
              color: theme.palette.text.primary,
              '&.Mui-selected': { color: theme.palette.text.secondary },
            },
          }}
          icon={
            <Image src={(value === 0 ? browse_selected : browse) as StaticImageData} alt="" width={24} height={24} />
          }
        />
        <BottomNavigationAction
          label="Casino"
          value={1}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              marginTop: '4px',
              fontSize: '14px',
              fontWeight: 500,
              color: theme.palette.text.primary,
              '&.Mui-selected': { color: theme.palette.text.secondary },
            },
          }}
          icon={
            <Image src={(value === 1 ? casino_selected : casino) as StaticImageData} alt="" width={24} height={24} />
          }
        />
        <BottomNavigationAction
          label="Bets"
          value={2}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              marginTop: '4px',
              fontSize: '14px',
              fontWeight: 500,
              color: theme.palette.text.primary,
              '&.Mui-selected': { color: theme.palette.text.secondary },
            },
          }}
          icon={<Image src={bets as StaticImageData} alt="Bets" width={24} height={24} />}
        />
        <BottomNavigationAction
          label="Sports"
          value={3}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              marginTop: '4px',
              fontSize: '14px',
              fontWeight: 500,
              color: theme.palette.text.primary,
              '&.Mui-selected': { color: theme.palette.text.secondary },
            },
          }}
          icon={<Image src={sports as StaticImageData} alt="Sports" width={24} height={24} />}
        />
        <BottomNavigationAction
          label="Chat"
          value={4}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              marginTop: '4px',
              fontSize: '14px',
              fontWeight: 500,
              color: theme.palette.text.primary,
              '&.Mui-selected': { color: theme.palette.text.secondary },
            },
          }}
          icon={<Image src={chat as StaticImageData} alt="Chat" width={24} height={24} />}
        />
      </BottomNavigation>
    </Box>
  )
}

export default BottomBar
