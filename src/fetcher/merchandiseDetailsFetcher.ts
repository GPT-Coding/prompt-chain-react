// src/fetcher/merchandiseDetailsFetcher.ts

import FetchRequest from '../infra/fetchRequest';

interface MerchandiseDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  imgs: string[];
  comments: string[];
}

export const fetchMerchandiseDetails = async (
  id: string
): Promise<MerchandiseDetails> => {
  const fetchRequest = new FetchRequest();
  return await fetchRequest.get(`/merchandises/${id}`);
};
