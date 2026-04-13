// api url from .env file
const API_URL = import.meta.env.VITE_API_BASE_URL;

// Generic function to fetch data from a given endpoint
const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`);
    if (!res.ok) throw new Error(`Error fetching ${endpoint}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// export specific functions for each endpoint

export const fetchDishes = () => fetchData("dishes");
