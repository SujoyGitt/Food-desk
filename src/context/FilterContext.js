import { createContext, useContext, useEffect, useReducer } from "react";
import { useFoodContext } from "./ProductContext";
import { FilterReducer } from "../Reducer/FilterReducer";
const filterContext = createContext();
let initialState = {
  allFoods: [],
  filterFoods: [],
  sorting_value: "Price Low to High",
};
export const FilterContextProvider = ({ children }) => {
  const { foods } = useFoodContext();
  const [state, dispatch] = useReducer(FilterReducer, initialState);
  const sorting = (e) => {
    dispatch({ type: "GET_SORT_VALUE", payload: e.target.innerText });
  };
  // to sort the product
  useEffect(() => {
    dispatch({type:'SORTING_PRODUCT',payload:foods})
  }, [state.sorting_value])
  
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_FOODS", payload: foods });
  }, [foods]);

  return (
    <filterContext.Provider value={{ ...state, sorting }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(filterContext);
};
