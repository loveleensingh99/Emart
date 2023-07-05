import React from "react";

export default function cartReducer(state, action) {
  if (action.type === "ADDTOCART") {
    let { id, color, quantity, singleProduct } = action.payload;

    console.log("🚀 ~ state.cart", state.cart);
    //Tackle the existing product
    let existingProduct = state.cart.find((item) => (item.id == id + color));
    console.log(
      "🚀 ~ file: cartReducer.js:9 ~ cartReducer ~ existingProduct:",
      existingProduct
    );

    if (existingProduct) {
      console.log("Existing Product Found");
      let updatedProduct = state.cart.map((item) => {
        if (item.id == id + color) {
          let newQuantity = item.quantity + quantity;
          if (newQuantity >= item.stock) {
            newQuantity = item.stock;
          }
          return {
            ...item,
            quantity: newQuantity,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      console.log("Existing Product Not Found");

      let cartProduct = {
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
  }

  if (action.type === "REMOVEITEM") {
    let id = action.payload;
    let updatedCart = state.cart.filter((item) => item.id !== id);

    return {
      ...state,
      cart: updatedCart,
    };
  }
  return state;
}
