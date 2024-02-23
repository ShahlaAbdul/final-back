import mongoose, { Schema } from "mongoose";

const newsSchema = new Schema({
  image: String,
  head: String,
  date: String,
  content: {
    title: String,
    ending: String,
    call: String,
    hashtag: String
  }
});
export const NewsModel = mongoose.model("News", newsSchema);
