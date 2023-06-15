import { useEffect,useState } from 'react';
import TopBar from '../components/TopBar';
import GifsContainer from "../components/GifsContainer";
import Loader from "../components/Loader"
import { giphyService } from '../services/giphyService';
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate(); 
  const handleSearch = (searchField) => {
    setLoading(true)
    giphyService.searchGifs(searchField)
    .then((result) => {
      setGifs(result);
    })
    .catch((error) => {
      setGifs([])
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const getTrendingGifs = () => {
    setLoading(true)
    giphyService.trendingGifs().then((result) => {
      setGifs(result)
    }).catch((e)=>console.log(e)).finally(setLoading(false))
  }
  useEffect(() => {
    getTrendingGifs()
  }, [])

  const gotoSavedGifs = () => {
    let path = `/favorites`; 
    navigate(path);
  }
  return (
    <div>
      <TopBar handleSearch={handleSearch} getTrendingGifs={getTrendingGifs} gotoSavedGifs={gotoSavedGifs}/>
        {loading ? 
          <Loader /> :
          <GifsContainer gifs={ gifs}/>
      }
    </div>
  );
};

export default Home;
