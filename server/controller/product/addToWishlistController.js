import Wishlist from "../../models/Wishlist.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const addToWishlistController = async (req, res) => {
  try {
    const { user_id, product_id, wishlist_status } = req?.body;

    if (isEmpty(user_id)) {
      errorHandler(res, "Please share user id");
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
    } else {
      const wishlistProduct = new Wishlist({
        user_id: user_id,
        products: [product_id],
      });

      await wishlistProduct.save();
      successHandler(res, "Product wishlisted successfully", wishlistProduct);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default addToWishlistController;
