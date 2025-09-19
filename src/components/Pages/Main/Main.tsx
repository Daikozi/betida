'use client'

import { FC } from 'react'

import { useDisplayMode } from '@/store/displayModeStore'

import Casino from './Casino'
import Default from './Default'
import Sports from './Sports'

const Main: FC = () => {
  const { displayMode } = useDisplayMode()

  if (!displayMode) {
    return <Default />
  }

  return displayMode === 'casino' ? <Casino /> : <Sports />
}

export default Main
