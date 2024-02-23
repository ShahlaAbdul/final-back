import mongoose, { Schema } from "mongoose";

const storesSchema = new Schema({
  country: String,
  name: String,
});
export const ServiceModel = mongoose.model("stores", storesSchema);
