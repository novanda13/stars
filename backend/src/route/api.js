import express from "express";
import userController from "../controller/user-controller.js";
import "dotenv/config";
import { authMiddleware } from "../middleware/auth-middleware.js";
import productController from "../controller/product-controller.js";
import categoryController from "../controller/category-controller.js";
import transactionController from "../controller/transaction-controller.js";

const userRouter = new express.Router();
userRouter.use(express.json());
userRouter.use(authMiddleware);

// User API
userRouter.get("/api/users/current", userController.getUser);
userRouter.get("/api/users", userController.getAllUser);
userRouter.delete("/api/users/:username", userController.deleteUser);
userRouter.patch("/api/users/:username", userController.updateUser);
userRouter.post("/api/users/logout", userController.logoutUser);

// Product API
userRouter.post("/api/products", productController.createProduct);
userRouter.get("/api/products", productController.getProduct);
userRouter.put("/api/products/:id", productController.updateProduct);
userRouter.delete("/api/products/:id", productController.deleteProduct);

// Category API
userRouter.post("/api/categories", categoryController.createCategory);
userRouter.get("/api/categories", categoryController.getCategory);
userRouter.put("/api/categories/:id", categoryController.updateCategory);
userRouter.delete("/api/categories/:id", categoryController.deleteCategory);

//Transaction API
userRouter.post("/api/transactions", transactionController.createTransaction);
userRouter.get("/api/transactions", transactionController.getTransaction);
userRouter.delete(
  "/api/transactions/:id",
  transactionController.deleteTransaction
);

export { userRouter };
