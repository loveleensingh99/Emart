import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.css";
import "./styles/global.css";

import { DataComponentContext } from "./context/productContext";

import { FilterContextProvider } from "./context/filterContext";
import App from "./App";
import { CartContextProvider } from "./context/cartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="loveleensingh99.us.auth0.com"
    clientId="SG2jaDdxuhmW9L7nS7mcm8BLnzvy31Pl"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <DataComponentContext>
      <FilterContextProvider>
        <CartContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartContextProvider>
      </FilterContextProvider>
    </DataComponentContext>
  </Auth0Provider>
);
