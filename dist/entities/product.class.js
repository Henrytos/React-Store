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
exports.ProductClass = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProductClass {
    constructor(name, price, description, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
    createProduct(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = yield prisma.product.create({
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
        });
    }
    static updateProduct(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProduct = yield prisma.product.update({
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
        });
    }
    static deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProduct = yield prisma.product.delete({
                where: { id },
            });
            return deletedProduct;
        });
    }
    static getOneProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield prisma.product.findUnique({
                where: { id },
                include: { category: true },
            });
            return product;
        });
    }
    static getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield prisma.product.findMany({
                include: { category: true },
            });
            return products;
        });
    }
}
exports.ProductClass = ProductClass;
