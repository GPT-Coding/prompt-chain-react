// src/hooks/__tests__/useMerchandiseList.test.tsx

import { renderHook, waitFor } from '../../../tests/test-utils';
import { useMerchandiseList } from '../useMerchandiseList';
import { fetchMerchandiseList } from '../../fetcher/merchandise';

// Mock fetchMerchandiseList
jest.mock('../../fetcher/merchandise');
const mockedFetchMerchandiseList = fetchMerchandiseList as jest.Mock;

describe('useMerchandiseList hook', () => {
  it('returns the correct list of merchandise data from the service', async () => {
    const mockData = [
      {
        name: '可口可乐',
        description: '最好喝的可乐',
        price: 10,
        stock: 3,
        img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
      },
      {
        name: '七喜',
        description: '最好喝的可乐',
        price: 15,
        stock: 3,
        img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
      },
      {
        name: '芬达',
        description: '最好喝的可乐',
        price: 20,
        stock: 3,
        img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
      },
    ];

    // Mock the fetchMerchandiseList response
    mockedFetchMerchandiseList.mockResolvedValue(mockData);

    const { result } = renderHook(() => useMerchandiseList());
    waitFor(() => {
      expect(result.current).toEqual([
        {
          title: '可口可乐',
          description: '最好喝的可乐',
          price: 10,
          stock: 3,
          img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
        },
        {
          title: '七喜',
          description: '最好喝的可乐',
          price: 15,
          stock: 3,
          img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
        },
        {
          title: '芬达',
          description: '最好喝的可乐',
          price: 20,
          stock: 3,
          img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
        },
      ]);
    });
  });
});
