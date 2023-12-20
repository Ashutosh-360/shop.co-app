import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import mongoose from "mongoose";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("first");
});

const client = new MongoClient(process.env.MONGODB);
// API endpoint to get data by ID
app.get("/get_product_details", async (req, res) => {
  try {
    await client.connect();
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
