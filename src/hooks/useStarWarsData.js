import { useQuery } from "@tanstack/react-query";
import {
  fetchCharacters,
  fetchFilms,
  fetchPlanets,
  fetchSpecies,
} from "../api/apiSwapi";

const useFetchWithCache = (key, fetchFunction, localStorageKey) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      try {
        return await fetchFunction();
      } catch (error) {
        if (error.message.includes("offline")) {
          const cachedData = localStorage.getItem(localStorageKey);
          if (cachedData) {
            return JSON.parse(cachedData);
          }
          throw new Error("No cached data available.");
        } else {
          throw error;
        }
      }
    },
  });
};

export const useCharacters = () =>
  useFetchWithCache("characters", fetchCharacters, "characters");

export const useFilms = () => useFetchWithCache("films", fetchFilms, "films");

export const usePlanets = () =>
  useFetchWithCache("planets", fetchPlanets, "planets");

export const useSpecies = () =>
  useFetchWithCache("species", fetchSpecies, "species");
