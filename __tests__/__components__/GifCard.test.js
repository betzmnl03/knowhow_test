import React from "react";
import { render } from "@testing-library/react";
import GifCard from "../../src/components/GifCard";
import "@testing-library/jest-dom/extend-expect";

describe("GifCard", () => {
  const gif = {
    title: "Test GIF",
    images: {
      original: {
        url: "https://example.com/test.gif",
      },
    },
    username: "testuser",
    id: "123",
  };

  it("renders the GIF title, image, and username", () => {
    const { getByAltText, getByText } = render(<GifCard gif={gif} />);
    
    expect(getByAltText("Test GIF")).toBeInTheDocument();
    expect(getByText("Test GIF")).toBeInTheDocument();
    expect(getByText("testuser")).toBeInTheDocument();
  });

  
});
