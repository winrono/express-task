import { Router } from 'express';
import productRepo from '../repositories/productRepository';
import reviewRepo from '../repositories/reviewRepository';
import checkToken from '../middlewares/checkToken';

const router = new Router();

//router.use(checkToken);

router.get('/', (req, res) => {
    productRepo.getProducts().then((products) => {
        res.send(products);
    });
});

router.post('/', (req, res) => {
    // const product = new Product(req.body.id, req.body.name, req.body.brand, req.body.price, req.body.reviews);
    const result = productRepo.addProduct(req.body.name, req.body.brand, req.body.price, req.body.reviews);
    res.send(result);
});

router.get('/:id', (req, res) => {
    productRepo.getProductById(req.params.id).then((product) => {
        res.send(product);
    });
});

router.get('/:id/reviews', (req, res) => {
    reviewRepo.getReviewsByProductId(req.params.id).then((reviews) => {
        res.send(reviews);
    });
});


export default router;