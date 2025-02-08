import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/user.db";
import UserRouter from "./routes/user.routes";

dotenv.config({
  path: "./.env",
});
export const app = express();

connectDB();

app.use("/api/users", UserRouter);
