import express from "express";
import Product from "../models/productModel.js";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const router = express.Router();


router.get("/get_product_details", async (req, res) => {
    try {
        const id = new ObjectId(req.query.product_id);

        console.log(id);
        const db=mongoose.db    

        const result = await Product.findById(id);

        console.log(result)
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
