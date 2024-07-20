import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./context/SearchContext.jsx";
const queryCLient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </QueryClientProvider>
  </React.StrictMode>
);