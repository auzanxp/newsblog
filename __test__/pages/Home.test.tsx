import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, test, vitest } from 'vitest';
import HomePage from '../../src/pages/Home';
import axios from 'axios';


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

describe('HomePage', () => {
    test('renders correctly with news data', async () => {
        const { container } = render(<HomePage />);
        await waitFor(() => {
            const combinedText = container.textContent;
            expect(combinedText).toMatch('Top Headlines');
            expect(combinedText).toMatch('Sample News 2');
        });
    });

    test('renders error message on data fetch failure', async () => {
        const consoleErrorMock = vitest.spyOn(console, 'error');
        const axiosGetMock = vitest.spyOn(axios, 'get');
        axiosGetMock.mockRejectedValueOnce(new Error('Data fetching error'));

        render(<HomePage />);
        await waitFor(() => {
            expect(consoleErrorMock).toHaveBeenCalledWith('Error fetching news data:', expect.any(Error));
        });
    });
});
