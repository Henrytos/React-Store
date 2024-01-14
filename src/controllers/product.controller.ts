import { ProductClass } from "@/entities/product.class";
import { PrismaClient, Product } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

async function getProducts(req: Request, res: Response) {
  try {
    const products: Product[] = await prisma.product.findMany();
    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(500).json({ error: error.menssage });
  }
}

async function getOneProduct(req: Request, res: Response) {
  const product = ProductClass.getOneProduct(req.params.id);
  return res.status(200).json(product);
}

async function crateProduct(req: Request, res: Response) {
  const { categoryId } = req.params;
  const { name, price, description, quantity } = req.body;
  try {
    const instanceProduct = new ProductClass(
      name,
      price,
      description,
      quantity
    );

    const newProduct = instanceProduct.createProduct(categoryId);
    return res.status(200).json(newProduct);
  } catch (error: any) {
    return res.status(500).json({ error: error.menssage });
  }
}

async function updateProduct(req: Request, res: Response) {
  const { id } = req.params;
  const product: Product = req.body;
  const productUpdate = await ProductClass.updateProduct(id, product);
  res.status(200).json(productUpdate);
}

async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  const productDelete = await ProductClass.deleteProduct(id);
  res.status(200).json(productDelete);
}

const ProductConstrollers = {
  getProducts,
  getOneProduct,
  crateProduct,
  updateProduct,
  deleteProduct,
};

export default ProductConstrollers;
