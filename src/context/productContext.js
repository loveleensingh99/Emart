import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
export const myDataContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};
export const DataComponentContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const API = "https://api.pujakaitem.com/api/products";

  const getProducts = async (API) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API);
      console.log("response", res);
      const products = await res.data;
      console.log("Products", products);
      dispatch({ type: "SET_API_DATA", payload: products });
      console.log("response ...state", ...state);
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
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
