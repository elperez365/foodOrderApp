import Modal from "../modals/Modal";
import Button from "../reusable/Button";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import OrdersList from "../components/OrdersList";
import OrderDetails from "../components/OrderDetails";
import { useCallback, useState } from "react";
import { fetchOrders } from "../http";
import { setHistories } from "../redux/historySlice";
import { useFetch } from "../hooks/useFetch";

export default function History({}) {
  const { data, error } = useFetch(fetchOrders, setHistories, "history");
  const isOpen = useSelector((state) => state.modal.history);
  const [selectedOrder, setSelectedOrder] = useState({});
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeModal("history"));
  }, [dispatch]);

  const handleSelectOrder = useCallback((order) => {
    setSelectedOrder(order);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={() => handleClose()}>
      {error && <p>{error.message}</p>}
      {!error && (
        <>
          <div className="history-orders">
            <h2>History orders</h2>
            <div className="histories-layout">
              <OrdersList
                history={data}
                onSelect={handleSelectOrder}
                selectedOrder={selectedOrder}
              />
              <OrderDetails selectedOrder={selectedOrder} />
            </div>
          </div>
        </>
      )}
      <div className="modal-actions">
        <Button onClick={() => handleClose()}>Close</Button>
      </div>
    </Modal>
  );
}
