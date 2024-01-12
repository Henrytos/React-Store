import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryClass {
  static async createCategory(name: string) {
    const newCategory = await prisma.category.create({
      data: {
        name,
        quantity: 0,
      },
    });
    return newCategory;
  }
}
