import { FC } from 'react'

import searchIcon from '@/assets/svg/search.svg'
import { InputAdornment, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image, { StaticImageData } from 'next/image'

const SearchBar: FC = () => {
  const CustomTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
      color: '#FFFFFF',
      backgroundColor: '#39373E',
      borderRadius: 10,
      fontSize: 14,
      height: 40,
      border: 'none',
      '& input': {
        color: '#FFFFFF',
      },
    },
  }))

  return (
    <CustomTextField
      id="outlined-basic"
      variant="outlined"
      placeholder="Search your game"
      aria-label="Rechercher un jeu"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Image src={searchIcon as StaticImageData} alt="search" />
            </InputAdornment>
          ),
        },
      }}
      fullWidth
    />
  )
}

export default SearchBar
