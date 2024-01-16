import Cart from "../../models/Cart.js";
import Product from "../../models/productModel.js";
import errorHandler from "../../utility/errorHandler.js";
import getUser from "../../utility/getUser.js";
import successHandler from "../../utility/successHandler.js";

const getCartController = async (req, res) => {
  try {
    const user = await getUser(req);
    const user_id = user?._id;

    const cart = await Cart.findOne({ user_id }).lean();

    const productPromises = cart?.products.map(async (ele) => {
      const result = await Product.findById(ele?.product_id).lean();
      return { ...result, ...ele };
    });

    const products = await Promise.all(productPromises);
    successHandler(res, "Cart fetched successfully", products);
    return;
  } catch (error) {
    errorHandler(res, "Not able to process right now");
  }
};

export default getCartController;
