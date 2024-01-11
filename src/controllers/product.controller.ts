import { ProductClass } from "@/entities/product.class"
import { PrismaClient, Product } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

async function getProducts(req: Request, res: Response) {
  try {
    const products: Product[] = await prisma.product.findMany()
    return res.status(200).json(products)
  } catch (error: any) {
    return res.status(500).json({ error: error.menssage })
  }
}

async function getOneProduct(req: Request, res: Response) {
  const product = ProductClass.getOneProduct(req.params.id)
  return res.status(200).json(product)
}

async function crateProduct(req: Request, res: Response) {
  const product: Product = req.body

  try {
    const { name, price, categoryId, description } = product
    const instanceProduct = new ProductClass(
      name,
      price,
      description,
      categoryId
    )

    const newProduct = instanceProduct.createProduct()
    return res.status(200).json(newProduct)
  } catch (error: any) {
    return res.status(500).json({ error: error.menssage })
  }
}

async function updateProduct(req: Request, res: Response) {
  const { id } = req.params
  const product: Product = req.body
  const productUpdate = await ProductClass.updateProduct(id, product)
  res.status(200).json(productUpdate)
}

async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params
  const productDelete = await ProductClass.deleteProduct(id)
  res.status(200).json(productDelete)
}

export const ProductConstroller = {
  getProducts,
  getOneProduct,
  crateProduct,
  updateProduct,
  deleteProduct,
}
