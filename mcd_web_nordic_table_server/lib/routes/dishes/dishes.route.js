import express from "express";
import { getDishes } from "../../handlers/dishes/dishes.handler.js";

const dishesRouter = express.Router();

// GET DISHES
dishesRouter.get("/dishes", async (req, res) => {
  try {
    const { signature } = req.query;

    const filter = {};

    if (signature === "true") {
      filter.isSignature = true;
    }

    const data = await getDishes(filter);

    if (data.status === "ok") {
      return res.status(200).send({
        status: data.status,
        message: data.message,
        data: data.data,
      });
    }

    return res.status(500).send({
      status: "error",
      message: data.message,
      data: [],
    });
  } catch (error) {
    console.error("Error in GET /dishes:", error);
    return res.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default dishesRouter;
