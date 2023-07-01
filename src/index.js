import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.css";
import "./styles/global.css";

import { DataComponentContext } from "./context/productContext";

import { FilterContextProvider } from "./context/filterContext";
import App from "./App";
import { CartContextProvider } from "./context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DataComponentContext>
    <FilterContextProvider>
      <CartContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartContextProvider>
    </FilterContextProvider>
  </DataComponentContext>
);
