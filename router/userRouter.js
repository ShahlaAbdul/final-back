import { Router } from "express";
import {
  createOneUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controller/userController.js";
import { verifyAccess } from "../middleware/authMiddleWare.js";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", verifyAccess(["admin", "user"]), getUserById);
userRouter.post("/", verifyAccess(["admin"]), createOneUser);
userRouter.put("/:id", verifyAccess(["admin", "user"]), updateUserById);
userRouter.delete("/:id", verifyAccess(["user"]), deleteUserById);
