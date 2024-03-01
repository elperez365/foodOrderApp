import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { modalSlice } from "./modalSlice";
import { historySlice } from "./historySlice";
import { mealsSlice } from "./mealsSlice";
import { checkoutSlice } from "./checkoutSlice";

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalSlice.reducer,
    history: historySlice.reducer,
    meals: mealsSlice.reducer,
    checkout: checkoutSlice.reducer,
  },
});
