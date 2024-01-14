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
const product_class_1 = require("../entities/product.class");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield prisma.product.findMany();
            return res.status(200).json(products);
        }
        catch (error) {
            return res.status(500).json({ error: error.menssage });
        }
    });
}
function getOneProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = product_class_1.ProductClass.getOneProduct(req.params.id);
        return res.status(200).json(product);
    });
}
function crateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { categoryId } = req.params;
        const { name, price, description, quantity } = req.body;
        try {
            const instanceProduct = new product_class_1.ProductClass(name, price, description, quantity);
            const newProduct = instanceProduct.createProduct(categoryId);
            return res.status(200).json(newProduct);
        }
        catch (error) {
            return res.status(500).json({ error: error.menssage });
        }
    });
}
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const product = req.body;
        const productUpdate = yield product_class_1.ProductClass.updateProduct(id, product);
        res.status(200).json(productUpdate);
    });
}
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const productDelete = yield product_class_1.ProductClass.deleteProduct(id);
        res.status(200).json(productDelete);
    });
}
const ProductConstrollers = {
    getProducts,
    getOneProduct,
    crateProduct,
    updateProduct,
    deleteProduct,
};
exports.default = ProductConstrollers;
