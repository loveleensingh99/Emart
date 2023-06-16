import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
// import ProductReducer from "../reducer/productReducer";
export const myDataContext = createContext();
export const reducer = (d, a) => {};

export const DataComponentContext = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const API = "https://api.pujakaitem.com/api/products";

  const getProducts = async (API) => {
    const res = await axios.get(API);
    console.log("response", res);
    const products = await res.data;
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <myDataContext.Provider value={{ ...state }}>
      {children}
    </myDataContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(myDataContext);
};
