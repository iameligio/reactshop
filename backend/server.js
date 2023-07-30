import express from "express";
import dontenv from "dotenv";
dontenv.config();
import { products } from "./data/products.js";

const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
