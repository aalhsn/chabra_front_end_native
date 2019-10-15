import * as actionTypes from "../actions/types";

const initialState = {
    products: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS:
            const products = action.payload;
            return {
                ...state,
                products: products,
                loading: false
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