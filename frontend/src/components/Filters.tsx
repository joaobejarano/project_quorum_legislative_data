import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { getLegislatorsStats, getBillsStats } from '../services/api'; // Verifique se o caminho está correto

const Filters = () => {
  const [selectedLegislator, setSelectedLegislator] = useState('');
  const [selectedBill, setSelectedBill] = useState('');
  const [legislators, setLegislators] = useState([]);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    // Buscar os legisladores e os projetos de lei quando o componente é montado
    async function fetchData() {
      const legislatorsData = await getLegislatorsStats();
      setLegislators(legislatorsData);

      const billsData = await getBillsStats();
      setBills(billsData);
    }

    fetchData();
  }, []);

  const handleLegislatorChange = (event: any) => {
    setSelectedLegislator(event.target.value);
    // Lógica de filtragem pode ser adicionada aqui
  };

  const handleBillChange = (event: any) => {
    setSelectedBill(event.target.value);
    // Lógica de filtragem pode ser adicionada aqui
  };

  return (
    <Grid container spacing={4}>
      {/* Filtro de Legisladores */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="legislator-filter-label">Filtrar por Legislador</InputLabel>
          <Select
            labelId="legislator-filter-label"
            value={selectedLegislator}
            label="Filtrar por Legislador"
            onChange={handleLegislatorChange}
          >
            {legislators.map((legislator: any) => (
              <MenuItem key={legislator.id} value={legislator.id}>
                {legislator.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Filtro de Projetos de Lei */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="bill-filter-label">Filtrar por Projeto de Lei</InputLabel>
          <Select
            labelId="bill-filter-label"
            value={selectedBill}
            label="Filtrar por Projeto de Lei"
            onChange={handleBillChange}
          >
            {bills.map((bill: any) => (
              <MenuItem key={bill.id} value={bill.id}>
                {bill.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Filters;
