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

  rest.get('/portal/api/products', (req, res, ctx) => {
    return res(
      ctx.json([
        /* Your mock data here */
      ])
    );
  }),
];
