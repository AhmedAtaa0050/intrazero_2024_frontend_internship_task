import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Characters from "./Pages/Characters";
import NotFound from "./components/NotFound";
import Films from "./Pages/Films";
import Planets from "./Pages/Planets";
import Species from "./Pages/Species";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Characters />,
        },
        { path: "films", element: <Films /> },
        { path: "planets", element: <Planets /> },
        { path: "species", element: <Species /> },
        { path: "*", element: <NotFound>Page Not Found 😥!</NotFound> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
