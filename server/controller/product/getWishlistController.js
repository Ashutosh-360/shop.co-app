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
    console.log(user);
    const user_id = user._id;
    const existingWishlist = await Wishlist.findOne({ user_id: user_id });

    successHandler(res, "Products fetched successfully", existingWishlist);
    return;
  } catch (error) {
    successHandler(res, "Something went wrong");
  }
};

export default getWishlistController;
