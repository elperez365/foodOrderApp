import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_MEALS } from "../data/meals";

const initialState = DUMMY_MEALS;

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
