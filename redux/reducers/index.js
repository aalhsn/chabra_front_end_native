import { combineReducers } from "redux";

// Reducers
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import productDetailReducer from "./productDetailReducer";
import basketReducer from "./basketReducer"

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  authReducer: authReducer,
  productDetailReducer: productDetailReducer,
  basketReducer: basketReducer
});
export default rootReducer;
