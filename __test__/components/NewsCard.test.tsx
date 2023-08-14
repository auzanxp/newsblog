import React from 'react';
import { render} from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';
import NewsCard from '../../src/components/newsCard/NewsCard';

window.matchMedia = vitest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vitest.fn(), 
  removeListener: vitest.fn(), 
  addEventListener: vitest.fn(), 
  removeEventListener: vitest.fn(), 
  dispatchEvent: vitest.fn(),
}));

const mockNewsList = [
  {
    title: 'Test News 1',
    urlToImage: 'image-url',
    description: 'Test description 1',
    author: 'Test Author 1',
    publishedAt: '2023-08-12',
    url: 'test-url-1',
  },
  {
    title: 'Test News 2',
    urlToImage: null, 
    description: 'Test description 2',
    author: null, 
    publishedAt: '2023-08-13',
    url: 'test-url-2',
  },
];

describe('NewsCard component', () => {
  test('renders correctly with news data', () => {
    const { getByText } = render(<NewsCard newsList={mockNewsList} />);
    
    expect(getByText('Test News 1')).toBeTruthy();
    expect(getByText('Test News 2')).toBeTruthy();
  });
});
