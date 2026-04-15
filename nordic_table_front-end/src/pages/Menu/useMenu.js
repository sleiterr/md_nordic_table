import React, { useState, useEffect } from "react";
import { fetchDishes } from "../../../utils/api";

export function useMenu() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch dishes data when the component mounts
  useEffect(() => {
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
