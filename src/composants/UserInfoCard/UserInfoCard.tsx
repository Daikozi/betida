import { FC } from 'react'

import arrow_right from '@/assets/svg/arrow_right.svg'
import bronze from '@/assets/svg/bronze.svg'
import info from '@/assets/svg/info.svg'
import none from '@/assets/svg/none.svg'
import { main } from '@/data/main'
import { Box, BoxProps, Stack, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

import ProgressBar from '../ProgressBar/ProgressBar'

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
          <Image src={arrow_right as StaticImageData} alt="info" />
        </Box>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography color="text.secondary">{userInfo.progress.score}</Typography>
          <Image src={info as StaticImageData} alt="info" />
        </Stack>
      </Stack>

      <ProgressBar variant="determinate" value={userInfo.progress.value} aria-label="Progression VIP utilisateur" />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={3}
        sx={{ position: 'relative', width: '100%' }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Image src={none as StaticImageData} alt="info" />
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
          <Image src={arrow_right as StaticImageData} alt="info" />
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            {userInfo.statut.next}
          </Typography>
          <Image src={bronze as StaticImageData} alt="info" />
        </Stack>
      </Stack>
    </Box>
  )
}

export default UserInfoCard
