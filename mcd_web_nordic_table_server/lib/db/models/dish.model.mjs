import mongoose, { Schema } from "mongoose";
mongoose.set("runValidators", true);

const dishSchema = new Schema(
  {
    image: {
      type: String,
      default: "/dishes/no-image.jpg",
      trim: true,
    },

    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: 2,
      maxlength: 80,
    },

    isSignature: { type: Boolean, default: false },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: 5,
      maxlength: 200,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },

    category: {
      type: String,
      enum: ["starter", "main", "dessert"],
      required: [true, "Category is required"],
    },
  },
  { timestamps: true },
);

export default mongoose.models.dish || mongoose.model("dish", dishSchema);
