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
  }[][]
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
      },
      {
        text: 'Sports',
        icon: '/assets/svg/sports_unselected.svg',
        gradient: colors.sports.gradient,
        showWhenOpen: false,
      },
    ],
    [
      {
        text: 'Promotions',
        icon: '/assets/svg/promotions.svg',
        showWhenOpen: true,
        subMenu: [
          { text: '$75k Weekly Raffle', link: '#', icon: '/assets/svg/branche.svg' },
          { text: '$100k Race', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'Pragmatic Drops & Wins', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'View All', link: '#', icon: '/assets/svg/branche_end.svg' },
        ],
      },
      { text: 'Affiliate', icon: '/assets/svg/affiliate.svg', showWhenOpen: true },
      { text: 'VIP Club', icon: '/assets/svg/vip_club.svg', showWhenOpen: true },
      { text: 'Blog', icon: '/assets/svg/blog.svg', showWhenOpen: true },
      { text: 'Forum', icon: '/assets/svg/forum.svg', showWhenOpen: true },
    ],
    [
      {
        text: 'Sponsorships',
        icon: '/assets/svg/sponsorships.svg',
        showWhenOpen: true,
        subMenu: [
          { text: 'sponsorships 1', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'sponsorships 2', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'sponsorships 3', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'sponsorships 4', link: '#', icon: '/assets/svg/branche.svg' },
          { text: 'sponsorships 5', link: '#', icon: '/assets/svg/branche_end.svg' },
        ],
      },
      { text: 'Responsible Gambling', icon: '/assets/svg/responsible_gambling.svg', showWhenOpen: true },
      { text: 'Live Support', icon: '/assets/svg/live_support.svg', showWhenOpen: true },
      {
        text: 'Language',
        icon: '/assets/svg/language.svg',
        showWhenOpen: true,
        subMenu: [
          { text: 'English', link: '#', icon: '/assets/svg/uk_flag.svg' },
          { text: 'Turkish', link: '#', icon: '/assets/svg/tr_flag.svg' },
        ],
      },
    ],
  ],
}
