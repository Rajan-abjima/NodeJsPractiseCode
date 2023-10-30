"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var products_service_1 = require("./products.service");
var ProductsController = (function () {
    function ProductsController(productService) {
        this.productService = productService;
    }
    ProductsController.prototype.addProduct = function (prodTitle, prodDesc, prodPrice) {
        var generatedID = this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { id: generatedID };
    };
    ProductsController.prototype.getAllProducts = function () {
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body('title')),
        __param(1, common_1.Body('description')),
        __param(2, common_1.Body('price')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Number]),
        __metadata("design:returntype", Object)
    ], ProductsController.prototype, "addProduct");
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "getAllProducts");
    ProductsController = __decorate([
        common_1.Controller('products'),
        __metadata("design:paramtypes", [products_service_1.ProductsService])
    ], ProductsController);
    return ProductsController;
}());
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map