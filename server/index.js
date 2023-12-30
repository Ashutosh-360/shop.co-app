import { configDotenv } from "dotenv";
import express from "express";
import { connectDB } from "./config/connectDB.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

configDotenv();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("first");
});

app.use("/", productRoutes);
