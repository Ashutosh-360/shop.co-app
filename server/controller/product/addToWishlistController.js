import Wishlist from "../../models/Wishlist.js";
import errorHandler from "../../utility/errorHandler.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty } from "../../utility/Validation.js";

const addToWishlistController = async (req, res) => {
  try {
    const { user_id, product_id, wish_status } = req?.body;

    const existingWishlist = await Wishlist.findOne({ user_id: user_id });

    if (!isEmpty(existingWishlist)) {
      const updatedWishlist = await Wishlist.findOneAndUpdate(
        { user_id },
        { $addToSet: { products: product_id } }, // Using $addToSet to avoid duplicate products
        { new: true }
      );
      successHandler(res, "Product wishlisted successfully", updatedWishlist);
    } else {
      const wishlistProduct = new Wishlist({
        user_id: user_id,
        products: [product_id],
      });

      await wishlistProduct.save();
      successHandler(res, "Product wishlisted successfully", wishlistProduct);
    }

    // if (wishlistedProducts.products.includes(product_id)) {
    //   errorHandler(res, "Product already exist");
    // }
    // const wishlistProduct = new Wishlist({
    //   user_id: user_id,
    //   products: [...wishlistedProducts?.products, product_id],
    // });

    // await wishlistProduct.updateOne();

    // if (!isEmpty(wishlistProduct)) {
    // } else {
    //   errorHandler(res, "Not able to process right now");
    // }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default addToWishlistController;
