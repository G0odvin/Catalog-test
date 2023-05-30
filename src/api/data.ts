import { Phones } from '../types/Phones';
import { client } from '../utils/fetchData';

export const getData = () => {
  return client.get<Phones[]>();
};

