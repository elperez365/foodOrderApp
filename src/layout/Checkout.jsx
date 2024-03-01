import { useDispatch } from "react-redux";
import Button from "../reusable/Button";
import { exitCheckout } from "../redux/checkoutSlice";
import CheckoutForm from "../components/Form/CheckoutForm";
import { useRef } from "react";

export const Checkout = () => {
  const dispatch = useDispatch();
  const submitRef = useRef();
  const handleSubmit = () => {
    submitRef.current.submit();
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
