import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import mongoose from "mongoose";

const app = express();

app.listen(8000, () => {
  console.log("first");
});

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("connected to mongodb");
});

app.get("/test", (req, res) => {
  res.send("Hello there");
});
