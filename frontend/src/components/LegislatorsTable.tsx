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
          <TableRow>
            <TableCell>Legislador</TableCell>
            <TableCell>Projetos Apoiados</TableCell>
            <TableCell>Projetos Opostos</TableCell>
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
