// src/fetcher/__tests__/merchandise.test.ts

import { fetchMerchandiseList } from '../merchandise';

describe('fetchMerchandiseList', () => {
  it('should return the correct merchandise list data', async () => {
    const data = await fetchMerchandiseList();

    expect(data).toEqual([
      {
        id: '123',
        name: '可口可乐',
        description: '最好喝的可乐',
        price: 10,
        stock: 3,
        img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
      },
      {
        id: '223',
        name: '七喜',
        description: '最好喝的可乐',
        price: 15,
        stock: 3,
        img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
      },
      {
        id: '323',
        name: '芬达',
        description: '最好喝的可乐',
        price: 20,
        stock: 3,
        img: 'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
      },
    ]);
  });
});
