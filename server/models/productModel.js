import mongoose from "mongoose";
const productDetailsSchema = new mongoose.Schema({
  material: {
    type: String,
  },
  brand: {
    type: String,
  },
  care_instructions: {
    type: String,
  },
});

const variantSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  hex: {
    type: String,
    required: true,
  },
});
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    currency: {
      type: String,
      required: true,
      trim: true,
    },
    currency_code: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discounted_price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      max: 5,
    },
    product_description: {
      type: String,
      trim: true,
    },
    front_image: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    product_details: {
      type: productDetailsSchema,
      required: true,
    },
    variant: {
      type: variantSchema,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
