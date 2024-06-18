import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";
import dishesReducer from "./slices/dishesSlice";
export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});
