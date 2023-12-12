export const FoodReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "MY_API_DATA":
      const exclusive = action.payload.foods.filter((currentElm) => {
        return currentElm.offer === "Exclusive";
      });
      return {
        ...state,
        isLoading: false,
        foods: action.payload.foods,
        featureFoods: exclusive,
      };
    case "API_ERROR":
      return { ...state, isLoading: false, isError: true };
    // get single foods data
    case "SET_SINGLE_LOADING":
      return { ...state, isSingleLoading: true };
    case "SET_SINGLE_FOODS":
      const singleFood = action.payload.data.foods.filter((currentElm)=>{
        return currentElm.name === action.payload.name
      });
     
      return {
        ...state,
        isSingleLoading: false,
        singleFoods: singleFood,
      };
    case "SINGLE_ERROR":
      return { ...state, isSingleLoading: false, isError: true };

    default:
      return state;
  }
};
