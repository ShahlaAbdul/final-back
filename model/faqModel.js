import mongoose, { Schema } from "mongoose";

const faqSchema = new Schema({
    question: String,
    answer: String
}); 

export const FaqModel=mongoose.model('Faq', faqSchema);
