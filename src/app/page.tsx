'use client'

import { FC } from 'react'

import Casino from '@/composants/Pages/Casino/Casino'
import Main from '@/composants/Pages/Main/Main'
import Sport from '@/composants/Pages/Sports/Sports'
import { useDisplayMode } from '@/store/displayModeStore'

const Home: FC = () => {
  const { displayMode } = useDisplayMode()

  if (!displayMode) {
    return <Main />
  }

  return displayMode === 'casino' ? <Casino /> : <Sport />
}

export default Home
