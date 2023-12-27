import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(express.json())

app.listen(8000, () => {
  console.log("first");
});

const client = new MongoClient(process.env.MONGODB);
client.connect();
// app.use('/api/v1',userRouter)
// API endpoint to get data by ID

app.use('/', productRoutes);
// app.get("/get_product_details", async (req, res) => {
//   try {

//     const database = client.db("Shopping");
//     const collection = database.collection("Products");

//     const productId = new ObjectId(req.query.product_id);
//     const result = await collection.findOne({ _id: productId });

//     if (result) {
//       res.json(result);
//     } else {
//       res.status(404).json({ error: "Document not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


