import { api } from './api';

export const getAll = async () => {
  const response = await api.get('/horoscope/test');
  return response;
}