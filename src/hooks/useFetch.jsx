import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFetch = (fetchFunction, setStateFunction, reducerName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const data = useSelector((state) => state[reducerName]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFunction()
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setStateFunction(data));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [fetchFunction]);

  return { data, loading, error };
};
