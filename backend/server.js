import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

// Load .env variables
dotenv.config({ path: "./config/config.env" });

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    // Start server after DB is connected
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server Running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
