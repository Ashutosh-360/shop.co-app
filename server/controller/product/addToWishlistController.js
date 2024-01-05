import Wishlist from "../../models/Wishlist.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const addToWishlistController = async (req, res) => {
  try {
    const { user_id, product_id, wish_status } = req?.body;

    const wishlistedProducts = await Wishlist.find({ user_id: user_id });

    const wishlistProduct = new Wishlist({
      user_id: user_id,
      products: [...wishlistedProducts, product_id],
    });

    // console.log(wishlistProduct, "wishlistProduct");

    await wishlistProduct.save();

    if (!isEmpty(wishlistProduct)) {
      successHandler(res, "Product wishlisted successfully", wishlistProduct);
    } else {
      errorHandler(res, "Not able to process right now");
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default addToWishlistController;
