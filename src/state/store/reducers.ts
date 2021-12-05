import { combineReducers } from "redux";
import productReducer from "../slices/products/productSlice";

const rootReducer = combineReducers({
  vitl: productReducer,
});

export default rootReducer;
