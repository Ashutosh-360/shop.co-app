import mongoose from "mongoose";

const reviewItemSchema = new mongoose.Schema(
  {
    reviewerName: {
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
  },
  { timestamps: true } // Enable timestamps for each review
);
const reviewSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    reviews: [reviewItemSchema],
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
