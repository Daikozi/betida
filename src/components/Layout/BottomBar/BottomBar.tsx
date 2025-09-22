'use client'

import { FC, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useDrawerStore } from '@/store/drawerStore'

import { bottomBarContent } from './BottomBar.content'
import { BottomNavigation, BottomNavigationAction, Box } from './BottomBar.styles'

const BottomBar: FC = () => {
  const { setOpen } = useDrawerStore()
  const router = useRouter()

  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleNavigationChange = (value: string | null) => {
    setSelectedValue(value)
    if (value === 'browse') {
      setOpen(true)
      return
    }

    setOpen(false)
    if (value === 'casino' || value === 'sports') {
      router.push(`/${value}`)
    } else {
      router.push(`/`)
    }
  }

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={selectedValue}
        onChange={(_event, newValue: string | null) => handleNavigationChange(newValue)}
      >
        {bottomBarContent.map(({ label, value, icon: { selected, unselected } }) => (
          <BottomNavigationAction
            key={value}
            label={label}
            value={value}
            icon={
              <Image
                src={selectedValue === value ? selected : unselected}
                alt={`${label} icon`}
                width={24}
                height={24}
              />
            }
          />
        ))}
      </BottomNavigation>
    </Box>
  )
}

export default BottomBar
