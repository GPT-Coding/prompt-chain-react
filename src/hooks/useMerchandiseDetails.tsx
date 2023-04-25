// src/hooks/useMerchandiseDetails.tsx
import { selectorFamily, useRecoilValue } from 'recoil';
import { fetchMerchandiseDetails } from '../fetcher/merchandiseDetailsFetcher';

const merchandiseDetailQuery = selectorFamily({
  key: 'merchandiseDetailQuery',
  get: (id: string) => async () => {
    try {
      const data = await fetchMerchandiseDetails(id);
      return { data, error: null };
    } catch (error) {
      return { data: null, error: (error as Error).message };
    }
  },
});

export const useMerchandiseDetails = (id: string) => {
  const { data, error } = useRecoilValue(merchandiseDetailQuery(id));
  return { merchandiseDetail: data, error };
};
