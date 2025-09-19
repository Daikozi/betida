import { FC } from 'react'

import { Box, BoxProps, LinearProgress, Stack, Typography } from '@mui/material'
import Image from 'next/image'

import { main } from '@/data/main'

const UserInfoCard: FC<BoxProps> = (props) => {
  const {
    default: {
      hero: { userInfo },
    },
  } = main

  return (
    <Box {...props}>
      <Typography variant="h5" color="text.secondary" mb={4}>
        {userInfo.userName}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
        mb={2}
        sx={{ position: 'relative' }}
      >
        <Typography color="text.secondary" sx={{ fontWeight: '500' }}>
          {userInfo.progress.label}
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            transform: 'translate(50%, -40%)',
            top: '50%',
            right: '50%',
          }}
        >
          <Image src="/assets/svg/arrow_right.svg" alt="info" width={24} height={24} />
        </Box>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography color="text.secondary">{userInfo.progress.score}</Typography>
          <Image src="/assets/svg/info.svg" alt="info" width={24} height={24} />
        </Stack>
      </Stack>

      <LinearProgress variant="determinate" value={userInfo.progress.value} aria-label="Progression VIP utilisateur" />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={3}
        sx={{ position: 'relative', width: '100%' }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Image src="/assets/svg/none.svg" alt="info" width={24} height={24} />
          <Typography variant="body2" color="text.secondary">
            {userInfo.statut.current}
          </Typography>
        </Stack>
        <Box
          sx={{
            position: 'absolute',
            transform: 'translate(50%, -40%)',
            top: '50%',
            right: '50%',
          }}
        >
          <Image src="/assets/svg/arrow_right.svg" alt="info" width={24} height={24} />
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            {userInfo.statut.next}
          </Typography>
          <Image src="/assets/svg/bronze.svg" alt="info" width={24} height={24} />
        </Stack>
      </Stack>
    </Box>
  )
}

export default UserInfoCard
