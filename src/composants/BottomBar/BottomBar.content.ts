import bets from '@/assets/svg/bets.svg'
import bets_selected from '@/assets/svg/bets_selected.svg'
import browse from '@/assets/svg/browse.svg'
import browse_selected from '@/assets/svg/browse_selected.svg'
import casino from '@/assets/svg/casino.svg'
import casino_selected from '@/assets/svg/casino_selected.svg'
import chat from '@/assets/svg/chat.svg'
import chat_selected from '@/assets/svg/chat_selected.svg'
import sports from '@/assets/svg/sports.svg'
import sports_selected from '@/assets/svg/sports_selected.svg'
import { StaticImageData } from 'next/image'

export const bottomBarContent = [
  {
    label: 'Browse',
    value: 'browse',
    icon: {
      selected: browse_selected as StaticImageData,
      unselected: browse as StaticImageData,
    },
  },
  {
    label: 'Casino',
    value: 'casino',
    icon: {
      selected: casino_selected as StaticImageData,
      unselected: casino as StaticImageData,
    },
  },
  {
    label: 'Bets',
    value: 'bets',
    icon: {
      selected: bets_selected as StaticImageData,
      unselected: bets as StaticImageData,
    },
  },
  {
    label: 'Sports',
    value: 'sports',
    icon: {
      selected: sports_selected as StaticImageData,
      unselected: sports as StaticImageData,
    },
  },
  {
    label: 'Chat',
    value: 'chat',
    icon: {
      selected: chat_selected as StaticImageData,
      unselected: chat as StaticImageData,
    },
  },
]
