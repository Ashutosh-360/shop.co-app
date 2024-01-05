import Product from "../../models/productModel.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";

const addProductController = async (req, res) => {
  try {
    let result = new Product(req.body);
    await result.save();

    if (result) {
      successHandler(res, "Product added successfully", result);
      res.json(result);
    } else {
      errorHandler(res, "Not able to add product right now");
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default addProductController;
