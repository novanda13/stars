import express from "express";
import cors from "cors";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRouter } from "../route/api.js";

export const web = express();
web.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});
web.use(cors());
web.use(express.json());
web.use(errorMiddleware);
web.use(publicRouter);
web.use(userRouter);
