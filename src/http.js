export const host = "http://localhost:3000";

export const fetchMeals = async () => {
  return fetch(`${host}/meals`);
};

export const fetchOrders = async () => {
  return fetch(`${host}/orders`);
};

export const submitOrder = async (order) => {
  return fetch(`${host}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order }),
  });
};
