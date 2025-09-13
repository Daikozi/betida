'use client'

import { FC, useState } from 'react'

import arrow_right from '@/assets/svg/arrow_right.svg'
import bronze from '@/assets/svg/bronze.svg'
import info from '@/assets/svg/info.svg'
import none from '@/assets/svg/none.svg'
import { Box, InputLabel, MenuItem, Select, Stack, ToggleButton, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import Image, { StaticImageData } from 'next/image'

const Carousel = dynamic(() => import('@/composants/Carousel/Carousel'))
const FAQ = dynamic(() => import('@/composants/FAQ/FAQ'))
const Table = dynamic(() => import('@/composants/Table/Table'))
const LargeTrendingCard = dynamic(() => import('@/composants/LargeTrendingCard/LargeTrendingCard'))
const ProgressBar = dynamic(() => import('@/composants/ProgressBar/ProgressBar'))
const PromotionCard = dynamic(() => import('@/composants/PromotionCard/PromotionCard'))
const SearchBar = dynamic(() => import('@/composants/SearchBar/SearchBar'))
const ToggleButtonGroup = dynamic(() => import('@/composants/ToggleButtonGroup/ToggleButtonGroup'))
const TrendingCard = dynamic(() => import('@/composants/TrendingCard/TrendingCard'))

const Home: FC = () => {
  const [betType, setBetType] = useState<'Casino' | 'Sport'>('Casino')
  const [tableView, setTableView] = useState<'Casino Bets' | 'Sport Bets' | 'Race Leaderboard'>('Casino Bets')

  const trendingGames = Array.from({ length: 8 }, (_, i) => ({
    src: `/assets/images/trending_games_${i + 1}.webp`,
    rank: i + 1,
    quantityPlaying: 365,
  }))

  const trendingSports = Array.from({ length: 8 }, (_, i) => ({
    src: `/assets/images/trending_sports_${i + 1}.webp`,
    rank: i + 1,
  }))

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
              Mon1453
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
                Your VIP Progress
              </Typography>
              <span style={{ position: 'absolute', transform: 'translate(50%, -40%)', top: '50%', right: '50%' }}>
                <Image src={arrow_right as StaticImageData} alt="info" />
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Typography color="text.secondary">50.00%</Typography>
                <Image src={info as StaticImageData} alt="info" />
              </span>
            </div>
            <ProgressBar variant="determinate" value={50} aria-label="Progression VIP utilisateur" />
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
                  None
                </Typography>
              </span>
              <span style={{ position: 'absolute', transform: 'translate(50%, -40%)', top: '50%', right: '50%' }}>
                <Image src={arrow_right as StaticImageData} alt="info" />
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Typography variant="body2" color="text.secondary">
                  Bronze
                </Typography>
                <Image src={bronze as StaticImageData} alt="info" />
              </span>
            </div>
          </section>
          <section style={{ flex: 1 }}>
            <LargeTrendingCard
              image="casino.webp"
              quantityPlaying={365}
              rank={1}
              title="Casino"
              highlightColor="#3B82F6"
            />
          </section>
          <section style={{ flex: 1 }}>
            <LargeTrendingCard
              image="sport.webp"
              quantityPlaying={365}
              rank={1}
              title="Sports"
              highlightColor="#10B981"
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
            Type de pari
          </InputLabel>
          <SearchBar />
        </Stack>
        <Carousel title="Trending Games" mb={4}>
          {trendingGames.map((game) => (
            <TrendingCard key={game.rank} image={game.src} rank={game.rank} quantityPlaying={game.quantityPlaying} />
          ))}
        </Carousel>
        <Carousel title="Trending Sports" mb={4}>
          {trendingSports.map((game) => (
            <TrendingCard key={game.rank} image={game.src} rank={game.rank} />
          ))}
        </Carousel>
        <Carousel title="Trending Sports" mb={4}>
          <PromotionCard
            chipLabel="Promotion"
            title="Team Vitality"
            subtitle="Kill Target Prize Pool"
            image="/assets/images/promotions_1.webp"
          />
          <PromotionCard
            chipLabel="New releases"
            title="Angel vs Sinner"
            subtitle="New Enhanced RTP game!"
            image="/assets/images/promotions_2.webp"
          />
          <PromotionCard
            chipLabel="Promotion"
            title="Frankie's Ebor Raffle"
            subtitle="Share in $40,000"
            image="/assets/images/promotions_3.webp"
          />
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
            onChange={(_, value: 'Casino Bets' | 'Sport Bets' | 'Race Leaderboard' | null) => {
              if (value !== null) {
                setTableView(value)
              }
            }}
            aria-label="text alignment"
          >
            <ToggleButton value="Casino Bets" aria-label="left aligned">
              Casino Bets
            </ToggleButton>
            <ToggleButton value="Sport Bets" aria-label="centered">
              Sport Bets
            </ToggleButton>
            <ToggleButton value="Race Leaderboard" aria-label="right aligned">
              Race Leaderboard
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Table />
        <Stack>
          <Typography variant="subtitle1" mb={2} fontWeight={600}>
            Still Have Questions?
          </Typography>
          <FAQ
            accordionItems={[
              {
                title: 'Who is Brand Name',
                content:
                  'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
              },
              {
                title: 'Is Brand Name Licensed?',
                content:
                  'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
              },
              {
                title: 'Is Betting on Brand Name Safe?',
                content:
                  'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
              },
              {
                title: 'What Currencies Can I Bet With?',
                content:
                  'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
              },
              {
                title: 'What Types of Casino Games Can I Play?',
                content:
                  'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
              },
              {
                title: 'What Sports Can I Bet On?',
                content:
                  'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
              },
              {
                title: 'How Do I Watch Live Streams?',
                content:
                  'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
              },
            ]}
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default Home
