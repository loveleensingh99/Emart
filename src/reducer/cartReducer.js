import React from "react";

export default function cartReducer(state, action) {
  if (action.type === "ADDTOCART") {
    let { id, color, quantity, singleProduct } = action.payload;

    let existingProduct = state.cart.find(
      (curItem) => (curItem.id = id + color)
    );
    if (existingProduct) {
      let updatedProduct = state.cart.map((curEle) => {
       
        if ((curEle.id = id + color)) {
          let newQuantity = curEle.quantity + quantity;
          if (newQuantity >= curEle.stock) {
            newQuantity = curEle.stock;
          }
          return {
            ...curEle,
            quantity: newQuantity,
          };
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
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
