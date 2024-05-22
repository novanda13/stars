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

const getProduct = async (req, res, next) => {
  try {
    const products = await productService.getProduct();

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const updatedProductData = req.body;

    const updatedProduct = await productService.updateProduct(
      productId,
      updatedProductData
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await productService.deleteProduct(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct
};
