'use client'

import { FC, useState } from 'react'

import Carousel from '@/composants/Carousel/Carousel'
import PromotionCard from '@/composants/PromotionCard/PromotionCard'
import SearchBar from '@/composants/SearchBar/SearchBar'
import Table from '@/composants/Table/Table'
import TrendingCard from '@/composants/TrendingCard/TrendingCard'
import { main } from '@/data/main'
import { Box, InputLabel, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'

const Casino: FC = () => {
  const {
    casino: { brand_name_originals, live_casino, slots, promotions, tables, publishers, searchBar },
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
        <Carousel title="Promotions" mb={4}>
          {promotions.items.map((promo, index) => (
            <PromotionCard
              key={index}
              chipLabel={promo.chipLabel}
              title={promo.title}
              subtitle={promo.subtitle}
              image={promo.image}
              link={promo.actions[0].link}
            />
          ))}
        </Carousel>
        <Stack direction="row" mb={3} alignItems="center">
          <InputLabel id="betType-label" sx={{ display: 'none' }}>
            {searchBar.placeholder}
          </InputLabel>
          <SearchBar />
        </Stack>
        <Carousel title={brand_name_originals.title} mb={4}>
          {brand_name_originals.items.map((game) => (
            <TrendingCard key={game.rank} image={game.src} quantityPlaying={game.quantityPlaying} link={game.link} />
          ))}
        </Carousel>
        <Carousel title={slots.title} mb={4}>
          {slots.items.map((game) => (
            <TrendingCard key={game.rank} image={game.src} quantityPlaying={game.quantityPlaying} link={game.link} />
          ))}
        </Carousel>
        <Carousel title={publishers.title} mb={4}>
          {publishers.items.map((game) => (
            <TrendingCard key={game.rank} image={game.src} quantityPlaying={game.quantityPlaying} link={game.link} />
          ))}
        </Carousel>
        <Carousel title={live_casino.title} mb={4}>
          {live_casino.items.map((game) => (
            <TrendingCard key={game.rank} image={game.src} quantityPlaying={game.quantityPlaying} link={game.link} />
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

export default Casino
