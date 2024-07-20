import { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import RenderSearch from "../components/RenderSearch";
import Error from "../components/Error";
import Spinner from "./Spinner";
import CardHeader from "./CardHeader";

const CategoryList = ({ title, useDataHook, RenderItem }) => {
  const { data, error, isLoading } = useDataHook();
  const { isSubmit, setIsSubmit, favorites, setCategory } = useSearch();

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setCategory(title.toLowerCase());
    setIsSubmit(false);
  }, [favorites, setCategory, setIsSubmit, title]);

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      <CardHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isSubmit ? (
          <RenderSearch />
        ) : (
          data.map((item) => (
            <RenderItem key={item.name || item.title} item={item} />
          ))
        )}
      </div>
    </>
  );
};

export default CategoryList;
