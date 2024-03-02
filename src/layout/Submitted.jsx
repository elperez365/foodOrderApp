import { isNotSubmitted } from "../redux/checkoutSlice";
import { closeModal } from "../redux/modalSlice";
import Button from "../reusable/Button";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

export default function Submitted() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(isNotSubmitted());
    dispatch(clearCart());
    dispatch(closeModal("cart"));
  };
  return (
    <>
      <h2>Success!</h2>

      <p>Your order was submitted succesfully</p>
      <p>
        We will get back to you with more-details via email within next few
        minutes
      </p>
      <div className="modal-actions">
        <Button onClick={() => handleClose()}>Okay</Button>
      </div>
    </>
  );
}
