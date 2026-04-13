import dbConnect from "../../db/dbConnect.js";
import bookingModel from "../../db/models/booking.model.mjs";

// CREATE BOOKING
export const createBooking = async (body) => {
  try {
    await dbConnect();

    const booking = await bookingModel.create(body);

    return {
      status: "ok",
      message: "Booking created successfully",
      data: booking,
    };
  } catch (error) {
    console.error("Error adding booking:", error);
    return {
      status: "error",
      message: "An error occurred while creating the booking",
      data: [],
      error: error.message,
    };
  }
};

// UPDATE BOOKING STATUS
export const updateBookingStatus = async ({ id, status }) => {
  try {
    const updated = await bookingModel.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true },
    );

    if (!updated) {
      return { status: "not_found", message: "Booking not found", data: [] };
    }

    return { status: "ok", message: "Booking status updated", data: updated };
  } catch (error) {
    return { status: "error", message: error.message, data: [] };
  }
};

// UPDATE BOOKING
export const updateBooking = async (body) => {
  try {
    await dbConnect();

    const booking = await bookingModel.findById(body.id);
    if (!booking) {
      return {
        status: "not_found",
        message: "Booking not found",
        data: [],
      };
    }

    const updatedBooking = await bookingModel.findByIdAndUpdate(body.id, body, {
      new: true,
    });

    return {
      status: "ok",
      message: "Booking updated successfully",
      data: updatedBooking,
    };
  } catch (error) {
    console.error("Error updating booking:", error);
    return {
      status: "error",
      message: "An error occurred while updating the booking",
      data: [],
      error: error.message,
    };
  }
};

// DELETE BOOKING
export const deleteBooking = async (id) => {
  try {
    await dbConnect();

    const deletedBooking = await bookingModel.findByIdAndDelete(id);

    if (!deletedBooking) {
      return {
        status: "not_found",
        message: "Booking not found",
        data: [],
      };
    }

    return {
      status: "ok",
      message: "Booking deleted successfully",
      data: deletedBooking,
    };
  } catch (error) {
    console.error("Error deleting booking:", error);
    return {
      status: "error",
      message: "An error occurred while deleting the booking",
      data: [],
      error: error.message,
    };
  }
};

// GET BOOKING BY ID
export const getBookingById = async (id) => {
  try {
    await dbConnect();

    const booking = await bookingModel.findById(id);

    if (!booking) {
      return {
        status: "not_found",
        message: "Booking not found",
        data: [],
      };
    }

    return {
      status: "ok",
      message: "Booking fetched successfully",
      data: booking,
    };
  } catch (error) {
    console.error("Error fetching booking:", error);
    return {
      status: "error",
      message: "An error occurred while fetching the booking",
      data: [],
      error: error.message,
    };
  }
};
