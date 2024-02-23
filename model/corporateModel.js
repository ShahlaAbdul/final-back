import mongoose, { Schema } from "mongoose";

const corporateSchema = new Schema({
  category: String,
  image: String,
  head: String,
  title: String,
});

export const CorporateModel = mongoose.model("Corporate", corporateSchema);
