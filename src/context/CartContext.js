import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer";
const cartContext = createContext();
let initialState = {
  cart: [],
  total_amount: "",
  shipping_fees: 5,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addToCart = (id, image, name, price, amount, singleFoods) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, image, name, price, amount, singleFoods },
    });
  };
  // increament and decreament product
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREAMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREAMENT", payload: id });
  };
  // total price
  useEffect(() => {
   dispatch({type:'CART_TOTAL_PRICE'})
  }, [state.cart])
  
  return (
    <cartContext.Provider value={{ ...state, addToCart,setDecrease,setIncrease }}>
      {children}
    </cartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(cartContext);
};
