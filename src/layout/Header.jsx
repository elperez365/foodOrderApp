import logo from "../assets/logo.jpg";

import Button from "../reusable/Button";

import History from "./History";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modalSlice";
import CartOutlet from "./CartOutlet";

export default function Header() {
  const history = useSelector((state) => state.history);
  const cart = useSelector((state) => state.cart);
  const isSubmitted = useSelector((state) => state.checkout.isSubmitted);

  const dispatch = useDispatch();

  const handleOpen = (modalName) => {
    dispatch(openModal(modalName));
  };

  const itemsTotal = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  // force re-render when isSubmitted changes
  const key = isSubmitted ? "submitted" : "notSubmitted";

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>REACTFOOD</h1>
      </div>
      {history.length > 0 && (
        <Button className="text-button" onClick={() => handleOpen("history")}>
          History {"(" + history.length + ")"}
        </Button>
      )}

      <History key={key} />
      <Button className="text-button" onClick={() => handleOpen("cart")}>
        Cart {"(" + itemsTotal + ")"}
      </Button>
      <CartOutlet />
    </header>
  );
}
