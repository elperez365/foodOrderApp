import { useState } from "react";
import logo from "../assets/logo.jpg";

import Button from "../reusable/Button";
import Cart from "./Cart";
import History from "./History";

export default function Header() {
  const [isOpen, setIsOpen] = useState({ cart: false, history: false });

  const handleOpen = (modalName, action) => {
    const actions = {
      OPEN: true,
      CLOSE: false,
    };
    setIsOpen((prev) => ({ ...prev, [modalName]: actions[action] }));
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>REACTFOOD</h1>
      </div>
      <Button
        className="text-button"
        onClick={() => handleOpen("history", "OPEN")}
      >
        History (1)
      </Button>
      <History
        isOpen={isOpen.history}
        onClose={() => handleOpen("history", "CLOSE")}
      />
      <Button
        className="text-button"
        onClick={() => handleOpen("cart", "OPEN")}
      >
        Cart (4)
      </Button>
      <Cart isOpen={isOpen.cart} onClose={() => handleOpen("cart", "CLOSE")} />
    </header>
  );
}
