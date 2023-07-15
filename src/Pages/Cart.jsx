import React from "react";
import { Link } from "react-router-dom";
import { FormatPrice } from "src/Helper/ForamtPrice";
import CartQuantityToggle from "src/components/CartQuantityToggle";
import Footer from "src/components/Footer";
import { useCartContext } from "src/context/cartContext";

export default function Cart() {
  const {
    cart,
    removeItemFromCart,
    setIncrement,
    setDecrement,
    totalAmount,
    totalItem,
    shippingFee,
  } = useCartContext();

  return (
    <div className="container mx-auto mt-10">
      <div className="flex my-10 shadow-md">
        <div className="w-3/4 px-10 py-10 bg-white">
          <div className="flex justify-between pb-8 border-b">
            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
            <h2 className="text-2xl font-semibold">
              {cart.length ? cart.length : "No "} Items
            </h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="w-2/5 text-base font-semibold text-gray-600 uppercase">
              Product Details
            </h3>
            <h3 className="w-1/5 text-base font-semibold text-center text-gray-600 uppercase">
              Quantity
            </h3>
            <h3 className="w-1/5 text-base font-semibold text-center text-gray-600 uppercase">
              Price
            </h3>
            <h3 className="w-1/5 text-base font-semibold text-center text-gray-600 uppercase">
              Total
            </h3>
          </div>

          {cart.map((item, index) => {
            return (
              <>
                <div
                  className="flex items-center px-6 py-5 -mx-8 hover:bg-gray-100"
                  key={index}
                >
                  <div className="flex w-2/5">
                    <div className="flex items-center w-20">
                      <img
                        className="h-auto"
                        src={item.image.url}
                        alt={item.productName}
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-grow ml-4 space-y-1">
                      <span className="text-base font-bold text-primary-blue">
                        {item.productName}
                      </span>

                      <span>
                        <div className="flex space-x-2">
                          <div
                            className={`inline-flex items-center justify-center p-1 rounded-full border border-gray-300
                              `}
                          >
                            <div
                              className={`w-4 h-4 rounded-full  `}
                              style={{ backgroundColor: item.color }}
                            ></div>
                          </div>
                        </div>
                      </span>

                      <button
                        className="text-xs font-semibold text-gray-500 w-fit hover:text-primary-blue"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <CartQuantityToggle
                      quantity={item.quantity}
                      setDecrement={() => setDecrement(item.id)}
                      setIncrement={() => setIncrement(item.id)}
                    />
                  </div>
                  <span className="w-1/5 text-sm font-semibold text-center">
                    {<FormatPrice price={item.price} />}
                  </span>
                  <span className="w-1/5 text-sm font-semibold text-center">
                    {<FormatPrice price={item.price * item.quantity} />}
                  </span>
                </div>
              </>
            );
          })}

          <Link
            to="/products"
            className="flex mt-10 text-sm font-semibold text-indigo-600"
          >
            <svg
              className="w-4 mr-2 text-indigo-600 fill-current"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="pb-8 text-2xl font-semibold border-b">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="text-sm font-semibold uppercase">
              Items {totalItem}
            </span>
            <span className="text-sm font-semibold">
              {" "}
              <FormatPrice price={totalAmount} />{" "}
            </span>
          </div>
          <div className="flex justify-between mt-10 mb-5">
            <label className="text-sm font-semibold uppercase">
              Shipping Charges
            </label>

            <span className="text-sm font-semibold">
              {" "}
              <FormatPrice price={shippingFee} />
            </span>
          </div>

          <div className="mt-8 border-t">
            <div className="flex justify-between py-6 text-sm font-semibold uppercase">
              <span>Total cost</span>
              <span>
                <FormatPrice price={totalAmount + shippingFee} />{" "}
              </span>
            </div>
            <button className="w-full py-3 text-sm font-semibold text-white uppercase bg-indigo-500 hover:bg-indigo-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
