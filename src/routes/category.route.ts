import CategoryControllers from "@/controllers/category.controller";
import { Router } from "express";

export const CategoryRouter = Router();

CategoryRouter.get("/", CategoryControllers.getCategorys);
CategoryRouter.get("/:id", CategoryControllers.getOneCategory);
CategoryRouter.post("/", CategoryControllers.createCategory);
CategoryRouter.put("/:id", CategoryControllers.updateCategory);
CategoryRouter.delete("/:id", CategoryControllers.deleteCategory);
