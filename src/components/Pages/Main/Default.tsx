import { FC, useState } from 'react'

import { Box, InputLabel, MenuItem, Select, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

import Carousel from '@/components/Common/Carousel/Carousel'
import FAQ from '@/components/Common/FAQ/FAQ'
import Hero from '@/components/Common/Hero/Hero'
import PromotionCard from '@/components/Common/PromotionCard/PromotionCard'
import SearchBar from '@/components/Common/SearchBar/SearchBar'
import Table from '@/components/Common/Table/Table'
import TrendingCard from '@/components/Common/TrendingCard/TrendingCard'
import { main } from '@/data/main'

const Default: FC = () => {
  const {
    default: { promotions, tables, trendingGames, trendingSports, faq },
  } = main

  const [betType, setBetType] = useState<'Casino' | 'Sport'>('Casino')
  const [tableView, setTableView] = useState<'casino_bets' | 'sports_bets' | 'race_leaderboard'>('casino_bets')

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1200 }}>
        <Hero hasUserInfoCard={true} mb={4.5} />
        <Stack direction="row" spacing={2} mb={3} alignItems="center">
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
        <Carousel title={trendingGames.title} mb={4}>
          {trendingGames.items.map((game) => (
            <TrendingCard
              key={game.rank}
              image={game.src}
              rank={game.rank}
              quantityPlaying={game.quantityPlaying}
              link={game.link}
            />
          ))}
        </Carousel>
        <Carousel title={trendingSports.title} mb={4}>
          {trendingSports.items.map((sport) => (
            <TrendingCard
              key={sport.rank}
              image={sport.src}
              rank={sport.rank}
              quantityPlaying={sport.quantityPlaying}
              link={sport.link}
            />
          ))}
        </Carousel>
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
            onChange={(_, value: 'casino_bets' | 'sports_bets' | 'race_leaderboard') => {
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
        <Stack mb={4.5}>
          <Typography variant="subtitle1" mb={2} fontWeight={600}>
            {faq.title}
          </Typography>
          <FAQ accordionItems={faq.items} />
        </Stack>
      </Box>
    </Box>
  )
}

export default Default
