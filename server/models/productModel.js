import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hex: {
    type: String,
    required: true,
  },
});

const productVariantSchema = new mongoose.Schema({
  color: [colorSchema],
  sizes: [sizeSchema],
});

const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
});

const productSchema = new mongoose.Schema({
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
    min: 0,
  },
  discounted_price: {
    type: Number,
    required: true,
    min: 0,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  date_added: {
    type: Date,
    required: true,
    default: Date.now,
  },
  available_variants: [productVariantSchema],
  product_details: {
    product_description: {
      type: String,
      required: true,
    },
    images: [{
      type: String,
      required: true,
    }],
  },
  reviews: [reviewSchema],
});

const Product = mongoose.model("Product", productSchema);

export default Product;