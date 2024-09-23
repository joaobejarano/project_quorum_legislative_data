import { useEffect, useState } from 'react';
import { getBillsStats } from '../services/api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BillsTable = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBillsStats();
      setBills(data);
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#4b0082' }}> {/* Fundo roxo escuro */}
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Bill</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Sponsor</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Legislators Supporting</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Opposing Legislators</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.map((bill: any) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.title}</TableCell>
              <TableCell>{bill.sponsor}</TableCell>
              <TableCell>{bill.supporters}</TableCell>
              <TableCell>{bill.opposers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillsTable;
