import { useSearch } from "../context/SearchContext";

export default function RenderFilm({ item }) {
  const { toggleFavorite, favorites } = useSearch();
  return (
    <div
      key={item.title}
      className="bg-gray-800 p-4 rounded flex gap-2 flex-col"
    >
      <h2 className="text-xl font-bold mb-3">{item.title}</h2>
      <p>
        <strong>Director:</strong> {item.director}
      </p>
      <p>
        <strong>Producer:</strong> {item.producer}
      </p>
      <p>
        <strong>Release Date:</strong> {item.release_date}
      </p>
      <p>
        <strong>Opening Crawl:</strong> {item.opening_crawl}
      </p>
      <button
        className={`px-4 py-2 rounded mt-1 ${
          favorites.includes(item.title)
            ? "bg-red-500 hover:bg-red-700 text-white"
            : "bg-green-500 hover:bg-green-700 text-white"
        }`}
        onClick={() => toggleFavorite(item.title)}
      >
        {favorites.includes(item.title) ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}
