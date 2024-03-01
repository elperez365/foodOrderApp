import MealCard from "../components/MealCard";
import { useFetch } from "../hooks/useFetch.jsx";

import { fetchMeals } from "../http.js";
import { setMeals } from "../redux/mealsSlice.js";

export default function Meals() {
  const { data, loading, error } = useFetch(fetchMeals, setMeals, "meals");
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (data.length === 0) {
    return <p>No meals available.</p>;
  }

  return (
    <div id="meals">
      {data.map((meal) => (
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
