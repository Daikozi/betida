import { FC } from 'react'

import { Box, CardActionArea, Stack, StackProps, Typography } from '@mui/material'
import NextImage from 'next/image'

import { Card, Rank } from './TrendingCard.styles'

type TrendingCardProps = {
  image: string
  quantityPlaying?: number
  rank?: number
  link: string
}

const TrendingCard: FC<TrendingCardProps & StackProps> = ({ image, quantityPlaying, rank, link, ...stackProps }) => (
  <Stack spacing={1} {...stackProps}>
    <Card>
      <CardActionArea href={link}>
        {rank && (
          <Rank>
            <Box />
            <Typography variant="titleLight" fontWeight="bold">
              {rank}
            </Typography>
          </Rank>
        )}
        <NextImage
          src={image.startsWith('/assets/images/') ? image : `/assets/images/${image}`}
          alt={`trending game ${rank}`}
          width={144}
          height={0}
          sizes="144px"
          style={{ width: 144, height: 'auto', objectFit: 'contain', borderRadius: 8, display: 'block' }}
          priority
        />
      </CardActionArea>
    </Card>
    {!!quantityPlaying && (
      <Stack spacing={0.5} alignItems="center" direction="row">
        <NextImage src="/assets/svg/Ellipse 1.svg" alt="" width={6} height={6} />
        <Typography variant="captionLight" fontWeight={600}>
          {quantityPlaying}
        </Typography>
        <Typography variant="captionDark">playing</Typography>
      </Stack>
    )}
  </Stack>
)

export default TrendingCard
