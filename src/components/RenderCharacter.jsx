import { useSearch } from "../context/SearchContext";

export default function RenderCharacter({ item }) {
  const { favorites, toggleFavorit } = useSearch();

  return (
    <div
      key={item.name}
      className="bg-gray-800 p-4 rounded flex flex-col gap-2"
    >
      <h2 className="text-xl font-bold mb-3">{item.name}</h2>
      <p>
        <strong>Height:</strong> {item.height}
      </p>
      <p>
        <strong>Mass:</strong> {item.mass}
      </p>
      <p>
        <strong>Hair Color:</strong> {item.hair_color}
      </p>
      <p>
        <strong>Skin Color:</strong> {item.skin_color}
      </p>
      <p>
        <strong>Eye Color:</strong> {item.eye_color}
      </p>
      <p>
        <strong>Birth Year:</strong> {item.birth_year}
      </p>
      <p>
        <strong>Gender:</strong> {item.gender}
      </p>
      <button
        className={`px-4 py-2 rounded mt-1 ${
          favorites.includes(item.name)
            ? "bg-red-500 hover:bg-red-700 text-white"
            : "bg-green-500 hover:bg-green-700 text-white"
        }`}
        onClick={() => toggleFavorit(item)}
      >
        {favorites.includes(item.name) ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}
