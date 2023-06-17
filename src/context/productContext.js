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
  isSingleLoading: false,
  singleProduct: {},
};
export const DataComponentContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const API = "https://api.pujakaitem.com/api/products";

  //Get All Products
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

  //Get Single  Product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      console.log("SingleProduct Response=", res);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      console.log("getSingleProduct ...state", ...state);
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <myDataContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </myDataContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(myDataContext);
};
