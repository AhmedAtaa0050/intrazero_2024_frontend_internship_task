import { useSearch } from "../context/SearchContext";

const CardHeader = ({ title }) => {
  const { isSubmit, setIsSubmit } = useSearch();

  function handleOnCLick() {
    setIsSubmit(false);
  }

  return (
    <div className={`${isSubmit ? "flex items-center justify-between" : ""}`}>
      <h1 className="text-3xl font-bold mb-4">Star Wars {title}</h1>
      {isSubmit && (
        <button
          onClick={handleOnCLick}
          className="px-4 py-2 text-xs bg-[#4f46e5] hover:bg-blue-600 text-white rounded-full shadow-sm"
        >
          Back
        </button>
      )}
    </div>
  );
};

export default CardHeader;
