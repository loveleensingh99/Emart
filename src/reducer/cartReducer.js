import React from "react";

export default function cartReducer(state, action) {
  if (action.type === "ADDTOCART") {
    let { id, color, quantity, singleProduct } = action.payload;

    let cartProduct;
    cartProduct = {
      id: id + color,
      productName: singleProduct.name,
      color: color,
      quantity: quantity,
      image: singleProduct.image[0],
      price: singleProduct.price,
      stock: singleProduct.stock,
    };

    return { ...state, cart: [...state.cart, cartProduct] };
  }

  if (action.type === "REMOVEITEM") {
    let id = action.payload;
    let updatedCart = state.cart.filter((item) => item.id !== id);

    return {
      ...state,
      cart: updatedCart,
    };
  }
}
