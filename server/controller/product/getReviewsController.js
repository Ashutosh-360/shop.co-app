import Inventory from "../../models/InventoryModel.js";
import Product from "../../models/productModel.js";
import Review from "../../models/ReviewModel.js";
import successHandler from "../../utility/successHandler.js";

const getReviewsController = async (req, res) => {
  try {
    const product_id = req?.query?.product_id;
    const reviews = await Review.find({ product_id: id });

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getReviewsController;
