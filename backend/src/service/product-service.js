import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import "dotenv/config";

const createProduct = async (productData) => {
  try {
    const existingProduct = await prismaClient.product.findFirst({
      where: { name: productData.name }
    });

    if (existingProduct) {
      throw new ResponseError(409, "Product with the same name already exists");
    }

    const createdProduct = await prismaClient.product.create({
      data: productData
    });

    return createdProduct;
  } catch (error) {
    throw error;
  }
};

const getProduct = async () => {
  try {
    const products = await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        category: { select: { name: true } },
        price: true,
        image: true,
        status: true
      }
    });

    return products;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (productId, updatedProductData) => {
  try {
    const product = await prismaClient.product.update({
      where: { id: productId },
      data: updatedProductData
    });

    return product;
  } catch (error) {
    throw error;
  }
};

export default {
  createProduct,
  getProduct,
  updateProduct
};
