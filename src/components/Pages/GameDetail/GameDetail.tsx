'use client'

import { FC, useState } from 'react'

import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'

import Carousel from '@/components/Common/Carousel/Carousel'
import Game from '@/components/Common/Game/Game'
import Table from '@/components/Common/Table/Table'
import TrendingCard from '@/components/Common/TrendingCard/TrendingCard'
import { main } from '@/data/main'

const GameDetail: FC = () => {
  const {
    casino: { slots, tables, publishers },
  } = main

  const [tableView, setTableView] = useState<'all_bets' | 'high_rollers' | 'race_leaderboard'>('all_bets')

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1200 }}>
        <Game />
        <Carousel title={slots.title} mb={4}>
          {slots.items.map((game) => (
            <TrendingCard key={game.rank} image={game.src} quantityPlaying={game.quantityPlaying} link={game.link} />
          ))}
        </Carousel>
        <Carousel title={publishers.title} mb={4}>
          {publishers.items.map((game) => (
            <TrendingCard
              key={game.rank}
              image={game.src}
              quantityPlaying={game.quantityPlaying}
              link={game.link}
              isSmall
            />
          ))}
        </Carousel>
        <Box
          sx={{
            backgroundColor: '#252427',
            borderRadius: '10px',
            p: 1,
            mb: 1,
            overflowX: 'auto',
          }}
        >
          <ToggleButtonGroup
            value={tableView}
            exclusive
            onChange={(_, value: 'all_bets' | 'high_rollers' | 'race_leaderboard') => {
              setTableView(value)
            }}
            aria-label="text alignment"
          >
            {tables.selectors.map((selector) => (
              <ToggleButton key={selector.value} value={selector.value} aria-label={selector.label}>
                {selector.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
        <Table tableView={tableView} tables={tables} sx={{ mb: 4.5 }} />
      </Box>
    </Box>
  )
}

export default GameDetail
