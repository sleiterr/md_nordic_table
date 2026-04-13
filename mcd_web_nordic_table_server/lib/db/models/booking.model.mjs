import mongoose, { Schema } from "mongoose";
mongoose.set("runValidators", true);

const bookingSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Navn er påkrævet"],
      trim: true,
      minlength: 2,
      maxlength: 60,
    },

    email: {
      type: String,
      required: [true, "Email er påkrævet"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Ugyldig email"],
    },

    startAt: {
      type: Date,
      required: [true, "Tidspunkt er påkrævet"],
    },

    numberOfGuests: {
      type: Number,
      required: [true, "Antal gæster er påkrævet"],
      min: 1,
      max: 12,
    },

    status: {
      type: String,
      enum: ["new", "confirmed", "cancelled"],
      default: "new",
    },
  },
  { timestamps: true },
);

export default mongoose.models.booking ||
  mongoose.model("booking", bookingSchema);
