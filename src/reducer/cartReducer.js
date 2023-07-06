 

export default function cartReducer(state, action) {
  if (action.type === "ADDTOCART") {
    let { id, color, quantity, singleProduct } = action.payload;

    console.log("🚀 ~ state.cart", state.cart);
    //Tackle the existing product
    let existingProduct = state.cart.find((item) => item.id === id + color);
    console.log(
      "🚀 ~ file: cartReducer.js:9 ~ cartReducer ~ existingProduct:",
      existingProduct
    );

    if (existingProduct) {
      console.log("Existing Product Found");
      let updatedProduct = state.cart.map((item) => {
        if (item.id === id + color) {
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

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let incQuantity = item.quantity + 1;
        if (incQuantity >= item.stock) {
          incQuantity = item.stock;
        }
        return {
          ...item,
          quantity: incQuantity,
        };
      } else {
        return item;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let decQuantity = item.quantity - 1;
        if (decQuantity <= 1) {
          decQuantity = 1;
        }
        return {
          ...item,
          quantity: decQuantity,
        };
      } else {
        return item;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVEITEM") {
    let id = action.payload;
    let updatedCart = state.cart.filter((item) => item.id !== id);

    return {
      ...state,
      cart: updatedCart,
    };
  }

  //Cart Items Count
  if (action.type === "CARTTOTALITEM") {
    let updatedItemValue = state.cart.reduce((initiaVal, item) => {
      let { quantity } = item;
      initiaVal = initiaVal + quantity;
      return initiaVal;
    }, 0);
    return {
      ...state,
      totalItem: updatedItemValue,
    };
  }

  //Cart AMOUNT TOTAL
  if (action.type === "CART_AMOUNT_TOTAL") {
    let updatedTotalAmount = state.cart.reduce((initialVal, item) => {
      let { price, quantity } = item;
      initialVal = initialVal + quantity * price;
      return initialVal;
    }, 0);

    console.log(
      "🚀 ~ file: cartReducer.js:1  20 ~ cartReducer ~ updatedTotalAmount:",
      updatedTotalAmount
    );
    return {
      ...state,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
}
