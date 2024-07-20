import Button from "./Button";

export default function RenderPlant({ item }) {
  return (
    <div className="bg-gray-800 p-4 rounded flex gap-2 flex-col">
      <h2 className="text-xl font-bold mb-3">{item.name}</h2>
      <p>
        <strong>Climate:</strong> {item.climate}
      </p>
      <p>
        <strong>Diameter:</strong> {item.diameter}
      </p>
      <p>
        <strong>Gravity:</strong> {item.gravity}
      </p>
      <p>
        <strong>Orbital Period:</strong> {item.orbital_period}
      </p>
      <p>
        <strong>Population:</strong> {item.population}
      </p>
      <p>
        <strong>Terrain:</strong> {item.terrain}
      </p>
      <Button type="favorite" favoriteItemName={item.name} />
    </div>
  );
}
