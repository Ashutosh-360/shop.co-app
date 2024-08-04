import Inventory from "../../models/InventoryModel.js";
import Product from "../../models/productModel.js";
import Review from "../../models/ReviewModel.js";
import Wishlist from "../../models/Wishlist.js";
import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const getWishlistController = async (req, res) => {
  try {
    const user = await getUser(req);
    const user_id = user._id;
    const existingWishlist = await Wishlist.findOne({ user_id: user_id });

    if (!existingWishlist) {
      return errorHandler(res, "Wishlist not found");
    }

    const productIds = existingWishlist.products;

    // Query the Product model to find all products that match the productIds
    const products = await Product.find({ _id: { $in: productIds } });

    const inventory = await Inventory.findOne({ product_id: { $in: productIds } });

    // Merge inventory data with products
    const productsWithInventory = products.map(product => ({
      ...product.toObject(),
      inventory: inventory || null
    }));
    successHandler(res, "Wishlist fetched successfully", productsWithInventory);
    return;
  } catch (error) {
    errorHandler(res, "Something went wrong");
  }
};

export default getWishlistController;
