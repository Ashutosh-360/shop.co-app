import mongoose from "mongoose";

const sizesValues = ["XS", "S", "M", "L", "XL", "XXL"];

const productSchema = new mongoose.Schema(
  {
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
      default: 1,
    },
  },
  { timestamps: true }
);

const cartSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [productSchema],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
