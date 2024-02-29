import Modal from "../modals/Modal";
import Button from "../reusable/Button";

export default function History({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Modal</h2>
      <p>Modal content</p>
      <Button className="text-button">Close</Button>
    </Modal>
  );
}
