const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, image, name, price, amount, singleFoods } = action.payload;
      // tacket the existing foods
      let existingFoods = state.cart.find(
        (currentElm) => currentElm.name === name
      );

      if (existingFoods) {
        let updatedProduct = state.cart.map((elm) => {
          let newAmount;
          if (elm.name == name) {
            newAmount = elm.amount + amount;
            return {
              ...elm,
              amount: newAmount,
            };
          } else {
            return elm;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + Math.random(),
          name,
          image,
          amount,
          price,
        };
        return { ...state, cart: [...state.cart, cartProduct] };
      }
    // to set increament and decreament
    case "SET_DECREAMENT":
      let updatedProduct = state.cart.map((currentElm) => {
        if (currentElm.id === action.payload) {
          let decAmount = currentElm.amount - 1;
          if (decAmount <= 0) {
            decAmount = 1
          }
          return {
            ...currentElm,
            amount: decAmount,
          };
        } else {
          return currentElm;
        }
      });
      return { ...state, cart: updatedProduct };
    case "SET_INCREAMENT":
      let incupdatedProduct = state.cart.map((currentElm) => {
        if (currentElm.id === action.payload) {
          let incAmount = currentElm.amount + 1;
          return {
            ...currentElm,
            amount: incAmount,
          };
        } else {
          return currentElm;
        }
      });
      return { ...state, cart: incupdatedProduct };
    case "CART_TOTAL_PRICE":
      let total_price = state.cart.reduce((initalval, currentElm) => {
        let { price, amount } = currentElm;
        initalval = initalval + price * amount;
        return initalval;
      }, 0);
      return {
        ...state,
        total_amount: total_price,
      };
    default:
      return state;
  }
};

export default CartReducer;
