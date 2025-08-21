import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConection } from "./database/dbconection.js";
import { errorMiddlewere } from "./error/error.js";
import reservationRoute from "./routes/reservationRoute.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/reservation", reservationRoute);
dbConection();

app.use(errorMiddlewere);

export default app;
