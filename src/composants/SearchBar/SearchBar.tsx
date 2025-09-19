import { FC } from 'react'

import { InputAdornment, TextFieldProps } from '@mui/material'
import Image from 'next/image'

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
            <Image src="/assets/svg/search.svg" alt="search" width={24} height={24} />
          </InputAdornment>
        ),
      },
    }}
    fullWidth
    {...props}
  />
)

export default SearchBar
