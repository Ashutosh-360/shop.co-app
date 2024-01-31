import Product from "../../models/productModel.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";

const getProductFilter = async (req, res) => {
  try {
    const sizesValues = ["XS", "S", "M", "L", "XL", "XXL"];

    const categories = await Product.distinct("category");

    successHandler(res, "Filters fetched successfully", { categories, size: sizesValues });
    return;
  } catch {
    errorHandler(res, "Something went wrong");
  }
};

export default getProductFilter;
