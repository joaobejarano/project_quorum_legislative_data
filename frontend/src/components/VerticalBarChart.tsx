import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { getBillsStats } from '../services/api';

// Registrar componentes e plugins necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const VerticalBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Apoiadores',
        data: [],
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Cor roxo claro
        borderRadius: 10, // Barras com pontas arredondadas
      },
      {
        label: 'Opositores',
        data: [],
        backgroundColor: 'rgba(75, 0, 130, 0.6)', // Cor roxo escuro
        borderRadius: 10, // Barras com pontas arredondadas
      },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      const stats = await getBillsStats();
      const labels = stats.map((stat: any) => stat.title);
      const supporters = stats.map((stat: any) => stat.supporters);
      const opposers = stats.map((stat: any) => stat.opposers);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Apoiadores',
            data: supporters,
            backgroundColor: 'rgba(153, 102, 255, 0.6)', // Cor roxo claro
            borderRadius: 10, // Barras com pontas arredondadas
          },
          {
            label: 'Opositores',
            data: opposers,
            backgroundColor: 'rgba(75, 0, 130, 0.6)', // Cor roxo escuro
            borderRadius: 10, // Barras com pontas arredondadas
          },
        ],
      });
    }

    fetchData();
  }, []);

  // Opções de estilização do gráfico
  const options = {
    plugins: {
      legend: {
        position: 'top' as const, // Definir explicitamente como constante
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        anchor: 'end' as const,
        align: 'top' as const,
        formatter: (value: number) => value, // Mostra o valor no final da barra
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false, // Não pula labels grandes
          maxRotation: 0, // Não rotaciona as labels
          minRotation: 0,
        },
        grid: {
          display: false, // Remove as grades de fundo do eixo X
        },
      },
      y: {
        beginAtZero: true, // Garantir que o eixo Y começa do zero
        ticks: {
          precision: 0, // Mostra números inteiros
        },
        grid: {
          display: false, // Remove as grades de fundo do eixo Y
        },
      },
    },
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}> {/* Fundo branco com cantos arredondados */}
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default VerticalBarChart;
