import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./redux/slice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});
