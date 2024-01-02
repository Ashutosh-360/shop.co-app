import express from "express";
import Product from "../models/productModel.js";
import Review from "../models/ReviewModel.js";
import successHandler from "../utility/successHandler.js";
import Inventory from "../models/InventoryModel.js";
import getProductController from "../controller/product/getProductController.js";

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

router.post("/add_product", async (req, res) => {
  try {
    let result = new Product(req.body);
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

router.get("/get_product_details", getProductController);

export default router;
