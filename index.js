import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
import { servicesRouter } from "./router/servicesRouter.js";
import "dotenv/config.js";
import { newsRouter } from "./router/newsRouter.js";
import { faqRouter } from "./router/faqRouter.js";
import { userRouter } from "./router/userRouter.js";
import { AuthRouter } from "./router/authRouter.js";
import { corporateRouter } from "./router/corporateRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

//router names
app.use("/images", express.static("./public/images"));
app.use("/api/corporate" , corporateRouter)
app.use("/api/services", servicesRouter);
app.use("/api/news", newsRouter);
app.use("/api/faq", faqRouter);
app.use("/api/users", userRouter);
app.use("/", AuthRouter);

// const categorySchema = new Schema({
//   categoryName: String,
// });
// export const CategoryModel = mongoose.model("CategoryModel", categorySchema);

// app.get("/category", async (req, res) => {
//   try {
//     const products = await CategoryModel.find({});
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// app.get("/newsByCategory/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const products = await MenuModel.find({ categoryId: id });
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
mongoose
  .connect(process.env.DB_KEY)
  .then(() => console.log("Connected"))
  .catch(() => console.log("error connecting"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
