import ProductConstrollers from "@/controllers/product.controller";
import { Router } from "express";

export const ProductRouter = Router();

ProductRouter.get("/", ProductConstrollers.getProducts);
ProductRouter.get("/:id", ProductConstrollers.getOneProduct);
ProductRouter.post("/:categoryId", ProductConstrollers.crateProduct);
ProductRouter.put("/:id", ProductConstrollers.updateProduct);
ProductRouter.delete("/:id", ProductConstrollers.deleteProduct);
