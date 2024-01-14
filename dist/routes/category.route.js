"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
const category_controller_1 = require("../controllers/category.controller");
const express_1 = require("express");
exports.CategoryRouter = (0, express_1.Router)();
exports.CategoryRouter.get("/", category_controller_1.default.getCategorys);
exports.CategoryRouter.get("/:id", category_controller_1.default.getOneCategory);
exports.CategoryRouter.post("/", category_controller_1.default.createCategory);
exports.CategoryRouter.put("/:id", category_controller_1.default.updateCategory);
exports.CategoryRouter.delete("/:id", category_controller_1.default.deleteCategory);
