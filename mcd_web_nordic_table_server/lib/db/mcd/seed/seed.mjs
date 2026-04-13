import { stubUsers, stubDishes, stubBookings } from "./seed.data.js";
import { seedUser, seedDish, seedBooking } from "./seed.helper.js";

// SEED USERS
export const seedUsers = async () => {
  for (let i = 0; i < stubUsers.length; i++) {
    await seedUser(stubUsers[i]);
  }
};

// SEED DISHES
export const seedDishes = async () => {
  for (let i = 0; i < stubDishes.length; i++) {
    await seedDish(stubDishes[i]);
  }
};

// SEED BOOKINGS
export const seedBookings = async () => {
  for (let i = 0; i < stubBookings.length; i++) {
    await seedBooking(stubBookings[i]);
  }
};
