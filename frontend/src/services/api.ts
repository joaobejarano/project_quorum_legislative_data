import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Altere para a URL do seu backend
});

export const getLegislatorsStats = async () => {
  const response = await api.get('/legislators/stats');
  return response.data;
};

export const getBillsStats = async () => {
  const response = await api.get('/bills/stats');
  return response.data;
};

export const getVotesStats = async () => {
    const response = await api.get('/votes/stats');
    return response.data;
  };
