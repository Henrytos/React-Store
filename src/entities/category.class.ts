import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryClass {
  static async createCategory(name: string) {
    const newCategory = await prisma.category.create({
      data: {
        name,
        quantity: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newCategory;
  }

  static async getCategory() {
    const categorys = await prisma.category.findMany({
      include: { products: true },
    });
    return categorys;
  }

  static async updateCategory(name: string, id: string) {
    const updatedCategory = await prisma.category.update({
      where: { id },
      data: {
        name,
        updatedAt: new Date(),
      },
    });
    return updatedCategory;
  }

  static async getOneCategory(id: string) {
    const category = await prisma.category.findUnique({
      where: { id },
    });
    return category;
  }

  static async deleteCategory(id: string) {
    const deletedCategory = await prisma.category.delete({ where: { id } });
    await prisma.product.deleteMany({ where: { categoryId: id } });
    return deletedCategory;
  }
}
