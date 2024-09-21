import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { getLegislatorsStats } from '../services/api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Projetos Apoiados',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Projetos Opostos',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
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
            label: 'Projetos Apoiados',
            data: supported,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'Projetos Opostos',
            data: opposed,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
        ],
      });
    }

    fetchData();
  }, []);

  return <Bar data={chartData} options={{ indexAxis: 'y' }} />;
};

export default HorizontalBarChart;
