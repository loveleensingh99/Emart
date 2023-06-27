import { filterReducer } from "src/reducer/filterReducter";
import { useProductContext } from "./productContext";

const { createContext, useContext, useReducer, useEffect } = require("react");

const FilterContext = createContext();
const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "lowest",
};

//what is useState

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
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, handleSortChange }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
