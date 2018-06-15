class ProductRepository{
    constructor(){
        this.products = [];
    }
    getProducts(){
        return this.products;
    }
    getProductById(id){
        //using == to handle both string and number use cases
        return this.products.find((product) => product.id == id);
    }
    addProduct(product){
        const existingProduct = this.getProductById(product.id);
        if (existingProduct){
            return false;
        }else {
            this.products.push(product);
            return true;
        }
    }
}

export default new ProductRepository();