import React from "react";
import Product from "./Product";
import ProductList from "./ProductList";

export default function ListView({ products }) {
  return (
    <>
      <div className="flex flex-col space-y-2 md:space-y-3">
        {products.map((curElem) => {
          return <ProductList key={curElem.id} {...curElem} />;
        })}
      </div>
    </>
  );
}
