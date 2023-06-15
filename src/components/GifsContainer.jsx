import '../styles/gifsCard.css';
import GifCard from "./GifCard"

const GifsContainer = ({ gifs }) => {
    
  if(!gifs.length) return <p>No search result</p>
  return (
    <div>
      <div className="card-container">
        {gifs.map((gif) => (
          <div key={gif.id} className="card">
            <GifCard gif={ gif}/>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifsContainer