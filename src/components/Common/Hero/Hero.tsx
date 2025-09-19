import { FC } from 'react'

import { Grid, GridProps } from '@mui/material'

import LargeTrendingCard from '@/components/Common/LargeTrendingCard/LargeTrendingCard'
import UserInfoCard from '@/components/Common/UserInfoCard/UserInfoCard'
import { main } from '@/data/main'
import { useDisplayMode } from '@/store/displayModeStore'

type HeroProps = {
  hasUserInfoCard?: boolean
} & GridProps

const Hero: FC<HeroProps> = ({ hasUserInfoCard = false, ...gridProps }) => {
  const {
    default: {
      hero: { casino, sport },
    },
  } = main

  const { displayMode, setDisplayMode } = useDisplayMode()

  return (
    <Grid container spacing={2} alignItems="center" {...gridProps}>
      {hasUserInfoCard && (
        <Grid size={{ xs: 12, sm: 12, lg: 4 }}>
          <UserInfoCard />
        </Grid>
      )}
      <Grid size={{ xs: 6, sm: 6, lg: hasUserInfoCard ? 4 : 6 }}>
        <LargeTrendingCard
          image={casino.image}
          quantityPlaying={casino.quantityPlaying}
          rank={casino.rank}
          title={casino.label}
          highlightColor={casino.highlightColor}
          onClick={() => setDisplayMode(displayMode === 'casino' ? null : 'casino')}
        />
      </Grid>
      <Grid size={{ xs: 6, sm: 6, lg: hasUserInfoCard ? 4 : 6 }}>
        <LargeTrendingCard
          image={sport.image}
          quantityPlaying={sport.quantityPlaying}
          rank={sport.rank}
          title={sport.label}
          highlightColor={sport.highlightColor}
          onClick={() => setDisplayMode(displayMode === 'sports' ? null : 'sports')}
        />
      </Grid>
    </Grid>
  )
}

export default Hero
