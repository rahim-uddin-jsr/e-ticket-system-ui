import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, serviceFee, subTotal) {
  return { name, calories, fat, carbs, protein, serviceFee, subTotal };
}

const rows = [
  createData("Adult x1", 4090, 275, 4815, 1, 4815, 0),
  createData("Child x1", 4090, 275, 4815, 1, 4815, 0),
  createData("Infant x1", 4090, 275, 4815, 1, 4815, 0),
];

const FareSummery = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Pax Type </StyledTableCell>
            <StyledTableCell align="right">Base Fare(BDT)</StyledTableCell>
            <StyledTableCell align="right">Tax (BDT)</StyledTableCell>
            <StyledTableCell align="right">Total (BDT)</StyledTableCell>
            <StyledTableCell align="right">Pax Count</StyledTableCell>
            <StyledTableCell align="right">Service Fee (BDT)</StyledTableCell>
            <StyledTableCell align="right">Sub Total (BDT)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories} TK</StyledTableCell>
              <StyledTableCell align="right">{row.fat} TK</StyledTableCell>
              <StyledTableCell align="right">{row.carbs} TK</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">
                {row.serviceFee} BDT
              </StyledTableCell>
              <StyledTableCell align="right">{row.subTotal} TK</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FareSummery;
