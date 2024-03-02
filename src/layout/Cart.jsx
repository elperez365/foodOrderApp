import { toast } from "react-toastify";
import CartItem from "../components/CartItem";
import { goToCheckout } from "../redux/checkoutSlice";
import Button from "../reusable/Button";
import { useDispatch } from "react-redux";

export default function Cart({ handleClose, cart }) {
  const dispatch = useDispatch();

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    dispatch(goToCheckout());
  };

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <>
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
        <Button onClick={() => handleCheckout()}>Go to Checkout</Button>
      </div>
    </>
  );
}
