import CartItem from "../components/CartItem";
import Modal from "../modals/Modal";
import Button from "../reusable/Button";

export default function Cart({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Your Cart</h2>
      <ul>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <p className="cart-total">Total: $35.96</p>
      <div className="modal-actions">
        <Button className="text-button" onClick={() => onClose()}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </div>
    </Modal>
  );
}
