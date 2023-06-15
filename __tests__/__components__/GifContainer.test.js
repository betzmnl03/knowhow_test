import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import GifsContainer from "../../src/components/GifsContainer";


// Mocked gifs data
const mockGifs = [
  {
    id: "gif1",
    title: "GIF 1",
    images: {
      original: {
        url: "https://example.com/gif1.gif",
      },
    },
    username: "user1",
  },
  {
    id: "gif2",
    title: "GIF 2",
    images: {
      original: {
        url: "https://example.com/gif2.gif",
      },
    },
    username: "user2",
  },
];

describe("GifsContainer", () => {
  it("renders GIF cards", () => {
    render(
      <MemoryRouter> 
        <GifsContainer gifs={mockGifs} setFavorites={() => { }} />
        </MemoryRouter>
      );
  
    const gifCards = screen.getAllByTestId("gif-card");
  
    expect(gifCards.length).toBe(mockGifs.length);
  });
  
});
