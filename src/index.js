import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.css";
import { DataComponentContext } from "./context/productContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DataComponentContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataComponentContext>
);
