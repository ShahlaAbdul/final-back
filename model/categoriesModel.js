import mongoose, { Schema } from "mongoose";

const categoriesSchema = new Schema({
  name: String,
});

export const CategoriesModel = mongoose.model("categories", categoriesSchema);
