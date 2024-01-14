import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryClass {
  static async createCategory(name: string) {
    const newCategory = await prisma.category.create({
      data: {
        name,

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
      include: { products: true },
    });
    return category;
  }

  static async deleteCategory(id: string) {
    await prisma.product.deleteMany({ where: { categoryId: id } });
    const deletedCategory = await prisma.category.delete({ where: { id } });
    return deletedCategory;
  }
}
