import { useEffect, useState } from 'react';
import GifsContainer from '../components/GifsContainer';
import { ReactComponent as BackIcon } from '../assets/arrow-left-solid.svg';
import '../styles/favorites.css';
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favorites);
  }, []);

  const goBack = () => {
    navigate("/")
  }

  return (
    <div className="outer-container">
      <div className="favorites-container">
        <div className="back-arrow" onClick={goBack}>
          <BackIcon />
        </div>
        <div className="centered-text">My Saved GIFS</div>
      </div>
      <GifsContainer gifs={favorites} setFavorites={setFavorites} />
    </div>
  );
};

export default Favorites;
