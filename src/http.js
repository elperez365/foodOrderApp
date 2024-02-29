export const host = "http://localhost:3000";

export const fetchMeals = async () => {
  return fetch(`${host}/meals`);
};
