import CategoryList from "../components/CategoryList ";
import { useFilms } from "../hooks/useStarWarsData";
import RenderFilm from "../components/RenderFilm";

const Films = () => (
  <CategoryList title="Films" useDataHook={useFilms} RenderItem={RenderFilm} />
);

export default Films;
