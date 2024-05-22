import express from "express";
import userController from "../controller/user-controller.js";
import "dotenv/config";
import { authMiddleware } from "../middleware/auth-middleware.js";
import productController from "../controller/product-controller.js";

const userRouter = new express.Router();
userRouter.use(express.json());
userRouter.use(authMiddleware);

// User API
userRouter.get("/api/users/current", userController.getUser);
userRouter.delete("/api/users/:username", userController.deleteUser);
userRouter.patch("/api/users/:username", userController.updateUser);
userRouter.post("/api/users/logout", userController.logoutUser);

// Product API
userRouter.post("/api/products", productController.createProduct);
userRouter.get("/api/products", productController.getProduct);
userRouter.put("/api/products/:id", productController.updateProduct);
userRouter.delete("/api/products/:id", productController.deleteProduct);

export { userRouter };
