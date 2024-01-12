import Inventory from "../../models/InventoryModel.js";
import Product from "../../models/productModel.js";
import Review from "../../models/ReviewModel.js";
import Wishlist from "../../models/Wishlist.js";
import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const getProductController = async (req, res) => {
  try {
    const id = req?.query?.product_id;
    if (isEmpty(id)) {
      errorHandler(res, "Product Id not found");
      return;
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

    //check if it is wishlisted or not
    const user = await getUser(req);
    const wishlistProducts = await Wishlist.findOne({ user_id: user._id });

    let apiData = {
      ...resultObject,
      reviews: [...reviews],
      available_quantity: inventories[0]?.available_quantity || [],
      is_wishlist: wishlistProducts?.products?.includes(id) || false,
    };

    if (result) {
      successHandler(res, "Product fetched successfully", apiData);
    } else {
      errorHandler(res, "Not able to fetch products right now");
    }
  } catch (error) {
    errorHandler(res, "Something went wrong");
  }
};

export default getProductController;
