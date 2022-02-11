import mongoose from "mongoose";

const RecordSchema = new mongoose.Schema(
  {
    fuelAmount: {
      type: Number,
      minlength: 1,
    },
    fuelAmountUnit: {
      type: String,
      enum: ["gal", "L"],
      default: "gal",
    },
    totalPrice: {
      type: Number,
    },
    maintenanceType: {
      type: String,
      minlength: 4,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Record", RecordSchema);
