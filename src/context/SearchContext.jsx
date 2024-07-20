import { useState, useContext, createContext } from "react";
import axios from "axios";

import { API_URL } from "../api/apiSwapi";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [category, setCategory] = useState("people");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const toggleFavorite = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(name)
        ? prevFavorites.filter((fav) => fav !== name)
        : [...prevFavorites, name]
    );
  };

  const handleSearch = async () => {
    if (!category || !searchQuery) return;

    try {
      const response = await axios.get(
        `${API_URL}/${category}/?search=${searchQuery}`
      );
      setSearchResults(response.data.results);

      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const contextValue = {
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    searchResults,
    setSearchResults,
    handleSearch,
    isSubmit,
    setIsSubmit,
    favorites,
    toggleFavorite,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

export { SearchProvider, useSearch };
