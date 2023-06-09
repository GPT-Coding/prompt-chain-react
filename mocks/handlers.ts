// mocks/handlers

import { rest } from 'msw';

export const handlers = [
  rest.get('/portal/api/hello/:name', (req, res, ctx) => {
    return res(
      ctx.json({
        msg: 'Hello!',
        timestamp: Date.now().valueOf(),
        name: req.params.name,
      })
    );
  }),

  rest.get('/portal/api/merchandises', (req, res, ctx) => {
    return res(
      ctx.json([
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
      ])
    );
  }),
  rest.get('/portal/api/merchandises/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: req.params.id,
        title: '可口可乐',
        description: '最好喝的可乐',
        price: 10,
        stock: 3,
        imgs: [
          'https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210830113949/A1156_Coke_Pet_500_24P-100x100.jpg',
        ],
        comments: ['Great taste!', 'Love it!'],
      })
    );
  }),
];
