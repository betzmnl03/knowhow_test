import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import GifsContainer from '../../src/components/GifsContainer';
import { mockGifs } from '../__mocks__/testData';

jest.mock('../../src/services/giphyService', () => ({
  searchGifs: jest.fn(),
  trendingGifs: mockResolvedValue(mockGifs)
}));

describe('GifsContainer', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders GIF cards', () => {
    render(
      <MemoryRouter>
        <GifsContainer gifs={mockGifs} setFavorites={() => {}} />
      </MemoryRouter>
    );

    const gifCards = screen.getAllByTestId('gif-card');

    expect(gifCards.length).toBe(mockGifs.length);
  });

  it('displays message when no GIFs are found', () => {
    render(
      <MemoryRouter>
        <GifsContainer gifs={[]} setFavorites={() => {}} />
      </MemoryRouter>
    );
    const noGifsMessage = screen.getByText('No GIFs Found');
    expect(noGifsMessage).toBeInTheDocument();
  });

  it('renders "No Saved GIFs" when on favorites page', () => {
    const gifs = [];
    const { history } = render(
      <MemoryRouter initialEntries={['/favorites']}>
        <GifsContainer gifs={gifs} setFavorites={() => {}} />
      </MemoryRouter>
    );

    const savedGifsText = screen.getByText('No Saved GIFs');
    expect(savedGifsText).toBeInTheDocument();
  });

  it('checks if GIF is stored in local storage when favorited', () => {
    render(
      <MemoryRouter>
        <GifsContainer gifs={mockGifs} setFavorites={() => {}} />
      </MemoryRouter>
    );

    const favoriteIcons = screen.getAllByTestId('favorite-icon');
    // favorite the first gif
    fireEvent.click(favoriteIcons[0]);

    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    expect(storedFavorites).toContainEqual(mockGifs[0]);
  });

  it('checks if GIF is removed from local storage when unfavorited', () => {
    render(
      <MemoryRouter>
        <GifsContainer gifs={mockGifs} setFavorites={() => {}} />
      </MemoryRouter>
    );

    const favoriteIcons = screen.getAllByTestId('favorite-icon');
    // favorite the first gif
    fireEvent.click(favoriteIcons[0]);

    // unfavorite the gif
    fireEvent.click(favoriteIcons[0]);
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    expect(favorites).toEqual([]);
  });
});
