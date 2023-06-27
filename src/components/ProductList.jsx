import { Button } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { FormatPrice } from "src/Helper/ForamtPrice";
import { Star } from "./SubComponents";

export default function ProductList(item) {
  const { id, name, image, price, category, description } = item;

  return (
    <>
      <NavLink to={`/singleproduct/${id}`} className="h-full w-fit">
        <div className="flex w-full bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex items-center max-w-sm">
            <img
              className="p-3 rounded-t-lg md:p-8 "
              src={image}
              alt="product"
            />
          </div>

          <div className="flex flex-col justify-between p-3 md:p-8 ">
            <div className="">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                {name}
              </h5>
              <p className="text-xs sm:text-sm lg:text-base">
                {description.slice(0, 140).concat("...")}
              </p>
            </div>
            <div className="flex flex-col py-0 md:py-2">
              <span className="py-1 text-xl font-bold text-gray-900 md:py-3 xl:text-2xl ">
                <FormatPrice price={price} />
              </span>
              <Button
                href="#"
                className="max-w-[200px] sm:max-w-[250px] px-3 py-1 md:py-2 text-sm font-medium text-center bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
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
