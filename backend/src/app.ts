import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/user.db";

dotenv.config(
    {
        path:'./.env'
    }
)

connectDB()


export const app = express()

