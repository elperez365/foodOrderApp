import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_ORDERS } from "../data/histories";

const initialState = DUMMY_ORDERS;

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      state.push(action.payload);
    },
    setHistories: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToHistory, setHistories } = historySlice.actions;
