import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

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

export default {
  createProduct
};
