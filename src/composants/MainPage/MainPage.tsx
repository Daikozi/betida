'use client'

import { FC, useState } from 'react'

import arrow_right from '@/assets/svg/arrow_right.svg'
import bronze from '@/assets/svg/bronze.svg'
import info from '@/assets/svg/info.svg'
import none from '@/assets/svg/none.svg'
import Carousel from '@/composants/Carousel/Carousel'
import FAQ from '@/composants/FAQ/FAQ'
import LargeTrendingCard from '@/composants/LargeTrendingCard/LargeTrendingCard'
import ProgressBar from '@/composants/ProgressBar/ProgressBar'
import PromotionCard from '@/composants/PromotionCard/PromotionCard'
import SearchBar from '@/composants/SearchBar/SearchBar'
import Table from '@/composants/Table/Table'
import ToggleButtonGroup from '@/composants/ToggleButtonGroup/ToggleButtonGroup'
import TrendingCard from '@/composants/TrendingCard/TrendingCard'
import { main } from '@/data/main'
import { Box, InputLabel, MenuItem, Select, Stack, ToggleButton, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

const MainPage: FC = () => {
  const {
    default: {
      hero: { casino, sport, userInfo },
      promotions,
      tables,
      trendingGames,
      trendingSports,
      faq,
    },
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
        <div style={{ display: 'flex', gap: 16, marginBottom: '36px', alignItems: 'center' }}>
          <section style={{ flex: 1 }}>
            <Typography variant="h5" color="text.secondary" mb={4}>
              {userInfo.userName}
            </Typography>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                marginBottom: 16,
              }}
            >
              <Typography color="text.secondary" style={{ fontWeight: 500 }}>
                {userInfo.progress.label}
              </Typography>
              <span style={{ position: 'absolute', transform: 'translate(50%, -40%)', top: '50%', right: '50%' }}>
                <Image src={arrow_right as StaticImageData} alt="info" />
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Typography color="text.secondary">{userInfo.progress.score}</Typography>
                <Image src={info as StaticImageData} alt="info" />
              </span>
            </div>
            <ProgressBar
              variant="determinate"
              value={(userInfo.progress.value * 100) / userInfo.progress.max}
              aria-label="Progression VIP utilisateur"
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 24,
                position: 'relative',
                width: '100%',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Image src={none as StaticImageData} alt="info" />
                <Typography variant="body2" color="text.secondary">
                  {userInfo.statut.current}
                </Typography>
              </span>
              <span style={{ position: 'absolute', transform: 'translate(50%, -40%)', top: '50%', right: '50%' }}>
                <Image src={arrow_right as StaticImageData} alt="info" />
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Typography variant="body2" color="text.secondary">
                  {userInfo.statut.next}
                </Typography>
                <Image src={bronze as StaticImageData} alt="info" />
              </span>
            </div>
          </section>
          <section style={{ flex: 1 }}>
            <LargeTrendingCard
              image={casino.image}
              quantityPlaying={casino.quantityPlaying}
              rank={casino.rank}
              title={casino.label}
              highlightColor={casino.highlightColor}
            />
          </section>
          <section style={{ flex: 1 }}>
            <LargeTrendingCard
              image={sport.image}
              quantityPlaying={sport.quantityPlaying}
              rank={sport.rank}
              title={sport.label}
              highlightColor={sport.highlightColor}
            />
          </section>
        </div>
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
            <TrendingCard key={game.rank} image={game.src} rank={game.rank} quantityPlaying={game.quantityPlaying} />
          ))}
        </Carousel>
        <Carousel title={trendingSports.title} mb={4}>
          {trendingSports.items.map((sport) => (
            <TrendingCard
              key={sport.rank}
              image={sport.src}
              rank={sport.rank}
              quantityPlaying={sport.quantityPlaying}
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
        <Table tableView={tableView} tables={tables} />
        <Stack>
          <Typography variant="subtitle1" mb={2} fontWeight={600}>
            {faq.title}
          </Typography>
          <FAQ accordionItems={faq.items} />
        </Stack>
      </Box>
    </Box>
  )
}

export default MainPage
