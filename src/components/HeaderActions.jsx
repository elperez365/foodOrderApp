import Button from "../reusable/Button";

import History from "../layout/History";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modalSlice";
import CartOutlet from "../layout/CartOutlet";
import { useCallback, useMemo } from "react";

export default function HeaderActions() {
  const history = useSelector((state) => state.history);
  const cart = useSelector((state) => state.cart);
  const isSubmitted = useSelector((state) => state.checkout.isSubmitted);
  const dispatch = useDispatch();

  const handleOpen = useCallback(
    (modalName) => {
      dispatch(openModal(modalName));
    },
    [dispatch]
  );

  const itemsTotal = useMemo(
    () =>
      cart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0),
    [cart]
  );

  // force re-render when isSubmitted changes
  const key = isSubmitted ? "submitted" : "notSubmitted";

  return (
    <>
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
    </>
  );
}
