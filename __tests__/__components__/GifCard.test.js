import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GifCard from '../../src/components/GifCard';
import '@testing-library/jest-dom/extend-expect';
import { mockGifs } from '../__mocks__/testData';

describe('GifCard', () => {
  const gif = mockGifs[0];

  it('renders the GIF title, image, and username', () => {
    const { getByAltText, getByText } = render(<GifCard gif={gif} />);
    expect(getByAltText(gif.title)).toBeInTheDocument();
    expect(getByText(gif.title)).toBeInTheDocument();
    expect(getByText(gif.username)).toBeInTheDocument();
  });

  test('should change the favorite icon from regular to solid to  on click', () => {
    const handleFavoriteClick = jest.fn();
    const { getByTestId } = render(
      <GifCard gif={gif} handleFavoriteClick={handleFavoriteClick} />
    );

    const favoriteIcon = getByTestId('favorite-icon');

    // Initially, the favorite icon should have 'far' class
    expect(favoriteIcon).toHaveClass('far');

    // Clicking on the favorite icon
    fireEvent.click(favoriteIcon);

    // After clicking, the favorite icon should have 'far' class
    expect(favoriteIcon).toHaveClass('fas');

    // Clicking on the favorite icon again should unfavorite it
    fireEvent.click(favoriteIcon);

    // After clicking, the favorite icon should have 'far' class
    expect(favoriteIcon).toHaveClass('far');
  });
});
