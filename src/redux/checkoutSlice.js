import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInCheckout: false,
  items: [],
  total: 0,
  consumer: {
    name: "",
    email: "",
    street: "",
    postalCode: "",
    city: "",
  },
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    goToCheckout: (state) => {
      state.isInCheckout = true;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setConsumer: (state, action) => {
      state.consumer = action.payload;
    },
  },
});
