import express from "express";
import userController from "../controller/user-controller.js";
import "dotenv/config";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(express.json());
userRouter.use(authMiddleware);
userRouter.get("/api/users/current", userController.getUser);
userRouter.delete("/api/users/:username", userController.deleteUser);
userRouter.patch("/api/users/:username", userController.updateUser);
userRouter.post("/api/users/logout", userController.logoutUser);

export { userRouter };