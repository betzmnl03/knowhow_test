import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
        <div className="back-arrow" onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="centered-text">My Saved GIFS</div>
      </div>
      <GifsContainer gifs={favorites} setFavorites={setFavorites} />
    </div>
  );
};

export default Favorites;
