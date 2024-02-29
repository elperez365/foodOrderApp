import CartItem from "../components/CartItem";
import Modal from "../modals/Modal";
import Button from "../reusable/Button";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";

export default function Cart() {
  const isOpen = useSelector((state) => state.modal.cart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal("cart"));
  };

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Modal isOpen={isOpen} onClose={() => handleClose()}>
      <h2>Your Cart</h2>
      <ul>
        {cart?.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
      <div className="modal-actions">
        <Button className="text-button" onClick={() => handleClose()}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </div>
    </Modal>
  );
}
