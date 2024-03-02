import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "222",
    items: [
      {
        id: "m1",
        name: "Mac & Cheese",
        price: "8.99",
        description:
          "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
        image: "images/mac-and-cheese.jpg",
        quantity: 1,
      },
    ],
    total: 8.99,
    date: "2/4/2021",
    customer: {
      name: "",
      email: "",
      street: "",
      postalCode: "",
      city: "",
    },
  },
];

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
