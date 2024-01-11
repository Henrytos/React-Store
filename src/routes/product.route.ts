import { ProductConstroller } from "@/controllers/product.controller"
import { Router } from "express"

export const ProductRouter = Router()

ProductRouter.get("/", ProductConstroller.getProducts)
ProductRouter.get("/:id", ProductConstroller.getOneProduct)
ProductRouter.post("/", ProductConstroller.crateProduct)
ProductRouter.put("/:id", ProductConstroller.updateProduct)
ProductRouter.delete("/:id", ProductConstroller.deleteProduct)
