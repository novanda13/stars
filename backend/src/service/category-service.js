import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import "dotenv/config";

const createCategory = async (categoryData) => {
  try {
    const existingCategory = await prismaClient.category.findFirst({
      where: { name: categoryData.name }
    });

    if (existingCategory) {
      throw new Error("Category already exists");
    }

    const newCategory = await prismaClient.category.create({
      data: categoryData
    });

    return newCategory;
  } catch (error) {
    throw error;
  }
};

export default {
  createCategory
};
