import Modal from "../modals/Modal";
import Button from "../reusable/Button";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";

export default function History({}) {
  const isOpen = useSelector((state) => state.modal.history);
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal("history"));
  };

  return (
    <Modal isOpen={isOpen} onClose={() => handleClose()}>
      <div className="history-orders">
        <h2>History orders</h2>
        <ul className="histories-contrainer">
          {history?.map((order) => (
            <li key={order.id}>
              <h3>Order ID: {order.id}</h3>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </li>
                ))}
              </ul>
              <p>Total: ${order.total.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="modal-actions">
        <Button onClick={() => handleClose()}>Close</Button>
      </div>
    </Modal>
  );
}
