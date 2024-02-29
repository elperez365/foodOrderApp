import Button from "../reusable/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { host } from "../http";

export default function MealCard({ id, title, price, description, image }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { id, name: title, price, description, image };
    dispatch(addToCart(item));
  };
  return (
    <section className="meal-item">
      <article>
        <img src={`${host}/${image}`} alt={title} />
        <h3>{title}</h3>
        <div>
          <span className="meal-item-price">${price}</span>
        </div>

        <p className="meal-item-description">{description}</p>
        <p className="meal-item-actions">
          <Button onClick={() => handleAddToCart()}>Add to Cart</Button>
        </p>
      </article>
    </section>
  );
}
