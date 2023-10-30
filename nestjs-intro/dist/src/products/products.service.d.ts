import { Product } from "./product.model";
export declare class ProductsService {
    products: Product[];
    insertProduct(title: string, desc: string, price: number): string;
}
