import express from "express";
import multer from "multer";
import {
  createDish,
  deleteDish,
  getDishById,
  toggleDishSignature,
  updateDish,
} from "../../handlers/dishes/dish.handler.js";
import auth from "../../middleware/auth.middleware.js";
import { dishStorage } from "../../db/mcd/misc/mStorage.js";
import mongoose from "mongoose";

const dishRouter = express.Router();

const upload = multer({ storage: dishStorage });

const isValidObjectId = (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error(`Invalid ObjectId: ${id}`);
    res.status(400).send({ status: "error", message: "Invalid ID format", data: [] });
    return false;
  }
  return true;
};

// POST DISH
dishRouter.post("/dish", auth, upload.single("image"), async (req, res) => {
  try {
    const { title, description, price, category, isSignature } = req.body;

    if (!title || !price || !description || !category) {
      return res.status(400).send({
        status: "error",
        message: "Please provide all required fields",
        data: [],
      });
    }

    const model = { title, description, price, category, isSignature };

    if (req.file) {
      model.image = process.env.SERVER_HOST + "/dishes/" + req.file.filename;
    }

    const result = await createDish(model);

    if (!result || result.status !== "ok") {
      return res.status(500).send({
        status: "error",
        message: result.message || "Failed to add dish",
        data: [],
      });
    }

    return res.status(201).send({ ...result });
  } catch (error) {
    console.error("Error adding dish:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// PUT DISH
dishRouter.put("/dish", auth, upload.single("image"), async (req, res) => {
  try {
    const { id, title, description, price, category, isSignature } = req.body;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Dish ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id, res)) return;

    const model = { id, title, description, price, category, isSignature };

    if (req.file) {
      model.image = process.env.SERVER_HOST + "/dishes/" + req.file.filename;
    }

    const result = await updateDish(model);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error updating dish:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// DELETE DISH
dishRouter.delete("/dish/:id", auth, async (req, res) => {
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

    const result = await deleteDish(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error deleting dish:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// GET DISH BY ID
dishRouter.get("/dish/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Dish ID is required",
        data: [],
      });
    }

    if (!isValidObjectId(id, res)) return;

    const result = await getDishById(id);

    if (result.status === "not_found") {
      return res.status(404).send(result);
    }

    if (result.status === "error") {
      return res.status(500).send(result);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching dish:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

// PATCH: TOGGLE signature
dishRouter.patch("/dish/:id/signature", auth, async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id, res)) return;

    const result = await toggleDishSignature(id);

    if (result.status === "not_found") return res.status(404).send(result);
    if (result.status === "error") return res.status(500).send(result);

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error toggling signature:", error);
    return res.status(500).send({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default dishRouter;
