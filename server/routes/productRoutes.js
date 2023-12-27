import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import { MongoClient, ObjectId } from "mongodb";
const router = express.Router();

const client = new MongoClient(process.env.MONGODB);

router.get("/get_product_details", async (req, res) => {
    // res.json({ "error": "Document not found" });
    try {

        const database = client.db("Shopping");
        const collection = database.collection("Products");

        const productId = new ObjectId(req.query.product_id);
        const result = await collection.findOne({ _id: productId });

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
