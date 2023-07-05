import React, { useEffect, useState } from "react";

export default function QuantityButton({
  stock,
  updateQuantity,
  quantityInitial = 1,
}) {
  const [amount, setAmount] = useState(quantityInitial);
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
        <h4 className="mb-3 font-medium font-heading">Quantity:</h4>
        <div className="w-32 h-10 custom-number-input">
          <div className="relative flex flex-row w-full h-10 mt-1 bg-transparent rounded-lg ">
            <button
              data-action="decrement"
              className={`  text-gray-600 hover:text-gray-700 border hover:bg-blue-100 hover:border-blue-500  h-full w-20 rounded-l cursor-pointer outline-none`}
              onClick={() => setDecrease()}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="flex items-center w-full font-semibold text-center text-gray-700 border outline-none focus:outline-none focus:ring-blue-500 text-md hover:text-black focus:text-black md:text-basecursor-default "
              name="custom-input-number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              data-action="increment"
              className="w-20 h-full text-gray-600 border rounded-r cursor-pointer hover:text-gray-700 hover:bg-blue-100 hover:border-blue-500"
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
