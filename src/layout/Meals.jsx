import MealCard from "../components/MealCard";

import { useSelector } from "react-redux";

export default function Meals() {
  const meals = useSelector((state) => state.meals);

  return (
    <div id="meals">
      {meals?.map((meal) => (
        <MealCard
          key={meal.id}
          id={meal.id}
          title={meal.name}
          price={meal.price}
          description={meal.description}
          image={meal.image}
        />
      ))}
    </div>
  );
}
