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

// update
const updateCategory = async (categoryId, updatedCategoryData) => {
  try {
    const updatedCategory = await prismaClient.category.update({
      where: { id: categoryId },
      data: updatedCategoryData
    });

    return updatedCategory;
  } catch (error) {
    throw error;
  }
};

// get

const getCategory = async () => {
  try {
    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true
      }
    });

    return categories;
  } catch (error) {
    throw error;
  }
};

// delete

export default {
  createCategory,
  updateCategory,
  getCategory
};
