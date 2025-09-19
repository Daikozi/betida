import { Box, Card as MUICard, boxClasses, cardClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

const Card = styled(MUICard)(() => ({
  [`&.${cardClasses.root}`]: {
    width: 144,
    position: 'relative',
    transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
    '&:hover': {
      transform: 'scale(0.95)',
    },
  },
}))

const Rank = styled(Box)(({ theme }) => ({
  [`&.${boxClasses.root}`]: {
    position: 'absolute',
    top: 6,
    left: 6,
    zIndex: 1,
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  [`&.${boxClasses.root} > div`]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 24,
    height: 24,
    zIndex: 0,
  },
  [`&.${boxClasses.root} > div > span`]: { position: 'relative', zIndex: 1 },
}))

export { Rank, Card }
