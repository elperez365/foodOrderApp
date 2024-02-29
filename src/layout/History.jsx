import Modal from "../modals/Modal";
import Button from "../reusable/Button";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../redux/modalSlice";

export default function History({}) {
  const isOpen = useSelector((state) => state.modal.history);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal("history"));
  };

  return (
    <Modal isOpen={isOpen} onClose={() => handleClose()}>
      <h2>Modal</h2>
      <p>Modal content</p>
      <Button onClick={() => handleClose()}>Close</Button>
    </Modal>
  );
}
