import Inventory from "../../models/InventoryModel.js";
import Product from "../../models/productModel.js";
import Review from "../../models/ReviewModel.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const getReviewsController = async (req, res) => {
  try {
    const product_id = req?.query?.product_id;
    const page = req?.query?.page || 1;
    const limit = req?.query?.limit || 10;
    const sortBy = req?.query?.sort || "latest";

    let sortQuery = {};
    if (sortBy === "positive") {
      sortQuery = { rating: -1 };
    } else if (sortBy === "negative") {
      sortQuery = { rating: 1 };
    } else {
      sortQuery = { createdAt: -1 };
    }

    if (isEmpty(product_id)) {
      errorHandler(res, "Please provide Product Id");
      return;
    }

    const reviews = await Review.findOne({ product_id })
      .select("reviews")
      .sort(sortQuery)
      .skip((page - 1) * limit)
      .limit(limit);
    const reviewsCount = await Review.countDocuments({ product_id });

    // console.log(reviews, "reviews");

    successHandler(res, "Reviews fetched successfully", reviews, { count: reviewsCount });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getReviewsController;
