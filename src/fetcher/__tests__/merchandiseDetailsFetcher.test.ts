// src/fetcher/__tests__/merchandiseDetailsFetcher.test.ts

import { fetchMerchandiseDetails } from '../merchandiseDetailsFetcher';

describe('fetchMerchandiseDetails', () => {
  const mockId = '123';
  const mockMerchandise = {
    id: '123',
    title: '可口可乐',
    description: '最好喝的可乐',
    price: 10,
    stock: 3,
    imgs: [
      'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
    ],
    comments: ['Great taste!', 'Love it!'],
  };
  it('should fetch the merchandise item with the correct id', async () => {
    const result = await fetchMerchandiseDetails(mockId);

    expect(result).toEqual(mockMerchandise);
  });
});
