import { useDispatch, useSelector } from "react-redux";
import Button from "../reusable/Button";
import { exitCheckout, isSubmitted } from "../redux/checkoutSlice";
import CheckoutForm from "../components/Form/CheckoutForm";
import { useRef } from "react";
import { addToHistory } from "../redux/historySlice";
import { Consumer, Order } from "../classes";

export const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const submitRef = useRef();
  const handleSubmit = () => {
    const { isValid, fields } = submitRef.current.submit();

    if (isValid) {
      const consumer = new Consumer(
        fields[0].value,
        fields[1].value,
        fields[2].value,
        fields[3].value,
        fields[4].value
      );
      const total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);

      const id = Math.random() * 1000;

      const order = new Order(
        id.toFixed(0),
        cart,
        total,
        new Date().toLocaleDateString(),
        consumer
      );
      dispatch(addToHistory(order));
      dispatch(isSubmitted());
      dispatch(exitCheckout());
      console.log("Order Submitted", fields);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>

      <CheckoutForm ref={submitRef} />
      <div className="modal-actions">
        <Button
          className="text-button"
          onClick={() => dispatch(exitCheckout())}
        >
          Close
        </Button>
        <Button onClick={() => handleSubmit()}>Submit Order</Button>
      </div>
    </div>
  );
};
