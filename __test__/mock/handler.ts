import { rest } from 'msw';

export const newsApiHandler = [
  rest.get('https://newsapi.org/v2/top-headlines', (req, res, ctx) => {
    const apiKey = req.url.searchParams.get('apiKey');
    const country = req.url.searchParams.get('country');

    if (!apiKey || !country) {
      return res(ctx.status(400), ctx.json({ message: 'Bad request' }));
    }

    const newsResponse = {
      articles: [
        {
          title: 'Sample News 1',
          urlToImage: 'https://example.com/image1.jpg',
          description: 'This is a sample news article 1.',
          author: 'John Doe',
          publishedAt: '2023-08-10T10:00:00Z',
          url: 'https://example.com/news1',
        },
        {
          title: 'Sample News 2',
          urlToImage: 'https://example.com/image2.jpg',
          description: 'This is a sample news article 2.',
          author: 'Jane Smith',
          publishedAt: '2023-08-11T12:00:00Z',
          url: 'https://example.com/news2',
        },
      ],
    };

    return res(ctx.status(200), ctx.json(newsResponse));
  }),
];
