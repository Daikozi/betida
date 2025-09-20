import { colors } from '@/theme/tokens'

type SideMenu = {
  header: {
    menu: {
      text: string
      icon: string
      showWhenOpen: boolean
    }
  }
  searchBar: {
    textInput: {
      placeholder: string
      label: string
    }
    select: {
      label: string
      name: string
      option: { text: string; value: string }[]
    }
  }
  list: {
    text: string
    icon: string
    gradient?: string
    showWhenOpen: boolean
    subMenu?: { text: string; link: string; icon: string }[]
    url: string
  }[][]
  loggedIn: {
    text: string
    icon: string
    gradient?: string
    showWhenOpen: boolean
    subMenu?: { text: string; link: string; icon: string }[]
    url: string
  }[]
}

export const sideMenu: SideMenu = {
  header: {
    menu: {
      text: 'Menu',
      icon: '/assets/svg/menu.svg',
      showWhenOpen: false,
    },
  },
  searchBar: {
    textInput: {
      placeholder: 'Search your game',
      label: 'Search',
    },
    select: {
      label: 'Category',
      name: 'category',
      option: [
        { text: 'Casino', value: 'casino' },
        { text: 'Sports', value: 'sports' },
      ],
    },
  },
  list: [
    [
      {
        text: 'Casino',
        icon: '/assets/svg/casino_unselected.svg',
        showWhenOpen: false,
        gradient: colors.casino.gradient,
        url: '/casino',
      },
      {
        text: 'Sports',
        icon: '/assets/svg/sports_unselected.svg',
        gradient: colors.sports.gradient,
        url: '/sports',
        showWhenOpen: false,
      },
    ],
    [
      {
        text: 'Promotions',
        icon: '/assets/svg/promotions.svg',
        showWhenOpen: true,
        url: '/promotions',
        subMenu: [
          { text: '$75k Weekly Raffle', link: '#', icon: '/assets/svg/branche.svg' },
          { text: '$100k Race', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'Pragmatic Drops & Wins', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'View All', link: '#', icon: '/assets/svg/branche_end.svg' },
        ],
      },
      { text: 'Affiliate', icon: '/assets/svg/affiliate.svg', showWhenOpen: true, url: '/affiliate' },
      { text: 'VIP Club', icon: '/assets/svg/vip_club.svg', showWhenOpen: true, url: '/vip-club' },
      { text: 'Blog', icon: '/assets/svg/blog.svg', showWhenOpen: true, url: '/blog' },
      { text: 'Forum', icon: '/assets/svg/forum.svg', showWhenOpen: true, url: '/forum' },
    ],
    [
      {
        text: 'Sponsorships',
        icon: '/assets/svg/sponsorships.svg',
        showWhenOpen: true,
        url: '/sponsorships',
        subMenu: [
          { text: 'sponsorships 1', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'sponsorships 2', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'sponsorships 3', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'sponsorships 4', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'sponsorships 5', link: '#', icon: '/assets/svg/branche_end.svg' },
        ],
      },
      {
        text: 'Responsible Gambling',
        icon: '/assets/svg/responsible_gambling.svg',
        showWhenOpen: true,
        url: '/responsible-gambling',
      },
      { text: 'Live Support', icon: '/assets/svg/live_support.svg', showWhenOpen: true, url: '/live-support' },
      {
        text: 'Language',
        icon: '/assets/svg/language.svg',
        showWhenOpen: true,
        url: '/language',
        subMenu: [
          { text: 'English', link: '#', icon: '/assets/svg/uk_flag.svg' },
          { text: 'Turkish', link: '#', icon: '/assets/svg/tr_flag.svg' },
        ],
      },
    ],
  ],
  loggedIn: [
    {
      text: 'Favorites',
      icon: '/assets/svg/favorites.svg',
      showWhenOpen: true,
      url: '/favorites',
    },
    {
      text: 'Recent',
      icon: '/assets/svg/recent.svg',
      showWhenOpen: true,
      url: '/recent',
    },
    {
      text: 'Challenges',
      icon: '/assets/svg/challenges.svg',
      showWhenOpen: true,
      url: '/challenges',
    },
    {
      text: 'My Bets',
      icon: '/assets/svg/my_bets.svg',
      showWhenOpen: true,
      url: '/my-bets',
    },
    {
      text: 'Games',
      icon: '/assets/svg/games.svg',
      showWhenOpen: true,
      url: '/games',
      subMenu: [
        { text: 'New Releases', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Slots', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Stack Originales', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'ForuStake Exclusivesm', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Live Casino', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Game Shows', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Burst Game', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Stake Poker', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Bonus Buy', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Blackjack', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Baccarat', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Roulette', link: '#', icon: '/assets/svg/branche.svg' },
        { text: 'Publishers', link: '#', icon: '/assets/svg/branche_end.svg' },
      ],
    },
  ],
}
