import { configDotenv } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./config/connectDB.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

configDotenv();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.listen(8000, () => {});

app.use("/", productRoutes);
app.use("/", userRoutes);
