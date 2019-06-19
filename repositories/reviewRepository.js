import { Product, Review } from '../models';

class ReviewRepository {
    async getReviewsByProductId(id) {
        const reviews = await Review.findAll({
            where: {
                ProductId: id
            }
        });
        return reviews;
    }
}

export default new ReviewRepository();