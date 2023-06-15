import React, { useState, useEffect } from 'react';

const GifCard = ({ gif, handleFavoriteClick }) => {
  const { title, images, username, id } = gif;
  const gifUrl = images.original.url;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorited = favorites.find((item) => item.id === id);
    setIsFavorite(isAlreadyFavorited);
  }, []);

  const handleClick = () => {
    handleFavoriteClick(gif);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="gif-card">
      <i
        className={`favorite ${isFavorite ? 'fas' : 'far'} fa-heart`}
        onClick={handleClick}
        data-testid="favorite-icon"
      ></i>
      <img src={gifUrl} alt={title} className="gif-image" />
      <div className="title">{title}</div>
      <div className="username">{username}</div>
    </div>
  );
};

export default GifCard;
