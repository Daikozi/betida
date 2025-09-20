import { FC } from 'react'

import { Card, CardActionArea, Stack, Typography } from '@mui/material'
import NextImage from 'next/image'

type LargeTrendingCardProps = {
  image: string
  quantityPlaying: number
  rank: number
  title: string
  highlightColor?: string
  url: string
}

const LargeTrendingCard: FC<LargeTrendingCardProps> = ({
  image,
  quantityPlaying,
  rank,
  title,
  highlightColor = 'transparent',
  url,
}) => (
  <Stack spacing={1}>
    <Card
      sx={{
        width: '100%',
        border: '2px solid transparent',
        transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
        '&:hover': {
          border: `2px solid ${highlightColor}`,
        },
        '& img': {
          transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
        },
        '&:hover img': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardActionArea
        href={url}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 !important',
        }}
      >
        <NextImage
          src={image.startsWith('/assets/images/') ? image : `/assets/images/${image}`}
          alt={`trending game ${rank}`}
          width={385}
          height={260}
          style={{ width: '100%', height: 'auto', aspectRatio: '385/260' }}
          priority
        />
      </CardActionArea>
    </Card>

    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="caption" color="text.primary" fontWeight={600}>
        {title}
      </Typography>
      <Stack spacing={0.5} alignItems="center" direction="row">
        <NextImage src="/assets/svg/Ellipse 1.svg" alt="" width={6} height={6} />
        <Typography variant="caption" color="text.secondary" fontWeight={600}>
          {quantityPlaying}
        </Typography>
        <Typography variant="caption">playing</Typography>
      </Stack>
    </Stack>
  </Stack>
)

export default LargeTrendingCard
