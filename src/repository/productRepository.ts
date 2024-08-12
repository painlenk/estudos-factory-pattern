class ProductRepository {

    private product01 = {
        name: 'produto teste',
        price: 1500,
    }

    public getProduct() {
        return this.product01
    }
}

 const productRepository = new ProductRepository()

 export {productRepository, ProductRepository}