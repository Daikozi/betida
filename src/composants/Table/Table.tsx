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

type Currency = 'bitcoin' | 'etherium' | 'coin'
type DataRow = readonly [string, string, string, string, string, string, Currency]

type Tables = {
  selectors: readonly { label: string; value: string }[]
  headers: readonly string[]
  datasets: Readonly<Record<string, readonly DataRow[]>>
}

type TableProps = {
  tableView: 'casino_bets' | 'sports_bets' | 'race_leaderboard' | 'all_bets' | 'high_rollers'
  tables: Tables
}

const Table: FC<TableProps> = ({ tableView, tables }) => (
  <TableContainer sx={{ mb: '36px' }}>
    <MUITable aria-label="simple table">
      <TableHead>
        <StyledTableRow>
          {tables.headers.map((header, index) => (
            <StyledTableCell
              key={header}
              align={index === tables.headers.length - 1 ? 'right' : 'left'}
              sx={{
                display: {
                  xs: index !== 0 && index !== tables.headers.length - 1 ? 'none' : 'table-cell',
                  md: 'table-cell',
                },
              }}
            >
              {header}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {tables.datasets[tableView].map((row, index) => {
          const [...cells] = row.slice(0, -1)
          const currency = row[row.length - 1]

          return (
            <StyledTableRow
              key={`${row.join('-')} ${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {cells.map((cell, index) => (
                <StyledTableCell
                  key={`${cell}-${index}`}
                  component="th"
                  scope="row"
                  align={index === cells.length - 1 ? 'right' : 'left'}
                  sx={{
                    display: {
                      xs: index !== 0 && index !== cells.length - 1 ? 'none' : 'table-cell',
                      md: 'table-cell',
                    },
                    color:
                      (index === 3 || index === cells.length) && cell.startsWith('-') ? 'text.secondary' : '#20AD65',
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing="10px"
                    justifyContent={index === cells.length - 1 ? 'flex-end' : 'flex-start'}
                  >
                    {(index === 0 || index === 1) && (
                      <Image src={dummy as StaticImageData} alt="Game Icon" width={24} height={24} />
                    )}
                    <Box>{cell}</Box>
                    {(index === 3 || index === 5) && (
                      <Image src={getCurrencyIcon(currency)} alt="Game Icon" width={24} height={24} />
                    )}
                  </Stack>
                </StyledTableCell>
              ))}
            </StyledTableRow>
          )
        })}
      </TableBody>
    </MUITable>
  </TableContainer>
)

export default Table
