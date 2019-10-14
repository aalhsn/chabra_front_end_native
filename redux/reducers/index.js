import { combineReducers } from "redux";

// Reducers
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import productDetailReducer from "./productDetailReducer";

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  authReducer: authReducer,
  productDetailReducer: productDetailReducer
});
export default rootReducer;
