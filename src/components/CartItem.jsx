const defaultItem = {
  id: "1",
  name: "ProductName",
  price: 8.99,
  quantity: 1,
};

export default function CartItem({ item = defaultItem }) {
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x ${item.price}
      </p>
      <div className="cart-item-actions">
        <button>-</button>
        <span>{item.quantity}</span>
        <button>+</button>
      </div>
    </li>
  );
}
