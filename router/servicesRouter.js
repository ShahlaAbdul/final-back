import { Router } from "express";
import {
  createOneServices,
  deleteServicesById,
  getAllServices,
  getServicesById,
  updateServicesById,
} from "../controller/servicesController.js";
import { verifyAccess } from "../middleware/authMiddleWare.js";

export const servicesRouter = Router();

servicesRouter.get("/", getAllServices);
servicesRouter.get("/:id",verifyAccess(["admin"]), getServicesById);
servicesRouter.post("/",verifyAccess(["admin"]), createOneServices);
servicesRouter.put("/:id",verifyAccess(["admin"]), updateServicesById);
servicesRouter.delete("/:id", verifyAccess(["admin"]), deleteServicesById);
