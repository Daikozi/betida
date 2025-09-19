import { FC } from 'react'

import Main from '@/components/Pages/Main/Main'

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

const MainPage: FC = () => <Main />

export default MainPage
