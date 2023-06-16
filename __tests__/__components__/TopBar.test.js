import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopBar from '../../src/components/TopBar';

describe('TopBar', () => {
  it('calls handleSearch with the entered search field value', () => {
    const handleSearchMock = jest.fn();
    render(<TopBar handleSearch={handleSearchMock} gotoSavedGifs={() => {}} />);

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: 'Search for GIF' });

    const searchQuery = 'cats';
    fireEvent.change(searchInput, { target: { value: searchQuery } });
    fireEvent.click(searchButton);

    expect(handleSearchMock).toHaveBeenCalledWith(searchQuery);
  });

  it('calls gotoSavedGifs when "My Saved Gifs" button is clicked', () => {
    const gotoSavedGifsMock = jest.fn();
    render(<TopBar handleSearch={() => {}} gotoSavedGifs={gotoSavedGifsMock} />);

    const savedGifsButton = screen.getByRole('button', { name: 'My Saved Gifs' });
    fireEvent.click(savedGifsButton);

    expect(gotoSavedGifsMock).toHaveBeenCalled();
  });

  it('disables the search button when search field is empty', () => {
    render(<TopBar handleSearch={() => {}} gotoSavedGifs={() => {}} />);

    const searchButton = screen.getByRole('button', { name: 'Search for GIF' });

    expect(searchButton).toBeDisabled();
  });
});
