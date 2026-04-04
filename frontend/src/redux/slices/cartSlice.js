import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload;

      state.items.forEach((item) => {
        state.totalItems += item.quantity;
        state.totalPrice += item.price;
      });
    },

        
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i._id === itemId);
      if (existingItem.size > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i._id !== itemId);
      }
      state.totalItems -= 1;
      state.totalPrice -= existingItem.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
