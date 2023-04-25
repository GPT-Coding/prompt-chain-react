// src/fetcher/merchandise.ts

import FetchRequest from '../infra/fetchRequest';

interface Merchandise {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  img: string;
}

export const fetchMerchandiseList = async (): Promise<Merchandise[]> => {
  const fetchRequest = new FetchRequest();
  return await fetchRequest.get('/merchandises');
};
