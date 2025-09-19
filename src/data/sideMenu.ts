import affiliate from '@/assets/svg/affiliate.svg'
import blog from '@/assets/svg/blog.svg'
import branche from '@/assets/svg/branche.svg'
import branche_end from '@/assets/svg/branche_end.svg'
import casino_unselected from '@/assets/svg/casino_unselected.svg'
import forum from '@/assets/svg/forum.svg'
import live_support from '@/assets/svg/live_support.svg'
import menu from '@/assets/svg/menu.svg'
import promotion from '@/assets/svg/promotions.svg'
import responsible_gambling from '@/assets/svg/responsible_gambling.svg'
import sponsorships from '@/assets/svg/sponsorships.svg'
import sports_unselected from '@/assets/svg/sports_unselected.svg'
import tr_flag from '@/assets/svg/tr_flag.svg'
import uk_flag from '@/assets/svg/uk_flag.svg'
import vip_club from '@/assets/svg/vip_club.svg'
import { colors } from '@/theme/tokens'
import { StaticImageData } from 'next/image'

type SideMenu = {
  header: {
    menu: {
      text: string
      icon: StaticImageData
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
    icon: StaticImageData
    gradient?: string
    showWhenOpen: boolean
    subMenu?: { text: string; link: string; icon: StaticImageData }[]
  }[][]
}

export const sideMenu: SideMenu = {
  header: {
    menu: {
      text: 'Menu',
      icon: menu as StaticImageData,
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
        icon: casino_unselected as StaticImageData,
        showWhenOpen: false,
        gradient: colors.casino.gradient,
      },
      {
        text: 'Sports',
        icon: sports_unselected as StaticImageData,
        gradient: colors.sports.gradient,
        showWhenOpen: false,
      },
    ],
    [
      {
        text: 'Promotions',
        icon: promotion as StaticImageData,
        showWhenOpen: true,
        subMenu: [
          { text: '$75k Weekly Raffle', link: '#', icon: branche as StaticImageData },
          { text: '$100k Race', link: '#', icon: branche as StaticImageData },
          { text: 'Pragmatic Drops & Wins', link: '#', icon: branche as StaticImageData },
          { text: 'View All', link: '#', icon: branche_end as StaticImageData },
        ],
      },
      { text: 'Affiliate', icon: affiliate as StaticImageData, showWhenOpen: true },
      { text: 'VIP Club', icon: vip_club as StaticImageData, showWhenOpen: true },
      { text: 'Blog', icon: blog as StaticImageData, showWhenOpen: true },
      { text: 'Forum', icon: forum as StaticImageData, showWhenOpen: true },
    ],
    [
      {
        text: 'Sponsorships',
        icon: sponsorships as StaticImageData,
        showWhenOpen: true,
        subMenu: [
          { text: 'sponsorships 1', link: '#', icon: branche as StaticImageData },
          { text: 'sponsorships 2', link: '#', icon: branche as StaticImageData },
          { text: 'sponsorships 3', link: '#', icon: branche as StaticImageData },
          { text: 'sponsorships 4', link: '#', icon: branche as StaticImageData },
          { text: 'sponsorships 5', link: '#', icon: branche_end as StaticImageData },
        ],
      },
      { text: 'Responsible Gambling', icon: responsible_gambling as StaticImageData, showWhenOpen: true },
      { text: 'Live Support', icon: live_support as StaticImageData, showWhenOpen: true },
      {
        text: 'Language',
        icon: sponsorships as StaticImageData,
        showWhenOpen: true,
        subMenu: [
          { text: 'English', link: '#', icon: uk_flag as StaticImageData },
          { text: 'Turkish', link: '#', icon: tr_flag as StaticImageData },
        ],
      },
    ],
  ],
}
