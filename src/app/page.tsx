'use client'

import { FC } from 'react'

import Casino from '@/composants/Pages/Casino/Casino'
import Main from '@/composants/Pages/Main/Main'
import Sport from '@/composants/Pages/Sports/Sports'
import { useDisplayMode } from '@/store/displayModeStore'

export const metadata = {
  title: 'Betida - Sports betting and online casino',
  description:
    'Betida is a sports betting and online casino platform offering a secure and entertaining gaming experience.',
  keywords: [
    'sports betting',
    'online casino',
    'gambling',
    'live betting',
    'slot machines',
    'blackjack',
    'roulette',
    'poker',
    'competitive odds',
    'welcome bonus',
    'player security',
  ].join(', '),
}

const Home: FC = () => {
  const { displayMode } = useDisplayMode()

  if (!displayMode) {
    return <Main />
  }

  return displayMode === 'casino' ? <Casino /> : <Sport />
}

export default Home
