import { ChangeEvent, FC, useState } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  Stack,
  StackProps,
  Switch,
  Typography,
} from '@mui/material'
import Image from 'next/image'

const Game: FC<StackProps> = (props) => {
  const [isRealPlay, setIsRealPlay] = useState(false)
  const [currency, setCurrency] = useState<'dollar' | 'bitcoin' | 'etherium' | 'coin'>('dollar')
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsRealPlay(event.target.checked)
  }

  return (
    <Stack spacing={2} {...props} sx={{ pb: 3 }}>
      <Box bgcolor="backgroundLevels.2" sx={{ aspectRatio: '1200/480', position: 'relative', borderRadius: 1.2 }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image alt="play button" width={80} height={80} src="/assets/svg/play.svg" />
        </Box>
      </Box>
      <Box bgcolor="backgroundLevels.1" py={1.5} px={2} borderRadius="10px">
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="fullscreen" sx={{ p: 0 }}>
              <Image alt="fullscreen icon" width={24} height={24} src="/assets/svg/fullscreen.svg" />
            </IconButton>
            <IconButton aria-label="reduce" sx={{ p: 0 }}>
              <Image alt="reduce icon" width={24} height={24} src="/assets/svg/reduce.svg" />
            </IconButton>
            <IconButton aria-label="stats" sx={{ p: 0 }}>
              <Image alt="stats icon" width={24} height={24} src="/assets/svg/stats.svg" />
            </IconButton>
            <IconButton aria-label="favoris" sx={{ p: 0 }}>
              <Image alt="favoris icon" width={24} height={24} src="/assets/svg/favoris.svg" />
            </IconButton>
            <IconButton aria-label="share" sx={{ p: 0 }}>
              <Image alt="share icon" width={24} height={24} src="/assets/svg/share.svg" />
            </IconButton>
            <Box pl={6}>
              <Select
                id="betType-select"
                labelId="betType-label"
                name="betType"
                sx={{ minWidth: 140, height: 32 }}
                value={currency}
                aria-labelledby="betType-label"
                onChange={(event) => setCurrency(event.target.value)}
              >
                <MenuItem value="bitcoin">
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Image alt="bitcoin icon" width={20} height={20} src="/assets/svg/bitcoin.svg" />
                    <Typography variant="textLight">Bitcoin</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem value="etherium">
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Image alt="etherium icon" width={20} height={20} src="/assets/svg/etherium.svg" />
                    <Typography variant="textLight">Etherium</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem value="dollar">
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Image alt="dollar icon" width={20} height={20} src="/assets/svg/dollar.svg" />
                    <Typography variant="textLight">Dollar</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem value="coin">
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Image alt="coin icon" width={20} height={20} src="/assets/svg/coin.svg" />
                    <Typography variant="textLight">Coin</Typography>
                  </Stack>
                </MenuItem>
              </Select>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant={isRealPlay ? 'textDark' : 'textLight'}>Fun Play</Typography>
            <FormControlLabel
              control={<Switch color="primary" onChange={handleSwitchChange} checked={isRealPlay} />}
              label={
                <Typography variant={isRealPlay ? 'textLight' : 'textDark'} ml={1}>
                  Real Play
                </Typography>
              }
              labelPlacement="end"
            />
          </Stack>
        </Stack>
      </Box>
      <Accordion disableGutters onChange={() => setIsExpanded(!isExpanded)} expanded={isExpanded}>
        <AccordionSummary
          sx={{ height: 60 }}
          expandIcon={
            isExpanded ? (
              <Image src="/assets/svg/carat_down_light.svg" alt="Expand" width={24} height={24} />
            ) : (
              <Image src="/assets/svg/carat_down_dark.svg" alt="Expand" width={24} height={24} />
            )
          }
        >
          <Stack direction="row" justifyContent="space-between" width="100%" sx={{ mr: 1 }}>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography variant="titleLight">Angel vs Sinner Eternal Battle Enhanced RTP</Typography>
              <Typography variant="titleDark">Pragmatic Play</Typography>
            </Stack>
            <Box p={1.2} borderRadius="10px" bgcolor="backgroundLevels.2">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Image src="/assets/svg/vip_club.svg" alt="VIP Club" width={24} height={24} />
                <Typography variant="textDark">15,000.00×</Typography>
                <Typography variant="textLight">VeeMay77</Typography>
              </Stack>
            </Box>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, iste quae molestias quidem tempora consequatur
          numquam inventore corrupti nulla molestiae dolor exercitationem voluptatem commodi excepturi sapiente iure
          tenetur quasi suscipit!
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}

export default Game
