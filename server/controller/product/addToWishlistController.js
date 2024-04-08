import User from "../../models/User.js";
import Wishlist from "../../models/Wishlist.js";
import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const addToWishlistController = async (req, res) => {
  try {
    const { product_id, wishlist_status } = req?.body;

    const user = await getUser(req);
    console.log(user);
    const user_id = user._id;

    if (!user_id) {
      errorHandler(res, "Please share user id");
      return;
    }

    const existingWishlist = await Wishlist.findOne({ user_id: user_id });

    //if wishlist is present then update the existing one,
    //else save as new data
    if (!isEmpty(existingWishlist)) {
      const updatedWishlist = await Wishlist.findOneAndUpdate(
        { user_id },
        wishlist_status
          ? { $addToSet: { products: product_id } }
          : { $pull: { products: product_id } }, // Using $addToSet to avoid duplicate products
        { new: true }
      );
      successHandler(
        res,
        `Product ${wishlist_status ? "wishlisted" : "unwishlisted"} successfully`,
        updatedWishlist
      );
      return;
    } else {
      const wishlistProduct = new Wishlist({
        user_id: user_id,
        products: [product_id],
      });

      await wishlistProduct.save();
      successHandler(res, "Product wishlisted successfully", wishlistProduct);
      return;
    }
  } catch (error) {
    errorHandler(res, "Something went wrong");
    return;
  }
};

export default addToWishlistController;
