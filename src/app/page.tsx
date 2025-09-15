'use client'

import { FC } from 'react'

import CasinoPage from '@/composants/CasinoPage/CasinoPage'
import MainPage from '@/composants/MainPage/MainPage'
import { useDisplayMode } from '@/store/displayModeStore'

const Home: FC = () => {
  const { displayMode } = useDisplayMode()

  if (!displayMode) {
    return <MainPage />
  }

  return displayMode === 'casino' ? <CasinoPage /> : <MainPage />
}

export default Home
