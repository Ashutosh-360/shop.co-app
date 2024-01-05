import express from "express";
import Review from "../models/ReviewModel.js";
import Inventory from "../models/InventoryModel.js";
import getProductController from "../controller/product/getProductController.js";
import getProductRecommendation from "../controller/product/getProductRecommendation.js";
import addProductController from "../controller/product/addProductController.js";
import addToWishlistController from "../controller/product/addToWishlistController.js";

const router = express.Router();

router.post("/add_review", async (req, res) => {
  try {
    let result = new Review(req.body);
    await result.save();

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/update_inventory", async (req, res) => {
  try {
    let result = new Inventory(req.body);
    await result.save();

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/add_product", addProductController);
router.get("/get_product_details", getProductController);
router.get("/product_recommendation", getProductRecommendation);
router.post("/update_wishlist", addToWishlistController);

export default router;
