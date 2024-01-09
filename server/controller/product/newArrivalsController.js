import Product from "../../models/productModel.js";
import Wishlist from "../../models/Wishlist.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const newArrivalsController = async (req, res) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const result = await Product.find({ createdAt: { $gte: thirtyDaysAgo } });

    successHandler(res, "Product fetched successfully", result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default newArrivalsController;
