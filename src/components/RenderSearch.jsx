import { useSearch } from "../context/SearchContext";
import NotFound from "./NotFound";
import PlanetCard from "./RenderPlant";
import RenderCharacter from "./RenderCharacter";
import RenderSpecie from "./RenderSpecie";
import RenderFilm from "./RenderFilm";

function RenderSearch() {
  const { category, searchResults } = useSearch();

  console.log(category);

  return searchResults.length > 0 ? (
    searchResults.map((index) => {
      if (category === "characters")
        return <RenderCharacter key={index.name} item={index} />;

      if (category === "films")
        return <RenderFilm key={index.title} item={index} />;

      if (category === "species")
        return <RenderSpecie key={index.name} item={index} />;

      if (category === "planets")
        return <PlanetCard key={index.name} item={index} />;
    })
  ) : (
    <NotFound>No Data Found!</NotFound>
  );
}

export default RenderSearch;
