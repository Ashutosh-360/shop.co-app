import express from "express";
import getProductController from "../controller/product/getProductController.js";
import getProductRecommendation from "../controller/product/getProductRecommendation.js";
import addProductController from "../controller/product/addProductController.js";
import addToWishlistController from "../controller/product/addToWishlistController.js";
import newArrivalsController from "../controller/product/newArrivalsController.js";
import updateInventoryController from "../controller/product/updateInventoryController.js";
import addReviewController from "../controller/product/addReviewController.js";
import getReviewsController from "../controller/product/getReviewsController.js";
import addToCartController from "../controller/product/addToCartController.js";
import getCartController from "../controller/product/getCartController.js";

const router = express.Router();

// ------------------------------get routes---------------
router.get("/get_product_details", getProductController);
router.get("/product_recommendation", getProductRecommendation);
router.get("/new_arrivals", newArrivalsController);
router.get("/get_reviews", getReviewsController);
router.get("/get_cart", getCartController);


// ------------------------------post routes---------------
router.post("/add_review", addReviewController);
router.post("/update_inventory", updateInventoryController);
router.post("/add_product", addProductController);
router.post("/update_wishlist", addToWishlistController);
router.post("/add_to_cart", addToCartController);

export default router;
