import React, { useState } from "react";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      console.log("setloading call");
      return {
        ...state,
        isLoading: true,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_API_DATA":
      const featureData = action.payload.filter((currentElement) => {
        return currentElement.featured === true;
      });
      console.log("featureData", featureData);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "SET_SINGLE_LOADING":
      console.log("setloading call");
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export const Demo = () => <h1>Helllo</h1>;

export default ProductReducer;
