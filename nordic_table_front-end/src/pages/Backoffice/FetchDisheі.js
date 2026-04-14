import React, { useState, useEffect } from "react";
import { fetchDishes, fetchDishById } from "../../../utils/api";

// Custom hook to fetch dishes data
export function useDishes() {
  // State to hold dishes data, loading status, and error message
  const [dishes, setDishes] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(false);
  // State to hold any error message
  const [error, setError] = useState("");

  // Fetch dishes data when the component mounts
  useEffect(() => {
    // Async function to fetch dishes data and handle loading and error states
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchDishes();
        setDishes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return dishes data, loading status, and error message
  return { dishes, loading, error };
}

// Custom hook to fetch a single dish by ID
export function useFetchDishById(dishId) {
  // State to hold the dish data, loading status, and error message
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect to fetch dish data when the dishId changes
  useEffect(() => {
    // async function to fetch dish data by ID and handle loading and error states
    async function getDish() {
      setLoading(true);
      try {
        // data is the result of the fetchDishById function with the provided dishId
        const data = await fetchDishById(dishId);
        setDish(data);
        setError("");
      } catch (err) {
        // check if the error has a message property, if so use it, otherwise use a default error message
        setError(err.message || "Failed to fetch dish");
      } finally {
        setLoading(false);
      }
    }
    // if state variable dishId is truthy, call the getDish function to fetch the dish data
    if (dishId) getDish();
  }, [dishId]);

  return { dish, loading, error };
}
