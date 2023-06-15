
import {useState, useEffect} from "react"
import { ReactComponent as FavoriteIconRegular } from '../assets/heart-regular.svg';
import { ReactComponent as FavoriteIconSolid } from '../assets/heart-solid.svg';

const GifCard = ({ gif }) => {
  const { title, images, username, id} = gif;
  const gifUrl = images.original.url;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorited = favorites.find((item) => item.id === id);
    setIsFavorite(isAlreadyFavorited)
  }, [])

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    // Toggle the favorite status in local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== id
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, gif];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="gif-card">
      <div className="favorite" onClick={handleFavoriteClick}>
        {isFavorite ? <FavoriteIconSolid /> : <FavoriteIconRegular />}
      </div>
      <img src={gifUrl} alt={title} className="gif-image" />
      <div className="title">{title}</div>
      <div className="username">{username}</div>
    </div>
  );
};

export default GifCard;
