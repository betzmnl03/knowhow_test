import { useEffect, useState } from "react";
import GifsContainer from "../components/GifsContainer";

const Favorites = () => {

  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favorites)
  }, [])
  
  return (
    <GifsContainer gifs={favorites}/>
  )
};

export default Favorites;
