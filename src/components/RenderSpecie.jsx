import Button from "./Button";

export default function RenderSpecie({ item }) {
  return (
    <div className="bg-gray-800 p-4 rounded flex gap-2 flex-col">
      <h2 className="text-xl font-bold mb-3">{item.name}</h2>
      <p>
        <strong>Classification:</strong> {item.classification}
      </p>
      <p>
        <strong>Designation:</strong> {item.designation}
      </p>
      <p>
        <strong>Average Height:</strong> {item.average_height}
      </p>
      <p>
        <strong>Average Lifespan:</strong> {item.average_lifespan}
      </p>
      <p>
        <strong>Language:</strong> {item.language}
      </p>

      <Button type="favorite" />
    </div>
  );
}
