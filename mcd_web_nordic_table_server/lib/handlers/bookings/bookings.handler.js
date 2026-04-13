import dbConnect from "../../db/dbConnect.js";
import bookingModel from "../../db/models/booking.model.mjs";

export const getBookings = async () => {
  try {
    await dbConnect();

    const bookings = await bookingModel.find({});

    return {
      status: "ok",
      message: "Bookings fetched successfully",
      data: bookings,
    };
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return {
      status: "error",
      message: "An error occurred while fetching bookings",
      data: [],
      error: error.message,
    };
  }
};
