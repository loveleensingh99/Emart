import React from "react";
import Product from "./Product";

export default function GridView({ products }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </>
  );
}
