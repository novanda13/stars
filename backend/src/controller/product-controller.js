import { getUserIdFromToken } from "../middleware/auth-middleware.js";
import productService from "../service/product-service.js";

const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const userId = getUserIdFromToken(req);

    productData.created_by = userId;
    console.log(productData);
    const createdProduct = await productService.createProduct(productData);

    res.status(200).json(createdProduct);
  } catch (e) {
    next(e);
  }
};

export default {
  createProduct
};
