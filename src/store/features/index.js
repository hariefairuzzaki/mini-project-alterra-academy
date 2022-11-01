import { combineReducers } from "redux";
import totalPriceSlice from "./totalPriceSlice";

const rootReducers = combineReducers({
  totalPrice: totalPriceSlice,
});

export default rootReducers;
