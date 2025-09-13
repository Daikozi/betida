import { FC, MouseEvent, useState } from 'react'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup, { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material/styles'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    textTransform: 'none',
    color: 'white',
    fontWeight: 700,
    border: 0,
    padding: '14px 10px',
    width: '81px',
    height: '44px',
    borderRadius: '10px',
    marginRight: '8px',
    backgroundColor: '#39373E',
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.firstButton}`]: {
    [`&.${toggleButtonGroupClasses.selected}`]: {
      background: 'linear-gradient(180deg, #26C5F3 0%, #B429F9 100%)',
    },
  },
  [`& .${toggleButtonGroupClasses.lastButton}`]: {
    marginRight: 0,
    [`&.${toggleButtonGroupClasses.selected}`]: {
      background: 'linear-gradient(180deg, #00EE6E 0%, #0C75E6 100%)',
    },
  },
}))

const ViewModeSelector: FC = () => {
  const [viewMode, setViewMode] = useState<'casino' | 'sports'>('casino')

  const handleViewModeChange = (_event: MouseEvent<HTMLElement>, newAlignment: 'casino' | 'sports' | null) => {
    if (newAlignment !== null) {
      setViewMode(newAlignment)
    }
  }
  return (
    <StyledToggleButtonGroup value={viewMode} exclusive onChange={handleViewModeChange} aria-label="view mode">
      <ToggleButton value="casino" aria-label="casino view">
        Casino
      </ToggleButton>
      <ToggleButton value="sports" aria-label="sports view">
        Sports
      </ToggleButton>
    </StyledToggleButtonGroup>
  )
}

export default ViewModeSelector
