import { FETCH_PRODUCT_DETAIL, RESET_PRODUCT_DETAIL } from "../actions/types";

const initialState = {
  product: null,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL:
      const product = action.payload;
      return {
        ...state,
        product: product,
        loading: false
      };
    case RESET_PRODUCT_DETAIL:
      return {
        ...state,
        product: null
      };
    default:
      return state;
  }
};

export default reducer;
