import * as actionTypes from "../actions/types";

const initialState = {
  products: [],
  filteredProducts: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      const products = action.payload;
      return {
        ...state,
        products: products,
        filteredProducts: products,
        loading: false
      };
    case actionTypes.FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => {
          return `${product.name}`.toLowerCase().includes(action.payload);
        })
      };
    case actionTypes.LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
