"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const product_controller_1 = require("../controllers/product.controller");
const express_1 = require("express");
exports.ProductRouter = (0, express_1.Router)();
exports.ProductRouter.get("/", product_controller_1.default.getProducts);
exports.ProductRouter.get("/:id", product_controller_1.default.getOneProduct);
exports.ProductRouter.post("/:categoryId", product_controller_1.default.crateProduct);
exports.ProductRouter.put("/:id", product_controller_1.default.updateProduct);
exports.ProductRouter.delete("/:id", product_controller_1.default.deleteProduct);
