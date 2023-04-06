// src/hooks/useMerchandiseList.tsx

import { selector, useRecoilValue } from 'recoil';
import { fetchMerchandiseList } from '../fetcher/merchandise';

interface Merchandise {
  title: string;
  description: string;
  price: number;
  stock: number;
  img: string;
}

const merchandiseListQuery = selector({
  key: 'merchandiseListQuery',
  get: async () => {
    const data = await fetchMerchandiseList();
    return data.map(({ name, description, price, stock, img }) => ({
      title: name,
      description,
      price,
      stock,
      img,
    }));
  },
});

export const useMerchandiseList = (): Merchandise[] => {
  const merchandiseList = useRecoilValue(merchandiseListQuery);
  return merchandiseList;
};
