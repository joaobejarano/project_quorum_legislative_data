import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { getBillsStats } from '../services/api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VerticalBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Apoiadores',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Opositores',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
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
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'Opositores',
            data: opposers,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
        ],
      });
    }

    fetchData();
  }, []);

  return <Bar data={chartData} />;
};

export default VerticalBarChart;
