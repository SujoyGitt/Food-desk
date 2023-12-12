export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_FOODS":
      return {
        ...state,
        allFoods: [...action.payload],
        filterFoods: [...action.payload],
      };
    case "GET_SORT_VALUE":
      console.log(action.payload);
      return { ...state, sorting_value: action.payload };
    case "SORTING_PRODUCT":
      let newValue;
      let tempSortFoods = [...action.payload];
      if (state.sorting_value === "Exclusive") {
        newValue = tempSortFoods.filter((currentElm) => {
          return currentElm.offer === "Exclusive";
        });
      }
      if (state.sorting_value === "a - z") {
        newValue = tempSortFoods.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sorting_value === "z - a") {
        newValue = tempSortFoods.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      if (state.sorting_value === "Price Low to High") {
        const sortingFoods = (a, b) => {
          return a.price - b.price;
        };
        newValue = tempSortFoods.sort(sortingFoods);
      }
      if (state.sorting_value === "Price High to Low") {
        const sortingFoods = (a, b) => {
          return b.price - a.price;
        };
        newValue = tempSortFoods.sort(sortingFoods);
      }
      if (state.sorting_value === "All") {
       
        newValue = tempSortFoods;
      }
      return { ...state, filterFoods: newValue };
    default:
      return state;
  }
};
