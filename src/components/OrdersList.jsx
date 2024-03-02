export default function OrdersList({ history, onSelect }) {
  return (
    <ul className="histories-container orders-list">
      {history?.map((order) => (
        <li key={order.id} onClick={() => onSelect(order)}>
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
