import { FC } from 'react'

import bitcoin from '@/assets/svg/bitcoin.svg'
import coin from '@/assets/svg/coin.svg'
import dummy from '@/assets/svg/dummy.svg'
import etherium from '@/assets/svg/etherium.svg'
import {
  Box,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
  tableRowClasses,
} from '@mui/material'
import MUITable from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import Image, { StaticImageData } from 'next/image'

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.root}`]: {
    fontSize: 16,
    padding: '14px 16px',
    border: 'none',
  },
  [`&.${tableCellClasses.body}`]: {
    color: '#FFFFFF',
  },
}))

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#252427',
    },
  },

  [`&.${tableRowClasses.head}`]: {
    backgroundColor: '#0F0F10 !important',
  },
}))

const getCurrencyIcon = (currency: string): StaticImageData => {
  switch (currency) {
    case 'bitcoin':
      return bitcoin as StaticImageData
    case 'etherium':
      return etherium as StaticImageData
    default:
      return coin as StaticImageData
  }
}

const createData = (
  game: string,
  user: string,
  time: string,
  betAmount: string,
  multiplier: string,
  payout: string,
  currency = 'bitcoin',
) => ({ game, user, time, betAmount, multiplier, payout, currency })

const rows = [
  createData('Keno', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'),
  createData('Stake Roulette', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'),
  createData('Big Bass Halloween', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'),
  createData('Keno', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'),
  createData('Stake Roulette', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'),
  createData('Big Bass Halloween', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'),
  createData('Keno', 'Hidden', '10:31 PM', '$1,995.30', '10:31 PM', '-$1,995.30', 'bitcoin'),
  createData('Stake Roulette', 'Hidden', '10:31 PM', '$4,800.00', '10:31 PM', '$28,800.00', 'etherium'),
  createData('Big Bass Halloween', 'Hidden', '10:31 PM', '$1,172.19', '10:31 PM', '-$586.10', 'coin'),
]

const Table: FC = () => (
  <TableContainer sx={{ mb: '36px' }}>
    <MUITable aria-label="simple table">
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>Game</StyledTableCell>
          <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>User</StyledTableCell>
          <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Time</StyledTableCell>
          <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Bet Amount</StyledTableCell>
          <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Multiplier</StyledTableCell>
          <StyledTableCell align="right">Payout</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <StyledTableRow key={`${row.game} ${index}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <StyledTableCell component="th" scope="row">
              <Stack direction="row" alignItems="center" spacing="10px">
                <Image src={dummy as StaticImageData} alt="Game Icon" width={24} height={24} />
                <Box>{row.game}</Box>
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
              <Stack direction="row" alignItems="center" spacing="10px">
                <Image src={dummy as StaticImageData} alt="Game Icon" width={24} height={24} />
                <Box>{row.user}</Box>
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>{row.time}</StyledTableCell>
            <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
              <Stack direction="row" alignItems="center" spacing="10px">
                <Box>{row.betAmount}</Box>
                <Image src={getCurrencyIcon(row.currency)} alt="Game Icon" width={24} height={24} />
              </Stack>
            </StyledTableCell>
            <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>{row.multiplier}</StyledTableCell>
            <StyledTableCell align="right">
              <Stack direction="row" alignItems="center" spacing="10px" justifyContent="flex-end">
                <Typography sx={{ lineHeight: 1 }} color={row.payout.startsWith('-') ? 'text.secondary' : '#20AD65'}>
                  {row.payout}
                </Typography>
                <Image src={getCurrencyIcon(row.currency)} alt="Game Icon" width={24} height={24} />
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </MUITable>
  </TableContainer>
)

export default Table
