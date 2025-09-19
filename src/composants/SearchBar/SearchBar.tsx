import { FC } from 'react'

import searchIcon from '@/assets/svg/search.svg'
import { InputAdornment, TextFieldProps } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

import { TextField } from './SearchBar.styles'

const SearchBar: FC<TextFieldProps> = (props) => (
  <TextField
    id="outlined-basic"
    variant="outlined"
    placeholder="Search your game"
    aria-label="Search your game"
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
    {...props}
  />
)

export default SearchBar
