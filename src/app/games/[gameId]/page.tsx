import { FC } from 'react'

import GameDetail from '@/composants/Pages/GameDetail/GameDetail'

export const metadata = {
  title: 'Betida - Game Details',
  description:
    'Discover detailed information about your favorite games on Betida, including rules, strategies, and tips to enhance your gaming experience.',
  keywords: [
    'game details',
    'casino games',
    'sports betting',
    'game rules',
    'gaming strategies',
    'Betida',
    'online casino',
    'sports betting tips',
    'player resources',
    'game reviews',
    'betting guides',
    'gaming experience',
    'online gambling',
    'casino tips',
    'sports betting strategies',
  ].join(', '),
}

const GamesDetailsPage: FC = () => <GameDetail />

export default GamesDetailsPage
