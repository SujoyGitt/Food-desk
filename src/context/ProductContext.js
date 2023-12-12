import { createContext, useContext, useEffect, useReducer } from "react";
import { FoodApi } from "../FoodApi";
import { FoodReducer } from "../Reducer/FoodReducer";

export const AppContext = createContext();
let initialState = {
  isLoading: false,
  isError: false,
  foods: [],
  featureFoods: [],
  isSingleLoading: false,
  singleFoods: {},
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FoodReducer, initialState);
  const getFoods = async (data) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let response = data;
      dispatch({ type: "MY_API_DATA", payload: response });
    } catch (error) {
      dispatch({ type: "API_ERROR", payload: error });
    }
  };
  // my 2nd api call for single Foods
  const getSingleFoods = async (data,name) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      let singledata = {data,name:name};
      dispatch({ type: "SET_SINGLE_FOODS", payload: singledata });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR", payload: error });
    }
  };
  useEffect(() => {
    getFoods(FoodApi);
  }, []);

  return (
    <AppContext.Provider value={{ ...state,getSingleFoods}}>{children}</AppContext.Provider>
  );
};
// custom hooks
export const useFoodContext = () => {
  return useContext(AppContext);
};
