import { CategoryClass } from "@/entities/category.class";
import { Request, Response } from "express";

async function getCategorys(req: Request, res: Response) {
  try {
    const products = await CategoryClass.getCategory();
    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(500).json({ error: error.menssage });
  }
}
async function getOneCategory(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const category = await CategoryClass.getOneCategory(id);
    return res.status(200).json(category);
  } catch (error: any) {
    return res.status(500).json({ error: error.menssage });
  }
}

async function createCategory(req: Request, res: Response) {
  const { name } = req.body;
  const newCategory = await CategoryClass.createCategory(name);
  res.status(200).json(newCategory);
}

async function updateCategory(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await CategoryClass.updateCategory(name, id);
    return res.status(200).json(updatedCategory);
  } catch (error: any) {
    res.status(500).json({ error: error.menssage });
  }
}

async function deleteCategory(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedCategory = await CategoryClass.deleteCategory(id);
    return res.status(200).json(deletedCategory);
  } catch (error: any) {
    res.status(500).json({ error: error.menssage });
    console.log(error);
  }
}

const CategoryControllers = {
  getCategorys,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};

export default CategoryControllers;
