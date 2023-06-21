import React, { useEffect, useState } from "react";

export default function QuantityButton({ stock, updateQuantity }) {
  const [amount, setAmount] = useState(0);
  console.log("Amount", amount);
  console.log("stock", stock);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  useEffect(() => {
    updateQuantity(amount);
  }, [amount]);
  return (
    <>
      <div className="mb-3">
        <h4 className="mb-3 font-heading font-medium">Quantity:</h4>
        <div className="custom-number-input h-10 w-32">
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 ">
            <button
              data-action="decrement"
              className={`  text-gray-600 hover:text-gray-700 border hover:bg-blue-100 hover:border-blue-500  h-full w-20 rounded-l cursor-pointer outline-none`}
              onClick={() => setDecrease()}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="outline-none focus:outline-none text-center w-full focus:ring-blue-500  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none border   "
              name="custom-input-number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              data-action="increment"
              className=" text-gray-600 hover:text-gray-700 border hover:bg-blue-100  hover:border-blue-500   h-full w-20 rounded-r cursor-pointer"
              onClick={() => setIncrease()}
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
