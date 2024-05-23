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

export default {
  createCategory
};
