import { logger } from "./application/logging.js";
import { web } from "./application/web.js";

const port = process.env.PORT || 3000;

web.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ error: message });
});

web.listen(port, () => {
  logger.info(`App is running on port ${port}`);
});
