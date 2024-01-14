import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProductClass {
  private name: string;
  private price: number;
  private description: string;
  private quantity: number;

  constructor(
    name: string,
    price: number,
    description: string,
    quantity: number
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }

  async createProduct(categoryId: string) {
    const newProduct = await prisma.product.create({
      data: {
        name: this.name,
        price: this.price,
        description: this.description,
        quantity: this.quantity,
        category: {
          connect: { id: categoryId },
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return newProduct;
  }

  static async updateProduct(id: string, product: any) {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: product.name,
        price: product.price,
        description: product.description,
        category: {
          connect: { id: product.categoryId },
        },
        updatedAt: new Date(),
      },
    });

    return updatedProduct;
  }

  static async deleteProduct(id: string) {
    const deletedProduct = await prisma.product.delete({
      where: { id },
    });

    return deletedProduct;
  }

  static async getOneProduct(id: string) {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });

    return product;
  }

  static async getProducts() {
    const products = await prisma.product.findMany({
      include: { category: true },
    });
    return products;
  }
}
