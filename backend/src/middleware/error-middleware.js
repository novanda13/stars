import { ResponseError } from "../error/response-error.js";
import ValidationError from "joi";

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  console.error(err);

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        errors: err.mesage
      })
      .end();
  } else if (err instanceof ValidationError) {
    res
      .status(400)
      .json({
        errors: err.mesage
      })
      .end();
  } else {
    res.status(500).json({
      errors: err.mesage
    });
  }
};

export { errorMiddleware };
