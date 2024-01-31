import Cart from "../../models/Cart.js";
import Product from "../../models/productModel.js";
import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";
import { isEmpty, isSizeAccepted } from "../../utility/Validation.js";

const addToCartController = async (req, res) => {
  try {
    const { product_id, size, quantity = 1 } = req?.body;

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
    const productObj = {
      product_id,
      size,
      quantity,
    };

    const existingCart = await Cart.findOne({ user_id });

    if (existingCart) {
      // If the cart exists, check if the product with the same id and size is already in the cart

      const existingProductIndex = existingCart.products.findIndex(
        (p) =>
          p.product_id.toString() === productObj.product_id.toString() && p.size === productObj.size
      );

      //to delete product from cart send quantity to zero 0
      if (existingProductIndex !== -1 && quantity == 0) {
        existingCart.products.splice(existingProductIndex, 1);
      } else if (existingProductIndex !== -1) {
        // If the product with the same id and size is found, update its quantity
        existingCart.products[existingProductIndex].quantity = quantity;
      } else {
        // If the product with the same id is present but with a different size, add the new product
        existingCart.products.push(productObj);
      }
      // Save the updated cart
      await existingCart.save();
      successHandler(res, "Product added to Cart Successfully", existingCart);
      return;
    }

    const cart = new Cart({
      user_id,
      products: [productObj],
    });

    await cart.save();

    successHandler(res, "Product added to Cart Successfully", cart);
    return;
  } catch (error) {
    errorHandler(res, "Please try again later");
  }
};

export default addToCartController;
