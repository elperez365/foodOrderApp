import { useState } from "react";
import logo from "../assets/logo.jpg";

import Button from "../reusable/Button";
import Cart from "./Cart";
import History from "./History";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modalSlice";

export default function Header() {
  const history = useSelector((state) => state.history);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleOpen = (modalName) => {
    dispatch(openModal(modalName));
  };

  const itemsTotal = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>REACTFOOD</h1>
      </div>
      <Button className="text-button" onClick={() => handleOpen("history")}>
        History {"(" + history.length + ")"}
      </Button>
      <History />
      <Button className="text-button" onClick={() => handleOpen("cart")}>
        Cart {"(" + itemsTotal + ")"}
      </Button>
      <Cart />
    </header>
  );
}
