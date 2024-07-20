import CategoryList from "../components/CategoryList ";
import { useCharacters } from "../hooks/useStarWarsData";
import RenderCharacter from "../components/RenderCharacter";

const Characters = () => (
  <CategoryList
    title="Characters"
    useDataHook={useCharacters}
    RenderItem={RenderCharacter}
  />
);

export default Characters;
