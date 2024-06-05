import { logger } from "./application/logging.js";
import { web } from "./application/web.js";

const port = process.env.PORT || 3000;

web.listen(port, () => {
  logger.info(`App is running on port ${port}`);
});
