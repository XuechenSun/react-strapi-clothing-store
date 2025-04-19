import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartReducer";

const store = configureStore({
  reducer: { cart: cartReducers },
});
export default store;
