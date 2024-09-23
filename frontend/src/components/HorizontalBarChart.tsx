import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { getLegislatorsStats } from '../services/api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedHorizontalBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Projetos Apoiados',
        data: [],
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Cor roxo claro
      },
      {
        label: 'Projetos Opostos',
        data: [],
        backgroundColor: 'rgba(75, 0, 130, 0.6)', // Cor roxo escuro
      },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      const stats = await getLegislatorsStats();
      const labels = stats.map((stat: any) => stat.name);
      const supported = stats.map((stat: any) => stat.supported_bills);
      const opposed = stats.map((stat: any) => stat.opposed_bills);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Supported Projects',
            data: supported,
            backgroundColor: 'rgba(153, 102, 255, 0.6)', // Cor roxo claro
          },
          {
            label: 'Opposing Projects',
            data: opposed,
            backgroundColor: 'rgba(75, 0, 130, 0.6)', // Cor roxo escuro
          },
        ],
      });
    }

    fetchData();
  }, []);

  // Opções de estilização do gráfico
  const options = {
    indexAxis: 'y' as const, // Gráfico horizontal
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        stacked: true, // Ativar barras empilhadas
      },
      y: {
        stacked: true, // Ativar barras empilhadas
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          padding: 10, // Aumenta o espaço entre os rótulos e as barras
        },
        grid: {
          display: false, // Remove as grades do eixo Y
        },
      },
    },
    // Aumenta o tamanho e o espaçamento das barras
    barThickness: 20, // Controla a espessura da barra
    categoryPercentage: 0.6, // Reduz o preenchimento para aumentar o espaçamento entre as barras
    barPercentage: 0.8, // Controla o tamanho relativo das barras dentro da categoria
    layout: {
      padding: {
        left: 20, // Aumenta o espaço à esquerda para os rótulos
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StackedHorizontalBarChart;
