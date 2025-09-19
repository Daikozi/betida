import { FC, MouseEvent, ReactNode, useLayoutEffect, useRef, useState } from 'react'

import { Box, BoxProps, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'

import { CarouselContainer, CarouselContent, ShadowLeft, ShadowRight } from './Carousel.styles'

type CarouselProps = {
  children: ReactNode
  title: string
} & BoxProps

const Carousel: FC<CarouselProps> = ({ children, title, ...boxProps }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    isDown.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0)
    scrollLeft.current = scrollRef.current?.scrollLeft || 0
    document.body.style.cursor = 'grabbing'
  }

  const handleMouseLeave = () => {
    isDown.current = false
    document.body.style.cursor = ''
  }

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const handleMouseUp = () => {
    isDown.current = false
    document.body.style.cursor = ''
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown.current) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = x - startX.current
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleNext = () => {
    const el = scrollRef.current
    if (el) {
      const maxScroll = el.scrollWidth - el.clientWidth
      const target = Math.min(el.scrollLeft + 300, maxScroll)
      el.scrollTo({ left: target, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    const el = scrollRef.current
    if (el) {
      const target = Math.max(el.scrollLeft - 300, 0)
      el.scrollTo({ left: target, behavior: 'smooth' })
    }
  }

  useLayoutEffect(() => {
    const updateScroll = () => {
      const el = scrollRef.current
      if (!el) return
      setCanScrollPrev(el.scrollLeft > 0)
      setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
    }
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', updateScroll)
      window.addEventListener('resize', updateScroll)
      updateScroll()
    }
    return () => {
      if (el) el.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [])

  return (
    <Box {...boxProps}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton aria-label="delete" size="small" onClick={handlePrev} disabled={!canScrollPrev}>
            {canScrollPrev ? (
              <Image
                src="/assets/svg/back_light.svg"
                alt="previous"
                width={24}
                height={24}
                style={{ transform: 'rotate(180deg)' }}
              />
            ) : (
              <Image src="/assets/svg/back_light.svg" alt="previous" width={24} height={24} />
            )}
          </IconButton>
          <IconButton aria-label="delete" size="small" onClick={handleNext} disabled={!canScrollNext}>
            {canScrollNext ? (
              <Image src="/assets/svg/next.svg" alt="next" width={24} height={24} />
            ) : (
              <Image
                src="/assets/svg/back_light.svg"
                alt="next"
                width={24}
                height={24}
                style={{ transform: 'rotate(180deg)' }}
              />
            )}
          </IconButton>
        </Stack>
      </Stack>
      <CarouselContainer>
        {canScrollPrev && <ShadowLeft />}

        <CarouselContent
          direction="row"
          justifyContent="flex-start"
          spacing={1}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {children}
        </CarouselContent>
        {canScrollNext && <ShadowRight />}
      </CarouselContainer>
    </Box>
  )
}

export default Carousel
