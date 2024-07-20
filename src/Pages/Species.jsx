import { useSpecies } from "../hooks/useStarWarsData";
import RenderSpecie from "../components/RenderSpecie";
import CategoryList from "../components/CategoryList ";

const Species = () => (
  <CategoryList
    title="Species"
    useDataHook={useSpecies}
    RenderItem={RenderSpecie}
  />
);

export default Species;
