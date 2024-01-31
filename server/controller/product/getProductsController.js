import Product from "../../models/productModel.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";

const getProductsController = async (req, res) => {
  try {
    const products = await Product.find({});

    successHandler(res, "Products fetched successfully", products);
  } catch {
    errorHandler(res, "Not able to process right now");
  }
};

export default getProductsController;
