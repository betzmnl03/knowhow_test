import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GifsContainer from '../components/GifsContainer';
import { HOME } from '../constants/routes';
import '../styles/favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favorites);
  }, []);
  let navigate = useNavigate();
  const goBack = () => {
    navigate(HOME);
  };

  return (
    <div className="outer-container">
      <div className="favorites-container">
        <div className="back-arrow" onClick={goBack} data-testid="back-arrow">
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="centered-text">My Saved GIFS</div>
      </div>
      <div className="gifs-container-fav">

      <GifsContainer gifs={favorites} setFavorites={setFavorites} />
      </div>
    </div>
  );
};

export default Favorites;
