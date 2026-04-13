import userModel from "../../models/user.model.mjs";
import dbConnect from "../../dbConnect.js";
import dishModel from "../../models/dish.model.mjs";
import bookingModel from "../../models/booking.model.mjs";

/*
    Create new User
*/
export const seedUser = async (user) => {
  await dbConnect();

  try {
    // Prefix billede
    if (user?.picture && !String(user.picture).startsWith("http")) {
      user.picture = process.env.SERVER_HOST + user.picture;
    }

    // Fjern felter der ikke bruges i Nordic Table
    delete user.subscription;
    delete user.enrolledWorkouts;

    const newUser = await userModel.create(user);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

/*
    Create new Dish
*/
export const seedDish = async (dish) => {
  console.log("-- Dish --");
  console.log(dish);
  console.log("--\n");

  await dbConnect();

  try {
    dish.image = process.env.SERVER_HOST + dish.image;
    const newDish = await dishModel.create(dish);
    return newDish;
  } catch (error) {
    console.log(error);
  }
};

/*
    Create new Booking
*/
export const seedBooking = async (booking) => {
  console.log("-- Booking --");
  console.log(booking);
  console.log("--\n");

  await dbConnect();

  try {
    const newBooking = await bookingModel.create(booking);
    return newBooking;
  } catch (error) {
    console.log(error);
  }
};
