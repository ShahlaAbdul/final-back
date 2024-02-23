import { Router } from "express";
import { createOneFaq, deleteFaqById, getAllFaqs, getOneFaqs, updateFaqById } from "../controller/faqController.js";


export const faqRouter = Router();

faqRouter.get("/", getAllFaqs);
faqRouter.get("/:id", getOneFaqs);
faqRouter.post("/", createOneFaq);
faqRouter.put("/:id", updateFaqById);
faqRouter.delete("/:id", deleteFaqById);
