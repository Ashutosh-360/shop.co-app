import mongoose from "mongoose";

const sizesValues = ["XS", "S", "M", "L", "XL", "XXL"];
const availableQuanitySchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
    trim: true,
    enum: sizesValues,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const inventorySchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    available_quanity: {
      type: [availableQuanitySchema],
      required: true,
    },
  },
  { timestamps: true }
);

const Inventory = mongoose.model("Inventory", reviewSchema);

export default Inventory;
