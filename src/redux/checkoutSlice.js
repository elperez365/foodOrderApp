import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInCheckout: false,
  isSubmitted: false,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    goToCheckout: (state) => {
      state.isInCheckout = true;
    },
    exitCheckout: (state) => {
      state.isInCheckout = false;
    },
    isSubmitted: (state) => {
      state.isSubmitted = true;
    },
    isNotSubmitted: (state) => {
      state.isSubmitted = false;
    },
  },
});

export const { goToCheckout, exitCheckout, isSubmitted, isNotSubmitted } =
  checkoutSlice.actions;
