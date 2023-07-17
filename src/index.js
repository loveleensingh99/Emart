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
export const domain = process.env.REACT_APP_AUTH_DOMAIN;
export const clienid = process.env.REACT_APP_CLIENT_ID;

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clienid}
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
