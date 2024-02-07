import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
import { servicesRouter } from "./router/servicesRouter.js";
import "dotenv/config.js";
import { newsRouter } from "./router/newsRouter.js";
const app = express();

app.use(express.json());
app.use(cors());

 //router names
app.use("/services", servicesRouter);
app.use("/news", newsRouter);

mongoose
  .connect(process.env.DB_KEY)
  .then(() => console.log("Connected"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
