import { TableCell, TableRow, tableCellClasses, tableRowClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    fontSize: 14,
    lineHeight: 1,
    padding: '14px 16px',
    border: 'none',
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.white[1],
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&.${tableRowClasses.root}`]: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.backgroundLevels[1],
    },
  },

  [`&.${tableRowClasses.head}`]: {
    backgroundColor: theme.palette.backgroundLevels[3] + ' !important',
  },
}))

export { StyledTableCell, StyledTableRow }
