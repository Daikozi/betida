type IconType = {
  selected: string
  unselected: string
}

type BottomBarItem = {
  label: string
  value: string
  icon: IconType
}

export const bottomBarContent: BottomBarItem[] = [
  {
    label: 'Browse',
    value: 'browse',
    icon: {
      selected: '/assets/svg/browse_selected.svg',
      unselected: '/assets/svg/browse.svg',
    },
  },
  {
    label: 'Casino',
    value: 'casino',
    icon: {
      selected: '/assets/svg/casino_selected.svg',
      unselected: '/assets/svg/casino.svg',
    },
  },
  {
    label: 'Bets',
    value: 'bets',
    icon: {
      selected: '/assets/svg/bets_selected.svg',
      unselected: '/assets/svg/bets.svg',
    },
  },
  {
    label: 'Sports',
    value: 'sports',
    icon: {
      selected: '/assets/svg/sports_selected.svg',
      unselected: '/assets/svg/sports.svg',
    },
  },
  {
    label: 'Chat',
    value: 'chat',
    icon: {
      selected: '/assets/svg/chat_selected.svg',
      unselected: '/assets/svg/chat.svg',
    },
  },
]
