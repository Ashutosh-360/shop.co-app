import Product from "../../models/productModel.js";
import Wishlist from "../../models/Wishlist.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const newArrivalsController = async (req, res) => {
  try {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setDate(threeMonthsAgo.getDate() - 90);
    const result = await Product.aggregate([
      { $match: { createdAt: { $gte: threeMonthsAgo } } },
      { $sample: { size: 10 } }, // Adjust the size based on your requirements
    ]);

    successHandler(res, "Product fetched successfully", result);
    return;
  } catch (error) {
    errorHandler(res, "Something went wrong");
    return;
  }
};

export default newArrivalsController;
