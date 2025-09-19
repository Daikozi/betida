'use client'

import { FC } from 'react'

import { Stack, Typography } from '@mui/material'

const ComingSoon: FC = () => (
  <Stack justifyContent="center" alignItems="center" sx={{ height: 'calc(100vh - 76px)' }}>
    <Typography variant="h3" component="h1">
      Coming Soon
    </Typography>
  </Stack>
)

export default ComingSoon
