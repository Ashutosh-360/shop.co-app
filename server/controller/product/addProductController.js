import Product from "../../models/productModel.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";

const addProductController = async (req, res) => {
  try {
    let result = new Product(req.body);
    await result.save();

    if (result) {
      successHandler(res, "Product added successfully", result);
      return;
    } else {
      errorHandler(res, "Not able to add product right now");
      return;
    }
  } catch (error) {
    errorHandler(res, "Please try again later");
    return;
  }
};

export default addProductController;
