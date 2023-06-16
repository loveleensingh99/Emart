import React from "react";
import { Heading } from "./SubComponents";
import { useProductContext } from "../context/productContext";
import Product from "./Product";

export const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log("isLoading and featureProducts", featureProducts);
  if (isLoading) {
    return <h1 className="h-screen my-auto text-center ">Loading...</h1>;
  }

  return (
    <>
      <Heading text="Featured Products" />

      <div className="grid grid-cols-3 gap-4">
        {featureProducts.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};
