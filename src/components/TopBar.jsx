import React, { useState } from 'react';
import '../styles/searchBar.css';

const TopBar = ({ handleSearch, gotoSavedGifs }) => {
  const [searchField, setSearchField] = useState('');

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="top-bar">
      <div className="search-bar">
        <div className="search-icon">
          <i className="fas fa-search"></i>
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
