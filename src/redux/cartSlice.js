import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      }
      if (!item) {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    decrementQuantityFromItem: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        return;
      }

      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload.id);
        state.splice(index, 1);
      }
    },
    incrementQuantityFromItem: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    clearCart: (state) => {
      state = [];
      return state;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantityFromItem,
  incrementQuantityFromItem,
  calculateTotalPrice,
  clearCart,
} = cartSlice.actions;
