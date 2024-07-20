import { useSearch } from "../context/SearchContext";

function Button({ type, children, handleOnClick, favoriteItemName }) {
  const { favorites, toggleFavorite } = useSearch();

  if (type === "search")
    return (
      <button className="absolute right-2 top-2/4 -translate-y-1/2  px-4 py-2 text-xs  bg-[#4f46e5] hover:bg-blue-600 text-white rounded-full shadow-sm">
        {children}
      </button>
    );

  if (type === "back")
    return (
      <button
        onClick={handleOnClick}
        className="px-4 py-2 text-xs bg-[#4f46e5] hover:bg-blue-600 text-white rounded-full shadow-sm"
      >
        {children}
      </button>
    );

  if (type === "favorite")
    return (
      <button
        className={`px-4 py-2 rounded mt-1 ${
          favorites.includes(favoriteItemName)
            ? "bg-red-500 hover:bg-red-700 text-white"
            : "bg-green-500 hover:bg-green-700 text-white"
        }`}
        onClick={() => toggleFavorite(favoriteItemName)}
      >
        {favorites.includes(favoriteItemName) ? "Unfavorite" : "Favorite"}
      </button>
    );
}

export default Button;
