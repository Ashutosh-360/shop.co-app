import Cart from "../../models/Cart.js";
import Product from "../../models/productModel.js";
import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty, isSizeAccepted } from "../../utility/Validation.js";

const addToCartController = async (req, res) => {
  try {
    const { product_id, size, quantity = 2 } = req?.body;

    //search here if user is present
    const user = await getUser(req);
    const user_id = user?._id;

    if (!user_id) {
      errorHandler(res, "Please share user id");
      return;
    }
    // ------------------------------------

    //search here is product id is correct or not
    if (isEmpty(product_id)) {
      errorHandler(res, "Provide product id");
      return;
    }
    const product = await Product.findById(product_id);
    if (isEmpty(product)) {
      errorHandler(res, "Product Not found");
      return;
    }
    // ----------------------
    if (isEmpty(size) || !isSizeAccepted(size)) {
      errorHandler(res, "Please provide size");
      return;
    }
    const existingCart = Cart.findOne(user_id);

    const productObj = {
      product_id,
      size,
      quantity,
    };

    if (!!existingCart) {
      const updatedCart = await Cart.findOneAndUpdate(
        { user_id, $addToSet: { products: [productObj] } },
        { new: true },
        { upsert: true }
      );
      successHandler(res, "Product added to Cart Successfully", updatedCart);
      return;
    }

    const cart = new Cart({
      user_id,
      products: [productObj],
    });

    await cart.save();

    successHandler(res, "Product added to Cart Successfully", cart);

    return;
    // ------------------------
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default addToCartController;
