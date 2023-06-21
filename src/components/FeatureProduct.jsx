import React from "react";
import { Heading } from "./SubComponents";
import { useProductContext } from "../context/productContext";
import Product from "./Product";
import Loading from "./Loading";

export const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log("isLoading and featureProducts", featureProducts);

  return (
    <>
      {isLoading && <Loading />}

      <Heading text="Featured Products" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {featureProducts.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
    </>
  );
};
