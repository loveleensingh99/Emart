import cartReducer from "src/reducer/cartReducer";

const { createContext, useReducer, useContext } = require("react");

const CartContext = createContext();

const initialState = {
  cart: [],
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

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
