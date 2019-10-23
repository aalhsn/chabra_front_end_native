import { combineReducers } from "redux";

// Reducers
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errors";
import productDetailReducer from "./productDetailReducer";
import basketReducer from "./basketReducer";

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  authReducer: authReducer,
  errors: errorReducer,
  productDetailReducer: productDetailReducer,
  basketReducer: basketReducer
});
export default rootReducer;
