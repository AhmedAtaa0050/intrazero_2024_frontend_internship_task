const SelectBox = ({ options, onChange, value }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
    console.log("change", event.target.value);
  };

  return (
    <div className="relative">
      <select
        className="appearance-none rounded-r-lg w-48 px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-500 border border-gray-400 bg-[#2c3e50] text-white cursor-pointer "
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option className="py-2" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          className="text-white fill-current "
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
        >
          <path d="M0 10A10 10 0 1 0 10 0 10 10 0 0 0 0 10zm14.021-1.943-2.008 2.484L10 13.024l-2.01-2.483-2-2.484h8.033z" />
        </svg>
      </div>
    </div>
  );
};

{
  /* <div className="relative">
  <select class="appearance-none w-48 px-4 py-2 border border-gray-400 rounded-md bg-white cursor-pointer text-gray-700">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
    <svg
      class="w-4 h-4 fill-current text-gray-700"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  </div>
</div>; */
}

export default SelectBox;
