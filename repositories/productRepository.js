import { Product, Review } from '../models';

class ProductRepository {
    async getProducts() {
        const products = await Product.all({
            include: [
                Review
            ]
        });
        return products;
    }
    async getProductById(id) {
        const product = await Product.findById(id);
        return product;
    }
    async addProduct(name, brand, price, reviews) {
        const createdReviews = await Promise.all(reviews.map((review) => {
            return Review.create({ description: review.description });
        }));
        const product = await Product.create({ name: name, brand: brand, price: price });
        product.setReviews(createdReviews);
    }
}

export default new ProductRepository();