import mongoose from "mongoose";

export const dbConection = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: "restaurant",
    })
    .then(() => {
      console.log("Connected to database successfully!");
    })
    .catch((err) => {
      console.log(`Not connected to database successfully! ${err}`);
    });
};
