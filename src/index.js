import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.css";
import "./styles/global.css";

import { DataComponentContext } from "./context/productContext";

import { FilterContextProvider } from "./context/filterContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DataComponentContext>
    <FilterContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FilterContextProvider>
  </DataComponentContext>
);
