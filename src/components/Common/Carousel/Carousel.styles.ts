import { Box as MUIBox, Stack as MUIStack, boxClasses, stackClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

const CarouselContainer = styled(MUIBox)(() => ({
  [`&.${boxClasses.root}`]: {
    width: 'calc(100vw - (100vw - 100%))',
    overflow: 'hidden',
    position: 'relative',
  },
}))

const CarouselContent = styled(MUIStack)(() => ({
  [`&.${stackClasses.root}`]: {
    overflowX: 'auto',
    cursor: 'grab',
    scrollBehavior: 'smooth',
    width: '100%',
    userSelect: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
  },
}))

const ShadowLeft = styled(MUIBox)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  width: 32,
  pointerEvents: 'none',
  zIndex: 2,
  background: 'linear-gradient(to right, #0F0F10 0%, rgba(240,240,240,0) 100%)',
}))

const ShadowRight = styled(MUIBox)(() => ({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  width: 32,
  pointerEvents: 'none',
  zIndex: 2,
  background: 'linear-gradient(to left, #0F0F10 0%, rgba(240,240,240,0) 100%)',
}))

export { CarouselContainer, CarouselContent, ShadowLeft, ShadowRight }
