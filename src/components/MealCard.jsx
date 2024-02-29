import Button from "../reusable/Button";

export default function MealCard({ title, price, description, image }) {
  return (
    <section className="meal-item">
      <article>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <div>
          <span className="meal-item-price">${price}</span>
        </div>

        <p className="meal-item-description">{description}</p>
        <p className="meal-item-actions">
          <Button>Add to Cart</Button>
        </p>
      </article>
    </section>
  );
}
