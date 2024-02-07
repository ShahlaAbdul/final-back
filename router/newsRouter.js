import { Router } from "express";
import { createOneNews, deleteNewsById, getAllNews, getNewsById, updateNewsById } from "../controller/newsController.js";

export const newsRouter = Router();

newsRouter.get("/", getAllNews);
newsRouter.get("/:id", getNewsById);
newsRouter.post("/", createOneNews);
newsRouter.put("/:id", updateNewsById);
newsRouter.delete("/:id", deleteNewsById);