import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantityFromItem,
  decrementQuantityFromItem,
} from "../redux/cartSlice";

const defaultItem = {
  id: "1",
  name: "ProductName",
  price: 8.99,
  quantity: 1,
};

export default function CartItem(item = defaultItem) {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementQuantityFromItem(item));
  };
  const handleDecrement = () => {
    dispatch(decrementQuantityFromItem(item));
  };
  return (
    <li className="cart-item">
      <p>
        <span>{item.quantity} x</span>
        <span>{item.name}</span>
        <span>${item.price}</span>
      </p>
      <div className="cart-item-actions">
        <button onClick={() => handleDecrement()}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleIncrement()}>+</button>
      </div>
    </li>
  );
}
