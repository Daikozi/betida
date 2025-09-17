import { FC, MouseEvent } from 'react'

import { useDisplayMode } from '@/store/displayModeStore'
import {
  ToggleButtonGroup as MUIToggleButtonGroup,
  ToggleButtonGroupProps,
  toggleButtonGroupClasses,
} from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton'
import { styled } from '@mui/material/styles'

const ToggleButtonGroup = styled(MUIToggleButtonGroup)(() => ({
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

const ViewModeSelector: FC<ToggleButtonGroupProps> = (props) => {
  const { displayMode, setDisplayMode } = useDisplayMode()

  const handleViewModeChange = (_event: MouseEvent<HTMLElement>, newDisplayMode: 'casino' | 'sports' | null) => {
    setDisplayMode(newDisplayMode)
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
