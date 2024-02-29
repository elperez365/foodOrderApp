import imgAppoggio from "../appoggio/caesar-salad.jpg";
import MealCard from "../components/MealCard";
import ArrayAppoggio from "../appoggio/meals.js";

export default function Meals() {
  return (
    <div id="meals">
      {ArrayAppoggio.map((meal) => (
        <MealCard
          key={meal.id}
          id={meal.id}
          title={meal.name}
          price={meal.price}
          description={meal.description}
          image={imgAppoggio}
        />
      ))}
    </div>
  );
}
