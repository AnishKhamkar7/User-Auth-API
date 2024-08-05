import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/user.db";

dotenv.config(
    {
        path:'./.env'
    }
)
export const app = express()


connectDB()


app.use('/api/users',)



