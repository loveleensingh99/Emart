import { filterReducer } from "src/reducer/filterReducer";
import { useProductContext } from "./productContext";

const { createContext, useContext, useReducer, useEffect } = require("react");

const FilterContext = createContext();
const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "lowest",
  filters: {
    searchValue: "",
    category: "All",
    company: "All",
    color: "All",
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  console.log("Products from filter Context", products);
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    state.sortingValue = sortValue;
    dispatch({
      type: "SORTING_PRODUCTS",
      payload: { products: products },
    });
  };

  // useEffect(() => {
  //   console.log("useEffet sorting product work");
  // }, [state.sortingValue]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.filters]);

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  const handleClearFilter = () => {
    return dispatch({ type: "CLEAR_FILTER_PRODUCTS" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleSortChange,
        updateFilterValue,
        handleClearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
