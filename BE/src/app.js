import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import dotenv from "dotenv";

import { connectDB } from "./config/db";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export const viteNodeApp = app;
