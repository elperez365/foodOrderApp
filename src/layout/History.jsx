import Modal from "../modals/Modal";
import Button from "../reusable/Button";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import OrdersList from "../components/OrdersList";
import OrderDetails from "../components/OrderDetails";
import { useState } from "react";
import { fetchOrders } from "../http";
import { setHistories } from "../redux/historySlice";
import { useFetch } from "../hooks/useFetch";

export default function History({}) {
  const isOpen = useSelector((state) => state.modal.history);
  const history = useSelector((state) => state.history);
  const [selectedOrder, setSelectedOrder] = useState(history ? history[0] : []);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    fetchOrders,
    setHistories,
    "history"
  );

  const handleClose = () => {
    dispatch(closeModal("history"));
  };

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => handleClose()}>
      <div className="history-orders">
        <h2>History orders</h2>
        <div className="histories-layout">
          <OrdersList
            history={history}
            onSelect={handleSelectOrder}
            selectedOrder={selectedOrder}
          />
          <OrderDetails selectedOrder={selectedOrder} />
        </div>
      </div>

      <div className="modal-actions">
        <Button onClick={() => handleClose()}>Close</Button>
      </div>
    </Modal>
  );
}
