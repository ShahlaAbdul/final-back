import mongoose, { Schema } from "mongoose";

const userScehma = new Schema({
  name: {
    type: String,
    
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  age: {
    type: Number,
  },
  role: {
    type: String,
    default: "user",
  },
});
export const UserModel = mongoose.model("users", userScehma);
