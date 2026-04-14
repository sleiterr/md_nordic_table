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

//? export specific functions for each endpoint
export const fetchDishes = () => fetchData("dishes");

// export async function to fetch a single dish by ID
export const fetchDishById = async (dishId) => {
  // if no dishId is provided, return null immediately
  if (!dishId) return null;
  // res is the response from the fetch call to the dish endpoint with the provided dishId
  const response = await fetch(`${API_URL}/dish/${dishId}`);
  const data = await response.json();
  return data.data || null;
};

// deleteDish method to delete a dish by ID
export const deleteDish = async (dishId) => {
  const response = await fetch(`${API_URL}/dish/${dishId}`, {
    method: "DELETE",
  });
  return await response.json();
};

// uspdateDish method PUT request to update a dish by ID with the provided dishData
export const updateDish = async (dishData) => {
  const response = await fetch(`${API_URL}/dish`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dishData),
  });
  return await response.json();
};

// createDish method POST request to create a new dish with the provided dishData
export const createDish = async (dishData) => {
  const response = await fetch(`${API_URL}/dish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dishData),
  });
  return await response.json();
};
