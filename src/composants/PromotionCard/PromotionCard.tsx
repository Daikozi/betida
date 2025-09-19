import { FC } from 'react'

import { Card, CardActions, CardContent, Chip, Link, Stack, Typography } from '@mui/material'
import NextImage from 'next/image'

type PromotionCardProps = {
  chipLabel: string
  title: string
  subtitle: string
  image: string
  link: string
}

const PromotionCard: FC<PromotionCardProps> = ({ chipLabel, title, subtitle, image, link }) => (
  <Card
    sx={{
      minWidth: { xs: '100%', sm: 'calc(50% - 4px)', md: 'calc(33% - 1.5px)' },
    }}
  >
    <Stack spacing={2} flex={1} justifyContent="space-between" alignItems="center" direction="row" p={2}>
      <Stack direction="column" justifyContent="space-between" flex={1}>
        <CardContent sx={{ p: 0 }}>
          <Stack mb={4}>
            <Chip label={chipLabel} />
            <Typography variant="titleLight" mt={1.5}>
              {title}
            </Typography>
            <Typography variant="textDark" mt={0.5}>
              {subtitle}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ padding: 0, marginTop: 'auto' }}>
          <Link href={link}>
            <Typography variant="textLight" fontWeight={600}>
              Read More
            </Typography>
          </Link>
        </CardActions>
      </Stack>
      <NextImage src={image} alt={title} width={140} height={140} />
    </Stack>
  </Card>
)

export default PromotionCard
