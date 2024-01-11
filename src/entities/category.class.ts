import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryClass {
  private name: string;
  private createdAt: Date = new Date();
  private updatedAt: Date = new Date();

  constructor(name: string) {
    this.name = name;
  }

  async createCategory() {
    const newCategory = await prisma.category.create({
      data: {
        name: this.name,
      },
    });
    this.createdAt = newCategory.createdAt;
    this.updatedAt = newCategory.updatedAt;
    return newCategory;
  }
}
