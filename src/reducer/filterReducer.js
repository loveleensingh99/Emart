import { FormatPrice } from "src/Helper/ForamtPrice";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((item) => item.price);
      console.log(
        "🚀 ~ file: filterReducer.js:7 ~ filterReducer ~ priceArr:",
        priceArr
      );

      let sortedPriceArr = priceArr.sort((a, b) => a - b);
      console.log(
        "🚀 ~ file: filterReducer.js:10 ~ filterReducer ~ sortedPriceArr:",
        sortedPriceArr
      );

      let maxPrice = sortedPriceArr[sortedPriceArr.length - 1];
      console.log(
        "🚀 ~ file: filterReducer.js:13 ~ filterReducer ~ maxPrice:",
        maxPrice
      );

      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
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

      const { searchValue, category, company, color, price } = state.filters;
      if (searchValue) {
        tempFilterProducts = tempFilterProducts.filter((curEle) => {
          return curEle.name.toLowerCase().includes(searchValue.toLowerCase());
        });
      }

      if (category !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curEle) => {
          return curEle.category === category;
        });
      }

      if (company !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curEle) => {
          return curEle.company === company;
        });
      }

      if (color !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curEle) => {
          return curEle.colors.includes(color);
        });
      }
      if (price === 0) {
        console.log("price =0");
        tempFilterProducts = tempFilterProducts.filter(
          (curEle) => curEle.price == price
        );
      } else {
        console.log("in else of price");

        tempFilterProducts = tempFilterProducts.filter((curEle) => {
          return curEle.price <= price;
        });
      }

      return {
        ...state,
        filterProducts: tempFilterProducts,
      };
    }
    case "CLEAR_FILTER_PRODUCTS": {
      console.log("IN crear filter products");
      return {
        ...state,
        filters: {
          searchValue: "",
          category: "All",
          company: "All",
          color: "All",
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
          minPrice: 0,
        },
      };
    }

    default:
      return state;
  }
};
