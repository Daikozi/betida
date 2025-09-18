import { FC } from 'react'

import ellipse from '@/assets/svg/Ellipse 1.svg'
import { Card, CardActionArea, Stack, Typography } from '@mui/material'
import NextImage, { StaticImageData } from 'next/image'

type LargeTrendingCardProps = {
  image: string
  quantityPlaying: number
  rank: number
  title: string
  highlightColor?: string
  onClick?: VoidFunction
}

const LargeTrendingCard: FC<LargeTrendingCardProps> = ({
  image,
  quantityPlaying,
  rank,
  title,
  highlightColor = 'transparent',
  onClick,
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
        onClick={onClick}
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
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </CardActionArea>
    </Card>

    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="caption" color="text.primary" fontWeight={600}>
        {title}
      </Typography>
      <Stack spacing={0.5} alignItems="center" direction="row">
        <NextImage src={ellipse as StaticImageData} alt="" width={6} height={6} />
        <Typography variant="caption" color="text.secondary" fontWeight={600}>
          {quantityPlaying}
        </Typography>
        <Typography variant="caption">playing</Typography>
      </Stack>
    </Stack>
  </Stack>
)

export default LargeTrendingCard
