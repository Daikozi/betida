import { FC, MouseEvent } from 'react'

import { ToggleButtonGroupProps } from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton'
import { usePathname, useRouter } from 'next/navigation'

import { ToggleButtonGroup } from './ViewModeSelector.styles'

const ViewModeSelector: FC<ToggleButtonGroupProps> = (props) => {
  const router = useRouter()
  const pathname = usePathname()

  const displayMode = pathname.includes('/casino') ? 'casino' : pathname.includes('/sports') ? 'sports' : null

  const handleViewModeChange = (_event: MouseEvent<HTMLElement>, newDisplayMode: 'casino' | 'sports' | null) => {
    if (newDisplayMode) {
      router.push(`/${newDisplayMode}`)
    } else {
      router.push('/')
    }
  }

  return (
    <ToggleButtonGroup value={displayMode} exclusive onChange={handleViewModeChange} aria-label="view mode" {...props}>
      <ToggleButton value="casino" aria-label="casino view">
        Casino
      </ToggleButton>
      <ToggleButton value="sports" aria-label="sports view">
        Sports
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ViewModeSelector
