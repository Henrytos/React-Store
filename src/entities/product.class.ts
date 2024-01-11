import { PrismaClient, Product } from "@prisma/client"

const prisma = new PrismaClient()

export class ProductClass {
  private name: string
  private price: number
  private description: string
  private categoryId: string

  constructor(
    name: string,
    price: number,
    description: string,
    categoryId: string
  ) {
    this.name = name
    this.price = price
    this.description = description
    this.categoryId = categoryId
  }

  async createProduct() {
    const newProduct = await prisma.product.create({
      data: {
        name: this.name,
        price: this.price,
        description: this.description,
        categoryId: this.categoryId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    return newProduct
  }

  static async updateProduct(id: string, product: Product) {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { ...product },
    })

    return updatedProduct
  }

  static async deleteProduct(id: string) {
    const deleteProduct = await prisma.product.delete({
      where: { id },
    })

    return deleteProduct
  }

  static async getOneProduct(id: string) {
    const product = await prisma.product.findUnique({ where: { id } })

    return product
  }

  static async getProducts() {
    const products = await prisma.product.findMany()
    return products
  }
}
