import Inventory from "../../models/InventoryModel.js";
import Product from "../../models/productModel.js";
import Review from "../../models/ReviewModel.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const getProductRecommendation = async (req, res) => {
  try {
    const id = req?.query?.product_id;

    if (isEmpty(id)) {
      errorHandler(res, "Please provide Product Id");
    }
    const product = await Product.findById(id);
    const category = product?.category;

    const result = await Product.find({ category: category });

    // result = result.sort(() => Math.random() - 0.5);
    if (!isEmpty(result)) {
      successHandler(res, "Product fetched successfully", result);
    } else {
      errorHandler(res, "No data found");
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getProductRecommendation;
