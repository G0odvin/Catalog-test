import { Phones } from '../types/Phones';
import { client } from '../utils/fetchData';

export const getPhones = () => {
  return client.get<Phones[]>();
};

