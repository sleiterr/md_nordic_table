import express from "express";
import { getBookings } from "../../handlers/bookings/bookings.handler.js";

const bookingsRouter = express.Router();

// Get
bookingsRouter.get("/bookings", async (req, res) => {
  try {
    const result = await getBookings();

    if (result.status === "ok") {
      return res.status(200).send(result);
    }

    return res.status(500).send(result);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default bookingsRouter;
