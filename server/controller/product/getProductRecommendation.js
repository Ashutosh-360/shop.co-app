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
      return;
    }

    const product = (await Product.findOne({ _id: id })) || {};

    if (isEmpty(product)) {
      errorHandler(res, "Please provide correct Product Id");
      return;
    }

    const category = product?.category;

    const result = await Product.find({ category: category });

    if (!isEmpty(result)) {
      successHandler(res, "Product fetched successfully", result);
      return;
    } else {
      errorHandler(res, "No data found");
      return;
    }
  } catch (error) {
    console.log(error);
    errorHandler(res, "No Product found");
    return;
  }
};

export default getProductRecommendation;
