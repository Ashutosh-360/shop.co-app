import express from "express";
import Product from "../models/productModel.js";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import ProductTest from "../models/TestSchema.js";
import Review from "../models/ReviewModel.js";
import successHandler from "../utility/successHandler.js";
import Inventory from "../models/InventoryModel.js";

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

export default router;

router.get("/get_product_details", async (req, res) => {
  try {
    const id = req.query.product_id;

    const result = await Product.findById(id);
    // result = JSON.parse(JSON.stringify(result));
    const resultObject = result.toObject({
      getters: true,
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.id; // Exclude the additional "id" property
      },
    });

    const reviews = await Review.find({ product_id: id });
    const inventories = await Inventory.find({ product_id: id });

    let apiData = {
      ...resultObject,
      reviews: [...reviews],
      available_quantity:inventories[0].available_quantity,
    };
    // apiData.insert(result);
    if (result) {
      successHandler(res, "Product fetched successfully", apiData);
    } else {
      res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
