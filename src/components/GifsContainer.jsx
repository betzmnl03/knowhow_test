import '../styles/gifsCard.css';
import GifCard from "./GifCard";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

const GifsContainer = ({ gifs, setFavorites}) => {

  const [gifsList, setGifList] = useState(gifs);
    
  const location = useLocation();
  const isFavoritePage = location.pathname === "/favorites";
  
  const removeFavorites = (list, id) => {
    const updatedFavorites = list.filter(
      (favorite) => favorite.id !== id
    );
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    return updatedFavorites
  }

  const handleFavoriteClick = (gif) => {
    if (isFavoritePage) {
      const updatedGifs = removeFavorites(gifs, gif.id)
      setGifList(updatedGifs);
      setFavorites(updatedGifs)
    } else {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const isAlreadyFavorited = storedFavorites.find((item) => item.id === gif.id);
      if (isAlreadyFavorited) {
      // Remove from favorites
      removeFavorites(storedFavorites, gif.id)
      }
      else {
      // Add to favorites
      const updatedFavorites = [...storedFavorites, gif];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      }
    }

  };

  useEffect(() => {
   setGifList(gifs)
  }, [gifs])
  
  if (!gifsList.length) return <p>No {isFavoritePage? "Saved GIFs":"GIFs Found" }</p>
  return (
    <div>
      <div className="card-container">
        {gifsList.map((gif) => (
          <div key={gif.id} className="card">
            <GifCard gif={gif} handleFavoriteClick={handleFavoriteClick}/>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifsContainer