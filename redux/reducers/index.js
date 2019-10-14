import { combineReducers } from "redux";

// Reducers
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  authReducer: authReducer,
});
export default rootReducer;