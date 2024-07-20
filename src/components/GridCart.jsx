import React from "react";
import SpeciesCard from "./SpeciesCard";
import NotFound from "./NotFound";

const GridCart = ({
  isSubmit,
  searchResults,
  data,
  toggleFavorite,
  favorites,
  children,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {isSubmit ? (
        searchResults.length > 0 ? (
          searchResults.map((specie) => (
            <SpeciesCard
              key={specie.name}
              specie={specie}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          ))
        ) : (
          <NotFound>No Data Found!</NotFound>
        )
      ) : (
        data?.results.map((specie) => (
          <SpeciesCard
            key={specie.name}
            specie={specie}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))
      )}
    </div>
  );
};

export default GridCart;
