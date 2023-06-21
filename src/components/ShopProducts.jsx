import React from "react";
import { FeatureProducts } from "./FeatureProduct";
import Product from "./Product";
import { useProductContext } from "src/context/productContext";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillGrid3X2GapFill } from "react-icons/bs";

export default function ShopProducts() {
  const { isLoading, products } = useProductContext();
  return (
    <>
      <div className="col-span-3">
        <div className="flex items-center mb-4">
          <select
            name="sort"
            id="sort"
            className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
          >
            <option value="">Default sorting</option>
            <option value="price-low-to-high">Price low to high</option>
            <option value="price-high-to-low">Price high to low</option>
            <option value="latest">Latest product</option>
          </select>

          <div className="flex gap-2 ml-auto space-x-2">
            <BsFillGrid3X2GapFill className=" border border-primary w-10 h-9 flex items-center justify-center   bg-primary rounded cursor-pointer p-1" />

            <AiOutlineUnorderedList className="border border-gray-600 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer p-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          
          {products.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
}
