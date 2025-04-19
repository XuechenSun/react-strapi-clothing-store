import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((i) => i.id !== action.payload.id);
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// console.log("cartSlice is: ", cartSlice);

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
