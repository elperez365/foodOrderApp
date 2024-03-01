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
    date: "2021-06-01",
    consumer: {
      name: "",
      email: "",
      street: "",
      postalCode: "",
      city: "",
    },
  },
  {
    id: "223",
    items: [
      {
        id: "m2",
        name: "Burger",
        price: "12.99",
        description:
          "Juicy beef patty with fresh lettuce, cheese, tomatoes, onions and pickles. Served with a side of fries.",
        image: "images/burger.jpg",
        quantity: 1,
      },
    ],
    total: 12.99,
    date: "2021-06-02",
    consumer: {
      name: "",
      email: "",
      street: "",
      postalCode: "",
      city: "",
    },
  },
  {
    id: "224",
    items: [
      {
        id: "m3",
        name: "Barbecue Ribs",
        price: "16.99",
        description:
          "Tender pork ribs, slow-cooked and basted with our signature barbecue sauce. Served with coleslaw and fries.",
        image: "images/barbecue-ribs.jpg",
        quantity: 1,
      },
    ],
    total: 16.99,
    date: "2021-06-03",
    consumer: {
      name: "",
      email: "",
      street: "",
      postalCode: "",
      city: "",
    },
  },
  {
    id: "225",
    items: [
      {
        id: "m4",
        name: "Fried Chicken",
        price: "18.99",
        description:
          "Crispy, golden brown chicken with a side of buttermilk waffles and maple syrup.",
        image: "images/fried-chicken.jpg",
        quantity: 1,
      },
    ],
    total: 18.99,
    date: "2021-06-04",
    consumer: {
      name: "",
      email: "",
      street: "",
      postalCode: "",
      city: "",
    },
  },
  {
    id: "226",
    items: [
      {
        id: "m5",
        name: "Spaghetti Carbonara",
        price: "14.99",
        description:
          "Spaghetti pasta with crispy bacon, garlic, and parmesan cheese in a creamy sauce.",
        image: "images/spaghetti-carbonara.jpg",
        quantity: 1,
      },
    ],
    total: 14.99,
    date: "2021-06-05",
    consumer: {
      name: "",
      email: "",
      street: "",
      postalCode: "",
      city: "",
    },
  },
  {
    id: "227",
    items: [
      {
        id: "m6",
        name: "Sushi",
        price: "22.99",
        description:
          "Fresh, hand-rolled sushi with a variety of fish, vegetables, and rice. Served with soy sauce and pickled ginger.",
        image: "images/sushi.jpg",
        quantity: 1,
      },
    ],
    total: 22.99,
    date: "2021-06-06",
    consumer: {
      name: "",
      email: "",
      street: "",
      postalCode: "",
      city: "",
    },
  },
  {
    id: "228",
    items: [
      {
        id: "m7",
        name: "Pizza",
        price: "20.99",
        description:
          "Freshly baked pizza with tomato sauce, cheese, and a variety of toppings.",
        image: "images/pizza.jpg",
        quantity: 1,
      },
    ],
    total: 20.99,
    date: "2021-06-07",
    consumer: {
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
  },
});

export const { addToHistory } = historySlice.actions;
