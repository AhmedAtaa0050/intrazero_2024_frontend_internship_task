import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  function navigateToPage(pageUrl) {
    navigate(pageUrl.toLowerCase());
  }

  const path = [...window.location.pathname].splice(1).join("");

  return (
    <nav className="mt-4 flex justify-center space-x-4">
      <button
        onClick={() => navigateToPage("/")}
        className={`bg-gray-700 text-gray-300 px-3 py-1 rounded hover:text-white hover:bg-blue-700 ${
          path === "" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Characters
      </button>
      <button
        onClick={() => navigateToPage("Films")}
        className={`bg-gray-700 text-gray-300 px-3 py-1 rounded hover:text-white hover:bg-blue-500 ${
          path === "films" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Films
      </button>
      <button
        onClick={() => navigateToPage("Species")}
        className={`bg-gray-700 text-gray-300 px-3 py-1 rounded hover:text-white hover:bg-blue-500 ${
          path === "species" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Species
      </button>
      <button
        onClick={() => navigateToPage("Planets")}
        className={`bg-gray-700 text-gray-300 px-3 py-1 rounded hover:text-white hover:bg-blue-500 ${
          path === "planets" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Planets
      </button>
    </nav>
  );
}

export default Nav;
