import express from "express";
import dontenv from "dotenv";
dontenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 4000;

await connectDB(); //Connect to MongoDb

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
