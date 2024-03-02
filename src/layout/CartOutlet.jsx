import Modal from "../modals/Modal";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";

import { exitCheckout, isNotSubmitted } from "../redux/checkoutSlice";
import { Checkout } from "./Checkout";
import Submitted from "./Submitted";
import { clearCart } from "../redux/cartSlice";
import Cart from "./Cart";

export default function CartOutlet() {
  const isOpen = useSelector((state) => state.modal.cart);
  const cart = useSelector((state) => state.cart);
  const isInCheckout = useSelector((state) => state.checkout.isInCheckout);
  const isSubmitted = useSelector((state) => state.checkout.isSubmitted);
  const dispatch = useDispatch();

  const handleClose = () => {
    if (isSubmitted) dispatch(clearCart());
    dispatch(isNotSubmitted());
    dispatch(exitCheckout());
    dispatch(closeModal("cart"));
  };

  return (
    <Modal isOpen={isOpen} onClose={() => handleClose()}>
      {isInCheckout && <Checkout />}
      {!isInCheckout && isSubmitted && <Submitted />}
      {!isInCheckout && !isSubmitted && (
        <Cart handleClose={handleClose} cart={cart} />
      )}
    </Modal>
  );
}
