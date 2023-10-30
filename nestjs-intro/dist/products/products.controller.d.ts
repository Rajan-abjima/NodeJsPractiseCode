import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): any;
    getAllProducts(): void;
}
