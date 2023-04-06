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
    return data.map((item) => ({
      ...item,
      title: item.name,
    }));
  },
});

export const useMerchandiseList = (): Merchandise[] => {
  const merchandiseList = useRecoilValue(merchandiseListQuery);
  return merchandiseList;
};
