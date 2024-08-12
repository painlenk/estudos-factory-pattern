import { ProductRepository, productRepository } from "../repository/productRepository";

class ProductController {
    
    constructor(private product: ProductRepository) {}

    public getProduct() {
        return this.product
    }
}

const productController = new ProductController(productRepository)
export {productController, ProductController}