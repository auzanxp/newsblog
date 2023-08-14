import React from 'react';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Banner from '../../src/components/banner/Banner';

const mockNews = [
  {
    title: 'Sample News',
    urlToImage: 'https://example.com/image.jpg',
    description: 'This is a sample news article.',
    url: 'https://example.com/news',
  },
];

describe('Banner', () => {
  test('renders correctly with news data', () => {
    const { getByText, getByAltText } = render(<Banner data={mockNews} />);

    expect(getByText('Top Headlines')).toBeTruthy();
    expect(getByText('Sample News')).toBeTruthy();
    expect(getByAltText('Sample News')).toBeTruthy();
    expect(getByText('This is a sample news article.')).toBeTruthy();
  });

  test('does not render without news data', () => {
    const { queryByText, queryByAltText } = render(<Banner data={[]} />);

    expect(queryByText('Top Headlines')).toBeFalsy();
    expect(queryByText('Sample News')).toBeFalsy();
    expect(queryByAltText('Sample News')).toBeFalsy();
    expect(queryByText('This is a sample news article.')).toBeFalsy();
  });
});
