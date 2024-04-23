import axios from "axios";

const API_KEY = "cmAs6HtxbjC6lEDZMzpFFT7STM7v19ZxoddFTchLnas";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (currentPage, searchQuery) => {
  const response = await axios.get("", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 8,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });

  return response.data.results;
};

