import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { getLegislatorsStats, getBillsStats, getVotesStats } from '../services/api';

const BigNumbers = () => {
  const [totalLegislators, setTotalLegislators] = useState(0);
  const [totalBills, setTotalBills] = useState(0);
  const [totalSupportedVotes, setTotalSupportedVotes] = useState(0);
  const [totalOpposedVotes, setTotalOpposedVotes] = useState(0);

  useEffect(() => {
    // Fetch data when component mounts
    async function fetchData() {
      const legislators = await getLegislatorsStats();
      setTotalLegislators(legislators.length);

      const bills = await getBillsStats();
      setTotalBills(bills.length);

      const votes = await getVotesStats(); // Pegar os dados de votos
      setTotalSupportedVotes(votes.supported_votes); // Acessar diretamente supported_votes
      setTotalOpposedVotes(votes.opposed_votes); // Acessar diretamente opposed_votes
    }

    fetchData();
  }, []);

  return (
    <Grid container spacing={4}>
      {/* Retângulo 1 - Total de Legisladores */}
      <Grid item xs={3}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6" color="textSecondary">
            Total Legislators
          </Typography>
          <Typography variant="h4" color='rgba(153, 102, 255, 0.6)'>
            {totalLegislators}
          </Typography>
        </Paper>
      </Grid>

      {/* Retângulo 2 - Total de Projetos de Lei */}
      <Grid item xs={3}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6" color="textSecondary">
            Total Bills
          </Typography>
          <Typography variant="h4" color='rgba(153, 102, 255, 0.6)'>
            {totalBills}
          </Typography>
        </Paper>
      </Grid>

      {/* Retângulo 3 - Total de Votos Apoiados */}
      <Grid item xs={3}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6" color="textSecondary">
            Total Votes Supported
          </Typography>
          <Typography variant="h4" color='rgba(153, 102, 255, 0.6)'>
            {totalSupportedVotes}
          </Typography>
        </Paper>
      </Grid>

      {/* Retângulo 4 - Total de Votos Opostos */}
      <Grid item xs={3}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6" color="textSecondary">
            Total Opposed Votes
          </Typography>
          <Typography variant="h4" color='rgba(153, 102, 255, 0.6)'>
            {totalOpposedVotes}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BigNumbers;
