'use client'

import { FC } from 'react'

import Casino from '@/pages/Casino/Casino'
import Main from '@/pages/Main/Main'
import Sport from '@/pages/Sports/Sports'
import { useDisplayMode } from '@/store/displayModeStore'

const Home: FC = () => {
  const { displayMode } = useDisplayMode()

  if (!displayMode) {
    return <Main />
  }

  return displayMode === 'casino' ? <Casino /> : <Sport />
}

export default Home
