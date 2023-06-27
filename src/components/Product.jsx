import { Button } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { FormatPrice } from "src/Helper/ForamtPrice";
import { Star } from "./SubComponents";

export default function Product(item) {
  const { id, name, image, price, category } = item;

  return (
    <>
      <NavLink to={`/singleproduct/${id}`} className="h-full w-fit">
        <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <img className="p-8 rounded-t-lg" src={image} alt="product" />

          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {name}
            </h5>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 xl:text-2xl ">
                <FormatPrice price={price} />
              </span>
              <Button
                href="#"
                className="px-3 py-2 text-sm font-medium text-center bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}
