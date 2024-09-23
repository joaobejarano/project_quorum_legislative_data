import { useEffect, useState } from 'react';
import { getLegislatorsStats } from '../services/api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const LegislatorsTable = () => {
  const [legislators, setLegislators] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getLegislatorsStats();
      setLegislators(data);
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#4b0082' }}> {/* Fundo roxo escuro */}
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Legislator</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Supported Projects</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Opposing Projects</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {legislators.map((legislator: any) => (
            <TableRow key={legislator.id}>
              <TableCell>{legislator.name}</TableCell>
              <TableCell>{legislator.supported_bills}</TableCell>
              <TableCell>{legislator.opposed_bills}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LegislatorsTable;
