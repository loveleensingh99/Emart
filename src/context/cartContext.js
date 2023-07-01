import { useEffect } from "react";
import cartReducer from "src/reducer/cartReducer";

const { createContext, useReducer, useContext } = require("react");

const CartContext = createContext();

const getLocalCartData = () => {
  let localCart = JSON.parse(localStorage.getItem("cartStorage")) || [];
  return localCart;
};
const initialState = {
  cart: getLocalCartData(),
  totalItem: "",
  totalAmount: "",
  shippingFee: 50000,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, color, quantity, singleProduct) => {
    dispatch({
      type: "ADDTOCART",
      payload: { id, color, quantity, singleProduct },
    });
  };

  //Add data in Local Storage
  useEffect(() => {
    localStorage.setItem("cartStorage", JSON.stringify(state.cart));
  }, [state.cart]);

  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVEITEM", payload: id });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
