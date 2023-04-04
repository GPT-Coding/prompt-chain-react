import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.example.com/products', (req, res, ctx) => {
    return res(
      ctx.json([
        /* Your mock data here */
      ])
    );
  }),
];
