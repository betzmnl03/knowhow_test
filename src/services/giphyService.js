import axios from 'axios';
import { GIPHY_SEARCH, GIPHY_TRENDING } from '../constants/common';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const BASE_URL = process.env.REACT_APP_GIPHY_BASE_URL;

export const giphyService = {
  searchGifs: async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/${GIPHY_SEARCH}`, {
        params: {
          api_key: API_KEY,
          q: query,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error searching GIFS', error);
      throw error;
    }
  },
  trendingGifs: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${GIPHY_TRENDING}`, {
        params: {
          api_key: API_KEY,
         
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetchinbg trending GIFS', error);
      throw error;
    }
  },
};
