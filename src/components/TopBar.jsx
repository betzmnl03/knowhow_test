import React, { useState } from 'react';
import '../styles/searchBar.css';
import { ReactComponent as SearchIcon } from '../assets/search-solid.svg';



const TopBar = ({ handleSearch, getTrendingGifs, gotoSavedGifs }) => {
  const [searchField, setSearchField] = useState('');

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="top-bar">
      <div className="search-bar">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="search-input"
          value={searchField}
          onChange={handleChange}
        />
      </div>
      <button
        className="search-button"
        onClick={() => handleSearch(searchField)}
        disabled={!searchField}
      >
        Search for GIF
      </button>
      <button className="saved-gifs-button" onClick={gotoSavedGifs}>My Saved Gifs</button>
    </div>
  );
};

export default TopBar;
