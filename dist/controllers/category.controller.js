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
const category_class_1 = require("../entities/category.class");
function getCategorys(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield category_class_1.CategoryClass.getCategory();
            return res.status(200).json(products);
        }
        catch (error) {
            return res.status(500).json({ error: error.menssage });
        }
    });
}
function getOneCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const category = yield category_class_1.CategoryClass.getOneCategory(id);
            return res.status(200).json(category);
        }
        catch (error) {
            return res.status(500).json({ error: error.menssage });
        }
    });
}
function createCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = req.body;
        const newCategory = yield category_class_1.CategoryClass.createCategory(name);
        res.status(200).json(newCategory);
    });
}
function updateCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { name } = req.body;
        try {
            const updatedCategory = yield category_class_1.CategoryClass.updateCategory(name, id);
            return res.status(200).json(updatedCategory);
        }
        catch (error) {
            res.status(500).json({ error: error.menssage });
        }
    });
}
function deleteCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const deletedCategory = yield category_class_1.CategoryClass.deleteCategory(id);
            return res.status(200).json(deletedCategory);
        }
        catch (error) {
            res.status(500).json({ error: error.menssage });
            console.log(error);
        }
    });
}
const CategoryControllers = {
    getCategorys,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};
exports.default = CategoryControllers;
