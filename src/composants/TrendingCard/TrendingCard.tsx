import { FC } from 'react'

import ellipse from '@/assets/svg/Ellipse 1.svg'
import { Box, CardActionArea, Stack, StackProps, Typography } from '@mui/material'
import NextImage, { StaticImageData } from 'next/image'

import { Card, Rank } from './TrendingCard.styles'

type TrendingCardProps = {
  image: string
  quantityPlaying?: number
  rank?: number
}

const TrendingCard: FC<TrendingCardProps & StackProps> = ({ image, quantityPlaying, rank, ...stackProps }) => (
  <Stack spacing={1} {...stackProps}>
    <Card>
      {rank && (
        <Rank>
          <Box />
          <Typography variant="titleLight" fontWeight="bold">
            {rank}
          </Typography>
        </Rank>
      )}
      <CardActionArea>
        <NextImage
          src={image.startsWith('/assets/images/') ? image : `/assets/images/${image}`}
          alt={`trending game ${rank}`}
          width={144}
          height={96}
          style={{ width: '100%', height: 'auto' }}
        />
      </CardActionArea>
    </Card>
    {!!quantityPlaying && (
      <Stack spacing={0.5} alignItems="center" direction="row">
        <NextImage src={ellipse as StaticImageData} alt="" width={6} height={6} />
        <Typography variant="captionLight" fontWeight={600}>
          {quantityPlaying}
        </Typography>
        <Typography variant="captionDark">playing</Typography>
      </Stack>
    )}
  </Stack>
)

export default TrendingCard
