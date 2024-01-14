"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryClass = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CategoryClass {
    static createCategory(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategory = yield prisma.category.create({
                data: {
                    name,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
            return newCategory;
        });
    }
    static getCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            const categorys = yield prisma.category.findMany({
                include: { products: true },
            });
            return categorys;
        });
    }
    static updateCategory(name, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCategory = yield prisma.category.update({
                where: { id },
                data: {
                    name,
                    updatedAt: new Date(),
                },
            });
            return updatedCategory;
        });
    }
    static getOneCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield prisma.category.findUnique({
                where: { id },
                include: { products: true },
            });
            return category;
        });
    }
    static deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma.product.deleteMany({ where: { categoryId: id } });
            const deletedCategory = yield prisma.category.delete({ where: { id } });
            return deletedCategory;
        });
    }
}
exports.CategoryClass = CategoryClass;
