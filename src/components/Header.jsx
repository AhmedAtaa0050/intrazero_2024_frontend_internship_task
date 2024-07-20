import { useSearch } from "../context/SearchContext";
import Search from "../features/search/Search";
import SelectBox from "../features/search/SelectBox";
import Button from "./Button";

const options = [
  { value: "people", label: "Characters" },
  { value: "films", label: "Films" },
  { value: "planets", label: "Planets" },
  { value: "species", label: "Species" },
];

function Header() {
  const {
    setCategory,
    category,
    setSearchQuery,
    searchQuery,
    handleSearch,
    setIsSubmit,
  } = useSearch();

  return (
    <header>
      <form
        className="py-[16px] flex items-center justify-center px-[48px] border-b border-[#1F294C] bg-[#18212f]"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
          setIsSubmit(true);
        }}
      >
        <div className="w-3/4 relative">
          <Search value={searchQuery} onChange={setSearchQuery} />
          <Button type="search">Search</Button>
        </div>

        <SelectBox options={options} onChange={setCategory} value={category} />
      </form>
    </header>
  );
}

export default Header;
