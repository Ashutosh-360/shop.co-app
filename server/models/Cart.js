import mongoose from "mongoose";

const sizesValues = ["XS", "S", "M", "L", "XL", "XXL"];

const productSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  size: {
    type: String,
    required: true,
    enum: sizesValues,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [productSchema],
});

const cart = mongoose.model("Cart", cartSchema);

export default cart;
