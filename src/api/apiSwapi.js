import axios from "axios";

export const API_URL = "https://swapi.dev/api";

const checkOfflineStatus = () => {
  if (!navigator.onLine) {
    throw new Error(
      "You are currently offline. Please check your internet connection."
    );
  }
};

// Generalized fetch function
const fetchData = async (endpoint, localStorageKey) => {
  checkOfflineStatus();
  const response = await axios.get(`${API_URL}/${endpoint}/`);
  localStorage.setItem(localStorageKey, JSON.stringify(response.data.results));

  console.log(response.data);
  return response.data.results;
};

export const fetchCharacters = () => fetchData("people", "characters");

export const fetchFilms = () => fetchData("films", "films");

export const fetchPlanets = () => fetchData("planets", "planets");

export const fetchSpecies = () => fetchData("species", "species");
