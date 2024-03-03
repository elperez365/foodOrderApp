export default function OrderDetails({ selectedOrder }) {
  return (
    <div className="order-detail histories-container">
      <div id="order-detail-header">
        <h3>Order detail</h3>
        <p>
          <strong>customer : </strong>
          <span> {selectedOrder.customer.name}</span>
        </p>
      </div>
      <div id="order-detail-body">
        <ul>
          {selectedOrder.items.map((item) => (
            <li key={item.id}>
              <p>
                {item.quantity} x <strong>{item.name}</strong>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div id="order-detail-footer">
        <p>
          <strong>email : </strong>
          <span> {selectedOrder.customer.email}</span>
        </p>
        <p>
          <strong>address : </strong>
          <span>
            {selectedOrder.customer.street}, {selectedOrder.customer.postalCode}
            , {selectedOrder.customer.city}
          </span>
        </p>
        <p>
          <strong>Total: $ {selectedOrder.total.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
}
