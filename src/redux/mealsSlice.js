import { createSlice } from "@reduxjs/toolkit";
import { fetchMeals, host } from "../http";

const initialState = [];

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setMeals: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMeals } = mealsSlice.actions;
