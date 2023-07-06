import React, { useEffect, useState } from "react";

export default function CartQuantityToggle({
  quantity,
  setIncrement,
  setDecrement,
}) {
  return (
    <>
      <div className="mb-3">
        <h4 className="mb-3 font-medium font-heading">Quantity:</h4>
        <div className="w-32 h-10 custom-number-input">
          <div className="relative flex flex-row w-full h-10 mt-1 bg-transparent rounded-lg ">
            <button
              data-action="decrement"
              className={`  text-gray-600 hover:text-gray-700 border hover:bg-blue-100 hover:border-blue-500  h-full w-20 rounded-l cursor-pointer outline-none`}
              onClick={() => setDecrement()}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <div className="flex items-center w-full font-semibold   text-gray-700 border outline-none focus:outline-none focus:ring-blue-500 text-md hover:text-black focus:text-black md:text-basecursor-default text-center  justify-center">
              {quantity}
            </div>
            <button
              data-action="increment"
              className="w-20 h-full text-gray-600 border rounded-r cursor-pointer hover:text-gray-700 hover:bg-blue-100 hover:border-blue-500"
              onClick={() => setIncrement()}
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
