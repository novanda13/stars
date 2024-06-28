// T
import categoryService from "../service/category-service.js";

const createCategory = async (req, res, next) => {
  try {
    const categoryData = req.body;

    const newCategory = await categoryService.createCategory(categoryData);

    res.status(200).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const updatedCategoryData = req.body;

    const updatedCategory = await categoryService.updateCategory(
      categoryId,
      updatedCategoryData
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const categories = await categoryService.getCategory();

    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id;

    const deletedCategory = await categoryService.deleteCategory(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res.status(200).json({ message: "Category successfully deleted" });
  } catch (error) {
    next(error);
  }
};

export default {
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory
};
