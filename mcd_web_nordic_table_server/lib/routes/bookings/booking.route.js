import express from "express";
import {
  createBooking,
  deleteBooking,
  getBookingById,
  updateBooking,
  updateBookingStatus,
} from "../../handlers/bookings/booking.handler.js";
import auth from "../../middleware/auth.middleware.js";
import mongoose from "mongoose";

const bookingRouter = express.Router();

const isValidObjectId = (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error(`Invalid ObjectId: ${id}`);
    res.status(400).send({ status: "error", message: "Invalid ID format", data: [] });
    return false;
  }
  return true;
};

// POST BOOKING
bookingRouter.post("/booking", async (req, res) => {
  try {
    const { name, email, startAt, numberOfGuests, status } = req.body;

    if (!name || !email || !numberOfGuests || !startAt) {
      return res.status(400).send({
        status: "error",
        message: "Udfyld venligst de manglende felter",
        data: [],
      });
    }

    const model = { name, email, startAt, numberOfGuests, status };

    const result = await createBooking(model);

    if (!result || result.status !== "ok") {
      return res.status(500).send({
        status: "error",
        message: result.message || "Failed to add booking",
        data: [],
      });
    }

    return res.status(201).send({ ...result });
  } catch (error) {
    console.error("Error adding booking:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// PUT BOOKING
bookingRouter.put("/booking", auth, async (req, res) => {
  try {
    const { id, name, email, startAt, numberOfGuests, status } = req.body;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Booking ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id, res)) return;

    const model = { id, name, email, startAt, numberOfGuests, status };

    const result = await updateBooking(model);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error updating booking:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// PATCH BOOKING STATUS
bookingRouter.patch("/booking/:id/status", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!id) {
      return res
        .status(400)
        .send({ status: "error", message: "No ID provided", data: {} });
    }
    if (!isValidObjectId(id, res)) return;

    const allowed = ["new", "confirmed", "cancelled"];
    if (!status || !allowed.includes(status)) {
      return res.status(400).send({
        status: "error",
        message: "Invalid status. Use: new | confirmed | cancelled",
        data: {},
      });
    }

    const result = await updateBookingStatus({ id, status });

    if (result.status === "not_found") return res.status(404).send(result);
    if (result.status === "error") return res.status(500).send(result);

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error updating booking status:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// DELETE BOOKING
bookingRouter.delete("/booking/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "No ID provided",
        data: {},
      });
    }

    if (!isValidObjectId(id, res)) return;

    const result = await deleteBooking(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error deleting booking:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// GET BOOKING BY ID
bookingRouter.get("/booking/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Booking ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id, res)) return;

    const result = await getBookingById(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching booking:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default bookingRouter;
