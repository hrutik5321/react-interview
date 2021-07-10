import { combineReducers } from "redux";
import ProductReducer from "./reducers/product";
import productTableReducer from "./reducers/productTable";
import showTableReducer from "./reducers/showTable";

const allReducers = combineReducers({
  product: ProductReducer,
  showTable: showTableReducer,
  productTable: productTableReducer,
});

export default allReducers;
