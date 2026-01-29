import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/ContactRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});
// MongoDB Connection
mongoose
  .connect("mongodb+srv://harshrajsinhgohil8626_db_user:harshrajsinhgohil8626@todocluster0.8qm2mro.mongodb.net/myportfolio?retryWrites=true&w=majority&appName=TodoCluster0")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch((err) => console.log(err));
