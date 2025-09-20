'use client'

import { FC } from 'react'

import { useUserGetExemple } from '@/hooks/userGetExemple'
import { useDisplayMode } from '@/store/displayModeStore'

import Casino from './Casino'
import Default from './Default'
import Sports from './Sports'

const Main: FC = () => {
  const { displayMode } = useDisplayMode()

  useUserGetExemple()

  if (!displayMode) {
    return <Default />
  }

  return displayMode === 'casino' ? <Casino /> : <Sports />
}

export default Main
