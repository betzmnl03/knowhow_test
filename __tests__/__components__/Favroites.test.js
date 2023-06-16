import React from 'react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Favorites from '../../src/pages/Favorites';
import { mockGifs } from '../__mocks__/testData';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Favorites', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  it('renders the "My Saved GIFs" text', () => {
    render(
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>
    );

    const savedGifsText = screen.getByText('My Saved GIFS');
    expect(savedGifsText).toBeInTheDocument();
  });

  it('calls navigate with HOME route when the back arrow is clicked', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>
    );

    const backArrow = screen.getByTestId('back-arrow');
    fireEvent.click(backArrow);

    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('renders the GifsContainer component with the favorites as prop', () => {
    localStorage.setItem('favorites', JSON.stringify(mockGifs));

    render(
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>
    );

    const gifsContainer = screen.getByTestId('gifs-container');

    expect(gifsContainer).toBeInTheDocument();
    const gifCards = screen.getAllByTestId('gif-card');
    expect(gifCards.length).toBe(mockGifs.length);
  });
});
