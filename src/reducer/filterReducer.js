export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProducts = [...action.payload.products];
      const sortingProducts = (a, b) => {
        switch (state.sortingValue) {
          case "lowest": {
            return a.price - b.price;
          }

          case "highest": {
            return b.price - a.price;
          }

          case "atoz": {
            return a.name.localeCompare(b.name);
          }

          case "ztoa": {
            return b.name.localeCompare(a.name);
          }
          default: {
          }
        }
      };

      newSortData = tempSortProducts.sort(sortingProducts);
      return {
        ...state,
        filterProducts: newSortData,
      };

    case "UPDATE_FILTER_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "FILTER_PRODUCTS": {
      let { allProducts } = state;
      let tempFilterProducts = [...allProducts];

      const { searchValue } = state.filters;
      if (searchValue) {
        tempFilterProducts = tempFilterProducts.filter((curEle) => {
          return curEle.name.toLowerCase().includes(searchValue.toLowerCase());
        });
      }
      return {
        ...state,
        filterProducts: tempFilterProducts,
      };
    }
    default:
      return state;
  }
};
