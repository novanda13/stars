import express from "express";
const cors = require("cors");
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRouter } from "../route/api.js";

export const web = express();
web.use(cors());
web.use(express.json());
web.use(errorMiddleware);
web.use(publicRouter);
web.use(userRouter);
