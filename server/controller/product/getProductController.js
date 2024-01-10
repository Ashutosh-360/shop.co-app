import Inventory from "../../models/InventoryModel.js";
import Product from "../../models/productModel.js";
import Review from "../../models/ReviewModel.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const getProductController = async (req, res) => {
  try {
    const id = req.query.product_id;
    if (isEmpty(id)) {
      errorHandler(res, "Product Id not found");
    }
    const result = await Product.findById(id);

    const resultObject = result.toObject({
      getters: true,
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.id; // Exclude the additional "id" property
      },
    });

    const reviews = await Review.find({ product_id: id });
    const inventories = await Inventory.find({ product_id: id });

    let apiData = {
      ...resultObject,
      reviews: [...reviews],
      available_quantity: inventories[0].available_quantity,
    };
    // apiData.insert(result);
    if (result) {
      successHandler(res, "Product fetched successfully", apiData);
    } else {
      res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getProductController;
