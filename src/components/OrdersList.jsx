export default function OrdersList({ history, onSelect, selectedOrder }) {
  const classListItem = (order) => {
    if (selectedOrder.id === order.id) {
      return "active";
    }
    return undefined;
  };

  return (
    <ul className="histories-container orders-list">
      {history?.map((order) => (
        <li
          className={classListItem(order)}
          key={order.id}
          onClick={() => onSelect(order)}
        >
          <p>
            <strong>{Number(order.id).toFixed(0)}</strong>
          </p>
          <p>{order.date}</p>
          <p>${order.total.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
}
