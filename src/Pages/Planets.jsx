import CategoryList from "../components/CategoryList ";
import { usePlanets } from "../hooks/useStarWarsData";
import RenderPlanet from "../components/RenderPlant";

const Planets = () => (
  <CategoryList
    title="Planets"
    useDataHook={usePlanets}
    RenderItem={RenderPlanet}
  />
);

export default Planets;
