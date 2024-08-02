import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import productRouter from "./routers/product";

import { connectDB } from "./config/db";

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
//connect db
connectDB(process.env.DB_URI);

// Router
app.use("/api", productRouter);

export const viteNodeApp = app;
