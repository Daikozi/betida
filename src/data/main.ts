import { NEXT_ROUTES } from '@/constants/routes'
import theme from '@/theme/theme'

export const main = {
  casino: {
    promotions: {
      title: 'Promotions',
      items: [
        {
          chipLabel: 'New releases',
          title: 'Angel vs Sinner',
          subtitle: 'New Enhanced RTP game!',
          image: '/assets/images/promotions_2.webp',
          actions: [
            {
              label: 'Play Now',
              link: '/promotions/angel-vs-sinner',
              variante: 'dark',
            },
            {
              label: 'Read More',
              link: '#',
              variante: 'default',
            },
          ],
        },
        {
          chipLabel: 'Promotion',
          title: 'Multiplier Mayhem',
          subtitle: '$40,000 Prize Pool!',
          image: '/assets/images/promotions_4.webp',
          actions: [
            {
              label: 'Play Now',
              link: '/promotions/multiplier-mayhem',
              variante: 'dark',
            },
            {
              label: 'Read More',
              link: '#',
              variante: 'default',
            },
          ],
        },
        {
          chipLabel: 'Promotion',
          title: 'Weekly Raffle',
          subtitle: 'Share in $75,000 each week',
          image: '/assets/images/promotions_5.webp',
          actions: [
            {
              label: 'Play Now',
              link: '/promotions/weekly-raffle',
              variante: 'dark',
            },
            {
              label: 'Read More',
              link: '#',
              variante: 'default',
            },
          ],
        },
      ],
    },
    searchBar: {
      placeholder: 'Search your game',
    },
    brand_name_originals: {
      title: 'Brand Name Originals',
      items: [
        {
          src: '/assets/images/brand_name_originals_1.webp',
          link: '/games/1',
          quantityPlaying: 365,
          rank: 1,
        },
        {
          src: '/assets/images/brand_name_originals_2.webp',
          link: '/games/2',
          quantityPlaying: 365,
          rank: 2,
        },
        {
          src: '/assets/images/brand_name_originals_3.webp',
          link: '/games/3',
          quantityPlaying: 365,
          rank: 3,
        },
        {
          src: '/assets/images/brand_name_originals_4.webp',
          link: '/games/4',
          quantityPlaying: 365,
          rank: 4,
        },
        {
          src: '/assets/images/brand_name_originals_5.webp',
          link: '/games/5',
          quantityPlaying: 365,
          rank: 5,
        },
        {
          src: '/assets/images/brand_name_originals_6.webp',
          link: '/games/6',
          quantityPlaying: 365,
          rank: 6,
        },
        {
          src: '/assets/images/brand_name_originals_7.webp',
          link: '/games/7',
          quantityPlaying: 365,
          rank: 7,
        },
        {
          src: '/assets/images/brand_name_originals_8.webp',
          link: '/games/8',
          quantityPlaying: 365,
          rank: 8,
        },
      ],
    },
    slots: {
      title: 'Slots',
      items: [
        {
          src: '/assets/images/slots_1.webp',
          link: '/games/1',
          quantityPlaying: 365,
          rank: 1,
        },
        {
          src: '/assets/images/slots_2.webp',
          link: '/games/2',
          quantityPlaying: 365,
          rank: 2,
        },
        {
          src: '/assets/images/slots_3.webp',
          link: '/games/3',
          quantityPlaying: 365,
          rank: 3,
        },
        {
          src: '/assets/images/slots_4.webp',
          link: '/games/4',
          quantityPlaying: 365,
          rank: 4,
        },
        {
          src: '/assets/images/slots_5.webp',
          link: '/games/5',
          quantityPlaying: 365,
          rank: 5,
        },
        {
          src: '/assets/images/slots_6.webp',
          link: '/games/6',
          quantityPlaying: 365,
          rank: 6,
        },
        {
          src: '/assets/images/slots_7.webp',
          link: '/games/7',
          quantityPlaying: 365,
          rank: 7,
        },
        {
          src: '/assets/images/slots_8.webp',
          link: '/games/8',
          quantityPlaying: 365,
          rank: 8,
        },
      ],
    },
    publishers: {
      title: 'Publishers',
      items: [
        {
          src: '/assets/images/publishers_1.webp',
          link: '/provider/1',
          quantityPlaying: 365,
          rank: 1,
        },
        {
          src: '/assets/images/publishers_2.webp',
          link: '/provider/2',
          quantityPlaying: 365,
          rank: 2,
        },
        {
          src: '/assets/images/publishers_3.webp',
          link: '/provider/3',
          quantityPlaying: 365,
          rank: 3,
        },
        {
          src: '/assets/images/publishers_4.webp',
          link: '/provider/4',
          quantityPlaying: 365,
          rank: 4,
        },
        {
          src: '/assets/images/publishers_5.webp',
          link: '/provider/5',
          quantityPlaying: 365,
          rank: 5,
        },
        {
          src: '/assets/images/publishers_6.webp',
          link: '/provider/6',
          quantityPlaying: 365,
          rank: 6,
        },
        {
          src: '/assets/images/publishers_7.webp',
          link: '/provider/7',
          quantityPlaying: 365,
          rank: 7,
        },
        {
          src: '/assets/images/publishers_8.webp',
          link: '/provider/8',
          quantityPlaying: 365,
          rank: 8,
        },
      ],
    },
    live_casino: {
      title: 'Live Casino',
      items: [
        {
          src: '/assets/images/live_casino_1.webp',
          link: '/games/1',
          quantityPlaying: 365,
          rank: 1,
        },
        {
          src: '/assets/images/live_casino_2.webp',
          link: '/games/2',
          quantityPlaying: 365,
          rank: 2,
        },
        {
          src: '/assets/images/live_casino_3.webp',
          link: '/games/3',
          quantityPlaying: 365,
          rank: 3,
        },
        {
          src: '/assets/images/live_casino_4.webp',
          link: '/games/4',
          quantityPlaying: 365,
          rank: 4,
        },
        {
          src: '/assets/images/live_casino_5.webp',
          link: '/games/5',
          quantityPlaying: 365,
          rank: 5,
        },
        {
          src: '/assets/images/live_casino_6.webp',
          link: '/games/6',
          quantityPlaying: 365,
          rank: 6,
        },
        {
          src: '/assets/images/live_casino_7.webp',
          link: '/games/7',
          quantityPlaying: 365,
          rank: 7,
        },
        {
          src: '/assets/images/live_casino_8.webp',
          link: '/games/8',
          quantityPlaying: 365,
          rank: 8,
        },
      ],
    },
    tables: {
      selectors: [
        {
          label: 'All Bets',
          value: 'all_bets',
        },
        {
          label: 'High Rollers',
          value: 'high_rollers',
        },
        {
          label: 'Race Leaderboard',
          value: 'race_leaderboard',
        },
      ],
      headers: ['Game', 'User', 'Time', 'Bet Amount', 'Multiplier', 'Payout'],
      datasets: {
        all_bets: [
          ['Keno', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Stake Roulette', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Big Bass Halloween', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Keno', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Stake Roulette', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Big Bass Halloween', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Keno', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Stake Roulette', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Big Bass Halloween', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
        ],
        high_rollers: [
          ['Soccer', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Tennis', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Baseball', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Cricket', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Basketball', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Horse Racing', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['CS2', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['League of Legends', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
        ],
        race_leaderboard: [
          ['Horse 1', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Horse 2', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Horse 3', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Horse 4', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Horse 5', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Horse 6', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Horse 7', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Horse 8', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
        ],
      },
    },
  },
  sports: {},
  default: {
    hero: {
      userInfo: {
        userName: 'Mon1453',
        progress: { label: 'Your VIP Progress', score: '50.00%', value: 50, max: 100 },
        statut: {
          current: 'None',
          next: 'Bronze',
        },
      },
      casino: {
        image: 'casino.webp',
        label: 'Casino',
        quantityPlaying: 348,
        playing: 'playing',
        rank: 1,
        highlightColor: theme.palette.casino.main,
        url: NEXT_ROUTES.casino,
      },
      sport: {
        image: 'sport.webp',
        label: 'Sport',
        quantityPlaying: 348,
        playing: 'playing',
        rank: 2,
        highlightColor: theme.palette.sports.main,
        url: NEXT_ROUTES.sports,
      },
    },
    trendingGames: {
      title: 'Trending Games',
      items: [
        {
          src: '/assets/images/trending_games_1.webp',
          rank: 1,
          quantityPlaying: 365,
          link: '/games/1',
        },
        {
          src: '/assets/images/trending_games_2.webp',
          rank: 2,
          quantityPlaying: 365,
          link: '/games/2',
        },
        {
          src: '/assets/images/trending_games_3.webp',
          rank: 3,
          quantityPlaying: 365,
          link: '/games/3',
        },
        {
          src: '/assets/images/trending_games_4.webp',
          rank: 4,
          quantityPlaying: 365,
          link: '/games/4',
        },
        {
          src: '/assets/images/trending_games_5.webp',
          rank: 5,
          quantityPlaying: 365,
          link: '/games/5',
        },
        {
          src: '/assets/images/trending_games_6.webp',
          rank: 6,
          quantityPlaying: 365,
          link: '/games/6',
        },
        {
          src: '/assets/images/trending_games_7.webp',
          rank: 7,
          quantityPlaying: 365,
          link: '/games/7',
        },
        {
          src: '/assets/images/trending_games_8.webp',
          rank: 8,
          quantityPlaying: 365,
          link: '/games/8',
        },
      ],
    },
    trendingSports: {
      title: 'Trending Sports',
      items: [
        {
          src: '/assets/images/trending_sports_1.webp',
          rank: 1,
          quantityPlaying: 365,
          link: '/sports/1',
        },
        {
          src: '/assets/images/trending_sports_2.webp',
          rank: 2,
          quantityPlaying: 365,
          link: '/sports/2',
        },
        {
          src: '/assets/images/trending_sports_3.webp',
          rank: 3,
          quantityPlaying: 365,
          link: '/sports/3',
        },
        {
          src: '/assets/images/trending_sports_4.webp',
          rank: 4,
          quantityPlaying: 365,
          link: '/sports/4',
        },
        {
          src: '/assets/images/trending_sports_5.webp',
          rank: 5,
          quantityPlaying: 365,
          link: '/sports/5',
        },
        {
          src: '/assets/images/trending_sports_6.webp',
          rank: 6,
          quantityPlaying: 365,
          link: '/sports/6',
        },
        {
          src: '/assets/images/trending_sports_7.webp',
          rank: 7,
          quantityPlaying: 365,
          link: '/sports/7',
        },
        {
          src: '/assets/images/trending_sports_8.webp',
          rank: 8,
          quantityPlaying: 365,
          link: '/sports/8',
        },
      ],
    },
    promotions: {
      title: 'Promotions',
      items: [
        {
          chipLabel: 'Promotion',
          title: 'Team Vitality',
          subtitle: 'Kill Target Prize Pool',
          image: '/assets/images/promotions_1.webp',
          actions: [
            {
              label: 'Read More',
              link: '/promotions/team-vitality',
              variante: 'default',
            },
          ],
        },
        {
          chipLabel: 'New releases',
          title: 'Angel vs Sinner',
          subtitle: 'New Enhanced RTP game!',
          image: '/assets/images/promotions_2.webp',
          actions: [
            {
              label: 'Read More',
              link: '/promotions/angel-vs-sinner',
              variante: 'default',
            },
          ],
        },
        {
          chipLabel: 'Promotion',
          title: "Frankie's Ebor Raffle",
          subtitle: 'Share in $40,000',
          image: '/assets/images/promotions_3.webp',
          actions: [
            {
              label: 'Read More',
              link: '/promotions/frankies-ebor-raffle',
              variante: 'default',
            },
          ],
        },
      ],
    },
    tables: {
      selectors: [
        {
          label: 'Casino Bets',
          value: 'casino_bets',
        },
        {
          label: 'Sports Bets',
          value: 'sports_bets',
        },
        {
          label: 'Race Leaderboard',
          value: 'race_leaderboard',
        },
      ],
      headers: ['Game', 'User', 'Time', 'Bet Amount', 'Multiplier', 'Payout'],
      datasets: {
        casino_bets: [
          ['Keno', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Stake Roulette', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Big Bass Halloween', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Keno', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Stake Roulette', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Big Bass Halloween', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Keno', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Stake Roulette', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Big Bass Halloween', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
        ],
        sports_bets: [
          ['Soccer', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Tennis', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Baseball', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Cricket', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Basketball', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Horse Racing', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['CS2', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['League of Legends', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
        ],
        race_leaderboard: [
          ['Horse 1', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Horse 2', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Horse 3', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Horse 4', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Horse 5', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
          ['Horse 6', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'],
          ['Horse 7', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'],
          ['Horse 8', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'],
        ],
      },
    },
    faq: {
      title: 'Still Have Questions?',
      items: [
        {
          question: 'Who is Brand Name',
          answer:
            'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
        },
        {
          question: 'Is Brand Name Licensed?',
          answer:
            'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
        },
        {
          question: 'Is Betting on Brand Name Safe?',
          answer:
            'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
        },
        {
          question: 'What Currencies Can I Bet With?',
          answer:
            'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
        },
        {
          question: 'What Types of Casino Games Can I Play?',
          answer:
            'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
        },
        {
          question: 'What Sports Can I Bet On?',
          answer:
            'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
        },
        {
          question: 'How Do I Watch Live Streams?',
          answer:
            'Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.',
        },
      ],
    },
  },
} as const
