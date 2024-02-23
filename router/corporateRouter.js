import { Router } from "express";
import {
  
} from "../controller/faqController.js";
import { createOneCorporate, deleteCorporateById, getAllCorporate, getOneCorporate, updateCorporateById } from "../controller/corporateController.js";

export const corporateRouter = Router();

corporateRouter.get("/", getAllCorporate);
corporateRouter.get("/:id", getOneCorporate);
corporateRouter.post("/", createOneCorporate);
corporateRouter.put("/:id", updateCorporateById);
corporateRouter.delete("/:id", deleteCorporateById);
