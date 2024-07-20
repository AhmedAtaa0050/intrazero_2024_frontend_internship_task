export default function Search({ onChange, value }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      type="text"
      placeholder="Search..."
      className="w-full p-2 border rounded-l-lg  focus:outline-none focus:ring focus:ring-yellow-500 text-gray-800"
    />
  );
}
