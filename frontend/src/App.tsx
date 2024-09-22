import React from 'react';
import HorizontalBarChart from './components/HorizontalBarChart';
import VerticalBarChart from './components/VerticalBarChart';
import LegislatorsTable from './components/LegislatorsTable';
import BillsTable from './components/BillsTable';
import Filters from './components/Filters';  // A ser criado
import BigNumbers from './components/BigNumbers';  // A ser criado
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}> {/* Fundo cinza claro */}
      {/* Título da Página */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#4b0082', fontWeight: 'bold' }}>Relatório de Projetos Legislativos</h1>
      </div>

      <Container>
{/* 
        <div style={{ marginBottom: '40px' }}>
          <Filters />
        </div> */}

   
        <div style={{ marginBottom: '40px' }}>
          <BigNumbers />
        </div> 

        {/* Parte 3 - Tabela de Legisladores */}
        <div style={{ marginBottom: '40px' }}>
          <LegislatorsTable />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <HorizontalBarChart />
        </div>

        {/* Parte 5 - Tabela de Projetos de Lei */}
        {/* <div style={{ marginBottom: '40px' }}>
          <BillsTable />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <VerticalBarChart />
        </div> */}

        {/* Parte 4 - Gráficos (HorizontalBarChart e VerticalBarChart) */}
        <Grid container spacing={4} style={{ marginBottom: '40px' }}>
          <Grid item xs={6}>
            <VerticalBarChart />
          </Grid>
          <Grid item xs={6}>
            <BillsTable />
          </Grid>
        </Grid>


      </Container>
    </div>
  );
}

export default App;
