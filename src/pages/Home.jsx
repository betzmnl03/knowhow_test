import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import GifsContainer from "../components/GifsContainer";
import Loader from "../components/Loader"
import { giphyService } from '../services/giphyService';
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import { DEFAULT_OFFSET, ITEM_PER_PAGE } from '../constants/common';

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationOffset, setPaginationOffset] = useState(DEFAULT_OFFSET)
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const [searchActive, setSearchActive] = useState(false)
  const [searchField, setSearchField] = useState("")
  let navigate = useNavigate();

  const handleSearch = (field) => {
    setSearchField(field)
  };

  useEffect(() => {
   getSearchGifs(DEFAULT_OFFSET)
  }, [searchField])
  
  const getTrendingGifs = (offset) => {
    setSearchActive(false)
    setLoading(true);
    setSearchField("")
    giphyService.trendingGifs(offset)
      .then((result) => {
        setPaginationOffset(offset);
        setTotalPages(result.pagination.total_count);
        setGifs(result.data)
    }).finally(()=>setLoading(false))

    setLoading(false)
   
  };

  const getSearchGifs = (offset) => {
    setSearchActive(true);
    setLoading(true);
    giphyService
      .searchGifs(searchField, offset)
      .then((result) => {
        setGifs(result.data);
        setTotalPages(result.pagination.total_count);
        setPaginationOffset(offset)
      })
      .catch((error) => {
        setGifs([]);
        setTotalPages(0);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  
  useEffect(() => {
    if (gifs.length === 0) {
      getTrendingGifs(0,12);
    } 
  }, []);
  

  const gotoSavedGifs = () => {
    let path = `/favorites`;
    navigate(path);
  }

  const renderPaginationButtons = () => {
    const maxButtons = 5; // Maximum number of pagination buttons to display
    const activePage = Math.floor(paginationOffset / ITEM_PER_PAGE) + 1;
    const numberOfPages = Math.ceil(totalPages / ITEM_PER_PAGE); // Assuming totalCount is the total number of items
  
    let startPage, endPage;
  
    if (numberOfPages <= maxButtons) {
      // If the total number of pages is less than or equal to the maximum number of buttons, display all pages
      startPage = 1;
      endPage = numberOfPages;
    } else {
      // Calculate the range of pages to display based on the active page
      if (activePage <= Math.ceil(maxButtons / 2)) {
        // If the active page is near the beginning
        startPage = 1;
        endPage = maxButtons;
      } else if (activePage > numberOfPages - Math.floor(maxButtons / 2)) {
        // If the active page is near the end
        startPage = numberOfPages - maxButtons + 1;
        endPage = numberOfPages;
      } else {
        // If the active page is in the middle
        startPage = activePage - Math.floor(maxButtons / 2);
        endPage = activePage + Math.ceil(maxButtons / 2) - 1;
      }
    }
  
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={activePage === i ? "active" : ""}
          onClick={() => {
            const offset = (i - 1) * ITEM_PER_PAGE;
            searchActive? getSearchGifs(offset,12): getTrendingGifs(offset, 12)
          }}
        >
          {i}
        </button>
      );
    }
  
    if (startPage > 1) {
      buttons.unshift(
        <button
          key="prev"
          onClick={() => {
            const offset = (startPage - 1) * ITEM_PER_PAGE;
            searchActive ? getSearchGifs(offset, 12) : getTrendingGifs(offset, 12)
          }
           
          }
        >
          &lt;&lt;
        </button>
      );
    }
  
    if (endPage < numberOfPages) {
      buttons.push(
        <button
          key="next"
          onClick={() =>
            {
            const offset = endPage * ITEM_PER_PAGE;
              searchActive ? getSearchGifs(offset, 12) : getTrendingGifs(offset, 12)
            }
           
          }
        >
          &gt;&gt;
        </button>
      );
    }
  
    return buttons;
  };



  return (
    <div>
      <TopBar handleSearch={handleSearch} getTrendingGifs={getTrendingGifs} gotoSavedGifs={gotoSavedGifs} />
      {loading ?
        <Loader /> :
        <>
              <GifsContainer gifs={gifs}/>
              {totalPages > 0 && (
                <div className="pagination">
                  {renderPaginationButtons()}
                </div>
              )}
        </>
      }
    </div>
  );
};

export default Home;
