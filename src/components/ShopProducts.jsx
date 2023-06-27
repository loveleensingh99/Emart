import React, { useRef } from "react";
import { FeatureProducts } from "./FeatureProduct";
import Product from "./Product";
import { useProductContext } from "src/context/productContext";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { useFilterContext } from "src/context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

export default function ShopProducts() {
  const {
    filterProducts,
    gridView,
    setGridView,
    setListView,
    handleSortChange,
  } = useFilterContext();

  const { isLoading, products } = useProductContext();

  return (
    <>
      <div className="col-span-3">
        <div className="flex items-center mb-4">
          <select
            name="sort"
            className="px-4 py-2 pr-1 text-base text-gray-600 border border-gray-300 rounded w-44 bg-gray-50 focus:ring-primary focus:border-primary-blue"
            onChange={handleSortChange}
          >
            <option value="lowest">Price low to high</option>
            <option value="highest">Price high to low</option>
            <option value="atoz">A-Z</option>
            <option value="ztoa">Z-A</option>
          </select>

          <div className="flex gap-2 ml-auto space-x-2">
            <BsFillGrid3X2GapFill
              className={`flex items-center justify-center w-10 p-1 border rounded cursor-pointer border-primary h-9 bg-primary  ${
                gridView ? "border-gray-600" : ""
              } `}
              onClick={setGridView}
            />

            <AiOutlineUnorderedList
              className={`flex items-center justify-center w-10 p-1  border rounded cursor-pointer h-9 ${
                gridView ? " " : "border-gray-600"
              }`}
              onClick={setListView}
            />
          </div>
        </div>

        <div className="">
          {gridView ? (
            <GridView products={filterProducts} />
          ) : (
            <ListView products={filterProducts} />
          )}
        </div>
      </div>
    </>
  );
}
